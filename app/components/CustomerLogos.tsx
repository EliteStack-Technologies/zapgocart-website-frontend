import Image from 'next/image';

export default function CustomerLogos() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg font-medium">
            160,000+ customers in over 120 countries grow their businesses with ZapGoCart
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center opacity-60">
          {/* Row 1 */}
          <div className="flex items-center justify-center p-4 ">
            <Image 
              src="/Logo.png" 
              alt="Customer Logo" 
              width={200} 
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center p-4 ">
            <Image 
              src="/Logo.png" 
              alt="Customer Logo" 
              width={200} 
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center p-4 ">
            <Image 
              src="/Logo.png" 
              alt="Customer Logo" 
              width={200} 
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center p-4 ">
            <Image 
              src="/Logo.png" 
              alt="Customer Logo" 
              width={200} 
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center p-4 ">
            <Image 
              src="/Logo.png" 
              alt="Customer Logo" 
              width={200} 
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center p-4 ">
            <Image 
              src="/Logo.png" 
              alt="Customer Logo" 
              width={200} 
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center p-4 ">
            <Image 
              src="/Logo.png" 
              alt="Customer Logo" 
              width={200} 
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center p-4 ">
            <Image 
              src="/Logo.png" 
              alt="Customer Logo" 
              width={200} 
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center p-4 ">
            <Image 
              src="/Logo.png" 
              alt="Customer Logo" 
              width={200} 
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center p-4 ">
            <Image 
              src="/Logo.png" 
              alt="Customer Logo" 
              width={200} 
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
     
        </div>
      </div>
    </section>
  );
}