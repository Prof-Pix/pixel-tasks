import { useEffect, useState } from "react";

type Tiers = {
  basic: boolean;
  vip: boolean;
  landownder: boolean;
};

type PixelTasks = {
  [key: typ.PixelTaskType]: typ.PixelTask[];
};

export const useFetchPixelTasks = () => {
  const [pixelTasks, setPixelTasks] = useState<PixelTasks | {}>({});

  useEffect(() => {
    const fetchPixelTasks = async () => {
      const storedData = await localStorage.getItem("pixelTasks");

      if (storedData) {
        const parsedData: PixelTasks = JSON.parse(storedData);
        setPixelTasks(parsedData);
      }
    };

    fetchPixelTasks();
  });

  const handleSetPixelTasks = (pixelTasks: PixelTasks) => {
    setPixelTasks(pixelTasks);
  };

  const handleAddPixelTask = (
    pixelTask: typ.PixelTask,
    pixelTaskType: typ.PixelTaskType,
  ) => {
    const updatedPixelTasks: PixelTasks = {
      ...pixelTasks,
      [pixelTaskType]: [...pixelTasks[pixelTaskType], pixelTask],
    };

    localStorage.setItem("pixelTasks", updatedPixelTasks);
    setPixelTasks(updatedPixelTasks);
  };

  return { pixelTasks, handleSetPixelTasks };
};
