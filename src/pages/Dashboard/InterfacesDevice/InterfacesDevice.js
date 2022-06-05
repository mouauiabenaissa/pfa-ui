import React from 'react'
import CardComponent from "../../../Components/Cards/CardComponent/CardComponent"
import { Row, Col } from "reactstrap"
import axios from "../../../utils/axios"
import { Table } from 'reactstrap';
import TextField from '@mui/material/TextField';
import { Button } from "reactstrap"
import { toast } from 'react-toastify';
import classes from "./InterfacesDevice.module.css"
import InterfacesDeviceItem from "../InterfacesDevice/InterfacesDeviceItem/InterfacesDeviceItem"
import { Spinner, Input } from "reactstrap"
import LoadingComponent from "../../../Components/Loading/LoadingComponent"


function InterfacesDevice(props) {
    const [interfaces, setInterfaces] = React.useState([])
    const [showTable, setShowTable] = React.useState(false)
    const [loadingSearch, setLoadingSearch] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [IP, setIP] = React.useState([])
    const [devices, setDevices] = React.useState([])

    const handleClickButton = () => {
        setLoadingSearch(true)
        axios.post("/device/interface/list", IP).then(response => {
            toast.success("success")
            setShowTable(true)
            setLoadingSearch(false)
            setInterfaces(response.data.interfaces)
        }).catch(err => {
            toast.error("error occured")
            setLoadingSearch(false)

        })
    }

    React.useEffect(() => {
        setLoading(true)
        axios.get(`/device/list`)
            .then(res => {
                setDevices(res.data.devices)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                toast.error("error occured")
            })


    }, [])
    console.log(IP)
    console.log(devices)
    return (

        loading ? <LoadingComponent /> :
            <CardComponent containerStyles={props.containerStyles} title="Device Interfaces" >
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col md="6">
                        <Input
                            bsSize="lg"
                            className="mb-3"
                            type="select"
                            onChange={(e) => setIP({ ...IP, device_ip: e.target.value })}

                        >
                            {[...devices].map((device, index) => (
                                <option key={index}>
                                    {device.ip}
                                </option>
                            ))}
                        </Input>
                    </Col>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center", marginTop: "40px" }} >
                    <Col md="6">
                        <Button onClick={handleClickButton} style={{ width: "150px" }} outline>
                            {loadingSearch && <Spinner size="sm" className={classes.spinner} style={{ marginRight: "8px" }} />}
                            Search
                        </Button></Col>
                </Row>
                {console.log(interfaces)}
                {
                    showTable ?
                        <div style={{ marginTop: "50px" }} >
                            <Row >
                                <Col>
                                    <div className={classes.instanceCreation}>
                                        <h5 className={[classes.itemTitle].join(" ")}>
                                            This is your list of your interfaces
                                        </h5>
                                    </div>
                                </Col>
                            </Row>
                            <Table style={{ overflow: "none" }}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Address IP</th>
                                        <th>Mask</th>
                                        <th >Enabled?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...interfaces].map((interfaceItem, index) => (
                                        <InterfacesDeviceItem
                                            index={index}
                                            item={interfaceItem}
                                            key={index}
                                        />
                                    ))}
                                </tbody>
                            </Table>
                        </div> : null
                }

            </CardComponent >

    )
}

export default InterfacesDevice