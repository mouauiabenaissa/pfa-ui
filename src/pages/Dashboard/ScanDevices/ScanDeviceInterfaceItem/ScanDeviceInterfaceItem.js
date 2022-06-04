import React from 'react'

function ScanDeviceInterfaceItem(props) {
    return (
        <tr>
            <th scope="row">{props.item.name}</th>
        </tr>
    )
}

export default ScanDeviceInterfaceItem