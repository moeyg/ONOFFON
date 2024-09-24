import styled from 'styled-components';

export const LoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url('/images/background.svg');
  background-position: center;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  position: relative;
  padding: 3rem 2.5rem;
  padding-bottom: 0.8rem;
  gap: 2rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    width: 100%;
    padding: 3rem 0px 1.2rem;
    transform: rotate(0deg);
  }
`;

export const Header = styled.header`
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 356px;
  margin-bottom: 5px;
  @media (max-width: 550px) {
    max-width: 246px;
  }
`;

export const Description = styled.p`
  font-family: 'Pretendard-Light';
  font-size: 1.1rem;
  color: #ffdbb7;
  @media (max-width: 550px) {
    font-size: 0.85rem;
  }
`;

export const LoginButton = styled.button`
  width: 15rem;
  height: 3.5rem;
  border-radius: 20px;
  border: 1px solid #ff7f00;
  background: black;
  font-size: 1.2rem;
  text-align: center;
  color: #ff7f00;
  display: inline-block;
  cursor: pointer;

  @media (max-width: 550px) {
    font-size: 0.8rem;
    width: 10rem;
    height: 2.5rem;
    border-radius: 10px;
  }

  &:hover {
    opacity: 0.7;
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
