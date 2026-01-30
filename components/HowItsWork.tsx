import {  HowItsWorkSteps } from "@/components/blocks/HowItsWorkSteps"

const features = [
  { 
    step: 'Step 1', 
    title: 'Catalogue Setup',
    content: 'Upload your products, pricing, and categories to create your digital catalogue.', 
    image: '/step-1.png' 
  },
  { 
    step: 'Step 2',
    title: 'Customer Browsing',
    content: 'Shoppers explore a clean, mobile-optimized catalogue built for quick decisions.',
    image: '/step-2.png'
  },
  { 
    step: 'Step 3',
    title: 'Cart Creation',
    content: 'Customers select items and quantities effortlessly, no login required.',
    image: '/step-3.png'
  },
  { 
    step: 'Step 4',
    title: 'Order Submission',
    content: 'A structured order summary is sent instantly to your WhatsApp inbox.',
    image: '/step-4.png'
  },
  { 
    step: 'Step 5',
    title: 'Confirmation & Payment',
    content: 'Review the order, update details if needed, and send a secure payment link.',
    image: '/step-5.png'
  },
]

export function HowItsWork() {
  return (
      <HowItsWorkSteps 
        features={features}
        title="How ZapGoCart Works"
        autoPlayInterval={4000}
        imageHeight="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[450px]"
        
      />
  )
}
