import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 0 26px;
`;

export const MovieGenre = styled.h2`
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const Movie = styled.article`
  width: 95%;
  height: 100%;
  padding-top: 150%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(108, 98, 98, 0.1);

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px --16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    transform: scale(0.99);
    border-color: rgba(249, 249, 249, 0.4);
  }
`;

export const MoviePoster = styled.img`
  inset: 0px;
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  transition: opacity 500ms ease-in-out;
  z-index: 1;
  filter: grayscale(50%);
`;
