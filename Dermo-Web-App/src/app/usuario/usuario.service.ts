import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    private backUrl: string = "http://localhost:5000"

    constructor(private htt: HttpClient) { }

}
