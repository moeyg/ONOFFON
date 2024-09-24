import styled from 'styled-components';

interface Path {
  $path: string;
}

export const Banner = styled.section<Path>`
  background-image: ${(props) =>
    `url('https://image.tmdb.org/t/p/original/${props.$path}')`};
  background-size: cover;
  background-position: center;
  object-fit: fit;
  height: 500px;
  width: 100%;

  @media (max-width: 750px) {
    height: 460px;
  }
`;

export const Backdrop = styled.div<Path>`
  background-image: ${(props) => `url('${props.$path}')`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerContents = styled.div``;

export const PlayButton = styled.img`
  width: 7rem;
  height: 7rem;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 6rem;
    height: 6rem;
  }
  @media (max-width: 800px) {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: 550px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const FadeBottom = styled.div`
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

// --- Preview frame

export const Preview = styled.section``;

export const PreviewContents = styled.div``;

export const Iframe = styled.iframe``;
