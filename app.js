const SUN_CHEON = { latitude: 34.9506, longitude: 127.4872, label: "순천" };
const DESTINATIONS = [
  {
    name: "순천만국가정원", city: "순천", distance: "시내", driveMinutes: 0, latitude: 34.9506, longitude: 127.4872, type: "outdoor", emoji: "🌷",
    description: "넓은 정원과 실내 전시 공간이 있어 아이들과 천천히 둘러보기 좋아요.",
    tags: ["유모차 추천", "화장실", "반나절 코스"], weather: "맑고 온화한 날",
    map: "순천만국가정원"
  },
  {
    name: "순천만습지", city: "순천", distance: "시내", driveMinutes: 0, latitude: 34.8917, longitude: 127.5097, type: "outdoor", emoji: "🪿",
    description: "갈대밭과 생태 체험을 즐길 수 있어요. 바람이 강한 날엔 방한용품을 챙겨주세요.",
    tags: ["자연 관찰", "유아 휴식 확인", "야외 코스"], weather: "비 적고 바람 약한 날",
    map: "순천만습지"
  },
  {
    name: "낙안읍성", city: "순천", distance: "차량 약 30분", driveMinutes: 30, latitude: 34.9066, longitude: 127.3429, type: "outdoor", emoji: "🏘️",
    description: "초가집 마을을 산책하며 옛 생활 모습을 보여주기 좋아요.",
    tags: ["산책 코스", "편한 신발", "야외 코스"], weather: "맑고 온화한 날",
    map: "낙안읍성"
  },
  {
    name: "순천드라마촬영장", city: "순천", distance: "차량 약 15분", driveMinutes: 15, latitude: 34.9287, longitude: 127.5228, type: "outdoor", emoji: "🎬",
    description: "옛 거리와 세트장을 구경하는 가벼운 야외 나들이 코스예요.",
    tags: ["짧은 산책", "유모차 확인", "야외 코스"], weather: "비 적은 날",
    map: "순천드라마촬영장"
  },
  {
    name: "여수 아쿠아플라넷", city: "여수", distance: "차량 약 40분", driveMinutes: 40, latitude: 34.7604, longitude: 127.6622, type: "indoor", emoji: "🐠",
    description: "비나 추위를 피해 해양 생물을 볼 수 있는 실내 코스예요. 혼잡 시간과 입장권을 확인하세요.",
    tags: ["실내", "유아 동반", "운영시간 확인"], weather: "비·추위·더위 피하기",
    map: "여수 아쿠아플라넷"
  },
  {
    name: "광양 와인동굴", city: "광양", distance: "차량 약 30분", driveMinutes: 30, latitude: 34.9407, longitude: 127.6959, type: "indoor", emoji: "🪨",
    description: "날씨 영향을 덜 받는 실내 관람 장소예요. 유아 동반 시설과 운영 여부를 먼저 확인해 주세요.",
    tags: ["실내", "비 오는 날", "운영정보 확인"], weather: "비·추위·더위 피하기",
    map: "광양 와인동굴"
  },
  {
    name: "곡성 섬진강기차마을", city: "곡성", distance: "차량 약 45분", driveMinutes: 45, latitude: 35.2819, longitude: 127.2923, type: "outdoor", emoji: "🚂",
    description: "기차와 넓은 공간을 함께 즐길 수 있어요. 운영 시설과 탑승 시간은 방문 전에 확인하세요.",
    tags: ["기차 구경", "야외 코스", "운영시간 확인"], weather: "비 적고 바람 약한 날",
    map: "곡성 섬진강기차마을"
  },
  {
    name: "여수 아쿠아리움·엑스포 해양공원", city: "여수", distance: "차량 약 40분", driveMinutes: 40, latitude: 34.7604, longitude: 127.6622, type: "indoor", emoji: "⛵",
    description: "실내 관람 후 날씨가 좋으면 엑스포 해양공원을 짧게 산책할 수 있어요.",
    tags: ["실내외 선택", "유모차 확인", "운영정보 확인"], weather: "날씨에 따라 실내외 선택",
    map: "여수 아쿠아플라넷"
  },
  {
    name: "담양 죽녹원", city: "담양", distance: "차량 약 1시간 20분", driveMinutes: 80, latitude: 35.3212, longitude: 126.9882, type: "outdoor", emoji: "🎋",
    description: "대숲 산책길과 정자를 둘러보는 자연 나들이예요. 경사 구간이 있어 유모차 이용은 현장 정보를 확인하세요.",
    tags: ["대숲 산책", "편한 신발", "야외 코스"], weather: "비 적고 온화한 날",
    map: "담양 죽녹원"
  },
  {
    name: "광주 국립아시아문화전당", city: "광주", distance: "차량 약 1시간", driveMinutes: 60, latitude: 35.1461, longitude: 126.9191, type: "indoor", emoji: "🖼️",
    description: "전시와 어린이문화원 프로그램을 확인해 보세요. 연령별 참여 가능 여부와 예약을 미리 확인하면 좋아요.",
    tags: ["실내", "어린이 프로그램", "예약 확인"], weather: "비·추위 피하기",
    map: "국립아시아문화전당 어린이문화원"
  },
  {
    name: "전주한옥마을", city: "전주", distance: "차량 약 2시간", driveMinutes: 120, latitude: 35.8154, longitude: 127.153, type: "outdoor", emoji: "🏯",
    description: "한옥 골목과 먹거리를 천천히 즐길 수 있어요. 주말 혼잡과 주차 위치를 확인하고 유모차 동선을 계획하세요.",
    tags: ["한옥 산책", "먹거리", "주말 혼잡 확인"], weather: "비 적고 온화한 날",
    map: "전주한옥마을"
  },
  {
    name: "목포 국립해양유산전시관", city: "목포", distance: "차량 약 1시간 40분", driveMinutes: 100, latitude: 34.8118, longitude: 126.3922, type: "indoor", emoji: "⚓",
    description: "바다와 배의 역사를 실내에서 살펴볼 수 있어요. 전시 일정과 관람시간을 확인해 주세요.",
    tags: ["실내", "전시 관람", "운영시간 확인"], weather: "비·추위 피하기",
    map: "국립해양유산연구소 해양유물전시관"
  },
  {
    name: "해남 공룡박물관", city: "해남", distance: "차량 약 1시간 40분", driveMinutes: 100, latitude: 34.5735, longitude: 126.599, type: "indoor", emoji: "🦕",
    description: "공룡 전시를 중심으로 실내외를 함께 둘러볼 수 있어요. 바깥 관람 구간과 운영시간을 확인하세요.",
    tags: ["공룡 전시", "실내외 선택", "운영시간 확인"], weather: "날씨에 따라 실내외 선택",
    map: "해남 공룡박물관"
  },
  {
    name: "진주성", city: "진주", distance: "차량 약 1시간 30분", driveMinutes: 90, latitude: 35.1882, longitude: 128.0785, type: "outdoor", emoji: "🏰",
    description: "성곽과 남강 주변을 걷는 역사 나들이예요. 어린아이와 함께라면 보행로와 유모차 동선을 확인하세요.",
    tags: ["역사 산책", "강변 풍경", "편한 신발"], weather: "비 적고 온화한 날",
    map: "진주성"
  },
  {
    name: "남해 독일마을", city: "남해", distance: "차량 약 1시간 40분", driveMinutes: 100, latitude: 34.8377, longitude: 127.8925, type: "outdoor", emoji: "🏡",
    description: "바다 전망과 마을 풍경을 즐기는 코스예요. 언덕이 있어 유아 동반 이동과 주차를 확인해 주세요.",
    tags: ["바다 전망", "마을 산책", "유모차 동선 확인"], weather: "비 적고 바람 약한 날",
    map: "남해 독일마을"
  },
  {
    name: "통영 디피랑", city: "통영", distance: "차량 약 2시간 10분", driveMinutes: 130, latitude: 34.8489, longitude: 128.4342, type: "outdoor", emoji: "✨",
    description: "저녁에 즐기는 야외 미디어 산책 코스예요. 운영일·입장시간을 확인하고 아이들 방한용품을 준비하세요.",
    tags: ["야간 산책", "운영일 확인", "따뜻한 옷"], weather: "비 없고 바람 약한 저녁",
    map: "통영 디피랑"
  },
  {
    name: "부산 국립해양박물관", city: "부산", distance: "차량 약 2시간 40분", driveMinutes: 160, latitude: 35.0798, longitude: 129.0804, type: "indoor", emoji: "🐳",
    description: "해양 전시와 어린이 체험 공간이 있는 실내 코스예요. 전시·체험 운영 여부를 확인해 주세요.",
    tags: ["실내", "어린이 체험", "운영정보 확인"], weather: "비·추위 피하기",
    map: "부산 국립해양박물관"
  },
  {
    name: "경주 국립경주박물관", city: "경주", distance: "차량 약 2시간 50분", driveMinutes: 170, latitude: 35.829, longitude: 129.229, type: "indoor", emoji: "🏺",
    description: "신라 유물을 실내에서 관람하는 문화 코스예요. 어린이 해설·전시 일정과 휴관일을 확인하세요.",
    tags: ["실내", "역사 전시", "휴관일 확인"], weather: "비·추위 피하기",
    map: "국립경주박물관"
  },
  {
    name: "보성 대한다원", city: "보성", distance: "차량 약 50분", driveMinutes: 50, latitude: 34.7186, longitude: 127.0808, type: "outdoor", emoji: "🍵",
    description: "차밭 산책과 전망을 즐겨요. 언덕길이 있어 유모차로 이동하기 편한 구간인지 확인해 주세요.",
    tags: ["차밭 산책", "전망", "언덕길 확인"], weather: "비 적고 온화한 날",
    map: "보성 대한다원"
  },
  {
    name: "고흥 나로우주센터 우주과학관", city: "고흥", distance: "차량 약 1시간 30분", driveMinutes: 90, latitude: 34.4319, longitude: 127.535, type: "indoor", emoji: "🚀",
    description: "우주과학 전시와 체험을 즐기는 실내 중심 코스예요. 전시·체험 운영시간을 확인해 주세요.",
    tags: ["실내", "과학 체험", "운영시간 확인"], weather: "비·추위 피하기",
    map: "나로우주센터 우주과학관"
  },
  {
    name: "구례 지리산치즈랜드", city: "구례", distance: "차량 약 1시간", driveMinutes: 60, latitude: 35.2439, longitude: 127.4994, type: "outdoor", emoji: "🐑",
    description: "초지와 호수 주변을 둘러보는 야외 코스예요. 계절별 운영과 체험 여부를 확인하세요.",
    tags: ["동물·초지", "야외 코스", "운영 확인"], weather: "비 적고 온화한 날",
    map: "구례 지리산치즈랜드"
  },
  {
    name: "구례 화엄사", city: "구례", distance: "차량 약 1시간 10분", driveMinutes: 70, latitude: 35.2574, longitude: 127.4972, type: "outdoor", emoji: "🏯",
    description: "산사와 문화재를 둘러보는 조용한 나들이예요. 경내 이동 거리와 유아 휴식 장소를 살펴보세요.",
    tags: ["문화유산", "산책", "편한 신발"], weather: "비 적고 바람 약한 날",
    map: "구례 화엄사"
  },
  {
    name: "남원 광한루원", city: "남원", distance: "차량 약 1시간 15분", driveMinutes: 75, latitude: 35.4075, longitude: 127.3798, type: "outdoor", emoji: "🌉",
    description: "연못과 누각을 따라 천천히 걷기 좋은 전통 정원이에요.",
    tags: ["전통 정원", "가벼운 산책", "유모차 확인"], weather: "비 적고 온화한 날",
    map: "남원 광한루원"
  },
  {
    name: "임실치즈테마파크", city: "임실", distance: "차량 약 1시간 40분", driveMinutes: 100, latitude: 35.6127, longitude: 127.2786, type: "outdoor", emoji: "🧀",
    description: "넓은 테마 공간과 가족 체험을 즐겨요. 체험은 날짜별 운영과 예약 여부를 확인해 주세요.",
    tags: ["가족 체험", "넓은 공간", "예약 확인"], weather: "비 적고 온화한 날",
    map: "임실치즈테마파크"
  },
  {
    name: "장흥 정남진 편백숲 우드랜드", city: "장흥", distance: "차량 약 1시간", driveMinutes: 60, latitude: 34.6864, longitude: 126.9348, type: "outdoor", emoji: "🌲",
    description: "편백 숲길을 걸으며 쉬어가기 좋은 자연 코스예요. 숲길 경사와 유아 동선을 확인해 주세요.",
    tags: ["숲 산책", "맑은 공기", "유아 동선 확인"], weather: "비 적고 온화한 날",
    map: "장흥 정남진 편백숲 우드랜드"
  },
  {
    name: "강진 고려청자박물관", city: "강진", distance: "차량 약 1시간 20분", driveMinutes: 80, latitude: 34.5417, longitude: 126.7953, type: "indoor", emoji: "🏺",
    description: "고려청자를 살펴보는 실내 전시 코스예요. 전시와 체험 프로그램 운영을 확인하세요.",
    tags: ["실내", "도자기 전시", "체험 확인"], weather: "비·추위 피하기",
    map: "강진 고려청자박물관"
  },
  {
    name: "영암 왕인박사유적지", city: "영암", distance: "차량 약 1시간 30분", driveMinutes: 90, latitude: 34.7593, longitude: 126.6777, type: "outdoor", emoji: "🌿",
    description: "역사 공간과 정원을 함께 둘러보는 산책 코스예요. 야외 이동이 많아 날씨를 확인하세요.",
    tags: ["역사 산책", "정원", "야외 코스"], weather: "비 적고 온화한 날",
    map: "영암 왕인박사유적지"
  },
  {
    name: "나주 국립나주박물관", city: "나주", distance: "차량 약 1시간 20분", driveMinutes: 80, latitude: 34.9854, longitude: 126.7274, type: "indoor", emoji: "🏛️",
    description: "영산강 유역의 역사를 실내에서 관람해요. 어린이 체험과 휴관일을 확인해 주세요.",
    tags: ["실내", "역사 전시", "어린이 체험"], weather: "비·추위 피하기",
    map: "국립나주박물관"
  },
  {
    name: "광주 패밀리랜드", city: "광주", distance: "차량 약 1시간 10분", driveMinutes: 70, latitude: 35.1908, longitude: 126.8877, type: "outdoor", emoji: "🎡",
    description: "놀이기구와 동물원을 함께 즐길 수 있어요. 키 제한, 운휴 시설과 운영시간을 확인하세요.",
    tags: ["놀이공원", "동물원", "키 제한 확인"], weather: "비 적고 온화한 날",
    map: "광주 패밀리랜드"
  },
  {
    name: "익산 보석박물관", city: "익산", distance: "차량 약 2시간 10분", driveMinutes: 130, latitude: 36.0025, longitude: 127.0008, type: "indoor", emoji: "💎",
    description: "보석 전시를 실내에서 둘러보는 코스예요. 주변 공원은 날씨가 좋을 때 함께 즐길 수 있어요.",
    tags: ["실내", "전시 관람", "공원 연계"], weather: "비·추위 피하기",
    map: "익산 보석박물관"
  },
  {
    name: "군산 근대역사박물관", city: "군산", distance: "차량 약 2시간 40분", driveMinutes: 160, latitude: 35.9902, longitude: 126.7117, type: "indoor", emoji: "🚢",
    description: "근대 역사와 해양 문화를 실내에서 살펴봐요. 어린이 체험과 주변 이동 거리를 확인하세요.",
    tags: ["실내", "역사 전시", "구도심 연계"], weather: "비·추위 피하기",
    map: "군산 근대역사박물관"
  },
  {
    name: "사천 항공우주박물관", city: "사천", distance: "차량 약 1시간 40분", driveMinutes: 100, latitude: 35.0887, longitude: 128.0717, type: "indoor", emoji: "✈️",
    description: "항공기와 우주 관련 전시를 즐겨요. 야외 전시장도 있어 날씨와 관람 동선을 확인하세요.",
    tags: ["실내외 전시", "항공기", "운영시간 확인"], weather: "날씨에 따라 실내외 선택",
    map: "사천 항공우주박물관"
  },
  {
    name: "고성 공룡박물관", city: "고성", distance: "차량 약 2시간", driveMinutes: 120, latitude: 34.9979, longitude: 128.3227, type: "indoor", emoji: "🦖",
    description: "공룡 전시와 해안 주변을 함께 둘러볼 수 있어요. 야외 관람 구간과 휴관일을 확인하세요.",
    tags: ["공룡 전시", "실내외 선택", "휴관일 확인"], weather: "날씨에 따라 실내외 선택",
    map: "고성 공룡박물관"
  },
  {
    name: "창원과학체험관", city: "창원", distance: "차량 약 2시간 10분", driveMinutes: 130, latitude: 35.2278, longitude: 128.6818, type: "indoor", emoji: "🔭",
    description: "어린이 눈높이의 과학 전시와 체험을 즐기는 실내 코스예요. 체험 시간과 예약을 확인하세요.",
    tags: ["실내", "과학 체험", "예약 확인"], weather: "비·추위 피하기",
    map: "창원과학체험관"
  },
  {
    name: "거제 씨월드", city: "거제", distance: "차량 약 2시간 30분", driveMinutes: 150, latitude: 34.8178, longitude: 128.7041, type: "indoor", emoji: "🐬",
    description: "해양 동물을 만나는 실내 중심 코스예요. 프로그램 운영, 입장권과 연령 안내를 확인하세요.",
    tags: ["실내", "해양 동물", "프로그램 확인"], weather: "비·추위 피하기",
    map: "거제 씨월드"
  },
  {
    name: "부산 SEA LIFE 아쿠아리움", city: "부산", distance: "차량 약 2시간 40분", driveMinutes: 160, latitude: 35.1587, longitude: 129.1604, type: "indoor", emoji: "🐟",
    description: "해운대 해변과 연계할 수 있는 실내 아쿠아리움이에요. 입장 시간과 주말 혼잡을 확인하세요.",
    tags: ["실내", "해양 생물", "주말 혼잡 확인"], weather: "비·추위 피하기",
    map: "부산 SEA LIFE 아쿠아리움"
  }
];

