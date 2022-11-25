import { LitElement, html, css } from "lit";

export default class ShowAutos extends LitElement {
  static properties = {
    auto: { type: Object },
    name: { type: String },
    year: { type: String },
    brand: { type: String },
    version: { type: String },
    myArray: { type: Array },
    rand: { type: Number },
  };

  constructor() {
    super();
    this.auto = [
      {
        name: "Vocho",
        year: "1969",
        brand: "VW",
        version: "Classic",
        img: "https://assets.catawiki.nl/assets/2020/1/22/b/8/7/b8756b1a-0561-4f99-a2ec-edfe65842c38.jpg",
      },
    ];

    this.pickAnImage();
  }

  static styles = [
    css`
    
      :host {
        display: block;
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
      <div>${(this.saveData(), this.pickAnImage())}</div>
      <div class="autosContainer">
        ${this.auto.map(
          (eachAuto) =>
            html`
              <div class="card">
                <div class="card-content">
                  <div class="autoInfo">
                    <h2 >${eachAuto.name}</h2>
                    <p >Brand: ${eachAuto.brand}</p>
                    <p >Version: ${eachAuto.version}</p>
                    <p >Year: ${eachAuto.year}</p>
                  </div>
                  <img class="autoImage" src=${eachAuto.img} />
                </div>
              </div>
            `
        )}
      </div>
    `;
  }
  saveData() {
    this.auto.push({
      name: this.name,
      year: this.year,
      brand: this.brand,
      version: this.version,
      img: this.imageAuto,
    });
    console.log(this.auto);
  }
  pickAnImage() {
    this.myArray = [
      "https://i.pinimg.com/474x/9a/a0/5d/9aa05dfc9d9a0c0b1a32ab39a7df3a8e.jpg",
      "https://i.pinimg.com/736x/92/71/60/927160803cfd068253662a304cb2efff--chevrolet-auto-chevrolet-caprice.jpg",
      "https://i.pinimg.com/originals/77/ef/84/77ef8486b48c628be8f0c8316a4a6139.jpg",
      "https://i.pinimg.com/originals/40/9a/8e/409a8ea68a21e1c9dfe2dd567ea827ef.jpg",
      "https://i.pinimg.com/originals/f1/1c/8f/f11c8f0ca66ed0e78da4ed80b5f13822.jpg",
      "https://i.pinimg.com/originals/c8/e5/9b/c8e59b12836cfe2eca4af2f03c801400.jpg",
      "https://i.ytimg.com/vi/O9h_aaT6P-k/maxresdefault.jpg",
    ];
    this.rand = Math.floor(Math.random() * this.myArray.length);
    this.imageAuto = this.myArray[this.rand];
  }
}
customElements.define("show-autos", ShowAutos);
