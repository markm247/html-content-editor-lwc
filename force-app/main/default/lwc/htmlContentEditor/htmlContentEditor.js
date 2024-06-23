import { LightningElement, api } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import DOMPURIFY from '@salesforce/resourceUrl/DOMPurify';

export default class HtmlContentEditor extends LightningElement {
    @api htmlContent = '';
    @api cssContent = '';
    dompurifyLoaded = false;

    renderedCallback() {
        if (this.dompurifyLoaded) {
            this.updateHtmlDisplay();
        } else {
            loadScript(this, DOMPURIFY)
                .then(() => {
                    this.dompurifyLoaded = true;
                    this.updateHtmlDisplay();
                })
                .catch(error => {
                    console.error('Error loading DOMPurify', error);
                });
        }
    }

    updateHtmlDisplay() {
        const htmlContainer = this.template.querySelector('.html-container');
        if (htmlContainer && this.dompurifyLoaded) {
            // Clear any previous content
            while (htmlContainer.firstChild) {
                htmlContainer.removeChild(htmlContainer.firstChild);
            }

            // Create a shadow root
            const shadowRoot = htmlContainer.attachShadow({ mode: 'open' });

            // Create a style element
            const style = document.createElement('style');
            style.textContent = this.cssContent;

            // Create a div for the content
            const contentDiv = document.createElement('div');
            contentDiv.className = 'content-wrapper';

            // Sanitize the HTML content using DOMPurify
            contentDiv.innerHTML = DOMPurify.sanitize(this.htmlContent);

            // Append style and content to the shadow root
            shadowRoot.appendChild(style);
            shadowRoot.appendChild(contentDiv);
        }
    }
}