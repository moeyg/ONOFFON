import styled from 'styled-components';

export const Container = styled.div``;

export const MovieGenre = styled.h2`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: #ff7f00;
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
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(108, 98, 98, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px --16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    transform: scale(0.99);
    border-color: rgba(255, 127, 0, 0.7);
  }
`;

export const MoviePoster = styled.img`
  inset: 0px;
  display: block;
  width: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 500ms ease-in-out;
  filter: grayscale(50%);
`;

export const MovieTitle = styled.p`
  font-size: 1.1rem;
  color: #ff7f00;
  opacity: 0.8;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
  @media (max-width: 550px) {
    font-size: 0.6rem;
  }
`;
