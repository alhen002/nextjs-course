import classes from "./MealsGrid.module.css"
import MealItem from "@/components/Meals/MealItem";

function MealsGrid({meals}) {
    return (
        <ul className={classes.meals}>
            {meals.map(meal => {
               return <li key={meal.id}>
                <MealItem {...meal} />
            </li>
            })}
        </ul>
    );
}

export default MealsGrid;