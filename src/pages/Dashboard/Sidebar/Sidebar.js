import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoComponent from "./LogoComponent/Logo";
import MenuList from "./MenuList/MenuList"
import MenuItem from "./MenuItem/MenuItem";
import GlobalContext from "../../../Context/GlobalContext";


function Sidebar() {
    const navigate = useNavigate();
    const context = useContext(GlobalContext)
    const isMobile = window.innerWidth <= 1080;

    function convertSlugToUrl(slug, parameters) {
        let url = slug;
        Object.entries(parameters).forEach(([key, value]) => {
            url = url.replace(`:${key}`, value);
        });
        return url;
    }
    function onClick(slug, parameters = {}) {
        navigate(convertSlugToUrl(slug, parameters));
    }
    return (
        <MenuList isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id="devices"
                title="Devices"
                icon={<i className="fa-solid fa-gauge" style={{ fontSize: "18px" }}></i>}
                onClick={() => onClick("/devices")}
            />
            <MenuItem
                id="scan"
                title="Scan range of devices"
                icon={<i className="fa-solid fa-gauge" style={{ fontSize: "18px" }}></i>}
                onClick={() => onClick("/scan")}
            />
            <MenuItem
                id="interface"
                title="interfaces of device"
                icon={<i className="fa-solid fa-gauge" style={{ fontSize: "18px" }}></i>}
                onClick={() => onClick("/interfaces")}
            />
        </MenuList>

    );
}

export default Sidebar;
