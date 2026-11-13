export const contactEmail = "henrychung.dev@gmail.com"

export const ui = {
  en: {
    homeTitle: "iPhone Apps for Live Activities",
    tagline:
      "Simple iPhone apps that keep what matters on your Lock Screen with Live Activities.",
    appsHeading: "All Apps",
    // Root page. The mockups show sample Live Activity content, so they live here rather than in each app's entry.
    home: {
      heroTitle: ["Right on your Lock Screen,", "no need to open the app"],
      lockDate: "Friday, October 9",
      // Sample Live Activity values, matching the App Store screenshots.
      liveActivity: {
        workout: { mode: "AMRAP", time: "7:57", roundsLabel: "Rounds", rounds: "3" },
        currency: { from: "50 USD", to: "42.94 EUR", step: "×1,000", minus: "-1,000", plus: "+1,000" },
      },
      comingSoon: "Coming soon",
      // Mobile-only switch between the slider and a grid of all apps.
      viewSlider: "Slide through apps",
      viewGrid: "Show all apps",
    },
    otherLocale: "한국어",
    appStore: "Download on the App Store",
    // Official artwork from Apple's Marketing Tools; the guidelines forbid modifying it. Width is for a 48px height.
    appStoreBadge: {
      src: "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1790553600",
      width: 144,
    },
    // Apple requires these credit lines wherever the badge is used.
    legal:
      "Apple, the Apple logo, iPhone, Apple Watch, Digital Crown, Dynamic Island, Live Activities, watchOS, and HealthKit are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries. IOS is a trademark or registered trademark of Cisco in the U.S. and other countries and is used under license.",
    privacy: "Privacy Policy",
    support: "Support",
    privacyHint: "What data is collected and how it's used",
    supportHint: "Contact us and read common questions",
    overview: "Overview",
    search: "Search",
    searchEmpty: "No results found.",
    menu: "Menu",
    contactTitle: "Contact",
    contactDescription:
      "Tap the button to open a pre-filled email. Please fill in each line so we can look into it.",
    emailUs: "Email us",
    emailBody: "iPhone model:\niOS version:\nApp version:\n\nWhat happened:\n",
    apps: [
      {
        slug: "currency-converter",
        name: "Currency Converter",
        description:
          "Check exchange rates easily wherever your travels take you.",
        appStore:
          "https://apps.apple.com/us/app/currency-converter-vialive/id6814764703",
      },
      {
        slug: "workout-timer",
        name: "Workout Timer",
        description:
          "Use Interval, Rest, and AMRAP timers with ease.",
        appStore: "https://apps.apple.com/us/app/id6829184635",
      },
    ],
  },
  ko: {
    homeTitle: "Live Activity 아이폰 앱",
    tagline:
      "Live Activities로 필요한 정보를 잠금 화면에 바로 보여주는 심플한 iPhone 앱들.",
    appsHeading: "모든 앱",
    home: {
      heroTitle: ["앱을 열지 않아도,", "잠금 화면에서 바로"],
      lockDate: "10월 9일 금요일",
      // Sample Live Activity values, matching the App Store screenshots.
      liveActivity: {
        workout: { mode: "AMRAP", time: "7:57", roundsLabel: "라운드", rounds: "3" },
        currency: { from: "5,000 JPY", to: "46,850 KRW", step: "×1,000", minus: "-1,000", plus: "+1,000" },
      },
      comingSoon: "출시 예정",
      viewSlider: "넘겨 보기",
      viewGrid: "한눈에 보기",
    },
    otherLocale: "English",
    appStore: "App Store에서 다운로드",
    appStoreBadge: {
      src: "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/ko-kr?releaseDate=1790553600",
      width: 156,
    },
    legal:
      "Apple, Apple 로고, iPhone, Apple Watch, Digital Crown, Dynamic Island, Live Activities, watchOS 및 HealthKit은 미국 및 기타 국가에 등록된 Apple Inc.의 상표입니다. App Store는 미국 및 기타 국가에 등록된 Apple Inc.의 서비스 마크입니다. IOS는 미국 및 기타 국가에서 Cisco의 상표 또는 등록 상표이며 라이선스에 따라 사용됩니다.",
    privacy: "개인정보 처리방침",
    support: "지원",
    privacyHint: "수집하는 데이터와 이용 방식 안내",
    supportHint: "문의하기와 자주 묻는 질문",
    overview: "개요",
    search: "검색",
    searchEmpty: "검색 결과가 없습니다.",
    menu: "메뉴",
    contactTitle: "문의",
    contactDescription:
      "버튼을 누르면 양식이 채워진 이메일이 열립니다. 문제를 확인할 수 있도록 각 항목을 적어 주세요.",
    emailUs: "이메일 보내기",
    emailBody: "iPhone 모델:\niOS 버전:\n앱 버전:\n\n어떤 일이 있었나요:\n",
    apps: [
      {
        slug: "currency-converter",
        name: "환율계산기",
        description:
          "해외여행 중에 환율을 쉽고 편리하게 확인해 보세요.",
        appStore: "https://apps.apple.com/kr/app/id6814764703",
      },
      {
        slug: "workout-timer",
        name: "운동 타이머",
        description:
          "인터벌, 세트 휴식, AMRAP 타이머를 간편하게 사용하세요.",
        appStore: "https://apps.apple.com/kr/app/id6829184635",
      },
    ],
  },
}

export type Locale = keyof typeof ui
export const locales = Object.keys(ui) as Locale[]

// English has no URL prefix, so it maps to an empty [...locale] param.
export const localeParam = (l: Locale) => (l === "en" ? undefined : l)
