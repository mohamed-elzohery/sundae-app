import { SelectedItem } from "../context/SelectedItemsCTX";
import { OptionsEnum } from "../pages/entry/Options";

const PRICES = {
  [OptionsEnum.SCOOPS]: 2,
  [OptionsEnum.TOPPINGS]: 1.5,
};

export const calculateSubTotal = (item: SelectedItem, type: OptionsEnum) => {
  return Object.values(item).reduce(
    (acc, currCount) => acc + currCount * PRICES[type],
    0,
  );
};
