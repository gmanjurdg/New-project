import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import MaterialIcon from 'material-icons-react';


export default class Navbar extends Component {
    render() {
        return (
            <NavWraper className="navbar navbar-expand-sm navbar-yellow px-sm-5">
                <Link to="/">
                    <MaterialIcon icon="view_list"  />

                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to="/Cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        My Cart
                       </ButtonContainer>
                </Link>
            </NavWraper>

        );
    }
}

const NavWraper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize!important;

}
`;