import styled from 'styled-components';
import cssVariables from '../../css_variables';

const { orange, darkGrey, white, mainFontColor, menuFontSize } = cssVariables;

export const SubmenuItemTitle = styled.div`
    border-bottom: 1px solid ${darkGrey};
`;

export const SubmenuListItem = styled.li`   
    position: relative;
    height: 52px;
    line-height: 52px; 
    text-align: left;

    &:last-child ${SubmenuItemTitle}: {
        border-bottom: none;
    }
`;

export const SubmenuItemLink = styled.a`
    display: block;
    padding: 0 24px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: ${menuFontSize};
    color: ${mainFontColor};
    cursor: pointer;
    
    &:hover {
        background-color: ${darkGrey};
    }
`;

export const SubmenuItemQuantity = styled.div`
    position: absolute;
    top: 50%;
    right: 14%;
    transform: translateY(-50%);    
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 11px;
    text-align: center;
    color: ${white};    
    border-radius: 50%;
    background-color: ${orange};
`;