import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddandUpdate = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const validationForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.title || formData.title === "") {
      errors.title = "NoteTitle is required !";
      isValid = false;
    }
    if (!formData.description) {
      errors.description = "Description is required !";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getNoteById(id);
      // console.log(formData)
    }
  }, []);

  useEffect(() => {}, [formData]);

  const getNoteById = async (id) => {
    try {
      const response = await fetch("http://localhost:8080/api/notes/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNoteById = async (id, formData) => {
    try {
      const response = await fetch("http://localhost:8080/api/notes/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      await response.json();
      //  console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const addNote = async ({ title, description }) => {
    try {
      const response = await fetch("http://localhost:8080/api/notes/addnote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validationForm()) {
      if (id) {
        updateNoteById(id, formData);
        navigate("/");
      } else {
        addNote(formData);
        navigate("/");
      }
    }
  };

  return (
    <div className="container py-3">
      <div className="au">
        <div>
          {id ? (
            <h4 className="mb-2">Update Note</h4>
          ) : (
            <h4 className="mb-2">Add Note</h4>
          )}
          <div className="form-control p-3">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  id="title"
                  placeholder="note title"
                />
                <p>{errors.title}</p>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                  id="description"
                  placeholder="description"
                />
                {errors.description && <span>{errors.description}</span>}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddandUpdate;
