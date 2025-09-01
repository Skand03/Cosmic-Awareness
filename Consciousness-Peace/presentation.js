// Presentation-specific JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Add presentation-specific animations
    const slides = document.querySelectorAll('.slide');

    // Animate slides on scroll
    const slideObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Animate timeline items if present
                const timelineItems = entry.target.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 200);
                });

                // Animate relevance cards if present
                const relevanceCards = entry.target.querySelectorAll('.relevance-card');
                relevanceCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, index * 150);
                });
            }
        });
    }, { threshold: 0.3 });

    slides.forEach(slide => {
        slideObserver.observe(slide);
    });

    // Add hover effects to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(10px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });

    // Consciousness model animation
    const consciousnessModel = document.querySelector('.consciousness-model');
    if (consciousnessModel) {
        consciousnessModel.addEventListener('mouseenter', function () {
            const core = this.querySelector('.consciousness-core');
            const inner = this.querySelector('.inner-experience');
            const outer = this.querySelector('.outer-experience');

            core.style.transform = 'scale(1.1)';
            inner.style.transform = 'translateX(-10px) scale(1.05)';
            outer.style.transform = 'translateX(10px) scale(1.05)';
        });

        consciousnessModel.addEventListener('mouseleave', function () {
            const core = this.querySelector('.consciousness-core');
            const inner = this.querySelector('.inner-experience');
            const outer = this.querySelector('.outer-experience');

            core.style.transform = 'scale(1)';
            inner.style.transform = 'translateX(0) scale(1)';
            outer.style.transform = 'translateX(0) scale(1)';
        });
    }
});

// Add CSS for presentation-specific styles
const presentationStyle = document.createElement('style');
presentationStyle.textContent = `
    /* Presentation Layout */
    .main-content {
        padding-top: 80px;
        background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%);
        min-height: 100vh;
    }

    .presentation-header {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 3rem 0 2rem;
        margin-bottom: 2rem;
    }

    .presentation-header h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .presentation-header p {
        font-size: 1.2rem;
        opacity: 0.9;
        margin-bottom: 1rem;
    }

    .slide-counter {
        background: rgba(255, 255, 255, 0.2);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        display: inline-block;
    }

    /* Slide Styles */
    .slide {
        background: white;
        margin: 2rem 0;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }

    .slide.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .slide-header {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 1.5rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .slide-number {
        background: rgba(255, 255, 255, 0.2);
        padding: 0.3rem 1rem;
        border-radius: 15px;
        font-size: 0.9rem;
    }

    .slide-header h2 {
        font-size: 1.8rem;
        margin: 0;
    }

    .slide-content {
        padding: 2.5rem;
    }

    /* Content Grid */
    .content-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: start;
    }

    /* Definition Box */
    .definition-box {
        background: linear-gradient(135deg, #f8f9ff, #e8f0ff);
        padding: 2rem;
        border-radius: 15px;
        margin-bottom: 2rem;
        border-left: 5px solid #667eea;
    }

    .definition-box h3 {
        color: #667eea;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .definition {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #333;
        font-style: italic;
    }

    /* Key Points */
    .key-points {
        margin-bottom: 2rem;
    }

    .key-points h3 {
        color: #333;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .key-points ul {
        list-style: none;
        padding: 0;
    }

    .key-points li {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
    }

    .key-points li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #667eea;
        font-weight: bold;
    }

    /* Research Note */
    .research-note {
        background: linear-gradient(135deg, #fff3cd, #ffeaa7);
        padding: 1.5rem;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 1rem;
        border-left: 4px solid #fdcb6e;
    }

    .research-note i {
        font-size: 2rem;
        color: #e67e22;
    }

    /* Consciousness Model */
    .consciousness-model {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
    }

    .awareness-circle {
        position: relative;
        width: 300px;
        height: 300px;
        border: 3px solid #667eea;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .consciousness-core {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        z-index: 10;
        transition: all 0.3s ease;
    }

    .inner-experience, .outer-experience {
        position: absolute;
        background: rgba(102, 126, 234, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        color: #667eea;
        transition: all 0.3s ease;
    }

    .inner-experience {
        top: 20%;
        left: -10px;
    }

    .outer-experience {
        bottom: 20%;
        right: -10px;
    }

    /* Timeline */
    .timeline {
        position: relative;
        padding-left: 2rem;
    }

    .timeline::before {
        content: '';
        position: absolute;
        left: 1rem;
        top: 0;
        bottom: 0;
        width: 3px;
        background: linear-gradient(to bottom, #667eea, #764ba2);
        border-radius: 2px;
    }

    .timeline-item {
        position: relative;
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        margin-left: 2rem;
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.5s ease;
    }

    .timeline-item::before {
        content: '';
        position: absolute;
        left: -3rem;
        top: 50%;
        transform: translateY(-50%);
        width: 15px;
        height: 15px;
        background: #667eea;
        border-radius: 50%;
        border: 3px solid white;
    }

    .timeline-item.highlight {
        background: linear-gradient(135deg, #fff3cd, #ffeaa7);
        border-left: 4px solid #fdcb6e;
    }

    .timeline-item.highlight::before {
        background: #fdcb6e;
    }

    .timeline-date {
        font-size: 0.9rem;
        color: #667eea;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .timeline-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .timeline-content h4 {
        color: #333;
        margin-bottom: 0.5rem;
        flex-grow: 1;
    }

    .timeline-content p {
        color: #666;
        margin: 0;
        flex-grow: 1;
    }

    .timeline-icon {
        font-size: 1.5rem;
        color: #667eea;
        min-width: 30px;
    }

    /* Relevance Grid */
    .relevance-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .relevance-card {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        text-align: center;
        opacity: 0;
        transform: translateY(30px) scale(0.9);
        transition: all 0.6s ease;
    }

    .relevance-card i {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .relevance-card.medical i { color: #e74c3c; }
    .relevance-card.technology i { color: #3498db; }
    .relevance-card.psychology i { color: #2ecc71; }
    .relevance-card.research i { color: #f39c12; }

    .relevance-card h3 {
        color: #333;
        margin-bottom: 1rem;
    }

    .relevance-card ul {
        list-style: none;
        padding: 0;
        text-align: left;
    }

    .relevance-card li {
        padding: 0.3rem 0;
        color: #666;
    }

    /* Breakthrough Highlight */
    .breakthrough-highlight {
        background: linear-gradient(135deg, #ff9a56, #ff6b6b);
        padding: 2rem;
        border-radius: 20px;
        color: white;
        margin-top: 2rem;
    }

    .breakthrough-content {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .breakthrough-content i {
        font-size: 3rem;
        opacity: 0.8;
    }

    .breakthrough-text h4 {
        margin-bottom: 0.5rem;
    }

    /* Slide Navigation */
    .slide-navigation {
        background: white;
        padding: 2rem 0;
        margin-top: 3rem;
        box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
    }

    .nav-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-btn {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        text-decoration: none;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-weight: 600;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .nav-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }

    .slide-indicator {
        text-align: center;
    }

    .slide-indicator .current {
        font-size: 1.5rem;
        font-weight: bold;
        color: #667eea;
    }

    .slide-indicator .total {
        color: #666;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .timeline {
            padding-left: 1rem;
        }

        .timeline-item {
            margin-left: 1rem;
        }

        .timeline-item::before {
            left: -2rem;
        }

        .relevance-grid {
            grid-template-columns: 1fr;
        }

        .nav-buttons {
            flex-direction: column;
            gap: 1rem;
        }
        
        .breakthrough-content {
            flex-direction: column;
            text-align: center;
        }
    }
`;
document.head.appendChild(presentationStyle);