const userAges = new Map<string, number>();

userAges.set("Alice", 25);
userAges.set("Bob", 18);
userAges.set("Pop", 20);

for (const [name, age] of userAges) {
  console.log(`${name} (${age})`);
}
