import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../context/Context";

export const Table: React.FC = () => {
  const context = useContext(ContextData);

  if (!context) {
    return <div>Error: Context not provided</div>;
  }

  const { data, setData } = context;

  const handleDelete = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div className="relative overflow-x-auto sm:rounded-lg p-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              User's Fullname
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ fullName, address, age, contact, id }, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {fullName}
              </th>
              <td className="px-6 py-4">{address}</td>
              <td className="px-6 py-4">+998 {contact}</td>
              <td className="px-6 py-4">{age}</td>
              <td className="px-6 py-4 flex gap-6 items-center">
                <Link
                  to={`/edit/${id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(index)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
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
