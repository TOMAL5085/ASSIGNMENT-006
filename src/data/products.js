import rawProducts from './products.json'
import writingIcon from '../assets/products/writing.png'
import designIcon from '../assets/products/design-tool.png'
import stockIcon from '../assets/products/portfolio.png'
import automationIcon from '../assets/products/operation.png'
import resumeIcon from '../assets/package.png'
import socialIcon from '../assets/products/social-media.png'
import cartIcon from '../assets/products/shopping-cart.png'
import rocketIcon from '../assets/rocket.png'

const iconMap = {
  writing: writingIcon,
  design: designIcon,
  stock: stockIcon,
  automation: automationIcon,
  resume: resumeIcon,
  social: socialIcon,
  cart: cartIcon,
  rocket: rocketIcon,
}

const products = rawProducts.map((product) => ({
  ...product,
  icon: iconMap[product.icon] ?? designIcon,
}))

export default products
