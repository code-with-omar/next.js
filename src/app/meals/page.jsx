import Link from "next/link";
import MealSearch from "./components/MealSearch";
import Image from "next/image";

async function fetchMeals(searchQuery) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    );
    const data = await res.json();
    return data.meals || []; // Ensure it returns an array
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default async function MealsPage({ searchParams }) {
  const searchQuery = (await searchParams?.searchMeals) || "";
  const meals = await fetchMeals(searchQuery);

  return (
    <div>
      <h2 className="text-center">Search meals for your dinner</h2>
      <MealSearch />

      <div className="mt-4 text-center py-4">
        {meals.length > 0 ? (
          <div className="grid grid-cols-4 gap-3">
            {meals.map((meal) => (
              <div key={meal.idMeal} className="bg-green-600 p-4 rounded">
                <h2>{meal.strMeal}</h2>
                <h3>Category: {meal.strCategory}</h3>
                <div>
                  <Image
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width={500}
                    height={500}
                    quality={80}
                  />
                </div>
                <Link href={`/meal/${meal.idMeal}`} className="px-4">
                  <button className="bg-emerald-950 text-white px-4 py-2 mt-2 rounded">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
}
