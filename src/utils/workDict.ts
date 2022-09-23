import {Works} from "../store/slices/personSlice";

/**
 * Dictionary used to map between enum values and corresponding strings
 */
export const workDict = new Map([
    [Works.DEVELOPER, "Developer"],
    [Works.DOCTOR, "Doctor"],
    [Works.TEACHER, "Teacher"],
]);

