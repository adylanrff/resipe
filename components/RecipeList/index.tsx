import styles from './RecipeList.module.css'
import { Recipe } from "../../interfaces"
import RecipeCard from '../RecipeCard'
import { useState } from "react"

type Props = {
    items: Recipe[]
}

const RecipeList = ({ items }: Props) => {
    const [index, setIndex] = useState(0)

    const getNextRecipe = (e: Event) => {
        console.log(e)
        setIndex(index+1)
    }

    const recipe:Recipe = items[index % items.length]

    return (
        <div 
            className={styles.container}
            style={{ backgroundImage: `url(${recipe.imageURL})`}}
        >
            <RecipeCard
                key={index}
                recipe={recipe}
                onSwipe={getNextRecipe}
            />
        </div>
    )
}

export default RecipeList