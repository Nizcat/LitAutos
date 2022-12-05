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
    filteredAutos: { type: Object },
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
    this.filteredAutos = [{}];

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
      this.sortingAutos();
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
        width: 15em;
        border: 3px solid blue;
        color: black;
      }
      .autoImage {
        width: 20em;
        height: 15em;
        size: cover;
      }
      .autosContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 2em;
        margin-top: 2em;
        justify-items: center;

        width: 80vw;
      }
      .card {
        background-color: white;
        padding: 1em;
        box-shadow: 0.5em 0.5em #d7d5d5;
      }
      .autoInfo {
        height: fit-content;
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 3em 2em;
        justify-items: center;
        align-items: center;
      }
    `,
  ];

  render() {
    return html`
      ${this.showFilteredInfo
        ? html` <div class="autosContainer">
            ${this.filteredAutos.map(
              (eachAuto) =>
                html`
                <div class="card">
                  <div class="card-content">
                    <div class="autoInfo">
                      <h2>${eachAuto.name}</h2>
                      <p>Brand: ${eachAuto.brand}</p>
                      <p>Version: ${eachAuto.version}</p>
                      <p>Year: ${eachAuto.year}</p>
                    </div>
                    <img class="autoImage" src=${eachAuto.img} />
                  </div>
                </div>${console.log(this.showFilteredInfo, "booleano")}
                </div>
              `
            )}
          </div>`
        : html` <div class="registerForm">
              <input-info inputName="autoName" labelName="Name :"></input-info>
              <input-info inputName="autoYear" labelName="Year :"> </input-info>
              <input-info
                inputName="autoBrand"
                labelName="Brand :"
              ></input-info>
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
            </div>

            <div>
              <select
                id="filterContainer"
                class="filter"
                name="filter"
                @change=${this.getItem}
              >
                ${this.list.map(
                  (eachAuto) =>
                    html`<option value=${eachAuto}>${eachAuto}</option>`
                )}
              </select>
            </div>
            <show-autos
              name=${this.name}
              year=${this.year}
              brand=${this.brand}
              version=${this.name}
            ></show-autos>`}
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
    this.filter = this.shadowRoot.getElementById("filterContainer");
    this.select_list = Object.values(this.theAutos).map((auto) => {
      if (!this.list.includes(auto.name) && auto.name != "") {
        this.list.push(auto.name);
      }
    });
    this.requestUpdate();
  }
  getItem() {
    this.showFilteredInfo = true;
    this.item = this.shadowRoot.getElementById("filterContainer").value;
    for (this.auto of this.theAutos) {
      if (this.auto.name === this.item) {
        this.filteredAutos.push(this.auto);
      }
    }

    this.requestUpdate();
  }
}
customElements.define("lit-autos", LitAutos);
