import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import MealItem from "./components/Meal/MealItem";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Biryani',
    description: 'Spiced rice with chicken',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Paneer Tikka',
    description: 'Marinated and grilled cottage cheese',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Masala Dosa',
    description: 'Thin rice crepe filled with spiced potatoes',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with chicken',
    price: 20.99,
  },
  {
    id: 'm5',
    name: 'Chole Bhature',
    description: 'Chickpea curry with fried bread',
    price: 15.99,
  },
  {
    id: 'm6',
    name: 'Palak Paneer',
    description: 'Spinach curry with cottage cheese',
    price: 16.99,
  },
];


function App() {
  const mealItems = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <div className="App">
      <Header />
      <Summary />
      <ul>{mealItems}</ul>
    </div>
  );
}

export default App;
