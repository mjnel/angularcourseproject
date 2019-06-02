import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public Ingredients: Ingredient[];

    

        //Constructor is a built in function every class class has and will be executed once you create a new instance of the class
    constructor( name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.Ingredients = ingredients;
    }
}
