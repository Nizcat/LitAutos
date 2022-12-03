import { LitElement, html, css } from "lit";

export class InputInfo extends LitElement {
  static properties = {
    labelName: { type: String },
    inputName: { type: String },
    inputValue: { type: String },
    container: {type:Object},
  };

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  _sendItem(value) {
    this.dispatchEvent(
      new CustomEvent("nameValue", {
        detail: { value },
        bubbles: true,
        composed: true,
      })
    );
  }

  firstUpdated() {
    super.firstUpdated();
    this.inputValue = this.shadowRoot.getElementById(this.inputName).value;
  }
  constructor() {
    super();
    this.inputValue = "aún sin valor";
   
  }

  render() {
    return html`
      <label>${this.labelName} </label>
      <input id=${this.inputName} @keyup="${this.statedValue}" />
    `;
  }

  statedValue(e) {
    this.inputvalue = this.shadowRoot.getElementById(this.inputName).value;
    this.container = [this.labelName, e.path[2].inputvalue ];
    this._sendItem(this.container)
  }
}
customElements.define("input-info", InputInfo);
