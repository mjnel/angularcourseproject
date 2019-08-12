import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false; 
  private UserSub: Subscription; 


constructor(private dataStorageService: DataStorageService, private authService:AuthService){
}


ngOnInit(){
 this.UserSub = this.authService.user.subscribe(userObj =>{
  this.isAuthenticated = userObj ? true : false;
 })
}

ngOnDestroy(){
  this.UserSub.unsubscribe()
}

onSaveData(){
    this.dataStorageService.storeRecipes()
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe()
  }





}