const EVENTS = [
  { name: "순천만 갈대축제", city: "순천", months: [10, 11], season: "10~11월 무렵", emoji: "🌾" },
  { name: "순천 푸드앤아트페스티벌", city: "순천", months: [10], season: "가을 무렵", emoji: "🍲" },
  { name: "광양매화축제", city: "광양", months: [3], season: "3월 무렵", emoji: "🌸" },
  { name: "구례산수유꽃축제", city: "구례", months: [3], season: "3월 무렵", emoji: "🌼" },
  { name: "여수 거북선축제", city: "여수", months: [5], season: "5월 무렵", emoji: "🐢" },
  { name: "곡성세계장미축제", city: "곡성", months: [5], season: "5월 무렵", emoji: "🌹" },
  { name: "보성다향대축제", city: "보성", months: [5], season: "5월 무렵", emoji: "🍵" },
  { name: "보성 벌교꼬막축제", city: "보성", months: [11], season: "가을~초겨울 무렵", emoji: "🦪" },
  { name: "담양 대나무축제", city: "담양", months: [5], season: "5월 무렵", emoji: "🎋" },
  { name: "전주국제영화제", city: "전주", months: [4, 5], season: "4~5월 무렵", emoji: "🎞️" },
  { name: "목포항구축제", city: "목포", months: [10], season: "가을 무렵", emoji: "⚓" },
  { name: "해남미남축제", city: "해남", months: [11], season: "가을~초겨울 무렵", emoji: "🍚" },
  { name: "진주남강유등축제", city: "진주", months: [10], season: "가을 무렵", emoji: "🏮" },
  { name: "통영한산대첩축제", city: "통영", months: [8], season: "8월 무렵", emoji: "⛵" },
  { name: "부산불꽃축제", city: "부산", months: [11], season: "가을 무렵", emoji: "🎆" },
  { name: "경주벚꽃축제", city: "경주", months: [3, 4], season: "3~4월 무렵", emoji: "🌸" }
];

