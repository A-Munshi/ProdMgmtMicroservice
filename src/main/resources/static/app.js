// Application State
const state = {
    credentials: null,
    isAdmin: false,
    products: [],
    editingProductId: null
};

// API Base URL
const API_BASE = '/api/v1/products';

// DOM Elements
const loginSection = document.getElementById('loginSection');
const appSection = document.getElementById('appSection');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const userDisplay = document.getElementById('userDisplay');
const logoutBtn = document.getElementById('logoutBtn');
const adminControls = document.getElementById('adminControls');
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const emptyState = document.getElementById('emptyState');
const searchBtn = document.getElementById('searchBtn');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');

// Utility Functions
function createAuthHeader(username, password) {
    return 'Basic ' + btoa(username + ':' + password);
}

function showError(element, message) {
    element.textContent = message;
    element.classList.add('show');
    setTimeout(() => {
        element.classList.remove('show');
    }, 5000);
}

function showLoading(show) {
    loadingSpinner.style.display = show ? 'block' : 'none';
}

// API Functions
async function apiRequest(url, options = {}) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': state.credentials,
        ...options.headers
    };

    try {
        const response = await fetch(url, {
            ...options,
            headers
        });

        if (response.status === 401) {
            throw new Error('Authentication failed. Please login again.');
        }

        if (response.status === 403) {
            throw new Error('You do not have permission to perform this action.');
        }

        if (!response.ok && response.status !== 204) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Request failed with status ${response.status}`);
        }

        if (response.status === 204) {
            return null;
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function login(username, password) {
    const authHeader = createAuthHeader(username, password);
    
    try {
        // Test authentication by fetching products
        const response = await fetch(API_BASE, {
            headers: {
                'Authorization': authHeader
            }
        });

        if (!response.ok) {
            throw new Error('Invalid username or password');
        }

        // Store credentials
        state.credentials = authHeader;
        state.isAdmin = username === 'admin';
        
        return true;
    } catch (error) {
        throw error;
    }
}

async function fetchProducts() {
    return await apiRequest(API_BASE);
}

async function fetchProductById(id) {
    return await apiRequest(`${API_BASE}/${id}`);
}

async function createProduct(productData) {
    return await apiRequest(API_BASE, {
        method: 'POST',
        body: JSON.stringify(productData)
    });
}

async function updateProduct(id, productData) {
    return await apiRequest(`${API_BASE}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(productData)
    });
}

async function deleteProduct(id) {
    return await apiRequest(`${API_BASE}/${id}`, {
        method: 'DELETE'
    });
}

// UI Functions
function showLoginSection() {
    loginSection.style.display = 'block';
    appSection.style.display = 'none';
}

function showAppSection() {
    loginSection.style.display = 'none';
    appSection.style.display = 'block';
    
    // Show admin controls if user is admin
    if (state.isAdmin) {
        adminControls.style.display = 'block';
        userDisplay.innerHTML = 'Admin <span class="badge badge-admin">ADMIN</span>';
    } else {
        adminControls.style.display = 'none';
        userDisplay.innerHTML = 'User <span class="badge badge-user">USER</span>';
    }
}

function resetProductForm() {
    productForm.reset();
    document.getElementById('productId').value = '';
    state.editingProductId = null;
    submitBtn.textContent = 'Add Product';
    cancelBtn.style.display = 'none';
}

