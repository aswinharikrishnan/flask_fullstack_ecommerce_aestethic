import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/40 hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.inStock && (
            <Badge className="absolute top-4 right-4 bg-accent">
              In Stock
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col items-start gap-4 p-6">
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>
          </div>
          
          <h3 className="font-semibold text-lg leading-tight group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
        
        <div className="w-full flex items-center justify-between">
          <div className="text-2xl font-bold">
            ₹{product.price.toLocaleString('en-IN')}
          </div>
          
          <Button
            size="sm"
            className="bg-gradient-primary hover:shadow-card"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
