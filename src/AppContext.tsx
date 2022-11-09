import React, {
  createContext,
  PropsWithChildren,
  useState,
} from "react";
import { DiscThemeEnum, GridSizeEnum, IGameOptions } from "./utils/game";

type TAppContext = {
  gameOptions: IGameOptions;
  setGameOptions: Function;
  discTheme: DiscThemeEnum;
  setDiscTheme: Function;
};

type HOC = (Component: any) => React.FC<PropsWithChildren>;

const AppContext = createContext({} as TAppContext);

const withContextProvider: HOC = (Component) => {
  return (props) => {
    const [gameOptions, setGameOptions] = useState<IGameOptions>({ gridSize: GridSizeEnum.small, playersNumber: 1 });
    const [discTheme, setDiscTheme] = useState(DiscThemeEnum.numbers);

    const context: TAppContext = {
      gameOptions,
      setGameOptions,
      discTheme,
      setDiscTheme,
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