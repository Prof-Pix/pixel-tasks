// {
//     "name": "Craftbark Plank",
//     "pixels": 2,
//     "tiersAcquired": { "basic": true, "vip": true, "landowner": true }
//   }

class TiersAcquired {
  constructor(
    public basic: boolean,
    public vip: boolean,
    public landownder: boolean,
  ) {}
}

class Task {
  constructor(
    public name: string,
    public pixels: number,
    public tiersAcquired: TiersAcquired,
  ) {}
}

export { Task };
