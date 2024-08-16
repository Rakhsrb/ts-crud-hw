import React from "react";
import { Link } from "react-router-dom";
import { Table } from "../components/Table";

export const List: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Link
        to={"/register"}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Add new user
      </Link>
      <Table />
    </div>
  );
};
