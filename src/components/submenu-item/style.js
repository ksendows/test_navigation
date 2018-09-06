import styled from 'styled-components';
import css_variables from '../../css_variables';

const { orange, darkGrey, white, mainFontColor } = css_variables;

export const SubmenuListItem = styled.li`   
    position: relative;
    height: 50px;
    line-height: 50px; 
    font-size: 1rem;
    text-align: left;
`;

export const SubmenuItemLink = styled.a`
    display: block;
    padding: 0 24px;
    text-transform: uppercase;
    text-decoration: none;
    color: ${mainFontColor};
    cursor: pointer;
    
    &:hover {
        background-color: ${darkGrey};
    }
`;

export const SubmenuItemTitle = styled.div`
    border-bottom: 1px solid ${darkGrey};
`;

export const SubmenuItemQuantity = styled.div`
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);    
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 0.6875rem;
    text-align: center;
    color: ${white};    
    border-radius: 50%;
    background-color: ${orange};
`;