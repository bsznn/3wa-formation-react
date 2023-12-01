import React from "react";
import { Link } from "react-router-dom";

export default function ItemTopics(props) {
  return (
    <li className="text-white bg-slate-700 py-5 w-full flex items-center gap-3 rounded-lg px-5 shadow-lg shadow-orange-50/20">
      <img
        src={props.images}
        alt={`logo's ${props.title}`}
        className="bg-white rounded-md"
      />
      <span className="font-bold text-xl">
        <Link to={`/${props.title}`}>{props.title}</Link>
      </span>
    </li>
  );
}
