import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const OptionsContainerStyles = css `
    padding: 10px 15px;
    cursor: pointer;
`;
export const HeaderContainer = styled.div `
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 8px;
`;

export const LogoImg = styled(Logo)`
    width: 100%;
    height: 100%;
`

export const OptionsContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div `
    ${OptionsContainerStyles}
`;