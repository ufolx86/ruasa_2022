import { Link } from '@remix-run/react';
// import type { LinksFunction } from "@remix-run/node";
// import navStyles from '~/styles/navigation.css';

// export function links() {
//   return [{ rel: "stylesheet", href: navStyles }];
// }

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: navStyles }];
// };

const navLinks = [
  {title: 'Home', url:'/'},
  {title: 'Propiedades', url: '/properties'},
  {title: 'Contacto', url: '/contact'}
]

export default function Navigation() {

  return (
    <div className="nav-container">
      <div>
        Ruasa Logo
      </div>
      <div>
        <ul className='nav-list'>
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
        </ul>
      </div>
    </div>
    
  )
}