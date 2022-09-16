import PortfolioCategory from 'modules/PortfolioCategory'
import { lPortfolio, portfolio } from 'utils/const'
import { Category } from 'utils/types'
import Meta from 'components/Meta'

export async function getStaticProps(context) {
  const categoryId = context.params.categoryId
  const category = lPortfolio.filter((elem: Category) => elem.id === categoryId)[0]
  return {
    props: {
      category,
      categoryId,
    },
  }
}

export async function getStaticPaths() {
  const hr = lPortfolio.map(category => {
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
  return (
    <>
      <Meta id={'category'} categoryId={category.id} />
      <PortfolioCategory category={category} />
    </>
  )
}

export default CategoryPage
