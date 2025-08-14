// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('quickContactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                whatsapp: document.getElementById('contactWhatsapp').value,
                subject: document.getElementById('contactSubject').value,
                message: document.getElementById('contactMessage').value
            };
            
            // Validate required fields
            if (!formData.name || !formData.email || !formData.whatsapp || !formData.subject || !formData.message) {
                alert('Mohon lengkapi semua field yang wajib diisi');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Format email tidak valid');
                return;
            }
            
            // Validate WhatsApp format
            const whatsappRegex = /^(\+?62|0)8[1-9][0-9]{6,}$/;
            if (!whatsappRegex.test(formData.whatsapp.replace(/\s/g, ''))) {
                alert('Format nomor WhatsApp tidak valid. Gunakan format: 08xxxxxxxxx atau 62xxxxxxxxx');
                return;
            }
            
            // Clean WhatsApp number
            let cleanWhatsapp = formData.whatsapp.replace(/\D/g, '');
            if (cleanWhatsapp.startsWith('0')) {
                cleanWhatsapp = '62' + cleanWhatsapp.substring(1);
            }
            if (!cleanWhatsapp.startsWith('62')) {
                cleanWhatsapp = '62' + cleanWhatsapp;
            }
            
            // Get subject label
            const subjectSelect = document.getElementById('contactSubject');
            const subjectLabel = subjectSelect.options[subjectSelect.selectedIndex].text;
            
            // Create WhatsApp message
            const message = createContactMessage(formData, subjectLabel);
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/62895354511777?text=${encodeURIComponent(message)}`;
            
            // Show confirmation and redirect
            if (confirm('Pesan akan dikirim ke WhatsApp kami. Lanjutkan?')) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Mengirim...';
                submitBtn.disabled = true;
                
                // Simulate sending delay
                setTimeout(() => {
                    window.open(whatsappUrl, '_blank');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Show success message
                    showSuccessMessage();
                }, 1000);
            }
        });
    }
    
    // Setup scroll animations for contact page
    setupContactAnimations();
});

// Create WhatsApp contact message
function createContactMessage(data, subjectLabel) {
    let message = `*PESAN KONTAK - VIN NESIA WEB MARKET*\n\n`;
    message += `👤 *Informasi Pengirim:*\n`;
    message += `• Nama: ${data.name}\n`;
    message += `• Email: ${data.email}\n`;
    message += `• WhatsApp: ${data.whatsapp}\n\n`;
    message += `📋 *Detail Pesan:*\n`;
    message += `• Subjek: ${subjectLabel}\n`;
    message += `• Pesan:\n${data.message}\n\n`;
    message += `---\n`;
    message += `Mohon respon untuk pesan ini. Terima kasih! 🙏`;
    
    return message;
}

// Show success message
function showSuccessMessage() {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">✅</span>
            <span class="notification-text">Pesan berhasil dikirim ke WhatsApp!</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Setup contact page animations
function setupContactAnimations() {
    // Animate contact cards on scroll
    const contactCards = document.querySelectorAll('.contact-card, .info-card, .testimonial-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);
    
    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add hover effects to contact cards
    const primaryCard = document.querySelector('.contact-card.primary');
    if (primaryCard) {
        primaryCard.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
        });
        
        primaryCard.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    }
    
    // Animate FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500);
    });
}

// Real-time form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quickContactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Remove error styling when user starts typing
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorMsg = this.parentNode.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        });
    });
});

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Check if required field is empty
    if (field.required && !value) {
        isValid = false;
        errorMessage = 'Field ini wajib diisi';
    }
    
    // Specific validations
    if (value) {
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Format email tidak valid';
                }
                break;
            case 'tel':
                const phoneRegex = /^(\+?62|0)8[1-9][0-9]{6,}$/;
                if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                    isValid = false;
                    errorMessage = 'Format WhatsApp tidak valid';
                }
                break;
        }
    }
    
    // Show error if not valid
    if (!isValid) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;
        field.parentNode.appendChild(errorDiv);
    }
    
    return isValid;
}

// Add CSS for error styling
const errorStyles = document.createElement('style');
errorStyles.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
`;
document.head.appendChild(errorStyles);
