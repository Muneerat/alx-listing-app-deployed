
import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // interface BookingFormData {
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   phoneNumber: string;
  //   cardNumber: string;
  //   expirationDate: string;
  //   cvv: string;
  //   billingAddress: string;
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {

    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/bookings", formData);
      console.log("Booking successful:", response.data);
 
    
    } catch (error) {
       console.error("Booking failed:", error);
      setError("Failed to submit booking.");


    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for booking details */}
       {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>First Name</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Email</label>
          <input type="email" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label>Card Number</label>
        <input type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>CVV</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label>Street Address</label>
        <input type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>City</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>State</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Country</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Submit Button */}
    
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

// import BookingForm from "@/components/booking/BookingForm";
// import OrderSummary from "@/components/booking/OrderSummary";

// export default function BookingPage() {
//   const bookingDetails = {
//     propertyName: "Villa Arrecife Beach House",
//     price: 7500,
//     bookingFee: 65,
//     totalNights: 3,
//     startDate: "24 August 2024",
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-2 gap-6">
//         <BookingForm />
//         <OrderSummary bookingDetails={bookingDetails} />
//       </div>
//     </div>
//   );
// }
