
import Navigation from '../components/Navigation/Navigation'
import Search from '../components/Search/Search'
import Footer from '../components/Footer/Footer'
import { Property } from '../components/Property/Property'
import homePageStyles from '~/styles/ruasa.css'
import Landing from '~/images/landing.jpeg'
import House1 from '~/images/house1.jpeg'

export function links() {
  return [{ rel: "stylesheet", href: homePageStyles }];
}

export default function RUASA() {
  return (
    <div>
      <div className='landing-main'>
        <img
          className='landing-img'
          src={Landing}
          alt='ruasa'
        />
        <p className='welcome-message'>Encuentra la casa de tus sueños</p>
        <Navigation/>
        <Search/>
      </div>
      <div className='featured-properties'>
        <h1>Propiedades Destacadas</h1>
          <Property
            title = 'Casa en Vista Real' 
            price = {4400000}
            rooms = {4}
            baths = {4.5}
            size = {485} 
            url =''
            image = {House1}
          />
      </div>
      <Footer/>
    </div>
  )
}