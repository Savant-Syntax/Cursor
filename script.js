const colorImage = document.querySelector('.color-image');
        const container = document.querySelector('.image-container');

        container.addEventListener('mousemove', (e) => {
            // Get the container's bounding rectangle
            const rect = container.getBoundingClientRect();
            
            // Calculate cursor position relative to the container
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Update the mask's center to follow the cursor
            colorImage.style.setProperty('--x', x + 'px');
            colorImage.style.setProperty('--y', y + 'px');
        });

        // Reset the mask when the cursor leaves the container
        container.addEventListener('mouseleave', () => {
            colorImage.style.setProperty('--x', '-1000px'); // Move mask off-screen
            colorImage.style.setProperty('--y', '-1000px');
        });