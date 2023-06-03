import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Outlet, useNavigate } from 'react-router-dom';

function Upload() {
    const navigate = useNavigate();
    return (
        <section className='form-container'>
            <div className='container w-50 p-3 border border-secondary rounded text-center mt-10 bg-dark'>
                <form action="https://insta-clone-5lvy.onrender.com/posts/createPost" method='post' encType="multipart/form-data" 
                    onSubmit={(e) => {
                        console.log(e)
                        setTimeout(() => {
                            navigate("/home");
                        }, 5000)
                        // e.preventDefault();
                    }}
                >
                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label>Choose File</Form.Label>
                        <Form.Control type="file" size="sm" name="postImage" required/>
                    </Form.Group>
                    <FloatingLabel controlId="floatingInput" label="Author" className="mb-3">
                        <Form.Control type="text" maxLength={12} name="name" placeholder="ex:- Eshwar" required />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Location" className="mb-3">
                        <Form.Control type="text" maxLength={12} name="location" placeholder="Location" required/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
                        <Form.Control type="text" maxLength={20} name="description" placeholder="Description" required/>
                    </FloatingLabel>
                    <Button variant="primary" type='submit' size="lg" className='w-25'>Post</Button>
                </form>
                <Outlet/>
            </div>
         </section>
    )
}

export default Upload
