/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdCropSquare } from "react-icons/md"
import { RiStarLine } from "react-icons/ri"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setSelectedEmail } from "../redux/appSlice";
import { motion } from 'framer-motion';

const Message = ({ email }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openEmail = () => {
        dispatch(setSelectedEmail(email))
        navigate(`/mail/${email.id}`);
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} onClick={openEmail} className="flex items-start justify-between py-2 px-2 border-b border-gray-100 hover:cursor-pointer hover:shadow-md">
            <div className="flex items-center gap-3">
                <div className="flex-none text-gray-300">
                    <MdCropSquare className="h-5 w-5" />
                </div>
                <div className="flex-none text-gray-300">
                    <RiStarLine className="h-5 w-5" />
                </div>

            </div>
            <div className="flex-1 ml-4">
                <span className="text-sm text-gray-600 truncate inline-block max-w-full">
                    <span className="font-semibold">{email.to}</span>
                    <span className="pl-2">{email.message?.slice(0, 45) + " ..."}</span>
                </span>
            </div>
            <div className="flex-none text-gray-400 text-sm">
                <p>{email.createdAt?.slice(0, 10)}</p>
            </div>
        </motion.div>
    )
}

export default Message