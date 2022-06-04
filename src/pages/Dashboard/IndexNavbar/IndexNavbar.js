import React, { useContext } from 'react'
import { string } from "prop-types";
import { Row } from "simple-flexbox";
import classes from "./IndexNavbar.module.css"
import localStorage from '../../../utils/localStorageService';
import GlobalContext from '../../../Context/GlobalContext';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useLocation } from 'react-router-dom';

function IndexNavbar() {
    const context = useContext(GlobalContext)
    const [isOpenUserDropdown, setIsOpenUserDropdown] = React.useState(false)
    const { pathname } = useLocation();
    let title = pathname.split("/")[1].charAt(0).toUpperCase(0) + pathname.split("/")[1].slice(1)
    const onSettingsClick = () => {
        //window.location.href = "/settings"
    }

    const handleLogout = () => {
        localStorage.clearToken()
        window.location.href = "/"
    }

    return (
        <Row
            className={classes.container}
            vertical="center"
            horizontal="space-between"
        >
            <span className={classes.title}>{title}</span>
            <Row vertical="center">
                <div className={classes.separator}></div>
                <Dropdown isOpen={isOpenUserDropdown} toggle={() => setIsOpenUserDropdown(!isOpenUserDropdown)}>
                    <DropdownToggle nav>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 className={classes.name}>{context.user}</h5>
                            <img src={`https://avatars.dicebear.com/api/initials/${context.user}}.svg`} alt="avatar" className={classes.avatar} />
                        </div>
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem onClick={onSettingsClick}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <i className="fa-solid fa-gear"></i>
                                <h5 className={classes.dropdownItemText} style={{ margin: "10px" }}>Settings</h5>
                            </div>
                        </DropdownItem>
                        <DropdownItem onClick={handleLogout}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                <h5 className={classes.dropdownItemText} style={{ color: 'red', margin: "10px" }} >Logout</h5>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </Row>
        </Row>
    )
}
IndexNavbar.propTypes = {
    title: string,
};

export default IndexNavbar
