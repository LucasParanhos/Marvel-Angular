import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { AbstractModel } from 'src/app/models/abstract.model';

import { environment } from 'src/environments/environment';

const RETRY = 1;

// Cabeçalho utilizado nas requisições imutáveis (GET / HEAD) realizadas para as APIs
// de cadastros (https://api.dominio.com.br/cadastros/**), ignorando o Service Worker e
// consequentemente baixando o tempo de resposta em quase 300ms.
const HEADER_NGSW_BYPASS = { 'ngsw-bypass': 'true' };

const normalizeUrl = (url: string): string => {
  return url
    .replace(/\/\//gi, '/')
    .replace('https:/', 'https://')
    .replace('http:/', 'http://');
};

export const create = <T extends AbstractModel>(
  http: HttpClient,
  endpoint: string,
  model: T
): Observable<T> => {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });

  return http.post<T>(endpoint, model, { headers }).pipe(retry(RETRY));
};

export const update = <T extends AbstractModel>(
  http: HttpClient,
  endpoint: string,
  model: T
): Observable<T> => {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });

  let url = model.id ? `${endpoint}/${model.id}` : endpoint;
  url = normalizeUrl(url);

  return http.put<T>(url, model, { headers }).pipe(retry(RETRY));
};

export const destroy = <ID>(
  http: HttpClient,
  endpoint: string,
  id: ID
): Observable<void> => {
  let url = `${endpoint}/${id}`;
  url = normalizeUrl(url);

  return http.delete<void>(url).pipe(retry(RETRY));
};

export const findBy = <T extends AbstractModel>(
  http: HttpClient,
  endpoint: string,
  httpParams: HttpParams
): Observable<T[]> => {
  return http
    .get<T[]>(endpoint, {
      headers: HEADER_NGSW_BYPASS,
      params: httpParams,
    })
    .pipe(retry(RETRY));
};

export const findById = <T extends AbstractModel>(
  http: HttpClient,
  endpoint: string,
  id: string | number
): Observable<T> => {
  let url = `${endpoint}/${id}`;
  url = normalizeUrl(url);

  return http.get<T>(url, { headers: HEADER_NGSW_BYPASS }).pipe(retry(RETRY));
};

export const findAll = <T extends AbstractModel>(
  http: HttpClient,
  endpoint: string
): Observable<T[]> => {
  return http.get<T[]>(endpoint).pipe(retry(RETRY));
};

const authdata = () => {
  return `?apikey=${environment.api.public_key}`;
};

export abstract class RestApiService<T extends AbstractModel> {
  protected apiUrl: string;

  constructor(
    protected endpoint: string,
    protected http: HttpClient,
    protected options?: any
  ) {
    this.apiUrl = environment.api.base_url;

    if (!this.endpoint.startsWith('http')) {
      this.endpoint = `${this.apiUrl}/${this.endpoint.replace('/', '')}
      `;
    }
  }

  create(model: T): Observable<T> {
    return create(this.http, this.endpoint, model);
  }

  update(model: T): Observable<T> {
    return update(this.http, this.endpoint, model);
  }

  delete(id: string | number): Observable<void> {
    return destroy(this.http, this.endpoint, id);
  }

  findBy(httpParams: HttpParams): Observable<T[]> {
    return findBy(this.http, this.endpoint, httpParams);
  }

  findById(id: string | number): Observable<T> {
    return findById(this.http, this.endpoint, id);
  }

  findAll(): Observable<T[]> {
    return findAll(this.http, `${this.endpoint}`);
  }
}
