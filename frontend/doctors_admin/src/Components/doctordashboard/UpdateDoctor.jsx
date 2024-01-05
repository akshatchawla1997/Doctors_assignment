// UpdateDoctor.jsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import updateDoc from "../../redux/features/updateDoctorSlice";

const UpdateDoctor = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userData = location.state;

  const [formData, setFormData] = useState({
    name: userData?.name || "",
    dob: userData?.dob || "",
    gender: userData?.gender || "",
    aadhaarNo: userData?.aadhaarNo || "",
    address: userData?.address || "",
    specialization: userData?.specialization || "",
    licenseNumber: userData?.licenseNumber || "",
    contactNumber: userData?.contactNumber || "",
    email: userData?.email || "",
  });

  const isFormValid = () => {
    return formData.name.trim() !== "" && formData.email.includes("@");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Form submitted successfully:", formData);
      dispatch(updateDoc(formData, userData.id));
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input fields */}
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="DOB"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            className="p-2 border rounded"
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          />{" "}
          Female
        </div>
        <div>
          <input
            type="number"
            placeholder="Aadhaar No."
            value={formData.aadhaarNo}
            onChange={(e) => setFormData({ ...formData, aadhaarNo: e.target.value })}
            maxLength="12"
            className="p-2 border rounded"
          />
        </div>
        <div>
          <textarea
            placeholder="Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="p-2 border rounded"
          ></textarea>
        </div>
        <div>
          <select
            value={formData.specialization}
            onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
            className="p-2 border rounded"
          >
            <option value="">Select Specialization</option>
            {/* Assuming you have fetched specializations elsewhere */}
            {/* {specialisations &&
              specialisations.map((spec, index) => (
                <option key={index} value={spec.name}>
                  {spec.name}
                </option>
              ))} */}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="License Number"
            value={formData.licenseNumber}
            onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
            className="p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            className="p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="p-2 border rounded"
          />
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className={`p-2 rounded ${
            isFormValid()
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateDoctor;
