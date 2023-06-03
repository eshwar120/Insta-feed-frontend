import { Link, Outlet } from "react-router-dom"

export default function FirstPage() {
    return <>
        <nav>
            <img id="logo" src="./images/instagram.png" alt="insta-logo" />
            <Link to="/home"><button id="enter-btn">Enter</button></Link>
        </nav>
        <Outlet/>
    </>

}