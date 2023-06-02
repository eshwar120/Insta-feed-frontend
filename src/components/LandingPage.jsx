import { useState } from 'react'
import Card from './Card'
import './insta.css'
import GetApiUtils from './GetApiUtils';
import { Outlet , Link} from 'react-router-dom';


export default function LandingPage() {
    const [data, setData] = useState([]);
    const updateData = (newData) => {
        setData(newData);
    }
    return <div className='feed'>
            <GetApiUtils updateData={updateData} />
            {
                data.map((item, index) => {
                    return <Card key={index} item={item}/>
                })
            }
        <Outlet/>
    </div>
}