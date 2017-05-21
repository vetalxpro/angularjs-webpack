import { mainConfig } from "./main.config";

const devServerConf = () => {
  return {
    colors: true,
    // contentBase: mainConfig.src,
    historyApiFallback: true,
    inline: true
  }
};

export const devServerConfig = devServerConf();
