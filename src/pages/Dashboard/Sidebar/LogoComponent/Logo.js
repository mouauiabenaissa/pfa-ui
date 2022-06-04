import React from "react";
import classes from "./Logo.module.css"
import { Row, Col } from "reactstrap"
import Logo from '../../../../assets/images/login.svg'
function LogoComponent() {
    return (
        <Row className={classes.container} horizontal="center" vertical="center">
            <Col>
                <img src={Logo} className={classes.comWorkLogo} alt="logo" />
            </Col>
        </Row>
    );
}
export default LogoComponent;
