import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import ListadoGuitarras from '../components/listado-guitarras'
import ListadoPosts from '../components/listado-posts'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'


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
        }
    ]
}

export const loader = async () => {

    const [guitarras, posts] = await Promise.all([
        getGuitarras(),
        getPosts()
    ])

    return {
        guitarras: guitarras.data,
        posts: posts.data
    }
}
const Index = () => {

    const { guitarras, posts } = useLoaderData()


    return (
        <>
            <main className='contenedor'>
                <ListadoGuitarras
                    guitarras={guitarras}
                />
                <ListadoPosts
                    posts={posts} />
            </main>
        </>
    )
}

export default Index