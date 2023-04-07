import React from "react";
import './Header.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom";


const Header = () => {

    const common = {
        marginRight:15,
        fontSize:17,
        letterSpacing:.5,
        color:"#000",
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <div className="mt-2">
                        <h2 className="mt-2 h2-right" style={{ color: "#6c63ff" }}>
                            <Nav.Link href="#home">Ankit Rahi</Nav.Link>
                        </h2>
                    </div>
                    <Nav className="">
                        <div>
                            <NavLink to="/" className="text-decoration-none linkkk" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none linkkk" style={common}>About</NavLink>
                            <NavLink to="/playlist" className="text-decoration-none linkkk" style={common}>Projects</NavLink>
                            <NavLink to="/contact" className="text-decoration-none linkkk" style={common}>Contact</NavLink>
                        </div>
                        {/* <div>
                            <Button variant="primary"><a href="https://www.linkedin.com/in/ankit-rahi-563752258/" className="text-decoration-none text-light">Linkedin</a></Button>
                        </div> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
