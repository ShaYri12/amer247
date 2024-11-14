export function generateReferenceId() {
  // Generate 4 random digits
  const randomDigits = Math.floor(1000 + Math.random() * 9000).toString();

  // Concatenate date and random digits

  return randomDigits;
}
