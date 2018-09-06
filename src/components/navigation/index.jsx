/*eslint-disable*/
import React, {Component} from 'react';
import Submenu from '../submenu';
import avatarPlaceholder from '../../images/avatar.svg';
import { Header, Wrapper, Title, Menu, MenuItem, UserNav, UserNavButton, Burger, BurgerRow, MobileMenu } from './style';


const INITIAL_STATE = {
    isSubmenuOpen: false,
    isMobileMenuOpen: false
};

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    };

    handleSubmenuOpen = () => 
        this.setState((prevState) => ({isSubmenuOpen: !prevState.isSubmenuOpen}));

    handleMobileMenuOpen = () =>
        this.setState((prevState) => ({ isMobileMenuOpen: !prevState.isMobileMenuOpen }));

    render () {
        const { isSubmenuOpen, isMobileMenuOpen } = this.state;

        return (
            <Header>
                <Wrapper>
                    <Burger onClick={this.handleMobileMenuOpen}>
                        <BurgerRow></BurgerRow>
                        <BurgerRow></BurgerRow>
                        <BurgerRow></BurgerRow>
                    </Burger>
                    <Title>Company name</Title>
                    {isMobileMenuOpen && 
                        <MobileMenu>
                            <MenuItem>dashboard</MenuItem>
                            <MenuItem>projects</MenuItem>
                            <MenuItem>team</MenuItem>
                            <MenuItem>company</MenuItem>
                        </MobileMenu> 
                    }
                    <Menu>
                        <MenuItem>dashboard</MenuItem>
                        <MenuItem>projects</MenuItem>
                        <MenuItem>team</MenuItem>
                        <MenuItem>company</MenuItem>
                    </Menu>
                </Wrapper>
                <UserNav>
                    <UserNavButton onClick={this.handleSubmenuOpen}>
                        <img src={avatarPlaceholder} alt=""/>
                    </UserNavButton>
                    {isSubmenuOpen && <Submenu />}
                </UserNav>
            </Header>
        )
    }
}
