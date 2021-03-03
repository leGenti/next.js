import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="border-b">
            <div className="flex logo ml-10 mt-10 justify-center">
                <Link href="/"><a><Image src="/Naamloos-3.png" alt="logoimg" width="200" height="70" /></a></Link>
            </div>
            <ul className="flex justify-center justify-evenly mb-7">
                <li >
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li >
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li >
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
                <li >
                    <Link href='/login'><a>Login</a></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;