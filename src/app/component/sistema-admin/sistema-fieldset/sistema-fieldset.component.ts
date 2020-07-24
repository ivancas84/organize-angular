import { Component } from '@angular/core';
import { FieldsetComponent } from '../../../core/component/fieldset/fieldset.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataDefinitionService } from '../../../core/service/data-definition/data-definition.service';
import { ValidatorsService } from '../../../core/service/validators/validators.service';
import { SessionStorageService } from '../../../core/service/storage/session-storage.service';

@Component({
  selector: 'app-sistema-fieldset',
  templateUrl: './sistema-fieldset.component.html',
})
export class SistemaFieldsetComponent extends FieldsetComponent {

  readonly entityName: string = 'sistema';

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService,
    protected router: Router, 
    protected storage: SessionStorageService 
  ) {
    super(router, storage);
  }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      id:null,
      nombre: [null, {
        validators: [Validators.required],
      }],
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get nombre() { return this.fieldset.get('nombre')}

}
