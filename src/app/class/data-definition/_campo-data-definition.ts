import { DataDefinition } from '../../core/class/data-definition';

export class _CampoDataDefinition extends DataDefinition {
  entity: string = 'campo';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('entidad_' in rowCloned)
    && ('sistema_' in rowCloned['entidad_'])
    ){
      this.stg.setItem('sistema' + rowCloned['entidad_']['sistema_'].id, rowCloned['entidad_']['sistema_']);
      delete rowCloned['entidad_']['sistema_'];
    }
    if(('entidad_' in rowCloned)
    ){
      this.stg.setItem('entidad' + rowCloned['entidad_'].id, rowCloned['entidad_']);
      delete rowCloned['entidad_'];
    }
    this.stg.setItem("campo" + rowCloned.id, rowCloned);
  }

}
