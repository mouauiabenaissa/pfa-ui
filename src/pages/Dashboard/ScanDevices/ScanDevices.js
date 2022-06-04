import React from 'react'
import CardComponent from "../../../Components/Cards/CardComponent/CardComponent"
import { Row, Col } from "reactstrap"
import classes from "../Devices/Devices.module.css"
import axios from "../../../utils/axios"
import { Table } from 'reactstrap';
import TextField from '@mui/material/TextField';
import ScanDeviceInterfaceItem from "./ScanDeviceInterfaceItem/ScanDeviceInterfaceItem"
import { Button } from "reactstrap"
import { toast } from 'react-toastify';


function ScanDevices(props) {
    const [resultScan, setResultScan] = React.useState([])
    const [showTable, setShowTable] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const handleClickButton = () => {
        setLoading(true)
        axios.post("/device/scan", resultScan).then(response => {
            toast.success("success")
            setShowTable(true)
            setLoading(false)
        }).catch(err => {
            toast.error("error occured")
            setLoading(false)

        })
    }
    return (

        <CardComponent
            containerStyles={props.containerStyles}
            title="Device Interfaces">
            <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col md="6">
                    <TextField
                        className={classes.TextFieldFirst}
                        id="device-name"
                        label="Device User Name"
                        placeholder='Device User Name'
                        onChange={(e) => setResultScan({ ...resultScan, device_username: e.target.value })}
                        variant="standard"
                        style={{ width: "100%" }}
                    />
                </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col md="6">
                    <TextField
                        className={classes.TextFieldFirst}
                        id="device-password"
                        label="Device Password"
                        placeholder='Device Password'
                        onChange={(e) => setResultScan({ ...resultScan, device_password: e.target.value })}
                        variant="standard"
                        style={{ width: "100%" }}
                    />
                </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col md="6">
                    <TextField
                        className={classes.TextFieldFirst}
                        id="network_ip"
                        label="network_ip"
                        placeholder='network_ip'
                        onChange={(e) => setResultScan({ ...resultScan, network_ip: e.target.value })}
                        variant="standard"
                        style={{ width: "100%" }}
                    />
                </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col md="6">
                    <TextField
                        className={classes.TextFieldFirst}
                        id="mask"
                        label="mask"
                        placeholder='mask'
                        onChange={(e) => setResultScan({ ...resultScan, mask: e.target.value })}
                        variant="standard"
                        style={{ width: "100%" }}
                    />
                </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center", marginTop: "40px" }} >
                <Col md="6">
                    <Button onClick={handleClickButton} style={{ width: "150px" }} outline>
                        Scan
                    </Button></Col>
            </Row>
            {console.log(resultScan)}
            {showTable ?
                <div style={{ marginTop: "50px" }} >
                    <Row >
                        <Col>
                            <div className={classes.instanceCreation}>
                                <h5 className={[classes.itemTitle].join(" ")}>
                                    This is your list of your {resultScan.device_username} interfaces
                                </h5>
                            </div>
                        </Col>
                    </Row>
                    <Table style={{ overflow: "none" }}>
                        <thead>
                            <tr>
                                <th>Address IP</th>
                                <th>Status</th>
                                <th >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*[...resultScan].map((scan, index) => (
                                <ScanDeviceInterfaceItem
                                    index={index}
                                    item={scan}
                                    key={index}
                                />
                            ))*/}
                        </tbody>
                    </Table>
                </div> : null}

        </CardComponent>
    )

}

export default ScanDevices