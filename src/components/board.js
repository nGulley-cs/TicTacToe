import Square from "./square";
import {useState} from 'react';

export default function Board(props) {
  const [value, setValue] = useState(0);
  // squares: Array(9).fill(null),
  
  //state for sqares values
  const [xTurn, switchTurns] = useState(true);
  
  //state of turn
  
  const status = "Next player: X";
  const renderSquare = function (i) {
    
    return <Square 
      xTurn={xTurn} 
      onClick={()=>switchTurns(!xTurn)}
      />;
  };

  return (
    <div>
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="status">{status}</div>
    </div>
  );
}

// class Board extends React.Component {
//     renderSquare(i) {
//       return <Square value={i} />;
//     }

//     render() {
//       const status = 'Next player: X';

//     }
//   }
