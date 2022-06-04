import React from "react";
import { Col, Row } from "reactstrap";

import classes from "./CardComponent.module.css"

function CardComponent(props) {
    return (
        <Col className={[classes.container, props.containerStyles].join(" ")}>
            <Row >
                <Col>
                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                        <span className={classes.title}>{props.title}</span>
                        <span className={classes.link}>
                            <a href="https://matias.ma/nsfw/">{props.link}</a>
                        </span>
                    </div>
                    <Row style={{ marginTop: 8, marginBottom: 16 }}>
                        <span className={classes.subtitle}>{props.subtitle}</span>
                        {props.subtitleTwo && (
                            <span className={[classes.subtitle, classes.subtitle2].join(" ")}>
                                {props.subtitleTwo}
                            </span>
                        )}
                    </Row>
                </Col>
            </Row>
            {props.children}
        </Col>
    );
}

export default CardComponent;
