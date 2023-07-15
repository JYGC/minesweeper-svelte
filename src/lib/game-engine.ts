import { createNewSquareState, type ISquareState } from "./types";

type GameState = "ONGOING" | "WON" | "LOST";

export class GameEngine {
  private __board: ISquareState[][];
  public get board(): ISquareState[][] {
    return this.__board;
  }

  private __numberOfMines: number;
  public get numberOfMines(): number {
    return this.__numberOfMines;
  };

  private __lookAround(r: number, c: number, targetBoard, callback) {
    if (r > 0) callback(r - 1, c);
    if (r > 0 && c < targetBoard[r].length - 1) callback(r - 1, c + 1);
    if (c < targetBoard[r].length - 1) callback(r, c + 1);
    if (r < targetBoard.length - 1 && c < targetBoard[r].length - 1) callback(r + 1, c + 1);
    if (r < targetBoard.length - 1) callback(r + 1, c);
    if (r < targetBoard.length - 1 && c > 0) callback(r + 1, c - 1);
    if (c > 0) callback(r, c - 1);
    if (r > 0 && c > 0) callback(r - 1, c - 1);
  }

  public flagSquare(rowIdx, colIdx) {
    this.__board[rowIdx][colIdx].flag = (this.__board[rowIdx][colIdx].flag + 1) % 3;
  }

  private __chainDig(rowIdx, colIdx) {
    let coordinatesToDig = [];
    coordinatesToDig.push({r: rowIdx, c: colIdx});
    while (coordinatesToDig.length > 0) {
      let currentRow = coordinatesToDig[0].r;
      let currentCol = coordinatesToDig[0].c;
      coordinatesToDig.splice(0, 1);
      this.__board[currentRow][currentCol].digged = true;
      if (this.__board[currentRow][currentCol].noOfMinesAround > 0 || this.__board[currentRow][currentCol].hasMine) {
        continue;
      }
      this.__lookAround(currentRow, currentCol, this.__board, (neighbourRow, neighbourCol) => {
        if (!this.__board[neighbourRow][neighbourCol].digged && typeof coordinatesToDig.find(element => element.r === neighbourRow && element.c === neighbourCol) === 'undefined') {
          coordinatesToDig.push({r: neighbourRow, c: neighbourCol});
        }
      });
    }
  }

  private __gameState: GameState;
  public get gameState(): GameState {
    return this.__gameState;
  }

  public get hasWon(): boolean {
    return this.__gameState === "WON";
  }

  public get isGameOngoing(): boolean {
    return this.__gameState === "ONGOING";
  }

  private __determineWinOrLose = (board) => {
    let noOfUndiggedSafeSquares = 0;
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if(board[row][col].hasMine && board[row][col].digged) {
          this.__gameState = "LOST"
          return; // player lost
        }
        if (!board[row][col].hasMine && !board[row][col].digged) noOfUndiggedSafeSquares++; // not all mines discovered
      }
    }
    if (noOfUndiggedSafeSquares === 0) {
      this.__gameState = "WON"; // player won
    }
  };

  public digSquare(rowIdx, colIdx) {
    this.__board[rowIdx][colIdx].digged = true;
    this.__board[rowIdx][colIdx].mineExploded = this.__board[rowIdx][colIdx].hasMine;
    this.__chainDig(rowIdx, colIdx);
    this.__determineWinOrLose(this.__board);
  }

  constructor() {
    this.__numberOfMines = 3 + Math.floor(Math.random() * 5);
    this.__gameState = "ONGOING";

    this.__board = [];

    const boardSize = 5 + Math.floor(Math.random() * 11);
  
    for (let r = 0; r < boardSize; r++) {
      this.__board[r] = [];
      for (let c = 0; c < boardSize; c++) {
        this.__board[r][c] = createNewSquareState();
      }
    }
  
    for (let m = 1; m <= this.__numberOfMines; m++) {
      let newMineAdded = false;
      while (!newMineAdded) {
        const randomRow = Math.floor(Math.random() * boardSize);
        const randomCol = Math.floor(Math.random() * boardSize);
        if (!this.__board[randomRow][randomCol].hasMine) this.__board[randomRow][randomCol].hasMine = newMineAdded = true;
      }
    }
  
    for (let r = 0; r < this.__board.length; r++) {
      for (let c = 0; c < this.__board[r].length; c++) {
        let noOfMinesAround = 0;
        this.__lookAround(r, c, this.__board, (neighbourRow, neighbourCol) => {
          if (this.__board[neighbourRow][neighbourCol].hasMine) noOfMinesAround++;
        });
        this.__board[r][c].noOfMinesAround = noOfMinesAround;
      }
    }
  }
}
