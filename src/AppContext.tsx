import React, {
  createContext,
  PropsWithChildren,
  useState,
} from "react";
import { DiscThemeEnum, Game, GridSizeEnum, IGameOptions } from "./utils/game";

type TAppContext = {
  gameOptions: IGameOptions;
  setGameOptions: Function;
  discTheme: DiscThemeEnum;
  setDiscTheme: Function;
  game: Game | null;
  setGame: Function;
};

type HOC = (Component: any) => React.FC<PropsWithChildren>;

const AppContext = createContext({} as TAppContext);

const withContextProvider: HOC = (Component) => {
  return (props) => {
    const [gameOptions, setGameOptions] = useState<IGameOptions>({ gridSize: GridSizeEnum.small, playersNumber: 1 });
    const [discTheme, setDiscTheme] = useState(DiscThemeEnum.numbers);
    const [game, setGame] = useState<Game | null>(null);

    const context: TAppContext = {
      gameOptions,
      setGameOptions,
      discTheme,
      setDiscTheme,
      game,
      setGame
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