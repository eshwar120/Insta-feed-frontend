import { Link, Outlet } from "react-router-dom"
import instaLogo from './images/instagram.png'

export default function FirstPage() {
    return <>
        <section className="logo-container">
            <img id="logo" src={instaLogo} alt="insta-logo" />
            <Link to="/home"><button id="enter-btn">Enter</button></Link>
        </section>
        <Outlet/>
    </>

}