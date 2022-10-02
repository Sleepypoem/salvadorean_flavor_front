
export function validate(param, validation) {
    let emailRegexp = "";


    switch (validation) {
        case "no-empty":
            if (param === "" || param === null || param === undefined) {
                return false
            }
            break;

        default:
            return false;
    }



}