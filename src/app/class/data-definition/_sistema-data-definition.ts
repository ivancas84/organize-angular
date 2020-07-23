import { DataDefinition } from '../../core/class/data-definition';

export class _SistemaDataDefinition extends DataDefinition {
  entity: string = 'sistema';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    this.stg.setItem("sistema" + rowCloned.id, rowCloned);
  }

}