const WEATHER_CODES = {
  0: ["맑음", "☀️"], 1: ["대체로 맑음", "🌤️"], 2: ["구름 조금", "⛅"], 3: ["흐림", "☁️"],
  45: ["안개", "🌫️"], 48: ["안개", "🌫️"], 51: ["이슬비", "🌦️"], 53: ["이슬비", "🌦️"],
  55: ["강한 이슬비", "🌧️"], 56: ["어는 이슬비", "🌧️"], 57: ["어는 이슬비", "🌧️"],
  61: ["약한 비", "🌦️"], 63: ["비", "🌧️"], 65: ["강한 비", "🌧️"], 66: ["어는 비", "🌧️"],
  67: ["어는 비", "🌧️"], 71: ["약한 눈", "🌨️"], 73: ["눈", "🌨️"], 75: ["강한 눈", "❄️"],
  77: ["싸락눈", "🌨️"], 80: ["소나기", "🌦️"], 81: ["소나기", "🌧️"], 82: ["강한 소나기", "🌧️"],
  85: ["눈 소나기", "🌨️"], 86: ["강한 눈 소나기", "❄️"], 95: ["뇌우", "⛈️"], 96: ["우박 동반 뇌우", "⛈️"],
  99: ["강한 뇌우", "⛈️"]
};

