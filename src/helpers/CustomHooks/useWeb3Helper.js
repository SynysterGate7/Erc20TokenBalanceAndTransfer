
import Web3 from "web3";
import contarctABI from "../../ABI/ContractABI.json"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "../../redux/slice/user.slice";
import { MESSAGES } from "../Constants/constant";



export const useWeb3Helper = (value) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [latestTrxnHash, setLatestTrxnHash] = useState("")

    const token = useSelector((state) => state.user.token)
    const userAddress = useSelector((state) => state.user.userAddress)
    const balance = token.balance
    const symbol = token?.symbol



    useEffect(() => {
        dispatch(saveToken({}))
    }, [value])


    const checkProvider = () => new Promise((resolve, reject) => {
        if (typeof window.ethereum === 'undefined') reject({ message: MESSAGES.WARNINGS.INSTALL_METAMASK })
        const { ethereum } = window;
        resolve(new Web3(ethereum))
    })


    const getTokenBalance = async (tokenAddress) => {
        setLoading(true)
        try {
            const web3 = await checkProvider()
            if (!userAddress) throw ({ message: MESSAGES.WARNINGS.CONNECT_WALLET })
            const contract = new web3.eth.Contract(contarctABI, tokenAddress)

            const [bal, decimal, symbol] = await Promise.all([
                contract.methods
                    .balanceOf(userAddress)
                    .call(),
                contract.methods
                    .decimals(userAddress)
                    .call(),
                contract.methods
                    .symbol()
                    .call()
            ])

            dispatch(saveToken({
                balance: Number(bal) / 10 ** Number(decimal),
                tokenAddress, symbol
            }))
            setLoading(false)

        } catch (error) {
            toast.error(error?.message || MESSAGES.ERRORS.SOMETHING_WRONG)
            setLoading(false)
        }
    }

    const transferToken = async (recepAddress, amount) => {
        try {
            if (Object.keys(token).length === 0) throw ({ message: MESSAGES.WARNINGS.SUBMIT_TOKEN })
            await getTokenBalance(token.tokenAddress)
            setLoading(true)

            if (+balance < +amount) throw ({ message: MESSAGES.ERRORS.INSUFF_BALANCE })
            const web3 = await checkProvider()

            const value = web3.utils.toWei(amount.toString(), 'ether')

            const contractObject = new web3.eth.Contract(contarctABI, token.tokenAddress)

            await contractObject.methods.transfer(recepAddress, value).send({ from: userAddress }).on('receipt', function () {
                toast.success(MESSAGES.SUCCESS.TRXN_CONF_SUCCESS)
                setLoading(false)
            }).on('transactionHash', function (hash) {
                setLatestTrxnHash(hash)
                toast.success(MESSAGES.SUCCESS.SUCC_WAIT_CONF, {
                    autoClose: 10000,
                    closeOnClick: false,
                    pauseOnHover: true
                })
            })


        } catch (error) {
            toast.error(error?.message || MESSAGES.ERRORS.SOMETHING_WRONG)
            setLoading(false)

        }
    }


    return { getTokenBalance, balance, loading, transferToken, symbol, latestTrxnHash }
}
