import { LitElement, html, css } from "lit";

export default class ShowAutos extends LitElement {
  static properties = {
    auto: { type: Object },
    name: { type: String },
    year: { type: String },
    brand: { type: String },
    version: { type: String },
  };

  constructor() {
    super();
    this.auto = [{}];
    this.saveData();
  }
 

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <div>${this.saveData()}</div>

      }`;
  }
  saveData() {
    console.log(this.name, this.year, "las variables");
    this.auto.push({
      name: this.name,
      year: this.year,
      brand: this.brand,
      version: this.version,
    });
    console.log(this.auto);
  }
}
customElements.define("show-autos", ShowAutos);
