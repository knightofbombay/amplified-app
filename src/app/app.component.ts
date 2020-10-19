import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Attraction } from '../types/attraction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  /* declare attractions variable */
  attractions: Array<Attraction>;

  constructor(private api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'city': ['', Validators.required]
    });

    /* fetch attractions when app loads */
    this.api.ListAttractions().then(event => {
      this.attractions = event.items;
    });

     /* subscribe to new restaurants being created */
  this.api.OnCreateAttractionListener.subscribe( (event: any) => {
    const newAttraction = event.value.data.onCreateAttraction;
    this.attractions = [newAttraction, ...this.attractions];
  });
  } 

  public onCreate(attraction: Attraction) {
    this.api.CreateAttraction(attraction).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating attraction...', e);
    });
  }
}