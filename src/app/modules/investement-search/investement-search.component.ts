import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-investement-search',
  templateUrl: './investement-search.component.html',
  styleUrls: ['./investement-search.component.scss']
})
export class InvestementSearchComponent {
  searcTerm: any;

  constructor(private apiService: ApiService,private router : Router){}

  search(e:any){
    console.log(e.target.value);
    this.searcTerm = e.target.value;
    this.apiService.search(this.searcTerm).subscribe((response)=>{
      console.log(response);
      
    })
  }
  chooseSerachTerm(){
    this.router.navigateByUrl('dashboard')
  }
}
