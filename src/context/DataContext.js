import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {

    const [newUpload, setNewUpload] = useState(false);
    const [data, setData] = useState([]);
    // cnst [loadingFeed, setLoadingFeed] = useState("");
    const SERVER_ADDRESS = `https://insta-clone-5lvy.onrender.com/`
    // const SERVER_ADDRESS = `http://localhost:8080/`

    useEffect(() => {

        const loadingFeed = toast.loading('Please wait loading posts...')
        fetch(`${SERVER_ADDRESS}posts`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error("Something went wrong");
                }
                toast.update(loadingFeed, {
                    render: "Success",
                    type: "success",
                    isLoading: false,
                    autoClose: 4000
                })
                return res.json();
            })
            .then(data => {
                setData(data.result);
                console.log(data);
            })
            .catch(err => {
                toast.update(loadingFeed, {
                    render: err.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 4000
                })
            })
    }, [newUpload])


    const value = {
        newUpload: newUpload,
        updateNewUpload: () => {
            setNewUpload(!newUpload);
        },
        SERVER_ADDRESS: SERVER_ADDRESS,
        data: data,

    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export {
    DataContext,
    DataContextProvider
}