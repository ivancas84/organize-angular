import { Injectable } from '@angular/core';

import { SessionStorageService } from '../core/service/storage/session-storage.service';
import { ParserService } from '../core/service/parser/parser.service';
import { DataDefinition } from '../core/class/data-definition';

import { CampoDataDefinition } from '../class/data-definition/campo-data-definition';
import { ClaveForaneaDataDefinition } from '../class/data-definition/clave-foranea-data-definition';
import { EntidadDataDefinition } from '../class/data-definition/entidad-data-definition';
import { SistemaDataDefinition } from '../class/data-definition/sistema-data-definition';

@Injectable({
  providedIn: 'root'
})
export class DataDefinitionLoaderService {

  constructor(protected stg: SessionStorageService, protected parser: ParserService){ }

  get(name: string): DataDefinition {
    switch(name) {
      case "campo": { return new CampoDataDefinition(this.stg, this.parser); }
      case "clave_foranea": { return new ClaveForaneaDataDefinition(this.stg, this.parser); }
      case "entidad": { return new EntidadDataDefinition(this.stg, this.parser); }
      case "sistema": { return new SistemaDataDefinition(this.stg, this.parser); }
    }
  }
}
