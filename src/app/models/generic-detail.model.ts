import { ItemsModel } from './items.model';

export interface GenericDetailModel {
  available: number;
  collectionURI: string;
  items: ItemsModel[];
  returned: number;
}
