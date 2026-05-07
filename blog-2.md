
## Topic 2: How Generics Build Reusable and Strictly Typed Code

Generics TypeScript এর একটি powerful feature, যা reusable কিন্তু type-safe code লিখতে সাহায্য করে।

---

###  Problem Without Generics

Without generics, developers often use `any`, যা type safety নষ্ট করে দেয়।

```ts
function identity(value: any) {
  return value;
}
```

এখানে function যেকোনো type accept করে, কিন্তু কোনো guarantee নেই।

---

###  Solution With Generics

Generics ব্যবহার করলে function flexible হয় কিন্তু type safe থাকে।

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

### 🧪 Usage Example

```ts
identity<string>("Hello");
identity<number>(10);
```

 একই function বিভিন্ন type এর জন্য কাজ করছে, কিন্তু TypeScript type নিশ্চিত করছে।

---

###  Benefits of Generics

* Code reuse করা যায়
* Type safety বজায় থাকে
* Duplicate code কমে যায়
* Scalable architecture তৈরি হয়

---

###  Real-world Use Case

Generics React, API handling, Redux, and backend services এ ব্যাপকভাবে ব্যবহার হয়। এটি large-scale application সহজে manage করতে সাহায্য করে।

---

###  Conclusion

Generics TypeScript কে powerful করে কারণ:

* Reusable logic তৈরি করা যায়
* Type safety বজায় থাকে
* Flexible কিন্তু controlled code পাওয়া যায়

 তাই modern TypeScript development এ Generics খুব গুরুত্বপূর্ণ concept।

