import React from 'react'
import classes from "./InterfacesDeviceItem.module.css"
import EditIcon from '@mui/icons-material/Edit';
import EditModal from "./EditModal/EditModal";
import axios from '../../../../utils/axios';
import { toast } from 'react-toastify';

function InterfacesDeviceItem(props) {

    const [showConfirmEditModal, setShowConfirmEditModal] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const onPreEditHandler = () => {
        setShowConfirmEditModal(true)
    }
    const onEditHandler = (newInfoDevice) => {
        setLoading(true)
        axios.post("/device/interface/edit", newInfoDevice).then(response => {
            toast.success("interface updated successfully")
            setShowConfirmEditModal(false)
            setLoading(false)
        }).catch(err => {
            toast.error("error occured")
            setShowConfirmEditModal(false)
            setLoading(false)

        })
    }
    return (
        <tr>
            <EditModal isOpen={showConfirmEditModal} toggle={() => setShowConfirmEditModal(!showConfirmEditModal)} onEdit={onEditHandler} loading={loading} ip={props.ip} />
            <th scope="row">{props.item.name}</th>
            <td className={classes.itemTitle}>{props.item.ip}</td>
            <td className={classes.itemTitle}>{props.item.mask}</td>
            <td className={classes.itemTitle}>{props.item.enabled ? "true" : "false"}</td>
            <td>
                <EditIcon style={{ marginRight: "20px", color: "#114575", cursor: "pointer" }} onClick={onPreEditHandler} />
            </td>
        </tr>

    )
}

export default InterfacesDeviceItem