import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      experiencePhone: "604 336 0899",
      experienceAddress: "101 – 4211 Kingsway, Burnaby",
      experienceCenter: "Belford experience center",
      openHours: "Open daily 11am to 5pm (except Friday)",
      register: "Register now",
      bestAddress: "Sun Towers is Metrotown’s best address",
      frontRow: "Get your front row seat to Metrotown",
      nowSelling: "Now Selling",
      closeToAction:
        "Close to all the action, it is home to an international lifestyle paired with the ultimate convenience of SkyTrain and destination shopping. A place of unmatched amenities and prestigious personal services.",
      theSun: "The Sun has returned to Metrotown",
      centreStage: "Now it’s your turn to take centre stage",
      membership: "Membership Included",
      membershipExclusive:
        "Enjoy the exclusive, private Solaris Club - 24,000 sf of unmatched amenity over 3 floors, including swimming pool, sauna, badminton court, golf room, Sky Garden and more.",
      daycare: "Priority Daycare Access",
      daycareBody:
        "Residents of Sun Towers 2 will be offered first access to a world-class, true Montessori daycare space located at Sun Towers.",
      interior:
        "The distinct interiors of each home echo a modern elegance,with thoughtfully designed floorplans, sleek, modern kitchens, and sophisticated touches at every turn. Interior colours are elegant and understated. Beautiful woods add warmth; classic marble and quartz bring sophistication.",
      bestLocation: "The Best Location, And So Much More.",
      limited: "Limited Opportunities",
      information:
        "Register to receive more information and an invitation to the Belford Experience Centre",
      firstName: "First Name *",
      lastName: "Last Name *",
      email: "Email *",
      phone: "Phone *",
      howHear: "How did you hear about us?",
      ifOther: "If Other ( please Specify)",
      homeType: "What type of home are you looking for? (Optional)",
      oneBedroom: "1 Bedroom",
      twoBedroom: "2 Bedroom",
      threeBedroom: "3 Bedroom",
      townhomeOrPenthouse: "Townhome or Penthouse",
      budget: "What is your budget? (Optional)",
      belowFive: "$500,000 or below",
      fiveToSevenFifty: "$500,000 - $750,000",
      sevenFiftyToOneMil: "$750,000 - $1 Million",
      aboveOneMil: "$1 Million or above",
      workingWithRealtor: "Are you working with a Realtor? (Optional)",
      realtorName: "Realtor Name (Optional)",
      realtorPhone: "Realtor Phone Number (Optional)",
      realtorBrokerage: "Realtor Brokerage (Optional)",
      realtor: "Are you a realtor?",
      yes: "Yes",
      no: "No",
      online: "Online Web Search",
      radio: "Radio",
      yvr: "YVR Airport",
      chinesePaper: "Chinese Newspaper/Print",
      other: "Other",
      publication: "Publication",
      wechat: "WeChat",
      wordofmouth: "Word of mouth"
    }
  },
  zh: {
    translation: {
      experiencePhone: "604 336 0899",
      experienceAddress: "101 – 4211 Kingsway, Burnaby",
      experienceCenter: "Belford 項目體驗中心",
      openHours: "每天上午11時至下午5點（週五除外））",
      register: "現在註冊",
      bestAddress: "稀缺地段 最佳位置",
      frontRow: "入驻鐵道鎮中樞地標",
      nowSelling: "正在熱銷",
      closeToAction:
        "太陽塔獨享鐵道中最稀缺的地段。毗鄰各個活動中心，接軌國際化的生活方式，與天車站和萬千寵愛的鐵道鎮購物中心咫尺之遙。讓您盡享無與倫比的設施和尊享的個人禮賓服務，帶來居住生活的終極便利。",
      theSun: "太陽之耀，生活之輝 一 至臻戶型璀璨重返鐵道鎮",
      centreStage: "現在也是您盡顯光華的最佳時機",
      membership: "專屬私人會所",
      membershipExclusive:
        "無與倫比的專屬私人會所 Solaris Club - 24,000尺多層空間,包含豪華室內泳池與桑拿,室內羽毛球館,高爾夫球練習室,空中花園,以及更多尊享禮遇。",
      daycare: "保證入學",
      daycareBody:
        "太陽塔二期業主將獲得優先入學機會,入讀位於太陽塔的世界級大型正統蒙特梭利幼兒園。",
      interior:
        "以現代和優雅為設計理念逐個精雕每套單位,一氣呵成的格局分佈,時尚摩登的廚房設計,每個細節都帶來精緻觸感。室內以優雅、寧靜為基調,自然木質烘托溫暖氣質,經典大理石與石英石彰顯高貴品味。",
      bestLocation: "绝佳地段，無限可能。",
      limited: "至臻戶型·邀您品鑑",
      information: "註冊獲邀參觀Belford體驗中心並了解樓盤詳情",
      firstName: "名 *",
      lastName: "姓 *",
      email: "電子郵件 *",
      phone: "電話號碼 *",
      howHear: "如何了解到我们",
      ifOther: "其他（请注明）",
      homeType: "您想選擇哪種戶型? (選填)",
      oneBedroom: "壹室",
      twoBedroom: "二室",
      threeBedroom: "三室",
      townhomeOrPenthouse: "聯排屋或頂層閣樓",
      budget: "您的预算是多少？（選填）",
      belowFive: "50万或更低",
      fiveToSevenFifty: "50万 - 75万",
      sevenFiftyToOneMil: "75万 - 100万",
      aboveOneMil: "100万或更高",
      workingWithRealtor: "您已經有自己的購房經紀人嗎？(選填)",
      realtorName: "經紀人名字 (選填)",
      realtorPhone: "經紀人電話 (選填)",
      realtorBrokerage: "經紀人所在公司 (選填)",
      realtor: "您是地產經紀嗎",
      yes: "是",
      no: "否",
      online: "網頁搜索",
      radio: "電臺",
      yvr: "YVR機場",
      chinesePaper: "中文報紙/雜誌",
      other: "其他 （請註明）",
      publication: "刊物",
      wechat: "微信",
      wordofmouth: "口口相傳"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
