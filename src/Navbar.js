import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div `
    height: 70px;
    background-color: #4267b2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
const Title = styled.div `
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    textTransform: uppercase;
    margin-left: 20px;
    
    &:hover {color: grey} // Hover
`;

const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartCount = styled.div`
    background: ${(props) => props.color};
    display: ${(props) => (
        props.show ? "block" : "none"
    )};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
`;


class Navbar extends Component {
  render() {
    return (
        <>
        <Nav>
            <Title>Movie-App</Title>

            <CartIconContainer>
                <CartImg
                    src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                    alt="cart-icon"
                />

                {/* Here color is props */}
                <CartCount color="yellow" show = {false}>3</CartCount> 
            </CartIconContainer>
        </Nav>
        </>
    )
  }
}

export default Navbar;