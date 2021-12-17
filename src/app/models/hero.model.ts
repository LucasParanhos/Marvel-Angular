import { UrlsModel } from './urls.model';
import { ThumbnailModel } from './thumbnail.model';
import { GenericDetailModel } from './generic-detail.model';
import { AbstractModel } from './abstract.model';

export interface HeroModel extends AbstractModel {
  name: string;
  description: string;
  modified: Date;
  thumbnail: ThumbnailModel;
  resourceURI: string;
  comics: GenericDetailModel;
  series: GenericDetailModel;
  stories: GenericDetailModel;
  events: GenericDetailModel;
  urls: [UrlsModel];
}
