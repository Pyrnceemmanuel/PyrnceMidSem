
const PRODUCTS = [
    {
        id: 100,
        name: 'Shoe1',
        price: 350,
        image: require('../assets/products/Air Jordan 4.jfif'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}