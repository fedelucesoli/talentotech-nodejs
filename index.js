
// get argurmentos 
const args = process.argv.slice(2);
const [command, id] = args[1].split('/'); // Split 'productos/20' into ['productos', '20']

const apiUrl = 'https://fakestoreapi.com';

console.log('Argumentos:', args);
async function getProductos() {
    fetch(`${apiUrl}/products`)
        .then(response => response.json())
        .then(data => console.log(data));
}

async function getProductoById(id) {
    fetch(`${apiUrl}/products/${id}`)
        .then(response => response.json())
        .then(data => console.log(data));
}

async function postProducto(){
      const [, , nombre, precio, categoria] = args
      console.log(nombre, precio, categoria);
     fetch(`${apiUrl}/products`, {
         method: 'POST',
         body: JSON.stringify({
             title: nombre,
             price: precio,
             category: categoria
         })
     })
     .then(response => response.json())
     .then(data => console.log(data));

}

async function deleteProductoById(id) {
    fetch(`${apiUrl}/products/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(data));
}
 
switch (args[0]) {
    case 'GET':
        if (command === 'products' && !id) {
            getProductos();
        } else if (command === 'products' && id) {
            getProductoById(id);
        } else {
            console.error('Unknown GET command');
            process.exit(1);
        }
        break;
    case 'POST':
        if (args[1] === 'products') {
            postProducto();
        }else{
            console.error('Unknown POST command');
            process.exit(1);
        }
        break;
    case 'DELETE':
        if (command === 'products' && id) {
            deleteProductoById(id);
        } else {
            console.error('Falta id. No se pudo eliminar el producto');
            process.exit(1);
        }
        break;
    default:
        console.error('Unknown command');
        process.exit(1);
}