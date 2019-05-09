import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import {Recipe} from './../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']  
})
export class RecipeEditComponent implements OnInit {
id: number; 
editMode: boolean;
recipeForm:FormGroup;
recipeModel: Recipe;

  constructor(private route: ActivatedRoute, private receipeService: RecipeService ) { }


  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
        this.id = parseInt(params['id']);
        // if params is not undefined then its truthy so this.edit mode = true. 
        this.editMode = params['id'] 
        console.log(`edit mode: ${this.editMode}`)
        console.log(`params: ${params['id']}`)
        this.initForm();
    })

  }

     private initForm(){
      let receipeName = '';
      let imageURL ='';
      let receipeDescription='';
      let recipeIngreidents = new FormArray([])

      if(this.editMode){
        const recipe = this.receipeService.getRecipefromArr(this.id);
        receipeName = recipe.name;
        imageURL = recipe.imagePath
        receipeDescription = recipe.description;
        
        if(recipe['Ingreidents']){           
          recipe.Ingreidents.forEach((element)=>{
            recipeIngreidents.push(
              new FormGroup ({
                name: new FormControl(element.name, Validators.required),
                amount: new  FormControl(element.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              })
            )
          })
      
        }
      }
      

      this.recipeForm = new FormGroup({
        'name': new FormControl(receipeName, Validators.required),
        'imagePath' : new FormControl(imageURL,Validators.required),
        'description': new FormControl(receipeDescription,Validators.required),
        'ingredients' : recipeIngreidents
        
      })

      // this.recipeModel = new Recipe(receipeName,receipeDescription,imageURL,recipeIngreidents)
      
      


    }

    onSubmit(){
      console.log(this.recipeForm)
      

      // if(this.editMode){
      //   console.log(this.recipeForm.get('ingreident').value)

      //   this.recipeModel = {
      //       'name' : this.recipeForm.get('name').value,
      //       'description': this.recipeForm.get('description').value,
      //       'imagePath':this.recipeForm.get('imagePath').value,
      //       'Ingreidents': this.recipeForm.get('ingreidents').value
      //   }
        

      //   // this.receipeService.replaceRecipe(this.id, recipeModel)




        
      //   // this.receipeService.replaceRecipe(this.id, this.recipeForm)

      //   // if true, override the array element from the recipe service
      // }

      // this.editMode ? console.log(`edit mode is true`) : console.log(`edit mode is false`)

      console.log('test')
      
      // map each form element into a local variable





    }

    // controller = this.getControls()
   

    getControls() {
      return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }



    onAddIngredient() {
      (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
        })
      );
    }



  }