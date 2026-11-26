"use client";

import toast from "react-hot-toast";

/* eslint-disable @typescript-eslint/no-explicit-any */
// import PaystackPop from "@paystack/inline-js";
type PaystackProps = {
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  amount: number; // amount in Naira
  reference: string;
  onSuccess: (reference: any) => void;
  onClose: () => void;
};

export const usePaystackPayment = () => {
  const initializePayment = async ({
    email,
    firstName,
    lastName,
    phoneNumber,
    amount,
    onSuccess,
    onClose,
  }: PaystackProps) => {
    // 1. Dynamic import on-demand so it never runs on the server
    const PaystackPopModule = await import("@paystack/inline-js");
    const PaystackPop = PaystackPopModule.default;

    // 2. Instantiate and initiate transaction
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: process.env.NEXT_PUBLIC_PK_LIVE || "", // 🔁 Replace with your Paystack public key
      email,
      amount: amount * 100, // convert to kobo
      currency: "NGN",
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
      onSuccess: (transaction: any) => {
        onSuccess(transaction);
      },
      onCancel() {
        onClose();
      },
      onError(error) {
        toast.error(error.message);
      },
    });
  };

  return initializePayment;
};
