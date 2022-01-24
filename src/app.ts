import { css, html, Nexwidget, WidgetTemplate } from 'nexwidget/nexwidget.js';

declare global {
  interface HTMLElementTagNameMap {
    'app-widget': AppWidget;
  }
}

export class AppWidget extends Nexwidget {
  static {
    this.registerAs('app-widget');
  }

  static override get styles(): CSSStyleSheet[] {
    return [
      ...super.styles,
      css`
        h1 {
          color: red;
        }
      `,
    ];
  }

  override get template(): WidgetTemplate {
    return html`<h1>Hello World!</h1>`;
  }
}
