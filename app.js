const SUN_CHEON = { latitude: 34.9506, longitude: 127.4872, label: "순천" };
const REGIONS = [
  { id: "seoul", label: "서울", latitude: 37.5665, longitude: 126.978 },
  { id: "incheon", label: "인천", latitude: 37.4563, longitude: 126.7052 },
  { id: "gyeonggi", label: "경기(수원)", latitude: 37.2636, longitude: 127.0286 },
  { id: "gangwon", label: "강원(춘천)", latitude: 37.8813, longitude: 127.7298 },
  { id: "daejeon", label: "대전", latitude: 36.3504, longitude: 127.3845 },
  { id: "sejong", label: "세종", latitude: 36.4801, longitude: 127.289 },
  { id: "chungbuk", label: "충북(청주)", latitude: 36.6424, longitude: 127.489 },
  { id: "chungnam", label: "충남(천안)", latitude: 36.8151, longitude: 127.1139 },
  { id: "jeonbuk", label: "전북(전주)", latitude: 35.8242, longitude: 127.148 },
  { id: "gwangju", label: "광주", latitude: 35.1595, longitude: 126.8526 },
  { id: "suncheon", label: "순천", ...SUN_CHEON },
  { id: "daegu", label: "대구", latitude: 35.8714, longitude: 128.6014 },
  { id: "gyeongbuk", label: "경북(안동)", latitude: 36.5684, longitude: 128.7294 },
  { id: "busan", label: "부산", latitude: 35.1796, longitude: 129.0756 },
  { id: "ulsan", label: "울산", latitude: 35.5384, longitude: 129.3114 },
  { id: "gyeongnam", label: "경남(창원)", latitude: 35.2281, longitude: 128.6811 },
  { id: "jeju", label: "제주", latitude: 33.4996, longitude: 126.5312, island: "jeju" }
];
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
  },
  {
    name: "국립중앙박물관 어린이박물관", city: "서울", distance: "", driveMinutes: 0, latitude: 37.5239, longitude: 126.9804, type: "indoor", emoji: "🏛️",
    description: "어린이 눈높이 전시와 체험이 있는 실내 박물관이에요. 어린이박물관은 예약 여부를 확인하세요.",
    tags: ["실내", "어린이 체험", "예약 확인"], weather: "비·추위 피하기",
    map: "국립중앙박물관 어린이박물관"
  },
  {
    name: "서울어린이대공원", city: "서울", distance: "", driveMinutes: 0, latitude: 37.5493, longitude: 127.0815, type: "outdoor", emoji: "🎠",
    description: "동물원과 넓은 산책 공간이 있어 가족 나들이에 좋아요. 운영 시설과 주말 혼잡을 확인하세요.",
    tags: ["동물 관람", "넓은 산책", "유모차 추천"], weather: "맑고 온화한 날",
    map: "서울어린이대공원"
  },
  {
    name: "국립인천해양박물관", city: "인천", distance: "", driveMinutes: 0, latitude: 37.4738, longitude: 126.6012, type: "indoor", emoji: "⚓",
    description: "바다와 항만 이야기를 전시와 체험으로 만나는 실내 코스예요. 관람 시간과 프로그램을 확인하세요.",
    tags: ["실내", "해양 전시", "어린이 체험"], weather: "비·추위 피하기",
    map: "국립인천해양박물관"
  },
  {
    name: "한국민속촌", city: "용인", distance: "", driveMinutes: 0, latitude: 37.2595, longitude: 127.118, type: "outdoor", emoji: "🏘️",
    description: "전통 가옥과 공연, 체험을 함께 즐길 수 있어요. 공연 일정과 유모차 동선을 확인하세요.",
    tags: ["전통문화", "공연·체험", "야외 코스"], weather: "맑고 온화한 날",
    map: "한국민속촌"
  },
  {
    name: "수원화성", city: "수원", distance: "", driveMinutes: 0, latitude: 37.2819, longitude: 127.0158, type: "outdoor", emoji: "🏯",
    description: "성곽과 행궁을 둘러보는 역사 산책 코스예요. 걷는 구간과 주차 위치를 미리 정해두세요.",
    tags: ["역사 산책", "문화유산", "편한 신발"], weather: "비 적고 온화한 날",
    map: "수원화성"
  },
  {
    name: "국립춘천박물관", city: "춘천", distance: "", driveMinutes: 0, latitude: 37.8582, longitude: 127.7502, type: "indoor", emoji: "🖼️",
    description: "강원 지역의 역사와 문화를 전시로 살펴볼 수 있는 실내 나들이 장소예요.",
    tags: ["실내", "전시 관람", "유아 휴식 확인"], weather: "비·추위 피하기",
    map: "국립춘천박물관"
  },
  {
    name: "강릉 경포해변", city: "강릉", distance: "", driveMinutes: 0, latitude: 37.7952, longitude: 128.8961, type: "outdoor", emoji: "🏖️",
    description: "바다와 호수 주변을 함께 둘러보기 좋아요. 강풍과 파도, 해변 안전 안내를 확인하세요.",
    tags: ["바다 산책", "자연 관찰", "바람 확인"], weather: "맑고 바람 약한 날",
    map: "강릉 경포해변"
  },
  {
    name: "국립중앙과학관", city: "대전", distance: "", driveMinutes: 0, latitude: 36.3744, longitude: 127.3848, type: "indoor", emoji: "🔭",
    description: "과학 전시와 체험 공간이 있는 가족 실내 코스예요. 전시별 운영 시간과 예약을 확인하세요.",
    tags: ["실내", "과학 체험", "예약 확인"], weather: "비·추위 피하기",
    map: "국립중앙과학관"
  },
  {
    name: "국립세종수목원", city: "세종", distance: "", driveMinutes: 0, latitude: 36.4987, longitude: 127.2821, type: "outdoor", emoji: "🌳",
    description: "온실과 야외 정원을 함께 둘러볼 수 있어 날씨에 따라 코스를 조절하기 좋아요.",
    tags: ["온실", "정원 산책", "유모차 확인"], weather: "맑고 온화한 날",
    map: "국립세종수목원"
  },
  {
    name: "독립기념관", city: "천안", distance: "", driveMinutes: 0, latitude: 36.7838, longitude: 127.2232, type: "outdoor", emoji: "🇰🇷",
    description: "실내 전시와 야외 산책을 함께 할 수 있어요. 넓은 관람 구역과 이동 시간을 고려해 주세요.",
    tags: ["역사 전시", "실내외 선택", "넓은 산책"], weather: "날씨에 따라 실내외 선택",
    map: "독립기념관"
  },
  {
    name: "국립대구과학관", city: "대구", distance: "", driveMinutes: 0, latitude: 35.7988, longitude: 128.488, type: "indoor", emoji: "🧪",
    description: "어린이 전시와 과학 체험을 즐길 수 있는 실내 장소예요. 체험관 예약을 확인하세요.",
    tags: ["실내", "과학 체험", "어린이 프로그램"], weather: "비·추위 피하기",
    map: "국립대구과학관"
  },
  {
    name: "포항 스페이스워크", city: "포항", distance: "", driveMinutes: 0, latitude: 36.056, longitude: 129.379, type: "outdoor", emoji: "🌉",
    description: "바다를 조망하는 독특한 야외 산책 명소예요. 강풍·우천 시 통제 여부와 이용 연령을 확인하세요.",
    tags: ["바다 전망", "야외 코스", "운영 통제 확인"], weather: "맑고 바람 약한 날",
    map: "포항 스페이스워크"
  },
  {
    name: "국립김해박물관", city: "김해", distance: "", driveMinutes: 0, latitude: 35.2313, longitude: 128.8719, type: "indoor", emoji: "🏺",
    description: "가야의 역사와 유물을 실내에서 만날 수 있어요. 어린이 체험 프로그램 일정을 확인하세요.",
    tags: ["실내", "역사 전시", "어린이 프로그램"], weather: "비·추위 피하기",
    map: "국립김해박물관"
  },
  {
    name: "장생포고래박물관", city: "울산", distance: "", driveMinutes: 0, latitude: 35.5012, longitude: 129.376, type: "indoor", emoji: "🐋",
    description: "고래 전시와 주변 생태체험관을 함께 둘러보세요. 시설별 운영 시간과 휴관일을 확인하세요.",
    tags: ["실내", "해양 생물", "주변 체험"], weather: "비·추위 피하기",
    map: "장생포고래박물관"
  },
  {
    name: "안동 하회마을", city: "안동", distance: "", driveMinutes: 0, latitude: 36.5392, longitude: 128.5186, type: "outdoor", emoji: "🏡",
    description: "전통 마을의 풍경과 문화를 천천히 둘러볼 수 있어요. 관람 구역과 셔틀 운행을 확인하세요.",
    tags: ["전통문화", "마을 산책", "운영정보 확인"], weather: "맑고 온화한 날",
    map: "안동 하회마을"
  },
  {
    name: "제주항공우주박물관", city: "제주", distance: "", driveMinutes: 0, latitude: 33.3054, longitude: 126.296, type: "indoor", emoji: "🚀",
    description: "항공과 우주를 주제로 한 전시·체험 공간이에요. 체험 운영 시간과 예약을 확인하세요.",
    tags: ["실내", "항공우주 체험", "예약 확인"], weather: "비·추위 피하기",
    map: "제주항공우주박물관",
    island: "jeju"
  },
  {
    name: "에코랜드 테마파크", city: "제주", distance: "", driveMinutes: 0, latitude: 33.4552, longitude: 126.6662, type: "outdoor", emoji: "🚂",
    description: "곶자왈 숲을 기차로 둘러볼 수 있어 가족 단위 자연 체험에 좋아요. 운영 시간과 기상 상황을 확인하세요.",
    tags: ["기차 체험", "숲 산책", "날씨 확인"], weather: "비 적고 온화한 날",
    map: "에코랜드 테마파크",
    island: "jeju"
  }
];
const ADDITIONAL_CURATED_PLACES = [
  {
    name: "과천 서울대공원·동물원", city: "과천", distance: "", driveMinutes: 0, latitude: 37.4264, longitude: 127.0197, type: "outdoor", emoji: "🦒",
    description: "넓은 동물원과 코끼리열차, 산책로가 있어 아이들과 하루를 보내기 좋은 나들이 장소예요.",
    tags: ["동물원", "코끼리열차", "운영정보 확인"], weather: "맑고 온화한 날", map: "서울대공원 동물원"
  },
  {
    name: "국립과천과학관", city: "과천", distance: "", driveMinutes: 0, latitude: 37.4385, longitude: 127.0059, type: "indoor", emoji: "🚀",
    description: "유아 체험과 과학 전시를 즐길 수 있어요. 프로그램과 예약 여부를 확인해 주세요.",
    tags: ["실내", "과학 체험", "예약 확인"], weather: "비·추위·더위 피하기", map: "국립과천과학관"
  },
  {
    name: "고양 아쿠아플라넷 일산", city: "고양", distance: "", driveMinutes: 0, latitude: 37.6634, longitude: 126.7556, type: "indoor", emoji: "🦈",
    description: "해양 생물과 다양한 동물을 실내에서 만날 수 있는 아쿠아리움이에요.",
    tags: ["실내", "아쿠아리움", "운영정보 확인"], weather: "비·추위 피하기", map: "아쿠아플라넷 일산"
  },
  {
    name: "하남 스타필드", city: "하남", distance: "", driveMinutes: 0, latitude: 37.5455, longitude: 127.2237, type: "indoor", emoji: "🛍️",
    description: "쇼핑과 식사를 실내에서 즐길 수 있어요. 시설별 운영시간과 이용 조건을 확인해 주세요.",
    tags: ["실내", "식사·쇼핑", "운영정보 확인"], weather: "비·추위·더위 피하기", map: "스타필드 하남"
  },
  {
    name: "춘천 레고랜드 코리아", city: "춘천", distance: "", driveMinutes: 0, latitude: 37.8825, longitude: 127.7024, type: "outdoor", emoji: "🧱",
    description: "어린이 눈높이 놀이기구와 레고 체험 공간이 있는 테마파크예요. 운영일과 예약을 확인하세요.",
    tags: ["테마파크", "레고 체험", "운영정보 확인"], weather: "맑고 온화한 날", map: "레고랜드 코리아"
  },
  {
    name: "홍천 알파카월드", city: "홍천", distance: "", driveMinutes: 0, latitude: 37.8275, longitude: 127.8648, type: "outdoor", emoji: "🦙",
    description: "숲속에서 알파카와 다양한 동물을 만나는 체험 코스예요. 경사 구간이 있어 편한 신발을 권해요.",
    tags: ["동물 교감", "자연 체험", "운영정보 확인"], weather: "맑고 선선한 날", map: "홍천 알파카월드"
  },
  {
    name: "청주랜드 동물원", city: "청주", distance: "", driveMinutes: 0, latitude: 36.6534, longitude: 127.5231, type: "outdoor", emoji: "🐻",
    description: "동물 관람과 가벼운 산책을 함께 즐길 수 있어요. 운영시간을 확인해 주세요.",
    tags: ["동물 관람", "가벼운 산책", "운영정보 확인"], weather: "비 적고 온화한 날", map: "청주랜드 동물원"
  },
  {
    name: "아산 피나클랜드 수목원", city: "아산", distance: "", driveMinutes: 0, latitude: 36.8722, longitude: 126.9255, type: "outdoor", emoji: "🌷",
    description: "계절 꽃과 잔디광장, 체험을 즐길 수 있는 정원 나들이 코스예요.",
    tags: ["수목원", "계절 꽃", "운영정보 확인"], weather: "맑고 온화한 날", map: "아산 피나클랜드"
  },
  {
    name: "서천 국립생태원", city: "서천", distance: "", driveMinutes: 0, latitude: 36.0309, longitude: 126.7219, type: "indoor", emoji: "🌵",
    description: "대형 온실 에코리움과 야외 생태 산책로를 함께 둘러볼 수 있어요.",
    tags: ["대형 온실", "생태 체험", "운영정보 확인"], weather: "날씨에 따라 실내외 선택", map: "국립생태원"
  },
  {
    name: "대전 오월드", city: "대전", distance: "", driveMinutes: 0, latitude: 36.2882, longitude: 127.3968, type: "outdoor", emoji: "🦁",
    description: "사파리와 동물원, 꽃 정원과 놀이기구를 함께 즐길 수 있는 테마파크예요.",
    tags: ["사파리", "동물원", "운영정보 확인"], weather: "맑고 온화한 날", map: "대전 오월드"
  },
  {
    name: "대구 이월드·83타워", city: "대구", distance: "", driveMinutes: 0, latitude: 35.8533, longitude: 128.5639, type: "outdoor", emoji: "🎡",
    description: "전망대와 놀이기구를 즐길 수 있는 도심 속 나들이 명소예요.",
    tags: ["놀이공원", "전망대", "운영정보 확인"], weather: "비 적고 온화한 날", map: "대구 이월드"
  },
  {
    name: "울산대공원", city: "울산", distance: "", driveMinutes: 0, latitude: 35.5247, longitude: 129.2932, type: "outdoor", emoji: "🦋",
    description: "생태 체험 공간과 넓은 잔디밭이 있어 가족 나들이와 산책을 즐기기 좋아요.",
    tags: ["산책", "생태 체험", "운영정보 확인"], weather: "맑고 온화한 날", map: "울산대공원"
  },
  {
    name: "국립부산과학관", city: "부산", distance: "", driveMinutes: 0, latitude: 35.2039, longitude: 129.2127, type: "indoor", emoji: "🏎️",
    description: "자동차·항공·선박을 주제로 한 전시와 어린이 체험 공간을 즐길 수 있어요.",
    tags: ["실내", "탈것 체험", "운영정보 확인"], weather: "비·추위 피하기", map: "국립부산과학관"
  },
  {
    name: "제주 아쿠아플라넷", city: "서귀포", distance: "", driveMinutes: 0, latitude: 33.4331, longitude: 126.9278, type: "indoor", emoji: "🐋",
    description: "섭지코지 인근의 실내 아쿠아리움이에요. 관람시간과 입장권을 확인해 주세요.",
    tags: ["실내", "아쿠아리움", "운영정보 확인"], weather: "비·강풍 피하기", map: "아쿠아플라넷 제주", island: "jeju"
  }
];
DESTINATIONS.push(...ADDITIONAL_CURATED_PLACES);
const BASE_DESTINATION_COUNT = DESTINATIONS.length;
const PLACE_CACHE_KEY = "weekend-outing-osm-cache";
const ITINERARY_KEY = "weekend-outing-itinerary";
const VISITED_KEY = "weekend-outing-visited";
const FAMILY_KEY = "weekend-outing-family";
const INDOOR_FILTER_KEY = "weekend-outing-indoor-only";
const LEGACY_AMENITY_FILTER_KEY = "weekend-outing-amenity-filters";
const PLACE_REFRESH_INTERVAL = 7 * 24 * 60 * 60 * 1000;
const PLACE_SEARCH_RADIUS_METERS = 160000;
const FOOD_SEARCH_RADIUS_METERS = 25000;
const WEATHER_REQUEST_TIMEOUT = 12000;
const AIR_QUALITY_REQUEST_TIMEOUT = 8000;
const OVERPASS_ENDPOINTS = [
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass-api.de/api/interpreter"
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
  { name: "경주벚꽃축제", city: "경주", months: [3, 4], season: "3~4월 무렵", emoji: "🌸" },
  { name: "화천산천어축제", city: "화천", months: [1, 2], season: "1~2월 무렵", emoji: "🐟" },
  { name: "진해군항제", city: "창원", months: [3, 4], season: "3~4월 무렵", emoji: "🌸" },
  { name: "태안 세계튤립꽃박람회", city: "태안", months: [4, 5], season: "4~5월 무렵", emoji: "🌷" },
  { name: "함평나비대축제", city: "함평", months: [4, 5], season: "4~5월 무렵", emoji: "🦋" },
  { name: "강릉단오제", city: "강릉", months: [6], season: "초여름 무렵", emoji: "🎭" },
  { name: "보령머드축제", city: "보령", months: [7, 8], season: "여름 무렵", emoji: "🏖️" },
  { name: "대구치맥페스티벌", city: "대구", months: [7], season: "여름 무렵", emoji: "🍗" },
  { name: "안동국제탈춤페스티벌", city: "안동", months: [9, 10], season: "가을 무렵", emoji: "🎭" },
  { name: "수원화성문화제", city: "수원", months: [9, 10], season: "가을 무렵", emoji: "🏯" },
  { name: "서울빛초롱축제", city: "서울", months: [12], season: "겨울 무렵", emoji: "🏮" }
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
  roadDurationMap: new Map(),
  routeRequestId: 0,
  selectedDate: null,
  location: SUN_CHEON,
  locationRegion: "suncheon",
  distanceLimitHours: 1,
  visitedPlaces: {},
  recommendationCycle: 0,
  recommendationCycleKey: "",
  recommendationFeedback: "",
  lastVisitedPlace: null,
  discoveredPlaceCount: 0,
  placeDataUpdatedAt: null,
  placeDataSource: "curated",
  nearbyRestaurants: [],
  weatherRequestId: 0,
  airQualityAvailable: false,
  itinerary: [],
  suggestedItinerary: [],
  itineraryFeedback: "",
  indoorOnly: false,
  family: { adults: 2, childAges: [4, 1] }
};

