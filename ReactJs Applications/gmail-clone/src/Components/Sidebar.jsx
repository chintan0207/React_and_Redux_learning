/* eslint-disable no-unused-vars */
import { LuPencil } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineWatchLater, MdOutlineKeyboardArrowDown, MdOutlineDrafts, MdInbox } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";
const sidebarItems = [{
  icon: <MdInbox size={"17px"} />,
  text: "Inbox"
},
{
  icon: <IoMdStar size={"17px"} />,
  text: "Starred"
},
{
  icon: <MdOutlineWatchLater size={"17px"} />,
  text: "Snoozed"
},
{
  icon: <TbSend2 size={"17px"} />,
  text: "Sent"
},
{
  icon: <MdOutlineDrafts size={"17px"} />,
  text: "Drafts"
},
]

const Sidebar = () => {
     const dispatch = useDispatch();
  return (
    <div className="w-[18%] ">
      <div className="p-3">
        <button onClick={() => dispatch(setOpen(true))} className="flex items-center gap-4 rounded-2xl bg-[#c2e7ff] font-medium p-4  hover:shadow-md  hover:cursor-pointer">
          <LuPencil size={'24px'} />
          Compose
        </button>
      </div>
      <div className="">
        {
          sidebarItems.map((item,index) => {
            return (
              <div key={index} className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:bg-[#d3e3fd] hover:cursor-pointer">
                {item.icon}
                <p className="font-medium text-sm">{item.text}</p>
              </div>
            )
          })
        }
        <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:bg-[#d3e3fd] hover:cursor-pointer">
          <MdOutlineKeyboardArrowDown size={'17px'}/>
          <p className="font-medium text-sm">More</p>
        </div>

      </div>
    </div>
  )
}

export default Sidebar