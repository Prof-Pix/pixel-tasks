import { FC, useState } from "react";

type TierButtonProps = {
  tier: string;
  isTierAcquired: boolean;
};

const TierButton: FC<TierButtonProps> = ({ tier, isTierAcquired }) => {
  const [isAcquired, setIsAcquired] = useState(isTierAcquired);

  return (
    <button
      onClick={() => setIsAcquired((prev) => !prev)}
      className={`${isAcquired ? "bg-gray-500" : ""} duration-50 flex items-center gap-x-2 rounded-lg border px-4 py-0.5 shadow`}
    >
      {tier.toLowerCase() != "basic" && (
        <img className="h-4 w-4" src={`icons/${tier.toLowerCase()}.png`} />
      )}
      <p className="text-sm">{tier}</p>
    </button>
  );
};

export default TierButton;
