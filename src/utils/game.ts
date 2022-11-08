export type GridSizeType = 'small' | 'large';
export type PlayerNumberType = 1 | 2 | 3 | 4;
export enum GameStateEnum {
  'NOT_STARTED',
  'IN_PROGRESS',
  'OVER'
};

export interface IDisc {
  value: number;
  flipped: boolean;
}

export class Game {
  private _grid: IDisc[] = [];
  private _movesNumber: number = 0;
  private _currentTurn: PlayerNumberType = 1;
  private _gridSize: GridSizeType;
  private _playersNumber: PlayerNumberType;
  private _time: number = 0;
  private _state: GameStateEnum = GameStateEnum.NOT_STARTED;;
  private _winner: PlayerNumberType | null = null;
  private _selectionIndex: number | null = null;
  private _score: number[];

  constructor(gridSize: GridSizeType, playersNumber: PlayerNumberType) {
    this._gridSize = gridSize;
    this._playersNumber = playersNumber;
    let values: number[] = gridSize === 'small' ?
    [ ...Array.from({length: 8},(_,i)=>i + 1), ...Array.from({length: 8},(e,i)=>i + 1)] :
      [...Array.from({ length: 18 }, (_, i) => i + 1), ...Array.from({ length: 18 }, (e, i) => i + 1)];
    shuffleArray(values);
    values.map((value: number, index: number) => this._grid[index] = { value, flipped: false });
    this._score = Array(this._playersNumber).fill(0);
  };

  public get grid() {
    return this._grid;
  };
  
  public get movesNumber() {
    return this._movesNumber;
  };

  public get state() {
    return this._state;
  };

  public get winner() {
    return this._winner;
  };

  start = () => {
    setTimeout(() => {
      this._time++;
    }, 1000);

    this._state = GameStateEnum.IN_PROGRESS;
  };

  flipDisc = (index: number) => {
    this._grid[index] = { ...this._grid[index], flipped: true };
    // Check if there is already a selected disk
    if (this._selectionIndex) {
      this._movesNumber++;
      // If the disks mactch they will remain flipped and the score is updated
      if (this._grid[this._selectionIndex] !== this._grid[index]) { 
        this._score[this._currentTurn - 1]++;
      } else {
        // otherwise they will hide the content again
        this._grid[index] = { ...this._grid[index], flipped: false };
        this._grid[this._selectionIndex] = { ...this._grid[this._selectionIndex], flipped: false };
      }
      // clear existing selection to prepare the other turn
      this._selectionIndex = null;
      if (this._playersNumber > 1) {
        this.updatePlayersTurn();
      }
    } else {
      // Otherwise, save current selection
      this._selectionIndex = index;
    }
  };

  updatePlayersTurn() {
    if (this._playersNumber > 1) {
      if (this._currentTurn < this._playersNumber) {
        this._currentTurn++;
      } else {
        this._currentTurn = 1;
      }
    }
  }
}

function shuffleArray(array: number[]): number[] {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}