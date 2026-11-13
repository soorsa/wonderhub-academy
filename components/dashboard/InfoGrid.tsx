import Button from "@/components/global/Button";
import { formatPrice } from "@/utils/format.utils";
import { Info, Wallet2 } from "lucide-react";

const InfoGrid = () => {
  return (
    <div className="grid md:grid-cols-5 gap-2 md:gap-4">
      <div className="md:col-span-3 grid gap-2 md:gap-4">
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div className="bg-white rounded-3xl p-6 w-full">
            <p className="text-gray-500 font-semibold mb-2">Total bought </p>
            <p className="text-xl font-bold truncate">20 courses</p>
          </div>
          <div className="bg-white rounded-3xl p-6 w-full">
            <p className="text-gray-500 font-semibold mb-2">Wishlist</p>
            <p className="text-xl font-bold truncate">20 courses</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div className="bg-white rounded-3xl p-6 w-full">
            <p className="text-gray-500 font-semibold mb-2">Completed</p>
            <p className="text-xl font-bold truncate">20 courses</p>
          </div>
          <div className="bg-white rounded-3xl p-6 w-full">
            <p className="text-gray-500 font-semibold mb-2">In Progress</p>
            <p className="text-xl font-bold truncate">20 courses</p>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 bg-white rounded-2xl p-5 space-y-7">
        <div className="text-gray-500 font-bold">Wallet Balance</div>
        <div className="text-4xl font-adron-mid">{formatPrice(40000)}</div>
        <div className="space-y-2">
          <div className="text-xs text-gray-500 flex gap-1">
            <Info size={15} />
            <div className="">
              fund wallet using your preferred payment method
            </div>
          </div>
          <Button
            label="Fund Wallet"
            className="w-2/3! px-7 text-white"
            icon={<Wallet2 size={18} />}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
