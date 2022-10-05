
export function validate(param, validation) {
    let emailRegexp = /\S+@\S+\.\S+/;


    // eslint-disable-next-line default-case
    switch (validation) {
        case "no-empty":
            if (param === "" || param === null || param === undefined) {
                return false
            } else {
                return true;
            }
        case "email":
            if (!emailRegexp.test(param)) {
                return false
            } else {
                return true;
            }
        case "no-empty-array":

            if (param.length === 0) {
                return false
            } else {
                return true;
            }
    }



}