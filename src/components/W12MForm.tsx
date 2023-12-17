import { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./species_name";
import { PlanetName } from "./planet_name";
import { BeingsNumber } from "./beings_number";
import { MathCheck } from "./math_check";
import { SparingReason } from "./sparing_reason";
import { SubmitButton } from "./submit_button";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [beingsNumber, setBeingsNumber] = useState("");
  const [mathCheck, setMathCheck] = useState("");
  const [sparingReason, setSparingReason] = useState("");
  const initialValue = {
    speciesName: "",
    planetName: "",
    numberOfBeings: "",
    mathsAnswer: "",
    reasonsForSparing: "",
  };
  const [submitButton, setSubmittedInput] = useState(initialValue);

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(value) => setSpeciesName(value)}
      />
      <br></br>
      <PlanetName
        planetName={planetName}
        onChangePlanetName={(value) => setPlanetName(value)}
      />
      <br></br>
      <BeingsNumber
        beingsNumber={beingsNumber}
        onChangeBeingsNumber={(value) => setBeingsNumber(value)}
      />
      <br></br>
      <MathCheck
        mathCheck={mathCheck}
        onChangeMathCheck={(value) => setMathCheck(value)}
      />
      <br></br>
      <SparingReason
        sparingReason={sparingReason}
        onChangeSparingReason={(value) => setSparingReason(value)}
      />
      <br></br>
      <SubmitButton />
    </section>
  );
};

export default W12MForm;
