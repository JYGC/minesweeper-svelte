export interface ISquareState {
  digged: boolean;
  hasMine: boolean;
  mineExploded: boolean;
  noOfMinesAround: number;
  flag: number;
};

export const createNewSquareState = (): ISquareState => ({
  digged: false,
  hasMine: false,
  mineExploded: false,
  noOfMinesAround: 0,
  flag: 0
});
