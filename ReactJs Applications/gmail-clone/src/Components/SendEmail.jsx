/* eslint-disable no-unused-vars */
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/Store";
import { setOpen } from "../redux/appSlice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function SendEmail() {

    const [formData, setFormData] = useState({
        recipients:"",
        subject:"",
        message:""
    });

    const changeEventHandler = (e) => {
         setFormData({...formData,[e.target.name]:e.target.value})
    }

    const submitHandler = async(e) =>{
        e.preventDefault();
       await addDoc(collection(db,"emails"),{
            to: formData.recipients,
            subject: formData.subject,
            message: formData.message,
            createdAt:serverTimestamp(),
       })
       dispatch(setOpen(false));
       setFormData({
           recipients: "",
           subject: "",
           message: ""
       });
    }
   
    const open = useSelector(store => store.appSlice.open);
    const dispatch = useDispatch();
    return (
        <div className={`${open ? "block" : "hidden"} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md border`}>
            <div className="flex bg-[#f2f6fc] items-center justify-between p-2">
                <h1 className="text-sm font-medium">New Message</h1>
                <div onClick={() => dispatch(setOpen(false))} className=" rounded-full p-2 hover:bg-gray-200 hover:cursor-pointer">
                    <RxCross2/>
                </div>
            </div>
            <form onSubmit={submitHandler} className="flex flex-col gap-2 p-3">
            <input  onChange={changeEventHandler} type="text" name="recipients" value={formData.recipients} placeholder="To" className="outline-none py-1 border-b "/>
            <input  onChange={changeEventHandler}type="text" name="subject" value={formData.subject} placeholder="Subject" className="outline-none py-1 border-b "/>
            <textarea onChange={changeEventHandler} name="message" rows="10" cols="10" value={formData.message} className="outline-none py-1"></textarea>
            <button type='submit' className='bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium'>Send</button>
            </form>
        </div>
    )
}

export default SendEmail
