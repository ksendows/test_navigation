import styled from 'styled-components';
import cssVariables from '../../css_variables';

const { headerHeight, grey, darkGrey, orange, mainFontColor, menuFontSize } = cssVariables;

export const MobileMenuList = styled.ul`
    width: 30%;
    min-width: 320px;
    height: calc(100vh - ${headerHeight});
    list-style: none;
    position: absolute;
    top: ${headerHeight};
    margin: 0;
    padding: 0;
    background-color: ${grey};

    @media (min-width: 769px) {
        display: none;
    }
`;

export const MobileMenuLink = styled.a`
    display: block;    
    padding: 0 10px;
    line-height: 50px;
    text-decoration: none;
    font-size: ${menuFontSize};
    color: ${mainFontColor};
    text-transform: uppercase;
    border-bottom: 1px solid ${darkGrey};
    cursor: pointer;

    &:hover {
        color: ${orange};
    }
`;

export const MobileMenuItem = styled.li`
    height: 50px;
    padding: 0 10px; 
    font-size: 1rem;
    text-align: left; 
    
    &:last-child > ${MobileMenuLink} {
        border-bottom: 0;
    }
`;