const state = {
  forecast: [],
  destinationWeather: new Map(),
  selectedDate: null,
  location: SUN_CHEON,
  airQualityAvailable: false,
  family: { adults: 2, childAges: [4, 1] }
};

function loadFamilySettings() {
  try {
    const saved = JSON.parse(localStorage.getItem("weekend-outing-family") || "null");
    if (saved && Number.isInteger(saved.adults) && saved.adults >= 1 && saved.adults <= 8
      && Array.isArray(saved.childAges) && saved.childAges.length <= 8
      && saved.childAges.every((age) => Number.isInteger(age) && age >= 0 && age <= 17)) {
      state.family = { adults: saved.adults, childAges: saved.childAges };
    }
  } catch (error) {
    console.warn("저장된 가족 인원 설정을 불러오지 못했습니다.", error);
  }
}

const dayList = document.querySelector("#day-list");
const placeList = document.querySelector("#place-list");
const rankedPlaceList = document.querySelector("#ranked-place-list");
const eventList = document.querySelector("#event-list");
const weatherStatus = document.querySelector("#weather-status");

function renderChildAgeInputs() {
  const container = document.querySelector("#child-age-inputs");
  const fieldset = document.querySelector(".child-ages");
  container.replaceChildren();
  fieldset.hidden = state.family.childAges.length === 0;
  state.family.childAges.forEach((age, index) => {
    const label = document.createElement("label");
    label.className = "child-age-control";
    label.innerHTML = `아이 ${index + 1}<input type="number" min="0" max="17" step="1" value="${age}" aria-label="아이 ${index + 1} 만 나이">`;
    container.append(label);
  });
}

