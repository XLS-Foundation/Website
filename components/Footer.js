class XylumFooter extends HTMLElement {
  connectedCallback() {
    const lastMod = document.lastModified;
    const dateObj = new Date(lastMod);
    
    const dateStr = dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    this.innerHTML = `
      <footer>
        <p>Last modified: ${dateStr}</p>
      </footer>
    `;
  }
}
customElements.define('xylum-footer', XylumFooter);