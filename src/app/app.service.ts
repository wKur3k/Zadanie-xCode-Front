import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AppService {
  arrayChanged = new Subject<number[]>()
  constructor(private http: HttpClient) {}
  getArraySorted(numbers: string, direction: string){
    let body = {
      "numbers": numbers.split(",").map(Number),
      "order": direction
    };
    this.http.post("http://localhost:8080/numbers/sort-command", body)
      .pipe(
        map(response => {
          return Object.values(response);}
        )
      )
      .subscribe((data: number[]) => {
        this.arrayChanged.next(data)
    });
  }
}
