/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const CreateUpdate = ({ model, toggle, save }) => {
  const [todo, setTodo] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title !== "") {
      save(todo);
    }
    setTodo({ title: "", description: "" });
  };

  return (
    <>
      <Modal toggle={toggle} isOpen={model}>
        <ModalHeader toggle={toggle}>
          <div className="font-medium text-xl">CreateTask</div>
        </ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={handleChange}
                value={todo.title}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                name="description"
                onChange={handleChange}
                value={todo.description}
              ></textarea>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              disabled={todo.title === ""}
              onClick={handleSubmit}
              type="submit"
              color="primary"
            >
              Create
            </Button>
            <Button onClick={toggle} color="danger">
              Close
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default CreateUpdate;
