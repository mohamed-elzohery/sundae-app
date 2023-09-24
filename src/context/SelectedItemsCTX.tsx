import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { OptionsEnum } from "../pages/entry/Options";
import { calculateSubTotal } from "../utils/calculateSubTotal";

export type SelectedItem = {
  [key in string]: number;
};

export type SelectedItemsCTXI = {
  [key in OptionsEnum]: SelectedItem;
};

export interface SelectedItemsCTXValue extends SelectedItemsCTXI {
  updateSelectedItems: (type: OptionsEnum, name: string, count: number) => void;
  scoopsSupTotal: number;
  toppingsSupTotal: number;
  grandTotal: number;
}

export interface HasChildren {
  children: ReactNode;
}

const initialState: SelectedItemsCTXI = {
  [OptionsEnum.SCOOPS]: {},
  [OptionsEnum.TOPPINGS]: {},
};

const initialContextState: SelectedItemsCTXValue = {
  ...initialState,
  updateSelectedItems: () => {},
  scoopsSupTotal: 0,
  toppingsSupTotal: 0,
  grandTotal: 0,
};

const SelectedItemsCTX = createContext(initialContextState);

export const useSelectedItemsContext = () => {
  const context = useContext(SelectedItemsCTX);
  if (!context) {
    throw new Error(
      `useSelectedItemsContext must be used within a useSelectedItemsContextProvider`,
    );
  }
  return context;
};

const SelectedItemsCTXProvider: React.FC<HasChildren> = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState(initialState);

  const scoopsSupTotal = calculateSubTotal(
    selectedItems.scoops,
    OptionsEnum.SCOOPS,
  );
  const toppingsSupTotal = calculateSubTotal(
    selectedItems.toppings,
    OptionsEnum.TOPPINGS,
  );
  const grandTotal = scoopsSupTotal + toppingsSupTotal;

  const updateSelectedItems = (
    type: OptionsEnum,
    name: string,
    count: number,
  ) => {
    setSelectedItems((prev) => ({
      ...prev,
      [type]: { ...prev[type], [name]: count },
    }));
  };

  const contextValue: SelectedItemsCTXValue = useMemo(
    () => ({
      ...selectedItems,
      updateSelectedItems,
      grandTotal,
      scoopsSupTotal,
      toppingsSupTotal,
    }),
    [selectedItems],
  );

  return (
    <SelectedItemsCTX.Provider value={contextValue}>
      {children}
    </SelectedItemsCTX.Provider>
  );
};

export default SelectedItemsCTXProvider;
