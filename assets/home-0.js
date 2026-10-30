
        // Set dynamic year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Custom copy to clipboard implementation (using safe custom UI toast notifications instead of alert)
        function copyToClipboard(text) {
            // Create a temporary input to select text from
            const tempInput = document.createElement("input");
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);

            // Create a custom floating toast notification instead of alert()
            const toast = document.createElement('div');
            toast.textContent = "Phone number copied!";
            toast.className = "fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded shadow-lg transition-opacity duration-300 z-50 font-medium";
            document.body.appendChild(toast);

            // Fade out and remove
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => {
                    if (toast.parentNode) {
                        document.body.removeChild(toast);
                    }
                }, 300);
            }, 3000);
        }

document.querySelectorAll('[data-copy-phone]').forEach(button => {
  button.addEventListener('click', () => copyToClipboard(button.dataset.copyPhone));
});
document.querySelectorAll('img[data-fallback-src]').forEach(image => {
  image.addEventListener('error', () => { image.src = image.dataset.fallbackSrc; }, { once: true });
});
