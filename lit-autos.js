import { LitElement, html, css } from "lit";
import "./components/show-autos";
import "./components/input-info";

export class LitAutos extends LitElement {
  static properties = {
    autos: { type: Object },
    name: { type: String },
    year: { type: String },
    brand: { type: String },
    version: { type: String },
    numberInput: { type: String },
    showFilteredInfo: { type: Object },
    theAutos: { type: Object },
    tofilterAutos: { type: Object },
    list: { type: Array },
  };

  constructor() {
    super();
    this.autos = [{}];
    this.name = "";
    this.year = "";
    this.brand = "";
    this.version = "";
    this.img = "";
    this.showFilteredInfo = false;
    this.theAutos = [{}];
    this.list = ["options"];

    this.addEventListener("nameValue", (e) => {
      if (e.detail["value"][0] == "Name :") {
        this.name1 = e.detail["value"][1];
      } else if (e.detail["value"][0] == "Year :") {
        this.year2 = e.detail["value"][1];
      } else if (e.detail["value"][0] == "Brand :") {
        this.brand3 = e.detail["value"][1];
      } else if (e.detail["value"][0] == "Version :") {
        this.version4 = e.detail["value"][1];
      }
    });

    this.addEventListener("theAutos", (e) => {
     
      this.theAutos = e.detail["autos"];
      
    });
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f3eded;
      }
      .registerForm {
        background-image: url("https://media.autoexpress.co.uk/image/private/s--jf7Mv70j--/v1562251437/autoexpress/images/car_photo_259188.jpg");
        background-size: 90vw 50vh;
        display: flex;

        width: 90vw;
        height: 40vh;
        align-items: flex-start;
        font-weight: bold;
        padding: 2em;
        font-size: 1.5em;
      }
      .registerButton {
        background-color: white;
        border-radius: 20px;
        font-size: 0.8em;
        border: none;
      }
      .select {
        font-size: 1.5em;
      }
      .filter {
        width:15em;
        border: 3px solid blue;
        color:black;
      }
    `,
  ];

  render() {
    return html`
      ${this.showFilteredInfo
        ? html` <p>probando true</p> `
        : html` <div class="registerForm">
            <input-info inputName="autoName" labelName="Name :"></input-info>
            <input-info inputName="autoYear" labelName="Year :"> </input-info>
            <input-info inputName="autoBrand" labelName="Brand :"></input-info>
            <input-info
              inputName="autoVersion"
              labelName="Version :"
            ></input-info>

            <button
              id="registerButton"
              class="registerButton"
              @click="${this.saveData}"
            >
              Register
            </button>
          </div>`}
      <!-- aquí va un renderizado condicional con el filtro, el componente filtro eleva un valor true al componente padre para el renderizado condicional y el componente hijo aparece y pinta los autos del filtro-->
      <div id="filterContainer">
        ${this.sortingAutos()}
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
    this.name = this.name1;
    this.year = this.year2;
    this.brand = this.brand3;
    this.version = this.version4;
    this.tofilterAutos = this.theAutos;
  }

  sortingAutos() {
    return html`
    <select class="filter">
      ${(this.select_list = Object.values(this.theAutos).map((auto) => {
        if (!this.list.includes(auto.name) && auto.name != "") {
          this.list.push(auto.name);
          console.log(this.list, "antes dde pintar nombres");

          this.list.map(
            (element) =>
              html`${console.log(element)}
                <option>${element}</option> `
          );
        }
      }))}
    </select>
    ${this.requestUpdate()}
  `;
 
    
  }
}
customElements.define("lit-autos", LitAutos);
