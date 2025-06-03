<h1 align="center" style="color: yellow; font-size: 40px;">💛 NERO BY SIFO ANTER 💛</h1>
<p align="center">بوت نيرو بوت مسنجر جميل تم تطويره من قبل سيف الدين عنتر</p>
<p align="center">
  <a href="https://www.facebook.com/sifo.anter.2025">
    <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
  </a>
</p>

---

## 📸 صور من البوت

> 🔼 هنا يمكن وضع روابط الصور أو الـ GIF الخاصة بالبوت

---

## ⚙️ لغة البرمجة

- JavaScript
- Node.js

---

## 📦 المتطلبات

- Node.js v20

---

## 🧰 طريقة التثبيت والتشغيل

> ⏳ سيتم وضع خطوات التثبيت هنا لاحقًا...

---

## 🚀 طريقة الاستخدام

> 🧾 سيتم شرح الاستخدام لاحقًا...

---

## 📚 مثال لإنشاء أمر جديد في البوت

`javascript
/**
 * @عربي
 * أولاً لازم تكون عندك معرفة بـ JavaScript مثل المتغيرات، الدوال، الحلقات، المصفوفات، الكائنات، الـ Promise، async/await،... تقدر تتعلم أكثر من هنا:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript أو من هنا: https://www.w3schools.com/js/
 * بعد ذلك لازم تتعلم شوية على Node.js مثل require، module.exports،... تقدر تشوف هذا الرابط: https://nodejs.org/en/docs/
 * وأيضًا لازم تعرف كيف تستعمل واجهة برمجة التطبيقات غير الرسمية لفيسبوك مثل api.sendMessage، api.changeNickname،... تقدر تشوف التوثيق من هنا:
 * عندي في قناة
 * إذا كان اسم الملف ينتهي بـ `.eg.js` فلن يتم تحميله في البوت، إذا حبيت يتفاعل مع البوت لازم تغير الامتداد إلى `.js`
 */

module.exports = {
 config: {
  name: "commandName",
  version: "1.1",
  author: "SIFOANTER",
  countDown: 5,
  role: 0,
  shortDescription: {
   ar: "هذا وصف قصير للأمر",
   en: "this is short description of command"
  },
  description: {
   ar: "هذا وصف طويل للأمر",
   en: "this is long description of command"
  },
  category: "categoryName",
  guide: {
   ar: "هذا شرح استخدام الأمر",
   en: "this is guide of command"
  }
 },

 langs: {
  ar: {
   hello: "مرحبا",
   helloWithName: "أهلا، معرفك على فيسبوك هو %1"
  },
  en: {
   hello: "hello world",
   helloWithName: "hello, your facebook id is %1"
  }
 },

 onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
  message.reply(getLang("hello"));
  // message.reply(getLang("helloWithName", event.senderID));
 }
};
