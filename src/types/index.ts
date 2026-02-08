export type Id = string;

export interface ReviewType {
  _id: Id;
  name: string;
  rating: number;
  comment: string;
  image: string;
}

export interface CustomizationFormData {
  bodiceType: string;
  sleeveType: string;
  skirtType: string;
  fabric: string;

  length: number;
  sleeveLength: number;
  chest: number;
  waist: number;

  request: string;
}
