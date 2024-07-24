namespace typ {
  type PixelTaskType =
    | "woodworking"
    | "cooking"
    | "mining"
    | "stoneshaping"
    | "forestry"
    | "farming"
    | "petcare"
    | "business";

  type PixelTask = {
    name: string;
    pixels: number;
    tiersAcquired: Tiers;
  };

  enum TierType {
    Basic = "basic",
    Vip = "vip",
    Landowner = "landowner",
  }
  type TiersAcquired = {
    basic: false;
    vip: false;
    landowner: false;
  };
}
