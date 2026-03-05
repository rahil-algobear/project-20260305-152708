document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.piece-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const palette = card.dataset.palette;
            if (palette) {
                const colors = palette.split(',');
                card.style.setProperty('--hover-color', colors[0]);
            }
        });
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `translateY(-8px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
    
    const paletteDots = document.querySelectorAll('.palette-display .palette-dot');
    paletteDots.forEach(dot => {
        dot.addEventListener('mouseenter', () => {
            const color = dot.style.background;
            dot.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}`;
        });
        
        dot.addEventListener('mouseleave', () => {
            dot.style.boxShadow = '';
        });
    });
});