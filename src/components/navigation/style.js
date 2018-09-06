import styled from 'styled-components';
import cssVariables from '../../css_variables';

const { headerHeight, grey, borderGrey, mainFontColor, logoFontSize } = cssVariables;


export const Header = styled.header`
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100vw;
    height: ${headerHeight};
    background-color: ${grey};
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: calc(100% - 100px);
    color: ${mainFontColor};

    @media (max-width: 768px) {
        justify-content: flex-start;
    }
`;

export const Title = styled.div`
    padding: 0 32px;
    line-height: ${headerHeight};
    font-size: ${logoFontSize};
    text-transform: uppercase;

    @media (max-width: 768px) {
        padding: 0 0 0 10px;
    }
`;

export const UserNav = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100px;
    text-align: right;
    border-left: 1px solid ${borderGrey};
`;

export const UserNavButton = styled.button`
    width: 100%;
    height: 100%;    
    padding: 13px 25px;
    border: none;
    outline: none;
    background-color: ${grey};
    cursor: pointer;
`;

export const Burger = styled.div`
    display: none;
    margin: 10px;
    padding: 8px 0;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const BurgerRow = styled.div`
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
    border-radius: 5px;
`;