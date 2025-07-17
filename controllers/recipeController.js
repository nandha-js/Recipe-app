const Recipe = require("../models/Recipe");

// @desc    Create a new recipe
// @route   POST /api/recipes
// @access  Public
exports.createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json({
      success: true,
      data: recipe,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc    Get all recipes
// @route   GET /api/recipes
// @access  Public
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Get single recipe by ID
// @route   GET /api/recipes/:id
// @access  Public
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: "Recipe not found",
      });
    }
    res.status(200).json({
      success: true,
      data: recipe,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      success: false,
      error: "Invalid ID",
    });
  }
};

// @desc    Update recipe by ID
// @route   PUT /api/recipes/:id
// @access  Public
exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: "Recipe not found",
      });
    }
    res.status(200).json({
      success: true,
      data: recipe,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc    Delete recipe by ID
// @route   DELETE /api/recipes/:id
// @access  Public
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: "Recipe not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Recipe deleted successfully",
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
}; 
