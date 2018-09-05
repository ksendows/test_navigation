import React from 'react';
import SubmenuItem from "../submenu-item";
// import closeIcon from "../../icons/close.svg";
import styles from './styles.css';

const Submenu = ( ) => (
    <div className={styles.container}>
        <ul className={styles.menu}>
            <SubmenuItem title={"my profile"} hasQuantintity={false} />
            <SubmenuItem title={"my projects"} hasQuantintity={true} quantity={23} />
            <SubmenuItem title={"notifications"} hasQuantintity={true} quantity={23} />
            <SubmenuItem title={"tasks"} hasQuantintity={true} quantity={23} />
            <SubmenuItem title={"help"} hasQuantintity={false} />
            <SubmenuItem title={"logout"} hasQuantintity={false} />
        </ul>
    </div>
);

export default Submenu;