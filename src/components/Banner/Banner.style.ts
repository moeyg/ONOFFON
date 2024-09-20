import styled from 'styled-components';

export const MovieBackdrop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 98%;
  overflow: hidden !important;
  z-index: -100;
  object-fit: cover;
  background-position: center;
`;

export const Banner = styled.section`
  position: relative;
  padding: 20px;
  overflow: hidden;
  color: white;
  height: 70vh;
  width: 50vw;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.04) 0.27%,
    rgba(0, 0, 0, 0.17) 66.09%,
    rgba(0, 0, 0, 0) 99.73%
  );
  backdrop-filter: blur(3.5px);
`;

export const BannerContents = styled.div``;

export const MovieTitle = styled.h1`
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const MovieDescription = styled.p`
  margin-top: -10px;
  width: 60%;
  font-size: 1.2rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const PlayButton = styled.div``;

export const Button = styled.button`
  background-color: white;
  color: black;
  border: none;
  width: 95px;
  height: 35px;
  cursor: pointer;
  font-size: 1.1rem;

  @media (max-height: 690px) {
    width: 80px;
    height: 29px;
    font-size: 0.8rem;
  }

  &:hover {
    opacity: 0.7;
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
