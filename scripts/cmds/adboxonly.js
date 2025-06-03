module.exports = {
	config: {
		name: "onlyadminbox",
		aliases: ["وضع الادمن", "adboxonly", "مشغول"],
		version: "1.3",
		author: "SIFOANTER",
		countDown: 5,
		role: 1,
		description: {
			vi: "bật/tắt chế độ chỉ quản trị của viên nhóm mới có thể sử dụng bot",
			en: "تفعيل/تعطيل وضع فقط المشرفين في المجموعة يمكنهم استخدام البوت"
		},
		category: "إدارة المجموعة",
		guide: {
			vi: "   {pn} [on | off]: bật/tắt chế độ chỉ quản trị viên nhóm mới có thể sử dụng bot"
				+ "\n   {pn} noti [on | off]: bật/tắt thông báo khi người dùng không phải là quản trị viên nhóm sử dụng bot",
			en: "   {pn} [تشغيل | إيقاف]: لتفعيل/إيقاف وضع استخدام البوت فقط من قبل مشرفي المجموعة"
				+ "\n   {pn} noti [تشغيل | إيقاف]: لتفعيل/إيقاف التنبيه عندما يستخدم البوت شخص ليس مشرفاً"
		}
	},

	langs: {
		vi: {
			turnedOn: "Đã bật chế độ chỉ quản trị viên nhóm mới có thể sử dụng bot",
			turnedOff: "Đã tắt chế độ chỉ quản trị viên nhóm mới có thể sử dụng bot",
			turnedOnNoti: "Đã bật thông báo khi người dùng không phải là quản trị viên nhóm sử dụng bot",
			turnedOffNoti: "Đã tắt thông báo khi người dùng không phải là quản trị viên nhóm sử dụng bot",
			syntaxError: "Sai cú pháp, chỉ có thể dùng {pn} on hoặc {pn} off"
		},
		ar: {
			turnedOn: "تم تفعيل وضع السماح فقط للمشرفين باستخدام البوت في هذه المجموعة",
			turnedOff: "تم إيقاف وضع السماح فقط للمشرفين باستخدام البوت في هذه المجموعة",
			turnedOnNoti: "تم تفعيل التنبيهات عند محاولة شخص غير مشرف استخدام البوت",
			turnedOffNoti: "تم إيقاف التنبيهات عند محاولة شخص غير مشرف استخدام البوت",
			syntaxError: "صيغة غير صحيحة، استخدم فقط {pn} تشغيل أو {pn} إيقاف"
		}
	},

	onStart: async function ({ args, message, event, threadsData, getLang }) {
		let isSetNoti = false;
		let value;
		let keySetData = "data.onlyAdminBox";
		let indexGetVal = 0;

		if (args[0] == "noti") {
			isSetNoti = true;
			indexGetVal = 1;
			keySetData = "data.hideNotiMessageOnlyAdminBox";
		}

		if (args[indexGetVal] == "on" || args[indexGetVal] == "تشغيل")
			value = true;
		else if (args[indexGetVal] == "off" || args[indexGetVal] == "إيقاف")
			value = false;
		else
			return message.reply(getLang("syntaxError"));

		await threadsData.set(event.threadID, isSetNoti ? !value : value, keySetData);

		if (isSetNoti)
			return message.reply(value ? getLang("turnedOnNoti") : getLang("turnedOffNoti"));
		else
			return message.reply(value ? getLang("turnedOn") : getLang("turnedOff"));
	}
};