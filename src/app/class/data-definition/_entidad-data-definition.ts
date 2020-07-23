import { DataDefinition } from '../../core/class/data-definition';

export class _EntidadDataDefinition extends DataDefinition {
  entity: string = 'entidad';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('sistema_' in rowCloned)
    ){
      this.stg.setItem('sistema' + rowCloned['sistema_'].id, rowCloned['sistema_']);
      delete rowCloned['sistema_'];
    }
    this.stg.setItem("entidad" + rowCloned.id, rowCloned);
  }

}
