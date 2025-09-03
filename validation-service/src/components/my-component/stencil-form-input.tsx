import { Component, Prop, h, Event, EventEmitter, Element } from '@stencil/core';
import '@material/web/textfield/filled-text-field.js'; 

@Component({
  tag: 'stencil-form-input',
  styleUrl: 'stencil-form-input.css',
  shadow: true,
})
export class StencilFormInput {
  @Element() host: HTMLElement;

  @Prop() type: string = 'text';

  @Prop({ mutable: true, reflect: true }) value: string = '';

  @Prop() validationRegex?: string | RegExp;

  @Prop() label: string = '';

  @Event({ bubbles: true, composed: true }) valueChange!: EventEmitter<string>;

  @Event({ bubbles: true, composed: true }) validityChange!: EventEmitter<boolean>;

  private textfield!: HTMLElement;

  componentDidLoad() {
    this.textfield = this.host.shadowRoot.querySelector('md-filled-text-field');
    if (this.textfield) {
      this.textfield.addEventListener('input', this.handleInput);
    }
  }

  disconnectedCallback() {
    if (this.textfield) {
      this.textfield.removeEventListener('input', this.handleInput);
    }
  }

  private handleInput = (ev: any) => {
    this.value = ev.target.value || '';

    this.valueChange.emit(this.value);

    let isValid = true;

    if (this.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(this.value);
    }

    if (this.validationRegex) {
      const regex =
        typeof this.validationRegex === 'string'
          ? new RegExp(this.validationRegex)
          : this.validationRegex;
      isValid = regex.test(this.value);
    }

    this.validityChange.emit(isValid);
  };

  render() {
    return (
      <div>
        <label class="visually-hidden">
          <slot name="label">{this.label}</slot>
        </label>

        <md-filled-text-field
          part="input"
          label={this.label}
          type={this.type}
          value={this.value}
          aria-label={this.label}
        ></md-filled-text-field>
      </div>
    );
  }
}
