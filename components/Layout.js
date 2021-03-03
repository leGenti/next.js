import Head from 'next/head'
import "tailwindcss/tailwind.css";

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, title}) => {
    return (
        <div> 
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />    
            </Head>
            <div class="flex flex-col h-screen">
                <Navbar/>
                <main className="flex-1  p-10">
                    { children }
                </main>
                <Footer className="flex border-t"/>
            </div>
        </div>
    )
}

export default Layout;