function populateProductForm(product) {
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productSku').value = product.sku;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productQuantity').value = product.quantity;
    document.getElementById('productDescription').value = product.description || '';
    
    state.editingProductId = product.id;
    submitBtn.textContent = 'Update Product';
    cancelBtn.style.display = 'inline-block';
    
    // Scroll to form
    adminControls.scrollIntoView({ behavior: 'smooth' });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const actionsHtml = state.isAdmin ? `
        <div class="product-actions">
            <button class="btn btn-success" onclick="editProduct(${product.id})">Edit</button>
            <button class="btn btn-danger" onclick="confirmDeleteProduct(${product.id})">Delete</button>
        </div>
    ` : '';
    
    card.innerHTML = `
        <h3>${escapeHtml(product.name)}</h3>
        <div class="product-info">
            <p><strong>ID:</strong> ${product.id}</p>
            <p><strong>SKU:</strong> ${escapeHtml(product.sku)}</p>
            <p><strong>Quantity:</strong> ${product.quantity}</p>
        </div>
        <div class="product-price">$${parseFloat(product.price).toFixed(2)}</div>
        ${product.description ? `<p class="product-description">${escapeHtml(product.description)}</p>` : ''}
        ${actionsHtml}
    `;
    
    return card;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function renderProducts(products) {
    productList.innerHTML = '';
    
    if (products.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    products.forEach(product => {
        productList.appendChild(createProductCard(product));
    });
}

function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch(sortBy) {
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price':
            sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            break;
        case 'price-desc':
            sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            break;
        default:
            // Keep original order
            break;
    }
    
    return sorted;
}

async function loadProducts() {
    showLoading(true);
    errorMessage.classList.remove('show');
    
    try {
        const products = await fetchProducts();
        state.products = products;
        
        const sortBy = sortSelect.value;
        const sortedProducts = sortProducts(products, sortBy);
        
        renderProducts(sortedProducts);
    } catch (error) {
        showError(errorMessage, 'Failed to load products: ' + error.message);
    } finally {
        showLoading(false);
    }
}

async function searchProductById() {
    const id = searchInput.value.trim();
    
    if (!id) {
        showError(errorMessage, 'Please enter a product ID');
        return;
    }
    
    showLoading(true);
    errorMessage.classList.remove('show');
    
    try {
        const product = await fetchProductById(id);
        renderProducts([product]);
    } catch (error) {
        showError(errorMessage, 'Product not found: ' + error.message);
        renderProducts([]);
    } finally {
        showLoading(false);
    }
}

function clearSearch() {
    searchInput.value = '';
    loadProducts();
}

// Event Handlers
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    loginError.classList.remove('show');
    
    try {
        await login(username, password);
        showAppSection();
        await loadProducts();
    } catch (error) {
        showError(loginError, error.message);
    }
});

logoutBtn.addEventListener('click', () => {
    state.credentials = null;
    state.isAdmin = false;
    state.products = [];
    state.editingProductId = null;
    resetProductForm();
    showLoginSection();
    loginForm.reset();
});

productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const productData = {
        name: document.getElementById('productName').value,
        sku: document.getElementById('productSku').value,
        price: parseFloat(document.getElementById('productPrice').value),
        quantity: parseInt(document.getElementById('productQuantity').value),
        description: document.getElementById('productDescription').value
    };
    
    errorMessage.classList.remove('show');
    
    try {
        if (state.editingProductId) {
            await updateProduct(state.editingProductId, productData);
            alert('Product updated successfully!');
        } else {
            await createProduct(productData);
            alert('Product added successfully!');
        }
        
        resetProductForm();
        await loadProducts();
    } catch (error) {
        showError(errorMessage, 'Failed to save product: ' + error.message);
    }
});

cancelBtn.addEventListener('click', () => {
    resetProductForm();
});

searchBtn.addEventListener('click', searchProductById);

clearSearchBtn.addEventListener('click', clearSearch);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchProductById();
    }
});

sortSelect.addEventListener('change', () => {
    if (state.products.length > 0) {
        const sortedProducts = sortProducts(state.products, sortSelect.value);
        renderProducts(sortedProducts);
    }
});

// Global functions for inline event handlers
window.editProduct = async function(id) {
    try {
        const product = await fetchProductById(id);
        populateProductForm(product);
    } catch (error) {
        showError(errorMessage, 'Failed to load product: ' + error.message);
    }
};

window.confirmDeleteProduct = function(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        deleteProductById(id);
    }
};

async function deleteProductById(id) {
    errorMessage.classList.remove('show');
    
    try {
        await deleteProduct(id);
        alert('Product deleted successfully!');
        
        // If we were editing this product, reset the form
        if (state.editingProductId === id) {
            resetProductForm();
        }
        
        await loadProducts();
    } catch (error) {
        showError(errorMessage, 'Failed to delete product: ' + error.message);
    }
}

// Initialize
showLoginSection();
