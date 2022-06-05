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
    const [newDevice, setNewDevice] = React.useState([])
    React.useEffect(() => {
        setNewDevice({ ...newDevice, device_ip: props.ip.device_ip })
    }, [])

    console.log(newDevice)
    return (
        <Modal centered isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Edit interface</ModalHeader>
            <ModalBody>
                <Row className={classes.row}>
                    <Col>
                        <Row >
                            <div style={{ marginBottom: "10%", marginTop: "10px" }}>
                                Are you sure you want to Edit your interface{" "}
                                <span style={{ fontWeight: "bold" }}>{props.name}</span> ?
                            </div>
                        </Row>

                        <Row className={classes.TextFieldStyle}>
                            <Col>
                                <Input
                                    bsSize="lg"
                                    className="mb-3"
                                    type="select"
                                    value="GigabitEthernet1"
                                    onChange={e => setNewDevice({ ...newDevice, name: e.target.value })}

                                >
                                    <option>
                                        GigabitEthernet1

                                    </option>
                                    <option>
                                        GigabitEthernet2
                                    </option>
                                    <option>

                                        GigabitEthernet3
                                    </option>

                                </Input>
                            </Col>
                        </Row>
                        <Row className={classes.TextFieldStyle}>
                            <Col>
                                <TextField
                                    className={classes.TextFieldFirst}
                                    id="ip"
                                    label="Adress_IP"
                                    onChange={(e) => setNewDevice({ ...newDevice, ip: e.target.value })}
                                    variant="standard"
                                    style={{ width: "100%" }}
                                />
                            </Col>
                        </Row>
                        <Row className={classes.TextFieldStyle}>
                            <Col>
                                <TextField
                                    className={classes.TextFieldFirst}
                                    id="mask"
                                    label="mask"
                                    onChange={(e) => setNewDevice({ ...newDevice, mask: e.target.value })}
                                    variant="standard"
                                    style={{ width: "100%" }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ModalBody >
            <ModalFooter>
                <Button
                    color="danger"
                    onClick={() => props.onEdit(newDevice)}
                    style={{ width: "100%" }}
                >
                    Edit interface
                    {props.loading &&
                        <Spinner size="sm" className={classes.spinner} />
                    }

                </Button>
            </ModalFooter>
        </Modal >
    );
};

export default EditModal;
