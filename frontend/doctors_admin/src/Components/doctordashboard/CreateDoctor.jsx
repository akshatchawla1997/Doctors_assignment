// DoctorsComponent.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchSpecialisation from "../../redux/features/fetchSpecialisationSlice";

const CreateDoctor = () => {
  const dispatch = useDispatch();
  const specialisations = useSelector((state) => state?.fetchSpecialisation);
  console.log(specialisations)


  // State for the form data
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    aadhaarNo: "",
    address: "",
    specialization: "",
    licenseNumber: "",
    contactNumber: "",
    email: "",
  });

  // Validation logic
  const isFormValid = () => {
    // Placeholder validation logic
    return formData.name.trim() !== "" && formData.email.includes("@");
  };

  // useEffect(() => {
  //   // Fetch specialization data when component mounts
  //   dispatch(fetchSpecialisation());
  // }, [dispatch]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Form submitted successfully:", formData);
      // You can perform further actions here, like sending data to a server
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
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />{" "}
          Female
        </div>
        <div>
          <input
            type="number"
            placeholder="Aadhaar No."
            value={formData.aadhaarNo}
            onChange={(e) =>
              setFormData({ ...formData, aadhaarNo: e.target.value })
            }
            maxLength="12"
            className="p-2 border rounded"
          />
        </div>
        <div>
          <textarea
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="p-2 border rounded"
          ></textarea>
        </div>
        <div>
          <select
            value={formData.specialization}
            onChange={(e) =>
              setFormData({ ...formData, specialization: e.target.value })
            }
            className="p-2 border rounded"
          >
            <option value="">Select Specialization</option>
             {specialisations &&
              specialisations.map((spec, index) => (
                <option key={index} value={spec.name}>
                  {spec.name}
                </option>
              ))} 
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="License Number"
            value={formData.licenseNumber}
            onChange={(e) =>
              setFormData({ ...formData, licenseNumber: e.target.value })
            }
            className="p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={(e) =>
              setFormData({ ...formData, contactNumber: e.target.value })
            }
            className="p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDoctor;
