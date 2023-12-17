interface BeingsNumberProps {
  beingsNumber: string;
  onChangeBeingsNumber: (value: string) => void;
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
      onChange={(e) => onChangeBeingsNumber(e.target.value)}
    />
  </>
);
