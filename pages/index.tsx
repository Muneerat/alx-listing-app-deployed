
// import Card from "@/components/common/Card";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      try{
        const response = await axios.get("/api/properties");
        setProperties(response.data);

      }catch (error) {
        console.log("error fetchin properties:", error);
      }finally{
        setLoading(false)
      }
    }
    fetchProperties();

  },[])

  if(loading) {
    return <p>Loadin</p>
  }
  if (properties) return <p>t</p>
  return (
   <div className="grid grid-cols-3 gap-4">
    {/* {properties.map((property) => (
      <PropertyCard key={property.id} property={property} />
    ))} */}
   </div>
  );
}
