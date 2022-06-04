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
import { Spinner } from "reactstrap"


function ScanDevices(props) {
    const [resultScan, setResultScan] = React.useState([])
    const [showTable, setShowTable] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const handleClickButton = () => {
        setLoading(true)
        axios.post("/device/scan", resultScan).then(response => {
            console.log(response)
            console.log(response.data)
            console.log(response.data["ln_new_devices"])
            window.alert(response.data["ln_new_devices"] +" new devices added")

            window.location.href = "/devices"
            // toast.success("success")
            // setShowTable(true)
            // setLoading(false)
            // setResultScan(response.data)
        }).catch(err => {
            toast.error("error occured")
            setLoading(false)

        })
    }
    return (

        <CardComponent
            containerStyles={props.containerStyles}
            title="Device Scan">
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
                        {loading && <Spinner size="sm" className={classes.spinner} style={{ marginRight: "8px" }} />}
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
                                    This is your list of your devices
                                </h5>
                            </div>
                        </Col>
                    </Row>
                    <Table style={{ overflow: "none" }}>
                        <thead>
                            <tr>
                                <th>ln_new_devices</th>

                            </tr>
                        </thead>
                        <tbody>
                            {[...resultScan].map((scan, index) => (
                                <ScanDeviceInterfaceItem
                                    index={index}
                                    item={scan}
                                    key={index}
                                />
                            ))}
                        </tbody>
                    </Table>
                </div> : null}

        </CardComponent>
    )

}

export default ScanDevices