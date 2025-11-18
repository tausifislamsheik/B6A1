# TypeScript: Interface vs Type

TypeScript-এ **interface** এবং **type alias** দুটোই object-এর কাঠামো (shape) নির্ধারণ করতে ব্যবহৃত হয়। যদিও কাজের দিক থেকে অনেকটা মিল, তবুও এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

---

## ⭐ Interface vs Type — মূল পার্থক্য

### ✔ 1. Declaration Merging
- **interface**: একই নামের interface একাধিকবার declare করলে এগুলো **merge** হয়ে যায়।  
- **type**: একই নামে দুইবার type declare করলে **error** দেয়।

### ✔ 2. Extending / Inheritance
- **interface**: `extends` ব্যবহার করে সহজেই extend করা যায়।  
- **type**: intersection (`&`) ব্যবহার করে extend করা যায়।

### ✔ 3. Usage Flexibility
- **interface**: সাধারণত object structure বা class-এর contract নির্ধারণে বেশি উপযোগী।  
- **type**: primitive, union, tuple, function signature — অর্থাৎ আরও **flexible**।

### ✔ 4. Union & Complex Types
- **interface**: union type সাপোর্ট করে না।  
- **type**: union, intersection, conditional types — সবই সাপোর্ট করে।

---

# 🧩 উদাহরণসমূহ

## 🔹 Interface Example

```ts
interface User {
  name: string;
  age: number;
}

// Declaration Merging (✔ Allowed)
interface User {
  email: string;
}

const user: User = {
  name: "Tausif",
  age: 24,
  email: "tausif@example.com"
};

```


# keyof in TypeScript

TypeScript-এ **`keyof`** হলো একটি **type operator**, যা কোনো object type-এর সবগুলো key-এর **union type** তৈরি করে।  
এর সাহায্যে আমরা object-এর key গুলোকে *type হিসেবে* ব্যবহার করতে পারি, ফলে ভুল key ব্যবহার করলে TypeScript আগে থেকেই error দেখায়।

---

## ⭐ keyof কেন ব্যবহার করা হয়?

- Object-এর valid keys কে type হিসেবে পাওয়া যায়  
- Safer code — ভুল key দিলে TypeScript error দেয়  
- Generic function-এ dynamic property safely access করা যায়  
- Reusable utility function তৈরি করা সহজ হয়

---

# 🧩 Basic Example (keyof)

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;

// Result:
// "name" | "age" | "email"
