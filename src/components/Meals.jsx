import React, { useState, useEffect } from "react";
import axios from "axios";
import MealItem from "./MealItem";

const Meals = () => {
    const [mealsArray, setMealsArray] = useState([]);
    

    useEffect(() => {
        async function fetchMeals() {
            axios.get('http://localhost:3000/meals')
                .then(response => {
                    setMealsArray(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        fetchMeals();
    }, []);

    return (
        <ul id="meals">
            {mealsArray.map(meal => (
                <MealItem key={meal.id} meal={meal}  />
            ))}
        </ul>
    );
}

export default Meals;