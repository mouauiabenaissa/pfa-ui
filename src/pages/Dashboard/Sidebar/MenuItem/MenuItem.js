import React from "react";
import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import CollapsibleContent from "../../../../Components/CollapsibleContent/CollapsibleContent";
import { useSidebar } from "../../../../Hooks/useSidebar";
import { useLocation } from "react-router-dom";

const useStyles = createUseStyles({
    activeContainer: {
        backgroundColor: "#114575",
    },
    container: {
        display: "flex",
        height: 56,
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgba(17,69,117,0.1)",
        },
        paddingLeft: ({ level }) => 32 * level,
        transition: "all 0.2s ease-in-out",
    },
    leftBar: {
        borderLeft: ({ level }) =>
            level > 1 ? "none" : "3px solid #114575 ",
    },
    title: {
        fontSize: 16,
        lineHeight: "20px",
        letterSpacing: "0.2px",
        color: ({ isActivated }) =>
            isActivated ? "white" : "#8D8D8D",
        marginLeft: 24,
    },
});

function MenuItem({
    children,
    icon: Icon,
    id,
    items = [],
    level = 1,
    onClick,
    title,
}) {
    const theme = useTheme();
    const { pathname } = useLocation()
    const isCollapsible = children && children.length > 0;
    const { isExpanded, isActive, onItemClick } = useSidebar({
        isCollapsible,
        item: id,
        items,
    });
    const isActivated = isActive || (pathname.split("/")[1].includes(id.split("/")[1]) && level === 1)
    const classes = useStyles({ theme, level, isActivated });
    const classNameColumn = isActivated ? classes.leftBar : "";
    const classNameContainer = [
        classes.container,
        isActivated && classes.activeContainer,
    ].join(" ");
    const iconColor = isActivated ? "white" : "#000000";

    function onItemClicked(e) {
        if (onClick) {
            onClick(e);
        }
        onItemClick();
    }

    return (
        <Column key={id} className={classNameColumn}>
            <Row
                vertical="center"
                onClick={onItemClicked}
                className={classNameContainer}
            >
                <div style={{ color: `${iconColor}` }}>{Icon}</div>
                <span className={classes.title}>{title}</span>
            </Row>
            {isCollapsible && (
                <CollapsibleContent expanded={isExpanded}>
                    {children.map((child) => child.type({ ...child.props }))}
                </CollapsibleContent>
            )}
        </Column>
    );
}


export default MenuItem;
