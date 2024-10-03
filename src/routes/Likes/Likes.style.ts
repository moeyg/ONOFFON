import styled from 'styled-components';

export const Likes = styled.section`
  width: 100%;
  height: 100vh;
  text-align: center;
  gap: 1.2rem;
  overflow: hidden !important;
`;

export const Title = styled.h1`
  font-family: 'pretendard-bold';
  margin: 7rem 0 3rem;
`;

export const Content = styled.section`
  p {
  }
`;

export const Movie = styled.article`
  flex: 1 1 auto;
  display: inline-block;
  margin: 0 1rem 1rem 1rem;
  padding-bottom: 0.5rem;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(108, 98, 98, 0.1);
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px --16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    transform: scale(1.03);
    border-color: rgba(2, 178, 140, 0.7);
  }
`;

export const MoviePoster = styled.img`
  width: 300px;
`;

export const MovieTitle = styled.h2`
  font-size: 1rem;

  @media (max-width: 850px) {
    font-size: 0.8rem;
  }
`;
