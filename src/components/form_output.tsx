type FormValuesProps = {
  speciesName: string;
  planetName: string;
  beingsNumber: string;
  mathsAnswer: string;
  sparingReason: string;
  submitted: boolean;
};

export const FormOutput: React.FC<FormValuesProps> = (props) => {
  function displayFormValues(props: FormValuesProps) {
    return (
      <>
        <p>Species Name: {props.speciesName}</p>
        <p>Planet Name: {props.planetName}</p>
        <p>Number of Beings: {props.beingsNumber}</p>
        <p>What is 2 + 2?: {props.mathsAnswer}</p>
        <p>Reason for Sparing: {props.sparingReason}</p>
      </>
    );
  }

  return (
    <>
      {props.submitted && (
        <div className="col-50-right submitted">
          <h3>Your request has been submitted.</h3>
          {displayFormValues(props)}
        </div>
      )}
      {!props.submitted && (
        <div className="col-50-right pending">
          <h3>Review your application before submitting:</h3>
          {displayFormValues(props)}
        </div>
      )}
    </>
  );
};
