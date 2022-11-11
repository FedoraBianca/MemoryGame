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
    const playersNr = localStorage.getItem("game");
    const gameTheme = localStorage.getItem("gameTheme");
    let initialPlayersNr;
    let initialScore;
    let initialTheme: any;

    if (playersNr) {
      initialPlayersNr = JSON.parse(playersNr)._playersNumber;
      initialScore = JSON.parse(playersNr)._score;
    } else {
      initialPlayersNr = 1;
    }

    if (gameTheme) {
      initialTheme = JSON.parse(gameTheme);
    } else {
      initialTheme = DiscThemeEnum.numbers;
    }

    const [gameOptions, setGameOptions] = useState<IGameOptions>({
      gridSize: GridSizeEnum.small,
      playersNumber: initialPlayersNr,
      score: initialScore,
      discTheme: initialTheme,
    });
    const [discTheme, setDiscTheme] = useState(initialTheme);
    const [game, setGame] = useState<Game | null>(null);
    const [currentPlayer, setCurrentPlayer] = useState<
      PlayerNumberType | undefined
    >();

    const [winner, setWinner] = useState<string>();
    const [ended, setEnded] = useState(false);
    const [timer, setTimer] = useState<number>(0);
    const [score, setScore] = useState<number[]>([]);
    const [movesNumber, setMovesNumber] = useState<number>(0);
    const [mobileModalShow, setMobileModalShow] = useState(false);

    useEffect(() => {
      if (game !== null) {
        localStorage.setItem("game", JSON.stringify(game));
      }
    }, [game]);

    useEffect(() => {
      localStorage.setItem("gameTheme", JSON.stringify(discTheme));
    }, [discTheme]);

    const resetTimer = useCallback(() => {
      setTimer(0);
    }, []);

    const newGame = useCallback(
      (p: PlayerNumberType, theme: DiscThemeEnum) => {
        setGame(
          new Game({
            gridSize: GridSizeEnum.small,
            playersNumber: p,
            score: [],
            discTheme: initialTheme,
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
      setGame(
        new Game({
          gridSize: GridSizeEnum.small,
          playersNumber: 1,
          score: [],
          discTheme: initialTheme,
        })
      );
      setWinner(undefined);
      setEnded(false);
      resetTimer();
    }, [game, resetTimer]);

    const context: TAppContext = {
      gameOptions,
      setGameOptions,
      discTheme,
      setDiscTheme,
      game,
      setGame,
      currentPlayer,
      setCurrentPlayer,
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
