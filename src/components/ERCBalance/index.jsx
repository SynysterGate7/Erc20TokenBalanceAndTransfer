import React from "react";
import Button from "../button";
import Input from "../input";
import { useFormik } from "formik";
import { useWeb3Helper } from "../../helpers/CustomHooks/useWeb3Helper";
import Balance from "../Balance";
import * as Yup from "yup";
import { isAddress } from "web3-validator";

export default function ERCBalance() {
  const validationSchema = Yup.object().shape({
    address: Yup.string()
      .required("Address is required!")
      .test((value) => isAddress(value)),
  });
  const formik = useFormik({
    initialValues: {
      address: "",
    },
    validationSchema,
    onSubmit: (values) => {
      getTokenBalance(values.address);
    },
  });
  const { getTokenBalance, balance, loading, symbol } = useWeb3Helper(
    formik.values.address
  );
  return (
    <div className="w-full mb-4">
      <h1 className="text-center text-2xl text-black font-semibold leading-9 mb-4">
        ERC20 Token Balance
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-5 max-w mx-auto rounded-lg bg-[#F4F6F8] shadow-md">
          <Input
            label="Ethereum Address"
            name="address"
            placeholder="Enter Ethereum address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.errors.address}
          />
          <Button
            text="Submit"
            type="submit"
            loading={loading}
            disabled={Object.keys(formik.errors).length > 0 || loading}
            className="mr-4 mt-5 py-3 px-8 text-base"
          />
        </div>
      </form>
      <div className="pt-5">
        {balance !== undefined && <Balance balance={balance} symbol={symbol} />}
      </div>
    </div>
  );
}
