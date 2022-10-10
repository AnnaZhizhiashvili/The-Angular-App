import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form;

  constructor(private fb: FormBuilder, private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
  registerUser() {
    this.auth.register(this.form.value).subscribe();
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
