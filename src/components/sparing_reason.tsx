import { ChangeEventHandler } from "react";
interface SparingReasonProps {
  sparingReason: string;
  onChangeSparingReason: ChangeEventHandler<HTMLTextAreaElement>;
}

export const SparingReason: React.FC<SparingReasonProps> = ({
  sparingReason,
  onChangeSparingReason,
}) => (
  <>
    <label htmlFor="sparingReason">Reason for Sparing</label>
    <textarea
      id="sparingReason"
      rows={5}
      cols={20}
      value={sparingReason}
      onChange={onChangeSparingReason}
    />
  </>
);
