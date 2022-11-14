export enum GridSizeEnum {
  small,
  large,
}

export enum DiscThemeEnum {
  numbers,
  icons,
}

export type PlayerNumberType = 1 | 2 | 3 | 4;

export interface IDisc {
  value: number;
  flipped: boolean;
  selected: boolean;
}

export interface IGameOptions {
  gridSize: GridSizeEnum;
  playersNumber: PlayerNumberType;
  discTheme: DiscThemeEnum;
  moves: number;
}

export class Game {
  private _grid: IDisc[] = [];
  private _discFlips: number = 0;
  private _currentTurn: PlayerNumberType = 1;
  private _gridSize: GridSizeEnum;
  private _playersNumber: PlayerNumberType;
  private _winner: PlayerNumberType | number | null = null;
  private _tieMatch: boolean;
  private _score: number[];
  private _discSelection: number[] = [];
  private _assesmentInProgress: boolean = false;

  constructor(options: IGameOptions) {
    this._tieMatch = false;
    this._gridSize = options.gridSize;
    this._playersNumber = options.playersNumber;
    let values: number[] =
      options.gridSize === GridSizeEnum.small
        ? [
            ...Array.from({ length: 8 }, (_, i) => i + 1),
            ...Array.from({ length: 8 }, (e, i) => i + 1),
          ]
        : [
            ...Array.from({ length: 18 }, (_, i) => i + 1),
            ...Array.from({ length: 18 }, (e, i) => i + 1),
          ];
    shuffleArray(values);
    values.map(
      (value: number, index: number) =>
        (this._grid[index] = { value, flipped: false, selected: false })
    );
    this._score = Array(this._playersNumber).fill(0);
  }

  public get grid() {
    return this._grid;
  }

  public get movesNumber() {
    return Math.floor(this._discFlips / 2);
  }

  public get discFlips() {
    return this._discFlips;
  }

  public get score() {
    return this._score;
  }

  public get winner() {
    return this._winner;
  }

  public get currentTurn() {
    return this._currentTurn;
  }

  public get discSelection() {
    return this._discSelection;
  }

  public get playersNumber() {
    return this._playersNumber;
  }

  public get tieMatch() {
    return this._tieMatch;
  }

  public get assesmentInProgress() {
    return this._assesmentInProgress;
  }

  flipDisc = (index: number) => {
    // If the disc is already flipped or the assessment is in progress we don't do anything
    if (this.grid[index].flipped !== true || !this._assesmentInProgress) {
      this._discSelection.push(index);
      this._grid[index] = {
        ...this._grid[index],
        flipped: true,
        selected: true,
      };
      this._discFlips++;
      if (this._discSelection.length === 2) {
        setTimeout(() => {
          this.assesDiscSelection();
          this._assesmentInProgress = false;
        }, 100);
      }

      if (this.allDiscsAreFliped()) {
        if (this._playersNumber === 1) {
          this._winner = this._currentTurn;
        } else {
          let scoreMap = this._score.map((score, index) => ({
            score: score,
            index: index + 1,
          }));

          scoreMap[this._currentTurn - 1].score++;
          const newScore = scoreMap.map((object) => object.score);
          let maxScore = Math.max(...newScore.map((o) => o));

          let count = newScore.filter((x) => x === maxScore).length;
          if (count > 1) {
            this._tieMatch = true;
          } else {
            this._tieMatch = false;
          }

          this._winner = maxScore;
        }
      }
    }
  };

  assesDiscSelection = () => {
    this._assesmentInProgress = true;
    // If the selection matches we unselect the discs but keep them flipped and update the score for the current player
    if (
      this._grid[this.discSelection[0]].value ===
      this._grid[this.discSelection[1]].value
    ) {
      this._grid[this.discSelection[0]].selected = false;
      this._grid[this.discSelection[1]].selected = false;
      this._score[this._currentTurn - 1]++;
    } else {
      // Otherwise, we unselect and unflip the discs
      this._grid[this.discSelection[0]] = {
        ...this._grid[this.discSelection[0]],
        selected: false,
        flipped: false,
      };
      this._grid[this.discSelection[1]] = {
        ...this._grid[this.discSelection[1]],
        selected: false,
        flipped: false,
      };
      this.updatePlayersTurn();
    }
    // After managing the selection we clear it to make room fot the new one
    this._discSelection = [];
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
    if (this._grid.find((disc: IDisc) => disc.flipped === false)) {
      return false;
    } else {
      return true;
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

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
