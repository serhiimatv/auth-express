export type IUserDtoModel = {
  name: string;
  email: string;
  _id: string;
  isActivated: boolean;
};

class UserDto {
  name: string;
  email: string;
  id: string;
  isActivated: boolean;

  constructor(model: IUserDtoModel) {
    this.name = model.name;
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
}

export default UserDto;
