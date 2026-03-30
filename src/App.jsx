import { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import heroImage from './assets/banner.png'
import playIcon from './assets/play.png'
import userIcon from './assets/user.png'
import packageIcon from './assets/package.png'
import rocketIcon from './assets/rocket.png'
import cartIcon from './assets/products/shopping-cart.png'
import products from './data/products'

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
]

const steps = [
  {
    step: '01',
    title: 'Create Account',
    description: 'Sign up in seconds. No credit card required to get started.',
    icon: userIcon,
  },
  {
    step: '02',
    title: 'Choose Products',
    description: 'Browse the catalog and pick tools that fit your workflow.',
    icon: packageIcon,
  },
  {
    step: '03',
    title: 'Start Creating',
    description: 'Download assets and launch your next project immediately.',
    icon: rocketIcon,
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 0,
    tagline: 'Perfect for getting started',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 29,
    tagline: 'Best for professionals',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 99,
    tagline: 'For teams and businesses',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
]

const tagStyles = {
  popular: 'bg-[#ede7ff] text-[#6c2cf2]',
  new: 'bg-[#e9f9ef] text-[#22c55e]',
  'best seller': 'bg-[#fff4d6] text-[#f59e0b]',
}

function formatPeriod(period) {
  if (period === 'one-time') return 'One-Time'
  if (period === 'yearly') return 'Yr'
  return 'Mo'
}

function App() {
  const [activeTab, setActiveTab] = useState('products')
  const [cart, setCart] = useState([])

  const cartIds = useMemo(
    () => new Set(cart.map((item) => item.id)),
    [cart],
  )

  const cartCount = cart.length
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart],
  )

  const handleAdd = (product) => {
    const cartItem = {
      ...product,
      cartId: `${product.id}-${Date.now()}-${Math.random()
        .toString(16)
        .slice(2)}`,
    }
    setCart((prev) => [...prev, cartItem])
    toast.success(`${product.name} added to cart.`)
  }

  const handleRemove = (cartId) => {
    const item = cart.find((entry) => entry.cartId === cartId)
    setCart((prev) => prev.filter((entry) => entry.cartId !== cartId))
    if (item) {
      toast.warning(`${item.name} removed from cart.`)
    }
  }

  const handleCheckout = () => {
    if (!cart.length) {
      toast.info('Your cart is empty. Add a product to continue.')
      return
    }
    setCart([])
    toast.success('Checkout complete. Your cart is now empty.')
  }

  return (
    <div className="toast-theme">
      <a href="#products" className="skip-link">
        Skip to content
      </a>
      <header className="site-header bg-white border-b border-slate-100">
        <div className="mx-auto flex h-[64px] max-w-[980px] items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-[22px] font-semibold text-[#6c2cf2]">
              DigiTools
            </span>
          </div>
          <nav className="hidden flex-1 items-center justify-center gap-5 text-[12px] font-medium text-slate-600 md:flex">
            <a href="#products" className="hover:text-slate-900">
              Products
            </a>
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#testimonials" className="hover:text-slate-900">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4 shrink-0">
            <div className="relative">
              <button
                type="button"
                aria-label="Open cart"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-700"
              >
                <img
                  src={cartIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5"
                  decoding="async"
                />
              </button>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff4d4f] text-[9px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              type="button"
              className="hidden text-[12px] font-medium text-slate-700 sm:inline-flex"
            >
              Login
            </button>
            <button
              type="button"
              className="inline-flex min-w-[110px] items-center justify-center rounded-full bg-[#6c2cf2] px-4 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#5b22d0] whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="site-main">
        <section className="bg-white">
          <div className="mx-auto grid max-w-[980px] items-center gap-14 px-4 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ede7ff] px-4 py-1 text-[11px] font-semibold text-[#6c2cf2]">
              <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#6c2cf2]/20">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6c2cf2]"></span>
              </span>
              New: AI-Powered Tools Available
            </span>
            <h1 className="mt-5 text-[38px] font-extrabold leading-tight text-slate-900 sm:text-[44px]">
              Supercharge Your
              <br />
              Digital Workflow
            </h1>
            <p className="mt-4 max-w-md text-[13px] leading-6 text-slate-500">
              Access premium AI tools, design assets, templates, and productivity
              software - all in one place. Start creating faster today.
            </p>
            <a
              href="#products"
              className="mt-2 inline-flex text-[11px] font-semibold text-slate-400 hover:text-slate-600"
            >
              Explore Products
            </a>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center rounded-full bg-[#6c2cf2] px-5 py-2 text-[11px] font-semibold text-white transition hover:bg-[#5b22d0]"
              >
                Explore Products
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#6c2cf2] px-5 py-2 text-[11px] font-semibold text-[#6c2cf2] transition hover:bg-[#6c2cf2]/5"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#6c2cf2]">
                  <img
                    src={playIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-3 w-3"
                    decoding="async"
                  />
                </span>
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="rounded-2xl bg-slate-100 p-5 shadow-sm">
              <img
                src={heroImage}
                alt="Digital workflow illustration"
                className="h-auto w-full rounded-2xl object-cover"
                decoding="async"
              />
            </div>
          </div>
          </div>

        <div className="bg-[#6c2cf2]">
          <div className="mx-auto flex max-w-[1600px] min-h-[247px] flex-col items-center justify-center gap-6 px-6 text-center text-white sm:flex-row">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex-1 sm:px-6 flex flex-col items-center ${
                  index !== stats.length - 1 ? 'sm:border-r sm:border-white/20' : ''
                }`}
              >
                <p className="text-[36px] font-bold">{stat.value}</p>
                <p className="text-[16px] text-brand-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section id="products" className="mx-auto max-w-[980px] px-4 py-14">
        <div className="text-center">
          <h2 className="text-[24px] font-bold text-slate-900">
            Premium Digital Tools
          </h2>
          <p className="mt-2 text-[12px] text-slate-500">
            Choose from a curated collection of premium products designed
            <br />
            to boost productivity and creativity.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-1 py-1 shadow-sm">
              <button
                type="button"
                className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition ${
                  activeTab === 'products'
                    ? 'bg-[#6c2cf2] text-white shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => setActiveTab('products')}
              >
                Products
              </button>
              <button
                type="button"
                className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition ${
                  activeTab === 'cart'
                    ? 'bg-[#6c2cf2] text-white shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                onClick={() => setActiveTab('cart')}
              >
                Cart ({cartCount})
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const inCart = cartIds.has(product.id)
              return (
                <div
                  key={product.id}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50">
                        <img
                          src={product.icon}
                          alt=""
                          aria-hidden="true"
                          className="h-6 w-6"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h3 className="text-[15px] font-semibold text-slate-900">
                        {product.name}
                      </h3>
                    </div>
                    <span
                      className={`rounded-full px-4 py-1.5 text-[11px] font-semibold leading-none whitespace-nowrap ${
                        tagStyles[product.tagType] || 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-[12px] text-slate-500">
                    {product.description}
                  </p>
                  <div className="mt-3 flex items-end gap-1 text-slate-900">
                    <span className="text-[18px] font-bold">
                      ${product.price}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      /{formatPeriod(product.period)}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-[11px] text-slate-600">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-emerald-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.3a1 1 0 0 1-1.43-.005L3.29 9.28a1 1 0 1 1 1.42-1.41l3.02 3.04 6.54-6.62a1 1 0 0 1 1.414 0Z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold transition ${
                      inCart
                        ? 'border border-[#6c2cf2] text-[#6c2cf2]'
                        : 'bg-[#6c2cf2] text-white hover:bg-[#5b22d0]'
                    }`}
                    onClick={() => handleAdd(product)}
                  >
                    {inCart ? 'Added to cart' : 'Buy Now'}
                  </button>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-[760px] rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-[13px] font-semibold text-slate-900">Your Cart</h3>
              <span className="text-[11px] text-slate-500">
                {cartCount} items
              </span>
            </div>

            {cart.length === 0 ? (
              <p className="mt-6 text-center text-slate-500">
                Your cart is empty. Explore products and add your favorites.
              </p>
            ) : (
              <div className="mt-5 space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                        <img
                          src={item.icon}
                          alt=""
                          aria-hidden="true"
                          className="h-5 w-5"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-slate-900">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-[11px] font-semibold text-rose-500 hover:text-rose-600"
                      onClick={() => handleRemove(item.cartId)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Total:</span>
                <span className="text-[14px] font-semibold text-slate-900">
                  ${total}
                </span>
              </div>
              <button
                type="button"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#6c2cf2] px-6 py-2 text-[11px] font-semibold text-white hover:bg-[#5b22d0]"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
        </section>

        <section id="features" className="bg-white py-14">
        <div className="mx-auto max-w-[1000px] px-4 text-center">
          <h2 className="text-[30px] font-bold text-slate-900">
            Get Started in 3 Steps
          </h2>
          <p className="mt-2 text-[10px] text-slate-500">
            Start using premium digital tools in minutes, not hours.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className="relative min-h-[240px] rounded-2xl border border-slate-100 bg-white px-5 py-6 text-center shadow-sm"
              >
                <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#6c2cf2] text-[10px] font-semibold text-white">
                  {step.step}
                </span>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#efe9ff]">
                  <img
                    src={step.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-4 text-[13px] font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section id="pricing" className="mx-auto max-w-[980px] px-4 py-14">
        <div className="text-center">
          <h2 className="text-[30px] font-bold text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-2 text-[11px] text-slate-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-5 shadow-sm ${
                plan.highlight
                  ? 'border-[#6c2cf2] bg-[#6c2cf2] text-white'
                  : 'border-slate-200 bg-white text-slate-900'
              }`}
            >
              {plan.badge && (
                <div className="absolute left-1/2 top-[-10px] -translate-x-1/2">
                  <span className="rounded-full bg-[#ffe9b0] px-3 py-1 text-[9px] font-semibold text-[#f59e0b]">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className="mt-4 text-[13px] font-semibold">{plan.name}</h3>
              <p className="mt-1 text-[11px] opacity-80">{plan.tagline}</p>
              <div className="mt-4 flex items-end gap-1 text-[22px] font-bold">
                ${plan.price}
                <span className="text-[10px] font-medium opacity-80">/Month</span>
              </div>
              <ul className="mt-4 space-y-2 text-[10px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg
                      className={`h-3.5 w-3.5 ${
                        plan.highlight ? 'text-white' : 'text-brand-600'
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.3a1 1 0 0 1-1.43-.005L3.29 9.28a1 1 0 1 1 1.42-1.41l3.02 3.04 6.54-6.62a1 1 0 0 1 1.414 0Z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold ${
                  plan.highlight
                    ? 'bg-white text-[#6c2cf2] hover:bg-[#f3edff]'
                    : 'bg-[#6c2cf2] text-white hover:bg-[#5b22d0]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        </section>

        <section
        id="testimonials"
        className="bg-[#6c2cf2] py-12 text-center text-white"
      >
        <div className="mx-auto max-w-[720px] px-4">
          <h2 className="text-[26px] font-semibold">
            Ready To Transform Your Workflow?
          </h2>
          <p className="mt-3 text-[10px] text-white/70">
            Join thousands of professionals already using DigiTools to work
            smarter.
            <br />
            Start your free trial today.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex items-center rounded-full bg-white px-5 py-2 text-[11px] font-semibold text-[#6c2cf2] hover:bg-white/90"
            >
              Explore Products
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-full border border-white/60 px-5 py-2 text-[11px] font-semibold text-white hover:bg-white/10"
            >
              View Pricing
            </button>
          </div>
          <p className="mt-4 text-[10px] text-white/70">
            14-day free trial - No credit card required - Cancel anytime
          </p>
        </div>
        </section>
      </main>

      <footer id="faq" className="bg-[#0d1423] text-slate-300">
        <div className="mx-auto grid max-w-[980px] gap-8 px-4 py-10 md:grid-cols-5">
          <div>
            <h3 className="text-lg font-semibold text-white">DigiTools</h3>
            <p className="mt-3 text-[11px] leading-5 text-slate-400">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-[11px] text-slate-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-[11px] text-slate-400">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-white">Resources</h4>
            <ul className="mt-3 space-y-2 text-[11px] text-slate-400">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-white">Social Links</h4>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                aria-label="Facebook"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-[#0d1423]"
              >
                f
              </button>
              <button
                type="button"
                aria-label="LinkedIn"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-[#0d1423]"
              >
                in
              </button>
              <button
                type="button"
                aria-label="X"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-[#0d1423]"
              >
                x
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800/60">
          <div className="mx-auto flex max-w-[980px] flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-slate-500 md:flex-row">
            <span>(c) 2026 DigiTools. All rights reserved.</span>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
