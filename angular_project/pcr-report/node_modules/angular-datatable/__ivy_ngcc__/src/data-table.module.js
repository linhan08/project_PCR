import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTable } from './components/table.component';
import { DataTableColumn } from './components/column.component';
import { DataTableRow } from './components/row.component';
import { DataTablePagination } from './components/pagination.component';
import { DataTableHeader } from './components/header.component';
import { PixelConverter } from './utils/px';
import { Hide } from './utils/hide';
import { MinPipe } from './utils/min';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';
export var DataTableModule = (function () {
    function DataTableModule() {
    }
    /** @nocollapse */
    DataTableModule.ctorParameters = function () { return []; };
DataTableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DataTableModule });
DataTableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DataTableModule_Factory(t) { return new (t || DataTableModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DataTableModule, { declarations: function () { return [DataTable,
        DataTableColumn,
        DataTableRow,
        DataTablePagination,
        DataTableHeader,
        PixelConverter,
        Hide,
        MinPipe]; }, imports: function () { return [CommonModule,
        FormsModule]; }, exports: function () { return [DataTable,
        DataTableColumn,
        DataTableRow,
        DataTablePagination,
        DataTableHeader,
        PixelConverter,
        Hide,
        MinPipe]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [
                    DataTable,
                    DataTableColumn,
                    DataTableRow,
                    DataTablePagination,
                    DataTableHeader,
                    PixelConverter,
                    Hide,
                    MinPipe
                ],
                exports: [
                    DataTable,
                    DataTableColumn,
                    DataTableRow,
                    DataTablePagination,
                    DataTableHeader,
                    PixelConverter,
                    Hide,
                    MinPipe
                ]
            }]
    }], function () { return []; }, null); })();
ɵngcc0.ɵɵsetComponentScope(DataTable, [ɵngcc1.NgClass, ɵngcc1.NgComponentOutlet, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgStyle, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc1.NgSwitchDefault, ɵngcc1.NgPlural, ɵngcc1.NgPluralCase, ɵngcc2.ɵangular_packages_forms_forms_y, ɵngcc2.NgSelectOption, ɵngcc2.ɵangular_packages_forms_forms_x, ɵngcc2.DefaultValueAccessor, ɵngcc2.NumberValueAccessor, ɵngcc2.RangeValueAccessor, ɵngcc2.CheckboxControlValueAccessor, ɵngcc2.SelectControlValueAccessor, ɵngcc2.SelectMultipleControlValueAccessor, ɵngcc2.RadioControlValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgControlStatusGroup, ɵngcc2.RequiredValidator, ɵngcc2.MinLengthValidator, ɵngcc2.MaxLengthValidator, ɵngcc2.PatternValidator, ɵngcc2.CheckboxRequiredValidator, ɵngcc2.EmailValidator, ɵngcc2.NgModel, ɵngcc2.NgModelGroup, ɵngcc2.NgForm, DataTable,
    DataTableColumn,
    DataTableRow,
    DataTablePagination,
    DataTableHeader,
    Hide], [ɵngcc1.AsyncPipe, ɵngcc1.UpperCasePipe, ɵngcc1.LowerCasePipe, ɵngcc1.JsonPipe, ɵngcc1.SlicePipe, ɵngcc1.DecimalPipe, ɵngcc1.PercentPipe, ɵngcc1.TitleCasePipe, ɵngcc1.CurrencyPipe, ɵngcc1.DatePipe, ɵngcc1.I18nPluralPipe, ɵngcc1.I18nSelectPipe, ɵngcc1.KeyValuePipe, PixelConverter,
    MinPipe]);
    return DataTableModule;
}());

//# sourceMappingURL=data-table.module.js.map