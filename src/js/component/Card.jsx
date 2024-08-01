import React from "react";

const Card = (props) => {
	return (
            <div className="card bg-black">	
                <div className="card-body text-white">
                    <h5 className="card-title">{props.number || 0}</h5>
                </div>
            </div>
    )
}

export default Card;