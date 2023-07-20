import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import emailjs from "@emailjs/browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  //contactForm: UntypedFormGroup;
  center: google.maps.LatLngLiteral = { lat: 40.678178, lng: -73.944158};
  zoom: number = 12;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 40.678178, lng: -73.944158 }
  ];
  mapOptions: google.maps.MapOptions = {
    fullscreenControl: true, 
    mapTypeControl: true
  }
 
  constructor(public formBuilder: UntypedFormBuilder, public fb: FormBuilder) { }

  ngOnInit() {
    // this.contactForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.compose([Validators.required, emailValidator])],
    //   phone: ['', Validators.required],
    //   message: ['', Validators.required]
    // });
  }

  contactForm : FormGroup =this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, emailValidator])],
    phone: ['', Validators.required],
    message: ['', Validators.required]
  });

  send() {
    emailjs.init('ssNuuWtWmh_F2MHZy')
    emailjs.send("service_efhufis", "template_zlefg6k", {
      from_name: this.contactForm.value.name,
      to_name: "Admin",
      from_email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      message: this.contactForm.value.message,
    });

    alert('Mail je poslan');
  }


  public onContactFormSubmit(values:Object):void {
    if (this.contactForm.valid) {
      console.log(values);
    }
  }

}
