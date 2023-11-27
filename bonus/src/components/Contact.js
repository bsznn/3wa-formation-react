import React from "react";
import { Link } from "react-router-dom";

export default function Contact(props) {
  return (
    <li className="border-2 p-10 mb-10 grid rounded-lg">
      <div className="flex justify-center items-center mb-5">
        <img src={props.image} alt={props.name} className="w-40 image mr-6" />
        <h3 className="text-2xl">{props.name}</h3>
      </div>
      <div className="mt-10">
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
        <p>Address: {props.address}</p>
      </div>
      <div className="text-center">
        <Link to="/precision">
          <button
            onClick={props.nomFonction}
            className="bg-white text-slate-400 mt-20 p-2 ps-5 pe-5 rounded text-center"
          >
            See more
          </button>
        </Link>
      </div>
    </li>
  );
}
