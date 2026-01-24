export default function InsightsFeatures() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 7l1 13h16l1-13M5 7h14l-1-4H6l-1 4z"
          />
        </svg>
      ),
      title: "Retail Stores",
      description:
        "Enable quick product sharing and instant ordering through WhatsApp, making everyday purchases simple and friction-free.",
      tags: ["Retail", "Local Stores", "Daily Sales"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 7h13v10H3zM16 10h4l1 2v5h-5z"
          />
        </svg>
      ),
      title: "Wholesale & Distribution Businesses",
      description:
        "Manage bulk orders, repeat buyers, and pricing discussions smoothly with conversation-led checkout.",
      tags: ["Wholesale", "Distribution", "Bulk Orders"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 8h13v6a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 10h2a2 2 0 010 4h-2"
          />
        </svg>
      ),
      title: "Cafés, Bakeries & Food Outlets",
      description:
        "Take orders quickly, clarify custom requests, and confirm purchases in real time without complex systems.",
      tags: ["Food", "Cafés", "Quick Orders"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M21 8l-9-5-9 5 9 5 9-5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 8v8l9 5 9-5V8"
          />
        </svg>
      ),
      title: "Packaging & Consumable Suppliers",
      description:
        "Share catalogues, handle frequent reorders, and close B2B sales faster using chat-based ordering.",
      tags: ["Packaging", "Consumables", "B2B Sales"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4"
          />
          <circle cx="9" cy="19" r="1.5" />
          <circle cx="17" cy="19" r="1.5" />
        </svg>
      ),
      title: "Supermarkets & Mini Marts",
      description:
        "Let customers browse, send carts, and receive instant confirmation for everyday essentials.",
      tags: ["Supermarkets", "Mini Marts", "FMCG"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 12a4 4 0 100-8 4 4 0 000 8z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6 20a6 6 0 0112 0"
          />
        </svg>
      ),
      title: "Local & Home-Based Businesses",
      description:
        "Sell confidently using familiar conversations, no apps or websites required for customers.",
      tags: ["Small Business", "Home-Based", "WhatsApp Commerce"],
    },
  ];

  return (
    <section className="xl:py-20 lg:py-16 md:py-12 py-10 px-4 sm:px-6 lg:px-8 bg-white" id="industry">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center  mb-16">
          <h2 className="lg:text-4xl xl:text-5xl md:text-3xl text-2xl font-bold text-gray-900 mb-6">
            Who ZapGoCart Is Built For{" "}
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ZapGoCart supports high-volume, repeat-order businesses that rely on
            fast conversations and reliable checkout.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 mb-4">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md">
            Explore more application
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
