import { PageDataModel } from './page-data.model';

export interface PageModel<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: PageDataModel<T>;
}

export class PageImpl<T> implements PageModel<T> {
  constructor(
    public code: number,
    public status: string,
    public copyright: string,
    public attributionText: string,
    public attributionHTML: string,
    public etag: string,
    public data: PageDataModel<T>
  ) {}

  static of<T>(
    code: number,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    etag: string,
    data: PageDataModel<T>
  ): PageModel<T> {
    return new PageImpl<T>(
      code,
      status,
      copyright,
      attributionText,
      attributionHTML,
      etag,
      data
    );
  }
}
