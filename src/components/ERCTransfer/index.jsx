import React from "react";
import Input from "../input";
import Button from "../button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useWeb3Helper } from "../../helpers/CustomHooks/useWeb3Helper";
import { isAddress } from "web3-validator";
import CommonBox from "../CommonBox";

export default function ERCTransfer() {
  const { loading, transferToken, latestTrxnHash } = useWeb3Helper();

  const validationSchema = Yup.object().shape({
    recepAddress: Yup.string()
      .required("Recipient's address is required!")
      .test("", "Invalid recipient address", (value) => isAddress(value)),
    amount: Yup.number()
      .required("Amount is required!")
      .positive("Amount should be postive integer"),
  });
  const formik = useFormik({
    initialValues: {
      recepAddress: "",
      amount: "",
    },
    validationSchema,

    onSubmit: (values) => {
      transferToken(values.recepAddress, values.amount);
    },
  });
  return (
    <div className="">
      <h1 className="text-center text-2xl text-black font-semibold leading-9  mb-5">
        Transfer ERC20 Tokens
      </h1>
      <div className="p-5 max-w mx-auto rounded-lg bg-[#F4F6F8] shadow-md">
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Recipient's Ethereum Address"
            name="recepAddress"
            placeholder="Enter Ethereum address"
            onChange={formik.handleChange}
            values={formik.values}
            error={formik.errors.recepAddress}
          />

          <Input
            label="Token Amount"
            name="amount"
            placeholder="Enter token amount"
            className="mt-5"
            onChange={formik.handleChange}
            values={formik.values}
            error={formik.errors.amount}
          />

          <Button
            text="Transfer"
            type="submit"
            loading={loading}
            disabled={loading || Object.keys(formik.errors).length > 0}
            className="mr-4 mt-5 py-3 px-8 text-base"
          />
        </form>
      </div>
      {latestTrxnHash && <CommonBox hash={latestTrxnHash} />}
    </div>
  );
}
