import { DataDefinition } from '../../core/class/data-definition';

export class _ClaveForaneaDataDefinition extends DataDefinition {
  entity: string = 'clave_foranea';

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
    if(('campo_' in rowCloned)
    && ('entidad_' in rowCloned['campo_'])
    && ('sistema_' in rowCloned['campo_']['entidad_'])
    ){
      this.stg.setItem('sistema' + rowCloned['campo_']['entidad_']['sistema_'].id, rowCloned['campo_']['entidad_']['sistema_']);
      delete rowCloned['campo_']['entidad_']['sistema_'];
    }
    if(('campo_' in rowCloned)
    && ('entidad_' in rowCloned['campo_'])
    ){
      this.stg.setItem('entidad' + rowCloned['campo_']['entidad_'].id, rowCloned['campo_']['entidad_']);
      delete rowCloned['campo_']['entidad_'];
    }
    if(('campo_' in rowCloned)
    ){
      this.stg.setItem('campo' + rowCloned['campo_'].id, rowCloned['campo_']);
      delete rowCloned['campo_'];
    }
    this.stg.setItem("clave_foranea" + rowCloned.id, rowCloned);
  }

}