function initializeLocationSettings() {
  const select = document.querySelector("#location-select");
  const currentLocationOption = document.createElement("option");
  currentLocationOption.value = "current";
  currentLocationOption.textContent = "현재 위치";
  currentLocationOption.disabled = true;
  select.append(currentLocationOption);
  REGIONS.forEach((region) => {
    const option = document.createElement("option");
    option.value = region.id;
    option.textContent = region.label;
    select.append(option);
  });

  try {
    const savedRegion = localStorage.getItem("weekend-outing-region");
    if (REGIONS.some((region) => region.id === savedRegion)) state.locationRegion = savedRegion;
  } catch (error) {
    console.warn("저장된 출발 지역을 불러오지 못했습니다.", error);
  }
  const region = REGIONS.find((item) => item.id === state.locationRegion) || REGIONS.find((item) => item.id === "suncheon");
  state.location = { ...region };
  select.value = region.id;
  select.addEventListener("change", () => {
    const selectedRegion = REGIONS.find((item) => item.id === select.value);
    if (!selectedRegion) return;
    state.locationRegion = selectedRegion.id;
    state.location = { ...selectedRegion };
    state.routeRequestId += 1;
    state.roadDurationMap.clear();
    try {
      localStorage.setItem("weekend-outing-region", selectedRegion.id);
    } catch (error) {
      console.warn("출발 지역을 이 기기에 저장하지 못했습니다.", error);
    }
    state.suggestedItinerary = [];
    document.querySelector("#suggested-itinerary-summary").textContent =
      "출발 지역이 바뀌었어요. 코스를 다시 추천받아 보세요.";
    state.selectedDate = null;
    state.forecast = [];
    state.destinationWeather.clear();
    renderDays();
    renderRecommendations();
    renderEvents();
    refreshPlacesForCurrentLocation();
  });
}

function isJejuCoordinates(latitude, longitude) {
  return latitude >= 32.8 && latitude <= 34.2 && longitude >= 125.5 && longitude <= 127.5;
}

const ROUTE_MATRIX_CACHE_KEY = "weekend-outing-route-matrix-v1";
const ROUTE_MATRIX_CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const OSRM_TABLE_ENDPOINT = "https://router.project-osrm.org/table/v1/driving/";
const OSRM_MAX_TARGETS = 90;
const MAJOR_TOURISM_CITIES = new Set([
  "강릉", "경주", "남해", "부산", "속초", "여수", "전주", "제주", "춘천",
  "통영", "평창", "거제", "서귀포", "보령"
]);
const MOUNTAIN_OR_COASTAL_CITIES = new Set([
  "강릉", "거제", "고성", "고흥", "남해", "삼척", "속초", "양양", "여수",
  "영월", "인제", "정선", "태백", "통영", "평창", "홍천"
]);

function getOriginRouteKey(origin) {
  return `${origin.latitude.toFixed(4)},${origin.longitude.toFixed(4)}`;
}

function getRouteDestinationKey(place) {
  return `${place.name}|${place.latitude.toFixed(5)},${place.longitude.toFixed(5)}`;
}

function isMetroArea(place) {
  return place.latitude >= 37 && place.longitude >= 126.5 && place.longitude <= 127.6;
}

function isMajorTourismArea(place) {
  return MAJOR_TOURISM_CITIES.has(String(place.city || "").replace(/\s/g, ""));
}

function getTrafficAdjustedMinutes(origin, destination, rawMinutes) {
  if (!Number.isFinite(rawMinutes) || rawMinutes <= 0) return 0;

  const date = state.selectedDate || toISODate(new Date());
  const dayOfWeek = new Date(`${date}T12:00:00`).getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const congestionArea = isMetroArea(origin)
    || isMetroArea(destination)
    || isMajorTourismArea(destination);
  let multiplier = 1;

  if (isWeekend) multiplier += congestionArea ? 0.27 : 0.15;
  else if (isMetroArea(origin) && isMetroArea(destination)) multiplier += 0.1;

  const restBuffer = rawMinutes >= 110 ? 15 : rawMinutes >= 70 ? 5 : 0;
  const parkingBuffer = 5;
  return Math.max(5, Math.round((rawMinutes * multiplier + restBuffer + parkingBuffer) / 5) * 5);
}

function estimateFallbackDriveMinutes(origin, place) {
  const straightDistanceKm = distanceBetweenCoordinates(origin, place);
  if (straightDistanceKm < 1) return 0;
  if (straightDistanceKm < 1.2) return 5;

  const city = String(place.city || "").replace(/\s/g, "");
  const isMountainOrCoastal = MOUNTAIN_OR_COASTAL_CITIES.has(city)
    || (place.latitude > 37.3 && place.longitude > 127.5);
  const baseRoadFactor = straightDistanceKm < 15 ? 1.48
    : straightDistanceKm < 50 ? 1.38
      : straightDistanceKm < 120 ? 1.28 : 1.22;
  const roadFactor = isMountainOrCoastal ? baseRoadFactor * 1.12 : baseRoadFactor;
  const averageSpeedKmh = straightDistanceKm < 15 ? 32
    : straightDistanceKm < 45 ? 52
      : straightDistanceKm < 100 ? 68 : 78;
  return Math.round((straightDistanceKm * roadFactor / averageSpeedKmh) * 60) + 6;
}

