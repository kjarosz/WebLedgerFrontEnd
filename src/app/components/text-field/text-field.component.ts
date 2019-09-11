import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  @Input() public label: string;
  @Input() public name: string;
  @Input() public readonly: boolean;

  public textValue: any;
  @Output() valueChange = new EventEmitter();

  @Input()
  get value() {
    return this.textValue;
  }

  set value(value: any) {
    this.textValue = value;
    this.valueChange.emit(value);
  }

  changeValue(value: any) {
    this.value = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
