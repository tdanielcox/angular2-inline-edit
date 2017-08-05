import { Directive, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import InlineEdit from 'inline-edit-js';

@Directive({
    selector: '[inlineEdit]'
})
export class InlineEditDirective implements OnInit {

    @Input('editable') public editable: string;
    @Input('onChange') public onChange: Function;
    @Output() public editableChange = new EventEmitter();

    private element: ElementRef;
    private inlineEdit: any;

    constructor(element: ElementRef) {
        this.element = element;
    }

    public ngOnInit() {
        this.inlineEdit = new InlineEdit(this.element.nativeElement, {
            onChange: (newValue, oldValue) => {
                this.editableChange.emit(newValue);

                if (this.onChange) {
                    this.onChange(newValue, oldValue, this.element);
                }
            }
        });
    }
}
