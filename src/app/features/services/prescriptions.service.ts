import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { prescriptionsUrl } from 'src/app/shared/constants/urls';
import { Prescription } from 'src/app/shared/interfaces/prescriptions';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionsService {

  constructor(private http: HttpClient) {}

  postPrescriptions (prescriptions: Prescription[]) {
    const postObject = { prescriptions: [prescriptions] };
    return this.http.post(prescriptionsUrl, postObject);
  }

  editPrescription (prescription: Prescription) {
    const patchObject = {prescription};
    const prescriptionUrlWithId = `${prescriptionsUrl}/${prescription.id}`;
    return this.http.patch(prescriptionUrlWithId, patchObject);
  }

  deletePrescription (prescriptionId: number | string) {
    const prescriptionUrlWithId = `${prescriptionsUrl}/${prescriptionId}`;
    return this.http.delete(prescriptionUrlWithId);
  }
}
