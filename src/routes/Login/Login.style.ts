import styled from 'styled-components';

export const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    background-color: #d9d9d9;
  }
`;

export const Container = styled.section`
  position: relative;
  padding: 3rem 2.5rem;
  padding-bottom: 0.8rem;
  gap: 3rem;
  background-color: #d9d9d9;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotate(1.8deg);

  @media (max-width: 400px) {
    width: 100%;
    padding: 3rem 0px 1.2rem;
    transform: rotate(0deg);
  }

  &::before {
    content: '';
    top: 0;
    left: 0;
    margin-top: 12px;
    margin-left: 12px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    color: teal;
    position: absolute;
    background-color: black;

    @media (max-width: 400px) {
      display: none;
    }
  }
`;

export const Header = styled.header`
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 106px;
`;

export const Description = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 0.9rem;
`;

export const QRcode = styled.img`
  max-width: 150px;
  margin-top: -10px;
`;

export const LoginButton = styled.button`
  padding: 1.2rem 2.5rem;
  border-radius: 50%;
  border: 1px solid black;
  background: linear-gradient(to bottom, #d9d9d9, #393939);
  text-align: center;
  display: inline-block;
  cursor: pointer;

  &:hover {
    scale: calc(0.96);
    transition: 300ms ease-in-out;
  }
`;

export const Copyright = styled.footer`
  width: 120%;
  text-align: end;
  font-size: 0.8rem;
  font-family: 'DotGothic16-Regular';
  padding-top: 15px;
  border-top: 1px solid black;

  @media (max-width: 400px) {
    display: none;
  }
`;
