"use client";
import React, { useEffect, useState } from "react";

export default function MealsPage() {
  const [searchMeals, setSearchMeals] = useState("");
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}`
      );
      const data = await res.json();
      setMeals(data?.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [searchMeals, meals]);

  useEffect(() => {
    console.log(meals);
  }, [meals]);

  return (
    <div>
      <h2 className="text-center">Search meals for your dinner</h2>
      <form className="text-center">
        <input
          type="text"
          value={searchMeals}
          onChange={(e) => setSearchMeals(e.target.value)}
          className="border border-red-600"
        />
      </form>
      <div className="mt-4 text-center">
        {meals.length > 0 ? (
          <ul>
            {meals.map((meal) => (
              <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
          </ul>
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
}
