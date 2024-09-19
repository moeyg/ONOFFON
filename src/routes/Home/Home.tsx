import * as S from './Home.style';
import Banner from '../../components/Banner/Banner';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import requests from '../../api/request';

const Home = () => {
  return (
    <S.Home>
      <Banner />
      <MovieCarousel genre='인기 콘텐츠' fetchUrl={requests.fetchTrending} />
      <MovieCarousel genre='추천 시리즈' fetchUrl={requests.fetchTopRated} />
      <MovieCarousel genre='액션 영화' fetchUrl={requests.fetchActionMovies} />
      <MovieCarousel genre='호러 영화' fetchUrl={requests.fetchHorrorMovies} />
      <MovieCarousel
        genre='코미디 영화'
        fetchUrl={requests.fetchComedyMovies}
      />
      <MovieCarousel
        genre='다큐멘터리'
        fetchUrl={requests.fetchDocumentaries}
      />
    </S.Home>
  );
};

export default Home;