function renderFamilySummary() {
  const { adults, childAges } = state.family;
  const ages = childAges.length ? ` (만 ${childAges.join("세, 만 ")}세)` : "";
  document.querySelector("#family-summary").textContent =
    `♡ 어른 ${adults}명 · 아이 ${childAges.length}명${ages}`;
}

function saveFamilySettings() {
  try {
    localStorage.setItem("weekend-outing-family", JSON.stringify(state.family));
  } catch (error) {
    console.warn("가족 인원 설정을 이 기기에 저장하지 못했습니다.", error);
  }
}

function updateFamilySettings() {
  const adults = Number(document.querySelector("#adult-count").value);
  const childCount = Number(document.querySelector("#child-count").value);
  const enteredAges = [...document.querySelectorAll(".child-age-control input")];
  const currentAges = enteredAges.map((input) => {
    const age = Number(input.value);
    return Number.isInteger(age) ? Math.min(17, Math.max(0, age)) : 0;
  });

  state.family.adults = adults;
  state.family.childAges = Array.from({ length: childCount }, (_, index) =>
    currentAges[index] ?? state.family.childAges[index] ?? 4
  );
  renderChildAgeInputs();
  renderFamilySummary();
  saveFamilySettings();
  renderRecommendations();
}

function initializeFamilySettings() {
  loadFamilySettings();
  document.querySelector("#adult-count").value = String(state.family.adults);
  document.querySelector("#child-count").value = String(state.family.childAges.length);
  renderChildAgeInputs();
  renderFamilySummary();
  document.querySelector("#family-settings").addEventListener("change", updateFamilySettings);
}

function dateLabel(dateString, options) {
  return new Intl.DateTimeFormat("ko-KR", options).format(new Date(`${dateString}T12:00:00`));
}

function nextWeekendDate(days) {
  const today = new Date();
  const day = today.getDay();
  const daysUntilSaturday = (6 - day + 7) % 7;
  const preferred = new Date(today);
  preferred.setDate(today.getDate() + (daysUntilSaturday === 0 && day === 6 ? 0 : daysUntilSaturday));
  const matching = days.find((item) => item.date === toISODate(preferred));
  if (matching) return matching.date;
  return days[0]?.date || null;
}

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function weatherFor(code) {
  return WEATHER_CODES[code] || ["날씨 정보", "🌡️"];
}

