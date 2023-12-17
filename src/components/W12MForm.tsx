import { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./species_name";
import { PlanetName } from "./planet_name";
import { BeingsNumber } from "./beings_number";
import { MathCheck } from "./math_check";
import { SparingReason } from "./sparing_reason";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [beingsNumber, setBeingsNumber] = useState("");
  const [mathCheck, setMathCheck] = useState("");
  const [sparingReason, setSparingReason] = useState("");

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(value) => setSpeciesName(value)}
      />
      <PlanetName
        planetName={planetName}
        onChangePlanetName={(value) => setPlanetName(value)}
      />
      <BeingsNumber
        beingsNumber={beingsNumber}
        onChangeBeingsNumber={(value) => setBeingsNumber(value)}
      />
      <MathCheck
        mathCheck={mathCheck}
        onChangeMathCheck={(value) => setMathCheck(value)}
      />
      <SparingReason
        sparingReason={sparingReason}
        onChangeSparingReason={(value) => setSparingReason(value)}
      />
    </section>
  );
};

export default W12MForm;
