export class Todo {
  constructor(private _id: string, private _text: string) {}

  get id() {
    return this._id;
  }

  get text() {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}