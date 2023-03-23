import React, { useContext } from "react";
import { MenuContext } from "../../Context/MenuProvider";
import { useLocation, useNavigate } from "react-router-dom";

const MenuItem = ({ menu, isOpen }) => {
  const { activeMenuItem, setActiveMenuItem } = useContext(MenuContext);
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center"
      onClick={() => {
        setActiveMenuItem(menu);
        console.log({menu});
        if (menu.link) {
          navigate(menu.link);
        }
      }}
    >
      <div
        className={`${isOpen && "mr-3"}  ${
          activeMenuItem.value == menu.value && "active_menu"
        } transition-all min-w-[44px] rounded-md p-[5px]`}
      >
        <img
          src={`/assets/images/${menu.icon}`}
          className="object-cover"
          alt={menu.title}
          width={44}
          height={44}
        />
      </div>

      <span
        className={`${
          menu.value == activeMenuItem.value
            ? "font-bold text-orange-500"
            : "text-white"
        } ${
          isOpen ? "opacity-100 " : "opacity-0 "
        } whitespace-nowrap  cursor-pointer`}
        onClick={(e) => setIsActiveItem(menu)}
      >
        {menu.title}
      </span>
    </div>
  );
};

export default MenuItem;
