import { useState } from "react";
import {
   ChevronRightIcon,
   PencilIcon,
   TrashIcon,
   MapPinIcon,
   PlusIcon,
   ArrowRightIcon,
} from "@heroicons/react/24/outline";

function Address() {
   const [showForm, setShowForm] = useState(false);
   const [addresses, setAddresses] = useState([]);
   const [formData, setFormData] = useState({
      country: "India",
      fullName: "",
      mobile: "",
      flat: "",
      area: "",
      landmark: "",
      pincode: "",
      city: "",
   });
   const [editIndex, setEditIndex] = useState(null);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSave = () => {
      if (
         !formData.fullName ||
         !formData.mobile ||
         !formData.flat ||
         !formData.area ||
         !formData.pincode ||
         !formData.city
      ) {
         alert("Please fill all required fields");
         return;
      }

      if (editIndex !== null) {
         const updatedAddresses = [...addresses];
         updatedAddresses[editIndex] = formData;
         setAddresses(updatedAddresses);
         setEditIndex(null);
      } else {
         setAddresses([...addresses, formData]);
      }

      setFormData({
         country: "India",
         fullName: "",
         mobile: "",
         flat: "",
         area: "",
         landmark: "",
         pincode: "",
         city: "",
      });
      setShowForm(false);
   };

   const handleEdit = (index) => {
      setFormData(addresses[index]);
      setEditIndex(index);
      setShowForm(true);
   };

   const handleRemove = (index) => {
      setAddresses(addresses.filter((_, i) => i !== index));
   };

   return (
      <>
         {/* MOBILE VIEW */}
         <div className="md:hidden">
            <div className="flex m-3 border-b border-gray-400 pb-2 pt-4">
               <h1 className="text-2xl text-black font-semibold">Your Addresses</h1>
            </div>

            <div
               className="flex justify-between items-center m-3 border-b border-gray-400 pb-4 cursor-pointer"
               onClick={() => {
                  setShowForm(true);
                  setEditIndex(null);
               }}
            >
               <p className="text-[17px] text-black">Add a new address</p>
               <ChevronRightIcon className="h-[23px] text-black font-bold" />
            </div>

            <div className="flex m-3">
               <h1 className="text-xl text-black font-semibold">
                  Personal Addresses
               </h1>
            </div>

            <div className="p-3 space-y-3">
               {addresses.map((addr, index) => (
                  <div
                     key={index}
                     className="border rounded-md p-3 shadow-md bg-white"
                  >
                     <p className="font-semibold">{addr.fullName}</p>
                     <p>
                        {addr.flat}, {addr.area}
                     </p>
                     {addr.landmark && <p>{addr.landmark}</p>}
                     <p>
                        {addr.city}, {addr.pincode}
                     </p>
                     <p>{addr.country}</p>
                     <p>Phone number: {addr.mobile}</p>
                     <p className="text-blue-800 font-normal text-[17px]">
                        Add delivery instructions
                     </p>

                     <div className="flex mt-4 mb-5 gap-2">
                        <MapPinIcon className="h-6 text-red-500" /> Updated delivery
                        location
                     </div>

                     <div className="flex gap-3 mt-2 text-black text-[16px]">
                        <button
                           onClick={() => handleEdit(index)}
                           className="flex items-center gap-1 border border-black p-[8px] rounded-[20px]"
                        >
                           <PencilIcon className="h-4" /> Edit
                        </button>
                        <button
                           onClick={() => handleRemove(index)}
                           className="flex items-center gap-1 border border-black p-[8px] rounded-[20px]"
                        >
                           <TrashIcon className="h-4" /> Remove
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* LAPTOP VIEW */}
         <div className="hidden md:block p-6 mt-[130px] ml-[200px]">
            <p className = "flex text-gray-600 mb-4">Your Account <ChevronRightIcon className="h-3 w-6 text-gray-800 mt-2" />
               <span className = "text-yellow-600">Your Addresses</span></p>
            <h1 className="text-2xl font-semibold mb-6">Your Addresses</h1>
            <div className="grid grid-cols-3 gap-6 h-[40vh] w-[70vw]">
               {/* Add Address Card */}
               <div
                  onClick={() => {
                     setShowForm(true);
                     setEditIndex(null);
                  }}
                  className="border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-50"
               >
                  <PlusIcon className="h-10 w-10 text-gray-600" />
                  <p className="mt-2 text-3xl text-gray-500 font-bold">Add Address</p>
               </div>

               {/* Saved Addresses */}
               {addresses.map((addr, index) => (
                  <div
                     key={index}
                     className="border rounded-lg p-4 shadow-md bg-white"
                  >
                     <p className="font-semibold">{addr.fullName}</p>
                     <p className="text-sm text-gray-700">
                        {addr.flat}, {addr.area}
                     </p>
                     {addr.landmark && (
                        <p className="text-sm text-gray-700">{addr.landmark}</p>
                     )}
                     <p className="text-sm text-gray-700">
                        {addr.city}, {addr.pincode}
                     </p>
                     <p className="text-sm text-gray-700">{addr.country}</p>
                     <p className="text-sm">Phone: {addr.mobile}</p>
                     <p className="text-blue-800 font-normal text-[17px]">
                        Add delivery instructions
                     </p>

                     <div className="flex mt-4 mb-5 gap-2">
                        <MapPinIcon className="h-6 text-red-500" /> Updated delivery
                        location
                     </div>
                     <div className="flex gap-2 mt-4">
                        <button
                           onClick={() => handleEdit(index)}
                           className="flex items-center gap-1 border border-black p-2 rounded-full text-sm"
                        >
                           <PencilIcon className="h-4" /> Edit
                        </button>
                        <button
                           onClick={() => handleRemove(index)}
                           className="flex items-center gap-1 border border-black p-2 rounded-full text-sm"
                        >
                           <TrashIcon className="h-4" /> Remove
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Fullscreen Form (Shared for Mobile + Laptop) */}
         {showForm && (
            <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
               <div className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-teal-400 to-teal-300">
                  <h2 className="text-lg font-semibold">
                     {editIndex !== null ? "Edit address" : "Add a new address"}
                  </h2>
                  <button
                     className="text-black font-semibold"
                     onClick={() => {
                        setShowForm(false);
                        setEditIndex(null);
                     }}
                  >
                     CANCEL
                  </button>
               </div>

               <div className="p-4 space-y-4 max-w-xl mx-auto mt-4">
                  <select
                     name="country"
                     value={formData.country}
                     onChange={handleChange}
                     className="w-[80vw] md:w-[35vw] border border-black rounded px-4 py-2">
                     <option>India</option>
                     <option>Afghanistan</option>
                     <option>Aland island</option>
                     <option>lgeria</option>
                     <option>America Samoa</option>
                     <option>Andorra</option>
                     <option>Angola</option>
                     <option>Antarctia</option>
                     <option>Austria</option>
                     <option>Cambodia</option>
                     <option>Canada</option>
                     <option>Central islands</option>
                     <option>Christmas island</option>
                     <option>Costra Rica</option>
                     <option>Egypt</option>
                     <option>Finland</option>
                     <option>Guam</option>
                     <option>Halti</option>
                     <option>Hong Kong</option>
                  </select>

                  <div>
                     <label className="block font-semibold text-sm pb-1">
                        Full name
                     </label>
                     <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        type="text"
                        className="w-full border border-black rounded p-2"
                     />
                  </div>

                  <div>
                     <label className="block font-semibold text-sm pb-1">
                        Mobile number
                     </label>
                     <input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        type="tel"
                        placeholder="10-digit mobile number"
                        className="w-full border border-black rounded p-2"
                     />
                  </div>

                  <button className="w-full border border-black rounded-full py-2">
                     Use my location
                  </button>

                  <div>
                     <label className="block font-semibold text-sm pb-1">
                        Flat, House no., Building
                     </label>
                     <input
                        name="flat"
                        value={formData.flat}
                        onChange={handleChange}
                        type="text"
                        className="w-full border border-black rounded p-2"
                     />
                  </div>

                  <div>
                     <label className="block font-semibold text-sm pb-1">
                        Area, Street, Sector
                     </label>
                     <input
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        type="text"
                        className="w-full border border-black rounded p-2"
                     />
                  </div>

                  <div>
                     <label className="block font-semibold text-sm pb-1">
                        Landmark
                     </label>
                     <input
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                        type="text"
                        className="w-full border border-black rounded p-2"
                     />
                  </div>

                  <div className="flex gap-2">
                     <div className="flex-1">
                        <label className="block font-semibold text-sm pb-1">
                           Pincode
                        </label>
                        <input
                           name="pincode"
                           value={formData.pincode}
                           onChange={handleChange}
                           type="text"
                           className="w-full border border-black rounded p-2"
                        />
                     </div>
                     <div className="flex-1">
                        <label className="block font-semibold text-sm pb-1">
                           Town/City
                        </label>
                        <input
                           name="city"
                           value={formData.city}
                           onChange={handleChange}
                           type="text"
                           className="w-full border border-black rounded p-2"
                        />
                     </div>
                  </div>

                  <button
                     onClick={handleSave}
                     className="w-full bg-yellow-400 hover:bg-yellow-500 rounded-full p-2 font-semibold"
                  >
                     {editIndex !== null ? "Save changes" : "Add address"}
                  </button>
               </div>
            </div>
         )}
      </>
   );
}

export default Address;
