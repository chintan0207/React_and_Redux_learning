import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Note({ item }) {
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/editnote/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("are you want to delete ?") === true) {
      try {
        const response = await fetch("http://localhost:8080/api/notes/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const res = await response.text();
        // console.log(res)
        const result = res;
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="card cstyle col-md-4 mx-2 my-2">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <div className="d-flex gap-2">
          <span
            className="btn btn-primary"
            onClick={() => handleUpdate(item.id)}
          >
            Update
          </span>
          <span
            className="btn btn-primary"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </span>
        </div>
      </div>
    </div>
  );
}
