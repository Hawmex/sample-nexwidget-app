import { WithDependencyProvider } from 'nexwidget/mixins/dependency-injection.js';
import { html, Nexwidget, WidgetTemplate } from 'nexwidget/nexwidget.js';
import './app.js';

declare global {
  interface HTMLElementTagNameMap {
    'app-provider': AppProvider;
  }
}

export class AppProvider extends WithDependencyProvider(Nexwidget) {
  static {
    this.registerAs('app-provider');
  }

  override get template(): WidgetTemplate {
    return html`<app-widget></app-widget>`;
  }
}
