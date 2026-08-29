ItemEvents.modification(event => {
  event.modify(Ingredient.all, item => {
    if (item.getFoodProperties() != null) {
      item.setFoodProperties(food => food.alwaysEdible())
    }
  })
})
