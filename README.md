# Smart Photo Gallery

## 프로젝트 소개
Smart Photo Gallery는 소중한 순간을 아름답게 보관하고 관리할 수 있는 현대적인 웹 갤러리 애플리케이션입니다. React와 Next.js를 기반으로 구축되었으며, 사용자 친화적인 인터페이스와 다양한 기능을 제공합니다.

## 주요 기능
- **직관적인 갤러리 뷰**: 깔끔하고 현대적인 그리드 레이아웃
- **스마트 필터링**: 날짜, 위치, 카테고리별 사진 필터링
- **고급 이미지 관리**: 손쉬운 사진 업로드 및 관리 기능
- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **다크/라이트 모드**: 사용자 환경에 맞는 테마 지원

## 기술 스택
- **Frontend**: React.js, Next.js
- **스타일링**: Material-UI, Tailwind CSS
- **상태 관리**: React Context API
- **데이터 저장**: IndexedDB
- **애니메이션**: Framer Motion
- **이미지 최적화**: Next.js Image Optimization

## 시작하기

### 필수 조건
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 방법
```bash
# 저장소 클론
git clone https://github.com/jongchoon580325/webgallery-kim.git

# 프로젝트 디렉토리로 이동
cd webgallery-kim

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 환경 설정
`.env` 파일을 프로젝트 루트에 생성하고 다음 환경 변수를 설정하세요:
```
GITHUB_TOKEN=your_github_token
```

## 프로젝트 구조
```
webgallery-kim/
├── src/
│   ├── app/              # 페이지 컴포넌트
│   ├── components/       # 재사용 가능한 컴포넌트
│   ├── db/              # 데이터베이스 관련 로직
│   └── utils/           # 유틸리티 함수
├── public/              # 정적 파일
└── docs/               # 프로젝트 문서
```

## 주요 페이지
1. **홈 페이지**
   - 히어로 섹션
   - 주요 기능 소개
   - 갤러리 바로가기

2. **갤러리 페이지**
   - 사진 그리드 뷰
   - 필터링 옵션
   - 확장 보기 모드

3. **관리 페이지**
   - 사진 업로드
   - 카테고리 관리
   - 메타데이터 편집

## 기여 방법
1. 프로젝트를 포크합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m "기능: 새로운 기능 추가"`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 라이선스
이 프로젝트는 MIT 라이선스로 배포됩니다.

## 연락처
- 개발자: Najongchoon
- 이메일: najongchoon@gmail.com

## 감사의 말
이 프로젝트는 Kim,Yeon-seon을 위해 제작되었습니다.
"In the beginning God created the heaven and the earth (Gen 1:1)"
