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
      experienceCenter: "Belford 项目体验中心",
      openHours: "每天上午11时至下午5点（周五除外）",
      register: "现在注册",
      bestAddress: "稀缺地段 最佳位置",
      frontRow: "入驻铁道镇中枢地标",
      nowSelling: "正在热销",
      closeToAction:
        "太阳塔独享铁道中最稀缺的地段。毗邻各个活动中心，接轨国际化的生活方式，与天车站和万千宠爱的铁道镇购物中心咫尺之遥。让您尽享无与伦比的设施和尊享的个人礼宾服务，带来居住生活的终极便利。",
      theSun: "太阳之耀，生活之辉 一 至臻户型璀璨重返铁道镇",
      centreStage: "现在也是您尽显光华的最佳时机",
      membership: "专属私人会所",
      membershipExclusive:
        "无与伦比的专属私人会所 Solaris Club - 24,000尺多层空间,包含豪华室内泳池与桑拿,室内羽毛球馆,高尔夫球练习室,空中花园,以及更多尊享礼遇。",
      daycare: "保证入学",
      daycareBody:
        "太阳塔二期业主将获得优先入学机会,入读位于太阳塔的世界级大型正统蒙特梭利幼儿园。",
      interior:
        "以现代和优雅为设计理念逐个精雕每套单位,一气呵成的格局分布,时尚摩登的厨房设计,每个细节都带来精致触感。室内以优雅、宁静为基调,自然木质烘托温暖气质,经典大理石与石英石彰显高贵品味。",
      bestLocation: "绝佳地段，无限可能。",
      limited: "至臻户型・邀您品鉴",
      information: "注册获邀参观Belford体验中心并了解楼盘详情",
      firstName: "名 *",
      lastName: "姓 *",
      email: "电子邮件 *",
      phone: "电话号码 *",
      howHear: "如何了解到我们",
      ifOther: "其他（请注明",
      realtor: "您是地产经纪吗",
      yes: "是",
      no: "否",
      online: "网页搜索",
      radio: "电台",
      yvr: "YVR机场",
      chinesePaper: "中文报纸/杂志",
      other: "其它",
      publication: "刊物",
      wechat: "微信",
      wordofmouth: "口口相传"
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
