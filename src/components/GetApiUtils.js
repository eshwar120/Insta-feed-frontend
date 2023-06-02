import { useEffect } from "react";



export default function GetApiUtils({ updateData }) {

    useEffect(() => {
        fetch("https://insta-clone-5lvy.onrender.com/posts")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error("Something went wrong");
                }
                return res.json();
            })
            .then(data => {
                updateData(data.result);
                console.log(data);
            })
    }, [])
}