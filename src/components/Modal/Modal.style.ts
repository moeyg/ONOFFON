import styled from 'styled-components';

export const Presentation = styled.article`
  position: absolute;
  z-index: 200;
`;

export const Container = styled.section`
  position: fixed;
  width: 100%;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;

  @media (max-height: 768px) {
    align-items: unset;
    padding: 0%;
    overflow-y: scroll;
  }
`;

export const Modal = styled.div`
  position: relative;
  max-width: 800px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background-color: var(--background-color);
  animation: fadeIn 400ms;
  overflow-y: scroll !important;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 1000;
  color: var(--primary-color);
  font-size: 1rem;
  background-color: var(--background-color);
  width: 1.9rem;
  height: 1.9rem;
  border: 1px solid var(--background-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieBackdrop = styled.img`
  width: 100%;
  height: auto;
`;

export const MovieContents = styled.section`
  padding: 1.3rem;
  color: var(--primary-color);
`;

export const MovieGenre = styled.p`
  font-weight: 600;
  line-height: 1.5;
  opacity: 0.9;
`;

export const MovieTitle = styled.h2`
  padding: 0;
  font-size: 2rem;
  font-family: 'pretendard-bold';
  margin: 1rem 0;

  @media screen and (max-width: 850px) {
    font-size: 1.7rem;
  }

  @media screen and (max-height: 768px) {
    overflow-y: scroll !important;
  }
`;

export const MovieReleaseDate = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: -0.9rem;
  opacity: 0.9;
`;

export const MovieRate = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
`;

export const MovieOverview = styled.p`
  font-size: 1rem;
  line-height: 1.7;

  @media (max-height: 768px) {
    font-size: 16px;
    overflow-y: scroll !important;
  }
`;
