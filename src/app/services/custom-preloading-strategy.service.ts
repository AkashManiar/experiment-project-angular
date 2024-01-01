import {PreloadingStrategy, Route} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable, of, timer} from "rxjs";
import {flatMap} from "rxjs/internal/operators";

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log("----Route--", route)
    if (route.data && route.data.preload && route.data.delay) {
      const delay: number = route.data.delay;
      return timer(delay).pipe(flatMap(_ => {
        console.log("Load me now loading", route.path)
        return fn();
      }))
    } else {
      // no preloading
      console.log("No preloading")
      return of(null);
    }
  }

}
