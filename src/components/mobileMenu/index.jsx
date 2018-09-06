import React from 'react';
import PropTypes from 'prop-types';
import { MobileMenuList, MobileMenuItem, MobileMenuLink } from './style';

const MobileMenu = ({ menuItems }) => (
    <MobileMenuList>
        {menuItems.map(item => (
            <MobileMenuItem key={item}>
                <MobileMenuLink>{item}</MobileMenuLink>
            </MobileMenuItem>
        ))}
    </MobileMenuList>
);

MobileMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MobileMenu;