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
import classes from "./DeleteModal.module.css"
const DeleteModal = (props) => {
    const [ConfirmationMessage, setConfirmationMessage] = React.useState("");
    return (
        <Modal centered isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Delete device</ModalHeader>
            <ModalBody>
                <Row>
                    <Col>
                        <Row>
                            <div style={{ marginBottom: "10%", marginTop: "10px" }}>
                                Are you sure you want to delete your device{" "}
                                <span style={{ fontWeight: "bold" }}>{props.name}</span> ?
                            </div>
                        </Row>
                        <Row>
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
                    onClick={props.onDelete}
                    style={{ width: "100%" }}
                >
                    Delete this device
                    {props.loading &&
                        <Spinner size="sm" className={classes.spinner} />
                    }

                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default DeleteModal;
