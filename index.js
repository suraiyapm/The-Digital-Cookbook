import 'dotenv/config';
import mongoose from 'mongoose';
import connectionDB from './db.js';
import Recipe from './models/recipe.js';

async function createRecipe() {
    const recipe = new Recipe({
        title: "Classic Tomato Soup",
        description: "A simple and delivious homemade tomato soup.",
        ingredients: ["Tomatoes", "Onion", "Garlic", "Vegetable Broth", "Olive Oil"],
        instructions: "1. Saute onions and garlic. 2. Add tomatoes and broth. 3. Simmer and blend.",
        prepTimeInMinutes: 30
    });
    await recipe.save();
    console.log('recipe created:', recipe);
}

async function findAllRecipes() {
    const allRecipes = await Recipe.find();
    console.log('all recipes:', allRecipes);
}

async function findRecipeByTitle(title) {
    const relevantRecipe = await Recipe.findOne({title});
    console.log('resulting recipe:', relevantRecipe);
}

async function updateRecipeDescription(title, newDescription) {
    const targetRecipe = await Recipe.findOneAndUpdate(
        {title: title},
        {description: newDescription},
        {new: true}
    );
    console.log('recipe updated:', targetRecipe);
}

async function deleteRecipe(title) {
    const deletionStatus = await Recipe.findOneAndDelete({title:title});
    if (deletionStatus) {
        console.log('success! dis one:', title);
    } else {
        console.log('unsuccessful deletion. your title was:', title);
    }
}