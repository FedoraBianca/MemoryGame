import React, {
  createContext,
  PropsWithChildren,
  useState,
  useCallback,
  useEffect,
} from "react";
import {
  DiscThemeEnum,
  Game,
  GridSizeEnum,
  IGameOptions,
  PlayerNumberType,
} from "./utils/game";

type TAppContext = {
  gameOptions: IGameOptions;
  setGameOptions: Function;
  discTheme: DiscThemeEnum;
  setDiscTheme: Function;
  currentTurn: PlayerNumberType | undefined;
  setCurrentTurn: Function;
  newGame: Function;
  restartGame: Function;
  score: number[] | undefined;
  setScore: Function;
  movesNumber: number;
  setMovesNumber: Function;
  mobileModalShow: boolean;
  setMobileModalShow: Function;
  game: Game | null;
  setGame: Function;
  endGame: Function;
  setWinner: Function;
  showWinnersBoard: boolean;
  setShowWinnersBoard: Function;
  minutes: number;
  seconds: number;
  setMinutes: Function;
  setSeconds: Function;
  gridSize: GridSizeEnum;
  timerInited: boolean;
  setTimerInited: Function;
};

type HOC = (Component: any) => React.FC<PropsWithChildren>;

const AppContext = createContext({} as TAppContext);

const withContextProvider: HOC = (Component) => {
  return () => {
    const pvpScore = localStorage.getItem("pvpScore");
    const initialScore = pvpScore ? JSON.parse(pvpScore) : [0, 0, 0, 0];

    const gameItem = localStorage.getItem("game");
    const gameTheme = localStorage.getItem("gameTheme");

    let initialPlayersNr;
    let initialTheme: any;
    let gridSize;

    if (gameItem) {
      initialPlayersNr = JSON.parse(gameItem)._playersNumber;
      gridSize = JSON.parse(gameItem)._gridSize;
    } else {
      initialPlayersNr = 1;
      gridSize = GridSizeEnum.small;
    }

    if (gameTheme) {
      initialTheme = JSON.parse(gameTheme);
    } else {
      initialTheme = DiscThemeEnum.numbers;
    }

    const [game, setGame] = useState<Game | null>(null);
    const [score, setScore] = useState<number[] | undefined>(initialScore);
    const [gameOptions, setGameOptions] = useState<IGameOptions>({
      gridSize: gridSize,
      playersNumber: initialPlayersNr,
      discTheme: initialTheme,
      moves: 0,
    });
    const [discTheme, setDiscTheme] = useState(initialTheme);
    const [currentTurn, setCurrentTurn] = useState<
      PlayerNumberType | undefined
    >();

    const [winner, setWinner] = useState<number | undefined>(undefined);
    const [ended, setEnded] = useState(false);
    const [timerInited, setTimerInited] = useState(false);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [movesNumber, setMovesNumber] = useState<number>(0);
    const [mobileModalShow, setMobileModalShow] = useState(false);
    const [showWinnersBoard, setShowWinnersBoard] = useState(false);

    useEffect(() => {
      if (timerInited) {
        const myInterval = setInterval(() => {
          if (seconds !== 0 && seconds % 59 === 0) {
            setMinutes(minutes + 1);
            setSeconds(0);
          } else {
            setSeconds(seconds + 1);
          }
        }, 1000);
        return () => clearInterval(myInterval);
      }
    }, [setMinutes, setSeconds, minutes, seconds, timerInited]);

    useEffect(() => {
      if (game !== null) {
        localStorage.setItem("game", JSON.stringify(game));
      }
    }, [game]);

    useEffect(() => {
      localStorage.setItem("gameTheme", JSON.stringify(discTheme));
    }, [discTheme]);

    useEffect(() => {
      localStorage.setItem("pvpScore", JSON.stringify(score));
    }, [score]);

    const resetTimer = useCallback(() => {
      setSeconds(0);
      setMinutes(0);
    }, []);

    const newGame = useCallback(() => {
      setGame(new Game(gameOptions));
      setCurrentTurn(1);
      setScore(Array.from(Array(gameOptions.playersNumber).fill(0)));
      setMovesNumber(0);
      setWinner(undefined);
      setEnded(false);
      resetTimer();
    }, [resetTimer, setGame, gameOptions]);

    const restartGame = useCallback(() => {
      setGame(new Game(gameOptions));
      setMovesNumber(0);
      setScore(Array.from(Array(gameOptions.playersNumber).fill(0)));
      setWinner(undefined);
      setEnded(false);
      resetTimer();
    }, [gameOptions, resetTimer]);

    const endGame = useCallback(() => {
      setEnded(true);
      setTimerInited(false);
    }, []);

    const context: TAppContext = {
      gameOptions,
      setGameOptions,
      discTheme,
      setDiscTheme,
      game,
      setGame,
      currentTurn,
      setCurrentTurn,
      newGame,
      restartGame,
      score,
      setScore,
      movesNumber,
      setMovesNumber,
      mobileModalShow,
      setMobileModalShow,
      endGame,
      setWinner,
      showWinnersBoard,
      setShowWinnersBoard,
      minutes,
      seconds,
      setMinutes,
      setSeconds,
      gridSize,
      timerInited,
      setTimerInited,
    };

    return (
      <AppContext.Provider value={context}>
        <Component />
      </AppContext.Provider>
    );
  };
};

export { withContextProvider };

export default AppContext;
