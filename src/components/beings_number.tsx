import { ChangeEventHandler } from "react";
interface BeingsNumberProps {
  beingsNumber: string;
  onChangeBeingsNumber: ChangeEventHandler<HTMLInputElement>;
}

export const BeingsNumber: React.FC<BeingsNumberProps> = ({
  beingsNumber,
  onChangeBeingsNumber,
}) => (
  <>
    <label htmlFor="beingsNumber">Number of Beings</label>
    <input
      id="beingsNumber"
      type="text"
      value={beingsNumber}
      onChange={onChangeBeingsNumber}
    />
  </>
);
