//@ts-check

import { LitElement, html, css } from "../libs/lit.js";
import { State } from "../scripts.js";


class CreateList extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
    }

    @keyframes enter {
      0% {
        opacity: 0.3;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .count {
      font-size: 0.7rem;
      font-weight: 300;
    }

    .count input {
      background-color: transparent;
      border: 0;
      font-size: 0.68rem;
    }

    .top {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .logo {
      cursor: pointer;
      filter: blur(0.6px);
      filter: opacity(0.6);
    }

    .logo:hover {
      filter: blur(0.1px);
      filter: opacity(0.9);
      filter: hue-rotate(60deg);
      transform: rotate(-360deg) translateY(-5px);
      transition: 0.6s ease-in-out;
    }

    main {
      padding: 0.25rem;
      animation: enter 0.8s ease-in-out both;
    }
  `;
  static properties = {
    visible: { type: Boolean, state: false },
    state: { type: Object },
    count: {type: Number}
  };

  constructor() {
    super();
    this.visible = true;
    this.count = 0
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.countState();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopCountState();
  }

  countState() {
    this.intervalId = setInterval(() => {
      let ref = Object.entries(State).filter((task) => {
        return task[1].completed === false 
      })
      this.count = ref.length
    }, 100);
  }

  stopCountState() {
    clearInterval(this.intervalId);
  }
  
  toggleHidden() {
    this.visible = !this.visible;
  }
  
  /**
   * 
   * @returns {any}
   */
  render() {
    return html`
      <p class="count">Tasks remaining (${this.count})</p>
      <div class="top">
        <img
          @click=${this.toggleHidden}
          src="./images/to-do.png"
          alt="to-do list"
          class="logo"
        />
      </div>
      <main .hidden=${this.visible}>
        <tasks-add></tasks-add>
      </main>
    `;
  }
}

customElements.define("rendered-list", CreateList);
