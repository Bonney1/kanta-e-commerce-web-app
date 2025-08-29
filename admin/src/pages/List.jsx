import React from "react";
import { useState } from "react";
import { backendUrl, currency } from "../App";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      console.log("API response:", response.data);

      setList(response.data.products);

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setList([]);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* list table title */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] px-2 py-1 border bg-gray-100 text-sm items-center">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Actions</b>
        </div>

        {/* product lists */}
        {Array.isArray(list) && list.length > 0 ? (
          list.map((item, index) => (
            <div key={index}>
              <img
                src={item?.images?.[0] || "/placeholder.png"}
                alt={item?.name || "No name"}
                className="w-16 h-16 object-cover rounded"
              />
              <p>{item?.name || "Unnamed"}</p>
              <p>{item?.category || "Unknown"}</p>
              <p>
                {currency}
                {item?.price ?? "0"}
              </p>
              <p>X</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products available</p>
        )}

        
      </div>
    </>
  );
};

export default List;
