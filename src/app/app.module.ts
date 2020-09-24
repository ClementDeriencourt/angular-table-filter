import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CdkTable, CdkTableModule, DataSource} from '@angular/cdk/table';
import {MatColumnDef, MatRow, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRowHarness} from '@angular/material/table/testing';
import {MatInput, MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    TableFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatPaginatorModule,
    CdkTableModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
