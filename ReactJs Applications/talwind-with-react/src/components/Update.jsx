/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const Update = ({ toggle, model, todoObj, UpdateList, index }) => {
  useEffect(() => {
    setTodo(todoObj);
  }, []);
  const [todo, setTodo] = useState({ title: "", description: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    UpdateList(todo, index);
  };
  return (
    <>
      <Modal toggle={toggle} isOpen={model}>
        <ModalHeader toggle={toggle}>
          <div className="font-medium text-xl">UpdateTask</div>
        </ModalHeader>
        <form>
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
              onClick={handleUpdate}
              type="submit"
              color="primary"
            >
              Edit
            </Button>
            <Button onClick={toggle} color="danger">
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default Update;