function renderDays() {
  dayList.replaceChildren();
  if (!state.forecast.length) return;
  if (!state.selectedDate || !state.forecast.some((day) => day.date === state.selectedDate)) {
    state.selectedDate = nextWeekendDate(state.forecast);
  }

  state.forecast.forEach((day) => {
    const [label, icon] = weatherFor(day.code);
    const airLabel = day.aqi == null ? "AQI —" : `AQI ${Math.round(day.aqi)}`;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-card${day.date === state.selectedDate ? " selected" : ""}`;
    button.setAttribute("aria-pressed", String(day.date === state.selectedDate));
    button.setAttribute("aria-label", `${dateLabel(day.date, { month: "long", day: "numeric", weekday: "long" })}, ${label}`);
    button.innerHTML = `<span class="day-name">${dateLabel(day.date, { weekday: "short" })}</span>
      <span class="day-date">${dateLabel(day.date, { month: "numeric", day: "numeric" })}</span>
      <span class="weather-icon" aria-hidden="true">${icon}</span>
      <span class="temperature">${Math.round(day.min)}° · ${Math.round(day.max)}°</span>
      <span class="rain">비 ${Math.round(day.rain)}%</span>
      <span class="rain">${airLabel}</span>`;
    button.addEventListener("click", () => {
      state.selectedDate = day.date;
      renderDays();
      renderRecommendations();
    });
    dayList.append(button);
  });

  const selected = state.forecast.find((day) => day.date === state.selectedDate);
  const air = selected?.aqi == null
    ? (state.airQualityAvailable ? "선택한 날짜의 공기질 예보가 없어요." : "공기질 예보를 불러오지 못했어요.")
    : `예상 최대 AQI ${Math.round(selected.aqi)} · ${airQualityLabel(selected.aqi)}`;
  document.querySelector("#weather-footnote").textContent =
    `${state.location.label} 기준 예보 · ${air} · 목적지별 예보도 추천에 반영해요.`;
}

function airQualityLabel(aqi) {
  if (aqi <= 50) return "좋음";
  if (aqi <= 100) return "보통 (민감군은 주의)";
  if (aqi <= 150) return "민감군 영향 가능";
  if (aqi <= 200) return "나쁨";
  return "매우 나쁨";
}

function scoreDestination(place, day) {
  const isWet = day.rain >= 40 || day.code >= 51;
  const isStorm = [95, 96, 99].includes(day.code);
  const temp = (day.min + day.max) / 2;
  const placeInfo = `${place.name} ${place.description} ${place.tags.join(" ")}`;
  let score = place.type === "indoor" ? (isWet ? 94 : 73) : (isWet ? 46 : 88);
  const reasons = [];

  if (isWet && place.type === "indoor") reasons.push("비를 피해 실내에서 즐기기 좋아요");
  else if (isWet) reasons.push("야외 장소라 우산·우비와 현장 운영 확인이 필요해요");
  else if (place.type === "outdoor") reasons.push("야외 활동하기 좋은 예보예요");
  else reasons.push("날씨와 관계없이 편하게 즐길 수 있어요");

  if (temp < 8 || temp > 29) {
    score += place.type === "indoor" ? 9 : -12;
    reasons.push(temp < 8 ? "쌀쌀한 날씨에 대비해 따뜻하게 입혀주세요" : "더운 시간대를 피해 쉬어가세요");
  } else if (temp >= 14 && temp <= 25 && place.type === "outdoor") {
    score += 5;
  }
  if (day.wind >= 8 && place.type === "indoor") {
    score += 5;
    reasons.push("바람이 강하면 실내 코스가 더 편해요");
  }
  if (day.aqi != null && day.aqi > 100) {
    score += place.type === "indoor" ? 15 : -18;
    reasons.push("공기질이 좋지 않을 수 있어 아이들은 실내 활동을 우선 고려해 주세요");
  } else if (day.aqi != null && day.aqi > 50) {
    score += place.type === "indoor" ? 4 : -5;
    reasons.push("공기질 예보를 확인하고 야외 활동은 짧게 즐겨주세요");
  }
  if (state.family.childAges.length) {
    const hasToddler = state.family.childAges.some((age) => age <= 2);
    const hasPreschooler = state.family.childAges.some((age) => age >= 3 && age <= 5);
    const hasOlderChild = state.family.childAges.some((age) => age >= 6);
    if (hasToddler) {
      if (place.type === "indoor" || /유모차|짧은 산책|아쿠아|박물관|동물|체험/.test(placeInfo)) {
        score += 6;
        reasons.push("영유아와 함께하기 편한 실내·체험 코스예요");
      }
      if (/언덕|경사|긴 산책|야간/.test(placeInfo)) score -= 8;
    }
    if (hasPreschooler && /공룡|기차|동물|과학|우주|놀이|아쿠아|체험|전시/.test(placeInfo)) {
      score += 6;
      reasons.push("유아가 흥미를 느낄 만한 볼거리·체험이 있어요");
    }
    if (hasOlderChild && /과학|우주|역사|박물관|전시|체험|기차/.test(placeInfo)) {
      score += 5;
      reasons.push("어린이가 즐길 전시·체험 요소가 있어요");
    }
  } else if (/놀이공원|어린이|키 제한|유아 프로그램/.test(`${place.name} ${place.description} ${place.tags.join(" ")}`)) {
    score -= 5;
    reasons.push("아이 중심 장소라 성인끼리 방문할 때는 취향을 확인해 주세요");
  }
  const partySize = state.family.adults + state.family.childAges.length;
  if (partySize > 4 && /넓은|테마파크|패밀리랜드|기차마을|공룡박물관/.test(placeInfo)) {
    score += Math.min(5, partySize - 4);
    reasons.push("여럿이 함께 움직이기 좋은 넓은 장소예요");
  }
  if (state.family.adults === 1 && state.family.childAges.length > 0) {
    if (place.driveMinutes <= 60 && /실내|유모차|짧은 산책|아쿠아|박물관|체험/.test(placeInfo)) {
      score += 5;
      reasons.push("어른 한 명이 아이와 이동하기 편한 가까운 코스예요");
    } else if (place.driveMinutes >= 120) {
      score -= 5;
    }
  }
  if (isStorm) {
    score = place.type === "indoor" ? 99 : 20;
    reasons.unshift(place.type === "indoor" ? "뇌우 예보가 있어 실내를 우선 추천해요" : "뇌우 예보: 야외 방문은 미루는 편이 안전해요");
  }
  if (place.city === "순천") score += 3;
  return { score: Math.max(10, Math.min(99, score)), reason: reasons.join(" · ") };
}

function rankDestinations(day) {
  return DESTINATIONS
    .map((place) => {
      const localForecast = state.destinationWeather.get(place.name)?.get(day.date);
      return {
        place,
        localForecast,
        ...scoreDestination(place, localForecast || day)
      };
    })
    .sort((a, b) => b.score - a.score
      || a.place.driveMinutes - b.place.driveMinutes
      || a.place.name.localeCompare(b.place.name, "ko"));
}

function renderRankedPlaces(rankedPlaces, fallbackDay) {
  rankedPlaceList.replaceChildren();
  rankedPlaces.forEach(({ place, score, localForecast }, index) => {
    const day = localForecast || fallbackDay;
    const [condition, icon] = weatherFor(day.code);
    const item = document.createElement("li");
    item.className = "ranked-place-item";
    item.innerHTML = `<span class="rank-number">${index + 1}</span>
      <span class="rank-place-icon" aria-hidden="true">${place.emoji}</span>
      <span class="rank-place-content">
        <strong class="rank-place-name">${place.name}</strong>
        <span class="rank-place-meta">${place.city} · ${place.distance} · ${place.type === "indoor" ? "실내" : "야외"}</span>
        <span class="rank-place-weather">${icon} ${condition} · ${Math.round(day.min)}~${Math.round(day.max)}° · 비 ${Math.round(day.rain)}%</span>
      </span>
      <span class="rank-place-score">추천 ${score}점</span>
      <a class="rank-map-link" href="https://map.naver.com/p/search/${encodeURIComponent(place.map)}" target="_blank" rel="noopener noreferrer" aria-label="${index + 1}위 ${place.name} 지도에서 보기">지도</a>`;
    rankedPlaceList.append(item);
  });
  document.querySelector("#all-places-title").textContent =
    `전체 장소 ${rankedPlaces.length}곳 · 추천 점수순`;
}

function renderRecommendations() {
  placeList.replaceChildren();
  rankedPlaceList.replaceChildren();
  const day = state.forecast.find((item) => item.date === state.selectedDate);
  if (!day) {
    placeList.innerHTML = '<div class="empty-state">날씨 정보를 불러오면 나들이 장소를 추천해 드릴게요.</div>';
    return;
  }

  const rankedPlaces = rankDestinations(day);
  renderRankedPlaces(rankedPlaces, day);
  const candidates = rankedPlaces.slice(0, 4);
  const [condition] = weatherFor(day.code);
  const childSummary = state.family.childAges.length
    ? `아이 만 ${state.family.childAges.join("·")}세`
    : "아이 동반 없음";
  document.querySelector("#recommend-intro").textContent =
    `${dateLabel(day.date, { month: "long", day: "numeric", weekday: "long" })} · 어른 ${state.family.adults}명, ${childSummary} · ${condition}, ${Math.round(day.min)}~${Math.round(day.max)}° · 비 ${Math.round(day.rain)}%`;

  candidates.forEach(({ place, score, reason, localForecast }) => {
    const card = document.createElement("article");
    card.className = "place-card";
    const mapUrl = `https://map.naver.com/p/search/${encodeURIComponent(place.map)}`;
    const eventQuery = encodeURIComponent(`${place.city} ${place.name} 운영시간`);
    const [localCondition] = weatherFor(localForecast?.code ?? day.code);
    const localWeatherSummary = localForecast
      ? `${place.city} 현지예보 ${localCondition} · ${Math.round(localForecast.min)}~${Math.round(localForecast.max)}° · 비 ${Math.round(localForecast.rain)}%${localForecast.aqi == null ? "" : ` · AQI ${Math.round(localForecast.aqi)}`}`
      : `${place.city} 현지 예보 없음 · 순천 예보로 추천`;
    card.innerHTML = `<div class="place-main">
        <div class="place-emoji" aria-hidden="true">${place.emoji}</div>
        <div class="place-content">
          <div class="place-title-row"><h3 class="place-title">${place.name}</h3><span class="score-pill">추천 ${score}점</span></div>
          <p class="place-meta">${place.city} · ${place.distance} · ${place.type === "indoor" ? "실내" : "야외"}</p>
          <p class="place-description">${place.description}</p>
          <div class="place-tags">${place.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        </div>
      </div>
      <div class="place-reason">${localWeatherSummary}<br>${reason}</div>
      <div class="place-actions">
        <a class="action-link primary" href="${mapUrl}" target="_blank" rel="noopener noreferrer">지도에서 보기</a>
        <a class="action-link" href="https://search.naver.com/search.naver?query=${eventQuery}" target="_blank" rel="noopener noreferrer">운영정보 확인</a>
      </div>`;
    if ([95, 96, 99].includes(localForecast?.code ?? day.code) && place.type === "outdoor") card.classList.add("weather-warning");
    placeList.append(card);
  });
}

