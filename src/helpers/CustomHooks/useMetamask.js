import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    reset,
    saveToken,
    saveUserAddress,
} from "../../redux/slice/user.slice";
import { toast } from "react-toastify";
import { MESSAGES } from "../Constants/constant";

export const useMetmask = () => {
    const [isNetworkSupport, setIsNetworkSupport] = useState(true);
    const user = useSelector((state) => state.user.userAddress);
    const dispatch = useDispatch();
    const chainId = window.ethereum.chainId;

    useEffect(() => {
        subscribeToAccountListner();
        if (chainId !== "0x5" && chainId !== "0x1") {
            setIsNetworkSupport(false);
            forceSwitchNetwork();
        }
    }, []);

    const subscribeToAccountListner = () => {
        window?.ethereum?.on("accountsChanged", (accounts) => {
            onUserConnDisc(accounts);
        });
        window?.ethereum?.on("chainChanged", async (chainId) => {
            if (chainId !== "0x5" && chainId !== "0x1") {
                setIsNetworkSupport(false);
                setTimeout(async () => {
                    await forceSwitchNetwork();
                }, 2000);
            }
        });
    };
    const forceSwitchNetwork = async () => {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: "0x1",
                },
            ],
        });
        setIsNetworkSupport(true);
    };

    const connectMetamask = async () => {
        if (window.ethereum) {
            try {
                if (chainId !== "0x1" && chainId !== "0x5") await forceSwitchNetwork();
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                onUserConnDisc(accounts);
            } catch (error) {
                console.log({ error });
            }
        } else {
            toast.error(MESSAGES.WARNINGS.INSTALL_METAMASK);
        }
    };

    const onUserConnDisc = (accounts) => {
        if (accounts.length > 0) {
            dispatch(saveUserAddress(accounts[0]));
            dispatch(saveToken({}));
        } else {
            dispatch(reset());
        }
    };

    return { user, connectMetamask, onUserConnDisc, isNetworkSupport };
};
