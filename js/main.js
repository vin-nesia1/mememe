// Global variables
let currentProduct = '';

// DOM Elements
const modal = document.getElementById('orderModal');
const closeBtn = document.querySelector('.close');
const orderForm = document.getElementById('orderForm');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

// Mobile menu toggle
if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal functions
function openOrderModal(productName) {
    currentProduct = productName;
    document.getElementById('productName').value = productName;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    orderForm.reset();
}

// Modal event listeners
if (closeBtn) {
    closeBtn.addEventListener('click', closeOrderModal);
}

if (modal) {
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeOrderModal();
        }
    });
}

// Escape key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeOrderModal();
    }
});

// Order form submission
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(orderForm);
        const data = {
            name: document.getElementById('customerName').value,
            email: document.getElementById('customerEmail').value,
            whatsapp: document.getElementById('customerWhatsapp').value,
            product: document.getElementById('productName').value,
            package: document.getElementById('packageType').value,
            notes: document.getElementById('notes').value
        };
        
        // Validate required fields
        if (!data.name || !data.email || !data.whatsapp || !data.package) {
            alert('Mohon lengkapi semua field yang wajib diisi');
            return;
        }
        
        // Validate WhatsApp format
        const whatsappRegex = /^(\+?62|0)8[1-9][0-9]{6,}$/;
        if (!whatsappRegex.test(data.whatsapp.replace(/\s/g, ''))) {
            alert('Format nomor WhatsApp tidak valid. Gunakan format: 08xxxxxxxxx atau 62xxxxxxxxx');
            return;
        }
        
        // Clean WhatsApp number
        let cleanWhatsapp = data.whatsapp.replace(/\D/g, '');
        if (cleanWhatsapp.startsWith('0')) {
            cleanWhatsapp = '62' + cleanWhatsapp.substring(1);
        }
        if (!cleanWhatsapp.startsWith('62')) {
            cleanWhatsapp = '62' + cleanWhatsapp;
        }
        
        // Create WhatsApp message
        const packageDetails = getPackageDetails(data.package);
        const message = createWhatsAppMessage(data, packageDetails);
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(message)}`;
        
        // Show confirmation
        if (confirm('Data akan dikirim ke WhatsApp. Lanjutkan?')) {
            window.open(whatsappUrl, '_blank');
            closeOrderModal();
        }
    });
}

// Get package details based on selection
function getPackageDetails(packageType) {
    const packages = {
        'A': { name: 'Paket A - File Saja', price: 'Rp 100.000' },
        'B': { name: 'Paket B - File + Hosting', price: 'Rp 150.000' },
        'C': { name: 'Paket C - File + Hosting + Domain', price: 'Rp 250.000' },
        'D': { name: 'Paket D - Urus Semua', price: 'Rp 350.000' }
    };
    
    return packages[packageType] || { name: 'Paket tidak dikenal', price: 'Hubungi admin' };
}

// Create WhatsApp message
function createWhatsAppMessage(data, packageDetails) {
    let message = `*PEMESANAN WEBSITE - VIN NESIA WEB MARKET*\n\n`;
    message += `📝 *Data Pelanggan:*\n`;
    message += `• Nama: ${data.name}\n`;
    message += `• Email: ${data.email}\n`;
    message += `• WhatsApp: ${data.whatsapp}\n\n`;
    message += `🌐 *Detail Pesanan:*\n`;
    message += `• Produk: ${data.product}\n`;
    message += `• Paket: ${packageDetails.name}\n`;
    message += `• Harga: ${packageDetails.price}\n\n`;
    
    if (data.notes) {
        message += `📋 *Catatan Tambahan:*\n${data.notes}\n\n`;
    }
    
    message += `---\n`;
    message += `Mohon konfirmasi pemesanan ini dan informasi detail pembayaran.\n\n`;
    message += `Terima kasih! 🙏`;
    
    return message;
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Smooth reveal animation on scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation styles and observe elements
    const animatedElements = document.querySelectorAll('.product-card, .package-card, .license-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup lazy loading
    lazyLoadImages();
    
    // Add loading states for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.type === 'submit') {
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 1000);
            }
        });
    });
    
    // Add smooth hover effects for product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Performance optimizations
// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Global error handler
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Service Worker registration for better performance (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
