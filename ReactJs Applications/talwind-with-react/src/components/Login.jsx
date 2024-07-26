/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Modal } from "reactstrap";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Login = ({ modal, toggle, signUpToggle }) => {

    const context = useContext(DataContext)
    const { postLogin } = context

    let navigate = useNavigate()

    const [formdata, setFormdata] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const navigateSignUp = () => {
        toggle()
        signUpToggle()

    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(validationError).length === 0) {

            try {
                const json = await postLogin(formdata)
                // console.log(json)
                if (json.success) {
                    localStorage.setItem('auth-token', json.authtoken)
                    setErrors({});
                    setFormdata({ email: "", password: "" });
                    toggle()
                    navigate('/')
                } else {
                    alert(json.error)
                }
            } catch (error) {
                console.error(error)
            }

        } else {
            setErrors(validationError);
        }
    };

    const validation = (formdata) => {
        let errors = {};

        if (!formdata.email) {
            errors.email = "*Email is required";
        }

        if (!formdata.password) {
            errors.password = "*Password is required";
        }
        return errors;
    };

    const validationError = validation(formdata);

    return (
        <>
            <Modal isOpen={modal} toggle={toggle} >
                <form
                    className="flex flex-col items-center justify-center p-3"
                    onSubmit={handleSubmit}
                >
                    <h1 className="mb-3 text-xl font-medium">Login Your Account</h1>
                    <div className="flex flex-col m-3 w-[80%] relative">
                        <input
                            className="p-1 border rounded-md outline-none"
                            type="email"
                            name="email"
                            id="email"
                            value={formdata.email}
                            onChange={handleChange}
                            placeholder="email"
                        />
                        {errors.email && (
                            <span className="text-red-600 text-sm absolute top-full ">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col m-3 w-[80%] relative">
                        <input
                            className="p-1 border rounded-md outline-none"
                            type="password"
                            name="password"
                            id="password"
                            value={formdata.password}
                            onChange={handleChange}
                            placeholder="password"
                        />
                        {errors.password && (
                            <span className="text-red-600 text-sm absolute top-[65%]">
                                {errors.password}
                            </span>
                        )}
                        <span className="text-right text-sm underline text-purple-700 cursor-pointer">
                            Forgot Password?
                        </span>
                    </div>
                    <button
                        className=" text-sm text-white py-2 px-3 my-3 rounded-lg cursor-pointer bg-purple-700 w-[80%] opacity-80 hover:opacity-100"
                        type="submit"
                    >
                        Login
                    </button>
                    <p className="text-[15px]">Don't have account? <span onClick={navigateSignUp} className="text-purple-700 cursor-pointer">SignUp</span></p>
                </form>
            </Modal>
        </>
    );
};

export default Login;
