import { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./species_name"; //str
import { PlanetName } from "./planet_name"; //str
//import { BeingsNumber } from "./beings_number"; //number?
//import { MathCheck  } from "./math_check"; //number?
//import { SparingReason } from "./sparing_reason"; //str

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");

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
    </section>
  );
};

export default W12MForm;
