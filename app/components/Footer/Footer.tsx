import { Link } from '@remix-run/react';

const navLinks = [
  {title: 'Home', url:'/'},
  {title: 'Propiedades', url: '/properties'},
  {title: 'Contacto', url: '/contact'}
]

export default function Footer() {

  return (
    <div className="footer-container">
      <div>
        {/* <ul className='nav-list'>
          {navLinks.map(({title, url}) => {
            return (
              <li key={url}>
                <Link to={url}
              >
                {title}
              </Link>
              </li>
            )
          })}
        </ul> */}
        <h2>Follow Us</h2>
      </div>
    </div>
  )
}