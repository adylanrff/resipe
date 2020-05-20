import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { Recipe } from '../interfaces'
import { getRecipeData } from '../utils/sample-data'
import RecipeList from '../components/RecipeList'
import { Container } from 'next/app'

type Props = {
  items: Recipe[]
}

const IndexPage = ({ items }: Props) => (
  <Layout title="Resipe | Experimental ">
    <RecipeList items={items} />
  </Layout>
)


export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Recipe[] = getRecipeData()
  return { props: { items } }
}

export default IndexPage