function renderEvents() {
  const today = new Date();
  const startMonth = today.getMonth();
  const startYear = today.getFullYear();
  const upcomingMonths = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(startYear, startMonth + index, 1);
    return { year: date.getFullYear(), month: date.getMonth() + 1 };
  });
  const eventMonths = new Map();
  upcomingMonths.forEach(({ year, month }) => {
    const matches = EVENTS.filter((event) => event.months[0] === month);
    if (matches.length) eventMonths.set(`${year}-${month}`, { year, month, events: matches });
  });

  const eventGrid = document.createElement("div");
  eventGrid.className = "event-calendar";
  eventMonths.forEach(({ year, month, events }) => {
    const card = document.createElement("section");
    card.className = "event-month-card";
    const items = events.map((event) => {
      const season = event.months.length > 1
        ? `${event.months[0]}~${event.months[event.months.length - 1]}월 무렵`
        : `${event.months[0]}월 무렵`;
      return `<li class="event-month-item"><span class="event-emoji" aria-hidden="true">${event.emoji}</span><span><strong>${event.name}</strong><small>${event.city} · 통상 ${season}</small></span></li>`;
    }).join("");
    card.innerHTML = `<h3 class="event-month-title">${year}년 ${month}월</h3><ul class="event-month-items">${items}</ul>`;
    eventGrid.append(card);
  });

  eventList.replaceChildren();
  eventList.append(eventGrid);
  const searchQuery = encodeURIComponent(
    `${startYear} ${startYear + 1} 순천 전남 경남 부산 경주 지역축제 일정`
  );
  const searchLink = document.createElement("a");
  searchLink.className = "event-overview-link";
  searchLink.href = `https://search.naver.com/search.naver?query=${searchQuery}`;
  searchLink.target = "_blank";
  searchLink.rel = "noopener noreferrer";
  searchLink.textContent = "전체 축제 확정 일정 한 번에 검색 ↗";
  eventList.append(searchLink);
}