async function fetchActualRoadTimes() {
  const origin = { ...state.location };
  const originKey = getOriginRouteKey(origin);
  const requestId = ++state.routeRequestId;
  const originIsJeju = origin.island === "jeju"
    || isJejuCoordinates(origin.latitude, origin.longitude);
  const targets = DESTINATIONS
    .filter((place) => {
      const placeIsJeju = place.island === "jeju"
        || isJejuCoordinates(place.latitude, place.longitude);
      return originIsJeju === placeIsJeju
        && Number.isFinite(place.latitude)
        && Number.isFinite(place.longitude);
    })
    .map((place) => ({ place, fallbackMinutes: estimateFallbackDriveMinutes(origin, place) }))
    .filter(({ fallbackMinutes }) => fallbackMinutes <= 240)
    .sort((first, second) => first.fallbackMinutes - second.fallbackMinutes)
    .slice(0, OSRM_MAX_TARGETS);
  const targetKeys = targets.map(({ place }) => getRouteDestinationKey(place));

  let cachedOrigin = null;
  try {
    const cache = JSON.parse(localStorage.getItem(ROUTE_MATRIX_CACHE_KEY) || "{}");
    const entry = cache[originKey];
    if (entry && Number.isFinite(entry.updatedAt) && entry.updatedAt <= Date.now()
      && Date.now() - entry.updatedAt < ROUTE_MATRIX_CACHE_TTL_MS
      && entry.durations && typeof entry.durations === "object"
      && Array.isArray(entry.targetKeys)) {
      cachedOrigin = entry;
      state.roadDurationMap = new Map(
        Object.entries(entry.durations).filter(([, minutes]) => Number.isFinite(minutes) && minutes >= 0)
      );
    }
  } catch (error) {
    console.warn("도로 시간 캐시를 불러오지 못했습니다. 온라인 조회를 시도합니다.", error);
  }

  const cachedKeys = new Set(cachedOrigin?.targetKeys || []);
  const missingTargets = targets.filter(({ place }) => !cachedKeys.has(getRouteDestinationKey(place)));
  if (cachedOrigin && missingTargets.length === 0) {
    renderRecommendations();
    return;
  }
  if (!targets.length || requestId !== state.routeRequestId) return;

  const coordinates = [
    `${origin.longitude.toFixed(5)},${origin.latitude.toFixed(5)}`,
    ...targets.map(({ place }) => `${place.longitude.toFixed(5)},${place.latitude.toFixed(5)}`)
  ].join(";");

  try {
    const response = await fetch(`${OSRM_TABLE_ENDPOINT}${coordinates}?sources=0`, {
      signal: AbortSignal.timeout(8000)
    });
    if (!response.ok) throw new Error(`OSRM 응답 오류 (${response.status})`);
    const data = await response.json();
    if (data.code !== "Ok" || !Array.isArray(data.durations?.[0])
      || data.durations[0].length !== targets.length + 1) {
      throw new Error("OSRM 응답에 유효한 이동 시간 표가 없습니다.");
    }
    if (requestId !== state.routeRequestId || getOriginRouteKey(state.location) !== originKey) return;

    const durations = Object.fromEntries(state.roadDurationMap);
    targets.forEach(({ place }, index) => {
      const seconds = data.durations[0][index + 1];
      if (typeof seconds === "number" && Number.isFinite(seconds) && seconds >= 0) {
        durations[getRouteDestinationKey(place)] = Math.round(seconds / 60);
      }
    });
    state.roadDurationMap = new Map(Object.entries(durations));

    try {
      const cache = JSON.parse(localStorage.getItem(ROUTE_MATRIX_CACHE_KEY) || "{}");
      cache[originKey] = {
        updatedAt: Date.now(),
        targetKeys: [...new Set([...(cachedOrigin?.targetKeys || []), ...targetKeys])],
        durations
      };
      const recentEntries = Object.entries(cache)
        .sort((first, second) => second[1].updatedAt - first[1].updatedAt)
        .slice(0, 10);
      localStorage.setItem(ROUTE_MATRIX_CACHE_KEY, JSON.stringify(Object.fromEntries(recentEntries)));
    } catch (error) {
      console.warn("도로 시간 캐시를 저장하지 못했습니다.", error);
    }
    renderRecommendations();
  } catch (error) {
    if (requestId === state.routeRequestId) {
      console.warn("OSRM 실제 도로 시간 조회에 실패했습니다. 지형 보정 추정치를 사용합니다.", error);
    }
  }
}

function estimateDriveMinutes(place) {
  return estimateDriveMinutesBetween(state.location, place);
}

function estimateDriveMinutesBetween(origin, place) {
  const originIsJeju = origin.island === "jeju"
    || isJejuCoordinates(origin.latitude, origin.longitude);
  const destinationIsJeju = place.island === "jeju"
    || isJejuCoordinates(place.latitude, place.longitude);
  if (originIsJeju !== destinationIsJeju) return null;

  const straightDistanceKm = distanceBetweenCoordinates(origin, place);
  if (straightDistanceKm < 1) return 0;

  const isMainOrigin = Math.abs(origin.latitude - state.location.latitude) < 0.01
    && Math.abs(origin.longitude - state.location.longitude) < 0.01;
  const roadMinutes = isMainOrigin
    ? state.roadDurationMap.get(getRouteDestinationKey(place))
    : undefined;
  const rawMinutes = Number.isFinite(roadMinutes)
    ? roadMinutes
    : estimateFallbackDriveMinutes(origin, place);
  return getTrafficAdjustedMinutes(origin, place, rawMinutes);
}

