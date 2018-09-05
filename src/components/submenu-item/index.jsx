import React from 'react';
import PropTypes from 'prop-types';
// import closeIcon from "../../icons/close.svg";
import styles from './styles.css';

const SubmenuItem = ( {title, hasQuantintity, quantity} ) => (
    <li className={styles.item}>
        <a href="">{title}</a>
        {hasQuantintity && <div>{quantity}</div>}
    </li>
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