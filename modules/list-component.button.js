//@ts-check
import {LitElement, css, html} from '../libs/lit.js'

class CreateButton extends LitElement{
  //CSS below-----------------------------------------------------------------------------------------------
    static styles = css`.ui-btn {
        --btn-default-bg: rgb(41, 41, 41);
        --btn-padding: 12px 16px;
        --btn-hover-bg: rgb(51, 51, 51);
        --btn-transition: .3s;
        --btn-letter-spacing: .1rem;
        --btn-animation-duration: 1s;
        --btn-shadow-color: rgba(0, 0, 0, 0.137);
        --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
        --hover-btn-color: #FAC921;
        --default-btn-color: #fff;
        --font-size: 8.5px;
        --font-weight: 600;
        --font-family: Menlo,Roboto Mono,monospace;
      }
      
      .ui-btn {
        box-sizing: border-box;
        padding: var(--btn-padding);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--default-btn-color);
        font: var(--font-weight) var(--font-size) var(--font-family);
        background: var(--btn-default-bg);
        border: none;
        cursor: pointer;
        transition: var(--btn-transition);
        overflow: hidden;
        box-shadow: var(--btn-shadow);
        transition: transform 0.2s ease;
      }
      
      .ui-btn span {
        letter-spacing: var(--btn-letter-spacing);
        transition: var(--btn-transition);
        box-sizing: border-box;
        position: relative;
        background: inherit;
      }
      
      .ui-btn span::before {
        box-sizing: border-box;
        position: absolute;
        content: "";
        background: inherit;
      }
      
      .ui-btn:hover {
        background: var(--btn-hover-bg);
        transform: translate3d(0.5px, -0.5px, 0);
      }
      
      .ui-btn:hover span {
        color: var(--hover-btn-color);
      }
      
      .ui-btn:hover span::before{
        animation: chitchat linear both var(--btn-animation-duration);
      }
      
      @keyframes chitchat {
        0% {
          content: "#";
        }
      
        5% {
          content: "k";
        }
      
        10% {
          content: "ks";
        }
      
        15% {
          content: "Ka";
        }
      
        20% {
          content: "a$k";
        }
      
        25% {
          content: "№sk";
        }
      
        30% {
          content: "#ask";
        }
      
        35% {
          content: "Task";
        }
      
        40% {
          content: "Add@%";
        }
      
        45% {
          content: "task.,^!";
        }
      
        50% {
          content: "Add";
        }
      
        55% {
          content: "error";
        }
      
        60% {
          content: "new";
          right: 0;
        }
      
        65% {
          content: "task";
          right: 0;
        }
      
        70% {
          content: "{4%0%";
          right: 0;
        }
      
        75% {
          content: "89**4";
          right: 0;
        }
      
        80% {
          content: "Add Task";
          right: 0;
        }
      
        85% {
          content: "##*&)(";
          right: 0;
        }
      
        90% {
          content: "err";
          right: 0;
        }
      
        95% {
          content: "gitTask";
          right: 0;
        }
      
        100% {
          content: "";
          right: 0;
          translate: y;
        }
    }`
    
    //End of CSS---------------------------------------------------------------------------------------------
    /**
     * 
     * @returns {any}
     */
    render(){
        return html`
        <button class="ui-btn">
          <span> Add Task </span>
        </button>`
    }
}

customElements.define('add-button', CreateButton)