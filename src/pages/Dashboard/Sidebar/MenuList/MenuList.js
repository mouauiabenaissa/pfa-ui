import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const getMenuStyles = () => ({
    bmBurgerButton: {
        position: "absolute",
        width: 26,
        height: 20,
        left: 30,
        top: 40,
        zIndex: 19,
    },
    bmBurgerBars: {
        background: "#114575",
    },
    bmBurgerBarsHover: {
        background: "#a90000",
    },
    bmCrossButton: {
        display: "none",
    },
    bmCross: {
        background: "#d1d8df",
    },
    bmMenuWrap: {
        position: "fixed",
        height: "100%",
        width: 255,
        zIndex: 30,
    },
    bmMenu: {
        background: "#eeeeee",
    },
    bmItem: {
        outline: "none",
        "&:focus": {
            outline: "none",
        },
    },
    bmMorphShape: {
        fill: "#114575",
    },
    bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)",
        zIndex: 20,
    },
});

function MenuComponent({ children, isMobile }) {
    const menuStyles = getMenuStyles();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu
            isOpen={!isMobile || isOpen}
            noOverlay={!isMobile}
            disableCloseOnEsc
            styles={menuStyles}
            onStateChange={(state) => setIsOpen(state.isOpen)}
        >
            {children}
        </Menu>
    );
}

export default MenuComponent;
