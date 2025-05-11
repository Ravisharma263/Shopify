
import { useState } from "react";
import { getCategories, getProducts } from "@/lib/products";
import MainLayout from "@/components/layout/MainLayout";
import ProductGrid from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const products = getProducts();
  const categories = getCategories();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");

  // Filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">All Products</h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant={selectedCategory === "all" ? "default" : "outline"} 
                 className="cursor-pointer hover:bg-primary/90"
                 onClick={() => setSelectedCategory("all")}>
              All
            </Badge>
            {categories.map((category) => (
              <Badge key={category} 
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/90"
                    onClick={() => setSelectedCategory(category)}>
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-2/3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-2 top-1/2 -translate-y-1/2" 
                  onClick={() => setSearchTerm("")}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>
          
          <div className="w-full sm:w-1/3">
            <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <ProductGrid 
          products={filteredProducts} 
          emptyMessage="No products match your search criteria. Try adjusting your filters."
        />
      </div>
    </MainLayout>
  );
};

export default Products;
