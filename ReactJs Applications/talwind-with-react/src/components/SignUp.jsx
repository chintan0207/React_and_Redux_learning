/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Modal } from "reactstrap";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const SignUp = ({ showSignUp, signUpToggle, toggle }) => {

    const context = useContext(DataContext);
    const { postSignUp } = context

    const navigate = useNavigate()

    const navigateLogin = () => {
        signUpToggle()
        toggle()
    }

    const [signupFormData, setSignupFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value)
        setSignupFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(validationError).length === 0) {
            try {
                const json = await postSignUp(signupFormData)
                // console.log(json)
                if (json.success) {
                    localStorage.setItem('auth-token', json.authtoken)
                    setErrors({});
                    setSignupFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    });
                    setShow(false)
                    signUpToggle()
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

    const validate = (formdata) => {
        let errors = {};
        if (!formdata.firstName) {
            errors.firstName = "*firstName is required";
        }
        if (!formdata.lastName) {
            errors.lastName = "*lastName is required";
        }
        if (!formdata.email) {
            errors.email = "*Email is required";
        }
        if (!formdata.password) {
            errors.password = "*Password is required";
        }
        if (formdata.password !== formdata.confirmPassword) {
            errors.confirmPassword = "*Password does not match";
        }

        return errors;
    };

    const validationError = validate(signupFormData);

    return (
        <div>
            <Modal isOpen={showSignUp} toggle={signUpToggle}>
                <form
                    className="flex flex-col items-center justify-center p-3"
                    onSubmit={handleSubmit}
                >
                    <h1 className="mb-3 text-xl font-medium">SignUp</h1>

                    <div className="flex gap-2 w-[80%] my-3 relative">
                        <input
                            className="p-[6px] border rounded-md outline-none w-1/2"
                            name="firstName"
                            id="firstName"
                            onChange={handleChange}
                            placeholder="firstName"
                            value={signupFormData.firstName}
                        />
                        {errors.firstName && (
                            <span className="text-red-600 text-sm absolute top-full ">
                                {errors.firstName}
                            </span>
                        )}

                        <input
                            className="p-[6px] border rounded-md outline-none w-1/2"
                            name="lastName"
                            id="lastName"
                            onChange={handleChange}
                            placeholder="lastName"
                            value={signupFormData.lastName}
                        />
                        {errors.lastName && (
                            <span className="text-red-600 text-sm absolute top-full right-[13%] ">
                                {errors.lastName}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col my-3 w-[80%] relative">
                        <input
                            className="p-[6px] border rounded-md outline-none"
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            placeholder="email"
                            value={signupFormData.email}
                        />
                        {errors.email && (
                            <span className="text-red-600 text-sm absolute top-full ">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col my-3 w-[80%] relative">
                        <input
                            className="p-[6px] border rounded-md outline-none"
                            type={show ? "text" : "password"}
                            name="password"
                            id="password"
                            onChange={handleChange}
                            placeholder="password"
                            value={signupFormData.password}
                        />
                        {show ? (
                            <FaEye className="absolute top-3 right-2" size={"18px"} onClick={() => setShow(!show)} />
                        ) : (
                            <FaEyeSlash className="absolute top-3 right-2" size={"18px"} onClick={() => setShow(!show)} />
                        )}

                        {errors.password && (
                            <span className="text-red-600 text-sm absolute top-full ">
                                {errors.password}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col my-3 w-[80%] relative">
                        <input
                            className="p-[6px] border rounded-md outline-none"
                            type="Password"
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={handleChange}
                            placeholder="confirmPassword"
                            value={signupFormData.confirmPassword}
                        />
                        {errors.confirmPassword && (
                            <span className="text-red-600 text-sm absolute top-full ">
                                {errors.confirmPassword}
                            </span>
                        )}
                    </div>
                    <button
                        className=" text-sm text-white py-2 px-3 my-3 rounded-lg cursor-pointer bg-purple-700 w-[80%] opacity-80 hover:opacity-100"
                        type="submit"
                    >
                        SignUp
                    </button>
                    <p className="text-[15px]">Already have account? <span onClick={navigateLogin} className="text-purple-700 cursor-pointer">Login</span></p>

                </form>
            </Modal>
        </div>
    );
};

export default SignUp;
