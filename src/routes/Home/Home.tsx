import * as S from './Home.style';
import Banner from '../../components/Banner/Banner';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import requests from '../../api/request';

const Home = () => {
  return (
    <S.Home>
      <Banner />
      <MovieCarousel genre='인기 콘텐츠' fetchUrl={requests.fetchTrending} />
    </S.Home>
  );
};

export default Home;
