import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PropertyDetailPage(){
    const router = useRouter()
    const {id} = router.query;
    console.log(id, "id")
    const [property, setProperty] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const fetchProperty = async () => {
            if(!id) return;
            try{
                const response = await axios.get(`/api/properties/${id}`);
                setProperty(response.data);
            }catch (error) {
                console.error("error fetching property details:", error);
            }finally{
                setLoading(false);
            }
        }
         fetchProperty()
    },[id])

    if(loading){
        return <p>Loading...</p>;

    }
    if(!property){
        return <p>Property not found</p>
    }

    return <div>here</div>
    // <PropertyDetail property={property} />
}
// app/properties/[id]/page.jsx

// export default function PropertyDetailPage() {
//   const { id } = useParams; // Get the dynamic ID from the URL

//   // Find the product that matches the ID
//   const product = allProducts.find((p) => p.id === parseInt(id));

//   // Handle case where product is not found
//   if (!product) {
//     return <div>Property not found.</div>;
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//       <div className="flex flex-col md:flex-row gap-8">
//         <img src={product.img} alt={product.name} className="w-full md:w-1/2 rounded-lg shadow-md" />
//         <div className="flex-1">
//           <p>
//             **Location:** {product.location}
//           </p>
//           <p>
//             **Price:** ${product.price}
//           </p>
//           <p>
//             **Rooms:** {product.room}
//           </p>
//           {/* Add more details here */}
//         </div>
//       </div>
//     </div>
//   );
// }