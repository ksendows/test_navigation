import styled from 'styled-components';
import css_variables from '../../css_variables';

const { headerHeight, grey, orange, borderGrey, mainFontColor } = css_variables;


export const Header = styled.header`
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100vw;
    height: ${headerHeight};
    font-size: 1rem;
    background-color: ${grey};
`;

export const Wrapper = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 90%;
    color: ${mainFontColor};

    @media (max-width: 768px) {
        justify-content: flex-start;
    }
`;

export const Title = styled.div`
    padding: 0 32px;
    font-size: 1.1875rem;
    line-height: ${headerHeight};
    text-transform: uppercase;

    @media (max-width: 768px) {
        padding: 0 0 0 10px;
    }
`;

export const Menu = styled.ul`
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
    line-height: ${headerHeight};
    text-transform: uppercase;

    &:hover {
        color: ${orange};
        cursor: pointer;
    }

    @media (max-width: 768px) {
        line-height: 30px;
    }
`;

export const MobileMenu = styled.ul`
    width: 30%;
    min-width: 320px;
    height: calc(100vh - ${headerHeight});
    list-style: none;
    position: absolute;
    top: ${headerHeight};
    margin: 0;
    //transform: translateX(-100%);
    padding: 0;
    background-color: ${grey};
    // transition: transform linear 4000ms;

    @media (min-width: 769px) {
        display: none;
    }
`;

export const UserNav = styled.div`
    position: relative;
    width: 10%;
    min-width: 100px;
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