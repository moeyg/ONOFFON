import styled from 'styled-components';

export const LoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: center;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    background: var(--background-color);
    z-index: -1;
    inset: 0;
    opacity: 0.7;
  }
`;

export const VisualEffect = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  border-radius: 20px;
  opacity: 0.38;
  z-index: -1;
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
  color: var(--secondary-color);
  @media (max-width: 550px) {
    font-size: 0.85rem;
  }
`;

export const LoginButton = styled.button`
  width: 15rem;
  height: 3.5rem;
  border-radius: 20px;
  border: 1px solid var(--primary-color);
  background-color: var(--background-color);
  font-size: 1.2rem;
  text-align: center;
  color: var(--primary-color);
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
