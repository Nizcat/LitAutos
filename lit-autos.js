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
  };

  constructor() {
    super();
    this.autos = [{}];
    this.name = "";
    this.year = "";
    this.brand = "";
    this.version = "";
    this.img =
      "https://assets.catawiki.nl/assets/2020/1/22/b/8/7/b8756b1a-0561-4f99-a2ec-edfe65842c38.jpg";

      this.addEventListener("nameValue", (e) => {
        if(e.detail["value"][0] == "Name :"){
          this.name1 =e.detail["value"][1];

        } else if (e.detail["value"][0] == "Year :"){
          this.year2 =e.detail["value"][1];

        }else if (e.detail["value"][0] == "Brand :"){
          this.brand3 =e.detail["value"][1];

        }else if (e.detail["value"][0] == "Version :"){
          this.version4 =e.detail["value"][1];

        }
       
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
        align-items: center;
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
    `,
  ];

  render() {
    return html`
      <div class="registerForm">
        
          <input-info 
          inputName = "autoName"
          labelName = "Name :" 
          ></input-info>
          <input-info 
          inputName = "autoYear"
          labelName = "Year :" 
          ></input-info>
          <input-info 
          inputName = "autoBrand"
          labelName = "Brand :" 
          ></input-info>
          <input-info 
          inputName = "autoVersion"
          labelName = "Version :" 
          ></input-info>
          
          <button id="registerButton" class="registerButton" @click="${this.saveData}">
            Register
          </button>
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
  }
}
customElements.define("lit-autos", LitAutos);
