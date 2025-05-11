
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/homepage/Hero";
import FeaturedProducts from "@/components/homepage/FeaturedProducts";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturedProducts />
    </MainLayout>
  );
};

export default Index;
