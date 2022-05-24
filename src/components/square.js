import { useEffect, useState } from "react";

export default function Square(props) {

  return (
    <button className="square" onClick={props.onClick}>
      {props.xTurn ? 'x' : 'o'}
    </button>
  );
}
