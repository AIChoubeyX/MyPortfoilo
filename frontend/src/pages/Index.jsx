import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";

const Index = () => {
  return (
    <MainLayout>
      <div className="w-full flex items-center justify-center">
        <div className="px-4 md:px-12 max-w-2xl w-full py-8">
          <HeroSection />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
