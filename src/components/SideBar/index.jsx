import React, { memo, useState } from "react";
import { MenuData } from "../../data/menuData";
import MenuItem from "./MenuItem";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SideBar = ({ menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const current = location.pathname.split("/")[1];
  // console.log(current);
  // console.log(menus);
  return (
    <div
      className={` ${
        isOpen ? "w-[230px]" : "w-[90px]"
      } h-screen bg-slate-700 pt-8 px-5 transition-[width] ease-[cubic-bezier(0.55, 0.67, 0.23, 0.92)]`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex relative items-center">
          <img
            src="/assets/images/restaurant_logo.webp"
            className="border border-red-500"
            width={44}
            height={44}
          />
          <div
            className="absolute right-[-30px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              className={`${!isOpen && "rotate-180"}`}
              src="/assets/images/control.png"
              width={22}
              alt=""
              srcset=""
            />
          </div>
        </div>

        {menus.length > 0 &&
          menus.map((menu) => (
            <MenuItem menu={menu} key={menu.id} isOpen={isOpen} />
          ))}
        <Link to={current ? "/" : "/admin"} className=" text-sm text-white">
          {current ? "User" : "Admin"}
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
