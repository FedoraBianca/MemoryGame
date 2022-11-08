export type GridSizeType = 'small' | 'large';
export type PlayerNumberType = 1 | 2 | 3 | 4;
// export enum GameStateEnum {
//   'NOT_STARTED',
//   'IN_PROGRESS',
//   'OVER'
// };

export interface IDisc {
  value: number;
  flipped: boolean;
}

export class Game {
  private _grid: IDisc[] = [];
  private _discFlips: number = 0;
  private _lastDiscIndex: number | null = null;
  private _currentTurn: PlayerNumberType = 1;
  private _gridSize: GridSizeType;
  private _playersNumber: PlayerNumberType;
  // private _state: GameStateEnum = GameStateEnum.NOT_STARTED;;
  private _winner: PlayerNumberType | null = null;
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
    return this._discFlips / 2;
  };

  // public get state() {
  //   return this._state;
  // };

  public get winner() {
    return this._winner;
  };

  public get currentTurn() {
    return this._currentTurn;
  }

  public get lastDiscIndex() {
    return this._lastDiscIndex;
  }

  // start = () => {
  //   this._state = GameStateEnum.IN_PROGRESS;
  // };

  flipDisc = (index: number) => {
    this._grid[index] = { ...this._grid[index], flipped: true };
    
    this._discFlips++;
    // If discFlips is an even number that means we should check if the disks match and also update currentTurn
    if (this._discFlips % 2 === 0) {
      if (this._playersNumber > 1) {
        this.updatePlayersTurn();
      }

      if (this._lastDiscIndex) {
        // If the disks mactch they will remain flipped and the score is updated
        if (this._grid[this._lastDiscIndex] !== this._grid[index]) { 
          this._score[this._currentTurn - 1]++;
        } else {
          // otherwise they will hide the content again
          this._grid[index] = { ...this._grid[index], flipped: false };
          this._grid[this._lastDiscIndex] = { ...this._grid[this._lastDiscIndex], flipped: false };
        }
      }
    };

    this._lastDiscIndex = index;
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

  allDiscsAreFliped(): boolean {
    if (this._grid.find((disc: IDisc) => disc.flipped)) {
      return true;
    } else {
      return false;
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