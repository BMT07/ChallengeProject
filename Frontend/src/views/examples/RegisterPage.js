import { React, useState, useEffect } from "react";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { toast } from "react-toastify"
import axios from "axios";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate()





  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/register`, {
        name,
        email,
        password,
        address,
      });

      if (response.status === 200) {
        toast.success("Registration successful. Check your email for the activation link.");
      } else {
        console.log("Unexpected response status: " + response.data);
      }
    } catch (error) {
      toast.error(error.response.data.errors.map(error => error.msg).join(', '));
    }
  };
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/brico3.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h4 className="title mx-auto" style={{ color: "black" }}>Bienvenue</h4>
                <Form className="" onSubmit={handleSubmit}>
                  <label>Nom</label>
                  <Input placeholder="Nom" type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />
                  <label>Email</label>
                  <Input placeholder="Email" type="text" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  <label>Mot de Passe</label>
                  <Input placeholder="Mot de Passe" type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                  <label>Adresse</label>
                  <Input placeholder="Adresse" type="text" value={address}
                    onChange={(e) => setAddress(e.target.value)} />
                  <Button type="submit" block className="btn-round" color="danger">
                    S'inscrire
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    onClick={() => navigate('/')}
                  >
                    Déjà membre ? Se Connecter
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © Copyright {new Date().getFullYear()}
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
