import ProductItem from '@/components/products/productItem';
import data from '@/lib/data';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h2 className="text-2xl p-2">Latest Products</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* it will list 3 products in medium screen and 4 products in large screen */}
        {data.products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
