import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "link" ]

  // connect() {
  //   console.log("Hello from our first Stimulus controller")
  // }

  disable() {
    this.buttonTarget.setAttribute("disabled", "")
    this.buttonTarget.innerText = "Bingo!"
    this.linkTarget.classList.remove("d-none")
  }

  reset() {
    // When we first load the page, the reset link should be hidden
    // When we disable the button, the reset link should appear
    this.buttonTarget.removeAttribute("disabled")
    // When we click on it, it should reset the button and disappear
    this.linkTarget.classList.add("d-none")
    this.buttonTarget.innerText = "Click me!"
  }
}
