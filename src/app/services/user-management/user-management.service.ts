import { Injectable , OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../models/user-model/user-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  constructor(
    private userModel: UserModel,
    private http: HttpClient,
  ) {}

    public getUserData() {
      console.log(this.userModel.loginModel.email);
    }

    public signUp(signUpModel) {


      return this.http.post(environment.apiurl + '/email', this.userModel.signUpModel);

    }

    public signIn(signInModel) {
      return this.http.post(environment.apiurl + '/login', this.userModel.loginModel);
    }
}
