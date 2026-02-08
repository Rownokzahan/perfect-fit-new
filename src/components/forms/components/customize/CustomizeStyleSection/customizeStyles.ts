export interface CustomizeStyleOption {
  name: string;
  image: string;
}

export type CustomizeStyleId =
  | "bodiceType"
  | "sleeveType"
  | "skirtType"
  | "fabric";

export interface CustomizeStyle {
  id: CustomizeStyleId;
  title: string;
  options: CustomizeStyleOption[];
}

export const CustomizeStyles: CustomizeStyle[] = [
  {
    id: "bodiceType",
    title: "Bodice",
    options: [
      { name: "Boat", image: "/images/customize-style/bodice/boat.png" },
      {
        name: "Sweetheart",
        image: "/images/customize-style/bodice/sweetheart.png",
      },
      { name: "Scoop", image: "/images/customize-style/bodice/scoop.png" },
      { name: "Square", image: "/images/customize-style/bodice/square.png" },
    ],
  },
  {
    id: "sleeveType",
    title: "Sleeve",
    options: [
      { name: "Flutter", image: "/images/customize-style/sleeve/flutter.png" },
      { name: "Bell", image: "/images/customize-style/sleeve/bell.png" },
      { name: "Bishop", image: "/images/customize-style/sleeve/bishop.png" },
      { name: "Fitted", image: "/images/customize-style/sleeve/fitted.png" },
    ],
  },
  {
    id: "skirtType",
    title: "Skirt",
    options: [
      { name: "Circle", image: "/images/customize-style/skirt/circle.png" },
      {
        name: "3/4 Circle",
        image: "/images/customize-style/skirt/three-quarter-circle.png",
      },
      {
        name: "1/2 Circle",
        image: "/images/customize-style/skirt/half-circle.png",
      },
      { name: "Pleated", image: "/images/customize-style/skirt/pleated.png" },
    ],
  },
  {
    id: "fabric",
    title: "Fabric",
    options: [
      { name: "Fabric 1", image: "/images/customize-style/fabric/fabric1.png" },
      { name: "Fabric 2", image: "/images/customize-style/fabric/fabric2.png" },
      { name: "Fabric 3", image: "/images/customize-style/fabric/fabric3.png" },
      { name: "Fabric 4", image: "/images/customize-style/fabric/fabric4.png" },
    ],
  },
];
