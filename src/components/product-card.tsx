import { Product } from '@/types/product';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { PreviewableImage } from './preview-able-image';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="border-none h-44 overflow-hidden">
      <CardHeader className="overflow-hidden h-[140px] p-4 space-y-0">
        <PreviewableImage
          key={product.id}
          src={product.image}
          alt={product.name}
          fill
          className="size-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardContent className="px-4 py-0 space-y-0">
        <h1>
          <span className="text-muted-foreground">#{product.id}</span>{' '}
          {product.name}
        </h1>
      </CardContent>
    </Card>
  );
};
