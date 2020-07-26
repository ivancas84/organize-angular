import { Component } from '@angular/core';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';

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
        asyncValidators: [this.validators.unique('nombre', 'sistema')],
      }],
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get nombre() { return this.fieldset.get('nombre')}

}
