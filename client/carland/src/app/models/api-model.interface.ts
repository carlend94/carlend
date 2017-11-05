export interface IApiModel<T> {

  getApiModel(): Object;

  setFromApiModel(apiModel: any, ...args: any[]): T;
}
