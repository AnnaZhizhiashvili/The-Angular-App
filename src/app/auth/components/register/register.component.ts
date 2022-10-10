import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      userName: ['', [Validators.required, Validators.min(4)]],
      password: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
  registerUser() {
    console.log(this.form.get('userName'))
    this.auth.register(this.form.value).subscribe();

  }

}

