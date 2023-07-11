import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clinicalConditionsUrl } from 'src/app/shared/constants/urls';
import { ClinicalCondition } from 'src/app/shared/interfaces/clinicalConditions';

@Injectable({
  providedIn: 'root'
})
export class ClinicalConditionsService {

  constructor(private http: HttpClient) { }

  createClinicalCondition (condition: ClinicalCondition) {
    const postObject = { condition };
    return this.http.post(clinicalConditionsUrl, postObject);
  }

  editClinicalCondition (condition: ClinicalCondition) {
    const patchObject = {condition};
    const clinicalConditionsUrlWithId = `${clinicalConditionsUrl}/${condition.id}`;
    return this.http.patch(clinicalConditionsUrlWithId, patchObject);
  }

  deleteClinicalCondition (conditionId: number | string) {
    const clinicalConditionsUrlWithId = `${clinicalConditionsUrl}/${conditionId}`;
    return this.http.delete(clinicalConditionsUrlWithId);
  }
}
