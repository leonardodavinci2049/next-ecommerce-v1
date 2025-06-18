import { mockProducts } from "@/types/mocks";

const products = mockProducts;


export default function HomePage() {
  const qtdProducts = products.length;
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>
      <p>Showing {qtdProducts} products</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <p>products will go here</p>
      </div>
    </main>
  );
}
