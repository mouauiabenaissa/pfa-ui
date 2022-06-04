import React from "react";
import classes from "./DeviceItem.module.css"
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModal from "../DeviceItem/DeleteModal/DeleteModal"
import EditModal from "./EditModal/EditModal";
import axios from '../../../../utils/axios';
import { toast } from 'react-toastify';

function DeviceItem(props) {
    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = React.useState(false)
    const [showConfirmEditModal, setShowConfirmEditModal] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const onPreDeleteHandler = () => {
        setShowConfirmDeleteModal(true)
    }
    const onPreEditHandler = () => {
        setShowConfirmEditModal(true)
    }
    const onDeleteHandler = () => {
        setLoading(true)
        axios.post(`/device/delete/`, props.item.ip).then(response => {
            toast.success("device deleted successfully")
            setShowConfirmDeleteModal(false)
            setLoading(false)
        }).catch(err => {
            toast.error("error occured")
            setShowConfirmDeleteModal(false)
            setLoading(false)

        })
    }
    const onEditHandler = (newInfoDevice) => {
        setLoading(true)
        axios.post("/device/edit", newInfoDevice).then(response => {
            toast.success("device updated successfully")
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
            <DeleteModal isOpen={showConfirmDeleteModal} toggle={() => setShowConfirmDeleteModal(!showConfirmDeleteModal)} onDelete={onDeleteHandler} loading={loading} ip={props.item.ip} />
            <EditModal isOpen={showConfirmEditModal} toggle={() => setShowConfirmEditModal(!showConfirmEditModal)} onEdit={onEditHandler} loading={loading} ip={props.item.ip} description={props.item.description} />
            <th scope="row">{props.item.ip}</th>
            <td className={classes.itemTitle}>{props.item.state === 0 ?
                <i className={["fa-solid fa-circle", classes.available].join(' ')}></i> :
                <i className={["fa-solid fa-circle", classes.unavailable].join(' ')}></i>}</td>
            <td>
                <EditIcon style={{ marginRight: "20px", color: "#114575", cursor: "pointer" }} onClick={onPreEditHandler} />
                <DeleteIcon style={{ color: "#DE4452", cursor: "pointer" }} onClick={onPreDeleteHandler} />
            </td>
        </tr>

    );
}

export default DeviceItem;
