import { assetImg, products } from "./lib/dummy";


function App() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <div className="border p-4 rounded-xl shadow-sm">
        <img
          src={assetImg.reactLog || product.image}
          alt={product.name}
          className="w-full h-48 object-contain rounded-lg mb-3"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-blue-600 font-bold mt-2">${product.price}</p>
        <p className={`mt-1 ${product.inStock ? "text-green-600" : "text-red-600"}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
      ))}
    </div>
  );
}

export default App;
