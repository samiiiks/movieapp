import styled from "styled-components";
import React from 'react'
import { Link } from 'react-router-dom'
import { FunctionComponent } from 'react';
import './Header.css'

const Navbar = styled.nav`
background: #000;
`
const List = styled.li`
float:left;
list-style: none;
`
const Order = styled.ul`
    overflow:auto;
    padding: 19px;
    margin: 0px;
`
const Color = styled.span`
color: red
`
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
   color:#2691d9;
  }
`;
const Header: FunctionComponent = () => {
    return (
        <div>
            <Navbar>
                <h1 style={{ float: 'left', marginRight: '23px' }}>Movie<Color>MovieFy</Color></h1>
                <Order className='order'>
                    <List className='list' style={{ margin: '12px' }}><NavLink to='/home' className='navlink' >Home</NavLink></List>
                    <List className='list' style={{ margin: '12px' }}><NavLink to='/about' className='navlink' >About</NavLink></List>
                    <List className='list' style={{ margin: '12px' }}><NavLink to='/login' className='navlink' >Log in</NavLink></List>
                    
                </Order>
            </Navbar>
        </div>
    )
}

export default Header
