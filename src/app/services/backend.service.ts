import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { Path } from "./Path";
import { environment } from '../../environments/environment';


@Injectable({providedIn:'root'})
export class BackendService
{
    private baseUrl:string;

    constructor(private http:HttpClient)
    {
        this.baseUrl = environment.base_url;
        console.log("startup, base URL: "+this.baseUrl)
    }

    requestImage(imageId:string): Observable<Blob>
    {
       return this.http
        .get(this.baseUrl+"paths/images/"+imageId, { responseType: 'blob' });
    }

    createImageFromBlob(image: Blob, target:any) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
           target.image = reader.result;
        }, false);
     
        if (image) {
           reader.readAsDataURL(image);
        }
     }

    requestApi(url:string) : Observable<any>
    {

    var culture = this.getCulture();    

    return this.http.get<Path[]>(this.baseUrl+url+"?culture="+culture).pipe(
        tap(_ => console.log('fetched heroes')),catchError(this.handleError<Path[]>('getHeroes', [])));
    }
  
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    getCulture() :string
    {
        return "de";
    }

}