import classes from './IngredientsItem.module.css'

function IngredientsItem({element, item, kcal, protein, fat, carbs, fiber, sugars, onChangeIngredients, btn}) {
  return (
    <div className={classes.singleitem}>
      <h3>{item}</h3>
      <p>(Portion 100g)</p>
      <p>kcal: {kcal}</p>
      <p>protein: {protein}</p>
      <p>fat: {fat}</p>
      <p>carbs: {carbs}</p>
      <p>fiber: {fiber}</p>
      <p>sugars: {sugars}</p>
      <button className={classes.btn} onClick={() => onChangeIngredients(element)}>{btn}</button>
    </div>
  )
}
export default IngredientsItem