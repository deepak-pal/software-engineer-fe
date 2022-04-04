import React from "react";

const MovieCard = (props) => {
    const { id, title, comment, image } = props.movie;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={title} height="300px"></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{comment}</p>
                </div>
                <div className="card-footer text-center" style={{background: "transparent", border: "none"}}>
                    <button  className="btn btn-primary" onClick={() => props.clickHandler(id)}>Add to watched</button >
                </div>
            </div>
        </div>
    );
}
export default MovieCard;
