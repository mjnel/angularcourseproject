import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']  
})
export class RecipeEditComponent implements OnInit {
id: number; 
editMode: boolean;
recipeForm:FormGroup;

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
                name: new FormControl(element.name),
                amount: new FormControl(element.amount)
              })
            )
            console.log(element)

          })
      
        }
      }
      


      this.recipeForm = new FormGroup({
        'name': new FormControl(receipeName),
        'imagePath' : new FormControl(imageURL),
        'description': new FormControl(receipeDescription),
        'ingredients' : recipeIngreidents
        
      }) 

    }

    onSubmit(){
      console.log(this.recipeForm)
    }

    // controller = this.getControls()
   

    getControls() {
      return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }



  }