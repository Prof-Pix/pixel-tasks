import { useState } from "react";

type Tiers = {
  basic: boolean;
  vip: boolean;
  landownder: boolean;
};

type PixelTask = {
  name: string;
  pixels: number;
  tiersAcquired: Tiers;
};

type PixelTasks = {
  [key: string]: PixelTask[];
};

export const useFetchPixelTasks = () => {
  const [pixelTasks, setPixelTasks] = useState<PixelTasks | []>(
    (localStorage.getItem("pixelTasks") as typeof PixelTask) || [],
  );

  const handleSetPixelTasks = (pixelTasks: PixelTasks) => {
    setPixelTasks(pixelTasks);
  };

  return { pixelTasks, handleSetPixelTasks };
};
