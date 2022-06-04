import React from 'react'
import classes from "./InterfacesDeviceItem.module.css"

function InterfacesDeviceItem(props) {
    return (
        <tr>
            <th scope="row">{props.item.name}</th>
            <td className={classes.itemTitle}>{props.item.ip}</td>
            <td className={classes.itemTitle}>{props.item.mask}</td>
            <td className={classes.itemTitle}>{props.item.enabled}</td>
        </tr>

    )
}

export default InterfacesDeviceItem