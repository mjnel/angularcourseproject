import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router ) { }


  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
        this.id = parseInt(params['id']);
        // if params is not undefined then its truthy so this.edit mode = true. 
        this.editMode = params['id'] 
        this.initForm();
    })

  }



     private initForm(){
      let receipeName = '';
      let imageURL ='';
      let receipeDescription='';
      let recipeIngreidents = new FormArray([])

      if(this.editMode){
        const recipe = this.recipeService.getRecipefromArr(this.id);
        receipeName = recipe.name;
        imageURL = recipe.imagePath
        receipeDescription = recipe.description;
        
        if(recipe['Ingredients']){           
          recipe.Ingredients.forEach((element)=>{
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
        'Ingredients' : recipeIngreidents
        
      })


      
      



    }

    onSubmit(){
      console.log(`submitted!`)

      if(this.editMode){
        this.recipeService.updateRecipe(this.id,this.recipeForm.value)
        console.log(this.recipeForm.value)
      }else{
        this.recipeService.addRecipe(this.recipeForm.value)
        console.log(this.recipeForm.value)

      }
      this.onCancel();
     // this.router.navigate(['../', this.queryParam, 'edit'], {relativeTo : this.route })

    }

   

    getControls() {
      return (<FormArray>this.recipeForm.get('Ingredients')).controls;
    }



    onAddIngredient() {
      (<FormArray>this.recipeForm.get('Ingredients')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
        })
      );
    }


    onCancel(){
      this.router.navigate(['../'], {relativeTo:this.route})
    }


    onDeleteIngredient(index: number){
      (<FormArray>this.recipeForm.get('Ingredients')).removeAt(index)
    }



  }