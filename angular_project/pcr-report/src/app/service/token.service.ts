import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  saveToken(token: any) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