async function loadWeather() {
  weatherStatus.className = "weather-status";
  weatherStatus.textContent = `${state.location.label}과 목적지별 예보를 불러오는 중이에요…`;
  document.querySelector("#refresh-button").disabled = true;
  const locations = [
    state.location,
    ...DESTINATIONS.map((place) => ({ latitude: place.latitude, longitude: place.longitude }))
  ];
  const params = new URLSearchParams({
    latitude: locations.map((location) => location.latitude).join(","),
    longitude: locations.map((location) => location.longitude).join(","),
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max",
    timezone: "Asia/Seoul",
    forecast_days: "7"
  });
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error(`날씨 서비스 응답 오류 (${response.status})`);
    const responseData = await response.json();
    const weatherLocations = Array.isArray(responseData) ? responseData : [responseData];
    if (!weatherLocations[0]?.daily?.time?.length) throw new Error("예보 데이터가 비어 있어요.");
    const parseDailyWeather = (daily) => new Map(daily.time.map((date, index) => [date, {
      date,
      code: daily.weather_code[index],
      min: daily.temperature_2m_min[index],
      max: daily.temperature_2m_max[index],
      rain: daily.precipitation_probability_max[index] ?? 0,
      wind: daily.wind_speed_10m_max[index] ?? 0,
      aqi: null
    }]));
    const homeWeather = parseDailyWeather(weatherLocations[0].daily);
    state.forecast = [...homeWeather.values()];
    state.destinationWeather = new Map(DESTINATIONS.map((place, index) => [
      place.name,
      parseDailyWeather(weatherLocations[index + 1]?.daily || weatherLocations[0].daily)
    ]));
    state.airQualityAvailable = false;
    const airParams = new URLSearchParams({
      latitude: locations.map((location) => location.latitude).join(","),
      longitude: locations.map((location) => location.longitude).join(","),
      hourly: "us_aqi",
      timezone: "Asia/Seoul",
      forecast_days: "5"
    });
    try {
      const airResponse = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?${airParams}`);
      if (!airResponse.ok) throw new Error(`공기질 서비스 응답 오류 (${airResponse.status})`);
      const airResponseData = await airResponse.json();
      const airLocations = Array.isArray(airResponseData) ? airResponseData : [airResponseData];
      const parseDailyAqi = (hourly) => {
        const dailyAqi = new Map();
        (hourly?.time || []).forEach((time, index) => {
          const value = hourly.us_aqi?.[index];
          if (typeof value !== "number") return;
          const date = time.slice(0, 10);
          dailyAqi.set(date, Math.max(dailyAqi.get(date) ?? 0, value));
        });
        return dailyAqi;
      };
      const homeAqi = parseDailyAqi(airLocations[0]?.hourly);
      state.forecast.forEach((day) => { day.aqi = homeAqi.get(day.date) ?? null; });
      DESTINATIONS.forEach((place, index) => {
        const localAqi = parseDailyAqi(airLocations[index + 1]?.hourly);
        const localWeather = state.destinationWeather.get(place.name);
        localWeather?.forEach((day) => { day.aqi = localAqi.get(day.date) ?? null; });
      });
      state.airQualityAvailable = homeAqi.size > 0;
    } catch (error) {
      console.warn("공기질 예보를 불러오지 못했습니다.", error);
    }
    weatherStatus.textContent = `${state.location.label} 기준 · ${dateLabel(state.forecast[0].date, { month: "long", day: "numeric" })} 업데이트`;
    renderDays();
    renderRecommendations();
  } catch (error) {
    weatherStatus.className = "weather-status error";
    weatherStatus.textContent = "날씨를 불러오지 못했어요. 인터넷 연결을 확인하고 다시 시도해 주세요.";
    placeList.innerHTML = `<div class="empty-state">${error.message || "날씨 정보에 연결할 수 없습니다."}</div>`;
  } finally {
    document.querySelector("#refresh-button").disabled = false;
  }
}

function useCurrentLocation() {
  if (!navigator.geolocation) {
    weatherStatus.className = "weather-status error";
    weatherStatus.textContent = "이 브라우저에서는 현재 위치를 사용할 수 없어요. 순천 예보를 계속 보여드릴게요.";
    return;
  }
  weatherStatus.className = "weather-status";
  weatherStatus.textContent = "현재 위치를 확인하고 있어요…";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        label: "현재 위치"
      };
      document.querySelector("#location-button").innerHTML = '<span aria-hidden="true">⌖</span> 현재 위치';
      state.selectedDate = null;
      loadWeather();
    },
    () => {
      weatherStatus.className = "weather-status error";
      weatherStatus.textContent = "위치 권한을 확인할 수 없어 순천 예보를 보여드려요.";
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
  );
}

document.querySelector("#refresh-button").addEventListener("click", loadWeather);
document.querySelector("#location-button").addEventListener("click", useCurrentLocation);
initializeFamilySettings();
renderEvents();
loadWeather();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => console.warn("오프라인 캐시를 설정하지 못했습니다.", error));
  });
}
