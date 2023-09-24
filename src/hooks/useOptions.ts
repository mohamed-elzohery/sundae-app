import { useEffect, useState } from "react";
import { OptionsEnum } from "../pages/entry/Options";
import { BASE_URL } from "../mocks/handlers";

export interface Option {
  name: string;
  imageURL: string;
}

const useOptions = (optionType: OptionsEnum) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [hasError, setHasError] = useState(false);

  const fetchOptions = async () => {
    try {
      setHasError(false);
      const response = await fetch(`${BASE_URL}/${optionType}`);
      const parsedResponse = await response.json();
      setOptions(parsedResponse);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  return { options, hasError };
};

export default useOptions;
