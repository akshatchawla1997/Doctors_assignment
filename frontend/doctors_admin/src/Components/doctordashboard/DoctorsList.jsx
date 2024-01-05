// DoctorsList.js
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import fetchDoctorsSlice from "../../redux/features/fetchDoctorsSlice";
import deleteDoctor from "../../redux/features/deleteDoctor";

const DoctorsList = () => {

  const navigate = useNavigate()
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { loading, data: Doctors, error } = useSelector((state) => {
    console.log(state);
    return state?.doctors;
  });
  
  console.log(Doctors);

  if (loading) {
    <Loader />;
  } else if (error) {
    <Error />;
  }

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchDoctorsSlice())?.then((response) => {
      console.log(response)
    });
  }, [dispatch]);

  const onEdit = (doctor) => {
   
    setSelectedDoctor(doctor);

    navigate(`/update-doctor`,{state:doctor});
  }

  const onDelete = (id) => {
    dispatch(deleteDoctor(id));
  };
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end ">
        <NavLink to="/add-doctor">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-900  px-4 py-2 border-2 shadow-xl mx-4"
          >
            Add Doctor
          </button>
        </NavLink>
        <NavLink to="/add-specialization">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-900  px-4 py-2 border-2 shadow-xl"
          >
            Add Specialization
          </button>
        </NavLink>
      </div>
      <h2 className="text-xl font-bold mb-4">Doctors List</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Doctor's Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              DOB
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Aadhaar No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Specialization
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              License
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {doctors?.map((doctor, index) => (
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{doctor?.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{doctor?.dob}</td>
            <td className="px-6 py-4 whitespace-nowrap">{doctor?.gender}</td>
            <td className="px-6 py-4 whitespace-nowrap">{doctor?.aadhaarNo}</td>
            <td className="px-6 py-4 whitespace-nowrap">{doctor?.address}</td>
            <td className="px-6 py-4 whitespace-nowrap">{doctor?.specialization}</td>
            <td className="px-6 py-4 whitespace-nowrap">{doctor?.licenseNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap">{doctor?.contactNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap">{doctor?.email}</td>
            <td className="px-6 py-4 whitespace-nowrap space-x-2">
              <button
                onClick={() => onEdit(doctor)}
                className="text-indigo-600 hover:text-indigo-900"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DoctorsList;
