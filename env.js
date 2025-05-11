export const PORT = isNaN(process.env.PORT) ? 3001 : parseInt(process.env.PORT);
/**
 * 
 Starting the validation whether it is a number or not. In case if it is not a number then set the Default PORT i.e., (3001) or if it is in any other form (such as, string or number or boolean) then check it by using parseInt();
 * 
 */
 
