document.addEventListener('DOMContentLoaded', (event) => {
    const codeBlock = document.querySelector('.code-block');
    const previewArea = document.querySelector('.preview-area');

    codeBlock.addEventListener('input', updatePreview);

    function updatePreview() {
        const code = codeBlock.textContent;
        try {
            ReactDOM.render(eval(code), previewArea);
        } catch (error) {
            previewArea.innerHTML = `<span class="error">${error}</span>`;
        }
    }
});