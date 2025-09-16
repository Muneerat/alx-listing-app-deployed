// import Card from "@/components/common/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/common/Card";
import { allProducts } from "@/constants";
import Link from "next/link";
import Main from "@/components/layout/Main";
import ProductsTabs from "@/components/property/productTabs";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? allProducts
      : allProducts.filter((product) => product.categories.includes(activeTab));

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.log("error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <Main />
      <ProductsTabs />
      <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 max-w-[1350] mx-auto py-4">
        {filteredProducts.map((filteredProduct, index) => (
          <Link
            key={filteredProduct.id}
            href={`/property/${filteredProduct.id}`}
          >
            <PropertyCard
              key={index}
              image={filteredProduct.img}
              categories={filteredProduct.categories}
              shower={filteredProduct.shower}
              room={filteredProduct.room}
              person={filteredProduct.person}
              price={filteredProduct.price}
              name={filteredProduct.name}
              location={filteredProduct.location}
              discount={filteredProduct.discount}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
