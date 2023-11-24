import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion';

// Header component
const Header = () => {

    // Return JSX for the header
    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to='/'>
                    {/* Display the logo */}
                    <img className="logo" src={logo} alt="Imagen logo" />
                </Link>
                {/* Render the navigation component */}
                <Navegacion />
            </div>
        </header>
    )
}

// Export the Header component
export default Header
//
//In this code, we have a `Header` component that returns a header with a logo and navigation. The `Link` component is used to navigate to the home page when the logo is clicked. The `Navegacion` component is imported and rendered to display the navigation menu..</s>