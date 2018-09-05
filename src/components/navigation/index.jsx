/*eslint-disable*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Submenu from "../submenu";
// import { getPagesToShow } from "../../../utils/selectors";
// import nextIcon from "../../../icons/next.svg";
import styles from './styles.css';

const INITIAL_STATE = {
    isSubmenuOpen: false,
};

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    };

    handleSubmenuOpen = () =>
        this.setState(prevState => {isSubmenuOpen: true});

    render () {
        const { isSubmenuOpen} = this.state;

        return (
            <div className={styles.container}>
                <div>Company name</div>
                <ul  className={styles.menu}>
                    <li className={styles.menu__item}>dashboard</li>
                    <li className={styles.menu__item}>projects</li>
                    <li className={styles.menu__item}>team</li>
                    <li className={styles.menu__item}>company</li>
                </ul>
                <div>
                    <button onClick={this.handleSubmenuOpen}>Person</button>
                    {isSubmenuOpen && <Submenu />}
                </div>
            </div>
        )
    }
}
