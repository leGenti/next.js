import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-purple-600">
            <div className="flex justify-evenly border-t p-10 ">
                <ul>
                    <h3 className="text-xl pb-1">Menu</h3>
                    <li><Link href='/'><a>Home</a></Link></li>
                    <li><Link href='/about'><a>About</a></Link></li>
                    <li><Link href='/contact'><a>Contact</a></Link></li>
                    <li><Link href='/login'><a>Login</a></Link></li>
                </ul>
                <ul>
                    <h3 className="text-xl pb-1">Contact</h3>
                    <li>Mechelbaan 426,</li>
                    <li>2580 Putte</li>
                    <li><Link href='tel:+32494737760'><a>+32 494 73 77 60</a></Link></li>
                    <li><Link href='mailto:gentian.collaku@lhs.global'><a>gentian.collaku@lhs.global</a></Link></li>
                </ul>
                <ul>
                    <h3 className="text-xl pb-1">Privacy</h3>
                    <li><Link href='/'><a>Privacy Policy</a></Link></li>
                    <li><Link href='/'><a>Cookie Policy</a></Link></li>
                    <li><Link href='/'><a>Terms of use</a></Link></li>
                </ul>
            </div>
            <p className="flex justify-center mb-5">&copy; Copyright GCDesign. All rights reserved. Developed by Gentian. </p>

        </footer>
    )
}

export default Footer;