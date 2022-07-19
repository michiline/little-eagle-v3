import PortfolioCategory from 'modules/PortfolioCategory'
import { portfolio } from 'utils/const'
import { Category } from 'utils/types'

export async function getStaticProps(context) {
  const categoryId = context.params.categoryId
  const category = portfolio.filter((elem: Category) => elem.id === categoryId)[0]
  return {
    props: {
      category,
      categoryId,
    },
  }
}

export async function getStaticPaths() {
  const hr = portfolio.map(category => {
    return {
      params: { category, categoryId: category.id },
      locale: 'hr',
    }
  })
  const en = portfolio.map(category => {
    return {
      params: { category, categoryId: category.id },
      locale: 'en',
    }
  })
  return {
    paths: hr.concat(en),
    fallback: false,
  }
}

const CategoryPage = ({ category }) => {
  return <PortfolioCategory category={category} />
}

export default CategoryPage
