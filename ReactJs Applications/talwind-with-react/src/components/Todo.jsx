/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CreateUpdate from "./CreateUpdate";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
/* eslint-disable no-unused-vars */
const Todo = () => {
  useEffect(() => {
    let arr = localStorage.getItem("TaskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const [taskList, setTaskList] = useState([]);

  const [model, setModel] = useState(false);
  const toggle = () => setModel(!model);

  const [umodel, setUModel] = useState(false);
  const utoggle = () => setUModel(!umodel);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const deleteTodo = (index) => {
    // taskList.splice(index, 1);
    const newtaskList = taskList.filter((item, i) => i !== index);
    localStorage.setItem("TaskList", JSON.stringify(newtaskList));
    setTaskList(newtaskList);
  };

  const save = (taskobj) => {
    let templist = taskList;
    taskList.push(taskobj);
    localStorage.setItem("TaskList", JSON.stringify(templist));
    setTaskList(templist);
    setModel(false);
  };

  const UpdateList = (obj, index) => {
    updateListArray(obj, index);
  };

  const updateListArray = (obj, index) => {
    // Create a new array with the updated item
    const newTaskList = [...taskList];
    newTaskList[index] = obj;

    // Update local storage
    localStorage.setItem("TaskList", JSON.stringify(newTaskList));

    // Update the state
    setTaskList(newTaskList);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 h-[150px] bg-slate-300">
        <h1 className="text-3xl font-medium">Todo List</h1>
        <div className="">
          <button
            onClick={toggle}
            className="p-2 rounded-md w-[100px] text-white bg-blue-600 "
          >
            CreateTask
          </button>
        </div>
      </div>
      <div className=" flex grid justify-items-center grid-cols-1 gap-3 w-[100%] h-[100%] lg:grid-cols-4 md:grid-cols-3 md:p-1 ">
        {taskList.map((item, index) => {
          return (
            <div
              key={index}
              className=" flex flex-col mx-3 my-3 h-[250px] w-[200px] w-[200px] m-10 rounded-xl shadow-md overflow-hidden ease-in-out duration-700 scroll-smooth hover:h-[400px]  hover:w-[300px]"
            >
              <div
                className={`flex justify-center items-center border-b p-2  } `}
                style={{ "background-color": colors[index % 5].primaryColor }}
              >
                <h1 className="font-medium text-white">{item.title}</h1>
              </div>
              <div className=" flex-1 flex-col justify-between font-normal p-2 px-2 text-justify overflow-hidden">
                <p>{item.description}</p>
              </div>
              <div
                className="flex gap-2 p-2 justify-end items-center cursor-pointer"
                style={{ color: colors[index % 5].primaryColor }}
              >
                <FiEdit size={"18px"} />
                <RiDeleteBin6Line
                  onClick={() => deleteTodo(index)}
                  size={"20px"}
                />
              </div>
            </div>
          );
        })}
      </div>
      <CreateUpdate model={model} save={save} toggle={toggle} />
    </>
  );
};

export default Todo;
