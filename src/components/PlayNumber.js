import React from "react";
import colors from "./Colors";

const PlayNumber = props => (
    <button
        className="number"
        onClick={() => props.onClick(props.number, props.status)}
        style={{ backgroundColor: colors[props.status]}}
    >
        {props.number}
    </button>
);

export default PlayNumber