function distanceBetweenCoordinates(first, second) {
  const toRadians = (degrees) => degrees * Math.PI / 180;
  const latitudeDifference = toRadians(second.latitude - first.latitude);
  const longitudeDifference = toRadians(second.longitude - first.longitude);
  const firstLatitude = toRadians(first.latitude);
  const secondLatitude = toRadians(second.latitude);
  const haversine = Math.sin(latitudeDifference / 2) ** 2
    + Math.cos(firstLatitude) * Math.cos(secondLatitude) * Math.sin(longitudeDifference / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function placeCacheAreaKey() {
  return `${state.location.latitude.toFixed(1)}:${state.location.longitude.toFixed(1)}`;
}

function readPlaceCache() {
  try {
    const saved = JSON.parse(localStorage.getItem(PLACE_CACHE_KEY) || "{}");
    const entry = saved[placeCacheAreaKey()];
    if (!entry || !Array.isArray(entry.places) || !Number.isFinite(entry.updatedAt)) return null;
    return entry;
  } catch (error) {
    console.warn("저장된 주변 장소를 불러오지 못했습니다.", error);
    return null;
  }
}

function loadIndoorFilter() {
  try {
    const saved = localStorage.getItem(INDOOR_FILTER_KEY);
    if (saved != null) {
      state.indoorOnly = saved === "true";
      return;
    }
    const legacy = JSON.parse(localStorage.getItem(LEGACY_AMENITY_FILTER_KEY) || "null");
    state.indoorOnly = legacy?.indoor === true;
    if (legacy) localStorage.setItem(INDOOR_FILTER_KEY, String(state.indoorOnly));
  } catch (error) {
    console.warn("저장된 실내 필터를 불러오지 못했습니다.", error);
  }
}

function initializeIndoorFilter() {
  const filter = document.querySelector("#indoor-only-filter");
  loadIndoorFilter();
  filter.checked = state.indoorOnly;
  filter.addEventListener("change", () => {
    state.indoorOnly = filter.checked;
    state.suggestedItinerary = [];
    document.querySelector("#suggested-itinerary-summary").textContent =
      "조건이 바뀌었어요. 코스를 다시 추천받아 보세요.";
    try {
      localStorage.setItem(INDOOR_FILTER_KEY, String(state.indoorOnly));
    } catch (error) {
      console.warn("실내 장소 필터를 이 기기에 저장하지 못했습니다.", error);
    }
    renderRecommendations();
  });
}

function matchesPlaceFilter(place) {
  return !state.indoorOnly || place.type === "indoor";
}

function loadItinerary() {
  try {
    const saved = JSON.parse(localStorage.getItem(ITINERARY_KEY) || "[]");
    if (!Array.isArray(saved)) return;
    state.itinerary = saved.filter((place) => place
      && typeof place.name === "string"
      && typeof place.city === "string"
      && typeof place.map === "string"
      && ["indoor", "outdoor"].includes(place.type)
      && Number.isFinite(place.latitude)
      && Number.isFinite(place.longitude))
      .slice(0, 40);
  } catch (error) {
    console.warn("저장된 나들이 코스를 불러오지 못했습니다.", error);
  }
}

function saveItinerary() {
  try {
    localStorage.setItem(ITINERARY_KEY, JSON.stringify(state.itinerary));
    return true;
  } catch (error) {
    console.warn("나들이 코스를 이 기기에 저장하지 못했습니다.", error);
    state.itineraryFeedback = "저장 공간에 문제가 있어 코스를 이 기기에 저장하지 못했어요.";
    return false;
  }
}

function renderItinerary() {
  const list = document.querySelector("#itinerary-list");
  if (!list) return;
  list.replaceChildren();
  document.querySelector("#itinerary-summary").textContent =
    state.itinerary.length ? `${state.itinerary.length}곳을 순서대로 방문하는 코스예요.` : "아직 코스에 담은 장소가 없어요.";
  document.querySelector("#share-itinerary").disabled = state.itinerary.length === 0;
  document.querySelector("#itinerary-feedback").textContent = state.itineraryFeedback;
  if (!state.itinerary.length) {
    list.innerHTML = '<li class="empty-state">추천 장소에서 ‘코스에 담기’를 눌러 가족 나들이 코스를 만들어 보세요.</li>';
    return;
  }

  state.itinerary.forEach((place, index) => {
    const item = document.createElement("li");
    item.className = "itinerary-item";
    const placeName = escapeHTML(place.name);
    const mapUrl = `https://map.naver.com/p/search/${encodeURIComponent(place.map)}`;
    item.innerHTML = `<span class="itinerary-order">${index + 1}</span>
      <span class="rank-place-icon" aria-hidden="true">${escapeHTML(place.emoji || "📍")}</span>
      <span class="rank-place-content">
        <strong class="rank-place-name">${placeName}</strong>
        <span class="rank-place-meta">${escapeHTML(place.city)} · ${formatDriveTime(estimateDriveMinutes(place))}</span>
      </span>
      <div class="itinerary-actions">
        <button type="button" data-itinerary-action="up" data-index="${index}" aria-label="${placeName} 순서 위로" ${index === 0 ? "disabled" : ""}>↑</button>
        <button type="button" data-itinerary-action="down" data-index="${index}" aria-label="${placeName} 순서 아래로" ${index === state.itinerary.length - 1 ? "disabled" : ""}>↓</button>
        <a class="rank-map-link" href="${mapUrl}" target="_blank" rel="noopener noreferrer" aria-label="${placeName} 지도에서 보기">지도</a>
        <a class="rank-map-link" href="${nearbyFoodSearchUrl(place)}" target="_blank" rel="noopener noreferrer" aria-label="${placeName} 주변 식당 검색">식당</a>
        <button type="button" data-itinerary-action="remove" data-index="${index}" aria-label="${placeName} 코스에서 제거">삭제</button>
      </div>`;
    list.append(item);
  });
}

function recommendItinerary() {
  const day = state.forecast.find((item) => item.date === state.selectedDate);
  if (!day) {
    state.suggestedItinerary = [];
    document.querySelector("#suggested-itinerary-summary").textContent =
      "날씨를 불러온 뒤 코스를 추천받아 보세요.";
    renderSuggestedItinerary();
    return;
  }

  const badWeather = outdoorWeatherNeedsBackup(day);
  const candidates = rankDestinations(day).filter(({ place, driveMinutes }) =>
    driveMinutes != null
      && driveMinutes <= 180
      && matchesPlaceFilter(place)
      && (!badWeather || place.type === "indoor")
  );
  const remaining = [];
  candidates.forEach((candidate) => {
    if (!remaining.some((saved) =>
      distanceBetweenCoordinates(saved.place, candidate.place) < 0.5
    )) remaining.push(candidate);
  });
  const first = remaining[0];
  if (!first) {
    state.suggestedItinerary = [];
    document.querySelector("#suggested-itinerary-summary").textContent =
      "현재 출발지에서 추천할 수 있는 장소가 없어요. 실내 필터를 조정하거나 출발 지역을 확인해 주세요.";
    renderSuggestedItinerary();
    return;
  }

  const route = [{ ...first, legMinutes: first.driveMinutes }];
  const selectedNames = new Set([first.place.name]);
  while (route.length < 3) {
    const previous = route[route.length - 1].place;
    const nextOptions = remaining
      .filter(({ place }) => !selectedNames.has(place.name))
      .map((candidate) => ({
        ...candidate,
        legMinutes: estimateDriveMinutesBetween(previous, candidate.place),
        straightDistanceKm: distanceBetweenCoordinates(previous, candidate.place)
      }))
      .filter((candidate) => candidate.legMinutes != null
        && candidate.legMinutes <= 45
        && candidate.straightDistanceKm <= 30)
      .sort((firstOption, secondOption) =>
        (secondOption.score - secondOption.legMinutes * 0.7)
          - (firstOption.score - firstOption.legMinutes * 0.7)
          || firstOption.legMinutes - secondOption.legMinutes);
    if (!nextOptions.length) break;
    const next = nextOptions[0];
    route.push(next);
    selectedNames.add(next.place.name);
  }

  state.suggestedItinerary = route;
  const weatherLabel = badWeather ? "날씨를 고려해 실내 위주로" : "날씨와 가까운 이동 거리를 고려해";
  const returnMinutes = estimateDriveMinutesBetween(route[route.length - 1].place, state.location) || 0;
  const totalMinutes = route.reduce((total, stop) => total + stop.legMinutes, returnMinutes);
  document.querySelector("#suggested-itinerary-summary").textContent =
    `${dateLabel(day.date, { month: "long", day: "numeric" })} · ${weatherLabel} ${route.length}곳을 골랐어요. 출발·복귀 포함 예상 차량 이동 ${formatDuration(totalMinutes)}.`;
  renderSuggestedItinerary();
}

function renderSuggestedItinerary() {
  const list = document.querySelector("#suggested-itinerary-list");
  const addButton = document.querySelector("#add-suggested-itinerary");
  list.replaceChildren();
  addButton.disabled = state.suggestedItinerary.length === 0;
  state.suggestedItinerary.forEach(({ place, legMinutes }, index) => {
    const item = document.createElement("li");
    item.className = "suggested-stop";
    item.innerHTML = `<span class="itinerary-order">${index + 1}</span>
      <span class="rank-place-icon" aria-hidden="true">${escapeHTML(place.emoji || "📍")}</span>
      <span class="rank-place-content">
        <strong class="rank-place-name">${escapeHTML(place.name)}</strong>
        <span class="rank-place-meta">${escapeHTML(place.city)} · 차량 약 ${formatDuration(legMinutes)}${index === 0 ? " 출발지에서" : " 다음 장소까지"}</span>
      </span>
      <a class="rank-map-link" href="https://map.naver.com/p/search/${encodeURIComponent(place.map)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(place.name)} 지도에서 보기">지도</a>
      <a class="rank-map-link" href="${nearbyFoodSearchUrl(place)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(place.name)} 주변 식당 검색">식당</a>`;
    list.append(item);
    if (index < state.suggestedItinerary.length - 1) {
      const leg = document.createElement("li");
      leg.className = "suggested-leg";
      leg.setAttribute("aria-hidden", "true");
      leg.textContent = `↓ 차량 약 ${formatDuration(state.suggestedItinerary[index + 1].legMinutes)}`;
      list.append(leg);
    }
  });
}

function addSuggestedItinerary() {
  if (!state.suggestedItinerary.length) return;
  const additions = state.suggestedItinerary
    .map(({ place }) => place)
    .filter((place) => !state.itinerary.some((saved) => saved.name === place.name))
    .slice(0, Math.max(0, 40 - state.itinerary.length));
  if (!additions.length) {
    state.itineraryFeedback = "추천 코스의 장소가 이미 내 코스에 담겨 있어요.";
  } else {
    state.itinerary.push(...additions.map((place) => ({
      name: place.name,
      city: place.city,
      map: place.map,
      emoji: place.emoji,
      type: place.type,
      latitude: place.latitude,
      longitude: place.longitude,
      island: place.island,
      tags: place.tags
    })));
    state.itineraryFeedback = `추천 코스에서 ${additions.length}곳을 내 코스에 담았어요.`;
    saveItinerary();
  }
  renderItinerary();
}

function addPlaceToItinerary(placeName) {
  if (state.itinerary.some((place) => place.name === placeName)) {
    state.itineraryFeedback = "이미 코스에 담긴 장소예요.";
    renderItinerary();
    return;
  }
  const place = DESTINATIONS.find((destination) => destination.name === placeName);
  if (!place) {
    state.itineraryFeedback = "장소 정보를 찾지 못해 코스에 담지 못했어요.";
    renderItinerary();
    return;
  }
  if (state.itinerary.length >= 40) {
    state.itineraryFeedback = "코스에는 최대 40곳까지 담을 수 있어요.";
    renderItinerary();
    return;
  }
  state.itinerary.push({
    name: place.name,
    city: place.city,
    map: place.map,
    emoji: place.emoji,
    type: place.type,
    latitude: place.latitude,
    longitude: place.longitude,
    island: place.island,
    tags: place.tags
  });
  state.itineraryFeedback = `${place.name}을(를) 코스에 담았어요.`;
  saveItinerary();
  renderItinerary();
  renderRecommendations();
}

function handleItineraryAction(event) {
  const button = event.target.closest("[data-itinerary-action]");
  if (!button) return;
  const index = Number(button.dataset.index);
  if (!Number.isInteger(index) || index < 0 || index >= state.itinerary.length) return;
  const action = button.dataset.itineraryAction;
  if (action === "remove") {
    state.itinerary.splice(index, 1);
    state.itineraryFeedback = "코스에서 장소를 삭제했어요.";
  } else {
    const nextIndex = index + (action === "up" ? -1 : 1);
    if (nextIndex < 0 || nextIndex >= state.itinerary.length) return;
    [state.itinerary[index], state.itinerary[nextIndex]] =
      [state.itinerary[nextIndex], state.itinerary[index]];
    state.itineraryFeedback = "방문 순서를 바꿨어요.";
  }
  saveItinerary();
  renderItinerary();
  renderRecommendations();
}

async function shareItinerary() {
  if (!state.itinerary.length) return;
  const date = state.selectedDate
    ? dateLabel(state.selectedDate, { year: "numeric", month: "long", day: "numeric" })
    : "날짜 미정";
  const shareUrl = new URL(window.location.href);
  shareUrl.search = "";
  shareUrl.hash = "#itinerary-view";
  shareUrl.searchParams.set("region", state.locationRegion);
  if (state.selectedDate) shareUrl.searchParams.set("date", state.selectedDate);
  shareUrl.searchParams.set("places", JSON.stringify(state.itinerary.map(createShareablePlace)));
  const lines = [
    `우리 가족 나들이 코스 · ${date}`,
    `${state.location.label} 출발`,
    ...state.itinerary.map((place, index) =>
      `${index + 1}. ${place.name} (${place.city})\nhttps://map.naver.com/p/search/${encodeURIComponent(place.map)}`),
    `\n코스 바로 열기: ${shareUrl}`
  ];
  const text = lines.join("\n");
  try {
    if (navigator.share) {
      await navigator.share({ title: "우리 가족 나들이 코스", text });
      state.itineraryFeedback = "코스를 공유했어요.";
    } else {
      let copied = false;
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        copied = true;
      } else {
        const field = document.createElement("textarea");
        field.value = text;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        copied = document.execCommand("copy");
        field.remove();
      }
      if (!copied) throw new Error("이 브라우저에서 코스를 복사하지 못했습니다.");
      state.itineraryFeedback = "코스를 클립보드에 복사했어요. 가족에게 붙여넣어 공유해 주세요.";
    }
  } catch (error) {
    if (error.name === "AbortError") return;
    console.warn("나들이 코스를 공유하지 못했습니다.", error);
    state.itineraryFeedback = "코스를 공유하지 못했어요. 브라우저 권한을 확인하고 다시 시도해 주세요.";
  }
  renderItinerary();
}

function createShareablePlace(place) {
  return {
    name: place.name,
    city: place.city,
    map: place.map,
    emoji: place.emoji || "📍",
    type: place.type,
    latitude: place.latitude,
    longitude: place.longitude,
    island: place.island === "jeju" ? "jeju" : undefined,
    tags: Array.isArray(place.tags) ? place.tags.slice(0, 10) : []
  };
}

function normalizeItineraryPlaces(places) {
  if (!Array.isArray(places) || places.length > 40) throw new Error("코스 장소 목록 형식이 올바르지 않습니다.");
  const normalized = [];
  const names = new Set();
  for (const place of places) {
    if (!place || typeof place !== "object"
      || typeof place.name !== "string" || place.name.trim().length < 1 || place.name.length > 120
      || typeof place.city !== "string" || place.city.trim().length < 1 || place.city.length > 40
      || typeof place.map !== "string" || place.map.trim().length < 1 || place.map.length > 200
      || !["indoor", "outdoor"].includes(place.type)
      || !Number.isFinite(place.latitude) || Math.abs(place.latitude) > 90
      || !Number.isFinite(place.longitude) || Math.abs(place.longitude) > 180
      || (place.island != null && place.island !== "jeju")
      || (place.tags != null && (!Array.isArray(place.tags)
        || place.tags.length > 10
        || !place.tags.every((tag) => typeof tag === "string" && tag.length <= 60)))) {
      throw new Error("코스에 잘못된 장소 정보가 포함되어 있습니다.");
    }
    const name = place.name.trim();
    if (names.has(name)) throw new Error("코스에 같은 장소가 여러 번 포함되어 있습니다.");
    names.add(name);
    normalized.push({
      name,
      city: place.city.trim(),
      map: place.map.trim(),
      emoji: typeof place.emoji === "string" && place.emoji.length <= 16 ? place.emoji : "📍",
      type: place.type,
      latitude: place.latitude,
      longitude: place.longitude,
      ...(place.island === "jeju" ? { island: "jeju" } : {}),
      tags: Array.isArray(place.tags) ? place.tags.slice() : []
    });
  }
  return normalized;
}

function restoreSharedItineraryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("places")) return false;
  try {
    const regionId = params.get("region");
    const region = REGIONS.find((item) => item.id === regionId);
    if (region) {
      state.locationRegion = region.id;
      state.location = { ...region };
      document.querySelector("#location-select").value = region.id;
      try {
        localStorage.setItem("weekend-outing-region", region.id);
      } catch (error) {
        console.warn("공유 코스의 출발 지역을 이 기기에 저장하지 못했습니다.", error);
      }
    }
    const sharedDate = params.get("date");
    if (sharedDate && /^\d{4}-\d{2}-\d{2}$/.test(sharedDate)
      && Number.isFinite(Date.parse(`${sharedDate}T12:00:00`))
      && toISODate(new Date(`${sharedDate}T12:00:00`)) === sharedDate) {
      state.selectedDate = sharedDate;
    }
    state.itinerary = normalizeItineraryPlaces(JSON.parse(params.get("places")));
    if (!state.itinerary.length) throw new Error("공유 링크에 장소가 없습니다.");
    if (!saveItinerary()) return false;
    state.itineraryFeedback = "공유받은 나들이 코스를 불러왔어요.";
    history.replaceState(null, "", `${window.location.pathname}#itinerary-view`);
    return true;
  } catch (error) {
    console.warn("공유 코스를 불러오지 못했습니다.", error);
    state.itineraryFeedback = "공유 코스 링크가 올바르지 않거나 장소 정보를 읽을 수 없어요.";
    return false;
  }
}

function applyDiscoveredPlaces(places, restaurants = []) {
  DESTINATIONS.splice(BASE_DESTINATION_COUNT);
  places.forEach((place) => DESTINATIONS.push(place));
  state.discoveredPlaceCount = places.length;
  state.nearbyRestaurants = restaurants;
}

function createDiscoveredPlaces(elements) {
  const knownNames = new Set(DESTINATIONS.slice(0, BASE_DESTINATION_COUNT)
    .map((place) => place.name.toLocaleLowerCase().replace(/[\s·\-()]/g, "")));
  const seenIds = new Set();
  const discovered = [];
  const restaurants = [];

  elements.forEach((element) => {
    const tags = element.tags || {};
    const name = tags["name:ko"] || tags.name;
    const latitude = element.lat ?? element.center?.lat;
    const longitude = element.lon ?? element.center?.lon;
    if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 120
      || !Number.isFinite(latitude) || !Number.isFinite(longitude)) return;
    const uniqueId = `${element.type}/${element.id}`;
    if (seenIds.has(uniqueId)) return;
    seenIds.add(uniqueId);
    if (tags.access === "private" || tags.disused === "yes" || tags.abandoned === "yes") return;
    if (tags.amenity === "restaurant") {
      restaurants.push({
        name: name.trim(),
        cuisine: typeof tags.cuisine === "string" ? tags.cuisine.slice(0, 80) : "",
        latitude,
        longitude,
        sourceId: uniqueId
      });
      return;
    }
    const normalizedName = name.toLocaleLowerCase().replace(/[\s·\-()]/g, "");
    if (knownNames.has(normalizedName)) return;
    const coordinates = { latitude, longitude };
    if (DESTINATIONS.slice(0, BASE_DESTINATION_COUNT)
      .some((place) => distanceBetweenCoordinates(coordinates, place) < 0.4)) return;
    if (discovered.some((place) => distanceBetweenCoordinates(coordinates, place) < 0.25)) return;

    const indoor = ["museum", "aquarium", "gallery"].includes(tags.tourism)
      || tags.leisure === "water_park"
      || tags.indoor === "yes";
    const type = indoor ? "indoor" : "outdoor";
    const city = (tags["addr:city"] || tags["addr:town"] || tags["addr:county"] || "주변").slice(0, 40);
    discovered.push({
      name: name.trim(),
      city,
      distance: "",
      driveMinutes: 0,
      ...coordinates,
      type,
      emoji: tags.tourism === "zoo" ? "🦁"
        : tags.tourism === "aquarium" ? "🐠"
          : tags.tourism === "museum" ? "🏛️"
            : tags.tourism === "theme_park" || tags.leisure === "water_park" ? "🎡" : "📍",
      description: "주변 지도 데이터에서 새로 찾은 장소예요. 방문 전 운영시간과 이용 정보를 확인해 주세요.",
      tags: ["지도 데이터 신규", indoor ? "실내" : "야외", "운영정보 확인"],
      weather: indoor ? "비·추위 피하기" : "맑고 온화한 날",
      map: name.trim(),
      source: "OpenStreetMap",
      sourceId: uniqueId
    });
    knownNames.add(normalizedName);
  });

  const places = discovered
    .map((place) => ({ place, driveMinutes: estimateDriveMinutes(place) }))
    .filter(({ driveMinutes }) => driveMinutes != null && driveMinutes <= 180)
    .sort((first, second) => first.driveMinutes - second.driveMinutes)
    .map(({ place }) => place)
    .slice(0, 40);
  const nearbyRestaurants = restaurants
    .sort((first, second) =>
      distanceBetweenCoordinates(state.location, first) - distanceBetweenCoordinates(state.location, second)
    )
    .slice(0, 500);
  return { places, restaurants: nearbyRestaurants };
}

