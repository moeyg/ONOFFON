import * as S from './Home.style';
import Banner from '../../components/Banner/Banner';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import requests from '../../api/request';

const Home = () => {
  return (
    <S.Home>
      <Banner />
      <MovieCarousel genre='Trending' fetchUrl={requests.fetchTrending} />
      <MovieCarousel genre='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <MovieCarousel genre='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <MovieCarousel genre='Action' fetchUrl={requests.fetchActionMovies} />
      <MovieCarousel
        genre='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
      />
    </S.Home>
  );
};

export default Home;
