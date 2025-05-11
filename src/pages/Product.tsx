import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/index';
import { formatPrice } from '../lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex items-center space-x-4">
            <li>
              <div className="flex items-center">
                <a href="/" className="mr-4 text-sm font-medium text-gray-900">
                  Home
                </a>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a href="/products" className="mr-4 text-sm font-medium text-gray-900">
                  Products
                </a>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-16 lg:pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <div className="mt-4 pb-10 border-t border-gray-200 pt-10">
              <h2 className="text-sm font-medium text-gray-900">Product Information</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product?.description}</p>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">Hand crafted from premium materials</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">Designed for everyday use</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">Built to last for years</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Price</h3>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{formatPrice(product?.price)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;