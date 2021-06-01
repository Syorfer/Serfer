import { MainLayout } from '../components/MainLayout';
import OfferLayout from '../components/Offer/OfferLayout';
import Params from '../components/Params';

export default function Index() {
  return (
    <MainLayout title={'Home Page'}>
      <Params />
      <OfferLayout />
    </MainLayout>
  );
}
