import { render, screen } from "@testing-library/react";
import Options, { OptionsEnum } from "../Options";

test("display image from each scoop rendered from the server", async () => {
  render(<Options type={OptionsEnum.SCOOPS} />);

  // find images
  const scoopsImages = (await screen.findAllByRole(
    "img",
  )) as HTMLImageElement[];
  expect(scoopsImages).toHaveLength(2);

  // confirm alt texts of images exist and correct
  const altTexts = scoopsImages.map(({ alt }) => alt);
  expect(altTexts).toEqual(["Chocolate scoops", "Vanilla scoops"]);
});

test("display image for each topping item rendered from the server", async () => {
  render(<Options type={OptionsEnum.TOPPINGS} />);
  const toppingsImages = (await screen.findAllByRole(
    "img",
  )) as HTMLImageElement[];
  expect(toppingsImages).toHaveLength(3);
  const imagesAltText = toppingsImages.map(({ alt }) => alt);
  expect(imagesAltText).toEqual([
    "Cherries toppings",
    "M&Ms toppings",
    "Hot Fudge toppings",
  ]);
});
