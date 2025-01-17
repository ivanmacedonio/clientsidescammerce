export class CheckoutDTO {
  constructor(DNI, full_name, phone, email, number, CVV, Vto) {
    this.DNI = DNI;
    this.full_name = full_name;
    this.phone = phone;
    this.email = email;
    this.number = number;
    this.CVV = CVV;
    this.Vto = Vto;
  }
}
