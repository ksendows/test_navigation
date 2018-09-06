import styled from 'styled-components';
import cssVariables from '../../css_variables';

const { headerHeight, orange } = cssVariables;

export const MenuList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    margin: 0;
    padding: 0 32px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const MenuItem = styled.li`
    padding: 0 10px;
`;

export const MenuLink = styled.a`
    line-height: ${headerHeight};
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        color: ${orange};
        cursor: pointer;
    }
`;