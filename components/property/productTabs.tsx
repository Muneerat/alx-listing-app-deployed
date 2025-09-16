import { Filter } from "lucide-react";
import { useState } from "react";
import Card from "../common/Card";
import { allProducts } from "@/constants";
import Home from "@/pages";

const ProductsTabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = [
    "All",
    "Top Villa",
    "Free Schedule",
    "Book Now Pay Later",
    "Self CheckIn",
    "Instant Book",
  ];
 const filteredProducts =
  activeTab === "All"
    ? allProducts
    : allProducts.filter((product) => product.categories.includes(activeTab));

  return (
    <div className="max-w-[1350] mx-auto flex flex-col">
      <div className="flex gap-3 flex-wrap my-8 justify-between">
        <div className=" flex gap-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm transition-colors cursor-pointer 
                border ${
                  activeTab === tab
                    ? "border-[#34967C] text-[#34967C] bg-[#F0FFFB]"
                    : "border-[#E9E9E9] text-black bg-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap">
          <button
            className={`px-4 py-2 rounded-full text-sm transition-colors flex gap-2 border  border-[#E9E9E9] text-black bg-white`}
          >
            Filter <Filter size={20} />
          </button>
          <div>
            <button
              className={`px-4 py-2 rounded-full text-sm transition-colors flex gap-2 border  border-[#E9E9E9] text-black bg-white`}
            >
              <span>Sort by:</span> Highest Price
            </button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ProductsTabs;
