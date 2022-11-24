import { LitElement, html, css } from "lit";
import "./components/show-autos";

export class LitAutos extends LitElement {
  static properties = {
    autos: { type: Object },
    name: {type: String},
    year: {type: String},
    brand: {type: String},
    version: {type: String},
  };

  constructor() {
    super();
    this.autos = [{}];
  }

  static styles = [
    css`
      :host {
        display: flex;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <label>Name</label> <input id="autoName" /> <label>Year</label
        ><input id="autoYear" /> <label>Brand</label><input id="autoBrand" />
        <label>Version</label><input id="autoVersion" />
        <button @click="${this.saveData}">Registrar</button>
      </div>
      <show-autos
        name=${this.name}
        year=${this.year}
        brand=${this.brand}
        version=${this.name}
      ></show-autos>
    `;
  }
  saveData() {
    this.name = this.shadowRoot.getElementById("autoName").value;
    this.year = this.shadowRoot.getElementById("autoYear").value;
    this.brand = this.shadowRoot.getElementById("autoBrand").value;
    this.version = this.shadowRoot.getElementById("autoVersion").value;
  }
}
customElements.define("lit-autos", LitAutos);
