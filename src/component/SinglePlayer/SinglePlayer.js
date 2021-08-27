import React from 'react';
import { FaPlus } from "react-icons/fa";
export default function SinglePlayer(props) {
    const { id, name, image, title, desc, address, } = props.player;

    return (
        <div className="row main-item mb-3 pb-3 border border-0 border-bottom">
            <div className="col-md-4">
                <img src={image} alt="" className="img-fluid mb-3 mb-md-0 " />
            </div>
            <div className="col-md-8">
                <h3>{name}</h3>
                <p>{title}</p>
                <p style={{fontSize: '15px'}}>{desc}</p>
                <address className="text-secondary">Address: {address}</address>
                <div className="text-end">
                    <button onClick={() => props.selectHandelar(id)} className="btn btn-success"><FaPlus/></button>
                </div>
            </div>
        </div>
    )
}
