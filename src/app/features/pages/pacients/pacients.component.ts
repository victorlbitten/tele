import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
import { Pacient, PacientBroad } from 'src/app/shared/interfaces/pacients';

@Component({
  selector: 'app-pacients',
  templateUrl: './pacients.component.html',
  styleUrls: ['./pacients.component.css']
})
export class PacientsComponent implements OnInit{
  pacients$: Observable<PacientBroad[]>;

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    const baseUrl = "http://127.0.0.1:3000/";
    const pacientsUrl = `${baseUrl}pacients`;

    this.pacients$ = this.http.get<PacientBroad[]>(pacientsUrl).pipe(share());

    this.pacients$.subscribe((response) => {});

  }
}
