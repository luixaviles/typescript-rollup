import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('comp-main')
export class CompMain extends LitElement {

    static styles = css`
    :host {
        display: flex;
    }
    `;

    @property({ type: String }) message: string = 'Welcome to LitElement';

    render() {
        return html`
        <div>
            <h1>${this.message}</h1>
            <span>This App uses:</span>
            <ul>
                <li>TypeScript</li>
                <li>Rollup.js</li>
                <li>es-dev-server</li>
            </ul>
        </div>
        `;
    }
}