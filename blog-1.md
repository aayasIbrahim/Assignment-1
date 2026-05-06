

## Topic 1: Why `any` is a Type Safety Hole and Why `unknown` is Safer

TypeScript এর মূল উদ্দেশ্য হলো JavaScript এ type safety যোগ করা, যাতে ভুল data type ব্যবহার করলে compile time এ error ধরা যায়। কিন্তু `any` টাইপ এই safety কে পুরোপুরি নষ্ট করে দেয়। এজন্য একে “type safety hole” বলা হয়।

---

### ❌ Why `any` is dangerous?

`any` ব্যবহার করলে TypeScript কোনো type checking করে না। ফলে যেকোনো operation করা যায়, যা runtime error ঘটাতে পারে।

```ts
let data: any = "Hello";
data.toFixed(); // ❌ runtime error (string এর উপর number method)
```

এখানে TypeScript কোনো warning দেয় না, কারণ `any` পুরো checking bypass করে।

---

### ✅ Why `unknown` is safer?

`unknown` ব্যবহার করলে TypeScript বাধ্য করে আগে type check করতে। সরাসরি value use করা যায় না।

```ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase()); // ✅ safe
}
```

---

### 🔍 Type Narrowing Concept

Type narrowing মানে হলো একটি general type (যেমন `unknown`) কে ধীরে ধীরে specific type এ নিয়ে আসা।

এটা করা হয়:

* `typeof`
* `instanceof`
* custom checks

```ts
if (typeof data === "number") {
  console.log(data.toFixed(2));
}
```

---

### 🧠 Conclusion

* `any` = unsafe, no type protection ❌
* `unknown` = safe, forced checking ✅
* Type narrowing = safer coding practice

👉 Professional TypeScript development এ `unknown` ব্যবহার করা best practice।

---
