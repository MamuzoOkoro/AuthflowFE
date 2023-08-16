import { useState } from "react"
import { AiOutlineSearch} from "react-icons/ai"

const SideBar = () => {
    const [state, setState] = useState<boolean>(true)
    // "w-[200px] h-full fixed border-r-[1px]  mt-[70px]"
    return (
        <div
            className={`w-[${state ? "200px" : "70px"}] h-full fixed border-r-[1px]  mt-[70px]`}
        >
            {/* sider box */}
            <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div 
                className={`w-[22px] h-[22px] bg-[black]`}
                ></div>
                <div>My feed</div>
            </div>
            {/* sider box */}
            <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div 
                className={`w-[22px] h-[22px] bg-[black]`}
                ></div>
                <div>New Squad</div>
            </div>
             {/* sider box description*/}
            <div className="flex items-center mt-1 pl-2 w-full hover:cursor-pointer">
                <div>Discover</div>
            </div>
              {/* sider box */}
              <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div><AiOutlineSearch/></div>
                <div>Popular</div>
            </div>
              {/* sider box */}
              <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div><AiOutlineSearch/></div>
                <div>Most upvoted</div>
            </div>
              {/* sider box */}
              <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div><AiOutlineSearch/></div>
                <div>Best discussions</div>
            </div>
              {/* sider box */}
              <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div><AiOutlineSearch/></div>
                <div>Squads</div>
            </div>
              {/* sider box */}
              <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div><AiOutlineSearch/></div>
                <div>Search</div>
            </div>
                   {/* sider box description*/}
                   <div className="flex items-center mt-1 pl-2 w-full hover:cursor-pointer">
                <div>Contribute</div>
            </div>
              {/* sider box */}
              <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div><AiOutlineSearch/></div>
                <div>Submit article</div>
            </div>
              {/* sider box */}
              <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div><AiOutlineSearch/></div>
                <div>Suggested nex source</div>
            </div>
                   {/* sider box description*/}
                   <div className="flex items-center mt-1 pl-2 w-full hover:cursor-pointer">
                <div>Manage</div>
            </div>
              {/* sider box */}
              <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div><AiOutlineSearch/></div>
                <div>Bookmarks</div>
            </div>
              {/* sider box */}
              <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div><AiOutlineSearch/></div>
                <div>Reading history</div>
            </div>
              {/* sider box */}
              <div className="flex items-center mt-1 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  gap-[10px]" >
                <div><AiOutlineSearch/></div>
                <div>Customize</div>
            </div>
        </div>
    )
}

export default SideBar