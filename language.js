const DefaultLanguageID = "zh-CHT";
const LanguageList = [
	"zh-CHT",
	"zh-CHS",
	"ja",
	"en"
];

async function LanguageSystem() {
	//言語を検出
	let LID = DetectLanguage();
	if (LID == null) {
		LID = DefaultLanguageID;
	}

	let LanguageData = await GetLanguageFile(LID);
	let DefaultLanguageData = GetLanguageFile(DefaultLanguageID);

	//言語を当てはめる
	document.querySelectorAll("[data-LKEY]").forEach((EL)=>{
		const KEY = EL.dataset.lkey;
		if (LanguageData[KEY] != null) {
			//指定の言語
			EL.innerHTML = LanguageData[KEY];
		} else if(DefaultLanguageData[KEY] != null) {
			//デフォ言語
			EL.innerHTML = DefaultLanguageData[KEY];
		} else {
			//無い
			EL.innerHTML = KEY;
		}
	});
}

function DetectLanguage() {
	const URLParam = new URLSearchParams(window.location.search);
	if (URLParam.get("lang") != null) {
		//指定された言語を返す
		return LanguageList.find(ROW=>ROW == URLParam.get("lang"));
	} else {
		//ブラウザの言語を当てる
		return LanguageList.find(ROW=>ROW == navigator.languages[0]);
	}
}

async function GetLanguageFile(LID) {
	let LanguageData = {};
	let AJAX = await fetch("Language/" + LID + ".lang");
	if (AJAX.ok) {
		const Data = await AJAX.text();
		Data.split("\n").forEach(Line => {
			const Index = Line.indexOf("=");
			if (Index !== -1) {
				const KEY = Line.substring(0, Index);
				const VAL = Line.substring(Index + 1);

				LanguageData[KEY] = VAL;
			}
		});

		return LanguageData;
	} else {
		alert("言語ファイルを読み込めませんでした");
	}
}