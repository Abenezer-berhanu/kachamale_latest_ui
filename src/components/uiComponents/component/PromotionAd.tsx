import React from "react";
import PromotionAdForm from "./PromotionAdForm";

function PromotionAd() {
  return (
    <div className="text-center flex flex-col gap-8">
      <b className="text-2xl text-black/80">Create Promotion Ad</b>
      <PromotionAdForm />
    </div>
  );
}

export default PromotionAd;
