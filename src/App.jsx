import { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import heroImage from './assets/banner.png'
import playIcon from './assets/play.png'
import userIcon from './assets/user.png'
import packageIcon from './assets/package.png'
import rocketIcon from './assets/rocket.png'
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
  popular: 'bg-brand-100 text-brand-700',
  new: 'bg-emerald-100 text-emerald-700',
  'best seller': 'bg-amber-100 text-amber-700',
}

function formatPeriod(period) {
  if (period === 'one-time') return 'One-Time'
  if (period === 'yearly') return 'Yr'
  return 'Mo'
}

function App() {
  const [activeTab, setActiveTab] = useState('products')
  const [cart, setCart] = useState([])

  const cartCount = cart.length
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart],
  )

  const handleAdd = (product) => {
    const exists = cart.some((item) => item.id === product.id)
    if (exists) {
      toast.info(`${product.name} is already in your cart.`)
      return
    }
    setCart((prev) => [...prev, product])
    toast.success(`${product.name} added to cart.`)
  }

  const handleRemove = (productId) => {
    const item = cart.find((entry) => entry.id === productId)
    setCart((prev) => prev.filter((entry) => entry.id !== productId))
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
      <header className="bg-white border-b border-slate-100">
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
              <button className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-700">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="17" cy="20" r="1" />
                  <path d="M5 6h2l1.2 8.2a2 2 0 0 0 2 1.8h6.6a2 2 0 0 0 2-1.6l1.1-6.4H7.2" />
                </svg>
              </button>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[9px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </div>
            <button className="hidden text-[12px] font-medium text-slate-700 sm:inline-flex">
              Login
            </button>
            <button className="inline-flex min-w-[110px] items-center justify-center rounded-full bg-[#6c2cf2] px-4 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#5b22d0] whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[900px] items-center gap-10 px-4 py-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[10px] font-semibold text-brand-700">
              <span className="h-2 w-2 rounded-full bg-brand-500"></span>
              New: AI-Powered Tools Available
            </span>
            <h1 className="mt-4 text-[32px] font-extrabold leading-tight text-slate-900 sm:text-[38px]">
              Supercharge Your Digital Workflow
            </h1>
            <p className="mt-3 max-w-md text-[12px] leading-5 text-slate-500">
              Access premium AI tools, design assets, templates, and productivity
              software in one place. Start creating faster and smarter today.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2 text-[11px] font-semibold text-white transition hover:bg-brand-700">
                Explore Products
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-[11px] font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600">
                <img src={playIcon} alt="" className="h-4 w-4" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
              <img
                src={heroImage}
                alt="Digital workflow illustration"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#6c2cf2]">
          <div className="mx-auto flex max-w-[900px] flex-col items-center justify-between gap-6 px-4 py-7 text-center text-white sm:flex-row sm:text-left">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex-1 sm:px-6 ${
                  index !== stats.length - 1 ? 'sm:border-r sm:border-white/20' : ''
                }`}
              >
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-[11px] text-brand-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-[900px] px-4 py-14">
        <div className="text-center">
          <h2 className="text-[20px] font-bold text-slate-900">
            Premium Digital Tools
          </h2>
          <p className="mt-2 text-[11px] text-slate-500">
            Choose from a curated collection of premium products designed to
            boost productivity and creativity.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold transition ${
                activeTab === 'products'
                  ? 'border-transparent bg-brand-600 text-white hover:bg-brand-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
            <button
              className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold transition ${
                activeTab === 'cart'
                  ? 'border-transparent bg-brand-600 text-white hover:bg-brand-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setActiveTab('cart')}
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const inCart = cart.some((item) => item.id === product.id)
              return (
                <div
                  key={product.id}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50">
                        <img src={product.icon} alt="" className="h-5 w-5" />
                      </div>
                      <h3 className="text-[13px] font-semibold text-slate-900">
                        {product.name}
                      </h3>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[9px] font-semibold capitalize ${
                        tagStyles[product.tagType] || 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-[11px] text-slate-500">
                    {product.description}
                  </p>
                  <div className="mt-3 flex items-end gap-1 text-slate-900">
                    <span className="text-[16px] font-bold">
                      ${product.price}
                    </span>
                    <span className="text-[9px] text-slate-500">
                      /{formatPeriod(product.period)}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-[10px] text-slate-600">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <svg
                          className="h-3.5 w-3.5 text-emerald-500"
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
                    className={`mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold transition ${
                      inCart
                        ? 'border border-brand-500 text-brand-600'
                        : 'bg-brand-600 text-white hover:bg-brand-700'
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
          <div className="mx-auto mt-8 max-w-[680px] rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
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
                    key={item.id}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                        <img src={item.icon} alt="" className="h-5 w-5" />
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
                      className="text-[11px] font-semibold text-rose-500 hover:text-rose-600"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4">
              <div>
                <p className="text-[11px] text-slate-500">Total</p>
                <p className="text-[16px] font-bold text-slate-900">
                  ${total}
                </p>
              </div>
              <button
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-2 text-[11px] font-semibold text-white hover:bg-brand-700 sm:w-auto"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </section>

      <section id="features" className="bg-white py-14">
        <div className="mx-auto max-w-[900px] px-4 text-center">
          <h2 className="text-[20px] font-bold text-slate-900">
            Get Started in 3 Steps
          </h2>
          <p className="mt-2 text-[11px] text-slate-500">
            Start using premium digital tools in minutes, not hours.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm"
              >
                <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-[9px] font-semibold text-white">
                  {step.step}
                </span>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
                  <img src={step.icon} alt="" className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[12px] font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[11px] text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-[900px] px-4 py-14">
        <div className="text-center">
          <h2 className="text-[20px] font-bold text-slate-900">
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
              className={`rounded-3xl border p-5 shadow-sm ${
                plan.highlight
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'border-slate-100 bg-white text-slate-900'
              }`}
            >
              {plan.badge && (
                <div className="flex justify-center">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-[9px] font-semibold text-amber-700">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className="mt-4 text-[12px] font-semibold">{plan.name}</h3>
              <p className="mt-1 text-[11px] opacity-80">{plan.tagline}</p>
              <div className="mt-4 flex items-end gap-1 text-[22px] font-bold">
                ${plan.price}
                <span className="text-[11px] font-medium opacity-80">/Month</span>
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
                    ? 'bg-white text-brand-700 hover:bg-brand-50'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
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
          <h2 className="text-[20px] font-bold">
            Ready To Transform Your Workflow?
          </h2>
          <p className="mt-3 text-[11px] text-brand-100">
            Join thousands of professionals already using DigiTools to work
            smarter. Start your free trial today.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex items-center rounded-full bg-white px-5 py-2 text-[11px] font-semibold text-brand-700 hover:bg-brand-50">
              Explore Products
            </button>
            <button className="inline-flex items-center rounded-full border border-white px-5 py-2 text-[11px] font-semibold text-white hover:bg-white/10">
              View Pricing
            </button>
          </div>
          <p className="mt-4 text-[10px] text-brand-100">
            14-day free trial - No credit card required - Cancel anytime
          </p>
        </div>
      </section>

      <footer id="faq" className="bg-slate-900 text-slate-300">
        <div className="mx-auto grid max-w-[900px] gap-8 px-4 py-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">DigiTools</h3>
            <p className="mt-3 text-sm text-slate-400">
              Premium tools to help creators, marketers, and teams work faster.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>AI Writing</li>
              <li>Automation</li>
              <li>Templates</li>
              <li>Stock Assets</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Help Center</li>
              <li>Community</li>
              <li>Partners</li>
              <li>Status</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs text-white">
                f
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs text-white">
                in
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs text-white">
                x
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="mx-auto max-w-[900px] px-4 py-4 text-center text-xs text-slate-500">
            (c) 2026 DigiTools. All rights reserved.
          </div>
        </div>
      </footer>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
