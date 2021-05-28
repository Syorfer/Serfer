import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'
import OfferLayout from '../components/Offer/OfferLayout'
import Params from '../components/Params/Params'

export default function Index() {
  return (
    <MainLayout title={'Home Page'}>
      {/* <h1>Hello Sёrfer!</h1>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p> */}
      <Params />
      <OfferLayout />
    </MainLayout>
  )
}
