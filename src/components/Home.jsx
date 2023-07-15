import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './insta.css';
import FirstPage from './FirstPage';
import LandingPage from './LandingPage';
import Upload from './Upload';
import NavBar from './NavBar';


export default function Home() {


    return <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/upload" element={<Upload />} />
            </Routes>
        </BrowserRouter>
    </>
}