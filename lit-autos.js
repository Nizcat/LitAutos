import { LitElement, html, css } from "lit";
import "./components/show-autos";

export class LitAutos extends LitElement {
  static properties = {
    autos: { type: Object },
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
    `;
  }

  saveData() {
    this.autos.push({
      name: this.shadowRoot.getElementById("autoName").value,
      year: this.shadowRoot.getElementById("autoYear").value,
      brand: this.shadowRoot.getElementById("autoBrand").value,
      version: this.shadowRoot.getElementById("autoVersion").value,
    });
    console.log(this.autos);
  }
  
}
customElements.define("lit-autos", LitAutos);
