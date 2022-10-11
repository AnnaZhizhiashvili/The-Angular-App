import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      userName: ['', [Validators.required, Validators.min(4)]],
      password: ['', [Validators.required, Validators.min(4)]],
      gender: ['', Validators.required]
    });

    this.form.valueChanges.subscribe(() => {    console.log(this.form)


    })

  }
  registerUser() {
    this.auth.register(this.form.value).subscribe();

  }


}

