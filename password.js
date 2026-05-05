import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const generatePassword = (length,specialChar) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'+specialChar;
   let password = specialChar;

   for (let i = 1; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
   }   
   return password.split('').sort(() => Math.random()-0.5).join('');                                                         
}
  
async function main() {
   const name= await rl.question('What is your name? ');
   const favoriteNumber = await rl.question('What is your favorite number? ');
   const specialChar = await rl.question('What is your favorite special character? ');
   const LengthInput = await rl.question('How long Should the password be? (min 8)'); 

   const length=Math.max(8, parseInt(LengthInput,10));
   const password = generatePassword(length, specialChar);
   console.log(` \n Hi! ${name}, here is your Unique password:`);
    console.log(`Password: ${password}`);
    rl.close();
}

main();