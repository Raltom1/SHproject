let inventory = [];

// Add Product
function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const quantity = parseInt(document.getElementById('productQuantity').value);

    if (!name || price <= 0 || quantity <= 0) {
        alert("Please enter valid product details!");
        return;
    }

    inventory.push({ name, price, quantity });
    updateTable();
    clearInputs();
}

// Update Table
function updateTable() {
    const table = document.getElementById('productTable');
    table.innerHTML = '';

    inventory.forEach((product, index) => {
        const row = `
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>`;
        table.innerHTML += row;
    });
}

// Delete Product
function deleteProduct(index) {
    inventory.splice(index, 1);
    updateTable();
}

// Clear Inputs
function clearInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = '';
}
