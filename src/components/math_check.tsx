interface MathCheckProps {
  mathCheck: string;
  onChangeMathCheck: (value: string) => void;
}

export const MathCheck: React.FC<MathCheckProps> = ({
  mathCheck,
  onChangeMathCheck,
}) => (
  <>
    <label htmlFor="mathCheck">What is 2 + 2?</label>
    <select
      value={mathCheck}
      onChange={(e) => onChangeMathCheck(e.target.value)}
    >
      <option value="not4">Not 4</option>
      <option value="0">0</option>
      <option value="4">4</option>
      <option value="99">99</option>
    </select>
  </>
);
