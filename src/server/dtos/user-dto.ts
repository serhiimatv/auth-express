export type IUserDtoModel = {
  email: string;
  _id: string;
  isActivated: boolean;
};

class UserDto {
  email: string;
  id: string;
  isActivated: Boolean;

  constructor(model: IUserDtoModel) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
}

export default UserDto;
