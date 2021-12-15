import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export interface AbstractModel {
    id?: string | number;
}
