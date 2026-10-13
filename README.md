# 이남호의 취업 준비 블로그

QA 신입 지원을 위한 이력서, 프로젝트와 학습 기록을 소개하는 개인 블로그입니다. 한국어와 English를 지원합니다.

**[블로그 바로가기](https://lnh24390.github.io/)** · **[이력서 목록](https://lnh24390.github.io/resumes.html?language=ko)** · **[포트폴리오](https://lnh24390.github.io/portfolio.html?language=ko)**

## 주요 기능

- **언어 선택**: 한국어와 English를 전환하며 선택한 언어를 브라우저에 저장합니다. 상단 메뉴와 페이지 내용도 선택한 언어로 표시됩니다.
- **이력서 목록**: 한국어에서는 “QA 신입지원 이력서”, 영어에서는 “Entry-Level QA Résumé”가 표시됩니다.
- **이력서 다운로드**: 선택한 언어에 맞는 Markdown 이력서를 내려받을 수 있습니다. 이력서 페이지는 브라우저 인쇄 기능으로 PDF로 저장할 수 있습니다.
- **포트폴리오**: 휠체어 인식 프로젝트, 분리수거 도우미, Python 코딩 테스트 학습 저장소를 소개합니다.
- **글**: QA에 대한 생각과 학습 습관을 기록합니다.
- **검색**: 현재 선택한 언어의 소개, 이력서, 포트폴리오와 글 내용을 검색합니다.
- **프로필 사진**: GitHub 프로필 사진을 상단에 표시합니다.
- **반응형 화면**: 컴퓨터와 모바일 화면에 맞춰 배치가 조정됩니다.

## 페이지 구성

| 내용 | 한국어 | English |
| --- | --- | --- |
| 홈 | `index.html` | `en/index.html` |
| 이력서 목록 | `resumes.html` | `en/resumes.html` |
| QA 이력서 | `resume.html` | `en/resume.html` |
| 포트폴리오 | `portfolio.html` | `en/portfolio.html` |
| 글 목록 | `notes.html` | `en/notes.html` |
| 글 본문 | `posts/` | `en/posts/` |
| 다운로드 이력서 | `resume-ko.md` | `resume-en.md` |

## 이력서 안내

한글·영문 이력서에 학력, 기술, 교육·활동, 자격증과 자기소개를 정리했습니다. 전공은 AI반도체융합과 전문학사와 컴퓨터공학 전공심화학사 학위입니다.

한국복지대학교와 한경대학교는 2023년 3월 1일 통합되어 한경국립대학교가 되었습니다. 이 정보는 이력서의 대학교 정보에 함께 표시됩니다.

영문 이력서에는 생년월일, 나이와 성별을 표시하지 않습니다. 영문 국가명은 Republic of Korea를 사용합니다.

## 수정 방법

1. 수정할 언어의 HTML 파일을 편집합니다.
2. 이력서 수정 시 해당 언어의 다운로드 파일도 함께 수정합니다.
3. 글을 추가하면 해당 언어의 글 목록에 링크를 추가합니다.
4. 페이지 내용이 바뀌면 `assets/search-index.json`도 갱신합니다. 각 항목은 `path`, `language`, `title`, `text`로 구성됩니다.
5. 디자인은 `assets/style.css`, 언어 전환은 `assets/language.js`, 검색은 `assets/search.js`에서 관리합니다.

언어 선택을 지원하는 새 페이지는 한국어와 영어 버전을 함께 만들고, 기존 페이지의 언어 선택 링크와 `data-language`, `data-page` 속성을 참고해 연결합니다.

## 게시

HTML, CSS와 JavaScript로 구성한 정적 사이트이며 GitHub Pages로 게시합니다. 별도 빌드 과정은 필요하지 않습니다.

- 게시 브랜치: `main`
- 게시 폴더: `/(root)`
- 사이트 주소: https://lnh24390.github.io/

`main`에 변경 사항을 저장하면 GitHub Pages가 새 버전을 게시합니다. 게시 진행 상황은 저장소의 Actions에서 확인할 수 있습니다.

## About this blog

Namho Lee’s bilingual job preparation blog presents an entry-level QA résumé, team projects, and learning notes. Use the 한국어 / English selector to switch languages. English pages use **Republic of Korea** as the country name.

Contact links are available on the résumé pages.
