  import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }
  demo() {
    console.log("hello world");
  }
}
