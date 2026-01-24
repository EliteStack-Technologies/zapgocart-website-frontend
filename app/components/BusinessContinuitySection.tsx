import Image from "next/image";

export default function BusinessContinuitySection() {
  return (
    <section className="xl:py-20 lg:py-16 md:py-12 py-10  px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center flex items-center justify-center flex-col xl:mb-16 mb-8  ">
          <h2 className="lg:text-4xl xl:text-5xl md:text-3xl text-2xl font-bold text-gray-900 mb-6 xl:w-[50%] w-[75%]">
            Designed to Keep Your Business Moving
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            ZapCart helps businesses sell faster, manage smarter, and grow
            without adding complexity.
          </p>
        </div>

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto  flex flex-col gap-8 md:flex-row xl:flex-row items-center justify-center">
          {/* Left Cards */}
          <div className="w-full md:w-1/2 xl:w-auto xl:absolute left-0 top-1/2 xl:-translate-y-1/2 space-y-8 xl:mb-0 flex flex-col items-center  xl:items-start ">
            {/* Faster Order Flow */}
            <div className="bg-white rounded-xl p-6 xl:w-80 w-full lg:h-[200px] xl:h-[220px]  shadow-sm ">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Faster Order Flow
              </h3>
              <p className="text-gray-600 text-sm">
                Customers submit complete carts in seconds through simple
                conversations.
              </p>
            </div>

            {/* Dynamic Order Management */}
            <div className="bg-white rounded-xl p-6 xl:w-80 w-full lg:h-[200px] xl:h-[220px] shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.25 3.75h1.5l.375 2.25a6.75 6.75 0 012.01.83l2.06-.98 1.06 1.06-.98 2.06c.36.63.64 1.31.83 2.01l2.25.375v1.5l-2.25.375a6.75 6.75 0 01-.83 2.01l.98 2.06-1.06 1.06-2.06-.98a6.75 6.75 0 01-2.01.83l-.375 2.25h-1.5l-.375-2.25a6.75 6.75 0 01-2.01-.83l-2.06.98-1.06-1.06.98-2.06a6.75 6.75 0 01-.83-2.01L3.75 12v-1.5l2.25-.375c.19-.7.47-1.38.83-2.01l-.98-2.06 1.06-1.06 2.06.98c.63-.36 1.31-.64 2.01-.83l.375-2.25z"
                  />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Dynamic Order Management
              </h3>
              <p className="text-gray-600 text-sm">
                Instantly manage pricing, availability, and order changes in
                real time.
              </p>
            </div>
          </div>

          {/* Center Illustration - only visible on xl and up */}
          <div className="relative z-10 hidden xl:block xl:static xl:w-auto xl:mx-24">
            <Image
              src="/Illustration.png"
              alt="ZapCart Business Flow"
              width={500}
              height={300}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Cards */}
          <div className="w-full md:w-1/2 xl:w-auto xl:absolute right-0 top-1/2 xl:-translate-y-1/2 space-y-8 flex flex-col items-center xl:items-end mt-8 md:mt-0">
            {/* Lower Operating Cost */}
            <div className="bg-white rounded-xl p-6 xl:w-80 w-full lg:h-[200px] xl:h-[220px] shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a5 5 0 00-10 0v2M5 11h14v8H5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Lower Operating Costs
              </h3>
              <p className="text-gray-600 text-sm">
                No websites, apps, or heavy systems to build or maintain.
              </p>
            </div>

            {/* More Revenue */}
            <div className="bg-white rounded-xl p-6 xl:w-80 w-full lg:h-[200px] xl:h-[220px] shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 17l6-6 4 4 8-8"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                More Revenue, Less Effort
              </h3>
              <p className="text-gray-600 text-sm">
                Automation plus human interaction improves speed, accuracy, and
                conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
