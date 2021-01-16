import { LitElement, html, customElement, css, property } from 'lit-element';
import { env } from './environment/environment';

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
            <span>Running environment: ${env.environment}</span>
            <ul>
                <li>Protocol: ${env.host.protocol}</li>
                <li>Hostname: ${env.host.hostname}</li>
                <li>Port: ${env.host.port}</li>
            </ul>
        </div>
        `;
    }
}