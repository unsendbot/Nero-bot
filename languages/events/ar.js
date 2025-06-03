module.exports = {
	// You can customize the language here or directly in the command files
	autoUpdateThreadInfo: {},
	checkwarn: {
		text: {
			warn: "تم تحذير العضو %1 ثلاث مرات من قبل وتم حظره من صندوق الدردشة\n- Name: %1\n- Uid: %2\n- لإلغاء الحظر، يرجى استخدام \"%3warn unban <uid>\" الأمر (مع uid هو معرف المستخدم للشخص الذي تريد إلغاء حظره)",
			needPermission: "يحتاج الروبوت إلى إذن المسؤول لطرد الأعضاء المحظورين"
		}
	},
	leave: {
		text: {
			session1: "صباح",
			session2: "الظهر",
			session3: "بعد الظهر",
			session4: "مساء",
			leaveType1: "غادر المجموعة",
			leaveType2: "تم طرده من المجموعة"
		}
	},
	logsbot: {
		text: {
			title: "====== سجلات الروبوت ======",
			added: "\n✅\nالحدث: تمت إضافة الروبوت إلى مجموعة جديدة\n- تمت الإضافة بواسطة: %1",
			kicked: "\n❌\nحدث: تم طرد البوت\n- تم طرد بوت بوسطة: %1",
			footer: "\n- User ID: %1\n- Group: %2\n- Group ID: %3\n- Time: %4"
		}
	},
	onEvent: {},
	welcome: {
		text: {
			session1: "صباح",
			session2: "الظهر",
			session3: "بعد الظهر",
			session4: "مساء",
			welcomeMessage: "شكرا لدعوتي للمجموعة!\nBot prefix: %1\nلعرض قائمة الأوامر، الرجاء إدخال: %1help",
			multiple1: "أنت",
			multiple2: "يا رفاق"
		}
	}
};