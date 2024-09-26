import styled from 'styled-components';

export const NotFound = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const VisualEffect = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  border-radius: 20px;
  opacity: 0.1;
  z-index: -1;
`;

export const Header = styled.header`
  font-family: 'pretendard-bold';
  font-size: 3rem;

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
  @media (max-width: 550px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const BackButton = styled.button`
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

  @media (max-width: 800px) {
    font-size: 1rem;
    width: 12rem;
    height: 2.7rem;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
    width: 10rem;
    height: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 0.6rem;
    width: 8rem;
    height: 2rem;
  }

  &:hover {
    opacity: 0.7;
    transition: 300ms ease-in-out;
  }
`;
