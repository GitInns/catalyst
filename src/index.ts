import {bind, register, targets} from './helper'

@register
@bind
class HelloController extends HTMLElement {
  @target outputTarget!: HTMLElement;
  @target nameTarget!: HTMLInputElement;

  greet() {
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }
}