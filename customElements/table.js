class MyTable extends HTMLElement {
    constructor() {
        super();
        this.rows = this.getAttribute('rows') || 1;
        this.cols = this.getAttribute('cols') || 1;
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['rows', 'cols'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.rows = this.getAttribute('rows') || 1;
            this.cols = this.getAttribute('cols') || 1;
            this.render();
        }
    }

    render() {
        this.innerHTML = '';

        this.innerHTML = '<link rel="stylesheet" href="table.css">';

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        for (let i = 0; i < Number(this.rows); i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < Number(this.cols); j++) {
                const col = document.createElement(i === 0 ? 'th' : 'td');
                col.textContent = `${j + 1}`;
                row.appendChild(col);
            }

            if (i === 0) {
                thead.appendChild(row);
            } else {
                tbody.appendChild(row);
            }
        }

        table.appendChild(thead);
        table.appendChild(tbody);
        this.appendChild(table);
    }
}

customElements.define('my-table', MyTable);
