import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
    return [
        {
            title: 'GuitarLA - Sobre Nosotros',
            description: 'Venta de guitarras, blog de música'
        }
    ]
}
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

const Nosotros = () => {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros" />

                <div>
                    <p> Phasellus nec dolor cursus sapien placerat vestibulum non sit amet arcu.In sed ex a lectus vehicula euismod.Fusce vel tincidunt est, ac egestas nisl.Nam viverra quam mauris, id rhoncus lacus tincidunt ac.Cras lectus neque, accumsan quis egestas nec, iaculis vitae ex.Donec ut efficitur odio.Etiam ullamcorper velit ut purus tempor interdum nec ut enim.</p>
                    <p> Phasellus nec dolor cursus sapien placerat vestibulum non sit amet arcu.In sed ex a lectus vehicula euismod.Fusce vel tincidunt est, ac egestas nisl.Nam viverra quam mauris, id rhoncus lacus tincidunt ac.Cras lectus neque, accumsan quis egestas nec, iaculis vitae ex.Donec ut efficitur odio.Etiam ullamcorper velit ut purus tempor interdum nec ut enim.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros