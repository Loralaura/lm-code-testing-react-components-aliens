interface SparingReasonProps {
  sparingReason: string;
  onChangeSparingReason: (value: string) => void;
}

export const SparingReason: React.FC<SparingReasonProps> = ({
  sparingReason,
  onChangeSparingReason,
}) => (
  <>
    <label htmlFor="sparingReason">Reason for Sparing</label>
    <input
      id="sparingReason"
      type="text"
      value={sparingReason}
      onChange={(e) => onChangeSparingReason(e.target.value)}
    />
  </>
);
