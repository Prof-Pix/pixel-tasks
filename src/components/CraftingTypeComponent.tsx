import React, { FC } from "react";

type CraftingType = {
  type: string;
};

const CraftingTypeComponent: FC<CraftingType> = ({ type }) => {
  return (
    <div>
      <div className="flex justify-start">
        <h1>{type}</h1>
      </div>
    </div>
  );
};

export default CraftingTypeComponent;
