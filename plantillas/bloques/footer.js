export function cargarFooter() {
    let footerElement = document.createElement('footer');
    let footer = `
            <div class="container">
                <p>&copy; Junta de vecinos 2023</p>
            </div>
    `;
    footerElement.innerHTML = footer
    document.body.appendChild(footerElement);
}