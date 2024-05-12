export class StudentDTO {

  constructor(data:Partial<StudentDTO>) {
    Object.assign(this, data);
  }

  id?: number|null;
  name?: string|null;
  email?: string|null;
  address?: string|null;
  phone?: string|null;

}
