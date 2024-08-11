import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((previousBoardInState) => {
            // each item in the previousBoardInState is itself an array, so each "item" in the previousBoardInState array object is a rowInPreviousBoardInState, those are the items getting mapped into a NEW array which we are calling updatedBoard
            // we do this because we want to keep each version of the state object (gameBoard) IMMUTABLE -- we don't want to change it directly, because we may want to roll back to previous versions of state and need to leave ourselves this option -- so we first create a COPY of the current state, and then we edit the copy
            const updatedBoard = [...previousBoardInState.map(rowInPreviousBoardInState => [...rowInPreviousBoardInState])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

            onSelectSquare();

            return updatedBoard;
        });
    };

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((currentValue, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{currentValue}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