function savePlaceCache(places, restaurants) {
  try {
    const saved = JSON.parse(localStorage.getItem(PLACE_CACHE_KEY) || "{}");
    saved[placeCacheAreaKey()] = { updatedAt: Date.now(), places, restaurants };
    const entries = Object.entries(saved)
      .sort((first, second) => second[1].updatedAt - first[1].updatedAt)
      .slice(0, 8);
    localStorage.setItem(PLACE_CACHE_KEY, JSON.stringify(Object.fromEntries(entries)));
  } catch (error) {
    console.warn("주변 장소를 이 기기에 저장하지 못했습니다.", error);
  }
}

function renderPlaceDataStatus(message) {
  const status = document.querySelector("#place-data-status");
  if (!status) return;
  const count = state.discoveredPlaceCount;
  const updated = state.placeDataUpdatedAt
    ? new Intl.DateTimeFormat("ko-KR", { month: "numeric", day: "numeric" }).format(state.placeDataUpdatedAt)
    : null;
  const summary = `지도 새 장소 ${count}곳${updated ? ` · ${updated} 갱신` : ""}`;
  status.querySelector(".place-data-copy").textContent = message || summary;
  status.classList.toggle("has-error", Boolean(message));
  status.querySelector("#refresh-places-button").disabled = state.placeDataSource === "loading";
}

async function refreshDiscoveredPlaces(force = false) {
  const requestedAreaKey = placeCacheAreaKey();
  const cached = readPlaceCache();
  const cacheIsFresh = cached && Date.now() - cached.updatedAt < PLACE_REFRESH_INTERVAL;
  if (cached) {
    applyDiscoveredPlaces(cached.places, Array.isArray(cached.restaurants) ? cached.restaurants : []);
    state.placeDataUpdatedAt = new Date(cached.updatedAt);
    state.placeDataSource = cacheIsFresh && !force ? "cache" : "loading";
  } else {
    applyDiscoveredPlaces([], []);
    state.placeDataUpdatedAt = null;
    state.placeDataSource = "loading";
  }
  renderPlaceDataStatus();
  if (!force && cacheIsFresh) return false;

  const latitude = state.location.latitude.toFixed(5);
  const longitude = state.location.longitude.toFixed(5);
  const query = `[out:json][timeout:15];(nwr(around:${PLACE_SEARCH_RADIUS_METERS},${latitude},${longitude})[name][tourism~"^(attraction|museum|zoo|aquarium|theme_park)$"];nwr(around:${PLACE_SEARCH_RADIUS_METERS},${latitude},${longitude})[name][leisure=water_park];nwr(around:${FOOD_SEARCH_RADIUS_METERS},${latitude},${longitude})[name][amenity=restaurant];);out center tags 500;`;
  let failure;

  for (const endpoint of OVERPASS_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: new URLSearchParams({ data: query }),
        signal: AbortSignal.timeout(15000)
      });
      if (!response.ok) throw new Error(`OpenStreetMap 응답 오류 (${response.status})`);
      const data = await response.json();
      if (!Array.isArray(data.elements)) throw new Error("주변 장소 데이터 형식이 올바르지 않습니다.");
      if (requestedAreaKey !== placeCacheAreaKey()) return false;
      const { places, restaurants } = createDiscoveredPlaces(data.elements);
      applyDiscoveredPlaces(places, restaurants);
      state.placeDataUpdatedAt = new Date();
      state.placeDataSource = "openstreetmap";
      savePlaceCache(places, restaurants);
      renderPlaceDataStatus();
      return true;
    } catch (error) {
      failure = error;
      console.warn(`주변 장소를 ${endpoint}에서 불러오지 못했습니다.`, error);
    }
  }

  if (requestedAreaKey !== placeCacheAreaKey()) return false;
  state.placeDataSource = cached ? "cache" : "curated";
  const message = cached
    ? `지도 데이터에 연결하지 못해 ${new Intl.DateTimeFormat("ko-KR", { month: "numeric", day: "numeric" }).format(state.placeDataUpdatedAt)} 저장 목록을 보여드려요.`
    : "새 장소를 불러오지 못했어요. 기존 장소는 계속 이용할 수 있어요.";
  renderPlaceDataStatus(message);
  if (!cached) console.warn("주변 장소 자동 갱신에 실패했습니다.", failure);
  return false;
}

function nearbyFoodSearchUrl(place) {
  const placeName = String(place.name || "").trim();
  const city = String(place.city || "").trim();
  const location = city && !placeName.includes(city) ? `${city} ${placeName}` : placeName;
  const query = `${location} 주변 맛집`;
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
}

function getNearbyRestaurants(place) {
  return state.nearbyRestaurants
    .map((restaurant) => ({
      ...restaurant,
      distanceKm: distanceBetweenCoordinates(place, restaurant)
    }))
    .filter((restaurant) => restaurant.distanceKm <= 3)
    .sort((first, second) => first.distanceKm - second.distanceKm)
    .slice(0, 3);
}

function formatDriveTime(minutes) {
  if (minutes == null) return "항공·선박 필요";
  if (minutes === 0) return "출발지 인근";
  return `차량 약 ${formatDuration(minutes)}`;
}

function formatDuration(minutes) {
  if (minutes < 60) return `${minutes}분`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}시간${remainingMinutes ? ` ${remainingMinutes}분` : ""}`;
}

function naverDirectionsUrl(place) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) return naverWebDirectionsUrl(place);
  const params = new URLSearchParams({
    slat: String(state.location.latitude),
    slng: String(state.location.longitude),
    sname: state.location.label,
    dlat: String(place.latitude),
    dlng: String(place.longitude),
    dname: place.name,
    appname: "weekend-outing"
  });
  return `nmap://route/car?${params}`;
}

function naverWebDirectionsUrl(place) {
  const query = `${state.location.label}에서 ${place.map} 길찾기`;
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
}

function loadVisitedPlaces() {
  try {
    const saved = JSON.parse(localStorage.getItem(VISITED_KEY) || "{}");
    state.visitedPlaces = Object.fromEntries(Object.entries(saved)
      .filter(([name]) => typeof name === "string" && name.length > 0)
      .flatMap(([name, savedVisit]) => {
        const visit = typeof savedVisit === "string"
          ? { date: savedVisit, count: 1 }
          : savedVisit;
        if (typeof visit?.date !== "string"
          || !Number.isFinite(Date.parse(`${visit.date}T00:00:00`))
          || !Number.isInteger(visit.count)
          || visit.count < 1) return [];
        const memo = typeof visit.memo === "string" ? visit.memo.trim().slice(0, 100) : "";
        return [[name, { date: visit.date, count: visit.count, memo }]];
      }));
  } catch (error) {
    console.warn("저장된 방문 기록을 불러오지 못했습니다.", error);
  }
}

function recommendationCycleKey(day) {
  const { latitude, longitude } = state.location;
  return `${day.date}:${latitude.toFixed(2)}:${longitude.toFixed(2)}`;
}

function getRecommendationCycle(day) {
  const key = recommendationCycleKey(day);
  if (state.recommendationCycleKey === key) return state.recommendationCycle;
  state.recommendationCycleKey = key;
  state.recommendationCycle = 0;
  try {
    const saved = JSON.parse(localStorage.getItem("weekend-outing-recommendation-cycle") || "null");
    if (saved?.key === key && Number.isInteger(saved.cycle) && saved.cycle >= 0) {
      state.recommendationCycle = saved.cycle;
    }
  } catch (error) {
    console.warn("저장된 추천 순환 설정을 불러오지 못했습니다.", error);
  }
  return state.recommendationCycle;
}

function saveRecommendationCycle(day) {
  const key = recommendationCycleKey(day);
  state.recommendationCycleKey = key;
  state.recommendationCycle += 1;
  try {
    localStorage.setItem("weekend-outing-recommendation-cycle", JSON.stringify({
      key,
      cycle: state.recommendationCycle
    }));
  } catch (error) {
    console.warn("다른 코스 설정을 이 기기에 저장하지 못했습니다.", error);
  }
}

function recordPlaceVisit(placeName) {
  state.lastVisitedPlace = {
    name: placeName,
    previousVisit: state.visitedPlaces[placeName]
      ? { ...state.visitedPlaces[placeName] }
      : null
  };
  state.visitedPlaces[placeName] = {
    date: toISODate(new Date()),
    count: (state.visitedPlaces[placeName]?.count || 0) + 1,
    memo: state.visitedPlaces[placeName]?.memo || ""
  };
  try {
    localStorage.setItem(VISITED_KEY, JSON.stringify(state.visitedPlaces));
  } catch (error) {
    console.warn("방문 장소를 이 기기에 저장하지 못했습니다.", error);
  }
  state.recommendationFeedback = "방문 기록을 저장했어요. 당분간 다른 장소를 먼저 추천할게요.";
  renderVisitedPlaces();
  renderRecommendations();
}

function undoPlaceVisit() {
  if (!state.lastVisitedPlace) return;
  const { name, previousVisit } = state.lastVisitedPlace;
  if (previousVisit) state.visitedPlaces[name] = previousVisit;
  else delete state.visitedPlaces[name];
  state.lastVisitedPlace = null;
  try {
    localStorage.setItem(VISITED_KEY, JSON.stringify(state.visitedPlaces));
  } catch (error) {
    console.warn("방문 기록을 이 기기에서 수정하지 못했습니다.", error);
  }
  state.recommendationFeedback = "방문 기록을 취소했어요.";
  renderVisitedPlaces();
  renderRecommendations();
}

function renderVisitedPlaces() {
  const list = document.querySelector("#visited-place-list");
  const entries = Object.entries(state.visitedPlaces)
    .map(([name, visit]) => ({
      name,
      visit,
      place: DESTINATIONS.find((destination) => destination.name === name)
    }))
    .sort((first, second) => second.visit.date.localeCompare(first.visit.date)
      || second.visit.count - first.visit.count
      || first.name.localeCompare(second.name, "ko"));
  const totalVisits = entries.reduce((sum, entry) => sum + entry.visit.count, 0);
  document.querySelector("#visited-summary").textContent =
    `다녀온 장소 ${entries.length}곳 · 표시한 횟수 총 ${totalVisits}회`;
  list.replaceChildren();
  if (!entries.length) {
    list.innerHTML = '<div class="empty-state">아직 다녀온 곳이 없어요. 추천 장소에서 ‘다녀왔어요’를 눌러 기록해 보세요.</div>';
    return;
  }
  entries.forEach(({ name, visit, place }) => {
    const item = document.createElement("article");
    item.className = "visited-place-card";
    const placeName = escapeHTML(name);
    const city = place ? escapeHTML(place.city) : "";
    const mapLink = place
      ? `<a class="rank-map-link" href="https://map.naver.com/p/search/${encodeURIComponent(place.map)}" target="_blank" rel="noopener noreferrer" aria-label="${placeName} 지도에서 보기">지도</a>`
      : "";
    item.innerHTML = `<span class="rank-place-icon" aria-hidden="true">${place?.emoji || "📍"}</span>
      <span class="rank-place-content">
        <strong class="rank-place-name">${placeName}</strong>
        <span class="rank-place-meta">${city ? `${city} · ` : ""}최근 ${dateLabel(visit.date, { year: "numeric", month: "numeric", day: "numeric" })}</span>
      </span>
      <span class="visit-count">${visit.count}회</span>
      <label class="visited-memo-row">
        <span class="sr-only">${placeName} 한줄 메모</span>
        <input class="visited-memo-input" type="text" maxlength="100" data-visited-memo="${encodeURIComponent(name)}" value="${escapeHTML(visit.memo || "")}" placeholder="다음 방문을 위한 한줄 메모">
      </label>
      ${mapLink}`;
    list.append(item);
  });
}

