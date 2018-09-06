import React from 'react';
import PropTypes from 'prop-types';
import { SubmenuListItem, SubmenuItemLink, SubmenuItemTitle, SubmenuItemQuantity } from './style';

const SubmenuItem = ( {title, hasQuantintity, quantity} ) => (
    <SubmenuListItem>
        <SubmenuItemLink>
            <SubmenuItemTitle>{title}</SubmenuItemTitle>
            {hasQuantintity && <SubmenuItemQuantity>{quantity}</SubmenuItemQuantity>}
        </SubmenuItemLink>
    </SubmenuListItem>
);

SubmenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    hasQuantintity: PropTypes.bool,
    quantity: PropTypes.number
};

SubmenuItem.defaultProps = {
    hasQuantintity: false,
    quantity: 0,
}

export default SubmenuItem;