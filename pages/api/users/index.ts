import { NextApiRequest, NextApiResponse } from 'next'
import { getRecipeData } from '../../../utils/sample-data'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(getRecipeData())) {
      throw new Error('Cannot find recipe data')
    }

    const { query: { page } } = req    
    let pageNumber:number|undefined = undefined
    if (page) {
      pageNumber = parseInt(page.toString())
    }

    res.status(200).json(getRecipeData(pageNumber))
} catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
