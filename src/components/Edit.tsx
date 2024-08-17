import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextData } from "../context/Context";
import { UserProps } from "../Interfaces/Common";

export const Edit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, setData } = useContext(ContextData)!;
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserProps>({
    fullName: "",
    address: "",
    contact: 0,
    age: 0,
    id: 0,
  });

  useEffect(() => {
    const userToEdit = data.find((i) => i.id === parseInt(id!));
    if (userToEdit) {
      setFormData(userToEdit);
    } else {
      navigate("/");
    }
  }, [id, data, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData = data.map((user) =>
      user.id === parseInt(id!) ? formData : user
    );
    setData(updatedData);
    navigate("/");
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="container max-w-md bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contact"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
