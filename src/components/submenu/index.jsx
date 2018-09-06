import React from 'react';
import SubmenuItem from "../submenu-item";
import { Wrapper, SubmenuTail1, SubmenuTail2, SubmenuList } from './style';

const Submenu = ( ) => (
    <Wrapper>
        <SubmenuTail1></SubmenuTail1>
        <SubmenuTail2></SubmenuTail2>
        <SubmenuList>
            <SubmenuItem title={"my profile"} hasQuantintity={false} />
            <SubmenuItem title={"my projects"} hasQuantintity={true} quantity={23} />
            <SubmenuItem title={"notifications"} hasQuantintity={true} quantity={23} />
            <SubmenuItem title={"tasks"} hasQuantintity={true} quantity={23} />
            <SubmenuItem title={"help"} hasQuantintity={false} />
            <SubmenuItem title={"logout"} hasQuantintity={false} />
        </SubmenuList>
    </Wrapper>
);

export default Submenu;