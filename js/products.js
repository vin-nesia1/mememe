// Data produk - bisa dipindah ke file JSON terpisah
const productsData = [
    {
        id: 1,
        name: "Website Bisnis Modern",
        description: "Website profesional untuk bisnis dengan desain clean dan modern",
        category: "business",
        price: "Mulai dari Rp 100.000",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        demoUrl: "https://demo1.example.com",
        features: [
            "Responsive design untuk semua device",
            "SEO optimized",
            "Loading speed yang cepat",
            "Contact form terintegrasi",
            "Google Maps integration",
            "Social media links"
        ],
        fullDescription: "Website bisnis modern dengan desain profesional yang cocok untuk berbagai jenis usaha. Dilengkapi dengan fitur-fitur lengkap yang siap untuk mendukung bisnis online Anda.",
        packages: {
            A: { name: "File Saja", price: 100000, description: "File HTML, CSS, JS lengkap" },
            B: { name: "File + Hosting", price: 150000, description: "File + Hosting GitHub Pages 1 tahun" },
            C: { name: "File + Hosting + Domain", price: 250000, description: "File + Hosting + Domain .com 1 tahun" },
            D: { name: "Urus Semua", price: 350000, description: "File + Hosting + Domain + Setup lengkap" }
        }
    },
    {
        id: 2,
        name: "Portfolio Creative",
        description: "Portfolio website untuk freelancer dan creative professional",
        category: "portfolio",
        price: "Mulai dari Rp 100.000",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
        demoUrl: "https://demo2.example.com",
        features: [
            "Gallery showcase yang menarik",
            "Smooth animations",
            "Contact form",
            "Blog section",
            "Skills showcase",
            "Testimonial section"
        ],
        fullDescription: "Website portfolio yang dirancang khusus untuk menampilkan karya-karya terbaik Anda. Dengan desain yang eye-catching dan user-friendly.",
        packages: {
            A: { name: "File Saja", price: 100000, description: "File HTML, CSS, JS lengkap" },
            B: { name: "File + Hosting", price: 150000, description: "File + Hosting GitHub Pages 1 tahun" },
            C: { name: "File + Hosting + Domain", price: 250000, description: "File + Hosting + Domain .com 1 tahun" },
            D: { name: "Urus Semua", price: 350000, description: "File + Hosting + Domain + Setup lengkap" }
        }
    },
    {
        id: 3,
        name: "Landing Page Startup",
        description: "Landing page high-converting untuk startup dan produk digital",
        category: "landing",
        price: "Mulai dari Rp 100.000",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        demoUrl: "https://demo3.example.com",
        features: [
            "High conversion design",
            "Call-to-action yang efektif",
            "Testimonial section",
            "Pricing table",
            "FAQ section",
            "Newsletter signup"
        ],
        fullDescription: "Landing page yang dirancang untuk konversi maksimal. Cocok untuk startup, produk digital, atau campaign marketing dengan focus pada hasil yang terukur.",
        packages: {
            A: { name: "File Saja", price: 100000, description: "File HTML, CSS, JS lengkap" },
            B: { name: "File + Hosting", price: 150000, description: "File + Hosting GitHub Pages 1 tahun" },
            C: { name: "File + Hosting + Domain", price: 250000, description: "File + Hosting + Domain .com 1 tahun" },
            D: { name: "Urus Semua", price: 350000, description: "File + Hosting + Domain + Setup lengkap" }
        }
    },
    {
        id: 4,
        name: "E-Commerce Catalog",
        description: "Website katalog produk dengan shopping cart sederhana",
        category: "ecommerce",
        price: "Mulai dari Rp 100.000",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        demoUrl: "https://demo4.example.com",
        features: [
            "Product catalog dengan filter",
            "Shopping cart functionality",
            "Product detail pages",
            "Search functionality",
            "Category navigation",
            "WhatsApp integration untuk order"
        ],
        fullDescription: "Website e-commerce catalog yang sempurna untuk toko online kecil hingga menengah. Dilengkapi dengan fitur shopping cart dan integrasi WhatsApp untuk kemudahan transaksi.",
        packages: {
            A: { name: "File Saja", price: 100000, description: "File HTML, CSS, JS lengkap" },
            B: { name: "File + Hosting", price: 150000, description: "File + Hosting GitHub Pages 1 tahun" },
            C: { name: "File + Hosting + Domain", price: 250000, description: "File + Hosting + Domain .com 1 tahun" },
            D: { name: "Urus Semua", price: 350000, description: "File + Hosting + Domain + Setup lengkap" }
        }
    },
    {
        id: 5,
        name: "Restaurant Website",
        description: "Website restoran dengan menu digital dan reservasi",
        category: "business",
        price: "Mulai dari Rp 100.000",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
        demoUrl: "https://demo5.example.com",
        features: [
            "Menu digital interaktif",
            "Reservasi online",
            "Gallery makanan",
            "Location & contact info",
            "Review section",
            "Social media integration"
        ],
        fullDescription: "Website khusus untuk restoran dan cafe dengan fitur menu digital yang menarik dan sistem reservasi online yang mudah digunakan.",
        packages: {
            A: { name: "File Saja", price: 100000, description: "File HTML, CSS, JS lengkap" },
            B: { name: "File + Hosting", price: 150000, description: "File + Hosting GitHub Pages 1 tahun" },
            C: { name: "File + Hosting + Domain", price: 250000, description: "File + Hosting + Domain .com 1 tahun" },
            D: { name: "Urus Semua", price: 350000, description: "File + Hosting + Domain + Setup lengkap" }
        }
    },
    {
        id: 6,
        name: "Agency Website",
        description: "Website agency digital dengan portfolio dan team showcase",
        category: "business",
        price: "Mulai dari Rp 100.000",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
        demoUrl: "https://demo6.example.com",
        features: [
            "Service showcase",
            "Team member profiles",
            "Portfolio projects",
            "Client testimonials",
            "Contact & quote form",
            "Blog section"
        ],
        fullDescription: "Website profesional untuk digital agency dengan showcase lengkap services, team, dan portfolio. Dirancang untuk membangun trust dan kredibilitas.",
        packages: {
            A: { name: "File Saja", price: 100000, description: "File HTML, CSS, JS lengkap" },
            B: { name: "File + Hosting", price: 150000, description: "File + Hosting GitHub Pages 1 tahun" },
            C: { name: "File + Hosting + Domain", price: 250000, description: "File + Hosting + Domain .com 1 tahun" },
            D: { name: "Urus Semua", price: 350000, description: "File + Hosting + Domain + Setup lengkap" }
        }
    }
];

// Function untuk format harga
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

// Function untuk render produk
function renderProducts(products = productsData) {
    const productsGrid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!productsGrid) return;
    
    if (products.length === 0) {
        productsGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image" style="background-image: url('${product.image}')">
                <span class="product-badge">${product.category}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <div class="product-actions">
                    <a href="detail.html?id=${product.id}" class="btn btn-primary btn-small">Detail</a>
                    <button onclick="openOrderModal('${product.name}')" class="btn btn-secondary btn-small">Pesan</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Function untuk search dan filter
function setupSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (!searchInput || !categoryFilter) return;
    
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        
        const filteredProducts = productsData.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !selectedCategory || product.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
        
        renderProducts(filteredProducts);
    }
    
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
}

// Function untuk mendapatkan produk berdasarkan ID
function getProductById(id) {
    return productsData.find(product => product.id === parseInt(id));
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupSearchAndFilter();
});