function saveVisitedMemo(placeName, memoText) {
  const visit = state.visitedPlaces[placeName];
  if (!visit) return false;
  visit.memo = memoText.trim().slice(0, 100);
  try {
    localStorage.setItem(VISITED_KEY, JSON.stringify(state.visitedPlaces));
    document.querySelector("#visited-backup-status").textContent = "한줄 메모를 저장했어요.";
    return true;
  } catch (error) {
    console.warn("방문 메모를 이 기기에 저장하지 못했습니다.", error);
    document.querySelector("#visited-backup-status").textContent = "저장 공간 문제로 메모를 저장하지 못했어요.";
    return false;
  }
}

function validateVisitedBackup(records) {
  if (!records || typeof records !== "object" || Array.isArray(records)) {
    throw new Error("방문 기록 형식이 올바르지 않습니다.");
  }
  const normalized = Object.create(null);
  Object.entries(records).forEach(([name, savedVisit]) => {
    if (!name.trim() || name.length > 120) throw new Error("방문 기록에 잘못된 장소 이름이 있습니다.");
    const visit = typeof savedVisit === "string" ? { date: savedVisit, count: 1 } : savedVisit;
    if (!visit || typeof visit !== "object"
      || typeof visit.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(visit.date)
      || !Number.isFinite(Date.parse(`${visit.date}T12:00:00`))
      || toISODate(new Date(`${visit.date}T12:00:00`)) !== visit.date
      || !Number.isInteger(visit.count) || visit.count < 1 || visit.count > 100000
      || (visit.memo != null && typeof visit.memo !== "string")) {
      throw new Error("방문 기록에 잘못된 날짜나 횟수가 있습니다.");
    }
    normalized[name] = {
      date: visit.date,
      count: visit.count,
      memo: typeof visit.memo === "string" ? visit.memo.trim().slice(0, 100) : ""
    };
  });
  return normalized;
}

function validateFamilyBackup(family) {
  if (!family || typeof family !== "object"
    || !Number.isInteger(family.adults) || family.adults < 1 || family.adults > 8
    || !Array.isArray(family.childAges) || family.childAges.length > 8
    || !family.childAges.every((age) => Number.isInteger(age) && age >= 0 && age <= 17)) {
    throw new Error("가족 인원 설정 형식이 올바르지 않습니다.");
  }
  return { adults: family.adults, childAges: family.childAges.slice() };
}

