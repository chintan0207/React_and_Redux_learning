/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Gmaillogo from "../assets/Gmail_Logo_128px.png"
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setSearchText } from "../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();

    const { authUser } = useSelector(store => store.appSlice);

    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setAuthUser(null));
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        dispatch(setSearchText(input))
    }, [input]);
    return (
        <div className="flex justify-between items-center px-3 h-16 bg-slate-50">
            <div className="flex-3 flex items-center g-10">
                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
                        <GiHamburgerMenu size={'20px'} />
                    </div>
                    <img className="w-8" src={Gmaillogo} alt="gmail-logo" />
                    <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
                </div>
            </div>

            <div className="flex-6 md:block hidden w-[50%]">
                <div className='flex items-center bg-[#EAF1FB] px-2 py-3  rounded-full'>
                    <IoIosSearch size="24px" className='text-gray-700' />
                    <input
                        type="text"
                        placeholder='Seach mail'
                        onChange={(e) => setInput(e.target.value)}
                        className='rounded-full w-full bg-transparent outline-none px-1'
                    />
                </div>
            </div>
            <div className="flex-3 flex items-center gap-2">
                <div className="flex items-center gap-2">
                    <div className="rounded-full hover:bg-gray-200 p-2  cursor-pointer ">
                        <FaRegCircleQuestion size={'24px'} />
                    </div>
                    <div className="rounded-full hover:bg-gray-200 p-2 cursor-pointer">
                        <IoSettingsOutline size={'24px'} />
                    </div>
                    <div className="rounded-full hover:bg-gray-200 p-2 cursor-pointer">
                        <TbGridDots size={'24px'} />
                    </div>

                </div>
                <div className="relative rounded-full hover:bg-gray-200 p-1 ">
                    <Avatar className="cursor-pointer" onClick={() => setToggle(!toggle)} size="40" round={true} src={authUser?.photoURL} />
                    <AnimatePresence>
                        {
                            toggle
                            &&
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.1 }}
                                className="flex p-2 flex-col gap-2 absolute right-2 bg-gray-100 shadow-md h-20 w-60 rounded-md ">
                                <div className="flex gap-3 justify-between">
                                    <p className="text-sm font-medium">{authUser?.email}</p>
                                    <RxCross2 className="cursor-pointer" onClick={() => setToggle(!toggle)} size={"18px"} />
                                </div>
                                <p onClick={signOutHandler} className="p-2 h-9 w-16 rounded-md text-sm font-medium bg-white cursor-pointer ">Logout</p>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Navbar