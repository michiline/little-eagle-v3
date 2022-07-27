import PortfolioCategory from 'modules/PortfolioCategory'
import { portfolio } from 'utils/const'
import { Category } from 'utils/types'
import Head from 'next/head'
import { useIntl } from 'react-intl'

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
  const intl = useIntl()
  return (
    <>
      <Head>
        <title>{`${intl.formatMessage({ id: category.id })} - ${intl.formatMessage({
          id: 'head.portfolio',
        })} - ${intl.formatMessage({ id: 'head.base' })}`}</title>
        <meta
          name="og:title"
          content={`${intl.formatMessage({ id: category.id })} - ${intl.formatMessage({
            id: 'head.portfolio',
          })} - ${intl.formatMessage({ id: 'head.base' })}`}
        />
        <meta name="og:url" content={`https://www.littleeaglephoto.com/portfolio/${category.id}`} />
        <meta
          name="og:image"
          content={`https://littleeaglephoto.s3.eu-central-1.amazonaws.com/cover/${category.id}-og.jpg`}
        />
        <meta name="og:image:width" content="320" />
        <meta name="og:image:height" content="213" />
      </Head>
      <PortfolioCategory category={category} />
    </>
  )
}

export default CategoryPage
