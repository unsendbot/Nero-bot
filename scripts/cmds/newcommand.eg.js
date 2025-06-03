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
		name: "commandName", // اسم الأمر، لازم يكون فريد ومميز
		version: "1.1", // إصدار الأمر
		author: "SIFOANTER", // صاحب الأمر
		countDown: 5, // وقت الانتظار بين كل مرة تستخدم فيها الأمر (بالثواني)
		role: 0, // رتبة المستخدم المسموح له باستخدام الأمر (0: مستخدم عادي، 1: أدمن المجموعة، 2: مالك البوت)
		shortDescription: {
			ar: "هذا وصف قصير للأمر",
			en: "this is short description of command"
		}, // وصف قصير للأمر
		description: {
			ar: "هذا وصف طويل للأمر",
			en: "this is long description of command"
		}, // وصف طويل للأمر
		category: "categoryName", // تصنيف الأمر داخل البوت
		guide: {
			ar: "هذا شرح استخدام الأمر",
			en: "this is guide of command"
		} // طريقة استخدام الأمر
	},

	langs: {
		ar: {
			hello: "مرحبا",
			helloWithName: "أهلا، معرفك على فيسبوك هو %1"
		}, // اللغة العربية
		en: {
			hello: "hello world",
			helloWithName: "hello, your facebook id is %1"
		} // اللغة الإنجليزية
	},

	// هذه الدالة يتم تنفيذها عندما يتم تشغيل الأمر
	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
		// يمكنك تجربة طباعة المتغيرات لفهمها باستعمال console.log()

		// getLang هي دالة تجيب الترجمة المناسبة حسب اللغة
		message.reply(getLang("hello"));

		// وإذا تحب تستخدم الترجمة مع قيمة (مثلاً ID) استعمل السطر التالي بعد إزالة // من البداية:
		// message.reply(getLang("helloWithName", event.senderID));
	}
};