import { useContext } from 'react'
import Card from './Card'
import './insta.css'
import { DataContext } from '../context/DataContext';


export default function LandingPage() {
    
    const {data} = useContext(DataContext);
    return <div className='feed'>
            {
                data.map((item, index) => {
                    return <Card key={index} item={item}/>
                })
            }
    </div>
}