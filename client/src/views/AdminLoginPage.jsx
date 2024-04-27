import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import AdminLoginNavbar from "../components/AdminLoginNavbar";
import TransparentAdminFooter from "../components/TransparentAdminFooter";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import {useNavigate } from "react-router-dom";
export default function AdminLoginPage() {
  let navigate = useNavigate();
  const dangerLoginNotify = () => toast.error('Login Failed! Please Login Again');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('https://htt-2-0-server.vercel.app/admin/login', formData);
      if (response.status) {
        const { token } = response.data;
        localStorage.setItem('adminToken', token);
        navigate('/dashboard', { replace: true });
      }
      window.location.reload();
    } catch (error) {
      dangerLoginNotify();
      console.error('login failed', error);
    }
    
  };

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <Toaster />
      <AdminLoginNavbar />
      <div className="page-header clear-filter" filter-color="green">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url('assets/img/login.jpg')"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form onSubmit={handleLogin} className="form">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={"assets/img/logo.png"}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2"><i className="now-ui-icons users_circle-08"></i></span>
                      </div>
                      <Input
                        placeholder="Email"
                        type="email" name='email'
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2"><i className="now-ui-icons text_caps-small"></i></span>
                      </div>
                      <Input
                        placeholder="Password"
                        type="password" name='password'
                        value={formData.password}
                        onChange={handleChange}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      style={{backgroundColor: "#15803d"}}
                      type="submit"
                      size="lg"
                    >
                      Login
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentAdminFooter />
      </div>
    </>
  );
}

