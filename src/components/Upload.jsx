import React, { useContext, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Outlet, useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Upload() {

    const [postData, setPostData] = useState({
        name: "",
        location: "",
        description: ""
    })
    const { updateNewUpload, SERVER_ADDRESS } = useContext(DataContext);
    const [postImage, setPostImage] = useState([]);
    

    const handleSubmit = async () => {
        const upload = toast.loading('Please wait a moment uploading the post....')
        const convertedFormData = new FormData();

        for (const [key, value] of Object.entries(postData)) {
            convertedFormData.append(`${key}`, `${value}`);
        }

        convertedFormData.append("postImage", postImage);

        console.log(convertedFormData)
        await fetch(`${SERVER_ADDRESS}posts/createPost`,
            {
                method: "post",
                body: convertedFormData
            })
            .then(res => {
                if (res.status !== 201) {
                    throw new Error('Something went wrong try again')
                }
                return res.json()
            })
            .then(data => {
                updateNewUpload();
                toast.update(upload, {
                    render: "Post uploaded successfully",
                    type: "success",
                    isLoading: false,
                    autoClose: 4000
                });
                navigate('/home');
            })
            .catch(err => {
                toast.update(upload, {
                    render: err.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 4000
                })
            })


    }
    const navigate = useNavigate();
    return (
        <section className='form-container'>
            <div className='container w-50 p-3 border border-secondary rounded text-center mt-10 bg-dark'>
                <form
                    encType="multipart/form-data"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e)
                    }}
                >
                    <Form.Group
                        controlId="formFileSm"
                        className="mb-3"
                    >
                        <Form.Label>Choose File</Form.Label>
                        <Form.Control
                            type="file"
                            size="sm"
                            name="postImage"
                            required
                            onChange={(e) => {
                                setPostImage(e.target.files[0]);
                            }}
                            accept="image/*"
                        />
                    </Form.Group>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Author"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            maxLength={12}
                            name="name"
                            placeholder="ex:- Eshwar"
                            required
                            onChange={(e) => {
                                setPostData(postData => ({
                                    ...postData,
                                    name: e.target.value
                                }))
                            }}
                            value={postData.name}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Location"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            maxLength={12}
                            name="location"
                            placeholder="Location"
                            required
                            onChange={(e) => {
                                setPostData(postData => ({
                                    ...postData,
                                    location: e.target.value
                                }))
                            }}
                            value={postData.location}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Description"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            maxLength={20}
                            name="description"
                            placeholder="Description"
                            required
                            onChange={(e) => {
                                setPostData(postData => ({
                                    ...postData,
                                    description: e.target.value
                                }))
                            }}
                            value={postData.description}
                        />
                    </FloatingLabel>

                    <Button
                        variant="primary"
                        type='submit'
                        size="lg"
                        className='w-25'
                    >
                        Post
                    </Button>
                </form>
            </div>
            <Outlet />
        </section>
    )
}

export default Upload
