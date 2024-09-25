import styled from 'styled-components';

export const Search = styled.section`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 6rem 0;
  gap: 1.2rem;
`;

export const Movie = styled.section`
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

export const MovieInfo = styled.section``;

export const MoviePoster = styled.img`
  width: 300px;
`;

export const MovieTitle = styled.p`
  font-size: 1rem;
`;

export const NoResults = styled.section`
  width: 100%;
  text-align: center;
  padding: 15rem 0;
  font-size: 1rem;
`;
