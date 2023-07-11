import { Component, Input } from '@angular/core';
import { conditionStatusTextById } from 'src/app/shared/constants/conditionStatusTextById';
import { tagPatternByConditionStatusId } from 'src/app/shared/constants/tagPatternByConditionStatusId';
import { ClinicalCondition } from 'src/app/shared/interfaces/clinicalConditions';

@Component({
  selector: 'app-clinical-condition',
  templateUrl: './clinical-condition.component.html',
  styleUrls: ['./clinical-condition.component.css']
})
export class ClinicalConditionComponent {
  @Input() condition: ClinicalCondition;
  tagPatterns = tagPatternByConditionStatusId;
  conditionText = conditionStatusTextById;
}
