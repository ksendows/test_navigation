import styled from 'styled-components';
import css_variables from '../../css_variables';

const { borderGrey, white } = css_variables;

export const Wrapper = styled.div`
    position: absolute;
    top: calc(100% + 10px);
    right: 10%;
`;

export const SubmenuTail1 = styled.div`
    position: absolute;
    top: -30px;
    right: 20%;
    width: 0;
    height: 0;
    border: 15px solid;
    border-color: transparent transparent ${borderGrey} transparent;

    @media (max-width: 1024px) {
        right: 13%;
    }
`;

export const SubmenuTail2 = styled(SubmenuTail1)`
    top: -28px;
    border-color: transparent transparent ${white} transparent;
`;

export const SubmenuList = styled.ul`
    width: 190px;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: ${white};
    border: 1px solid ${borderGrey};
    border-radius: 5px;
    box-shadow: 0px 0px 8px 1px ${borderGrey};
`;