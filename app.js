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
    name: "순천만국가정원", city: "순천", distance: "시내", driveMinutes: 0, latitude: 34.9270, longitude: 127.4980, type: "outdoor", emoji: "🌷",
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
    name: "순천드라마촬영장", city: "순천", distance: "차량 약 15분", driveMinutes: 15, latitude: 34.9568, longitude: 127.5382, type: "outdoor", emoji: "🎬",
    description: "옛 거리와 세트장을 구경하는 가벼운 야외 나들이 코스예요.",
    tags: ["짧은 산책", "유모차 확인", "야외 코스"], weather: "비 적은 날",
    map: "순천드라마촬영장"
  },
  {
    name: "여수 아쿠아플라넷", city: "여수", distance: "차량 약 40분", driveMinutes: 40, latitude: 34.7463, longitude: 127.7486, type: "indoor", emoji: "🐠",
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
    name: "여수 아쿠아리움·엑스포 해양공원", city: "여수", distance: "차량 약 40분", driveMinutes: 40, latitude: 34.7470, longitude: 127.7460, type: "indoor", emoji: "⛵",
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
    name: "남해 독일마을", city: "남해", distance: "차량 약 1시간 40분", driveMinutes: 100, latitude: 34.7992, longitude: 128.0401, type: "outdoor", emoji: "🏡",
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
    name: "고흥 나로우주센터 우주과학관", city: "고흥", distance: "차량 약 1시간 30분", driveMinutes: 90, latitude: 34.4536, longitude: 127.5176, type: "indoor", emoji: "🚀",
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
    name: "임실치즈테마파크", city: "임실", distance: "차량 약 1시간 40분", driveMinutes: 100, latitude: 35.6332, longitude: 127.3014, type: "outdoor", emoji: "🧀",
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
    name: "강진 고려청자박물관", city: "강진", distance: "차량 약 1시간 20분", driveMinutes: 80, latitude: 34.5086, longitude: 126.8009, type: "indoor", emoji: "🏺",
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
    name: "나주 국립나주박물관", city: "나주", distance: "차량 약 1시간 20분", driveMinutes: 80, latitude: 34.9151, longitude: 126.6595, type: "indoor", emoji: "🏛️",
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
    name: "익산 보석박물관", city: "익산", distance: "차량 약 2시간 10분", driveMinutes: 130, latitude: 35.9894, longitude: 127.0997, type: "indoor", emoji: "💎",
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
    name: "사천 항공우주박물관", city: "사천", distance: "차량 약 1시간 40분", driveMinutes: 100, latitude: 35.0717, longitude: 128.0632, type: "indoor", emoji: "✈️",
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
    name: "국립대구과학관", city: "대구", distance: "", driveMinutes: 0, latitude: 35.6866, longitude: 128.4651, type: "indoor", emoji: "🧪",
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
    tags: ["쇼핑몰·백화점", "실내", "식사·쇼핑", "운영정보 확인"], weather: "비·추위·더위 피하기", map: "스타필드 하남",
    category: "쇼핑몰·백화점"
  },
  {
    name: "스타필드 코엑스몰", city: "서울", distance: "", driveMinutes: 0, latitude: 37.5125, longitude: 127.0591, type: "indoor", emoji: "🛍️",
    description: "쇼핑과 식사, 별마당도서관 등을 한곳에서 즐길 수 있어요. 주말 혼잡도와 시설별 운영시간을 확인해 주세요.",
    tags: ["쇼핑몰·백화점", "실내", "식사·쇼핑", "운영정보 확인"], weather: "비·추위·더위 피하기", map: "스타필드 코엑스몰", category: "쇼핑몰·백화점"
  },
  {
    name: "더현대 서울", city: "서울", distance: "", driveMinutes: 0, latitude: 37.5259, longitude: 126.9285, type: "indoor", emoji: "🛍️",
    description: "쇼핑과 식사, 실내 휴식을 함께 즐길 수 있어요. 주말 혼잡도와 유아 편의시설을 확인해 주세요.",
    tags: ["쇼핑몰·백화점", "실내", "식사·쇼핑", "운영정보 확인"], weather: "비·추위·더위 피하기", map: "더현대 서울", category: "쇼핑몰·백화점"
  },
  {
    name: "스타필드 수원", city: "수원", distance: "", driveMinutes: 0, latitude: 37.2864, longitude: 127.0008, type: "indoor", emoji: "🛍️",
    description: "쇼핑과 식사, 실내 휴식을 함께 즐길 수 있어요. 주말 혼잡도와 시설별 운영시간을 확인해 주세요.",
    tags: ["쇼핑몰·백화점", "실내", "식사·쇼핑", "운영정보 확인"], weather: "비·추위·더위 피하기", map: "스타필드 수원", category: "쇼핑몰·백화점"
  },
  {
    name: "신세계 센텀시티", city: "부산", distance: "", driveMinutes: 0, latitude: 35.1691, longitude: 129.1297, type: "indoor", emoji: "🛍️",
    description: "쇼핑과 식사, 실내 여가시설을 함께 이용할 수 있어요. 시설별 운영시간과 이용 조건을 확인해 주세요.",
    tags: ["쇼핑몰·백화점", "실내", "식사·쇼핑", "운영정보 확인"], weather: "비·추위·더위 피하기", map: "신세계백화점 센텀시티점", category: "쇼핑몰·백화점"
  },
  {
    name: "광장시장", city: "서울", distance: "", driveMinutes: 0, latitude: 37.5701, longitude: 126.9997, type: "outdoor", emoji: "🧺",
    description: "전통 먹거리와 상점을 둘러보는 도심 시장 나들이예요. 운영시간과 주말 혼잡도, 유모차 이동 환경을 확인해 주세요.",
    tags: ["시장·장터", "먹거리", "혼잡 확인"], weather: "맑고 온화한 날", map: "광장시장", category: "시장·장터"
  },
  {
    name: "망원시장", city: "서울", distance: "", driveMinutes: 0, latitude: 37.5563, longitude: 126.9056, type: "outdoor", emoji: "🧺",
    description: "동네 먹거리와 상점을 구경하며 가볍게 둘러보기 좋아요. 운영시간과 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "먹거리", "혼잡 확인"], weather: "맑고 온화한 날", map: "망원시장", category: "시장·장터"
  },
  {
    name: "남대문시장", city: "서울", distance: "", driveMinutes: 0, latitude: 37.5592, longitude: 126.9779, type: "outdoor", emoji: "🧺",
    description: "다양한 상점과 먹거리가 모인 전통시장입니다. 운영일과 혼잡도, 아이와 다닐 동선을 살펴보세요.",
    tags: ["시장·장터", "먹거리", "혼잡 확인"], weather: "맑고 온화한 날", map: "남대문시장", category: "시장·장터"
  },
  {
    name: "신포국제시장", city: "인천", distance: "", driveMinutes: 0, latitude: 37.4738, longitude: 126.6252, type: "outdoor", emoji: "🧺",
    description: "인천 원도심의 먹거리와 상점을 둘러보는 시장 나들이예요. 운영시간과 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "신포국제시장", category: "시장·장터"
  },
  {
    name: "수원 남문시장", city: "수원", distance: "", driveMinutes: 0, latitude: 37.2778, longitude: 127.0192, type: "outdoor", emoji: "🧺",
    description: "여러 전통시장이 모인 수원 화성 주변 시장 골목을 둘러보세요. 주말 혼잡과 주차 위치를 확인해 주세요.",
    tags: ["시장·장터", "먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "수원 남문시장", category: "시장·장터"
  },
  {
    name: "서문시장", city: "대구", distance: "", driveMinutes: 0, latitude: 35.8686, longitude: 128.5827, type: "outdoor", emoji: "🧺",
    description: "먹거리와 상점, 야시장을 즐길 수 있는 대구 대표 전통시장이에요. 운영시간과 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "먹거리", "운영시간 확인"], weather: "맑고 온화한 날", map: "대구 서문시장", category: "시장·장터"
  },
  {
    name: "대전 중앙시장", city: "대전", distance: "", driveMinutes: 0, latitude: 36.3275, longitude: 127.4281, type: "outdoor", emoji: "🧺",
    description: "대전역 인근의 전통시장 골목에서 먹거리와 상점을 둘러볼 수 있어요. 운영시간과 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "대전 중앙시장", category: "시장·장터"
  },
  {
    name: "양동시장", city: "광주", distance: "", driveMinutes: 0, latitude: 35.1521, longitude: 126.9046, type: "outdoor", emoji: "🧺",
    description: "광주 도심의 전통시장과 먹거리를 둘러보는 생활형 나들이예요. 운영시간과 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "광주 양동시장", category: "시장·장터"
  },
  {
    name: "전주 남부시장", city: "전주", distance: "", driveMinutes: 0, latitude: 35.8114, longitude: 127.1476, type: "outdoor", emoji: "🧺",
    description: "전주천과 한옥마을 가까이에서 전통시장 먹거리를 즐길 수 있어요. 야시장 운영일과 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "먹거리", "운영일 확인"], weather: "맑고 온화한 날", map: "전주 남부시장", category: "시장·장터"
  },
  {
    name: "자갈치시장", city: "부산", distance: "", driveMinutes: 0, latitude: 35.0967, longitude: 129.0304, type: "outdoor", emoji: "🧺",
    description: "부산 바다와 수산시장 풍경을 함께 볼 수 있어요. 아이와 방문할 때는 혼잡한 통로와 식당 이용 정보를 확인해 주세요.",
    tags: ["시장·장터", "바다·먹거리", "혼잡 확인"], weather: "맑고 온화한 날", map: "부산 자갈치시장", category: "시장·장터"
  },
  {
    name: "제주 동문재래시장", city: "제주", distance: "", driveMinutes: 0, latitude: 33.5127, longitude: 126.5271, type: "outdoor", emoji: "🧺",
    description: "제주 먹거리와 특산품을 둘러보기 좋은 도심 시장이에요. 운영시간과 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "먹거리", "운영시간 확인"], weather: "맑고 온화한 날", map: "제주 동문재래시장", island: "jeju", category: "시장·장터"
  },
  {
    name: "서귀포 매일올레시장", city: "서귀포", distance: "", driveMinutes: 0, latitude: 33.2498, longitude: 126.5643, type: "outdoor", emoji: "🧺",
    description: "제주 남쪽의 시장 먹거리와 상점을 즐겨보세요. 운영시간과 주말 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "먹거리", "운영시간 확인"], weather: "맑고 온화한 날", map: "서귀포 매일올레시장", island: "jeju", category: "시장·장터"
  },
  {
    name: "신사동 가로수길", city: "서울", distance: "", driveMinutes: 0, latitude: 37.5204, longitude: 127.0231, type: "outdoor", emoji: "🚶",
    description: "상점과 카페가 이어지는 도심 거리예요. 주말 혼잡도와 영업 정보를 확인하고 여유 있게 걸어보세요.",
    tags: ["인기 거리", "카페·상점", "도심 산책"], weather: "맑고 온화한 날", map: "신사동 가로수길", category: "인기 거리"
  },
  {
    name: "경리단길", city: "서울", distance: "", driveMinutes: 0, latitude: 37.5388, longitude: 126.9872, type: "outdoor", emoji: "🚶",
    description: "식당과 카페가 모인 이태원 인근 거리예요. 언덕과 주말 혼잡을 고려해 편한 신발을 준비하세요.",
    tags: ["인기 거리", "카페·상점", "언덕·혼잡 확인"], weather: "맑고 온화한 날", map: "경리단길", category: "인기 거리"
  },
  {
    name: "성수동 카페거리", city: "서울", distance: "", driveMinutes: 0, latitude: 37.5445, longitude: 127.0561, type: "outdoor", emoji: "🚶",
    description: "카페와 편집숍, 팝업 공간을 둘러볼 수 있는 도심 거리예요. 주말 대기와 혼잡도를 확인해 주세요.",
    tags: ["인기 거리", "카페·상점", "주말 혼잡 확인"], weather: "맑고 온화한 날", map: "성수동 카페거리", category: "인기 거리"
  },
  {
    name: "수원 행리단길", city: "수원", distance: "", driveMinutes: 0, latitude: 37.2814, longitude: 127.0173, type: "outdoor", emoji: "🚶",
    description: "수원화성 주변 골목의 카페와 상점을 산책하며 즐겨보세요. 주말 혼잡과 주차 위치를 확인해 주세요.",
    tags: ["인기 거리", "카페·상점", "성곽 산책"], weather: "맑고 온화한 날", map: "수원 행리단길", category: "인기 거리"
  },
  {
    name: "대구 동성로", city: "대구", distance: "", driveMinutes: 0, latitude: 35.8691, longitude: 128.5962, type: "outdoor", emoji: "🚶",
    description: "쇼핑과 먹거리가 모인 대구 중심 거리예요. 주말 혼잡도와 주차 위치를 확인해 주세요.",
    tags: ["인기 거리", "쇼핑·먹거리", "도심 산책"], weather: "맑고 온화한 날", map: "대구 동성로", category: "인기 거리"
  },
  {
    name: "대전 으능정이문화의거리", city: "대전", distance: "", driveMinutes: 0, latitude: 36.3281, longitude: 127.4274, type: "outdoor", emoji: "🚶",
    description: "대전 원도심의 상점과 먹거리를 둘러볼 수 있는 번화가예요. 주말 혼잡과 행사 정보를 확인해 주세요.",
    tags: ["인기 거리", "쇼핑·먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "으능정이문화의거리", category: "인기 거리"
  },
  {
    name: "광주 충장로", city: "광주", distance: "", driveMinutes: 0, latitude: 35.1485, longitude: 126.9155, type: "outdoor", emoji: "🚶",
    description: "광주 원도심의 쇼핑 거리와 주변 문화 공간을 함께 둘러보세요. 운영 정보와 혼잡도를 확인해 주세요.",
    tags: ["인기 거리", "쇼핑·먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "광주 충장로", category: "인기 거리"
  },
  {
    name: "부산 전포카페거리", city: "부산", distance: "", driveMinutes: 0, latitude: 35.1545, longitude: 129.0641, type: "outdoor", emoji: "🚶",
    description: "카페와 개성 있는 상점이 모인 골목을 걸어보세요. 주말 대기와 혼잡도를 확인해 주세요.",
    tags: ["인기 거리", "카페·상점", "주말 혼잡 확인"], weather: "맑고 온화한 날", map: "부산 전포카페거리", category: "인기 거리"
  },
  {
    name: "춘천 명동 닭갈비골목", city: "춘천", distance: "", driveMinutes: 0, latitude: 37.8802, longitude: 127.7278, type: "outdoor", emoji: "🚶",
    description: "춘천 명동의 먹거리 골목을 둘러보는 도심 나들이예요. 식당 대기와 영업시간을 확인해 주세요.",
    tags: ["인기 거리", "먹거리", "영업정보 확인"], weather: "맑고 온화한 날", map: "춘천 명동 닭갈비골목", category: "인기 거리"
  },
  {
    name: "제주 칠성로 쇼핑거리", city: "제주", distance: "", driveMinutes: 0, latitude: 33.5144, longitude: 126.5256, type: "outdoor", emoji: "🚶",
    description: "제주 원도심의 상점가와 먹거리를 둘러보세요. 운영시간과 주말 혼잡도를 확인해 주세요.",
    tags: ["인기 거리", "쇼핑·먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "제주 칠성로 쇼핑거리", island: "jeju", category: "인기 거리"
  },
  {
    name: "순천 아랫장", city: "순천", distance: "", driveMinutes: 0, latitude: 34.9447, longitude: 127.4937, type: "outdoor", emoji: "🧺",
    description: "순천의 큰 전통시장에서 지역 먹거리와 상점을 둘러보세요. 장날과 운영시간, 주말 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "지역 먹거리", "장날 확인"], weather: "맑고 온화한 날", map: "순천 아랫장", category: "시장·장터"
  },
  {
    name: "순천 웃장", city: "순천", distance: "", driveMinutes: 0, latitude: 34.9612, longitude: 127.4848, type: "outdoor", emoji: "🧺",
    description: "순천 북부 도심의 전통시장 골목을 둘러보는 생활형 나들이예요. 운영시간과 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "지역 먹거리", "운영시간 확인"], weather: "맑고 온화한 날", map: "순천 웃장", category: "시장·장터"
  },
  {
    name: "순천 문화의거리", city: "순천", distance: "", driveMinutes: 0, latitude: 34.9571, longitude: 127.4845, type: "outdoor", emoji: "🚶",
    description: "원도심 골목의 상점과 문화 공간을 산책하며 둘러보세요. 행사와 점포 운영시간을 확인해 주세요.",
    tags: ["인기 거리", "원도심 산책", "상점·문화"], weather: "맑고 온화한 날", map: "순천 문화의거리", category: "인기 거리"
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
  },
  {
    name: "조치원전통시장", city: "세종", distance: "", driveMinutes: 0, latitude: 36.6012, longitude: 127.2982, type: "outdoor", emoji: "🧺",
    description: "세종 북부의 전통시장 골목에서 지역 먹거리와 상점을 둘러보세요. 장날과 운영시간을 확인해 주세요.",
    tags: ["시장·장터", "지역 먹거리", "장날 확인"], weather: "맑고 온화한 날", map: "조치원전통시장", category: "시장·장터"
  },
  {
    name: "청주 육거리종합시장", city: "청주", distance: "", driveMinutes: 0, latitude: 36.6247, longitude: 127.4894, type: "outdoor", emoji: "🧺",
    description: "청주 도심의 큰 전통시장에서 먹거리와 상점을 구경해요. 운영시간과 주말 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "지역 먹거리", "혼잡 확인"], weather: "맑고 온화한 날", map: "청주 육거리종합시장", category: "시장·장터"
  },
  {
    name: "청주 성안길", city: "청주", distance: "", driveMinutes: 0, latitude: 36.6354, longitude: 127.4895, type: "outdoor", emoji: "🚶",
    description: "청주 원도심의 상점과 먹거리를 둘러보는 도심 산책 코스예요. 주말 혼잡도와 운영시간을 확인해 주세요.",
    tags: ["인기 거리", "쇼핑·먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "청주 성안길", category: "인기 거리"
  },
  {
    name: "천안 중앙시장", city: "천안", distance: "", driveMinutes: 0, latitude: 36.8073, longitude: 127.1477, type: "outdoor", emoji: "🧺",
    description: "천안역 인근의 전통시장 골목에서 지역 먹거리와 상점을 둘러보세요.",
    tags: ["시장·장터", "지역 먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "천안 중앙시장", category: "시장·장터"
  },
  {
    name: "천안 신세계백화점", city: "천안", distance: "", driveMinutes: 0, latitude: 36.8191, longitude: 127.1562, type: "indoor", emoji: "🛍️",
    description: "천안역 인근에서 쇼핑과 식사를 실내에서 즐길 수 있어요. 운영시간과 주말 혼잡도를 확인해 주세요.",
    tags: ["쇼핑몰·백화점", "실내", "식사·쇼핑"], weather: "비·추위·더위 피하기", map: "신세계백화점 천안아산점", category: "쇼핑몰·백화점"
  },
  {
    name: "춘천 중앙시장", city: "춘천", distance: "", driveMinutes: 0, latitude: 37.8798, longitude: 127.7278, type: "outdoor", emoji: "🧺",
    description: "춘천 원도심의 전통시장과 먹거리 골목을 둘러보세요. 운영시간과 주말 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "지역 먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "춘천 중앙시장", category: "시장·장터"
  },
  {
    name: "안동 구시장", city: "안동", distance: "", driveMinutes: 0, latitude: 36.5651, longitude: 128.7254, type: "outdoor", emoji: "🧺",
    description: "안동의 전통시장과 찜닭 골목을 함께 둘러보는 도심 나들이예요. 영업시간과 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "지역 먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "안동 구시장", category: "시장·장터"
  },
  {
    name: "안동 문화의거리", city: "안동", distance: "", driveMinutes: 0, latitude: 36.5658, longitude: 128.7295, type: "outdoor", emoji: "🚶",
    description: "안동 원도심의 상점과 문화 공간을 가볍게 둘러보세요. 점포 운영시간을 확인해 주세요.",
    tags: ["인기 거리", "원도심 산책", "상점·문화"], weather: "맑고 온화한 날", map: "안동 문화의거리", category: "인기 거리"
  },
  {
    name: "울산 신정시장", city: "울산", distance: "", driveMinutes: 0, latitude: 35.5395, longitude: 129.3098, type: "outdoor", emoji: "🧺",
    description: "울산 도심의 전통시장 먹거리와 상점을 구경해요. 운영시간과 주말 혼잡도를 확인해 주세요.",
    tags: ["시장·장터", "지역 먹거리", "혼잡 확인"], weather: "맑고 온화한 날", map: "울산 신정시장", category: "시장·장터"
  },
  {
    name: "울산 성남동 젊음의거리", city: "울산", distance: "", driveMinutes: 0, latitude: 35.5532, longitude: 129.3202, type: "outdoor", emoji: "🚶",
    description: "울산 원도심의 상점과 먹거리, 문화 공간을 둘러보는 거리예요. 운영시간과 혼잡도를 확인해 주세요.",
    tags: ["인기 거리", "쇼핑·먹거리", "원도심 산책"], weather: "맑고 온화한 날", map: "울산 성남동 젊음의거리", category: "인기 거리"
  },
  {
    name: "창원 상남동 거리", city: "창원", distance: "", driveMinutes: 0, latitude: 35.2215, longitude: 128.6818, type: "outdoor", emoji: "🚶",
    description: "식당과 상점이 모인 창원 도심 거리예요. 주말 혼잡도와 주차 위치를 확인해 주세요.",
    tags: ["인기 거리", "쇼핑·먹거리", "도심 산책"], weather: "맑고 온화한 날", map: "창원 상남동 거리", category: "인기 거리"
  },
  {
    name: "마산어시장", city: "창원", distance: "", driveMinutes: 0, latitude: 35.2017, longitude: 128.5766, type: "outdoor", emoji: "🧺",
    description: "마산 바닷가의 수산시장과 먹거리를 둘러보세요. 운영시간과 혼잡한 통로를 확인해 주세요.",
    tags: ["시장·장터", "수산시장", "먹거리"], weather: "맑고 온화한 날", map: "마산어시장", category: "시장·장터"
  },
  {
    name: "전주 객리단길", city: "전주", distance: "", driveMinutes: 0, latitude: 35.8192, longitude: 127.1411, type: "outdoor", emoji: "🚶",
    description: "전주 원도심의 카페와 상점, 식당을 둘러보는 거리예요. 주말 대기와 혼잡도를 확인해 주세요.",
    tags: ["인기 거리", "카페·상점", "원도심 산책"], weather: "맑고 온화한 날", map: "전주 객리단길", category: "인기 거리"
  },
  {
    name: "광주 신세계백화점", city: "광주", distance: "", driveMinutes: 0, latitude: 35.1601, longitude: 126.8828, type: "indoor", emoji: "🛍️",
    description: "쇼핑과 식사, 실내 휴식을 함께 즐길 수 있어요. 운영시간과 주말 혼잡도를 확인해 주세요.",
    tags: ["쇼핑몰·백화점", "실내", "식사·쇼핑"], weather: "비·추위·더위 피하기", map: "광주 신세계백화점", category: "쇼핑몰·백화점"
  },
  {
    name: "대구 신세계백화점", city: "대구", distance: "", driveMinutes: 0, latitude: 35.8775, longitude: 128.6289, type: "indoor", emoji: "🛍️",
    description: "동대구역과 연결된 실내 쇼핑·식사 코스예요. 주말 혼잡도와 시설별 이용 정보를 확인해 주세요.",
    tags: ["쇼핑몰·백화점", "실내", "식사·쇼핑"], weather: "비·추위·더위 피하기", map: "신세계백화점 대구점", category: "쇼핑몰·백화점"
  }
];
DESTINATIONS.push(...ADDITIONAL_CURATED_PLACES);
(Array.isArray(window.EXTRA_CURATED_PLACES) ? window.EXTRA_CURATED_PLACES : []).forEach((place) => {
  if (!DESTINATIONS.some((saved) => saved.name === place.name)) DESTINATIONS.push(place);
});
const BASE_DESTINATION_COUNT = DESTINATIONS.length;
const PLACE_CACHE_KEY = "weekend-outing-osm-cache-v5";
const CUSTOM_PLACES_KEY = "weekend-outing-custom-places";
const MAX_CUSTOM_PLACES = 60;
const NOMINATIM_SEARCH_ENDPOINT = "https://nominatim.openstreetmap.org/search";
const ITINERARY_KEY = "weekend-outing-itinerary";
const VISITED_KEY = "weekend-outing-visited";
const FAMILY_KEY = "weekend-outing-family";
const INDOOR_FILTER_KEY = "weekend-outing-indoor-only";
const LEGACY_AMENITY_FILTER_KEY = "weekend-outing-amenity-filters";
const PLACE_REFRESH_INTERVAL = 7 * 24 * 60 * 60 * 1000;
const MAX_RECOMMENDATION_DRIVE_MINUTES = 180;
// 대형 명소(박물관·동물원·테마파크 등)는 넓게, 공원·유적·시장 등 개수가 많은 유형은 좁게 찾아
// 공개 Overpass 서버의 응답 시간을 줄입니다.
const MAJOR_PLACE_SEARCH_RADIUS_METERS = 100000;
const LOCAL_PLACE_SEARCH_RADIUS_METERS = 40000;
const FOOD_SEARCH_RADIUS_METERS = 10000;
const OVERPASS_REQUEST_TIMEOUT = 60000;
const MINOR_PARK_NAME_PATTERN = /어린이공원$|소공원$|쌈지|마을마당|근린공원$|체육공원$/;
const POPULAR_STREET_PATTERN = /가로수길|경리단길|카페거리|객리단길|동성로|충장로|으능정이거리/;
const EVERYDAY_PLACE_CATEGORIES = new Set([
  "쇼핑몰·백화점", "시장·장터", "인기 거리", "보행 거리", "공원·자연",
  "박물관·전시", "동물·수족관", "테마파크", "역사·문화유산", "문화공간"
]);
const MAX_DISCOVERED_PLACES = 100;
const MAX_DISCOVERED_PER_CATEGORY = 15;
const RECOMMENDATION_CARD_COUNT = 6;
const WEATHER_REQUEST_TIMEOUT = 15000;
const AIR_QUALITY_REQUEST_TIMEOUT = 10000;
const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://maps.mail.ru/osm/tools/overpass/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter"
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
  roadDistanceMap: new Map(),
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
  discoveredPlaces: [],
  customPlaces: [],
  customPlaceResults: [],
  customPlaceFeedback: "",
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

  let savedRegion = null;
  try {
    savedRegion = localStorage.getItem("weekend-outing-region");
    if (REGIONS.some((region) => region.id === savedRegion)) state.locationRegion = savedRegion;
  } catch (error) {
    console.warn("저장된 출발 지역을 불러오지 못했습니다.", error);
  }
  // 마지막으로 '현재 위치'를 썼다면(12시간 이내) 새로고침해도 그 좌표를 출발지로 유지합니다.
  const savedCurrent = savedRegion === "current" ? loadSavedCurrentLocation() : null;
  if (savedCurrent) {
    state.location = savedCurrent;
    state.locationRegion = nearestRegionId(savedCurrent.latitude, savedCurrent.longitude);
    currentLocationOption.textContent = savedCurrent.label;
    select.value = "current";
  } else {
    const region = REGIONS.find((item) => item.id === state.locationRegion) || REGIONS.find((item) => item.id === "suncheon");
    state.location = { ...region };
    select.value = region.id;
  }
  select.addEventListener("change", () => {
    const selectedRegion = REGIONS.find((item) => item.id === select.value);
    if (!selectedRegion) return;
    state.locationRegion = selectedRegion.id;
    currentLocationOption.textContent = "현재 위치";
    try {
      localStorage.setItem("weekend-outing-region", selectedRegion.id);
    } catch (error) {
      console.warn("출발 지역을 이 기기에 저장하지 못했습니다.", error);
    }
    applyStartLocation({ ...selectedRegion });
  });
}

function isJejuCoordinates(latitude, longitude) {
  return latitude >= 32.8 && latitude <= 34.2 && longitude >= 125.5 && longitude <= 127.5;
}

const ROUTE_MATRIX_CACHE_KEY = "weekend-outing-route-matrix-v2";
const CURRENT_LOCATION_KEY = "weekend-outing-current-location";
const CURRENT_LOCATION_MAX_AGE_MS = 12 * 60 * 60 * 1000;
const OSRM_ROUTE_ENDPOINT = "https://router.project-osrm.org/route/v1/driving/";
const ROUTE_MATRIX_CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const OSRM_TABLE_ENDPOINT = "https://router.project-osrm.org/table/v1/driving/";
const OSRM_MAX_TARGETS = 90;
const OSRM_MAX_BATCHES = 4;
const MAJOR_TOURISM_CITIES = new Set([
  "강릉", "경주", "남해", "부산", "속초", "여수", "전주", "제주", "춘천",
  "통영", "평창", "거제", "서귀포", "보령"
]);
const MOUNTAIN_OR_COASTAL_CITIES = new Set([
  "강릉", "거제", "고성", "고흥", "남해", "삼척", "속초", "양양", "여수",
  "영월", "인제", "정선", "태백", "통영", "평창", "홍천"
]);

// 약 100m 단위로 묶어, 현재 위치가 조금씩 흔들려도 같은 도로 시간 캐시를 다시 씁니다.
function getOriginRouteKey(origin) {
  return `${origin.latitude.toFixed(3)},${origin.longitude.toFixed(3)}`;
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

// 공개 OSRM은 신호·정체 없는 자유 주행 속도로 계산해 시내 구간을 짧게 잡는 경향이 있습니다.
// OSRM이 함께 주는 도로 거리로 평균속도를 구해, 시내(저속)는 크게·고속도로(고속)는 작게 보정합니다.
function calibrateOsrmMinutes(rawMinutes, roadKm) {
  if (!Number.isFinite(rawMinutes) || rawMinutes <= 0) return 0;
  const averageSpeedKmh = Number.isFinite(roadKm) && roadKm > 0 ? roadKm / (rawMinutes / 60) : 50;
  const factor = averageSpeedKmh < 30 ? 1.45
    : averageSpeedKmh < 45 ? 1.32
      : averageSpeedKmh < 60 ? 1.2
        : averageSpeedKmh < 75 ? 1.12 : 1.06;
  return rawMinutes * factor;
}

// 날짜(주말·평일)와 권역(수도권·주요 관광지) 혼잡, 장거리 휴게·주차 여유를 더합니다.
function getTrafficAdjustedMinutes(origin, destination, baseMinutes) {
  if (!Number.isFinite(baseMinutes) || baseMinutes <= 0) return 0;

  const date = state.selectedDate || toISODate(new Date());
  const dayOfWeek = new Date(`${date}T12:00:00`).getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const congestionArea = isMetroArea(origin)
    || isMetroArea(destination)
    || isMajorTourismArea(destination);
  let multiplier = 1;

  if (isWeekend) multiplier += congestionArea ? 0.18 : 0.08;
  else if (isMetroArea(origin) && isMetroArea(destination)) multiplier += 0.08;

  const restBuffer = baseMinutes >= 120 ? 10 : 0;
  const parkingBuffer = baseMinutes >= 15 ? 5 : 3;
  return Math.max(5, Math.round((baseMinutes * multiplier + restBuffer + parkingBuffer) / 5) * 5);
}

function estimateRoadFactor(straightDistanceKm, place) {
  const city = String(place.city || "").replace(/\s/g, "");
  const isMountainOrCoastal = MOUNTAIN_OR_COASTAL_CITIES.has(city)
    || (place.latitude > 37.3 && place.longitude > 127.5);
  const baseRoadFactor = straightDistanceKm < 15 ? 1.48
    : straightDistanceKm < 50 ? 1.38
      : straightDistanceKm < 120 ? 1.28 : 1.22;
  return isMountainOrCoastal ? baseRoadFactor * 1.12 : baseRoadFactor;
}

// 도로망 조회가 안 될 때의 추정치(분). 거리대별 평균 실주행 속도를 이미 반영합니다.
function estimateFallbackDriveMinutes(origin, place) {
  const straightDistanceKm = distanceBetweenCoordinates(origin, place);
  if (straightDistanceKm < 1) return 0;
  if (straightDistanceKm < 1.2) return 5;

  const roadKm = straightDistanceKm * estimateRoadFactor(straightDistanceKm, place);
  const averageSpeedKmh = straightDistanceKm < 15 ? 28
    : straightDistanceKm < 45 ? 48
      : straightDistanceKm < 100 ? 66 : 76;
  return Math.round((roadKm / averageSpeedKmh) * 60) + 4;
}

function isSameOrigin(first, second) {
  return Math.abs(first.latitude - second.latitude) < 0.001
    && Math.abs(first.longitude - second.longitude) < 0.001;
}

// 출발지→장소 도로 거리(km)와 실측 여부. 도로망 결과가 없으면 지형별 굴곡 계수로 추정합니다.
function estimateDriveDistanceBetween(origin, place) {
  const originIsJeju = origin.island === "jeju" || isJejuCoordinates(origin.latitude, origin.longitude);
  const destinationIsJeju = place.island === "jeju" || isJejuCoordinates(place.latitude, place.longitude);
  if (originIsJeju !== destinationIsJeju) return null;
  const straightDistanceKm = distanceBetweenCoordinates(origin, place);
  const measuredKm = isSameOrigin(origin, state.location)
    ? state.roadDistanceMap.get(getRouteDestinationKey(place))
    : undefined;
  if (Number.isFinite(measuredKm)) return { km: measuredKm, measured: true };
  if (straightDistanceKm < 1) return { km: straightDistanceKm, measured: false };
  return { km: straightDistanceKm * estimateRoadFactor(straightDistanceKm, place), measured: false };
}

function formatDistanceKm(km) {
  return km < 10 ? `${(Math.round(km * 10) / 10).toFixed(1)}km` : `${Math.round(km)}km`;
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
    .slice(0, OSRM_MAX_TARGETS * OSRM_MAX_BATCHES);

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
      state.roadDistanceMap = new Map(
        Object.entries(entry.distances && typeof entry.distances === "object" ? entry.distances : {})
          .filter(([, km]) => Number.isFinite(km) && km >= 0)
      );
    }
  } catch (error) {
    console.warn("도로 시간 캐시를 불러오지 못했습니다. 온라인 조회를 시도합니다.", error);
  }

  const cachedKeys = new Set(cachedOrigin?.targetKeys || []);
  const missingTargets = targets.filter(({ place }) => !cachedKeys.has(getRouteDestinationKey(place)));
  if (!missingTargets.length) {
    if (cachedOrigin) renderRecommendations();
    return;
  }
  if (requestId !== state.routeRequestId) return;

  const durations = Object.fromEntries(state.roadDurationMap);
  const distances = Object.fromEntries(state.roadDistanceMap);
  const fetchedKeys = [];
  for (let start = 0; start < missingTargets.length; start += OSRM_MAX_TARGETS) {
    const batch = missingTargets.slice(start, start + OSRM_MAX_TARGETS);
    const coordinates = [
      `${origin.longitude.toFixed(5)},${origin.latitude.toFixed(5)}`,
      ...batch.map(({ place }) => `${place.longitude.toFixed(5)},${place.latitude.toFixed(5)}`)
    ].join(";");
    try {
      const response = await fetch(`${OSRM_TABLE_ENDPOINT}${coordinates}?sources=0&annotations=duration,distance`, {
        signal: AbortSignal.timeout(10000)
      });
      if (!response.ok) throw new Error(`OSRM 응답 오류 (${response.status})`);
      const data = await response.json();
      if (data.code !== "Ok" || !Array.isArray(data.durations?.[0])
        || data.durations[0].length !== batch.length + 1) {
        throw new Error("OSRM 응답에 유효한 이동 시간 표가 없습니다.");
      }
      if (requestId !== state.routeRequestId || getOriginRouteKey(state.location) !== originKey) return;
      batch.forEach(({ place }, index) => {
        const key = getRouteDestinationKey(place);
        const seconds = data.durations[0][index + 1];
        if (typeof seconds === "number" && Number.isFinite(seconds) && seconds >= 0) {
          durations[key] = Math.round(seconds / 6) / 10;
        }
        const meters = data.distances?.[0]?.[index + 1];
        if (typeof meters === "number" && Number.isFinite(meters) && meters >= 0) {
          distances[key] = Math.round(meters / 100) / 10;
        }
        fetchedKeys.push(key);
      });
    } catch (error) {
      if (requestId === state.routeRequestId) {
        console.warn("OSRM 실제 도로 시간 조회에 실패했습니다. 지형 보정 추정치를 사용합니다.", error);
      }
      break;
    }
  }
  if (!fetchedKeys.length || requestId !== state.routeRequestId) return;
  state.roadDurationMap = new Map(Object.entries(durations));
  state.roadDistanceMap = new Map(Object.entries(distances));

  try {
    const cache = JSON.parse(localStorage.getItem(ROUTE_MATRIX_CACHE_KEY) || "{}");
    cache[originKey] = {
      updatedAt: cachedOrigin?.updatedAt ?? Date.now(),
      targetKeys: [...new Set([...(cachedOrigin?.targetKeys || []), ...fetchedKeys])],
      durations,
      distances
    };
    const recentEntries = Object.entries(cache)
      .sort((first, second) => second[1].updatedAt - first[1].updatedAt)
      .slice(0, 10);
    localStorage.setItem(ROUTE_MATRIX_CACHE_KEY, JSON.stringify(Object.fromEntries(recentEntries)));
  } catch (error) {
    console.warn("도로 시간 캐시를 저장하지 못했습니다.", error);
  }
  renderRecommendations();
}

function estimateDriveMinutes(place) {
  return estimateDriveMinutesBetween(state.location, place);
}

function isWithinRecommendationDriveRange(driveMinutes) {
  return driveMinutes != null && driveMinutes <= MAX_RECOMMENDATION_DRIVE_MINUTES;
}

function estimateDriveMinutesBetween(origin, place) {
  const originIsJeju = origin.island === "jeju"
    || isJejuCoordinates(origin.latitude, origin.longitude);
  const destinationIsJeju = place.island === "jeju"
    || isJejuCoordinates(place.latitude, place.longitude);
  if (originIsJeju !== destinationIsJeju) return null;

  const straightDistanceKm = distanceBetweenCoordinates(origin, place);
  const routeKey = getRouteDestinationKey(place);
  const roadMinutes = isSameOrigin(origin, state.location)
    ? state.roadDurationMap.get(routeKey)
    : undefined;
  const roadKm = state.roadDistanceMap.get(routeKey);
  // 직선 1km 미만이라도 강·철길 등으로 도로가 돌아가면 실제 도로 거리를 우선합니다.
  if (Number.isFinite(roadMinutes)) {
    if ((Number.isFinite(roadKm) ? roadKm : straightDistanceKm) < 1.5) return 0;
  } else if (straightDistanceKm < 1) {
    return 0;
  }
  const baseMinutes = Number.isFinite(roadMinutes)
    ? calibrateOsrmMinutes(roadMinutes, roadKm)
    : estimateFallbackDriveMinutes(origin, place);
  return getTrafficAdjustedMinutes(origin, place, baseMinutes);
}

function estimateDriveDistance(place) {
  return estimateDriveDistanceBetween(state.location, place);
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
        <span class="rank-place-meta">${escapeHTML(place.city)} · ${formatDriveTime(estimateDriveMinutes(place), place)}</span>
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
    isWithinRecommendationDriveRange(driveMinutes)
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
  renderSuggestedItinerarySummary(route, day, weatherLabel, returnMinutes, null);
  renderSuggestedItinerary();
  refineSuggestedItineraryWithRoads(route, day, weatherLabel);
}

function renderSuggestedItinerarySummary(route, day, weatherLabel, returnMinutes, roadTotals) {
  const totalMinutes = route.reduce((total, stop) => total + stop.legMinutes, returnMinutes);
  const distanceLabel = roadTotals
    ? ` · 총 ${formatDistanceKm(roadTotals.km)} (도로망 기준)`
    : " (추정치, 도로 경로 확인 중)";
  document.querySelector("#suggested-itinerary-summary").textContent =
    `${dateLabel(day.date, { month: "long", day: "numeric" })} · ${weatherLabel} ${route.length}곳을 골랐어요. 출발·복귀 포함 예상 차량 이동 ${formatDuration(totalMinutes)}${distanceLabel}.`;
}

// 출발지 → 코스 장소들 → 출발지 경로를 실제 도로망으로 한 번에 조회해 구간별 시간·거리를 바꿉니다.
async function refineSuggestedItineraryWithRoads(route, day, weatherLabel) {
  const origin = { ...state.location };
  const points = [origin, ...route.map(({ place }) => place), origin];
  const coordinates = points.map((point) => `${point.longitude.toFixed(5)},${point.latitude.toFixed(5)}`).join(";");
  try {
    const response = await fetch(`${OSRM_ROUTE_ENDPOINT}${coordinates}?overview=false`, {
      signal: AbortSignal.timeout(10000)
    });
    if (!response.ok) throw new Error(`OSRM 경로 응답 오류 (${response.status})`);
    const data = await response.json();
    const legs = data.routes?.[0]?.legs;
    if (data.code !== "Ok" || !Array.isArray(legs) || legs.length !== route.length + 1) {
      throw new Error("OSRM 경로 응답에 구간 정보가 없습니다.");
    }
    if (state.suggestedItinerary !== route) return;
    let returnMinutes = 0;
    let totalKm = 0;
    legs.forEach((leg, index) => {
      const km = Number.isFinite(leg.distance) ? leg.distance / 1000 : 0;
      const rawMinutes = Number.isFinite(leg.duration) ? leg.duration / 60 : 0;
      const minutes = km < 0.3 ? 0 : getTrafficAdjustedMinutes(points[index], points[index + 1], calibrateOsrmMinutes(rawMinutes, km));
      totalKm += km;
      if (index < route.length) {
        route[index].legMinutes = minutes;
        route[index].legKm = km;
      } else {
        returnMinutes = minutes;
      }
    });
    renderSuggestedItinerarySummary(route, day, weatherLabel, returnMinutes, { km: totalKm });
    renderSuggestedItinerary();
  } catch (error) {
    if (state.suggestedItinerary !== route) return;
    console.warn("추천 코스의 도로 경로를 조회하지 못해 추정치를 표시합니다.", error);
    const returnMinutes = estimateDriveMinutesBetween(route[route.length - 1].place, origin) || 0;
    const summary = document.querySelector("#suggested-itinerary-summary");
    renderSuggestedItinerarySummary(route, day, weatherLabel, returnMinutes, null);
    summary.textContent = summary.textContent.replace(" (추정치, 도로 경로 확인 중)", " (추정치)");
  }
}

function renderSuggestedItinerary() {
  const list = document.querySelector("#suggested-itinerary-list");
  const addButton = document.querySelector("#add-suggested-itinerary");
  list.replaceChildren();
  addButton.disabled = state.suggestedItinerary.length === 0;
  state.suggestedItinerary.forEach(({ place, legMinutes, legKm }, index) => {
    const item = document.createElement("li");
    item.className = "suggested-stop";
    const legDistance = Number.isFinite(legKm) ? ` · ${formatDistanceKm(legKm)}` : "";
    item.innerHTML = `<span class="itinerary-order">${index + 1}</span>
      <span class="rank-place-icon" aria-hidden="true">${escapeHTML(place.emoji || "📍")}</span>
      <span class="rank-place-content">
        <strong class="rank-place-name">${escapeHTML(place.name)}</strong>
        <span class="rank-place-meta">${escapeHTML(place.city)} · ${index === 0 ? "출발지에서" : "이전 장소에서"} 차량 약 ${formatDuration(legMinutes)}${legDistance}</span>
      </span>
      <a class="rank-map-link" href="https://map.naver.com/p/search/${encodeURIComponent(place.map)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(place.name)} 지도에서 보기">지도</a>
      <a class="rank-map-link" href="${nearbyFoodSearchUrl(place)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(place.name)} 주변 식당 검색">식당</a>`;
    list.append(item);
    if (index < state.suggestedItinerary.length - 1) {
      const leg = document.createElement("li");
      leg.className = "suggested-leg";
      leg.setAttribute("aria-hidden", "true");
      const nextStop = state.suggestedItinerary[index + 1];
      leg.textContent = `↓ 차량 약 ${formatDuration(nextStop.legMinutes)}${Number.isFinite(nextStop.legKm) ? ` · ${formatDistanceKm(nextStop.legKm)}` : ""}`;
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

function isUsablePlace(place) {
  return place && typeof place === "object"
    && typeof place.name === "string" && place.name.trim().length > 0
    && typeof place.city === "string"
    && typeof place.map === "string"
    && ["indoor", "outdoor"].includes(place.type)
    && Number.isFinite(place.latitude) && Number.isFinite(place.longitude)
    && Array.isArray(place.tags);
}

function rebuildDestinations() {
  const usedNames = new Set(DESTINATIONS.slice(0, BASE_DESTINATION_COUNT).map((place) => place.name));
  const dynamicPlaces = [];
  [...state.customPlaces, ...state.discoveredPlaces].forEach((place) => {
    if (usedNames.has(place.name)) return;
    usedNames.add(place.name);
    dynamicPlaces.push(place);
  });
  DESTINATIONS.splice(BASE_DESTINATION_COUNT, DESTINATIONS.length - BASE_DESTINATION_COUNT, ...dynamicPlaces);
}

function applyDiscoveredPlaces(places, restaurants = []) {
  state.discoveredPlaces = (Array.isArray(places) ? places : []).filter(isUsablePlace);
  state.discoveredPlaceCount = state.discoveredPlaces.length;
  state.nearbyRestaurants = Array.isArray(restaurants) ? restaurants : [];
  rebuildDestinations();
}

function normalizePlaceName(name) {
  return String(name).toLocaleLowerCase().replace(/[\s·\-()]/g, "");
}

function placeNamesOverlap(first, second) {
  const a = normalizePlaceName(first);
  const b = normalizePlaceName(second);
  return a.length >= 3 && b.length >= 3 && (a.includes(b) || b.includes(a));
}

function createDiscoveredPlaces(elements) {
  const knownNames = new Set(DESTINATIONS.slice(0, BASE_DESTINATION_COUNT)
    .map((place) => normalizePlaceName(place.name)));
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
    const shoppingVenue = ["mall", "department_store"].includes(tags.shop);
    const market = tags.amenity === "marketplace";
    const pedestrianStreet = tags.highway === "pedestrian";
    const popularStreet = POPULAR_STREET_PATTERN.test(name);
    const category = shoppingVenue ? "쇼핑몰·백화점"
      : market ? "시장·장터"
        : popularStreet ? "인기 거리"
          : pedestrianStreet ? "보행 거리"
            : tags.tourism === "museum" ? "박물관·전시"
              : ["zoo", "aquarium"].includes(tags.tourism) ? "동물·수족관"
                : tags.tourism === "theme_park" || tags.leisure === "water_park" ? "테마파크"
                  : tags.tourism === "gallery" ? "박물관·전시"
                    : tags.historic ? "역사·문화유산"
                      : tags.amenity === "arts_centre" || tags.amenity === "library" ? "문화공간"
                        : ["park", "nature_reserve"].includes(tags.leisure) ? "공원·자연"
                          : tags.tourism === "viewpoint" ? "전망 명소" : "관광 명소";
    if (category === "공원·자연" && MINOR_PARK_NAME_PATTERN.test(name.trim())) return;
    const normalizedName = normalizePlaceName(name);
    if (knownNames.has(normalizedName)) return;
    const coordinates = { latitude, longitude };
    if (DESTINATIONS.slice(0, BASE_DESTINATION_COUNT).some((place) => {
      const distanceKm = distanceBetweenCoordinates(coordinates, place);
      return (place.category === category && distanceKm < 0.15)
        || (distanceKm < 0.6 && placeNamesOverlap(place.name, name));
    })) return;
    if (discovered.some((place) =>
      place.category === category
      && (normalizePlaceName(place.name) === normalizedName
        || distanceBetweenCoordinates(coordinates, place) < 0.15)
    )) return;
    const indoor = shoppingVenue
      || (market && (tags.indoor === "yes" || tags.covered === "yes"))
      || ["museum", "aquarium", "gallery", "arts_centre"].includes(tags.tourism)
      || tags.amenity === "arts_centre"
      || tags.leisure === "water_park"
      || tags.indoor === "yes";
    const type = indoor ? "indoor" : "outdoor";
    const city = (tags["addr:city"] || tags["addr:town"] || tags["addr:county"] || "주변").slice(0, 40);
    const description = shoppingVenue
      ? "쇼핑과 식사, 실내 휴식을 함께 즐길 수 있는 곳이에요. 주말 혼잡도와 유아 편의시설을 확인해 주세요."
      : market
        ? "지역 먹거리와 상점을 둘러보는 생활형 나들이예요. 운영일과 혼잡도, 유모차 이동 환경을 확인해 주세요."
      : popularStreet
        ? "상점과 먹거리가 모인 거리예요. 주말 혼잡도와 운영 정보를 확인해 주세요."
        : pedestrianStreet
          ? "차량 통행이 제한된 보행 거리예요. 주말 혼잡도와 현장 통행 정보를 확인해 주세요."
          : category === "공원·자연"
            ? "산책과 야외 활동을 즐길 수 있는 공원·자연 공간이에요. 시설 운영과 날씨를 확인해 주세요."
            : category === "박물관·전시" || category === "문화공간"
              ? "전시와 문화 공간을 둘러보는 코스예요. 휴관일과 프로그램을 확인해 주세요."
              : category === "동물·수족관" || category === "테마파크"
                ? "가족이 함께 즐길 수 있는 관람·체험 장소예요. 운영시간과 입장 조건을 확인해 주세요."
                : category === "역사·문화유산"
                  ? "지역의 역사와 문화유산을 둘러보는 장소예요. 관람 가능 여부와 운영시간을 확인해 주세요."
                  : "주변 지도 데이터에서 새로 찾은 장소예요. 방문 전 운영시간과 이용 정보를 확인해 주세요.";
    discovered.push({
      name: name.trim(),
      city,
      distance: "",
      driveMinutes: 0,
      ...coordinates,
      type,
      category,
      emoji: shoppingVenue ? "🛍️"
        : market ? "🧺"
          : popularStreet || pedestrianStreet ? "🚶"
            : tags.tourism === "zoo" ? "🦁"
              : tags.tourism === "aquarium" ? "🐠"
                : tags.tourism === "museum" || tags.tourism === "gallery" ? "🏛️"
                  : tags.tourism === "theme_park" || tags.leisure === "water_park" ? "🎡"
                    : tags.leisure === "park" || tags.leisure === "nature_reserve" ? "🌳"
                      : tags.historic ? "🏺"
                        : tags.amenity === "arts_centre" || tags.amenity === "library" ? "🎭" : "📍",
      description,
      tags: [category, "지도 데이터 신규", indoor ? "실내" : "야외", "운영정보 확인"],
      weather: indoor ? "비·추위 피하기" : "맑고 온화한 날",
      map: name.trim(),
      source: "OpenStreetMap",
      sourceId: uniqueId
    });
    knownNames.add(normalizedName);
  });

  const rankedDiscovered = discovered
    .map((place) => ({ place, driveMinutes: estimateDriveMinutes(place) }))
    .filter(({ driveMinutes }) => isWithinRecommendationDriveRange(driveMinutes))
    .sort((first, second) => first.driveMinutes - second.driveMinutes);
  const categoryBuckets = new Map();
  const categoryCounts = new Map();
  rankedDiscovered.forEach((item) => {
    const category = item.place.category;
    if (!categoryBuckets.has(category)) categoryBuckets.set(category, []);
    categoryBuckets.get(category).push(item);
  });
  const places = [];
  while (places.length < MAX_DISCOVERED_PLACES && categoryBuckets.size) {
    for (const [category, bucket] of categoryBuckets) {
      if (places.length >= MAX_DISCOVERED_PLACES) break;
      if (!bucket.length) {
        categoryBuckets.delete(category);
        continue;
      }
      places.push(bucket.shift().place);
      const count = (categoryCounts.get(category) || 0) + 1;
      categoryCounts.set(category, count);
      if (count >= MAX_DISCOVERED_PER_CATEGORY || !bucket.length) categoryBuckets.delete(category);
    }
  }
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
  const customCount = state.customPlaces.length;
  const loading = state.placeDataSource === "loading" ? " · 주변 새 장소를 찾는 중이에요(최대 1분)…" : "";
  const summary = `기본 장소 ${BASE_DESTINATION_COUNT}곳${customCount ? ` · 직접 추가 ${customCount}곳` : ""} · 지도 새 장소 ${count}곳${updated ? ` · ${updated} 갱신` : ""}${loading}`;
  status.querySelector(".place-data-copy").textContent = message || summary;
  status.classList.toggle("has-error", Boolean(message));
  status.querySelector("#refresh-places-button").disabled = state.placeDataSource === "loading";
}

function buildOverpassPlaceQuery(origin) {
  const center = `${origin.latitude.toFixed(5)},${origin.longitude.toFixed(5)}`;
  const major = `around:${MAJOR_PLACE_SEARCH_RADIUS_METERS},${center}`;
  const local = `around:${LOCAL_PLACE_SEARCH_RADIUS_METERS},${center}`;
  const food = `around:${FOOD_SEARCH_RADIUS_METERS},${center}`;
  return `[out:json][timeout:50];`
    + `(nwr(${major})[name][tourism~"^(museum|zoo|aquarium|theme_park)$"];nwr(${major})[name][leisure=water_park];);out center tags 220;`
    + `(nwr(${local})[name][tourism~"^(attraction|gallery|viewpoint)$"];`
    + `nwr(${local})[name][historic~"^(castle|fort|palace|city_gate|archaeological_site|monument|ruins|manor|building|temple)$"];`
    + `wr(${local})[name][leisure~"^(park|nature_reserve)$"];);out center tags 260;`
    + `(nwr(${local})[name][shop~"^(mall|department_store)$"];nwr(${local})[name][amenity=marketplace];);out center tags 120;`
    + `(nwr(${local})[name][amenity=arts_centre];wr(${local})[name][highway=pedestrian];nwr(${major})[name~"${POPULAR_STREET_PATTERN.source}"];);out center tags 120;`
    + `(nwr(${food})[name][amenity=restaurant];);out center tags 300;`;
}

// 공개 Overpass 서버는 혼잡할 때 응답이 수십 초 걸리므로 여러 서버에 동시에 요청하고
// 가장 먼저 성공한 응답을 사용합니다. 나머지 요청은 바로 취소합니다.
let activeOverpassControllers = [];
let placeRefreshToken = 0;
async function fetchOverpassElements(query) {
  // 출발지를 바꾸면 이전 지역의 요청을 취소해 서버에 요청이 쌓이지 않게 합니다(429 방지).
  activeOverpassControllers.forEach((controller) => controller.abort());
  const controllers = OVERPASS_ENDPOINTS.map(() => new AbortController());
  activeOverpassControllers = controllers;
  const timeout = setTimeout(() => controllers.forEach((controller) => controller.abort()), OVERPASS_REQUEST_TIMEOUT);
  try {
    return await Promise.any(OVERPASS_ENDPOINTS.map(async (endpoint, index) => {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
          body: new URLSearchParams({ data: query }),
          signal: controllers[index].signal
        });
        if (!response.ok) throw new Error(`OpenStreetMap 응답 오류 (${response.status})`);
        const data = await response.json();
        if (!Array.isArray(data.elements)) throw new Error("주변 장소 데이터 형식이 올바르지 않습니다.");
        if (!data.elements.length && data.remark) throw new Error(`OpenStreetMap 처리 오류: ${data.remark}`);
        controllers.forEach((controller, otherIndex) => {
          if (otherIndex !== index) controller.abort();
        });
        return data.elements;
      } catch (error) {
        if (error.name !== "AbortError") console.warn(`주변 장소를 ${endpoint}에서 불러오지 못했습니다.`, error);
        throw error;
      }
    }));
  } finally {
    clearTimeout(timeout);
    if (activeOverpassControllers === controllers) activeOverpassControllers = [];
  }
}

async function refreshDiscoveredPlaces(force = false) {
  activeOverpassControllers.forEach((controller) => controller.abort());
  placeRefreshToken += 1;
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

  const query = buildOverpassPlaceQuery(state.location);
  const refreshToken = ++placeRefreshToken;
  let failure;

  try {
    const elements = await fetchOverpassElements(query);
    if (refreshToken !== placeRefreshToken || requestedAreaKey !== placeCacheAreaKey()) return false;
    const { places, restaurants } = createDiscoveredPlaces(elements);
    applyDiscoveredPlaces(places, restaurants);
    state.placeDataUpdatedAt = new Date();
    state.placeDataSource = "openstreetmap";
    savePlaceCache(places, restaurants);
    renderPlaceDataStatus();
    return true;
  } catch (error) {
    failure = error;
  }

  // 더 최근 요청이 시작됐다면(출발지 변경·다시 찾기) 이 요청의 실패는 화면에 알리지 않습니다.
  if (refreshToken !== placeRefreshToken || requestedAreaKey !== placeCacheAreaKey()) return false;
  state.placeDataSource = cached ? "cache" : "curated";
  const message = cached
    ? `지도 데이터에 연결하지 못해 ${new Intl.DateTimeFormat("ko-KR", { month: "numeric", day: "numeric" }).format(state.placeDataUpdatedAt)} 저장 목록을 보여드려요.`
    : `지도 서버가 혼잡해 주변 새 장소를 불러오지 못했어요. 기본 장소 ${BASE_DESTINATION_COUNT}곳과 직접 추가한 장소는 그대로 이용할 수 있어요.`;
  renderPlaceDataStatus(message);
  if (!cached) console.warn("주변 장소 자동 갱신에 실패했습니다.", failure);
  return false;
}

// ── 직접 추가한 장소 ──
const EXCLUDED_SEARCH_CATEGORIES = new Set(["railway", "highway", "public_transport", "waterway", "landuse", "office"]);
const EXCLUDED_SEARCH_AMENITIES = new Set(["parking", "parking_entrance", "bus_station", "toilets", "fuel", "atm", "bank", "townhall", "police"]);

function normalizeCustomPlaces(places) {
  if (!Array.isArray(places)) throw new Error("직접 추가한 장소 목록 형식이 올바르지 않습니다.");
  const names = new Set();
  return places.slice(0, MAX_CUSTOM_PLACES).flatMap((place) => {
    if (!place || typeof place !== "object"
      || typeof place.name !== "string" || !place.name.trim() || place.name.length > 120
      || typeof place.city !== "string" || place.city.length > 40
      || !["indoor", "outdoor"].includes(place.type)
      || !Number.isFinite(place.latitude) || Math.abs(place.latitude) > 90
      || !Number.isFinite(place.longitude) || Math.abs(place.longitude) > 180) return [];
    const name = place.name.trim();
    if (names.has(name)) return [];
    names.add(name);
    const category = typeof place.category === "string" && place.category.length <= 30 ? place.category : "관광 명소";
    const indoor = place.type === "indoor";
    return [{
      name,
      city: place.city.trim() || "주변",
      distance: "",
      driveMinutes: 0,
      latitude: place.latitude,
      longitude: place.longitude,
      type: place.type,
      category,
      emoji: typeof place.emoji === "string" && place.emoji.length <= 16 ? place.emoji : "📍",
      description: "직접 추가한 장소예요. 방문 전 운영시간과 이용 정보를 확인해 주세요.",
      tags: ["내가 추가", category, indoor ? "실내" : "야외"],
      weather: indoor ? "비·추위 피하기" : "맑고 온화한 날",
      map: typeof place.map === "string" && place.map.trim() && place.map.length <= 200 ? place.map.trim() : name,
      source: "custom",
      ...(place.island === "jeju" || isJejuCoordinates(place.latitude, place.longitude) ? { island: "jeju" } : {})
    }];
  });
}

function loadCustomPlaces() {
  try {
    state.customPlaces = normalizeCustomPlaces(JSON.parse(localStorage.getItem(CUSTOM_PLACES_KEY) || "[]"));
  } catch (error) {
    console.warn("직접 추가한 장소를 불러오지 못했습니다.", error);
    state.customPlaces = [];
  }
  rebuildDestinations();
}

function saveCustomPlaces() {
  try {
    localStorage.setItem(CUSTOM_PLACES_KEY, JSON.stringify(state.customPlaces.map(createStoredCustomPlace)));
    return true;
  } catch (error) {
    console.warn("직접 추가한 장소를 이 기기에 저장하지 못했습니다.", error);
    return false;
  }
}

function createStoredCustomPlace(place) {
  return {
    name: place.name,
    city: place.city,
    latitude: place.latitude,
    longitude: place.longitude,
    type: place.type,
    category: place.category,
    emoji: place.emoji,
    map: place.map,
    ...(place.island === "jeju" ? { island: "jeju" } : {})
  };
}

function shortKoreanCityName(address = {}) {
  const raw = address.city || address.county || address.town || address.province || address.state || "";
  const trimmed = String(raw).replace(/(특별자치시|특별자치도|특별시|광역시)$/, "");
  return (trimmed.length > 2 ? trimmed.replace(/[시군]$/, "") : trimmed).slice(0, 40) || "주변";
}

function classifySearchResult(result) {
  const category = result.category;
  const type = result.type;
  if (category === "tourism" && ["museum", "gallery"].includes(type)) return { category: "박물관·전시", type: "indoor", emoji: "🏛️" };
  if (category === "tourism" && type === "aquarium") return { category: "동물·수족관", type: "indoor", emoji: "🐠" };
  if (category === "tourism" && type === "zoo") return { category: "동물·수족관", type: "outdoor", emoji: "🦁" };
  if ((category === "tourism" && type === "theme_park") || type === "water_park") return { category: "테마파크", type: "outdoor", emoji: "🎡" };
  if (category === "shop" && ["mall", "department_store"].includes(type)) return { category: "쇼핑몰·백화점", type: "indoor", emoji: "🛍️" };
  if (category === "amenity" && type === "marketplace") return { category: "시장·장터", type: "outdoor", emoji: "🧺" };
  if (category === "amenity" && ["arts_centre", "library", "theatre", "cinema"].includes(type)) return { category: "문화공간", type: "indoor", emoji: "🎭" };
  if (category === "historic") return { category: "역사·문화유산", type: "outdoor", emoji: "🏺" };
  if (category === "natural" || category === "boundary"
    || (category === "leisure" && ["park", "garden", "nature_reserve"].includes(type))) {
    return { category: "공원·자연", type: "outdoor", emoji: "🌳" };
  }
  if (category === "leisure" && ["sports_centre", "fitness_centre", "bowling_alley", "ice_rink"].includes(type)) {
    return { category: "관광 명소", type: "indoor", emoji: "📍" };
  }
  return { category: "관광 명소", type: "outdoor", emoji: "📍" };
}

function findExistingPlace(candidate) {
  return DESTINATIONS.find((place) => place.name === candidate.name
    || (distanceBetweenCoordinates(place, candidate) < 0.6 && placeNamesOverlap(place.name, candidate.name)));
}

function renderCustomPlaces() {
  const results = document.querySelector("#custom-place-results");
  const list = document.querySelector("#custom-place-list");
  if (!results || !list) return;
  document.querySelector("#custom-place-feedback").textContent = state.customPlaceFeedback;

  results.replaceChildren();
  state.customPlaceResults.forEach((result, index) => {
    const item = document.createElement("li");
    item.className = "ranked-place-item";
    const existing = findExistingPlace(result);
    const added = Boolean(existing && existing.source !== "OpenStreetMap");
    const driveMinutes = estimateDriveMinutes(result);
    item.innerHTML = `<span class="rank-place-icon" aria-hidden="true">${escapeHTML(result.emoji)}</span>
      <span class="rank-place-content">
        <strong class="rank-place-name">${escapeHTML(result.name)}</strong>
        <span class="rank-place-meta">${escapeHTML(result.city)} · ${formatDriveTime(driveMinutes, result)} · ${result.type === "indoor" ? "실내" : "야외"} · ${escapeHTML(result.category)}</span>
        <span class="rank-place-weather">${escapeHTML(result.address)}</span>
      </span>
      <button type="button" class="custom-place-action" data-custom-add="${index}" ${added ? `disabled title="${escapeHTML(existing.name)}(으)로 이미 있어요"` : ""}>${added ? "이미 있음" : "추가"}</button>`;
    results.append(item);
  });

  list.replaceChildren();
  if (!state.customPlaces.length) {
    list.innerHTML = '<li class="empty-state">아직 직접 추가한 장소가 없어요. 위에서 장소 이름을 검색해 보세요.</li>';
    return;
  }
  state.customPlaces.forEach((place) => {
    const item = document.createElement("li");
    item.className = "ranked-place-item";
    const placeName = escapeHTML(place.name);
    item.innerHTML = `<span class="rank-place-icon" aria-hidden="true">${escapeHTML(place.emoji)}</span>
      <span class="rank-place-content">
        <strong class="rank-place-name">${placeName}</strong>
        <span class="rank-place-meta">${escapeHTML(place.city)} · ${formatDriveTime(estimateDriveMinutes(place), place)} · ${place.type === "indoor" ? "실내" : "야외"} · ${escapeHTML(place.category)}</span>
      </span>
      <a class="rank-map-link" href="https://map.naver.com/p/search/${encodeURIComponent(place.map)}" target="_blank" rel="noopener noreferrer" aria-label="${placeName} 지도에서 보기">지도</a>
      <button type="button" class="custom-place-action secondary" data-custom-remove="${encodeURIComponent(place.name)}" aria-label="${placeName} 삭제">삭제</button>`;
    list.append(item);
  });
}

async function searchCustomPlaces(event) {
  event.preventDefault();
  const input = document.querySelector("#custom-place-query");
  const button = document.querySelector("#custom-place-search");
  const query = input.value.trim();
  if (query.length < 2) {
    state.customPlaceFeedback = "장소 이름을 두 글자 이상 입력해 주세요.";
    renderCustomPlaces();
    return;
  }
  const typePreference = document.querySelector("#custom-place-type").value;
  button.disabled = true;
  state.customPlaceResults = [];
  state.customPlaceFeedback = "장소를 찾고 있어요…";
  renderCustomPlaces();
  try {
    const params = new URLSearchParams({
      format: "jsonv2",
      q: query,
      countrycodes: "kr",
      "accept-language": "ko",
      addressdetails: "1",
      limit: "10"
    });
    const response = await fetch(`${NOMINATIM_SEARCH_ENDPOINT}?${params}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(12000)
    });
    if (!response.ok) throw new Error(`장소 검색 응답 오류 (${response.status})`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error("장소 검색 결과 형식이 올바르지 않습니다.");
    const seen = new Set();
    state.customPlaceResults = data.flatMap((result) => {
      const latitude = Number(result.lat);
      const longitude = Number(result.lon);
      const name = String(result.name || String(result.display_name || "").split(",")[0] || "").trim().slice(0, 120);
      if (!name || !Number.isFinite(latitude) || !Number.isFinite(longitude)
        || EXCLUDED_SEARCH_CATEGORIES.has(result.category)
        || (result.category === "amenity" && EXCLUDED_SEARCH_AMENITIES.has(result.type))) return [];
      const key = `${name}|${latitude.toFixed(3)},${longitude.toFixed(3)}`;
      if (seen.has(key)) return [];
      seen.add(key);
      const classified = classifySearchResult(result);
      const city = shortKoreanCityName(result.address);
      return [{
        name,
        city,
        latitude,
        longitude,
        type: typePreference === "auto" ? classified.type : typePreference,
        category: classified.category,
        emoji: classified.emoji,
        map: name.includes(city) || city === "주변" ? name : `${city} ${name}`,
        address: String(result.display_name || "").split(",").slice(1, 4).join(",").trim().slice(0, 80)
      }];
    }).slice(0, 8);
    state.customPlaceFeedback = state.customPlaceResults.length
      ? `${state.customPlaceResults.length}곳을 찾았어요. 추가할 장소를 골라 주세요.`
      : "검색 결과가 없어요. 지역명을 함께 넣거나(예: 가평 아침고요수목원) 다른 이름으로 검색해 보세요.";
  } catch (error) {
    console.warn("장소 검색에 실패했습니다.", error);
    state.customPlaceFeedback = error.name === "TimeoutError"
      ? "장소 검색 응답이 늦어요. 잠시 후 다시 시도해 주세요."
      : "장소를 검색하지 못했어요. 인터넷 연결을 확인하고 다시 시도해 주세요.";
  } finally {
    button.disabled = false;
    renderCustomPlaces();
  }
}

function addCustomPlace(index) {
  const result = state.customPlaceResults[index];
  if (!result) return;
  if (state.customPlaces.length >= MAX_CUSTOM_PLACES) {
    state.customPlaceFeedback = `직접 추가한 장소는 최대 ${MAX_CUSTOM_PLACES}곳까지 저장할 수 있어요.`;
    renderCustomPlaces();
    return;
  }
  const existing = findExistingPlace(result);
  if (existing && existing.source !== "OpenStreetMap") {
    state.customPlaceFeedback = `이미 ‘${existing.name}’(으)로 목록에 있는 장소예요.`;
    renderCustomPlaces();
    return;
  }
  const [place] = normalizeCustomPlaces([result]);
  state.customPlaces = [place, ...state.customPlaces];
  if (!saveCustomPlaces()) {
    state.customPlaces = state.customPlaces.slice(1);
    state.customPlaceFeedback = "저장 공간 문제로 장소를 추가하지 못했어요.";
    renderCustomPlaces();
    return;
  }
  rebuildDestinations();
  const driveMinutes = estimateDriveMinutes(place);
  state.customPlaceFeedback = isWithinRecommendationDriveRange(driveMinutes)
    ? `${place.name}을(를) 추가했어요. 추천과 거리별 목록에 함께 반영돼요.`
    : `${place.name}을(를) 추가했어요. 현재 출발지에서 차량 3시간 밖이라, 가까운 출발 지역을 고르면 추천에 나타나요.`;
  renderCustomPlaces();
  renderPlaceDataStatus();
  renderRecommendations();
  refreshCustomPlaceRouteAndWeather();
}

function removeCustomPlace(name) {
  const before = state.customPlaces.length;
  state.customPlaces = state.customPlaces.filter((place) => place.name !== name);
  if (state.customPlaces.length === before) return;
  saveCustomPlaces();
  rebuildDestinations();
  state.customPlaceFeedback = `${name}을(를) 목록에서 삭제했어요. 방문 기록과 담아 둔 코스는 그대로 남아요.`;
  renderCustomPlaces();
  renderPlaceDataStatus();
  renderRecommendations();
}

let customPlaceRefreshTimer = null;
function refreshCustomPlaceRouteAndWeather() {
  clearTimeout(customPlaceRefreshTimer);
  customPlaceRefreshTimer = setTimeout(async () => {
    if (state.forecast.length) await loadWeather({ keepOnError: true });
    await fetchActualRoadTimes();
  }, 1500);
}

function initializeCustomPlaces() {
  loadCustomPlaces();
  document.querySelector("#custom-place-form").addEventListener("submit", searchCustomPlaces);
  document.querySelector("#custom-place-panel").addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const addButton = event.target.closest("[data-custom-add]");
    if (addButton) {
      addCustomPlace(Number(addButton.dataset.customAdd));
      return;
    }
    const removeButton = event.target.closest("[data-custom-remove]");
    if (removeButton) removeCustomPlace(decodeURIComponent(removeButton.dataset.customRemove));
  });
  renderCustomPlaces();
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

// place를 함께 넘기면 출발지 기준 도로 거리(km)도 표시합니다. 도로망 실측이 아니면 "약"을 붙입니다.
function formatDriveTime(minutes, place) {
  if (minutes == null) return "항공·선박 필요";
  const distance = place ? estimateDriveDistance(place) : null;
  if (minutes === 0) {
    return distance && distance.km >= 0.3 ? `출발지 인근 · ${formatDistanceKm(distance.km)}` : "출발지 인근";
  }
  const distanceLabel = distance ? ` · ${distance.measured ? "" : "약 "}${formatDistanceKm(distance.km)}` : "";
  return `차량 약 ${formatDuration(minutes)}${distanceLabel}`;
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
  // 현재 위치는 "현재 위치"라는 이름으로 검색되지 않으므로 역지오코딩한 동네 이름을 씁니다.
  const originName = state.location.areaName || state.location.label;
  const query = `${originName}에서 ${place.map} 길찾기`;
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
      family: state.family,
      customPlaces: state.customPlaces.map(createStoredCustomPlace)
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
    let importedCustomPlaces;
    if (Object.prototype.hasOwnProperty.call(data, "customPlaces")) {
      const incoming = normalizeCustomPlaces(data.customPlaces);
      const incomingNames = new Set(incoming.map((place) => place.name));
      importedCustomPlaces = [...incoming, ...state.customPlaces.filter((place) => !incomingNames.has(place.name))]
        .slice(0, MAX_CUSTOM_PLACES);
      updates.push([CUSTOM_PLACES_KEY, JSON.stringify(importedCustomPlaces.map(createStoredCustomPlace))]);
    }
    if (!updates.length) throw new Error("백업 파일에 불러올 방문 기록이나 코스, 직접 추가한 장소가 없습니다.");

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
    if (importedCustomPlaces) {
      state.customPlaces = importedCustomPlaces;
      rebuildDestinations();
      renderPlaceDataStatus();
    }
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
  const nearbyPlaces = rankedPlaces.filter((item) => isWithinRecommendationDriveRange(item.driveMinutes));
  const unseenPlaces = nearbyPlaces.filter(({ place }) => {
    const visitedDate = state.visitedPlaces[place.name]?.date;
    return !visitedDate || Date.now() - Date.parse(`${visitedDate}T00:00:00`) >= 90 * 24 * 60 * 60 * 1000;
  });
  const pool = unseenPlaces.length >= RECOMMENDATION_CARD_COUNT
    ? unseenPlaces
    : nearbyPlaces;
  if (pool.length <= RECOMMENDATION_CARD_COUNT) return pool;

  const cycle = getRecommendationCycle(day);
  const windowSize = Math.min(RECOMMENDATION_CARD_COUNT * 3, pool.length);
  const seed = dateSeed(recommendationCycleKey(day));
  const start = (seed + cycle * windowSize) % pool.length;
  const window = Array.from({ length: windowSize }, (_, index) => pool[(start + index) % pool.length]);
  const everydayPlaces = pool.filter(({ place, score }) =>
    EVERYDAY_PLACE_CATEGORIES.has(place.category) && score >= 55
  );
  const selected = [];

  while (selected.length < RECOMMENDATION_CARD_COUNT && window.length) {
    let bestIndex = 0;
    let bestUtility = -Infinity;
    window.forEach((candidate, index) => {
      const repeatedCity = selected.some((item) => item.place.city === candidate.place.city);
      const repeatedType = selected.some((item) => item.place.type === candidate.place.type);
      const repeatedCategory = candidate.place.category
        && selected.some((item) => item.place.category === candidate.place.category);
      const utility = candidate.score - (repeatedCity ? 12 : 0)
        - (repeatedType ? 5 : 0) - (repeatedCategory ? 8 : 0);
      if (utility > bestUtility) {
        bestUtility = utility;
        bestIndex = index;
      }
    });
    selected.push(window.splice(bestIndex, 1)[0]);
  }
  if (everydayPlaces.length && !selected.some(({ place }) => EVERYDAY_PLACE_CATEGORIES.has(place.category))) {
    selected[selected.length - 1] = everydayPlaces[(seed + cycle) % everydayPlaces.length];
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
  // 일요일에는 다음 주 토요일이 아니라 오늘(일요일)을 우선 선택합니다.
  preferred.setDate(today.getDate() + (day === 0 ? 0 : daysUntilSaturday));
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
        <span class="rank-place-meta">${city} · ${formatDriveTime(driveMinutes, place)} · ${place.type === "indoor" ? "실내" : "야외"}${place.category ? ` · ${escapeHTML(place.category)}` : ""}</span>
        <span class="rank-place-weather">${icon} ${condition} · ${Math.round(day.min)}~${Math.round(day.max)}° · 비 ${Math.round(day.rain)}%</span>
      </span>
      <span class="rank-place-score">추천 ${score}점</span>
      <a class="rank-map-link" href="https://map.naver.com/p/search/${encodeURIComponent(place.map)}" target="_blank" rel="noopener noreferrer" aria-label="${index + 1}위 ${placeName} 지도에서 보기">지도</a>`;
    rankedPlaceList.append(item);
  });
  document.querySelector("#all-places-title").textContent =
    `차량 3시간 이내 ${rankedPlaces.length}곳 · 추천 점수순`;
}

function renderDistanceRecommendations(rankedPlaces, fallbackDay) {
  const list = document.querySelector("#distance-place-list");
  list.replaceChildren();
  const maxMinutes = state.distanceLimitHours * 60;
  const minMinutes = (state.distanceLimitHours - 1) * 60;
  const timeRangeLabel = state.distanceLimitHours === 1 ? "1시간 이내" : `${state.distanceLimitHours - 1}~${state.distanceLimitHours}시간`;
  const availablePlaces = rankedPlaces
    .filter((item) => item.driveMinutes != null
      && (state.distanceLimitHours === 1 ? item.driveMinutes >= 0 : item.driveMinutes > minMinutes)
      && item.driveMinutes <= maxMinutes
      && matchesPlaceFilter(item.place));
  const nearbyPlaces = availablePlaces.slice(0, 14);
  EVERYDAY_PLACE_CATEGORIES.forEach((category) => {
    if (nearbyPlaces.length >= 20 || nearbyPlaces.some((item) => item.place.category === category)) return;
    const categoryPlace = availablePlaces.find((item) => item.place.category === category);
    if (categoryPlace) nearbyPlaces.push(categoryPlace);
  });
  nearbyPlaces.sort((first, second) => rankedPlaces.indexOf(first) - rankedPlaces.indexOf(second));

  document.querySelectorAll(".distance-tab").forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.maxHours) === state.distanceLimitHours));
  });
  document.querySelector("#distance-intro").textContent =
    `${state.location.label} 출발 · 차량 ${timeRangeLabel} 거리 장소 ${availablePlaces.length}곳 중 추천순 ${nearbyPlaces.length}곳이에요. 앞 시간대에 포함된 장소는 제외했어요.`;

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
        <span class="rank-place-meta">${city} · ${formatDriveTime(driveMinutes, place)} · ${place.type === "indoor" ? "실내" : "야외"}${place.category ? ` · ${escapeHTML(place.category)}` : ""}</span>
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
    .filter((item) => isWithinRecommendationDriveRange(item.driveMinutes) && item.place.type === "indoor")
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
        <span>${city} · ${formatDriveTime(driveMinutes, place)}${place.category ? ` · ${escapeHTML(place.category)}` : ""}</span>
        <span>${icon} ${condition} · 비 ${Math.round(destinationDay.rain)}%</span>
      </div>
      ${foodLink}
      <button type="button" class="alternative-save-button" data-save-place="${encodeURIComponent(place.name)}" ${saved ? "disabled" : ""}>${saved ? "코스에 담김" : "코스에 담기"}</button>`;
    list.append(item);
  });
  section.hidden = false;
}

function renderRecommendations() {
  renderCustomPlaces();
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
  const nearbyRankedPlaces = rankedPlaces.filter(({ driveMinutes }) =>
    isWithinRecommendationDriveRange(driveMinutes)
  );
  const filteredPlaces = nearbyRankedPlaces.filter(({ place }) => matchesPlaceFilter(place));
  renderRankedPlaces(filteredPlaces, day);
  renderDistanceRecommendations(rankedPlaces, day);
  renderWeatherAlternatives(rankedPlaces, day);
  const candidates = selectRecommendationPlaces(filteredPlaces, day);
  const [condition] = weatherFor(day.code);
  const childSummary = state.family.childAges.length
    ? `아이 만 ${state.family.childAges.join("·")}세`
    : "아이 동반 없음";
  document.querySelector("#recommend-intro").textContent =
    `${dateLabel(day.date, { month: "long", day: "numeric", weekday: "long" })} · 어른 ${state.family.adults}명, ${childSummary} · ${condition}, ${Math.round(day.min)}~${Math.round(day.max)}° · 비 ${Math.round(day.rain)}% · 쇼핑몰·시장·거리도 추천`;
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
          <p class="place-meta">${city} · ${formatDriveTime(driveMinutes, place)} · ${place.type === "indoor" ? "실내" : "야외"}${place.category ? ` · ${escapeHTML(place.category)}` : ""}</p>
          <p class="place-description">${escapeHTML(place.description)}</p>
          <div class="place-tags">${place.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
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

// 날씨 모델 해상도를 고려해 약 5km 격자로 목적지를 묶어 요청 수와 주소 길이를 줄입니다.
const MAX_WEATHER_GRID_POINTS = 180;

function weatherGridKey(place) {
  return `${(Math.round(place.latitude * 20) / 20).toFixed(2)}:${(Math.round(place.longitude * 20) / 20).toFixed(2)}`;
}

function weatherGridPoint(place) {
  return {
    key: weatherGridKey(place),
    latitude: Math.round(place.latitude * 20) / 20,
    longitude: Math.round(place.longitude * 20) / 20
  };
}

async function loadWeather(options = {}) {
  const keepOnError = options.keepOnError === true && state.forecast.length > 0;
  const previousStatus = weatherStatus.textContent;
  const requestId = ++state.weatherRequestId;
  weatherStatus.className = "weather-status";
  weatherStatus.textContent = `${state.location.label} 주말 예보와 목적지별 예보를 불러오는 중이에요…`;
  document.querySelector("#refresh-button").disabled = true;
  const weatherPlaces = [...new Map(DESTINATIONS
    .map((place) => ({ place, driveMinutes: estimateDriveMinutes(place) }))
    .filter(({ driveMinutes }) => isWithinRecommendationDriveRange(driveMinutes))
    .sort((first, second) => first.driveMinutes - second.driveMinutes)
    .map(({ place }) => [weatherGridKey(place), weatherGridPoint(place)])).values()]
    .slice(0, MAX_WEATHER_GRID_POINTS);
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
    const weatherByCoordinates = new Map(weatherPlaces.map((point, index) => [
      point.key,
      weatherLocations[index + 1]?.daily?.time?.length
        ? parseDailyWeather(weatherLocations[index + 1].daily)
        : new Map()
    ]));
    state.destinationWeather = new Map(DESTINATIONS.map((place) => [
      place.name,
      weatherByCoordinates.get(weatherGridKey(place)) || new Map()
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
      weatherPlaces.forEach((point, index) => {
        const localAqi = parseDailyAqi(airLocations[index + 1]?.hourly);
        const localWeather = weatherByCoordinates.get(point.key);
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
    if (keepOnError) {
      console.warn("새 장소의 현지 예보를 불러오지 못해 기존 예보를 유지합니다.", error);
      weatherStatus.textContent = previousStatus;
      renderRecommendations();
      return;
    }
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
  // 지도 서버(Overpass)는 응답이 최대 1분까지 늦을 수 있으므로 기다리지 않고 도로 시간을 먼저 조회합니다.
  await fetchActualRoadTimes();
  const placesUpdated = await placeRefresh;
  if (placesUpdated) {
    // 새로 찾은 장소도 현지 예보와 실제 도로 시간을 쓰도록 한 번 더 불러옵니다(주 1회 갱신 시에만 발생).
    await loadWeather({ keepOnError: true });
    await fetchActualRoadTimes();
  }
}

function nearestRegionId(latitude, longitude) {
  return REGIONS
    .map((region) => ({ id: region.id, km: distanceBetweenCoordinates({ latitude, longitude }, region) }))
    .sort((first, second) => first.km - second.km)[0].id;
}

function createCurrentLocation(latitude, longitude, areaName = "") {
  return {
    latitude,
    longitude,
    label: areaName ? `현재 위치 · ${areaName}` : "현재 위치",
    areaName,
    isCurrent: true,
    ...(isJejuCoordinates(latitude, longitude) ? { island: "jeju" } : {})
  };
}

function saveCurrentLocation(location, accuracy) {
  try {
    localStorage.setItem(CURRENT_LOCATION_KEY, JSON.stringify({
      latitude: location.latitude,
      longitude: location.longitude,
      areaName: location.areaName || "",
      accuracy: Number.isFinite(accuracy) ? Math.round(accuracy) : null,
      savedAt: Date.now()
    }));
    localStorage.setItem("weekend-outing-region", "current");
  } catch (error) {
    console.warn("현재 위치를 이 기기에 저장하지 못했습니다.", error);
  }
}

function loadSavedCurrentLocation() {
  try {
    const saved = JSON.parse(localStorage.getItem(CURRENT_LOCATION_KEY) || "null");
    if (!saved || !Number.isFinite(saved.latitude) || !Number.isFinite(saved.longitude)
      || Math.abs(saved.latitude) > 90 || Math.abs(saved.longitude) > 180
      || !Number.isFinite(saved.savedAt) || Date.now() - saved.savedAt > CURRENT_LOCATION_MAX_AGE_MS) return null;
    const areaName = typeof saved.areaName === "string" ? saved.areaName.slice(0, 30) : "";
    return createCurrentLocation(saved.latitude, saved.longitude, areaName);
  } catch (error) {
    console.warn("저장된 현재 위치를 불러오지 못했습니다.", error);
    return null;
  }
}

// 좌표 → "분당구"·"해운대구" 같은 동네 이름. 실패해도 위치 기능에는 영향이 없습니다.
async function reverseGeocodeAreaName(latitude, longitude) {
  try {
    const params = new URLSearchParams({
      format: "jsonv2",
      lat: String(latitude),
      lon: String(longitude),
      zoom: "14",
      "accept-language": "ko"
    });
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${params}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(8000)
    });
    if (!response.ok) return "";
    const address = (await response.json())?.address || {};
    const area = address.borough || address.city_district || address.town || address.county || address.city || address.suburb || "";
    return String(area).slice(0, 30);
  } catch (error) {
    console.warn("현재 위치의 동네 이름을 확인하지 못했습니다.", error);
    return "";
  }
}

function applyStartLocation(location) {
  state.location = location;
  state.routeRequestId += 1;
  state.roadDurationMap.clear();
  state.roadDistanceMap.clear();
  state.suggestedItinerary = [];
  document.querySelector("#suggested-itinerary-summary").textContent =
    "출발 위치가 바뀌었어요. 코스를 다시 추천받아 보세요.";
  state.selectedDate = null;
  state.forecast = [];
  state.destinationWeather.clear();
  renderDays();
  renderRecommendations();
  renderEvents();
  refreshPlacesForCurrentLocation();
}

function getPosition(options) {
  return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options));
}

async function useCurrentLocation() {
  if (!navigator.geolocation) {
    weatherStatus.className = "weather-status error";
    weatherStatus.textContent = "이 브라우저에서는 현재 위치를 사용할 수 없어요. 위에서 출발 지역을 선택해 주세요.";
    return;
  }
  if (!window.isSecureContext) {
    weatherStatus.className = "weather-status error";
    weatherStatus.textContent = "현재 위치는 HTTPS 주소(또는 localhost)에서만 사용할 수 있어요. 출발 지역을 직접 선택해 주세요.";
    return;
  }
  const button = document.querySelector("#location-button");
  button.disabled = true;
  weatherStatus.className = "weather-status";
  weatherStatus.textContent = "현재 위치를 확인하고 있어요…";
  try {
    let position;
    try {
      // 먼저 GPS 수준의 정밀 위치를 시도하고, 실내 등에서 늦어지면 네트워크 위치로 다시 시도합니다.
      position = await getPosition({ enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
    } catch (error) {
      if (error.code === 1) throw error;
      position = await getPosition({ enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 });
    }
    const { latitude, longitude, accuracy } = position.coords;
    const location = createCurrentLocation(latitude, longitude);
    state.locationRegion = nearestRegionId(latitude, longitude);
    document.querySelector("#location-select").value = "current";
    saveCurrentLocation(location, accuracy);
    applyStartLocation(location);
    const accuracyNote = Number.isFinite(accuracy) && accuracy > 1000
      ? ` 위치 오차가 약 ${formatDistanceKm(accuracy / 1000)}로 커서 이동시간이 다소 다를 수 있어요.`
      : "";
    weatherStatus.textContent = `현재 위치 기준으로 날씨와 차량 이동시간을 다시 계산하고 있어요.${accuracyNote}`;

    const areaName = await reverseGeocodeAreaName(latitude, longitude);
    if (areaName && state.location === location) {
      location.areaName = areaName;
      location.label = `현재 위치 · ${areaName}`;
      saveCurrentLocation(location, accuracy);
      document.querySelector("#location-select option[value='current']").textContent = location.label;
      renderRecommendations();
    }
  } catch (error) {
    weatherStatus.className = "weather-status error";
    weatherStatus.textContent = error?.code === 1
      ? "위치 권한이 꺼져 있어요. 브라우저 설정에서 위치 권한을 허용하거나 출발 지역을 직접 선택해 주세요."
      : "현재 위치를 확인하지 못했어요. 잠시 후 다시 시도하거나 출발 지역을 직접 선택해 주세요.";
  } finally {
    button.disabled = false;
  }
}

document.querySelector("#refresh-button").addEventListener("click", () => loadWeather());
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
initializeCustomPlaces();
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
