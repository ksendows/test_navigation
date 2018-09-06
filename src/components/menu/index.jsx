import React from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem, MenuLink } from './style';

const Menu = ({ menuItems}) => (
    <MenuList>
        {menuItems.map(item => (
            <MenuItem key={item}>
                <MenuLink>{item}</MenuLink>
            </MenuItem>
        ))}
    </MenuList>
);

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Menu;