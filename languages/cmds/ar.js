module.exports = {
	// You can customize the language here or directly in the command files
	onlyadminbox: {
		description: "تشغيل/إيقاف وضع استخدام البوت من قبل المشرفين فقط",
		guide: "   {pn} [تشغيل | إيقاف]",
		text: {
			turnedOn: "تم تفعيل الوضع: فقط مشرفو المجموعة يمكنهم استخدام البوت",
			turnedOff: "تم تعطيل الوضع: يمكن لجميع أعضاء المجموعة استخدام البوت",
			syntaxError: "خطأ في الصياغة، استخدم فقط {pn} on أو {pn} off"
		}
	},
	adduser: {
		description: "إضافة مستخدم إلى دردشة المجموعة الخاصة بك",
		guide: "   {pn} [رابط الملف الشخصي | المعرف]",
		text: {
			alreadyInGroup: "المستخدم موجود بالفعل في المجموعة",
			successAdd: "- تمت إضافة %1 أعضاء بنجاح إلى المجموعة",
			failedAdd: "- فشل في إضافة %1 أعضاء إلى المجموعة",
			approve: "- تمت إضافة %1 أعضاء إلى قائمة الموافقة",
			invalidLink: "يرجى إدخال رابط فيسبوك صالح",
			cannotGetUid: "لا يمكن الحصول على UID لهذا المستخدم",
			linkNotExist: "رابط الملف الشخصي هذا غير موجود",
			cannotAddUser: "تم حظر البوت أو أن هذا المستخدم يمنع الغرباء من إضافته إلى المجموعات"
		}
	},
	admin: {
		description: "إضافة، إزالة، تعديل صلاحيات المشرف",
		guide: "   {pn} [add | -a] <uid>: Add admin role for user\n\t  {pn} [remove | -r] <uid>: Remove admin role of user\n\t  {pn} [list | -l]: List all admins",
		text: {
			added: "✅ | تمت إضافة صلاحيات المشرف لـ %1 مستخدم:\n%2",
			alreadyAdmin: "\n⚠️ | %1 مستخدم لديه بالفعل صلاحيات المشرف:\n%2",
			missingIdAdd: "⚠️ | يرجى إدخال المعرف أو الإشارة إلى المستخدم لإضافة صلاحيات المشرف",
			removed: "✅ | تمت إزالة صلاحيات المشرف عن %1 مستخدم:\n%2",
			notAdmin: "⚠️ | %1 مستخدم لا يملك صلاحيات المشرف:\n%2",
			missingIdRemove: "⚠️ | يرجى إدخال المعرف أو الإشارة إلى المستخدم لإزالة صلاحيات المشرف",
			listAdmin: "👑 | قائمة المشرفين:\n%1"
		}
	},
	adminonly: {
		description: "turn on/off only admin can use bot",
		guide: "{pn} [on | off]",
		text: {
			turnedOn: "Turned on the mode only admin can use bot",
			turnedOff: "Turned off the mode only admin can use bot",
			syntaxError: "خطأ في الصياغة، استخدم فقط {pn} on أو {pn} off"
		}
	},
	all: {
		description: "إشارة لجميع الأعضاء في دردشة المجموعة",
		guide: "{pn} [محتوى | بدون]"
	},
	anime: {
		description: "صورة أنمي عشوائية",
		guide: "{pn} <endpoint>\n   List of endpoint: neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch",
		text: {
			loading: "يتم تجهيز الصورة، يرجى الانتظار...",
			error: "حدث خطأ، يرجى المحاولة لاحقًا"
		}
	},
	antichangeinfobox: {
		description: "تشغيل/إيقاف منع تغيير إعدادات المجموعة",
		guide: "   {pn} avt [on | off]: anti change avatar box chat\n   {pn} name [on | off]: anti change name box chat\n   {pn} theme [on | off]: anti change theme (chủ đề) box chat\n   {pn} emoji [on | off]: anti change emoji box chat",
		text: {
			antiChangeAvatarOn: "تم تفعيل منع تغيير صورة المجموعة",
			antiChangeAvatarOff: "تم إيقاف منع تغيير صورة المجموعة",
			missingAvt: "لم تقم بتعيين صورة للمجموعة",
			antiChangeNameOn: "تم تفعيل منع تغيير اسم المجموعة",
			antiChangeNameOff: "تم إيقاف منع تغيير اسم المجموعة",
			antiChangeThemeOn: "تم تفعيل منع تغيير السمة box chat",
			antiChangeThemeOff: "تم إيقاف منع تغيير السمة box chat",
			antiChangeEmojiOn: "تم تفعيل منع تغيير الإيموجي في المجموعة",
			antiChangeEmojiOff: "تم إيقاف منع تغيير الإيموجي في المجموعة",
			antiChangeAvatarAlreadyOn: "المجموعة حالياً تمنع تغيير الصورة الرمزية",
			antiChangeNameAlreadyOn: "المجموعة حالياً تمنع تغيير الاسم",
			antiChangeThemeAlreadyOn: "المجموعة حالياً تمنع تغيير السمة",
			antiChangeEmojiAlreadyOn: "المجموعة حالياً تمنع تغيير الإيموجي"
		}
	},
	appstore: {
		description: "البحث عن تطبيق في متجر التطبيقات",
		text: {
			missingKeyword: "لم تقم بإدخال أي كلمة مفتاحية",
			noResult: "لم يتم العثور على نتائج للكلمة المفتاحية %1"
		}
	},
	autosetname: {
		description: "تغيير تلقائي للقب العضو الجديد",
		guide: "   {pn} set <nickname>: use to set config to auto change nickname, with some shortcuts:\n   + {userName}: name of new member\n   + {userID}: member id\n   Example:\n    {pn} set {userName} 🚀\n\n   {pn} [تشغيل | إيقاف]: use to turn on/off this feature\n\n   {pn} [view | info]: show current config",
		text: {
			missingConfig: "يرجى إدخال الإعداد المطلوب",
			configSuccess: "تم ضبط الإعدادات بنجاح",
			currentConfig: "The current autoSetName configuration in your chat group is:\n%1",
			notSetConfig: "مجموعتك لم تقم بتعيين إعداد تغيير الألقاب تلقائيًا",
			syntaxError: "خطأ في الصياغة، فقط \"{pn} on\" or \"{pn} off\" يمكن استخدامه",
			turnOnSuccess: "تم تفعيل ميزة تغيير الألقاب تلقائيًا",
			turnOffSuccess: "تم تعطيل ميزة تغيير الألقاب تلقائيًا",
			error: "حدث خطأ أثناء استخدام ميزة تغيير الألقاب تلقائيًا، جرّب تعطيل روابط الدعوة في المجموعة ثم أعد المحاولة"
		}
	},
	avatar: {
		description: "إنشاء صورة أنمي رمزية مع توقيع",
		guide: "{p}{n} <character id or character name> | <background text> | <signature> | <background color name or hex color>\n{p}{n} help: view how to use this command",
		text: {
			initImage: "يتم تجهيز الصورة، يرجى الانتظار...",
			invalidCharacter: "Currently there are only %1 characters on the system, please enter a character id less than",
			notFoundCharacter: "لم يتم العثور على شخصية باسم %1 في القائمة",
			errorGetCharacter: "An error occurred while getting character data:\n%1: %2",
			success: "✅ صورتك الرمزية\nالشخصية: %1\nالمعرف: %2\nنص الخلفية: %3\nالتوقيع: %4\nاللون: %5",
			افتراضيColor: "افتراضي",
			error: "An error occurred\n%1: %2"
		}
	},
	badwords: {
		description: "تشغيل/إيقاف/إضافة/إزالة تحذير الكلمات الممنوعة, if a member violates, he will be warned, the second time he will be kicked out of the chat box",
		guide: "   {pn} add <words>: add banned words (you can add multiple words separated by commas \",\" or vertical bars \"|\")\n   {pn} delete <words>: delete banned words (you can delete multiple words separated by commas \",\" or vertical bars \"|\")\n   {pn} list <hide | leave blank>: turn off warning (add \"hide\" to hide banned words)\n   {pn} unwarn [<userID> | <@tag>]: remove 1 warning of 1 member\n   {pn} on: turn off warning\n   {pn} off: turn on warning",
		text: {
			onText: "on",
			offText: "off",
			onlyAdmin: "⚠️ | فقط المشرفين يمكنهم إضافة كلمات ممنوعة إلى القائمة",
			missingWords: "⚠️ | لم تقم بإدخال الكلمات الممنوعة",
			addedSuccess: "✅ | تمت إضافة %1 كلمات ممنوعة إلى القائمة",
			alreadyExist: "❌ | %1 كلمات ممنوعة موجودة مسبقًا في القائمة: %2",
			tooShort: "⚠️ | %1 كلمات ممنوعة لا يمكن إضافتها لأنها أقصر من حرفين: %2",
			onlyAdmin2: "⚠️ | فقط المشرفين يمكنهم حذف كلمات ممنوعة من القائمة",
			missingWords2: "⚠️ | لم تقم بإدخال الكلمات المراد حذفها",
			deletedSuccess: "✅ | تم حذف %1 كلمات ممنوعة من القائمة",
			notExist: "❌ | %1 كلمات ممنوعة غير موجودة في القائمة: %2",
			emptyList: "⚠️ | قائمة الكلمات الممنوعة في مجموعتك فارغة حاليًا",
			badWordsList: "📑 | قائمة الكلمات الممنوعة في مجموعتك: %1",
			onlyAdmin3: "⚠️ | Only admins can %1 this feature",
			turnedOnOrOff: "✅ | تم %1 تحذير الكلمات الممنوعة",
			onlyAdmin4: "⚠️ | Only admins can delete banned words warning",
			missingTarget: "⚠️ | You haven't entered user ID or tagged user",
			notWarned: "⚠️ | المستخدم %1 لم يتلقَ تحذيرًا بشأن الكلمات الممنوعة",
			removedWarn: "✅ | User %1 | %2 has been removed 1 banned words warning",
			warned: "⚠️ | تم اكتشاف الكلمة الممنوعة \"%1\" في رسالتك، إذا واصلت المخالفة سيتم طردك من المجموعة.",
			warned2: "⚠️ | Banned words \"%1\" have been detected in your message, لقد خالفت مرتين وسيتم طردك من المجموعة.",
			needAdmin: "يحتاج البوت إلى صلاحيات المشرف لطرد الأعضاء المحظورين",
			unwarned: "✅ | تمت إزالة تحذير الكلمات الممنوعة عن المستخدم %1 | %2"
		}
	},
	balance: {
		description: "عرض رصيدك أو رصيد الشخص المشار إليه",
		guide: "   {pn}: view your money\n   {pn} <@tag>: view the money of the tagged person",
		text: {
			money: "لديك %1$",
			moneyOf: "%1 لديه %2$"
		}
	},
	batslap: {
		description: "Batslap image",
		text: {
			noTag: "يجب عليك الإشارة إلى الشخص الذي تريد صفعه"
		}
	},
	busy: {
		description: "تفعيل وضع عدم الإزعاج، عند الإشارة إليك سيقوم البوت بإشعارهم",
		guide: "   {pn} [empty | <reason>]: turn on do not disturb mode\n   {pn} off: turn off do not disturb mode",
		text: {
			turnedOff: "✅ | تم إيقاف وضع عدم الإزعاج",
			turnedOn: "✅ | تم تفعيل وضع عدم الإزعاج",
			turnedOnWithReason: "✅ | تم تفعيل وضع عدم الإزعاج with reason: %1",
			alreadyOn: "المستخدم %1 مشغول حاليًا",
			alreadyOnWithReason: "المستخدم %1 مشغول حاليًا with reason: %2"
		}
	},
	callad: {
		description: "إرسال بلاغ أو ملاحظة أو خطأ إلى مشرف البوت",
		guide: "   {pn} <message>",
		text: {
			missingMessage: "يرجى إدخال الرسالة التي تريد إرسالها إلى المشرف",
			sendByGroup: "\n- Sent from group: %1\n- Thread المعرف: %2",
			sendByUser: "\n- Sent from user",
			content: "\n\nContent:\n─────────────────\n%1\n─────────────────\nReply this message to send message to user",
			success: "تم إرسال رسالتك إلى المشرف بنجاح!",
			reply: "📍 رد من المشرف %1:\n─────────────────\n%2\n─────────────────\nقم بالرد على هذه الرسالة لمواصلة المحادثة مع المشرف",
			replySuccess: "تم إرسال ردك إلى المشرف بنجاح!",
			feedback: "📝 ملاحظة من المستخدم %1:\n- User المعرف: %2%3\n\nContent:\n─────────────────\n%4\n─────────────────\nReply this message to send message to user",
			replyUserSuccess: "تم إرسال ردك إلى المستخدم بنجاح!"
		}
	},
	cmd: {
		description: "إدارة ملفات الأوامر الخاصة بك",
		guide: "{pn} load <command file name>\n{pn} loadAll\n{pn} install <url> <command file name>: Download and install a command file from a url, url is the path to the file (raw)",
		text: {
			missingFileName: "⚠️ | يرجى إدخال اسم الأمر الذي تريد إعادة تحميله",
			loaded: "✅ | تم تحميل الأمر \"%1\" بنجاح",
			loadedError: "❌ | فشل في تحميل الأمر \"%1\" بسبب الخطأ\n%2: %3",
			loadedSuccess: "✅ | Loaded successfully \"%1\" command",
			loadedFail: "❌ | Failed to load \"%1\" command\n%2",
			missingCommandNameUnload: "⚠️ | يرجى إدخال اسم الأمر الذي تريد إلغاء تحميله",
			unloaded: "✅ | تم إلغاء تحميل الأمر \"%1\" بنجاح",
			unloadedError: "❌ | Failed to unload command \"%1\" with error\n%2: %3",
			missingUrlCodeOrFileName: "⚠️ | يرجى إدخال الرابط أو الكود واسم ملف الأمر الذي تريد تثبيته",
			missingUrlOrCode: "⚠️ | Please enter the url or code of the command file you want to install",
			missingFileNameInstall: "⚠️ | Please enter the file name to save the command (with .js extension)",
			invalidUrlOrCode: "⚠️ | Unable to get command code",
			alreadExist: "⚠️ | ملف الأمر موجود بالفعل، هل أنت متأكد من رغبتك في استبداله؟\nReact to this message to continue",
			installed: "✅ | تم تثبيت الأمر \"%1\" بنجاح، وتم حفظ الملف في %2",
			installedError: "❌ | Failed to install command \"%1\" with error\n%2: %3",
			missingFile: "⚠️ | Command file \"%1\" not found",
			invalidFileName: "⚠️ | Invalid command file name",
			unloadedFile: "✅ | Unloaded command \"%1\""
		}
	},
	count: {
		description: "View the number of messages of all members or yourself (since the bot joined the group)",
		guide: "   {pn}: used to view the number of messages of you\n   {pn} @tag: used to view the number of messages of those tagged\n   {pn} all: used to view the number of messages of all members",
		text: {
			count: "Number of messages of members:",
			endMessage: "Those who do not have a name in the list have not sent any messages.",
			page: "Page [%1/%2]",
			reply: "Reply to this message with the page number to view more",
			result: "%1 rank %2 with %3 messages",
			yourResult: "You are ranked %1 and have sent %2 messages in this group",
			invalidPage: "Invalid page number"
		}
	},
	customrankcard: {
		description: "Design rank card by your own",
		guide: {
			body: "   {pn} [maincolor | subcolor | linecolor | progresscolor | alphasubcolor | textcolor | namecolor | expcolor | rankcolor | levelcolor | reset] <value>"
				+ "\n   In which: "
				+ "\n  + maincolor | background <value>: main background of rank card"
				+ "\n  + subcolor <value>: sub background"
				+ "\n  + linecolor <value>: color of line between main and sub background"
				+ "\n  + expbarcolor <value>: color of exp bar"
				+ "\n  + progresscolor <value>: color of current exp bar"
				+ "\n  + alphasubcolor <value>: opacity of sub background (from 0 -> 1)"
				+ "\n  + textcolor <value>: color of text (hex color or rgba)"
				+ "\n  + namecolor <value>: color of name"
				+ "\n  + expcolor <value>: color of exp"
				+ "\n  + rankcolor <value>: color of rank"
				+ "\n  + levelcolor <value>: color of level"
				+ "\n    • <value> can be hex color, rgb, rgba, gradient (each color is separated by space) or image url"
				+ "\n    • If you want to use gradient, please enter many colors separated by space"
				+ "\n   {pn} reset: reset all to افتراضي"
				+ "\n   Example:"
				+ "\n    {pn} maincolor #fff000"
				+ "\n    {pn} subcolor rgba(255,136,86,0.4)"
				+ "\n    {pn} reset",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_1.jpg`]: "https://i.ibb.co/BZ2Qgs1/image.png",
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_2.png`]: "https://i.ibb.co/wy1ZHHL/image.png"
			}
		},
		text: {
			invalidImage: "Invalid image url, please choose an url with image destination (jpg, jpeg, png, gif), you can upload image to https://imgbb.com/ and choose \"get direct link\" to get image url",
			invalidAttachment: "Invalid attachment, please choose an image file",
			invalidColor: "Invalid color code, please choose a hex color code (6 digits) or rgba color code",
			notSupportImage: "Url image is not supported with option \"%1\"",
			success: "Your changes have been saved, here is a preview",
			reseted: "All settings have been reset to افتراضي",
			invalidAlpha: "Please choose a number from 0 -> 1"
		}
	},
	dhbc: {
		description: "play game catch the word",
		guide: "{pn}",
		text: {
			reply: "Please reply this message with the answer\n%1",
			isSong: "This is the name of the song of the singer %1",
			notPlayer: "⚠️ You are not the player of this question",
			correct: "🎉 Congratulations you have answered correctly and received %1$",
			wrong: "⚠️ You have answered incorrectly"
		}
	},
	emojimix: {
		description: "Mix 2 emoji together",
		guide: "   {pn} <emoji1> <emoji2>\n   Example:  {pn} 🤣 🥰"
	},
	eval: {
		description: "اختبار الكود بسرعة",
		guide: "{pn} <code to test>",
		text: {
			error: "❌ حدث خطأ:"
		}
	},
	event: {
		description: "Manage your event command files",
		guide: "{pn} load <command file name>\n{pn} loadAll\n{pn} install <url> <command file name>: Download and load event command, url is the path to the command file (raw)",
		text: {
			missingFileName: "⚠️ | يرجى إدخال اسم الأمر الذي تريد إعادة تحميله",
			loaded: "✅ | Loaded event command \"%1\" successfully",
			loadedError: "❌ | Loaded event command \"%1\" failed with error\n%2: %3",
			loadedSuccess: "✅ | Loaded \"%1\" event command successfully",
			loadedFail: "❌ | Loaded event command \"%1\" failed\n%2",
			missingCommandNameUnload: "⚠️ | يرجى إدخال اسم الأمر الذي تريد إلغاء تحميله",
			unloaded: "✅ | Unloaded event command \"%1\" successfully",
			unloadedError: "❌ | Unloaded event command \"%1\" failed with error\n%2: %3",
			missingUrlCodeOrFileName: "⚠️ | يرجى إدخال الرابط أو الكود واسم ملف الأمر الذي تريد تثبيته",
			missingUrlOrCode: "⚠️ | Please enter the url or code of the command file you want to install",
			missingFileNameInstall: "⚠️ | Please enter the file name to save the command (with .js extension)",
			invalidUrlOrCode: "⚠️ | Unable to get command code",
			alreadExist: "⚠️ | ملف الأمر موجود بالفعل، هل أنت متأكد من رغبتك في استبداله؟\nReact to this message to continue",
			installed: "✅ | Installed event command \"%1\" successfully, the command file is saved at %2",
			installedError: "❌ | Installed event command \"%1\" failed with error\n%2: %3",
			missingFile: "⚠️ | File \"%1\" not found",
			invalidFileName: "⚠️ | Invalid file name",
			unloadedFile: "✅ | Unloaded command \"%1\""
		}
	},
	filteruser: {
		description: "filter group members by number of messages or locked account",
		guide: "   {pn} [<number of messages> | die]",
		text: {
			needAdmin: "⚠️ | Please add the bot as a group admin to use this command",
			confirm: "⚠️ | Are you sure you want to delete group members with less than %1 messages?\nReact to this message to confirm",
			kickByBlock: "✅ | Successfully deleted %1 members who are locked acc",
			kickByMsg: "✅ | Successfully deleted %1 members with less than %2 messages",
			kickError: "❌ | An error occurred and could not kick %1 members:\n%2",
			noBlock: "✅ | There are no members who are locked acc",
			noMsg: "✅ | There are no members with less than %1 messages"
		}
	},
	getfbstate: {
		description: "Get current fbstate",
		guide: "{pn}",
		text: {
			success: "Sent fbstate to you, please check bot's private message"
		}
	},
	grouptag: {
		description: "Tag members by group",
		guide: "   {pn} add <groupTagName> <@tags>: use to add new group tag or add members to group tag\n   Example:\n    {pn} TEAM1 @tag1 @tag2\n\n   {pn} del <groupTagName> <@tags>: use to remove members from group tag\n   Example:\n    {pn} del TEAM1 @tag1 @tag2\n\n   {pn} remove <groupTagName>: use to remove group tag\n   Example:\n    {pn} remove TEAM1\n\n   {pn} rename <groupTagName> | <newGroupTagName>: use to rename group tag\n\n   {pn} [list | all]: use to view list of group tag in your group chat\n\n   {pn} info <groupTagName>: use to view info of group tag",
		text: {
			noGroupTagName: "Please enter group tag name",
			noMention: "You haven't tagged any member to add to group tag",
			addedSuccess: "Added members:\n%1\nto group tag \"%2\"",
			addedSuccess2: "Added group tag \"%1\" with members:\n%2",
			existedInGroupTag: "Members:\n%1\nalready existed in group tag \"%2\"",
			notExistedInGroupTag: "Members:\n%1\ndoesn't exist in group tag \"%2\"",
			noExistedGroupTag: "Group tag \"%1\" doesn't exist in your group chat",
			noExistedGroupTag2: "Your group chat hasn't added any group tag",
			noMentionDel: "Please tag members to remove from group tag \"%1\"",
			deletedSuccess: "Deleted members:\n%1\nfrom group tag \"%2\"",
			deletedSuccess2: "Deleted group tag \"%1\"",
			tagged: "Tag group \"%1\":\n%2",
			noGroupTagName2: "Please enter old group tag name and new group tag name, separated by \"|\"",
			renamedSuccess: "Renamed group tag \"%1\" to \"%2\"",
			infoGroupTag: "📑 | Group name: \"%1\"\n👥 | Number of members: %2\n👨‍👩‍👧‍👦 | List of members:\n %3"
		}
	},
	help: {
		description: "View command usage",
		guide: "{pn} [empty | <page number> | <command name>]",
		text: {
			help: "╭─────────────⭓\n%1\n├─────⭔\n│ Page [ %2/%3 ]\n│ Currently, the bot has %4 commands that يمكن استخدامه\n│ » Type %5help <page> to view the command list\n│ » Type %5help to view the details of how to use that command\n├────────⭔\n│ %6\n╰─────────────⭓",
			help2: "%1├───────⭔\n│ » Currently, the bot has %2 commands that يمكن استخدامه\n│ » Type %3help <command name> to view the details of how to use that command\n│ %4\n╰─────────────⭓",
			commandNotFound: "Command \"%1\" does not exist",
			getInfoCommand: "╭── NAME ────⭓\n│ %1\n├── INFO\n│ Description: %2\n│ Other names: %3\n│ Other names in your group: %4\n│ Version: %5\n│ Role: %6\n│ Time per command: %7s\n│ Author: %8\n├── Usage\n%9\n├── Notes\n│ The content inside <XXXXX> can be changed\n│ The content inside [a|b|c] is a or b or c\n╰──────⭔",
			doNotHave: "Do not have",
			roleText0: "0 (All users)",
			roleText1: "1 (Group administrators)",
			roleText2: "2 (Admin bot)",
			roleText0setRole: "0 (set role, all users)",
			roleText1setRole: "1 (set role, group administrators)",
			pageNotFound: "Page %1 does not exist"
		}
	},
	kick: {
		description: "Kick member out of chat box",
		guide: "{pn} @tags: use to kick members who are tagged"
	},
	loadconfig: {
		description: "Reload config of bot"
	},
	moon: {
		description: "view moon image on the night you choose (dd/mm/yyyy)",
		guide: "  {pn} <day/month/year>\n   {pn} <day/month/year> <caption>",
		text: {
			invalidDateFormat: "Please enter a valid date in DD/MM/YYYY format",
			error: "An error occurred while getting the moon image of %1",
			invalidDate: "%1 is not a valid date",
			caption: "- Moon image on %1"
		}
	},
	notification: {
		description: "Send notification from admin to all box",
		guide: "{pn} <tin nhắn>",
		text: {
			missingMessage: "Please enter the message you want to send to all groups",
			notification: "Notification from admin bot to all chat groups (do not reply to this message)",
			sendingNotification: "Start sending notification from admin bot to %1 chat groups",
			sentNotification: "✅ Sent notification to %1 groups successfully",
			errorSendingNotification: "An error occurred while sending to %1 groups:\n %2"
		}
	},
	prefix: {
		description: "Thay đổi dấu lệnh của bot trong box chat của bạn hoặc cả hệ thống bot (chỉ admin bot)",
		guide: "   {pn} <new prefix>: change new prefix in your box chat\n   Example:\n    {pn} #\n\n   {pn} <new prefix> -g: change new prefix in system bot (only admin bot)\n   Example:\n    {pn} # -g\n\n   {pn} reset: change prefix in your box chat to افتراضي",
		text: {
			reset: "Your prefix has been reset to افتراضي: %1",
			onlyAdmin: "Only admin can change prefix of system bot",
			confirmGlobal: "Please react to this message to confirm change prefix of system bot",
			confirmThisThread: "Please react to this message to confirm change prefix in your box chat",
			successGlobal: "Changed prefix of system bot to: %1",
			successThisThread: "Changed prefix in your box chat to: %1",
			myPrefix: "🌐 System prefix: %1\n🛸 Your box chat prefix: %2"
		}
	},
	rank: {
		description: "View your level or the level of the tagged person. You can tag many people"
	},
	rankup: {
		description: "Turn on/off level up notification",
		guide: "{pn} [on | off]",
		text: {
			syntaxError: "خطأ في الصياغة، استخدم فقط {pn} on أو {pn} off",
			turnedOn: "Turned on level up notification",
			turnedOff: "Turned off level up notification",
			notiMessage: "🎉🎉 Congratulations on reaching level %1"
		}
	},
	refresh: {
		description: "refresh information of group chat or user",
		guide: "   {pn} [thread | group]: refresh information of your group chat\n   {pn} group <threadID>: refresh information of group chat by ID\n\n   {pn} user: refresh information of your user\n   {pn} user [<userID> | @tag]: refresh information of user by ID",
		text: {
			refreshMyThreadSuccess: "✅ | Refresh information of your group chat successfully!",
			refreshThreadTargetSuccess: "✅ | Refresh information of group chat %1 successfully!"
		}
	},
	rules: {
		description: "Create/view/add/edit/change position/delete group rules of you",
		guide: "   {pn} [add | -a] <rule to add>: add rule for group.\n   {pn}: view group rules.\n   {pn} [edit | -e] <n> <content after edit>: edit rule number n.\n   {pn} [move | -m] <stt1> <stt2> swap position of rule number <stt1> and <stt2>.\n   {pn} [delete | -d] <n>: delete rule number n.\n   {pn} [remove | -r]: delete all rules of group.\n\n   Example:\n    {pn} add don't spam\n    {pn} move 1 3\n    {pn} -e 1 don't spam message in group\n    {pn} -r"
	},
	sendnoti: {
		description: "Create and send notification to groups that you manage",
		guide: "   {pn} create <groupName>: Create a new notification group with name <groupName>\n   Example:\n    {pn} create TEAM1\n\n   {pn} add <groupName>: add current box chat to notification group <groupName> (you must be admin of this box chat)\n   Example:\n    {pn} add TEAM1\n\n   {pn} delete: remove current box chat from notification group <groupName> (you must be creator of this group)\n   Example:\n    {pn} delete TEAM1\n\n   {pn} send <groupName> | <message>: send notification to all groups in notification group <groupName> (you must be admin of those groups)\n   Example:\n    {pn} remove TEAM1\n\n   {pn} remove <groupName>: remove notification group <groupName> (you must be creator of notification group <groupName>)\n   Example:\n    {pn} remove TEAM1",
		text: {
			missingGroupName: "Please enter groupNoti name",
			groupNameExists: "Notification group with name %1 has been created by you before, please choose another name",
			createdGroup: "Created notification group successfully:\n- Name: %1\n- المعرف: %2",
			missingGroupNameToAdd: "Please enter groupNoti name you want to add this group chat to",
			groupNameNotExists: "You have not created/manage any notification group with name: %1",
			notAdmin: "You are not admin of this group chat",
			added: "Added current group chat to notification group: %1",
			missingGroupNameToDelete: "Please enter groupNoti name you want to delete this group chat from list",
			notInGroup: "Current group chat is not in notification group %1",
			deleted: "Deleted current group chat from notification group: %1",
			failed: "Failed to send notification to %1 group chats: \n%2",
			missingGroupNameToRemove: "Please enter groupNoti name you want to remove",
			removed: "Removed notification group: %1",
			missingGroupNameToSend: "Please enter groupNoti name you want to send message",
			groupIsEmpty: "Notification group \"%1\" is empty",
			sending: "Sending notification to %1 group chats",
			success: "Sent notification to %1 group chats in notification group \"%2\" successfully",
			notAdminOfGroup: "You are not admin of this group",
			missingGroupNameToView: "Please enter groupNoti name you want to view info",
			groupInfo: "- Group Name: %1\n - المعرف: %2\n - Created at: %3\n%4 ",
			groupInfoHasGroup: "- Has group chats: \n%1",
			noGroup: "You have not created/manage any notification group"
		}
	},
	setalias: {
		description: "Add an alias for any command in your group",
		guide: "  This command is used to add/remove alias for any command in your group\n   {pn} add <alias> <command>: add an alias for the command in your group\n   {pn} add <alias> <command> -g: add an alias for the command in the whole system (only bot admin)\nExample:\n    {pn} add ctrk customrankcard\n\n   {pn} [remove | rm] <alias> <command>: remove an alias for the command in your group\n   {pn} [remove | rm] <alias> <command> -g: remove an alias for the command in the whole system (only bot admin)\nExample:\n    {pn} rm ctrk customrankcard\n\n   {pn} list: list all alias for commands in your group\n   {pn} list -g: list all alias for commands in the whole system"
	},
	setavt: {
		description: "Change bot avatar",
		text: {
			cannotGetImage: "❌ | An error occurred while querying the image url",
			invalidImageFormat: "❌ | Invalid image format",
			changedAvatar: "✅ | Changed bot avatar successfully"
		}
	},
	setlang: {
		description: "Set افتراضي language of bot for current chat or all chats",
		guide: "   {pn} <language code ISO 639-1\n   Example:    {pn} en    {pn} vi    {pn} ja",
		text: {
			setLangForAll: "Set افتراضي language for all chats: %1",
			setLangForCurrent: "Set افتراضي language for current chat: %1",
			noPermission: "Only bot admin can use this command"
		}
	},
	setleave: {
		description: "Edit content/turn on/off leave message when member leave your group chat",
		guide: {
			body: "   {pn} on: Turn on leave message\n   {pn} off: Turn off leave message\n   {pn} text [<content> | reset]: edit text content or reset to افتراضي, available shortcuts:\n  + {userName}: name of member who leave group\n  + {userNameTag}: name of member who leave group (tag)\n  + {boxName}: name of group chat\n  + {type}: leave/kicked by admin\n  + {session}: session in day\n\n   Example:\n    {pn} text {userName} has {type} group, see you again 🤧\n\n   Reply or send a message with file with content {pn} file: to add attachment file to leave message (image, video, audio)\n\nExample:\n   {pn} file reset: reset file",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setleave/setleave_en_1.png`]: "https://i.ibb.co/2FKJHJr/guide1.png"
			}
		},
		text: {
			missingContent: "Please enter content",
			edited: "Edited leave message content of your group to:\n%1",
			reseted: "Reseted leave message content",
			noFile: "No leave message attachment file to reset",
			resetedFile: "Reseted leave message attachment file successfully",
			missingFile: "Please reply this message with image/video/audio file",
			addedFile: "Added %1 attachment file to your leave message"
		}
	},
	setname: {
		description: "Change nickname of all members in chat or members tagged by a format",
		guide: {
			body: "   {pn} <nick name>: change nickname of yourself\n   {pn} @tags <nick name>: change nickname of members tagged\n   {pn} all <nick name>: change nickname of all members in chat\n\nWith available shortcuts:\n   + {userName}: name of member\n   + {userID}: ID of member\n\n   Example: (see image)",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_1.png`]: "https://i.ibb.co/gFh23zb/guide1.png",
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_2.png`]: "https://i.ibb.co/BNWHKgj/guide2.png"
			}
		},
		text: {
			error: "An error has occurred, try turning off the invite link feature in the group and try again later"
		}
	},
	setrole: {
		description: "Edit role of command (commands with role < 2)",
		guide: "   {pn} <commandName> <new role>: set new role for command\n   With:\n   + <commandName>: command name\n   + <new role>: new role of command with:\n   + <new role> = 0: command يمكن استخدامه by all members in group\n   + <new role> = 1: command يمكن استخدامه by admin only\n   + <new role> = افتراضي: reset role of command to افتراضي\n   Example:\n    {pn} rank 1: (command rank يمكن استخدامه by admin only)\n    {pn} rank 0: (command rank يمكن استخدامه by all members in group)\n    {pn} rank افتراضي: reset to افتراضي\n—————\n   {pn} [viewrole|view|show]: view role of edited commands",
		text: {
			noEditedCommand: "✅ Your group has no edited command",
			editedCommand: "⚠️ Your group has edited commands:\n",
			noPermission: "❗ Only admin can use this command",
			commandNotFound: "Command \"%1\" not found",
			noChangeRole: "❗ Can't change role of command \"%1\"",
			resetRole: "Reset role of command \"%1\" to افتراضي",
			changedRole: "Changed role of command \"%1\" to %2"
		}
	},
	setwelcome: {
		description: "Edit welcome message content when new member join your group chat",
		guide: {
			body: "   {pn} text [<content> | reset]: edit text content or reset to افتراضي, with some shortcuts:\n  + {userName}: new member name\n  + {userNameTag}: new member name (tag)\n  + {boxName}:  group chat name\n  + {multiple}: you || you guys\n  + {session}:  session in day\n\n   Example:\n    {pn} text Hello {userName}, welcome to {boxName}, have a nice day {multiple}\n\n   Reply (phản hồi) or send a message with file with content {pn} file: to add file attachments to welcome message (image, video, audio)\n\n   Example:\n    {pn} file reset: delete file attachments",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setwelcome/setwelcome_en_1.png`]: "https://i.ibb.co/vsCz0ks/setwelcome-en-1.png"
			}
		},
		text: {
			missingContent: "Please enter welcome message content",
			edited: "Edited welcome message content of your group to: %1",
			reseted: "Reseted welcome message content",
			noFile: "No file attachments to delete",
			resetedFile: "Reseted file attachments successfully",
			missingFile: "Please reply this message with image/video/audio file",
			addedFile: "Added %1 file attachments to your group welcome message"
		}
	},
	shortcut: {
		description: "Add a shortcut for your message in group chat",
		text: {
			missingContent: 'Please enter the message content',
			shortcutExists: 'Shortcut "%1" already exists, react to this message to replace the content of the shortcut',
			shortcutExistsByOther: 'Shortcut %1 has been added by other member, please try another keyword',
			added: 'Added shortcut %1 => %2',
			addedAttachment: ' with %1 attachment(s)',
			missingKey: 'Please enter the keyword of the shortcut you want to delete',
			notFound: 'No shortcut found for keyword %1 in your group chat',
			onlyAdmin: 'Only administrators can delete other people\'s shortcuts',
			deleted: 'Deleted shortcut %1',
			empty: 'Your group chat has not added any shortcuts',
			message: 'Message',
			attachment: 'Attachment',
			list: 'Your shortcuts list',
			onlyAdminRemoveAll: 'Only administrators can remove all shortcuts in the group chat',
			confirmRemoveAll: 'Are you sure you want to remove all shortcuts in this group chat? (react to this message to confirm)',
			removedAll: 'Removed all shortcuts in your group chat'
		}
	},
	simsimi: {
		description: "Chat with simsimi",
		guide: "   {pn} [تشغيل | إيقاف]: turn on/off simsimi\n\n   {pn} <word>: chat with simsimi\n   Example:\n    {pn} hi",
		text: {
			turnedOn: "Turned on simsimi successfully!",
			turnedOff: "Turned off simsimi successfully!",
			chatting: "Chatting with simsimi...",
			error: "Simsimi is busy, please try again later"
		}
	},
	sorthelp: {
		description: "Sort help list",
		guide: "{pn} [name | category]",
		text: {
			savedName: "Saved sort help list by name",
			savedCategory: "Saved sort help list by category"
		}
	},
	thread: {
		description: "Manage group chat in bot system",
		guide: "   {pn} [find | -f | search | -s] <name to find>: search group chat in bot data by name\n   {pn} [find | -f | search | -s] [-j | joined] <name to find>: search group chat in bot data that bot still joined by name\n   {pn} [ban | -b] [<tid> | leave blank] <reason>: use to ban group with id <tid> or current group using bot\n   Example:\n    {pn} ban 3950898668362484 spam bot\n    {pn} ban spam too much\n    {pn} unban [<tid> | leave blank] to unban group with id <tid> or current group",
		text: {
			noPermission: "You don't have permission to use this feature",
			found: "🔎 Found %1 group matching the keyword \"%3\" in bot data:\n%3",
			notFound: "❌ No group found matching the keyword: \"%1\" in bot data",
			hasBanned: "Group with id [%1 | %2] has been banned before:\n» Reason: %3\n» Time: %4",
			banned: "Banned group with id [%1 | %2] using bot.\n» Reason: %3\n» Time: %4",
			notBanned: "Group with id [%1 | %2] is not banned using bot",
			unbanned: "Unbanned group with tid [%1 | %2] using bot",
			missingReason: "Ban reason cannot be empty",
			info: "» Box ID: %1\n» Name: %2\n» Date created data: %3\n» Total members: %4\n» Boy: %5 members\n» Girl: %6 members\n» Total messages: %7%8"
		}
	},
	tid: {
		description: "عرض معرف المجموعة (threadID) الخاصة بك",
		guide: "{pn}"
	},
	tik: {
		description: "تحميل فيديو/صور/صوت من رابط تيك توك",
		guide: "   {pn} [video|-v|v] <url>: use to download video/slide (image) from tiktok link.\n   {pn} [audio|-a|a] <url>: use to download audio from tiktok link",
		text: {
			invalidUrl: "يرجى إدخال رابط تيك توك صالح",
			downloadingVideo: "جاري تحميل الفيديو: %1...",
			downloadedSlide: "Downloaded slide: %1\n%2",
			downloadedVideo: "تم تحميل الفيديو: %1\nDownload Url: %2",
			downloadingAudio: "جاري تحميل الصوت: %1...",
			downloadedAudio: "تم تحميل الصوت: %1"
		}
	},
	trigger: {
		description: "Trigger image",
		guide: "{pn} [@tag | empty]"
	},
	uid: {
		description: "View facebook user id of user",
		guide: "   {pn}: use to view your facebook user id\n   {pn} @tag: view facebook user id of tagged people\n   {pn} <profile link>: view facebook user id of profile link",
		text: {
			syntaxError: "Please tag the person you want to view uid or leave it blank to view your own uid"
		}
	},
	unsend: {
		description: "حذف رسالة البوت",
		guide: "reply the message you want to unsend and call the command {pn}",
		text: {
			syntaxError: "يرجى الرد على الرسالة التي تريد حذفها"
		}
	},
	user: {
		description: "Manage users in bot system",
		guide: "   {pn} [find | -f | search | -s] <name to find>: search for users in bot data by name\n\n   {pn} [ban | -b] [<uid> | @tag | reply message] <reason>: to ban user with id <uid> or tagged user or sender of message replied using bot\n\n   {pn} unban [<uid> | @tag | reply message]: to unban user using bot",
		text: {
			noUserFound: "❌ No user found with name matching keyword: \"%1\" in bot data",
			userFound: "🔎 Found %1 user with name matching keyword \"%2\" in bot data:\n%3",
			uidRequired: "Uid of user to ban cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason>",
			reasonRequired: "Reason to ban user cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason>",
			userHasBanned: "User with id [%1 | %2] has been banned before:\n» Reason: %3\n» Date: %4",
			userBanned: "User with id [%1 | %2] has been banned:\n» Reason: %3\n» Date: %4",
			uidRequiredUnban: "Uid of user to unban cannot be empty",
			userNotBanned: "User with id [%1 | %2] is not banned",
			userUnbanned: "User with id [%1 | %2] has been unbanned"
		}
	},
	videofb: {
		description: "Download video/story from facebook (public)",
		guide: "   {pn} <url video/story>: tải video từ facebook",
		text: {
			missingUrl: "Please enter the facebook video/story (public) url you want to download",
			error: "An error occurred while downloading the video",
			downloading: "Downloading video for you",
			tooLarge: "Sorry, we can't download the video for you because the size is larger than 83MB"
		}
	},
	warn: {
		description: "warn member in group, if they have 3 warns, they will be banned",
		guide: "   {pn} @tag <reason>: warn member\n   {pn} list: view list of warned members\n   {pn} listban: view list of banned members\n   {pn} info [@tag | <uid> | leave blank]: view warn info of tagged member or uid or yourself\n   {pn} unban <uid>: unban member by uid\n   {pn} unwarn <uid> [<warn number> | leave blank]: unwarn member by uid and warn number\n   {pn} warn reset: reset all warn data\n⚠️ You need to set admin for bot to auto kick banned members",
		text: {
			list: "List of members who have been warned:\n%1\n\nTo view the details of the warnings, use the \"%2warn info [@tag | <uid> | leave blank]\" command: to view the warning information of the tagged person or uid or yourself",
			listBan: "List of members who have been warned 3 times and banned from the box:\n%1",
			listEmpty: "Your group has no members who have been warned",
			listBanEmpty: "Your group has no members banned from the box",
			invalidUid: "Please enter a valid uid of the person you want to view information",
			noData: "No data",
			noPermission: "❌ Only group administrators can unban members banned from the box",
			invalidUid2: "⚠️ Please enter a valid uid of the person you want to unban",
			notBanned: "⚠️ The user with id %1 has not been banned from your box",
			unbanSuccess: "✅ Successfully unbanned member [%1 | %2], currently this person can join your chat box",
			noPermission2: "❌ Only group administrators can remove warnings from members in the group",
			invalidUid3: "⚠️ Please enter a uid or tag the person you want to remove the warning",
			noData2: "⚠️ The user with id %1 has no warning data",
			notEnoughWarn: "❌ The user %1 only has %2 warnings",
			unwarnSuccess: "✅ Successfully removed the %1 warning of member [%2 | %3]",
			noPermission3: "❌ Only group administrators can reset warning data",
			resetWarnSuccess: "✅ Successfully reset warning data",
			noPermission4: "❌ Only group administrators can warn members in the group",
			invalidUid4: "⚠️ You need to tag or reply to the message of the person you want to warn",
			warnSuccess: "⚠️ Warned member %1 times %2\n- Uid: %3\n- Reason: %4\n- Date Time: %5\nThis member has been warned 3 times and banned from the box, to unban use the command \"%6warn unban <uid>\" (with uid is the uid of the person you want to unban)",
			noPermission5: "⚠️ Bot needs administrator permissions to kick banned members",
			warnSuccess2: "⚠️ Warned member %1 times %2\n- Uid: %3\n- Reason: %4\n- Date Time: %5\nIf this person violates %6 more times, they will be banned from the box",
			hasBanned: "⚠️ The following members have been warned 3 times before and banned from the box:\n%1",
			failedKick: "⚠️ An error occurred when kicking the following members:\n%1"
		}
	},
	weather: {
		description: "view the current and next 5 days weather forecast",
		guide: "{pn} <location>",
		text: {
			syntaxError: "Please enter a location",
			notFound: "Location not found: %1",
			error: "An error has occurred: %1",
			today: "Today's weather:\n%1\n🌡 Low - high temperature %2°C - %3°C\n🌡 Feels like %4°C - %5°C\n🌅 Sunrise %6\n🌄 Sunset %7\n🌃 Moonrise %8\n🏙️ Moonset %9\n🌞 Day: %10\n🌙 Night: %11"
		}
	},
	ytb: {
		description: "Download video, audio or view video information on YouTube",
		guide: "   {pn} [video|-v] [<video name>|<video link>]: use to download video from youtube.\n   {pn} [audio|-a] [<video name>|<video link>]: use to download audio from youtube\n   {pn} [info|-i] [<video name>|<video link>]: use to view video information from youtube\n   Example:\n    {pn} -v Fallen Kingdom\n    {pn} -a Fallen Kingdom\n    {pn} -i Fallen Kingdom",
		text: {
			error: "An error has occurred: %1",
			noResult: "No search results match the keyword %1",
			choose: "%1Reply to the message with the number to choose or any content to cancel",
			downloading: "Downloading video %1",
			noVideo: "Sorry, no video was found with a size less than 83MB",
			downloadingAudio: "Downloading audio %1",
			noAudio: "Sorry, no audio was found with a size less than 26MB",
			info: "💠 Title: %1\n🏪 Channel: %2\n👨‍👩‍👧‍👦 Subscriber: %3\n⏱ Video time: %4\n👀 View: %5\n👍 Like: %6\n🆙 Upload date: %7\n🔠 ID: %8\n🔗 Link: %9",
			listChapter: "\n📖 List chapter: %1\n"
		}
	}
};