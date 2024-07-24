import React, { FC } from "react";
import TierButton from "../../sub-components/TierButton";

type TierButtonContainerProps = {
  tierAcquiredStatus: typ.TiersAcquired;
};

const TierButtonContainer: FC<TierButtonContainerProps> = ({
  tierAcquiredStatus,
}) => {
  return (
    <div className="flex items-center gap-x-1">
      <TierButton tier="Basic" isTierAcquired={tierAcquiredStatus.basic} />
      <TierButton tier="VIP" isTierAcquired={tierAcquiredStatus.vip} />
      <TierButton
        tier="Landowner"
        isTierAcquired={tierAcquiredStatus.landowner}
      />
    </div>
  );
};

export default TierButtonContainer;
