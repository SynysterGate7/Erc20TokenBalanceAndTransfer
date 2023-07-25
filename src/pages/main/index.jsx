import React from "react";
import ERCBalance from "../../components/ERCBalance";
import ERCTransfer from "../../components/ERCTransfer";

export default function Main() {
  return (
    <div className="max-w-[540px] items-center mx-auto">
      <div className="mt-20 mb-20">
        <ERCBalance />
      </div>
      <div className="mb-20">
        <ERCTransfer />
      </div>
    </div>
  );
}
