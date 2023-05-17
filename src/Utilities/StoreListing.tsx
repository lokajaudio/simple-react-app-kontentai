import React from 'react';
import { Elements } from '@kontent-ai/delivery-sdk';

const formatPrice = (price: number, language: string): string => {
  return price.toLocaleString(language, {
    style: 'currency',
    currency: 'CZK',
  });
};

const renderProductStatus = (
  productStatus: Elements.TaxonomyElement
): React.ReactNode => {
  if (productStatus.value.length === 0) {
    return <span />;
  }

  const text = productStatus.value.map((x) => x.name).join(', ');
  return <span className="product-tile-status">{text}</span>;
};

export { formatPrice, renderProductStatus };
