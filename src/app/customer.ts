import { Medicine } from "./medicine";

export class Customer {
    id: number | undefined
    name: string | undefined
    mobile_no: number | undefined
    email: string | undefined
    address: string | undefined
    medicines: Medicine[] = [];
    amountPaid: number | undefined
    dateOfBought: Date | undefined
}