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
  currentPlayer: PlayerNumberType | undefined;
  setCurrentPlayer: Function;
  currentGame: Game | undefined;
  setCurrentGame: Function;
  newGame: Function;
  restartGame: Function;
  score: number[];
  setScore: Function;
  movesNumber: number;
  setMovesNumber: Function;
  mobileModalShow: boolean;
  setMobileModalShow: Function;
  timer: number;
  setTimer: Function;
  game: Game | null;
  setGame: Function;
};

type HOC = (Component: any) => React.FC<PropsWithChildren>;

const AppContext = createContext({} as TAppContext);

const withContextProvider: HOC = (Component) => {
  return (props) => {
    debugger;
    const playersNr = localStorage.getItem("currentGame");
    let initialPlayersNr;
    let initialScore;

    if (playersNr !== "undefined" && playersNr) {
      debugger;
      initialPlayersNr = JSON.parse(playersNr)._playersNumber;
      initialScore = JSON.parse(playersNr)._score;
    } else {
      debugger;
      initialPlayersNr = 1;
    }

    const [gameOptions, setGameOptions] = useState<IGameOptions>({
      gridSize: GridSizeEnum.small,
      playersNumber: initialPlayersNr,
      score: initialScore,
    });
    const [discTheme, setDiscTheme] = useState(DiscThemeEnum.numbers);
    const [game, setGame] = useState<Game | null>(null);
    const [currentPlayer, setCurrentPlayer] = useState<
      PlayerNumberType | undefined
    >();
    const [currentGame, setCurrentGame] = useState<Game>(
      new Game({
        gridSize: GridSizeEnum.small,
        playersNumber: initialPlayersNr,
        score: initialScore,
      })
    );
    const [winner, setWinner] = useState<string>();
    const [ended, setEnded] = useState(false);
    const [timer, setTimer] = useState<number>(0);
    const [score, setScore] = useState<number[]>([]);
    const [movesNumber, setMovesNumber] = useState<number>(0);
    const [mobileModalShow, setMobileModalShow] = useState(false);

    useEffect(() => {
      debugger;
      localStorage.setItem("currentGame", JSON.stringify(currentGame));
    }, [currentGame]);

    const resetTimer = useCallback(() => {
      setTimer(0);
    }, []);

    const newGame = useCallback(
      (p: PlayerNumberType) => {
        setCurrentGame(
          new Game({
            gridSize: GridSizeEnum.small,
            playersNumber: p,
            score: [],
          })
        );
        setCurrentPlayer(1);
        setMovesNumber(0);
        setWinner(undefined);
        setEnded(false);
        resetTimer();
      },
      [resetTimer]
    );

    const restartGame = useCallback(() => {
      setCurrentGame(
        new Game({
          gridSize: GridSizeEnum.small,
          playersNumber: 1,
          score: [],
        })
      );
      setWinner(undefined);
      setEnded(false);
      resetTimer();
    }, [currentGame, resetTimer]);

    const context: TAppContext = {
      gameOptions,
      setGameOptions,
      discTheme,
      setDiscTheme,
      game,
      setGame
      currentPlayer,
      setCurrentPlayer,
      currentGame,
      setCurrentGame,
      newGame,
      restartGame,
      score,
      setScore,
      movesNumber,
      setMovesNumber,
      mobileModalShow,
      setMobileModalShow,
      timer,
      setTimer,
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
