import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, share } from 'rxjs';
import { DetailedPacient, Pacient } from 'src/app/shared/interfaces/pacients';

@Component({
  selector: 'app-pacient-details',
  templateUrl: './pacient-details.component.html',
  styleUrls: ['./pacient-details.component.css']
})
export class PacientDetailsComponent implements OnInit{
  pacient$: Observable<DetailedPacient>;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const pacientId = this.route.snapshot.params['id'];
    const baseUrl = "http://127.0.0.1:3000/";
    const detailedPacientUrl = `${baseUrl}pacients/${pacientId}?detailed=true`;

    this.pacient$ = this.http.get<DetailedPacient>(detailedPacientUrl).pipe(share());

    this.pacient$.subscribe((response) => {});
  }
}
