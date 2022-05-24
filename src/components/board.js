import Square from "./square";

export default function Board(props) {
  const status = "Next player: X";
  const renderSquare = function (i) {
    return <Square value={i} />;
  };

  return (
    <div>
      <div>
        <div className="board-row">
          <Square value="0" />
          <Square value="1" />
          <Square value="2" />
        </div>
        <div className="board-row">
          <Square value="3" />
          <Square value="4" />
          <Square value="5" />
        </div>
        <div className="board-row">
          <Square value="6" />
          <Square value="7" />
          <Square value="8" />
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
