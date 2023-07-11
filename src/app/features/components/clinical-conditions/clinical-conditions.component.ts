import { Component, Input, OnInit } from '@angular/core';
import { conditionStatusTextById } from 'src/app/shared/constants/conditionStatusTextById';
import { tagPatternByConditionStatusId } from 'src/app/shared/constants/tagPatternByConditionStatusId';
import { ClinicalCondition } from 'src/app/shared/interfaces/clinicalConditions';

@Component({
  selector: 'app-clinical-conditions',
  templateUrl: './clinical-conditions.component.html',
  styleUrls: ['./clinical-conditions.component.css']
})
export class ClinicalConditionsComponent {
  @Input() clinicalConditions: Array<ClinicalCondition>;

  conditionText = conditionStatusTextById;
  tagPatterns = tagPatternByConditionStatusId;

}
