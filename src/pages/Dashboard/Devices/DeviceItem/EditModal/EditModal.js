import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col,
    Input,
    Spinner
} from "reactstrap";
import classes from "./EditModal.module.css"
import TextField from '@mui/material/TextField';

const EditModal = (props) => {
    const [ConfirmationMessage, setConfirmationMessage] = React.useState("");
    const [newDevice, setNewDevice] = React.useState([])

    React.useEffect(() => {
        setNewDevice({ ...newDevice, device_ip: props.ip, description: props.description })
    }, [])

    console.log(newDevice)
    return (
        <Modal centered isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Edit device</ModalHeader>
            <ModalBody>
                <Row className={classes.row}>
                    <Col>
                        <Row >
                            <div style={{ marginBottom: "10%", marginTop: "10px" }}>
                                Are you sure you want to Edit your device{" "}
                                <span style={{ fontWeight: "bold" }}>{props.name}</span> ?
                            </div>
                        </Row>
                        <Row className={classes.TextFieldStyle}>
                            <Col>
                                <TextField
                                    className={classes.TextFieldFirst}
                                    id="ip"
                                    label="Adress_IP"
                                    placeholder={props.ip}
                                    onChange={(e) => setNewDevice({ ...newDevice, new_ip: e.target.value })}
                                    variant="standard"
                                    style={{ width: "100%" }}
                                />
                            </Col>
                        </Row>
                        <Row className={classes.TextFieldStyle}>
                            <Col>
                                <TextField
                                    className={classes.TextFieldFirst}
                                    id="password"
                                    label="New_Password"
                                    placeholder='New_Password'
                                    onChange={(e) => setNewDevice({ ...newDevice, new_password: e.target.value })}
                                    variant="standard"
                                    style={{ width: "100%" }}
                                />
                            </Col>
                        </Row>
                        <Row className={classes.TextFieldStyle}>
                            <Col>
                                <TextField
                                    className={classes.TextFieldFirst}
                                    id="username"
                                    label="Username"
                                    placeholder='New_Username'
                                    onChange={(e) => setNewDevice({ ...newDevice, new_usernanme: e.target.value })}
                                    variant="standard"
                                    style={{ width: "100%" }}
                                />
                            </Col>
                        </Row>
                        <Row className={classes.confirm}>
                            <div style={{ marginBottom: "10%" }}>
                                <Input
                                    value={ConfirmationMessage}
                                    placeholder={`type ${props.ip} to confirm`}
                                    onChange={(e) => setConfirmationMessage(e.target.value)}
                                />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="danger"
                    disabled={ConfirmationMessage !== props.ip}
                    onClick={() => props.onEdit(newDevice)}
                    style={{ width: "100%" }}
                >
                    Edit this device
                    {props.loading &&
                        <Spinner size="sm" className={classes.spinner} />
                    }

                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditModal;
