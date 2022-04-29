import React from 'react';
import Button from '../Button';
import styled from 'styled-components';
interface HeaderProps {
    isLogin?: boolean;
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* max-width: 1000px; */
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 105px;
    margin: 0 auto;
    border-bottom: 1px solid #ffffff;
`;

const HeaderNav: React.FC<HeaderProps> = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper className="header-section">
                <div>LOGO</div>
                <div>
                    <Button label="업로드" />
                    <Button label="로그인" />
                </div>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default HeaderNav;
