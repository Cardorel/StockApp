import React from 'react';
import {Container} from '../UI/container/Container.tsx';
import {HomeHeader} from './header';
import {OfferList} from './offer/OfferList.tsx';
import {Recommend} from './recommand';
import {useDispatchBrand} from '../../hooks/useDispatchBrand.ts';
import {withFetchHomeData} from '../../hoc/withFetchHomeData.tsx';

const Home = () => {
  useDispatchBrand();
  return (
    <Container>
      <HomeHeader />
      <OfferList />
      <Recommend />
    </Container>
  );
};

export default withFetchHomeData(Home);
