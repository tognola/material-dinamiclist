import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;


  list1 = [ //left
    {id: 1, name: "Obj 1"},
    {id: 2, name: "Obj 2"},
    {id: 3, name: "Obj 3"},
    {id: 4, name: "Obj 4"},
    {id: 5, name: "Obj 5"},

  ]

    list2 = [ //right
    {id: 6, name: "Obj 6"},
    {id: 7, name: "Obj 7"},
    {id: 8, name: "Obj 8"},
    {id: 9, name: "Obj 9"},
    {id: 10, name: "Obj 10"},

  ]

  moveLeft(rightList){
    let elem = rightList.selectedOptions.selected.map((e)=>e.value)

      this.list1 = this.list1.concat(elem);

      this.list2 = this.list2.filter(
        function(e) {
          return this.indexOf(e) < 0;
        },
        this.list1)

  }

  moveRight(leftList){
   let elem = leftList.selectedOptions.selected.map((e)=>e.value)

      this.list2 = this.list2.concat(elem);

      this.list1 = this.list1.filter(
        function(e) {
          return this.indexOf(e) < 0;
        },
        this.list2)
  }

}
