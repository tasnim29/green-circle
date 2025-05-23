import React, { use, useState } from "react";
import { MdBrowserUpdated, MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const MyTips = () => {
  const { theme } = use(AuthContext);
  const initialTips = useLoaderData();
  const [allTips, setAllTips] = useState(initialTips);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // delete mongodb
          fetch(
            `https://assignment-10-server-five-iota.vercel.app/shareTipAll/${id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log("after db", data);
              const remainingTips = allTips.filter((tip) => tip._id !== id);
              setAllTips(remainingTips);
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-20">
      <h1
        className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
          theme === "dark" ? "text-white " : "text-green-700"
        }`}
      >
        🌱 All Your Tips
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr
              className={`  transition duration-1000 ${
                theme === "dark" ? "text-white " : "text-black"
              }`}
            >
              <th>No</th>
              <th>UserName</th>
              <th>Title</th>
              <th>Category</th>
              <th>availability</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {allTips.map((tip, index) => (
              <tr key={tip._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="font-bold">{tip.username}</div>
                </td>
                <td className="flex gap-4 items-center">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={tip.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div className="font-bold">{tip.title}</div>
                </td>
                <td>
                  <div className="font-bold">{tip.category}</div>
                </td>
                <td>
                  <div className="font-bold">{tip.availability}</div>
                </td>
                <th className="flex gap-5">
                  <Link
                    to={`/updateTip/${tip._id}`}
                    className="btn btn-ghost btn-xs"
                  >
                    <MdBrowserUpdated size={24} />
                  </Link>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <MdDeleteForever size={24} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTips;
