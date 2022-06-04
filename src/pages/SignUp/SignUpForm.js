import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./SignUpForm.module.css"
import axios from "../../utils/axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import GlobalContext from "../../Context/GlobalContext";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Spinner } from "reactstrap";

function SignUpForm() {
    const [invalid, setinvalid] = React.useState(true)
    const [valid, setvalid] = React.useState(false)
    const [Email, setEmail] = React.useState("")
    const [Password, setPassword] = React.useState("")
    const [ConfirmPass, setConfirmPass] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const context = React.useContext(GlobalContext)
    const navigate = useNavigate()

    const Data_User = {
        email: Email,
        password: Password,
    }
    const handleSignUp = () => {
        if (valid) {
            setLoading(true)
            axios.post("/v1/user", Data_User).then(response => {
                setLoading(false)
                navigate('/', { state: response.data.message })
            })
                .catch(error => {
                    setLoading(false)
                    toast.error("failed");
                })
        } else {
            setLoading(false)
            toast.error("failed")
        }
    }

    const handleConfirm = () => {
        if (Password === ConfirmPass) {
            setinvalid(!invalid)
            setvalid(!valid)
        } else {
            setinvalid(!invalid)
            setvalid(!valid)
        }
    }
    React.useEffect(() => {
        context.user ? navigate("/dashboard") : navigate('/signup')
    }, [])

    return (

        <Container fluid className={classes.mainContainer} >
            <ToastContainer />
            <Row style={{ width: '100%' }}>
                <Col xs="12">
                    <Row style={{ display: "flex", justifyContent: "center" }}>
                        <Col xs="12" md="4" lg="3" className={classes.formContainer}>
                            <Form className={classes.form}>
                                <FormGroup>
                                    <Label className={classes.headerTitle}>Sign Up</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        type="email"
                                        onChange={e => {
                                            setEmail(e.target.value)
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        type="password"
                                        onChange={e => {
                                            setPassword(e.target.value)
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="confirmPass">
                                        Confirm your password
                                    </Label>
                                    <Input
                                        id="confirmPass"
                                        name="confirmPass"
                                        type="password"
                                        valid={valid}
                                        invalid={invalid}
                                        onChange={e => {
                                            setConfirmPass(e.target.value)
                                        }}
                                        onBlur={() => handleConfirm()}

                                    />
                                </FormGroup>
                                <Button className={classes.button} onClick={() => handleSignUp()} style={{ width: "100%", backgroundColor: "#114575" }}>
                                    {loading && <Spinner size="sm" className={classes.spinner} />}
                                    <i className="fa-solid fa-user-plus" style={{ marginRight: "5px" }}></i>Sign up
                                </Button>
                                <FormGroup style={{ marginTop: "30px", display: 'flex', justifyContent: "center" }}>
                                    <Label style={{ color: "rgb(130,130,130)", fontSize: '12px' }}>
                                        Already have an acount? {"     "}
                                        <NavLink to="/" style={{ textDecoration: "none" }}>
                                            Login
                                        </NavLink>
                                    </Label>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >

    )
}
export default SignUpForm