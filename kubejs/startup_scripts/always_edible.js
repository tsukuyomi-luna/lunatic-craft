ItemEvents.modification(event => {
  event.modify(Ingredient.all, item => {
    if (item.foodProperties != null) {
      item.foodProperties = food => food.alwaysEdible()
    }
  })
})
