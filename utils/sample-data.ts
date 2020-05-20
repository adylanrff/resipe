import { Recipe } from '../interfaces'
import recipeJson from './recipe.json'

/** Dummy user data. */
export function getRecipeData(page: number=0):Recipe[] {
  const ITEM_PER_PAGE: number = 5;

  const recipes: Recipe[] = []

  recipeJson.forEach((record, idx) => {
    const recipe: Recipe = {
      id: idx+1,
      title: record.title,
      yield: record.yields,
      totalTime: record.total_time,
      ingredients: record.ingredients,
      instructions: record.instructions.split('.')
        .map(x => x.replace('\n', '')
        .trimLeft())
        .filter(x => x.length > 0),
      imageURL: record.image
    };
    recipes.push(recipe)
  });

  return recipes.slice(page*ITEM_PER_PAGE, (page+1)*ITEM_PER_PAGE)
} 
