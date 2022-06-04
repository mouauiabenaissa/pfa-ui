import React, { useState } from "react"
import { Row, Col } from "reactstrap"
import classes from "./Devices.module.css"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "../../../utils/axios"
import { Table } from 'reactstrap';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CardComponent from "../../../Components/Cards/CardComponent/CardComponent"
import DeviceItem from "../Devices/DeviceItem/DeviceItem"
import { toast } from "react-toastify"

function Devices(props) {
    const navigate = useNavigate()
    const [devices, setDevices] = React.useState([])
    const [loading, setLoading] = useState(false)

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

    return (
        <CardComponent
            containerStyles={props.containerStyles}
            title="Devices">
            <Row>
                <Col>
                    <div className={classes.instanceCreation}>
                        <h5 className={[classes.itemTitle].join(" ")}>
                            This is your list of your Devices
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
                    {[...devices].map((device, index) => (
                        <DeviceItem
                            index={index}
                            item={device}
                            key={index}
                        />
                    ))}
                </tbody>
            </Table>
        </CardComponent>
    )
}

export default Devices