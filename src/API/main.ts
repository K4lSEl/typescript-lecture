// Map
const userAges = new Map<string, number>();

userAges.set("Alice", 25);
userAges.set("Bob", 18);
userAges.set("Pop", 20);

userAges.get("Alice");

for (const [name, age] of userAges) {
  console.log(`${name} (${age})`);
}

// Set
const uniqueNumbers = new Set<number>();

uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(4);
uniqueNumbers.delete(4);

console.log(uniqueNumbers);

for (const num of uniqueNumbers) {
  console.log(num);
}

// RegExp
function isValidEmail(email: string): boolean {
  // ここにコードを追加
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false