function exportVisitedBackup() {
  const status = document.querySelector("#visited-backup-status");
  try {
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      visitedPlaces: state.visitedPlaces,
      itinerary: state.itinerary,
      family: state.family
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `weekend-outing-backup-${toISODate(new Date())}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = "방문 기록과 코스 백업 파일을 만들었어요.";
  } catch (error) {
    console.warn("방문 기록 백업 파일을 만들지 못했습니다.", error);
    status.textContent = "백업 파일을 만들지 못했어요. 브라우저 다운로드 설정을 확인해 주세요.";
  }
}

async function importVisitedBackup(event) {
  const input = event.currentTarget;
  const status = document.querySelector("#visited-backup-status");
  const file = input.files?.[0];
  if (!file) return;
  try {
    if (file.size > 1024 * 1024) throw new Error("백업 파일은 1MB 이하만 불러올 수 있습니다.");
    const data = JSON.parse(await file.text());
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("백업 파일 형식이 올바르지 않습니다.");
    }
    const updates = [];
    let importedVisits;
    let importedItinerary;
    let importedFamily;
    if (Object.prototype.hasOwnProperty.call(data, "visitedPlaces")) {
      importedVisits = validateVisitedBackup(data.visitedPlaces);
      updates.push([VISITED_KEY, JSON.stringify({ ...state.visitedPlaces, ...importedVisits })]);
    }
    if (Object.prototype.hasOwnProperty.call(data, "itinerary")) {
      importedItinerary = normalizeItineraryPlaces(data.itinerary);
      updates.push([ITINERARY_KEY, JSON.stringify(importedItinerary)]);
    }
    if (Object.prototype.hasOwnProperty.call(data, "family")) {
      importedFamily = validateFamilyBackup(data.family);
      updates.push([FAMILY_KEY, JSON.stringify(importedFamily)]);
    }
    if (!updates.length) throw new Error("백업 파일에 불러올 방문 기록이나 코스가 없습니다.");

    const previousValues = updates.map(([key]) => [key, localStorage.getItem(key)]);
    try {
      updates.forEach(([key, value]) => localStorage.setItem(key, value));
    } catch (error) {
      previousValues.forEach(([key, value]) => {
        try {
          if (value == null) localStorage.removeItem(key);
          else localStorage.setItem(key, value);
        } catch (restoreError) {
          console.warn("백업 불러오기 실패 후 기존 설정을 복원하지 못했습니다.", restoreError);
        }
      });
      throw error;
    }

    if (importedVisits) state.visitedPlaces = { ...state.visitedPlaces, ...importedVisits };
    if (importedItinerary) state.itinerary = importedItinerary;
    if (importedFamily) {
      state.family = importedFamily;
      document.querySelector("#adult-count").value = String(state.family.adults);
      document.querySelector("#child-count").value = String(state.family.childAges.length);
      renderChildAgeInputs();
      renderFamilySummary();
    }
    status.textContent = "백업 데이터를 불러왔어요.";
    renderVisitedPlaces();
    renderItinerary();
    renderRecommendations();
  } catch (error) {
    console.warn("백업 파일을 불러오지 못했습니다.", error);
    status.textContent = error instanceof SyntaxError
      ? "JSON 파일을 읽지 못했어요. 올바른 주말나들이 백업 파일인지 확인해 주세요."
      : error.message || "백업 파일을 불러오지 못했어요.";
  } finally {
    input.value = "";
  }
}

function dateSeed(value) {
  return [...value].reduce((hash, character) => (hash * 31 + character.charCodeAt(0)) >>> 0, 0);
}

function selectRecommendationPlaces(rankedPlaces, day) {
  const nearbyPlaces = rankedPlaces.filter((item) => item.driveMinutes != null && item.driveMinutes <= 180);
  const unseenPlaces = nearbyPlaces.filter(({ place }) => {
    const visitedDate = state.visitedPlaces[place.name]?.date;
    return !visitedDate || Date.now() - Date.parse(`${visitedDate}T00:00:00`) >= 90 * 24 * 60 * 60 * 1000;
  });
  const pool = unseenPlaces.length >= 3
    ? unseenPlaces
    : (nearbyPlaces.length ? nearbyPlaces : rankedPlaces.filter((item) => item.driveMinutes != null));
  if (pool.length <= 3) return pool;

  const cycle = getRecommendationCycle(day);
  const windowSize = Math.min(9, pool.length);
  const seed = dateSeed(recommendationCycleKey(day));
  const start = (seed + cycle * windowSize) % pool.length;
  const window = Array.from({ length: windowSize }, (_, index) => pool[(start + index) % pool.length]);
  const selected = [];

  while (selected.length < 3 && window.length) {
    let bestIndex = 0;
    let bestUtility = -Infinity;
    window.forEach((candidate, index) => {
      const repeatedCity = selected.some((item) => item.place.city === candidate.place.city);
      const repeatedType = selected.some((item) => item.place.type === candidate.place.type);
      const utility = candidate.score - (repeatedCity ? 12 : 0) - (repeatedType ? 5 : 0);
      if (utility > bestUtility) {
        bestUtility = utility;
        bestIndex = index;
      }
    });
    selected.push(window.splice(bestIndex, 1)[0]);
  }
  return selected;
}

function loadFamilySettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(FAMILY_KEY) || "null");
    if (saved && Number.isInteger(saved.adults) && saved.adults >= 1 && saved.adults <= 8
      && Array.isArray(saved.childAges) && saved.childAges.length <= 8
      && saved.childAges.every((age) => Number.isInteger(age) && age >= 0 && age <= 17)) {
      state.family = { adults: saved.adults, childAges: saved.childAges };
    }
  } catch (error) {
    console.warn("저장된 가족 인원 설정을 불러오지 못했습니다.", error);
  }
}

const homeDayList = document.querySelector("#home-day-list");
const placeList = document.querySelector("#place-list");
const rankedPlaceList = document.querySelector("#ranked-place-list");
const eventList = document.querySelector("#event-list");
const weatherStatus = document.querySelector("#home-weather-status");

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
    localStorage.setItem(FAMILY_KEY, JSON.stringify(state.family));
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

function summarizeAmPmWeather(hourly, targetDate) {
  if (!Array.isArray(hourly?.time)) return null;
  const codes = new Map();
  hourly.time.forEach((time, index) => {
    if (!time.startsWith(targetDate)) return;
    const hour = Number(time.slice(11, 13));
    if (hour === 10 || hour === 14) codes.set(hour, hourly.weather_code?.[index]);
  });
  const morning = codes.get(10);
  const afternoon = codes.get(14);
  if (morning == null || afternoon == null) return null;
  return `오전 ${weatherFor(morning)[1]} · 오후 ${weatherFor(afternoon)[1]}`;
}

function renderDays() {
  homeDayList.replaceChildren();
  if (!state.forecast.length) {
    document.querySelector("#home-weather-footnote").textContent = `${state.location.label} 기준 예보를 불러오고 있어요.`;
    return;
  }
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
    button.setAttribute("aria-label", `${dateLabel(day.date, { month: "long", day: "numeric", weekday: "long" })}, ${label}${day.ampm ? `, ${day.ampm}` : ""}`);
    button.innerHTML = `<span class="day-name">${dateLabel(day.date, { weekday: "short" })}</span>
      <span class="day-date">${dateLabel(day.date, { month: "numeric", day: "numeric" })}</span>
      <span class="weather-icon" aria-hidden="true">${icon}</span>
      <span class="temperature">${Math.round(day.min)}° · ${Math.round(day.max)}°</span>
      <span class="rain">비 ${Math.round(day.rain)}%</span>
      <span class="rain">${airLabel}</span>
      ${day.ampm ? `<span class="ampm-weather">${day.ampm}</span>` : ""}`;
    button.addEventListener("click", () => {
      state.suggestedItinerary = [];
      document.querySelector("#suggested-itinerary-summary").textContent =
        "선택한 날짜가 바뀌었어요. 코스를 다시 추천받아 보세요.";
      state.selectedDate = day.date;
      renderDays();
      renderRecommendations();
    });
    homeDayList.append(button);
  });

  const selected = state.forecast.find((day) => day.date === state.selectedDate);
  const air = selected?.aqi == null
    ? (state.airQualityAvailable ? "선택한 날짜의 공기질 예보가 없어요." : "공기질 예보를 불러오지 못했어요.")
    : `예상 최대 AQI ${Math.round(selected.aqi)} · ${airQualityLabel(selected.aqi)}`;
  document.querySelector("#home-weather-footnote").textContent =
    `${state.location.label} 기준 7일 예보 · 선택 날짜 ${dateLabel(selected.date, { month: "numeric", day: "numeric" })} · ${air} · 목적지별 예보도 추천에 반영해요.`;
  const preparationTips = [];
  const snowCodes = [71, 73, 75, 77, 85, 86];
  const rainCodes = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82];
  if ([95, 96, 99].includes(selected?.code)) {
    preparationTips.push("뇌우 예보가 있어요. 야외 일정은 미루고 기상특보를 확인하세요.");
  } else {
    if (snowCodes.includes(selected?.code)) preparationTips.push("눈 예보가 있어요. 따뜻한 옷과 미끄럼에 주의하고 도로·시설 운영을 확인하세요.");
    else if (selected?.rain >= 40 || rainCodes.includes(selected?.code)) preparationTips.push("비에 대비해 우산·여벌옷을 챙기고 실내 대체 코스를 정해두세요.");
    if (selected?.max >= 30) preparationTips.push("더운 시간대 야외 활동은 줄이고 물·모자·자외선 차단제를 준비하세요.");
    if (selected?.min < 5) preparationTips.push("아침저녁 기온에 대비해 겹쳐 입을 옷을 챙기세요.");
    if (selected?.wind >= 8) preparationTips.push("바람이 강할 수 있어 야외 시설 운영 여부를 확인하세요.");
    if (selected?.aqi > 100) preparationTips.push("공기질이 나쁠 수 있어 실내 코스를 우선하고 공식 예보를 확인하세요.");
  }
  if (!preparationTips.length) preparationTips.push("물과 간식을 챙기고, 출발 전 운영시간·예약 여부를 확인하세요.");
  document.querySelector("#weather-tip-copy").textContent = preparationTips.join(" ");
}

function airQualityLabel(aqi) {
  if (aqi <= 50) return "좋음";
  if (aqi <= 100) return "보통 (민감군은 주의)";
  if (aqi <= 150) return "민감군 영향 가능";
  if (aqi <= 200) return "나쁨";
  return "매우 나쁨";
}

function scoreDestination(place, day, driveMinutes) {
  const isWet = day.rain >= 40 || day.code >= 51;
  const isStorm = [95, 96, 99].includes(day.code);
  const temp = (day.min + day.max) / 2;
  const placeInfo = `${place.name} ${place.description} ${place.tags.join(" ")}`;
  let score = place.type === "indoor" ? (isWet ? 94 : 73) : (isWet ? 46 : 88);
  const reasons = [];

  if (driveMinutes == null) {
    score -= 15;
    reasons.push("출발지와 섬이 달라 항공·선박 이동이 필요해요");
  } else if (driveMinutes <= 60) {
    score += 6;
    reasons.push("출발지에서 가까워 가볍게 다녀오기 좋아요");
  } else if (driveMinutes <= 120) {
    score += 3;
  } else if (driveMinutes > 180) {
    score -= 8;
    reasons.push("이동 시간이 길어 여유 있는 일정이 좋아요");
  }

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
    if (driveMinutes != null && driveMinutes <= 60 && /실내|유모차|짧은 산책|아쿠아|박물관|체험/.test(placeInfo)) {
      score += 5;
      reasons.push("어른 한 명이 아이와 이동하기 편한 가까운 코스예요");
    } else if (driveMinutes != null && driveMinutes >= 120) {
      score -= 5;
    }
  }
  if (isStorm) {
    score = place.type === "indoor" ? 99 : 20;
    reasons.unshift(place.type === "indoor" ? "뇌우 예보가 있어 실내를 우선 추천해요" : "뇌우 예보: 야외 방문은 미루는 편이 안전해요");
  }
  const visitedDate = state.visitedPlaces[place.name]?.date;
  if (visitedDate) {
    const daysSinceVisit = Math.floor((Date.now() - Date.parse(`${visitedDate}T00:00:00`)) / (24 * 60 * 60 * 1000));
    if (daysSinceVisit < 14) {
      score -= 30;
      reasons.push("최근 다녀온 곳이라 새로운 장소를 먼저 추천해요");
    } else if (daysSinceVisit < 45) {
      score -= 20;
      reasons.push("최근 방문한 곳보다 새로운 장소를 우선했어요");
    } else if (daysSinceVisit < 90) {
      score -= 10;
    }
  }
  return { score: Math.max(10, Math.min(99, score)), reason: reasons.join(" · ") };
}

function rankDestinations(day) {
  return DESTINATIONS
    .map((place) => {
      const localForecast = state.destinationWeather.get(place.name)?.get(day.date);
      const driveMinutes = estimateDriveMinutes(place);
      return {
        place,
        localForecast,
        driveMinutes,
        ...scoreDestination(place, localForecast || day, driveMinutes)
      };
    })
    .sort((a, b) => b.score - a.score
      || (a.driveMinutes ?? Infinity) - (b.driveMinutes ?? Infinity)
      || a.place.name.localeCompare(b.place.name, "ko"));
}

function renderRankedPlaces(rankedPlaces, fallbackDay) {
  rankedPlaceList.replaceChildren();
  rankedPlaces.forEach(({ place, score, localForecast, driveMinutes }, index) => {
    const day = localForecast || fallbackDay;
    const [condition, icon] = weatherFor(day.code);
    const placeName = escapeHTML(place.name);
    const city = escapeHTML(place.city);
    const item = document.createElement("li");
    item.className = "ranked-place-item";
    item.innerHTML = `<span class="rank-number">${index + 1}</span>
      <span class="rank-place-icon" aria-hidden="true">${place.emoji}</span>
      <span class="rank-place-content">
        <strong class="rank-place-name">${placeName}</strong>
        <span class="rank-place-meta">${city} · ${formatDriveTime(driveMinutes)} · ${place.type === "indoor" ? "실내" : "야외"}</span>
        <span class="rank-place-weather">${icon} ${condition} · ${Math.round(day.min)}~${Math.round(day.max)}° · 비 ${Math.round(day.rain)}%</span>
      </span>
      <span class="rank-place-score">추천 ${score}점</span>
      <a class="rank-map-link" href="https://map.naver.com/p/search/${encodeURIComponent(place.map)}" target="_blank" rel="noopener noreferrer" aria-label="${index + 1}위 ${placeName} 지도에서 보기">지도</a>`;
    rankedPlaceList.append(item);
  });
  document.querySelector("#all-places-title").textContent =
    `전체 장소 ${rankedPlaces.length}곳 · 추천 점수순`;
}

function renderDistanceRecommendations(rankedPlaces, fallbackDay) {
  const list = document.querySelector("#distance-place-list");
  list.replaceChildren();
  const maxMinutes = state.distanceLimitHours * 60;
  const minMinutes = (state.distanceLimitHours - 1) * 60;
  const timeRangeLabel = state.distanceLimitHours === 1 ? "1시간 이내" : `${state.distanceLimitHours - 1}~${state.distanceLimitHours}시간`;
  const nearbyPlaces = rankedPlaces
    .filter((item) => item.driveMinutes != null
      && (state.distanceLimitHours === 1 ? item.driveMinutes >= 0 : item.driveMinutes > minMinutes)
      && item.driveMinutes <= maxMinutes
      && matchesPlaceFilter(item.place))
    .slice(0, 8);

  document.querySelectorAll(".distance-tab").forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.maxHours) === state.distanceLimitHours));
  });
  document.querySelector("#distance-intro").textContent =
    `${state.location.label} 출발 · 차량 ${timeRangeLabel} 거리의 장소예요. 앞 시간대에 포함된 장소는 제외했어요.`;

  if (!nearbyPlaces.length) {
    const emptyMessage = state.indoorOnly
      ? `차량 ${timeRangeLabel} 거리에서 실내 장소를 찾지 못했어요.`
      : `${state.location.label}에서 차량 ${timeRangeLabel} 거리로 예상되는 장소가 없어요. 다른 시간대를 선택해 보세요.`;
    list.innerHTML = `<li class="empty-state">${emptyMessage}</li>`;
    return;
  }

  nearbyPlaces.forEach(({ place, score, localForecast, driveMinutes }, index) => {
    const day = localForecast || fallbackDay;
    const [condition, icon] = weatherFor(day.code);
    const placeName = escapeHTML(place.name);
    const city = escapeHTML(place.city);
    const item = document.createElement("li");
    item.className = "ranked-place-item";
    item.innerHTML = `<span class="rank-number">${index + 1}</span>
      <span class="rank-place-icon" aria-hidden="true">${place.emoji}</span>
      <span class="rank-place-content">
        <strong class="rank-place-name">${placeName}</strong>
        <span class="rank-place-meta">${city} · ${formatDriveTime(driveMinutes)} · ${place.type === "indoor" ? "실내" : "야외"}</span>
        <span class="rank-place-weather">${icon} ${condition} · 추천 ${score}점</span>
      </span>
      <a class="rank-map-link" href="${naverDirectionsUrl(place)}" data-fallback-url="${naverWebDirectionsUrl(place)}" target="_blank" rel="noopener noreferrer" aria-label="${placeName} 네이버 자동차 길찾기">길찾기</a>
      <a class="rank-map-link" href="https://map.naver.com/p/search/${encodeURIComponent(place.map)}" target="_blank" rel="noopener noreferrer" aria-label="${placeName} 지도에서 보기">지도</a>
      <a class="rank-map-link" href="${nearbyFoodSearchUrl(place)}" target="_blank" rel="noopener noreferrer" aria-label="${placeName} 주변 식당 검색">식당</a>`;
    list.append(item);
  });
}

function outdoorWeatherNeedsBackup(day) {
  const isRainOrSnow = day.rain >= 40 || (day.code >= 51 && day.code <= 86);
  const isStorm = [95, 96, 99].includes(day.code);
  return isRainOrSnow || isStorm || day.wind >= 8 || day.min < 5 || day.max >= 30 || day.aqi > 100;
}

function renderWeatherAlternatives(rankedPlaces, day) {
  const section = document.querySelector("#weather-alternatives");
  const list = document.querySelector("#weather-alternative-list");
  if (!outdoorWeatherNeedsBackup(day)) {
    section.hidden = true;
    list.replaceChildren();
    return;
  }
  const alternatives = rankedPlaces
    .filter((item) => item.place.type === "indoor")
    .slice(0, 3);
  document.querySelector("#weather-alternative-note").textContent =
    "선택한 날짜의 비·눈·바람·기온·공기질을 고려해 실내 장소를 골랐어요. 방문 전 운영 여부를 확인해 주세요.";
  list.replaceChildren();
  if (!alternatives.length) {
    list.innerHTML = '<div class="empty-state">조건에 맞는 실내 대체 장소가 아직 없어요.</div>';
  }
  alternatives.forEach(({ place, localForecast, driveMinutes }) => {
    const item = document.createElement("article");
    item.className = "weather-alternative-card";
    const placeName = escapeHTML(place.name);
    const city = escapeHTML(place.city);
    const saved = state.itinerary.some((savedPlace) => savedPlace.name === place.name);
    const destinationDay = localForecast || day;
    const [condition, icon] = weatherFor(destinationDay.code);
    const foodLink = `<a class="rank-map-link" href="${nearbyFoodSearchUrl(place)}" target="_blank" rel="noopener noreferrer" aria-label="${placeName} 주변 식당 검색">식당</a>`;
    item.innerHTML = `<span class="place-emoji" aria-hidden="true">${escapeHTML(place.emoji)}</span>
      <div class="weather-alternative-content">
        <strong>${placeName}</strong>
        <span>${city} · ${formatDriveTime(driveMinutes)}</span>
        <span>${icon} ${condition} · 비 ${Math.round(destinationDay.rain)}%</span>
      </div>
      ${foodLink}
      <button type="button" class="alternative-save-button" data-save-place="${encodeURIComponent(place.name)}" ${saved ? "disabled" : ""}>${saved ? "코스에 담김" : "코스에 담기"}</button>`;
    list.append(item);
  });
  section.hidden = false;
}

function renderRecommendations() {
  renderItinerary();
  renderSuggestedItinerary();
  renderVisitedPlaces();
  placeList.replaceChildren();
  rankedPlaceList.replaceChildren();
  const day = state.forecast.find((item) => item.date === state.selectedDate);
  if (!day) {
    document.querySelector("#weather-alternatives").hidden = true;
    placeList.innerHTML = '<div class="empty-state">날씨 정보를 불러오면 나들이 장소를 추천해 드릴게요.</div>';
    document.querySelector("#distance-place-list").innerHTML =
      '<li class="empty-state">날씨를 불러오면 거리별 추천 장소를 보여드릴게요.</li>';
    return;
  }

  const rankedPlaces = rankDestinations(day);
  const filteredPlaces = rankedPlaces.filter(({ place }) => matchesPlaceFilter(place));
  renderRankedPlaces(filteredPlaces, day);
  renderDistanceRecommendations(rankedPlaces, day);
  renderWeatherAlternatives(rankedPlaces, day);
  const candidates = selectRecommendationPlaces(filteredPlaces, day);
  const [condition] = weatherFor(day.code);
  const childSummary = state.family.childAges.length
    ? `아이 만 ${state.family.childAges.join("·")}세`
    : "아이 동반 없음";
  document.querySelector("#recommend-intro").textContent =
    `${dateLabel(day.date, { month: "long", day: "numeric", weekday: "long" })} · 어른 ${state.family.adults}명, ${childSummary} · ${condition}, ${Math.round(day.min)}~${Math.round(day.max)}° · 비 ${Math.round(day.rain)}%`;
  document.querySelector("#recommendation-feedback").textContent = state.recommendationFeedback;
  document.querySelector("#undo-visit").hidden = !state.lastVisitedPlace;

  if (!candidates.length) {
    placeList.innerHTML = '<div class="empty-state">현재 조건에 맞는 장소가 아직 없어요. 출발 지역이나 실내 필터를 확인해 보세요.</div>';
  }
  candidates.forEach(({ place, score, reason, localForecast, driveMinutes }) => {
    const card = document.createElement("article");
    card.className = "place-card";
    const placeName = escapeHTML(place.name);
    const city = escapeHTML(place.city);
    const mapUrl = `https://map.naver.com/p/search/${encodeURIComponent(place.map)}`;
    const eventQuery = encodeURIComponent(`${place.city} ${place.name} 운영시간`);
    const [localCondition] = weatherFor(localForecast?.code ?? day.code);
    const nearbyRestaurants = getNearbyRestaurants(place);
    const foodHighlight = nearbyRestaurants.length
      ? `<div class="nearby-food-box">🍴 <strong>주변 식당:</strong> ${nearbyRestaurants.map((restaurant) => escapeHTML(restaurant.name)).join(", ")}</div>`
      : "";
    const localWeatherSummary = localForecast
      ? `${city} 현지예보 ${localCondition} · ${Math.round(localForecast.min)}~${Math.round(localForecast.max)}° · 비 ${Math.round(localForecast.rain)}%${localForecast.aqi == null ? "" : ` · AQI ${Math.round(localForecast.aqi)}`}`
      : `${city} 현지 예보 없음 · ${escapeHTML(state.location.label)} 예보로 추천`;
    card.innerHTML = `<div class="place-main">
        <div class="place-emoji" aria-hidden="true">${place.emoji}</div>
        <div class="place-content">
          <div class="place-title-row"><h3 class="place-title">${placeName}</h3><span class="score-pill">추천 ${score}점</span></div>
          <p class="place-meta">${city} · ${formatDriveTime(driveMinutes)} · ${place.type === "indoor" ? "실내" : "야외"}</p>
          <p class="place-description">${place.description}</p>
          <div class="place-tags">${place.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        </div>
      </div>
      <div class="place-reason">${localWeatherSummary}<br>${reason}</div>
      ${foodHighlight}
      <div class="place-actions five-actions">
        <a class="action-link primary" href="${mapUrl}" target="_blank" rel="noopener noreferrer">지도에서 보기</a>
        <a class="action-link" href="https://search.naver.com/search.naver?query=${eventQuery}" target="_blank" rel="noopener noreferrer">운영정보 확인</a>
        <a class="action-link food-link" href="${nearbyFoodSearchUrl(place)}" target="_blank" rel="noopener noreferrer">🍴 주변 맛집 찾기</a>
        <button class="action-link itinerary-add-button" type="button" data-save-place="${encodeURIComponent(place.name)}" ${state.itinerary.some((savedPlace) => savedPlace.name === place.name) ? "disabled" : ""}>${state.itinerary.some((savedPlace) => savedPlace.name === place.name) ? "코스에 담김" : "코스에 담기"}</button>
        <button class="action-link visited-button" type="button" data-visited-place="${encodeURIComponent(place.name)}">✓ 다녀왔어요${state.visitedPlaces[place.name] ? ` · ${state.visitedPlaces[place.name].count}회` : ""}</button>
      </div>`;
    if ([95, 96, 99].includes(localForecast?.code ?? day.code) && place.type === "outdoor") card.classList.add("weather-warning");
    placeList.append(card);
  });
  placeList.querySelectorAll(".visited-button").forEach((button) => {
    button.addEventListener("click", () => recordPlaceVisit(decodeURIComponent(button.dataset.visitedPlace)));
  });
  document.querySelectorAll("[data-save-place]").forEach((button) => {
    button.addEventListener("click", () => addPlaceToItinerary(decodeURIComponent(button.dataset.savePlace)));
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
    const matches = EVENTS.filter((event) => event.months.includes(month));
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
    `${startYear} ${startYear + 1} ${state.location.label} 주변 전국 지역축제 일정`
  );
  const searchLink = document.createElement("a");
  searchLink.className = "event-overview-link";
  searchLink.href = `https://search.naver.com/search.naver?query=${searchQuery}`;
  searchLink.target = "_blank";
  searchLink.rel = "noopener noreferrer";
  searchLink.textContent = "전체 축제 확정 일정 한 번에 검색 ↗";
  eventList.append(searchLink);
}

