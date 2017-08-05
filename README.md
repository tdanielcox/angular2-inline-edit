Angular2 Inline Edit
==============

A directive for the [inline-edit-js](https://github.com/mkay581/inline-edit-js) library

## Installation

Install with NPM:

```bash
npm install angular2-inline-edit
```

Then, import the directive

```js
import { InlineEditDirective } from 'angular2-inline-edit';
```

```js
declarations: [
	...
	InlineEditDirective,
	...
]
```

## Basic Usage

Set a property in your component

```js
export class YourComponent {

    public editableString: string;
}
```

Then use that property with the inline edit directive

```html
<div inlineEdit [(editable)]="editableString">
    {{ editableString }}
</div>
```

## onChange Callback

You can also pass a callback to the onChange event

```js
export class YourComponent {

    public editableString: string;

    ...

    public editableChangeCallback(newValue: string, oldValue: string, elementRef: ElementRef) {
        //  handle new value
    }
}
```

```html```
// With onChange callback
<div inlineEdit [(editable)]="editableString" [onChange]="editableChangeCallback">
    {{ editableString }}
</div>
```

## Options

#### editable
Type: `string`

Your editable property

#### onChange
Type: `Function`
Default: `null`

A callback that fires when the editable model changes, it passes back 3 parameters: newValue, oldValue, and a reference to the element.
