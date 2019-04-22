import { Component } from '@angular/core';
import { BackendApiService } from './backend-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  progressBar = false;
  apiHits = 0;
  shoesInfo: any;
  imageTest: any;
  stars: any;
  starClass: any = "fa fa-star checked";
  showLoader:boolean = true;
  searchNameText:string="";
  constructor(private api: BackendApiService) {

  }
  ngOnInit() {
    
    this.api.getApiData().subscribe((data) => {
      this.shoesInfo = data;
      console.log(this.shoesInfo);
      for (let index = 0; index < this.shoesInfo.length; index++) {
        const element = this.shoesInfo[index];
        let discountPrice = Math.ceil(element.orginalPrice - ((element.orginalPrice * element.discountPercentage) / 100));
        this.shoesInfo[index]['price'] = discountPrice;

      };
      this.imageTest = this.shoesInfo[0].image;
      this.apiHits++;
      this.showLoader = false;
    });
    

  };
  ngAfterViewChecked() {
    // console.log(this.shoesInfo);
    // alert("checked");
    // if(this.shoesInfo.length == 0){
    //   this.showMessage = false;
    // }else{
    //   this.showMessage = true;
    // }
  }
  starLengthArr(value) {
    this.stars = value;
    return Array(5);
  }
  starRatingArr(iteration) {
    let value = iteration + 1;

    //2.5 Math.floor(2.5) --2 
    //value == 

    if (value < this.stars) {
      this.starClass = "fa fa-star checked";
    }
    if (value > this.stars) {
      this.starClass = "fa fa-star";
    }
    if ((Number(this.stars) === this.stars && this.stars % 1 !== 0) && (Math.ceil(this.stars) == value)) {
      this.starClass = "fa fa-star-half-o checked";
    }
  }
  SortBy(selected){
    if(selected == "P"){
      console.log(this.shoesInfo);
      this.shoesInfo.sort(function(a, b){return a.price - b.price});
      
    }else if(selected == "R"){
      this.shoesInfo.sort(function(a, b){return a.rating - b.rating});
    }
  }
  stopProgress() {
    this.progressBar = true;

  }
}
