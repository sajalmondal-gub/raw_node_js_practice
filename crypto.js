import crypto from "crypto";

// console.log("this is crypto", crypto);
// Function to encrypt data
function encrypt(text, key) {
  // Generate a random initialization vector
  const inv = crypto.randomBytes(16);

  // Create cipher with AES-256-CBC
  const cipher = crypto.createCipheriv("aes-256-cbc", key, inv);
  //   console.log('this is cipher',cipher);

  // Encrypt the data
  let encryptData = cipher.update("text", "utf8", "hex");
  encryptData += cipher.final("hex");
  console.log(encryptData);
  console.log('this is an inv',inv.toString('hex'));
}

// Note: In a real application, use a properly generated and securely stored key
const key = crypto.scryptSync("secretPassword", "salt", 32);
const result = encrypt("hi", key);
