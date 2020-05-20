import styles from './RecipeCard.module.css'
import { Typography } from "@material-ui/core";
import { Recipe } from "../../interfaces";
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    recipe: Recipe
    onSwipe:(event: Event) => void   
}

const RecipeCard = ({ recipe, onSwipe }: Props) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: 500 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ x: 0 }}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={onSwipe}
                dragElastic={1}
                drag="x"
                className={styles.container}
                exit={{ x: -500 }}
            >
            <div className={styles.recipeImageContainer}>
                <img
                    src={recipe.imageURL} 
                    className={styles.recipeImage}
                    draggable={false}
                />
            </div>
            <div className={styles.contentText}>
                <Typography variant="h2" >{recipe.title}</Typography>
            </div>
            <div className={styles.contentText}>
                {recipe.ingredients.map( (ingredient: string) => (
                    <Typography variant="body1" > > {ingredient}</Typography>
                ))}
            </div>
            <div className={styles.contentText}>
                {recipe.instructions.map( (instructions: string) => (
                    <Typography variant="body1" > > {instructions}</Typography>
                ))}
            </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default RecipeCard;