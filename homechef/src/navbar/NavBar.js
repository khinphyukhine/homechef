import React, {useState} from 'react'; 
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { BiCog } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";
import "./NavBar.css";
import { useHistory } from 'react-router-dom';

export default function NavBar() {
    const [menuCollapse, setMenuCollapse] = useState(true);
    const history = useHistory(); 
    const handleClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const handleClickFridge = () => {
        history.push('./fridge/Fridge');
    };

    const handleClickHome = () => {
        history.push('/');
    };

    return (
        <div id='navbar'>
            <ProSidebar collapsed={menuCollapse} onClick={handleClick}>
                <SidebarContent>
                    <Menu iconShape='square'>
                        <MenuItem active={true} icon={<FiHome />} onClick={handleClickHome}>
                            Home
                        </MenuItem>
                        <MenuItem icon={<FaList />} onClick={handleClickFridge}>What's In My Fridge</MenuItem>
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
