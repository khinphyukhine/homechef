import React, {useState} from 'react'; 
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiCog } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";
import "./NavBar.css";

export default function NavBar() {
    const [menuCollapse, setMenuCollapse] = useState(false);

    const handleClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <div id='navbar'>
            <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                    <div className='logo'>
                        <p>{menuCollapse ? "Chef" : "Home Chef"}</p>
                    </div>
                    <div className="close" onClick={handleClick}> 
                        {menuCollapse ? (
                            <FiArrowRightCircle/>
                        ) : (
                            <FiArrowLeftCircle/>
                        )}
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape='square'>
                        <MenuItem active={true} icon={<FiHome />}>
                            Home
                        </MenuItem>
                        <MenuItem icon={<FaList />}>What's In My Fridge</MenuItem>
                        <MenuItem icon={<FaRegHeart />}>Cook Book</MenuItem>
                        <MenuItem icon={<BiCog />}>Settings</MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="square">
                        <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>
    );

}
