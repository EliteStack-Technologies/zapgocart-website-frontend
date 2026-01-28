import {  HowItsWorkSteps } from "@/components/blocks/HowItsWorkSteps"

const features = [
  { 
    step: 'Step 1', 
    title: 'Catalogue Setup',
    content: 'Upload your products, pricing, and categories to create your digital catalogue.', 
    image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Step 2',
    title: 'Customer Browsing:',
    content: 'Shoppers explore a clean, mobile-optimized catalogue built for quick decisions.',
    image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Cart Creation',
    content: 'Customers select items and quantities effortlessly, no login required.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 4',
    title: 'Order Submission',
    content: 'A structured order summary is sent instantly to your WhatsApp inbox.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 5',
    title: 'Confirmation & Payment',
    content: 'Review the order, update details if needed, and send a secure payment link.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
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
