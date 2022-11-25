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
        flex-direction:column;
        align-items:center;
      }
      .registerForm {
        background-image: url("https://media.autoexpress.co.uk/image/private/s--jf7Mv70j--/v1562251437/autoexpress/images/car_photo_259188.jpg");
        background-size: 90vw 50vh;
        display: flex;
        flex-direction:column;
        width:90vw;
        height:40vh;
        align-items:center;
        font-weight:bold;
        padding:2em;
        font-size:1.5em;
      }
      .registerButton {
        background-color:white;
        border-radius:20px;
      }
    `,
  ];

  render() {
    return html`
      <div class="registerForm">
    <div>
        <label>Name: </label> <input id="autoName" /> <label>Year: </label
        ><input id="autoYear" /> <label>Brand: </label><input id="autoBrand" />
        <label>Version: </label><input id="autoVersion" />
        <button class="registerButton" @click="${this.saveData}">Register</button>
        </div>
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
