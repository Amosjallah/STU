import HeroSection from './home/HeroSection';
import ServicesPreview from './home/ServicesPreview';
import WorkflowProcess from './home/WorkflowProcess';
import TestimonialsCarousel from './home/TestimonialsCarousel';
import ReviewsSection from './home/ReviewsSection';
import CTABanner from './home/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WorkflowProcess />
      <TestimonialsCarousel />
      <ReviewsSection />
      <CTABanner />
    </>
  );
}
