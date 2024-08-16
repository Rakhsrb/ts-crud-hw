import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../toolkits/UserSlicer";
import { RootState } from "../store"; // Import RootState from your store

export const Table: React.FC = () => {
  const state = useSelector((state: RootState) => state.user); // Type the state correctly
  const dispatch = useDispatch();

  const handleDeleteUser = (id: string) => {
    dispatch(deleteUser(id));
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
          {state.map(({ fullname, address, contact, age, id }) => (
            <tr
              key={id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {fullname}
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
                  onClick={() => handleDeleteUser(id)}
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
