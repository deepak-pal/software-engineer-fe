import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = (props) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [comment, setComment] = useState('');

    const addMovie = (e) => {
        e.preventDefault();
        
        if (title === "" || image === "" || comment === "") {
            alert('All field are mandatory');
            return
        }

        props.addMovieHandler({ title, image, comment });

        setTitle("");
        setImage("");
        setComment("");

        navigate(-1);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 main">
                    <h2>
                        Add movie
                    </h2>
                    <form className='ui form' onSubmit={addMovie}>
                        <div className='row'>
                            <div className='col-xl-2 col-lg-2 col-md-3 col-12'>
                                <label>TITLE</label>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-8 col-12'>
                                <input className='form-control' type="text" name='title' placeholder='Title' value={title} onChange={event => setTitle(event.target.value)}></input>
                            </div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-xl-2 col-lg-2 col-md-3 col-12'>
                                <label>IMAGE URL</label>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-8 col-12'>
                                <input className='form-control' type="text" name='image' placeholder='Image' value={image} onChange={event => setImage(event.target.value)}></input>
                            </div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-xl-2 col-lg-2 col-md-3 col-12'>
                                <label>COMMENT</label>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-8 col-12'>
                                <input className='form-control' type="text" name='comment' placeholder='Comment' value={comment} onChange={event => setComment(event.target.value)}></input>
                            </div>
                        </div>
                        <button className='btn btn-info'>ADD MOVIE</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMovie;


