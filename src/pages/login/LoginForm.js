import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, FormGroup, Label, Spinner } from "reactstrap";
import classes from './LoginForm.module.css'
import axios from "../../utils/axios"
import { toast, ToastContainer } from "react-toastify";
import LocalStorage from '../../utils/localStorageService';
import GlobalContext from '../../Context/GlobalContext';
import Image from "../../assets/images/login.svg"
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

function LoginForm() {
    const [userData, setuserData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [showPass, setShowPass] = React.useState(false)

    const handleClickShowPassword = () => {
        setShowPass(!showPass);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    const handleLogin = () => {
        setLoading(true)
        axios.post('/user/login', userData)
            .then(response => {
                console.log(response)
                LocalStorage.setToken(response.data.token)
                console.log(response.data.token)
                setLoading(false)
                window.location.href = "/devices"
                toast.success("success")
            })
            .catch(error => {
                setLoading(false)
                toast.error("failed")
            })

    }

    React.useEffect(() => {
        context.user ? navigate("/Devices") : navigate('/')
    }, [])
    console.log(userData)
    return (
        <Container fluid className={classes.mainContainer} >
            <ToastContainer />
            <Row style={{ width: '100%' }}>
                <Col xs="12" >
                    <Row style={{ display: "flex", justifyContent: "center", margin: '0' }}>
                        <Col xs="12" md="4" lg="3" className={classes.formContainer} >
                            <img src={Image} className={classes.comWorkLogo} alt="logo" />
                            <div className={classes.form}>
                                <h5 className={classes.headerTitle}>Login</h5>
                                <TextField
                                    className={classes.TextFieldFirst}
                                    id="email"
                                    label="Adress_Email"
                                    placeholder='username'
                                    onChange={(e) => setuserData({ ...userData, username: e.target.value })}
                                    InputProps={{
                                        startAdornment: (
                                            <></>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="standard"
                                />
                                <TextField
                                    className={classes.TextFieldFirst}
                                    id="pass"
                                    label="Password"
                                    onChange={(e) => setuserData({ ...userData, password: e.target.value })}
                                    placeholder="password"
                                    type={showPass ? 'text' : 'password'}
                                    InputProps={{
                                        startAdornment: (
                                            <></>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPass ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="standard"
                                />
                                <Button className={classes.button} onClick={() => handleLogin()} style={{ width: "100%", backgroundColor: "#114575" }}>
                                    {loading ? <Spinner size="sm" className={classes.spinner} style={{ marginRight: "8px" }} /> : <i className="fa-solid fa-right-to-bracket" style={{ marginRight: "8px" }}></i>}
                                    Login
                                </Button>
                                <FormGroup style={{ marginTop: "30px", display: 'flex', justifyContent: "center" }}>
                                    <Label style={{ color: "rgb(130,130,130)", fontSize: '12px' }}>
                                        Don't have an acount? {"     "}
                                        <NavLink to="/signup" style={{ textDecoration: "none" }}>
                                            Sign Up
                                        </NavLink>
                                    </Label>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    )
}

export default LoginForm
