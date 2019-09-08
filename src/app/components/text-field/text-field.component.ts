import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
import { EventEmitter } from 'events';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    }
  ]
})
export class TextFieldComponent implements OnInit, ControlValueAccessor {

  @Input("name") public name: string;

  @Input("ngModel") ngModel: any;
  @Output("ngModel") ngModelEmitter: EventEmitter;

  isDisabled: boolean;

  propagateChange = (_: any) => {};

  writeValue(obj: any) {
    this.ngModel = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { 
    this.isDisabled = isDisabled;
  }

  constructor() { }

  ngOnInit() { }

}
