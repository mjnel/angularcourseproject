import { Ingreident } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public Ingreidents: Ingreident[];

        //Constructor is a built in function every class class has and will be executed once you create a new instance of the class
    constructor(name: string, desc: string, imagePath: string, ingredients: Ingreident[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.Ingreidents = ingredients;
    }
}
