import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'
import OfferLayout from '../components/Offer/OfferLayout'

export default function Index() {
  return (
    <MainLayout title={'Home Page'}>
      {/* <h1>Hello Sёrfer!</h1>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p> */}
      <OfferLayout />
    </MainLayout>
  )
}
