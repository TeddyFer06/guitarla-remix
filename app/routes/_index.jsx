import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import { getCurso } from '~/models/curso.server'
import ListadoGuitarras from '../components/listado-guitarras'
import ListadoPosts from '../components/listado-posts'
import Curso from '../components/curso'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'

export const meta = () => {

}

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitarras
        },
        {
            rel: 'stylesheet',
            href: stylesPosts
        },
        {
            rel: 'stylesheet',
            href: stylesCurso
        }
    ]
}

export const loader = async () => {

    const [guitarras, posts, curso] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCurso()
    ])

    return {
        guitarras: guitarras.data,
        posts: posts.data,
        curso: curso.data
    }
}
const Index = () => {

    const { guitarras, posts, curso } = useLoaderData()


    return (
        <>
            <main className='contenedor'>
                <ListadoGuitarras
                    guitarras={guitarras}
                />
            </main>

            <Curso
                curso={curso.attributes}
            />

            <section>
                <ListadoPosts
                    posts={posts}
                />
            </section>

        </>
    )
}

export default Index