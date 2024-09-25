import styled from 'styled-components';

export const Container = styled.div``;

export const MovieGenre = styled.h2`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
  font-family: 'pretendard-bold';

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const Movie = styled.article`
  width: 95%;
  height: 100%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(108, 98, 98, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px --16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    transform: scale(0.99);
    border-color: rgba(2, 178, 140, 0.7);
  }
`;

export const MoviePoster = styled.img`
  inset: 0px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 500ms ease-in-out;
  z-index: 1;
`;

export const MovieTitle = styled.p`
  padding: 0 0.3rem;
  font-size: 1rem;
  color: var(--primary-color);
  opacity: 0.8;

  @media (max-width: 1100px) {
    font-size: 0.9rem;
  }
  @media (max-width: 850px) {
    font-size: 0.8rem;
  }
`;
