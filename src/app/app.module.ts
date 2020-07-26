import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { DataDefinitionLoaderService } from '@service/data-definition-loader.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { ParserService } from '@service/parser/parser.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { HttpClientModule } from '@angular/common/http';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';
import { MenuComponent } from './component/menu/menu.component'

import { EntidadAdminComponent } from './component/entidad-admin/entidad-admin/entidad-admin.component';
import { EntidadFieldsetComponent } from './component/entidad-admin/entidad-fieldset/entidad-fieldset.component'

import { SistemaAdminComponent } from './component/sistema-admin/sistema-admin/sistema-admin.component';
import { SistemaFieldsetComponent } from './component/sistema-admin/sistema-fieldset/sistema-fieldset.component'

@NgModule({
  declarations: [
    AppComponent,
    DialogAlertComponent,
    MenuComponent,

    EntidadAdminComponent,
    EntidadFieldsetComponent, 

    SistemaAdminComponent,
    SistemaFieldsetComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,

  ],
  entryComponents: [
    DialogAlertComponent
  ],

  providers: [
    DataDefinitionService, 
    DataDefinitionLoaderService, 
    SessionStorageService, 
    ParserService, 
    ValidatorsService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000, verticalPosition:"top", horizontalPosition:"right"}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
