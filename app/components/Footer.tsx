export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      
      <div className="max-w-7xl mx-auto flex flex-col gap-8 px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 w-full">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 md:mb-0 w-full md:w-auto">
            <img
              src="/logos/logo.png"
              alt="ZapGoCart Logo"
              className="h-8 w-auto max-w-[120px] md:max-w-[160px] lg:max-w-[200px]"
            />
          </div>
          {/* Navigation Sections */}
          <div className="flex flex-col sm:flex-row flex-1 justify-between gap-6 sm:gap-8 md:gap-12 w-full text-center sm:text-left">
            {/* Home */}
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>
                  <a
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#howitswork"
                    className="hover:text-white transition-colors"
                  >
                    How It Work
                  </a>
                </li>
                <li>
                  <a
                    href="#industry"
                    className="hover:text-white transition-colors"
                  >
                    Industry
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#trial"
                    className="hover:text-white transition-colors"
                  >
                    Request Demo
                  </a>
                </li>
              </ul>
            </div>
            {/* Industry */}
            <div>
              <h4 className="font-semibold mb-2">Industry</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>
                  <a
                    href="#industry"
                    className="hover:text-white transition-colors"
                  >
                    Retail Stores
                  </a>
                </li>
                <li>
                  <a
                    href="#industry"
                    className="hover:text-white transition-colors"
                  >
                    Wholesale & Distribution Businesses
                  </a>
                </li>
                <li>
                  <a
                    href="#industry"
                    className="hover:text-white transition-colors"
                  >
                    Cafés, Bakeries & Food Outlets
                  </a>
                </li>
                <li>
                  <a
                    href="#industry"
                    className="hover:text-white transition-colors"
                  >
                    Packaging & Consumable Suppliers
                  </a>
                </li>
                <li>
                  <a
                    href="#industry"
                    className="hover:text-white transition-colors"
                  >
                    Supermarkets & Mini Marts
                  </a>
                </li>
                <li>
                  <a
                    href="#industry"
                    className="hover:text-white transition-colors"
                  >
                    Local & Home-Based Businesses
                  </a>
                </li>
              </ul>
            </div>
            {/* FAQ */}
            <div>
              <h4 className="font-semibold mb-2">FAQ</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    General Questions
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-6 gap-2 sm:gap-4 text-center w-full">
          <div className="text-gray-400 text-sm">
            © 2026 ZapGoCart. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Powered by{' '}
            <a href="https://zapelite.com/" target="_blank" rel="noopener noreferrer">
              <span className="text-blue-400 font-medium hover:underline cursor-pointer">
                Zapelite
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
