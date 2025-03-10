import { useIndividualView } from "./useIndividualView";
import useEstimateDetailsScreen from "./useEstimateDetailsScreen";
import utils from "../utils";
const water_connection = {
  useIndividualView
};
const estimates={
  useEstimateDetailsScreen
}

const Hooks = {
  water_connection,
  estimates
};

const Utils = {
  browser: {
    water_connection: () => { },
  },
  water_connection: {
    ...utils,
  },
};

export const CustomisedHooks = {
  Hooks,
  Utils,
};
