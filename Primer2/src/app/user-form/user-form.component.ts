import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user = {
    firstName:'',
    lastName:'',
    city:''
};

listOfUser = [];

  constructor() {
    this.listOfUser = [];
  }

  ngOnInit(): void {
  }

  addUser() {
    this.listOfUser.push(this.user);
  }
}
