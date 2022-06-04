import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Column, Row } from "simple-flexbox";
import Sidebar from "./Sidebar/Sidebar";
import IndexNavbar from "./IndexNavbar/IndexNavbar";
import { SidebarContext } from "../../Context/SidebarContext";
import classes from "./Dashboard.module.css"
import { toast, ToastContainer } from "react-toastify"
import useWindowSize from "../../Hooks/useWindowSize"
import Devices from "../Dashboard/Devices/Devices";
import ScanDevices from "./ScanDevices/ScanDevices";
import InterfacesDevice from "./InterfacesDevice/InterfacesDevice";
function Dashboard() {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();
    const state = useLocation()

    useEffect(() => {
        state && toast.success(state.state)
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (

        <SidebarContext>
            <ToastContainer />
            <Row className={classes.container}>
                <Sidebar />
                <Column flexGrow={1} className={classes.mainBlock}>
                    <IndexNavbar />
                    <div className={classes.contentBlock}>
                        <Routes>
                            <Route exact path="/devices" element={<Devices />} />
                            <Route exact path="/interfaces" element={<InterfacesDevice />} />
                            <Route exact path="/scan" element={<ScanDevices />} />
                        </Routes>
                    </div>
                </Column>
            </Row>
        </SidebarContext>
    );
}

export default Dashboard;
