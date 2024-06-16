import state from "../../Infrastructure/state/initState";
import { Valid_MeliCode, Valid_Number, Valid_Pass, Valid_PostalCode, Valid_eq, Valid_maliat } from "./regEX"




export const ValidationFunction = (input, validation, message) => {
    if (validation.test(input)) {
        throw 'hello';
    }
    else {
        throw message;
    }
}


export const ValidationFunction1 = (input, validation, message) => {
    if (!validation.test(input)) {
        throw message;
    }
}



// try {
//     ValidationFunction(state, Valid_Number, 'please enter your phone number')
// }
// catch (error) {
//     return error.message;
// }