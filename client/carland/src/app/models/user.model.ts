import {IApiModel} from "./api-model.interface";

export class UserModel implements IApiModel<UserModel> {
  email: string;
  password: string;

  public constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }

  getApiModel(): any {
    return {
      email: this.email.toLowerCase(),
      password: this.password,
    }
  }

  setFromApiModel(apiModel: any): UserModel {
    throw new Error('Method not implemented.');
  }

}
