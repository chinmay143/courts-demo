import { motion } from 'framer-motion';

export default function CourtsSingaporeDemo() {
  const products = [
    {
      name: 'Samsung Smart TV',
      price: 'SGD 1,299',
      image:
        'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Modern Sofa Set',
      price: 'SGD 899',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'LG Refrigerator',
      price: 'SGD 1,599',
      image:
        'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Gaming Laptop',
      price: 'SGD 1,999',
      image: 'images/laptop.avif',
    },
  ];

  const stores = [
    'COURTS Megastore Tampines',
    'COURTS Nojima The Heeren',
    'COURTS Causeway Point',
    'COURTS Jurong Point',
    'COURTS Northpoint City',
    'COURTS Ang Mo Kio',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/courts-logo.png"
              alt="COURTS"
              className="h-12 object-contain"
            />
          </div>

          <div className="hidden md:flex gap-10 font-semibold text-base">
            <a href="#sales" className="hover:text-yellow-500 transition">
              Sales
            </a>
            <a href="#stores" className="hover:text-yellow-500 transition">
              Stores
            </a>
            <a href="#products" className="hover:text-yellow-500 transition">
              Products
            </a>
            <a href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-500 transition px-5 py-2 rounded-xl font-semibold text-blue-900 shadow-lg"
          >
            Shop Now
          </motion.button>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent_35%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Singapore's Trusted Electronics & Furniture Retailer
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Smart Living
              <span className="text-yellow-400"> Starts Here</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Discover unbeatable deals on electronics, home appliances,
              furniture, and IT products with flexible payment options.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                 whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 hover:bg-white/10 px-7 py-4 rounded-2xl font-semibold transition"
              >
                Explore Products
              </motion.button>

              <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-7 py-4 rounded-2xl shadow-2xl transition"
              >
                Find a Store
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>

            <div className="bg-white rounded-3xl p-6 shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop"
                alt="Showroom"
                className="rounded-2xl h-[420px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sales Banner */}
      <section id="sales" className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-black text-blue-900 mb-3">
              Mega Sale
            </h3>
            <p className="text-gray-600 mb-6">
              Up to 50% OFF selected electronics and appliances.
            </p>
            <button className="bg-blue-900 text-white px-5 py-3 rounded-xl font-semibold">
              View Offers
            </button>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-blue-900 text-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-black mb-3">Flexi Plans</h3>
            <p className="text-blue-100 mb-6">
              Buy now and pay later with flexible installment options.
            </p>
            <button className="bg-yellow-400 text-blue-900 px-5 py-3 rounded-xl font-semibold">
              Learn More
            </button>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-black text-blue-900 mb-3">
              Price Promise
            </h3>
            <p className="text-gray-600 mb-6">
              Best price guaranteed across Singapore.
            </p>
            <button className="bg-blue-900 text-white px-5 py-3 rounded-xl font-semibold">
              Compare Prices
            </button>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black text-blue-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Browse trending electronics and furniture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-black text-yellow-500 mb-4">
                    {product.price}
                  </p>

                  <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition">
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locator */}
      <section id="stores" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-blue-900 mb-6">
              Locate Our Stores
            </h2>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Visit one of our stores across Singapore for expert guidance and
              exclusive promotions.
            </p>

            <div className="grid gap-4">
              {stores.map((store, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between bg-gray-50 hover:bg-yellow-50 border border-gray-200 rounded-2xl px-5 py-4 transition"
                >
                  <span className="font-semibold text-blue-900">{store}</span>
                  <button className="text-sm bg-blue-900 text-white px-4 py-2 rounded-lg">
                    Directions
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                alt="Singapore"
                className="h-[600px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-black mb-6">Contact Us</h2>

            <p className="text-blue-100 text-lg leading-relaxed mb-10">
              Have questions about products, financing, or store locations?
              Reach out to our support team.
            </p>

            <div className="space-y-4 text-lg">
              <p>📍 Singapore</p>
              <p>📞 +65 1234 5678</p>
              <p>✉️ support@courts-demo.sg</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 text-gray-900 shadow-2xl"
          >
            <div className="grid gap-5">
              <input
                placeholder="Full Name"
                className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                placeholder="Email Address"
                className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl transition"
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/courts-logo.png"
              alt="COURTS"
              className="h-10 object-contain"
            />
            <span>© 2026 COURTS Singapore Demo</span>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