function initializeViewNavigation() {
  const views = [...document.querySelectorAll("[data-view-page]")];
  const buttons = [...document.querySelectorAll("[data-view]")];
  const headingViews = new Map([
    ["#recommend-heading", "recommendations"],
    ["#distance-heading", "distance"],
    ["#visited-heading", "visited"],
    ["#itinerary-heading", "itinerary"],
    ["#events-heading", "events"]
  ]);
  const initialView = headingViews.get(location.hash)
    || views.find((view) => `#${view.id}` === location.hash)?.dataset.viewPage
    || "recommendations";

  const activateView = (viewName, updateAddress = true) => {
    if (!views.some((view) => view.dataset.viewPage === viewName)) return;
    views.forEach((view) => {
      view.hidden = view.dataset.viewPage !== viewName;
    });
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.view === viewName));
    });
    if (updateAddress) history.replaceState(null, "", `#${viewName}-view`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => activateView(button.dataset.view));
  });
  activateView(initialView, false);
}

async function loadWeather() {
  const requestId = ++state.weatherRequestId;
  weatherStatus.className = "weather-status";
  weatherStatus.textContent = `${state.location.label} 주말 예보와 목적지별 예보를 불러오는 중이에요…`;
  document.querySelector("#refresh-button").disabled = true;
  const weatherPlaces = [...new Map(DESTINATIONS
    .filter((place) => {
      const driveMinutes = estimateDriveMinutes(place);
      return driveMinutes != null && driveMinutes <= 180;
    })
    .map((place) => [`${place.latitude.toFixed(4)}:${place.longitude.toFixed(4)}`, place])).values()];
  const locations = [state.location, ...weatherPlaces];
  const params = new URLSearchParams({
    latitude: locations.map((location) => location.latitude).join(","),
    longitude: locations.map((location) => location.longitude).join(","),
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max",
    hourly: "weather_code",
    timezone: "Asia/Seoul",
    forecast_days: "7"
  });
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, {
      signal: AbortSignal.timeout(WEATHER_REQUEST_TIMEOUT)
    });
    if (!response.ok) throw new Error(`날씨 서비스 응답 오류 (${response.status})`);
    const responseData = await response.json();
    if (requestId !== state.weatherRequestId) return;
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
    state.forecast.forEach((day) => {
      day.ampm = summarizeAmPmWeather(weatherLocations[0].hourly, day.date);
    });
    const weatherByCoordinates = new Map(weatherPlaces.map((place, index) => [
      `${place.latitude.toFixed(4)}:${place.longitude.toFixed(4)}`,
      weatherLocations[index + 1]?.daily?.time?.length
        ? parseDailyWeather(weatherLocations[index + 1].daily)
        : new Map()
    ]));
    state.destinationWeather = new Map(DESTINATIONS.map((place) => [
      place.name,
      weatherByCoordinates.get(`${place.latitude.toFixed(4)}:${place.longitude.toFixed(4)}`) || new Map()
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
      const airResponse = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?${airParams}`, {
        signal: AbortSignal.timeout(AIR_QUALITY_REQUEST_TIMEOUT)
      });
      if (!airResponse.ok) throw new Error(`공기질 서비스 응답 오류 (${airResponse.status})`);
      const airResponseData = await airResponse.json();
      if (requestId !== state.weatherRequestId) return;
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
      weatherPlaces.forEach((place, index) => {
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
    if (requestId !== state.weatherRequestId) return;
    weatherStatus.className = "weather-status error";
    weatherStatus.textContent = error.name === "TimeoutError"
      ? "날씨 응답이 늦어지고 있어요. 잠시 후 다시 시도해 주세요."
      : "날씨를 불러오지 못했어요. 인터넷 연결을 확인하고 다시 시도해 주세요.";
    placeList.innerHTML = '<div class="empty-state">날씨 정보에 연결할 수 없어 추천을 잠시 표시하지 못했어요. 메인 화면 날씨의 새로고침을 눌러 다시 시도해 주세요.</div>';
    document.querySelector("#weather-alternatives").hidden = true;
    document.querySelector("#weather-alternative-list").replaceChildren();
    document.querySelector("#distance-place-list").innerHTML =
      '<li class="empty-state">날씨 정보를 불러오지 못했어요. 연결을 확인한 뒤 다시 시도해 주세요.</li>';
    document.querySelector("#home-weather-footnote").textContent = "날씨 서비스가 응답하지 않아 추천을 갱신하지 못했어요.";
  } finally {
    if (requestId === state.weatherRequestId) document.querySelector("#refresh-button").disabled = false;
  }
}

async function refreshPlacesForCurrentLocation(force = false) {
  state.destinationWeather.clear();
  const placeRefresh = refreshDiscoveredPlaces(force);
  await loadWeather();
  const placesUpdated = await placeRefresh;
  if (placesUpdated && state.forecast.length) renderRecommendations();
  await fetchActualRoadTimes();
}

function useCurrentLocation() {
  if (!navigator.geolocation) {
    weatherStatus.className = "weather-status error";
    weatherStatus.textContent = "이 브라우저에서는 현재 위치를 사용할 수 없어요. 위에서 출발 지역을 선택해 주세요.";
    return;
  }
  weatherStatus.className = "weather-status";
  weatherStatus.textContent = "현재 위치를 확인하고 있어요…";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        label: "현재 위치",
        island: isJejuCoordinates(position.coords.latitude, position.coords.longitude) ? "jeju" : undefined
      };
      state.routeRequestId += 1;
      state.roadDurationMap.clear();
      state.suggestedItinerary = [];
      document.querySelector("#suggested-itinerary-summary").textContent =
        "출발 지역이 바뀌었어요. 코스를 다시 추천받아 보세요.";
      document.querySelector("#location-select").value = "current";
      state.selectedDate = null;
      state.forecast = [];
      state.destinationWeather.clear();
      renderDays();
      renderRecommendations();
      renderEvents();
      refreshPlacesForCurrentLocation();
    },
    () => {
      weatherStatus.className = "weather-status error";
      weatherStatus.textContent = "위치 권한을 확인할 수 없어요. 출발 지역을 직접 선택해 주세요.";
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
  );
}

document.querySelector("#refresh-button").addEventListener("click", loadWeather);
document.querySelector("#refresh-places-button").addEventListener("click", () => {
  document.querySelector("#refresh-places-button").disabled = true;
  document.querySelector("#place-data-status .place-data-copy").textContent = "주변의 새 장소를 찾고 있어요…";
  refreshPlacesForCurrentLocation(true);
});
document.querySelector("#location-button").addEventListener("click", useCurrentLocation);
document.querySelectorAll(".distance-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.distanceLimitHours = Number(button.dataset.maxHours);
    renderRecommendations();
  });
});
document.querySelector("#shuffle-recommendations").addEventListener("click", () => {
  const day = state.forecast.find((item) => item.date === state.selectedDate);
  if (!day) {
    state.recommendationFeedback = "날씨를 불러온 뒤 다른 코스를 추천해 드릴게요.";
    document.querySelector("#recommendation-feedback").textContent = state.recommendationFeedback;
    return;
  }
  saveRecommendationCycle(day);
  state.recommendationFeedback = "날씨와 가족 조건은 유지하고, 다른 지역·종류의 코스를 골랐어요.";
  renderRecommendations();
});
document.querySelector("#undo-visit").addEventListener("click", undoPlaceVisit);
document.querySelector("#itinerary-list").addEventListener("click", handleItineraryAction);
document.querySelector("#share-itinerary").addEventListener("click", shareItinerary);
document.querySelector("#recommend-itinerary").addEventListener("click", recommendItinerary);
document.querySelector("#add-suggested-itinerary").addEventListener("click", addSuggestedItinerary);
document.querySelector("#export-visited").addEventListener("click", exportVisitedBackup);
document.querySelector("#import-visited-input").addEventListener("change", importVisitedBackup);
document.querySelector("#visited-place-list").addEventListener("change", (event) => {
  const input = event.target.closest("[data-visited-memo]");
  if (!input) return;
  saveVisitedMemo(decodeURIComponent(input.dataset.visitedMemo), input.value);
});
document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest('a[href^="nmap://"]');
  if (!link) return;
  event.preventDefault();
  const fallbackUrl = link.dataset.fallbackUrl;
  if (!fallbackUrl) return;
  setTimeout(() => {
    if (document.visibilityState === "visible") window.location.assign(fallbackUrl);
  }, 1200);
  window.location.href = link.href;
});
initializeLocationSettings();
loadVisitedPlaces();
loadItinerary();
initializeIndoorFilter();
initializeFamilySettings();
restoreSharedItineraryFromUrl();
initializeViewNavigation();
renderVisitedPlaces();
renderItinerary();
renderSuggestedItinerary();
renderEvents();
refreshPlacesForCurrentLocation();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => console.warn("오프라인 캐시를 설정하지 못했습니다.", error));
  });
}
