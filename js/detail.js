// Get product ID from URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Render product detail
function renderProductDetail(product) {
    if (!product) {
        document.getElementById('productDetailContent').innerHTML = `
            <div class="text-center">
                <h2>Produk tidak ditemukan</h2>
                <p>Produk yang Anda cari tidak tersedia.</p>
                <a href="index.html" class="btn btn-primary">Kembali ke Beranda</a>
            </div>
        `;
        return;
    }

    const detailHTML = `
        <div class="product-detail-grid">
            <div class="product-gallery">
                <div class="main-image" style="background-image: url('${product.image}')"></div>
                <a href="${product.demoUrl}" target="_blank" class="demo-link">🔗 Lihat Live Demo</a>
            </div>
            <div class="product-info-detail">
                <h1>${product.name}</h1>
                <p class="product-description-full">${product.fullDescription}</p>
                
                <div class="features-list">
                    <h3>✨ Fitur Unggulan</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <!-- License Section -->
        <div class="license-section">
            <h3>📜 Lisensi & Hak Cipta</h3>
            <div class="license-types">
                <div class="license-type">
                    <h4>Lisensi Standar (Default)</h4>
                    <ul>
                        <li class="allowed">Digunakan untuk 1 proyek pribadi atau komersial</li>
                        <li class="forbidden">Tidak boleh dijual ulang atau dibagikan gratis</li>
                        <li class="forbidden">Tidak boleh menghapus kredit pembuat tanpa izin</li>
                    </ul>
                    <p><strong>Sudah termasuk dalam semua paket</strong></p>
                </div>
                <div class="license-type">
                    <h4>Lisensi Extended (Opsional)</h4>
                    <ul>
                        <li class="allowed">Digunakan untuk proyek tanpa batas</li>
                        <li class="allowed">Bisa untuk proyek klien</li>
                        <li class="forbidden">Tidak boleh dijual ulang sebagai template</li>
                    </ul>
                    <p><strong>+Rp 50.000 untuk semua paket</strong></p>
                </div>
            </div>
            <div class="copyright-notice">
                <strong>Hak Cipta © 2025 Vin Nesia Web Market</strong><br>
                Website dan desain dilindungi Undang-Undang Hak Cipta
            </div>
        </div>

        <!-- Packages Section -->
        <div class="packages-section">
            <h2 class="section-title">Pilihan Paket</h2>
            <div class="packages-grid">
                <div class="package-card">
                    <div class="package-name">Paket A</div>
                    <div class="package-price">${formatPrice(product.packages.A.price)}</div>
                    <ul class="package-features">
                        <li>File HTML, CSS, JS lengkap</li>
                        <li>Source code bersih & rapi</li>
                        <li>Dokumentasi penggunaan</li>
                        <li>Support via WhatsApp 7 hari</li>
                    </ul>
                    <button onclick="orderPackage('${product.name}', 'A')" class="btn btn-primary">Pesan Paket A</button>
                </div>
                
                <div class="package-card">
                    <div class="package-name">Paket B</div>
                    <div class="package-price">${formatPrice(product.packages.B.price)}</div>
                    <ul class="package-features">
                        <li>Semua fitur Paket A</li>
                        <li>Hosting GitHub Pages 1 tahun</li>
                        <li>Setup hosting lengkap</li>
                        <li>SSL certificate gratis</li>
                        <li>Support 14 hari</li>
                    </ul>
                    <button onclick="orderPackage('${product.name}', 'B')" class="btn btn-primary">Pesan Paket B</button>
                </div>
                
                <div class="package-card popular">
                    <div class="package-name">Paket C</div>
                    <div class="package-price">${formatPrice(product.packages.C.price)}</div>
                    <ul class="package-features">
                        <li>Semua fitur Paket B</li>
                        <li>Domain .com 1 tahun</li>
                        <li>Setup domain & DNS</li>
                        <li>Email forwarding</li>
                        <li>Support 30 hari</li>
                    </ul>
                    <button onclick="orderPackage('${product.name}', 'C')" class="btn btn-primary">Pesan Paket C</button>
                </div>
                
                <div class="package-card">
                    <div class="package-name">Paket D</div>
                    <div class="package-price">${formatPrice(product.packages.D.price)}</div>
                    <ul class="package-features">
                        <li>Semua fitur Paket C</li>
                        <li>Setup lengkap tanpa repot</li>
                        <li>Customization minor gratis</li>
                        <li>Training penggunaan</li>
                        <li>Support 60 hari</li>
                        <li>Maintenance 3 bulan</li>
                    </ul>
                    <button onclick="orderPackage('${product.name}', 'D')" class="btn btn-primary">Pesan Paket D</button>
                </div>
            </div>
        </div>

        <!-- FAQ Section -->
        <div class="faq-section">
            <h2 class="section-title">Pertanyaan Umum</h2>
            <div class="faq-grid">
                <div class="faq-item">
                    <h4>🕒 Berapa lama proses pengerjaan?</h4>
                    <p>Paket A: Instant download. Paket B-D: 1-3 hari kerja setelah pembayaran konfirmasi.</p>
                </div>
                <div class="faq-item">
                    <h4>💳 Metode pembayaran apa saja?</h4>
                    <p>Transfer bank, e-wallet (OVO, DANA, GoPay), dan QRIS.</p>
                </div>
                <div class="faq-item">
                    <h4>🔧 Apakah bisa request customization?</h4>
                    <p>Minor customization gratis di Paket D. Untuk major changes ada biaya tambahan.</p>
                </div>
                <div class="faq-item">
                    <h4>📞 Bagaimana dengan support?</h4>
                    <p>Support via WhatsApp sesuai durasi paket yang dipilih.</p>
                </div>
            </div>
        </div>

        <!-- Related Products -->
        <div class="related-products">
            <h2 class="section-title">Produk Serupa</h2>
            <div id="relatedProductsGrid" class="products-grid">
                <!-- Related products will be loaded here -->
            </div>
        </div>
    `;

    document.getElementById('productDetailContent').innerHTML = detailHTML;
    
    // Load related products
    loadRelatedProducts(product.category, product.id);
}

// Order package function
function orderPackage(productName, packageType) {
    openOrderModal(productName);
    // Pre-select the package
    setTimeout(() => {
        const packageSelect = document.getElementById('packageType');
        if (packageSelect) {
            packageSelect.value = packageType;
        }
    }, 100);
}

// Load related products
function loadRelatedProducts(category, currentId) {
    const relatedProducts = productsData
        .filter(product => product.category === category && product.id !== currentId)
        .slice(0, 3);
    
    const relatedGrid = document.getElementById('relatedProductsGrid');
    if (relatedGrid && relatedProducts.length > 0) {
        relatedGrid.innerHTML = relatedProducts.map(product => `
            <div class="product-card">
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
    } else if (relatedGrid) {
        relatedGrid.parentElement.style.display = 'none';
    }
}

// Initialize detail page
document.addEventListener('DOMContentLoaded', function() {
    const productId = getProductIdFromUrl();
    const product = getProductById(productId);
    
    if (product) {
        // Update page title and meta
        document.title = `${product.name} - Vin Nesia Web Market`;
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = `${product.name} - ${product.description}. Mulai dari ${product.price}.`;
        }
    }
    
    renderProductDetail(product);
});
