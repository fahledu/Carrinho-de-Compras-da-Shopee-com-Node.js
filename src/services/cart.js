// quais ações meu carrinho pode fazer?

// -> adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// -> dweletar item do carrinho

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item, name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// -> remover um item
async function removeItem(userCart, item) {


    const indexFound = userCart.findIndex((product) => product.name === item.name);

    if (indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1){
       deleteItem();
    }
}

// -> calcular o total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("\nShopee cart total is: ")
    console.log(`Total: ${result}`);
}

async function displayCart(userCart) {
    console.log("\nShoppe cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}
