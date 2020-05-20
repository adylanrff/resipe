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

    return (
        <div className={styles.container}>
            <RecipeCard
                key={index}
                recipe={items[index % items.length]}
                onSwipe={getNextRecipe}
            />
        </div>
    )
}

export default RecipeList