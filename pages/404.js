import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])
    return (
        <>
            <Head>
                <title>Ninja List | 404 Error</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className="not-found">
                <h1>Ooops...</h1>
                <h2>That page cannot be found :(</h2>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </>
    )
}

export default NotFound
