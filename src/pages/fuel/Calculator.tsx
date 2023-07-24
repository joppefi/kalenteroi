import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

const Calculator = () => {
  const [distance, setDistance] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <>
      <FormControl>
        <FormLabel>Matka (km)</FormLabel>
        <NumberInput
          size="sm"
          value={distance}
          onChange={(valueAsString, valueAsNumber) =>
            setDistance(valueAsNumber)
          }
        >
          <NumberInputField style={{ textAlign: "center" }} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Keskikulutus (l / 100km)</FormLabel>
        <NumberInput
          size="sm"
          precision={1}
          step={0.1}
          value={consumption.toFixed(1)}
          onChange={(valueAsString, valueAsNumber) =>
            setConsumption(valueAsNumber)
          }
        >
          <NumberInputField style={{ textAlign: "center" }} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Slider
          value={consumption}
          onChange={setConsumption}
          step={0.1}
          min={3}
          max={10}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
      <FormControl>
        <FormLabel>Polttoaineen hinta (e / l)</FormLabel>
        <NumberInput
          size="sm"
          precision={3}
          step={0.001}
          value={price.toFixed(3)}
          onChange={(valueAsString, valueAsNumber) => setPrice(valueAsNumber)}
        >
          <NumberInputField style={{ textAlign: "center" }} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Slider
          value={price}
          onChange={setPrice}
          step={0.001}
          min={1.8}
          max={2.2}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
      <FormControl>
        <FormLabel>Kulutus yht.</FormLabel>
        <Input
          size="sm"
          value={((distance / 100) * consumption).toFixed(2)}
          style={{ textAlign: "center" }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Hinta yht.</FormLabel>
        <Input
          value={((distance / 100) * consumption * price).toFixed(2)}
          style={{ textAlign: "center" }}
        />
      </FormControl>
    </>
  );
};

export default Calculator;
