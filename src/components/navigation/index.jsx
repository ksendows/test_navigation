import React, {Component} from 'react';
import Menu from '../menu';
import MobileMenu from '../mobileMenu';
import Submenu from '../submenu';
import avatarPlaceholder from '../../images/avatar.svg';
import { Header, Wrapper, Title, UserNav, UserNavButton, Burger, BurgerRow } from './style';

const INITIAL_STATE = {
    isSubmenuOpen: false,
    isMobileMenuOpen: false,
    menuItems: ['dashboard', 'projects', 'team', 'company'],
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
        const { isSubmenuOpen, isMobileMenuOpen, menuItems } = this.state;

        return (
            <Header>
                <Wrapper>
                    <Burger onClick={this.handleMobileMenuOpen}>
                        <BurgerRow />
                        <BurgerRow />
                        <BurgerRow />
                    </Burger>
                    <Title>Company name</Title>
                    {isMobileMenuOpen && <MobileMenu menuItems={menuItems} />}
                    <Menu menuItems={menuItems} />
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
