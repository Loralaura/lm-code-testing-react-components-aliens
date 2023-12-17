import { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./species_name";
import { PlanetName } from "./planet_name";
import { BeingsNumber } from "./beings_number";
import { MathsQuestion } from "./maths_question";
import { SparingReason } from "./sparing_reason";
import { FormOutput } from "./form_output";
import { ChangeEvent, MouseEvent } from "react";
import { SubmitButton } from "./submit_button";

const W12MForm = () => {
  const initialValue = {
    speciesName: "",
    planetName: "",
    beingsNumber: "",
    mathsAnswer: "",
    sparingReason: "",
    submitted: false,
  };
  const [input, setInput] = useState(initialValue);

  function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    setInput({ ...input, submitted: true });
  }

  function handleChange(
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) {
    setInput((currentData) =>
      Object.assign({}, currentData, {
        [event.target.id]: event.target.value,
      })
    );
    if (input.submitted) {
      setInput(initialValue);
    }
  }

  return (
    <section className="w12MForm">
      <br></br>
      <W12MHeader />
      <br></br>
      <div className="col-50-left">
        <SpeciesName
          speciesName={input.speciesName}
          onChangeSpeciesName={handleChange}
        />
        <br></br>
        <PlanetName
          planetName={input.planetName}
          onChangePlanetName={handleChange}
        />
        <br></br>
        <BeingsNumber
          beingsNumber={input.beingsNumber}
          onChangeBeingsNumber={handleChange}
        />
        <br></br>
        <MathsQuestion
          mathsAnswer={input.mathsAnswer}
          onChangeMathsAnswer={handleChange}
        />
        <br></br>
        <SparingReason
          sparingReason={input.sparingReason}
          onChangeSparingReason={handleChange}
        />
        <br></br>
        <SubmitButton buttonText="Submit" onSubmitHandler={handleSubmit} />
        <br></br>
      </div>

      <br></br>

      <section className="formOutput">
        <FormOutput
          speciesName={input.speciesName}
          planetName={input.planetName}
          beingsNumber={input.beingsNumber}
          mathsAnswer={input.mathsAnswer}
          sparingReason={input.sparingReason}
          submitted={input.submitted}
        />
      </section>
      <br></br>
      <br></br>
    </section>
  );
};

export default W12MForm;
