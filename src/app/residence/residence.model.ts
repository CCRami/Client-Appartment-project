export class Residence {
    id!: number;
    name!: string;
    address!: string;
    image!: string;
    status!: string;
  
    constructor(id: number, name: string, address: string, image: string, status: string) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.image = image;
      this.status = status;
    }
  }
  