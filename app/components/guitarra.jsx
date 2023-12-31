import { Link } from '@remix-run/react'
const Guitarra = ({ guitarra }) => {

    const { nombre, descripcion, imagen, precio, url } = guitarra;

    console.log()

    return (
        <div className="guitarra">
            <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen de ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>
                <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
            </div>
        </div>
    )
}

export default Guitarra