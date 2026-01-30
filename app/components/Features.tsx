import Image from "next/image";

export default function Features() {
  return (
    <section className="xl:py-20 lg:py-16 md:py-12 py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 grid grid-cols-6 gap-2">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Phone Mockup */}
          <div className="relative">
            <div className="relative z-10 w-full flex justify-center items-center">
              <Image
                src="/phone_mockup11.png"
                alt="Analytics Dashboard Mobile Mockup"
                width={800}
                height={600}
                className="object-cover max-w-none w-[500px] lg:w-[800px] "
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="lg:text-4xl xl:text-5xl md:text-3xl text-2xl font-bold leading-tight mb-6">
                WHY CUSTOMERS LOVE THE EXPERIENCE 
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="lg:text-xl md:text-lg font-semibold mb-2">
                    A Simple Buying Experience{" "}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    Clear catalogues, simple selection, and no logins required
                    let customers start ordering instantly.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="lg:text-xl md:text-lg font-semibold mb-2">
                    Instant Confirmation That Builds Confidence{" "}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    Customers receive instant confirmation, reducing uncertainty
                    and building confidence in every order.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="lg:text-xl md:text-lg font-semibold mb-2">
                    A Conversation-Led Checkout They Prefer{" "}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    Real-time conversations remove confusion and help buyers
                    complete orders faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
