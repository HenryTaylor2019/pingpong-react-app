import React from "react";

const Player = ({ handleClick, score, serving, title, button }) => {

    return(
        <>
        <div className="col-md-6 mt-4">
            <div className={`card text-center ${serving ? 'bg-dark text-white' : ''}`}>
                <h5 className="card-header">{ title }</h5>
                <div className="card-body">
                    <p className="card-text display-1">{ score }</p>
                </div>
                <div className="card-footer">
                    <button onClick={ handleClick } className="form-control btn btn-success " style={ button ? { display: 'none'} : null}>+</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Player;