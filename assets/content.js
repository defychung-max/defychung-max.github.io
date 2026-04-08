window.SITE_CONTENT = {};

window.SITE_CONTENT.profile = {
  name: "Defy Chung Max",
  initials: "DM",
  role: {
    ko: "Builder · Systems Thinking · Independent Projects",
    en: "Builder · Systems Thinking · Independent Projects"
  },
  footer: {
    ko: "GitHub Pages에 바로 배포할 수 있는 정적 사이트 구조입니다.",
    en: "A static site structure ready to publish on GitHub Pages."
  },
  github: "https://github.com/defychung-max",
  repo: "https://github.com/defychung-max/defychung-max.github.io"
};

window.SITE_CONTENT.pageMap = {
  home: { ko: "ko.html", en: "en.html" },
  projects: { ko: "projects.html", en: "projects-en.html" },
  writing: { ko: "writing.html", en: "writing-en.html" },
  contact: { ko: "contact.html", en: "contact-en.html" }
};

window.SITE_CONTENT.nav = {
  home: { ko: "메인", en: "Home" },
  projects: { ko: "프로젝트", en: "Projects" },
  writing: { ko: "기록", en: "Writing" },
  contact: { ko: "문의", en: "Contact" }
};

window.SITE_CONTENT.pages = {};

window.SITE_CONTENT.pages.home = {
  ko: {
    hero: {
      eyebrow: "Personal Website",
      title: "정보 중심 구조와 선명한 톤으로 정리한 개인 사이트",
      summary: "참고하신 사이트처럼 소개, 작업, 기록, 문의가 한 흐름으로 이어지도록 구성했습니다. 처음 방문한 사람이 빠르게 맥락을 파악하고 필요한 페이지로 이동할 수 있게 설계했습니다.",
      pills: ["Bilingual Ready", "Static GitHub Pages", "Portfolio + Archive", "Mobile Responsive"],
      actions: [
        { label: "프로젝트 보기", href: "projects.html" },
        { label: "GitHub", href: "https://github.com/defychung-max", external: true, secondary: true }
      ]
    },
    quickFacts: [
      { label: "구성", value: "메인 · 프로젝트 · 기록 · 문의" },
      { label: "스타일", value: "정보 밀도 높은 개인 홈페이지" },
      { label: "구현", value: "HTML · CSS · JavaScript" },
      { label: "업데이트", value: "2026-04-08" }
    ],
    focus: {
      eyebrow: "소개",
      title: "사이트가 전달하는 핵심 메시지",
      summary: "개인 브랜드 사이트가 단순 프로필 페이지로 끝나지 않도록, 방문자가 무엇을 기대할 수 있는지 분명하게 드러내는 구조를 넣었습니다.",
      items: [
        { kicker: "Positioning", title: "명확한 첫인상", copy: "한 줄 역할 설명, 짧은 소개, 빠른 이동 링크로 첫 화면에서 핵심 정체성을 전달합니다." },
        { kicker: "Structure", title: "읽기 쉬운 정보 계층", copy: "메인 페이지는 요약, 하위 페이지는 깊이 있는 정보로 분리해 필요한 수준만큼 바로 탐색할 수 있습니다." },
        { kicker: "Trust", title: "정리된 기록", copy: "프로젝트, 글, 문의 방식을 분리해 결과물과 작업 방식이 동시에 보이도록 했습니다." }
      ]
    },
    areas: {
      eyebrow: "Focus Areas",
      title: "이 사이트가 잘 담아내는 콘텐츠",
      summary: "실제 작업 내용이 아직 정리되지 않았더라도, 아래 카테고리 구조에 맞춰 채워 넣기만 하면 안정적인 포트폴리오 사이트가 됩니다.",
      items: [
        { kicker: "Work", title: "대표 프로젝트", copy: "핵심 프로젝트를 문제, 역할, 결과 중심으로 요약하는 카드형 레이아웃입니다." },
        { kicker: "Archive", title: "실험 기록", copy: "짧은 메모부터 긴 글까지, 축적되는 기록을 읽기 좋게 정리할 수 있습니다." },
        { kicker: "Process", title: "작업 방식", copy: "어떻게 설계하고, 구현하고, 검증하는지 보여주는 흐름을 따로 소개할 수 있습니다." },
        { kicker: "About", title: "자기소개", copy: "한 페이지 안에서 소개와 현재 관심사를 모두 보여주되, 과하게 장황해지지 않도록 구성했습니다." },
        { kicker: "Contact", title: "협업 안내", copy: "문의 가능한 주제, 기대하는 메시지 형식, 응답 흐름을 명확히 적을 수 있습니다." },
        { kicker: "Language", title: "국문/영문 전환", copy: "같은 구조를 양쪽 언어로 맞춰 해외 방문자도 자연스럽게 이동할 수 있습니다." }
      ]
    },
    featured: {
      eyebrow: "Selected",
      title: "바로 채워 넣기 좋은 대표 섹션",
      summary: "빈 사이트에서 시작할 때 가장 막막한 부분은 무엇을 먼저 올려야 하는지입니다. 우선순위가 높은 항목부터 배치해 두었습니다.",
      items: [
        { kicker: "Slot 01", title: "Main Project", copy: "가장 보여주고 싶은 작업 하나를 문제 정의, 역할, 결과 요약과 함께 소개하는 영역입니다.", href: "projects.html#featured-projects", linkLabel: "프로젝트 구조 보기" },
        { kicker: "Slot 02", title: "Writing Archive", copy: "생각과 실험 과정을 정리하는 글 묶음을 별도 페이지로 분리해 신뢰도를 높입니다.", href: "writing.html#featured-writing", linkLabel: "기록 페이지 보기" },
        { kicker: "Slot 03", title: "Collaboration Guide", copy: "문의할 때 어떤 정보를 보내면 좋은지 미리 안내해 소통 비용을 줄입니다.", href: "contact.html#collaboration-tracks", linkLabel: "문의 페이지 보기" }
      ]
    },
    updates: {
      eyebrow: "News & Updates",
      title: "이번 구축에서 반영한 내용",
      summary: "참고 사이트의 장점을 유지하면서도 GitHub Pages 개인 사이트로 쓰기 쉽도록 구조를 정리했습니다.",
      items: [
        { date: "2026-04-08", title: "멀티페이지 구조 추가", copy: "메인, 프로젝트, 기록, 문의 페이지를 분리해 정보 접근성을 높였습니다." },
        { date: "2026-04-08", title: "국문/영문 페이지 동시 구성", copy: "각 페이지에서 바로 언어 전환이 가능하도록 동일한 사이트 맵으로 맞췄습니다." },
        { date: "2026-04-08", title: "공통 스타일 시스템 구성", copy: "색상, 타이포그래피, 카드 레이아웃, CTA 패턴을 통일해 이후 확장이 쉽습니다." }
      ]
    },
    cta: {
      title: "이제 실제 소개와 작업물을 채워 넣기만 하면 됩니다.",
      copy: "프로젝트 카드와 글 목록, 문의 안내는 이미 구조를 잡아 두었기 때문에 텍스트와 링크만 교체하면 사이트가 바로 살아납니다.",
      actions: [
        { label: "프로젝트 페이지", href: "projects.html" },
        { label: "문의 페이지", href: "contact.html", secondary: true }
      ]
    }
  },
  en: {
    hero: {
      eyebrow: "Personal Website",
      title: "A clear personal site built around structure, trust, and readable depth",
      summary: "Inspired by the reference site, this version keeps the same flow of introduction, work, writing, and contact so visitors can understand context quickly and move to the right page without friction.",
      pills: ["Bilingual Ready", "Static GitHub Pages", "Portfolio + Archive", "Mobile Responsive"],
      actions: [
        { label: "View Projects", href: "projects-en.html" },
        { label: "GitHub", href: "https://github.com/defychung-max", external: true, secondary: true }
      ]
    },
    quickFacts: [
      { label: "Structure", value: "Home · Projects · Writing · Contact" },
      { label: "Tone", value: "Information-dense personal website" },
      { label: "Built With", value: "HTML · CSS · JavaScript" },
      { label: "Updated", value: "2026-04-08" }
    ],
    focus: {
      eyebrow: "About",
      title: "What this site is designed to communicate",
      summary: "Instead of stopping at a simple profile page, the structure makes it obvious what kind of work, process, and collaboration a visitor can expect.",
      items: [
        { kicker: "Positioning", title: "A strong first impression", copy: "The hero area combines role, short summary, and quick links so visitors understand the core identity immediately." },
        { kicker: "Structure", title: "Readable information layers", copy: "The home page summarizes. Subpages go deeper. That split keeps the site fast to scan but rich when needed." },
        { kicker: "Trust", title: "Organized evidence", copy: "Projects, writing, and contact guidance are separated so outcomes and working style can both be visible." }
      ]
    },
    areas: {
      eyebrow: "Focus Areas",
      title: "What this site handles especially well",
      summary: "Even if your actual content is still being prepared, this structure is ready to become a stable portfolio once you replace the sample slots with your own material.",
      items: [
        { kicker: "Work", title: "Featured projects", copy: "A card-based layout for summarizing your strongest work by problem, role, and outcome." },
        { kicker: "Archive", title: "Experiment logs", copy: "A separate writing space for everything from short notes to longer essays." },
        { kicker: "Process", title: "Working method", copy: "A place to show how you design, build, and validate work instead of only listing outputs." },
        { kicker: "About", title: "Personal introduction", copy: "A compact way to explain who you are and what you care about without turning the site into a wall of text." },
        { kicker: "Contact", title: "Collaboration guidance", copy: "Clear expectations around what inquiries are useful and how people should reach out." },
        { kicker: "Language", title: "Korean and English", copy: "A mirrored page map makes it natural for visitors in either language to move around the site." }
      ]
    },
    featured: {
      eyebrow: "Selected",
      title: "The most useful sections to fill first",
      summary: "A blank personal site often fails because it is unclear what should go live first. These sections are arranged to give you momentum immediately.",
      items: [
        { kicker: "Slot 01", title: "Main Project", copy: "A space for the one project you most want people to remember, framed by problem, role, and result.", href: "projects-en.html#featured-projects", linkLabel: "See the projects layout" },
        { kicker: "Slot 02", title: "Writing Archive", copy: "A dedicated writing page helps turn ideas and experiments into durable public evidence.", href: "writing-en.html#featured-writing", linkLabel: "See the writing page" },
        { kicker: "Slot 03", title: "Collaboration Guide", copy: "A clear contact page lowers friction by telling people what kind of message is actually useful.", href: "contact-en.html#collaboration-tracks", linkLabel: "See the contact page" }
      ]
    },
    updates: {
      eyebrow: "News & Updates",
      title: "What this build includes",
      summary: "The strengths of the reference site are preserved, while the implementation is simplified for a GitHub Pages personal website.",
      items: [
        { date: "2026-04-08", title: "Multi-page structure added", copy: "Home, projects, writing, and contact are split so information feels easier to reach." },
        { date: "2026-04-08", title: "Korean and English versions included", copy: "Every page has a mirrored language pair with direct switching." },
        { date: "2026-04-08", title: "Shared visual system created", copy: "Typography, cards, section spacing, and calls to action are standardized for easy future expansion." }
      ]
    },
    cta: {
      title: "From here, the site only needs your real story and links.",
      copy: "The structure is already in place, so replacing the sample slots with real project summaries and writing links will make the site feel fully alive.",
      actions: [
        { label: "Projects Page", href: "projects-en.html" },
        { label: "Contact Page", href: "contact-en.html", secondary: true }
      ]
    }
  }
};

window.SITE_CONTENT.pages.projects = {
  ko: {
    hero: {
      eyebrow: "Projects",
      title: "프로젝트를 보여주는 가장 안전한 기본 골격",
      summary: "결과물 페이지가 아직 없어도 괜찮습니다. 프로젝트 카드의 제목, 설명, 링크만 교체하면 바로 사용할 수 있는 구조로 설계했습니다.",
      pills: ["Featured Work", "Case Study Slots", "Ready for GitHub Links"]
    },
    featured: {
      eyebrow: "Featured Work",
      title: "대표 프로젝트 슬롯",
      summary: "아래 네 가지 유형은 대부분의 개인 사이트에서 바로 활용하기 좋은 기본 포맷입니다.",
      items: [
        { kicker: "Core", title: "Main Product", copy: "가장 비중이 큰 작업. 무엇을 만들었는지, 어떤 문제를 풀었는지, 어떤 결과가 나왔는지 적기에 좋습니다.", tags: ["Problem", "Role", "Outcome"] },
        { kicker: "Client", title: "Client or Team Work", copy: "개인 프로젝트가 아니더라도 팀 안에서 맡았던 역할과 기여 범위를 분명하게 설명할 수 있습니다.", tags: ["Scope", "Team", "Contribution"] },
        { kicker: "Experiment", title: "Prototype or Lab Note", copy: "작게 만든 실험도 기록해 두면 사고 방식과 실행 속도를 보여주는 좋은 자료가 됩니다.", tags: ["Prototype", "Iteration", "Learning"] },
        { kicker: "Open", title: "Open Source or Public Build", copy: "GitHub 저장소, 데모 링크, 문서를 함께 걸어 두기 좋은 공개 작업 영역입니다.", tags: ["Code", "Docs", "Demo"] }
      ]
    },
    experiments: {
      eyebrow: "Build Categories",
      title: "추가로 확장하기 좋은 카드 묶음",
      summary: "대표 작업 외에도 아래 묶음을 차곡차곡 채우면 사이트가 단순 이력서가 아니라 살아 있는 작업 아카이브가 됩니다.",
      items: [
        { kicker: "System", title: "Design System Fragments", copy: "레이아웃 패턴, 컴포넌트 규칙, 문서 구조 등 반복 가능한 설계 요소를 정리합니다." },
        { kicker: "Ops", title: "Workflow Automations", copy: "반복 작업을 줄이는 스크립트나 운영 흐름을 소개할 수 있는 자리입니다." },
        { kicker: "Research", title: "Research Notes", copy: "짧은 실험이나 비교 테스트도 프로젝트 단위로 묶어 두면 좋습니다." }
      ]
    },
    workflow: {
      eyebrow: "Execution Flow",
      title: "프로젝트 설명을 정리하는 추천 순서",
      summary: "각 프로젝트마다 아래 네 단계만 채워도 방문자가 작업을 이해하기 훨씬 쉬워집니다.",
      steps: [
        { title: "문제 정의", copy: "무엇이 문제였는지, 왜 이 작업이 필요했는지 한두 문장으로 명확히 적습니다." },
        { title: "역할과 범위", copy: "직접 맡은 부분과 협업 범위를 구분해 기여가 보이도록 정리합니다." },
        { title: "구현 방식", copy: "사용한 기술보다 어떤 구조로 풀었는지, 왜 그렇게 설계했는지에 집중합니다." },
        { title: "결과와 다음 단계", copy: "수치, 사용자 반응, 배운 점, 이후 개선 계획까지 이어서 적으면 완성도가 높아집니다." }
      ]
    },
    stack: {
      eyebrow: "Presentation",
      title: "카드에 함께 쓰면 좋은 태그 예시",
      summary: "기술 스택을 길게 늘어놓기보다, 아래처럼 짧은 태그로 맥락을 정리하면 훨씬 읽기 쉽습니다.",
      tags: ["Frontend", "Backend", "Docs", "Launch", "AI Tools", "Experiment", "Case Study", "Open Source"]
    },
    cta: {
      title: "대표 작업 하나부터 채우면 페이지 전체가 살아납니다.",
      copy: "링크가 아직 없어도 제목과 설명, 역할 요약만 먼저 적어 두면 충분히 좋은 출발점이 됩니다.",
      actions: [
        { label: "기록 페이지 보기", href: "writing.html" },
        { label: "문의 페이지 보기", href: "contact.html", secondary: true }
      ]
    }
  },
  en: {
    hero: {
      eyebrow: "Projects",
      title: "A stable default structure for showing your work well",
      summary: "Even if your final case studies are not ready yet, this page is set up so you can replace titles, summaries, and links later without rebuilding the layout.",
      pills: ["Featured Work", "Case Study Slots", "Ready for GitHub Links"]
    },
    featured: {
      eyebrow: "Featured Work",
      title: "Recommended project slots",
      summary: "These four formats are the safest starting point for most personal portfolio sites.",
      items: [
        { kicker: "Core", title: "Main Product", copy: "Your most important work. A good place to summarize what you built, what problem it solved, and what happened as a result.", tags: ["Problem", "Role", "Outcome"] },
        { kicker: "Client", title: "Client or Team Work", copy: "Useful for explaining scope and contribution clearly even when the project was not a solo effort.", tags: ["Scope", "Team", "Contribution"] },
        { kicker: "Experiment", title: "Prototype or Lab Note", copy: "Small experiments are valuable public evidence when they reveal how you think and iterate.", tags: ["Prototype", "Iteration", "Learning"] },
        { kicker: "Open", title: "Open Source or Public Build", copy: "A natural place for repositories, demos, documentation, or public tools.", tags: ["Code", "Docs", "Demo"] }
      ]
    },
    experiments: {
      eyebrow: "Build Categories",
      title: "Additional card groups worth growing over time",
      summary: "Once you add these supporting categories, the site starts feeling like a living work archive instead of a static resume.",
      items: [
        { kicker: "System", title: "Design System Fragments", copy: "A place for reusable layout patterns, component rules, and documentation structures." },
        { kicker: "Ops", title: "Workflow Automations", copy: "A good slot for scripts, checklists, or operational flows that reduce repeated work." },
        { kicker: "Research", title: "Research Notes", copy: "Short experiments or comparison tests become much more useful when grouped by theme." }
      ]
    },
    workflow: {
      eyebrow: "Execution Flow",
      title: "A clean order for writing project descriptions",
      summary: "If you fill in these four parts for each project, visitors can understand your work much faster.",
      steps: [
        { title: "Define the problem", copy: "Explain what the problem was and why the project mattered in one or two direct sentences." },
        { title: "Clarify role and scope", copy: "Separate your direct ownership from broader team context so contribution stays visible." },
        { title: "Describe the implementation", copy: "Focus less on tool lists and more on the structure you chose and why you chose it." },
        { title: "Show outcomes and next steps", copy: "Metrics, user response, lessons learned, or future improvements help the project feel complete." }
      ]
    },
    stack: {
      eyebrow: "Presentation",
      title: "Useful tags to add to project cards",
      summary: "Short tags are often more readable than long stack paragraphs when someone is scanning your work quickly.",
      tags: ["Frontend", "Backend", "Docs", "Launch", "AI Tools", "Experiment", "Case Study", "Open Source"]
    },
    cta: {
      title: "One strong project summary can make the entire page feel real.",
      copy: "Even before the final links are ready, a title, short summary, and clear role statement go a long way.",
      actions: [
        { label: "View Writing", href: "writing-en.html" },
        { label: "View Contact", href: "contact-en.html", secondary: true }
      ]
    }
  }
};

window.SITE_CONTENT.pages.writing = {
  ko: {
    hero: {
      eyebrow: "Writing & Notes",
      title: "짧은 메모부터 긴 글까지 한곳에 모으는 기록 페이지",
      summary: "프로젝트만으로는 보이지 않는 생각의 흐름과 실험 과정을 보여주는 공간입니다. 아직 글이 많지 않아도 구조만 있어도 충분히 시작할 수 있습니다.",
      pills: ["Essays", "Build Logs", "Field Notes"]
    },
    featured: {
      eyebrow: "Featured Writing",
      title: "처음 채우기 좋은 글 유형",
      summary: "실제 글이 준비되기 전에도, 어떤 종류의 기록을 쌓아갈지 먼저 정해 두면 훨씬 꾸준히 운영하기 쉽습니다.",
      items: [
        { kicker: "Essay", title: "생각을 정리하는 긴 글", copy: "하나의 주제를 길게 다루며 관점과 배운 점을 정리하는 글입니다." },
        { kicker: "Log", title: "빌드 로그", copy: "프로젝트 진행 과정, 막혔던 지점, 바꾼 결정들을 시간 순으로 정리합니다." },
        { kicker: "Note", title: "짧은 메모", copy: "짧지만 자주 남길 수 있는 생각 조각은 사이트에 생동감을 줍니다." },
        { kicker: "Review", title: "도구 또는 레퍼런스 리뷰", copy: "사용해 본 도구, 읽은 자료, 참고한 사례를 정리해 작업 맥락을 넓힙니다." }
      ]
    },
    archive: {
      eyebrow: "Archive Shape",
      title: "카테고리별 아카이브 구성",
      summary: "기록은 길이보다 묶는 방식이 중요합니다. 아래처럼 분류하면 방문자가 찾기 쉽고 본인도 업데이트하기 수월합니다.",
      items: [
        { kicker: "Work", title: "Project Notes", copy: "특정 프로젝트와 직접 연결된 기록 모음입니다." },
        { kicker: "Thinking", title: "Essays & Opinions", copy: "생각의 변화나 장기적인 관점을 담는 글 묶음입니다." },
        { kicker: "Resources", title: "References", copy: "도구, 링크, 책, 문서 등 다시 꺼내 보기 위한 자료를 정리합니다." }
      ]
    },
    principles: {
      eyebrow: "Writing Principles",
      title: "기록 페이지를 꾸준히 유지하는 기준",
      summary: "거창하게 쓰기보다 자주 남기고, 나중에 다시 찾기 쉽게 정리하는 쪽이 훨씬 오래 갑니다.",
      items: [
        { kicker: "Keep It Moving", title: "짧게라도 올리기", copy: "완성도보다 축적 빈도를 먼저 확보하면 기록 습관이 훨씬 안정적으로 자리 잡습니다." },
        { kicker: "Make It Searchable", title: "주제와 태그 남기기", copy: "한두 개의 카테고리와 핵심 키워드만 붙여도 나중에 찾아보기 훨씬 쉬워집니다." },
        { kicker: "Close The Loop", title: "프로젝트와 연결하기", copy: "관련 프로젝트 페이지로 다시 연결해 두면 글과 작업물이 서로 힘을 실어 줍니다." }
      ]
    },
    cta: {
      title: "글이 적어도 괜찮습니다. 첫 세 개만 올려도 흐름이 생깁니다.",
      copy: "짧은 메모, 진행 기록, 긴 글 하나씩만 채워도 방문자는 이 사이트가 계속 살아 있을 거라고 느끼게 됩니다.",
      actions: [
        { label: "프로젝트 보기", href: "projects.html" },
        { label: "문의 보기", href: "contact.html", secondary: true }
      ]
    }
  },
  en: {
    hero: {
      eyebrow: "Writing & Notes",
      title: "A dedicated place for short notes, essays, and build logs",
      summary: "Projects alone do not show how you think. This page gives your experiments, lessons, and ongoing notes a durable home even before the archive becomes large.",
      pills: ["Essays", "Build Logs", "Field Notes"]
    },
    featured: {
      eyebrow: "Featured Writing",
      title: "Good writing formats to start with",
      summary: "Defining the kinds of writing you want to publish makes it much easier to keep the archive alive later.",
      items: [
        { kicker: "Essay", title: "Long-form thinking", copy: "A space for a single topic explored in depth, with perspective, reflection, and synthesis." },
        { kicker: "Log", title: "Build log", copy: "A running record of progress, blockers, decisions, and changes over time." },
        { kicker: "Note", title: "Short note", copy: "Small fragments written often can make the whole site feel active and human." },
        { kicker: "Review", title: "Tool or reference review", copy: "Useful for documenting the tools, books, resources, and examples shaping your work." }
      ]
    },
    archive: {
      eyebrow: "Archive Shape",
      title: "A simple category system for the archive",
      summary: "Writing is easier to maintain when the grouping is clear. These categories make browsing easier for both you and your visitors.",
      items: [
        { kicker: "Work", title: "Project Notes", copy: "Notes directly tied to specific builds or case studies." },
        { kicker: "Thinking", title: "Essays & Opinions", copy: "Longer reflections and perspective pieces that show how your thinking changes over time." },
        { kicker: "Resources", title: "References", copy: "Books, links, tools, and documents worth returning to later." }
      ]
    },
    principles: {
      eyebrow: "Writing Principles",
      title: "Rules that help the archive stay alive",
      summary: "Consistency matters more than polish at the start. The goal is to build a durable habit and a searchable public record.",
      items: [
        { kicker: "Keep It Moving", title: "Publish small pieces", copy: "A short note published often is more sustainable than waiting for perfect long-form work." },
        { kicker: "Make It Searchable", title: "Add themes and tags", copy: "Even minimal labeling makes the archive far easier to revisit later." },
        { kicker: "Close The Loop", title: "Link writing back to projects", copy: "Connecting writing and project pages lets each strengthen the other." }
      ]
    },
    cta: {
      title: "A small archive is still a real archive.",
      copy: "One short note, one build log, and one essay are already enough to create momentum and signal ongoing work.",
      actions: [
        { label: "View Projects", href: "projects-en.html" },
        { label: "View Contact", href: "contact-en.html", secondary: true }
      ]
    }
  }
};

window.SITE_CONTENT.pages.contact = {
  ko: {
    hero: {
      eyebrow: "Contact",
      title: "문의 전에 기대값을 맞추는 협업 안내 페이지",
      summary: "참고 사이트의 문의 페이지 구조를 가져와, 어떤 문의를 환영하는지와 어떤 정보를 함께 보내면 좋은지 분명하게 보여주도록 구성했습니다.",
      pills: ["Project Inquiry", "Collaboration", "Clear Expectations"]
    },
    tracks: {
      eyebrow: "Collaboration Tracks",
      title: "이 페이지에서 안내하기 좋은 문의 유형",
      summary: "실제 운영 방식에 맞춰 아래 카드의 문구만 다듬으면 바로 쓸 수 있습니다.",
      items: [
        { kicker: "Project", title: "프로젝트 문의", copy: "의뢰 또는 협업 제안 시 작업 범위, 일정, 필요한 결과물을 함께 적도록 안내합니다." },
        { kicker: "Review", title: "피드백 요청", copy: "사이트, 제품, 문서, 디자인 등 리뷰가 필요한 대상을 명확히 적도록 받을 수 있습니다." },
        { kicker: "Writing", title: "인터뷰 또는 글 요청", copy: "주제, 목적, 마감 일정을 미리 알려 주면 응답이 훨씬 빨라집니다." },
        { kicker: "General", title: "일반 문의", copy: "짧은 질문이나 가벼운 인사도 받을 수 있지만, 맥락이 있으면 더 좋은 답을 주기 쉽습니다." }
      ]
    },
    process: {
      eyebrow: "How It Works",
      title: "문의 흐름 예시",
      summary: "아래 순서는 개인 사이트의 문의 페이지에 가장 무난하게 들어가는 기본 프로세스입니다.",
      steps: [
        { title: "맥락 공유", copy: "누가, 무엇 때문에 연락하는지 첫 문단에서 바로 알 수 있게 적습니다." },
        { title: "요청 범위 정리", copy: "필요한 작업, 원하는 결과물, 중요 일정이 있다면 함께 남깁니다." },
        { title: "관련 링크 첨부", copy: "GitHub, 문서, 화면, 기존 자료 등 판단에 필요한 링크를 보내면 좋습니다." },
        { title: "회신 대기", copy: "응답 가능한 범위와 속도를 미리 적어 두면 양쪽 모두 부담이 줄어듭니다." }
      ]
    },
    channels: {
      eyebrow: "Contact Points",
      title: "현재 연결해 둔 기본 경로",
      summary: "실제 이메일이나 추가 채널이 있다면 나중에 이 카드만 교체하면 됩니다.",
      items: [
        { kicker: "GitHub", title: "@defychung-max", copy: "현재 공개적으로 연결 가능한 기본 프로필 링크입니다.", href: "https://github.com/defychung-max", linkLabel: "GitHub 열기" },
        { kicker: "Repository", title: "Website Source", copy: "사이트 구조와 파일을 직접 관리하는 저장소입니다.", href: "https://github.com/defychung-max/defychung-max.github.io", linkLabel: "저장소 보기" }
      ]
    },
    template: {
      eyebrow: "Message Template",
      title: "문의 메시지에 포함하면 좋은 내용",
      summary: "문의 양식이 너무 길 필요는 없지만, 아래 정보가 있으면 빠르게 판단하고 회신하기 좋습니다.",
      lines: [
        "자기소개 또는 소속 한 줄",
        "연락한 이유와 기대하는 결과",
        "관련 링크 또는 참고 자료",
        "원하는 일정 또는 응답 시점"
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "미리 적어 두면 좋은 질문",
      summary: "짧은 FAQ만 있어도 문의 페이지가 훨씬 친절해집니다.",
      items: [
        { title: "어떤 문의를 가장 우선으로 보나요?", copy: "맥락이 분명하고 필요한 결과가 명확한 문의일수록 빠르게 검토하기 좋습니다." },
        { title: "답장은 얼마나 걸리나요?", copy: "응답 가능 시간을 한 문장으로 적어 두면 기대값 관리에 도움이 됩니다." },
        { title: "자료 없이 문의해도 되나요?", copy: "가능하지만 링크나 예시가 있으면 훨씬 정확한 답변을 주기 쉽습니다." },
        { title: "간단한 인사도 가능한가요?", copy: "물론 가능하지만, 어떤 계기로 연락했는지 함께 적으면 더 반갑게 읽힙니다." }
      ]
    },
    cta: {
      title: "실제 이메일 주소나 추가 채널만 넣으면 문의 페이지도 바로 완성됩니다.",
      copy: "지금 구조는 이미 정리되어 있으니, 운영 방식에 맞춰 문장만 조금 다듬으면 충분합니다.",
      actions: [
        { label: "메인으로", href: "ko.html" },
        { label: "프로젝트로", href: "projects.html", secondary: true }
      ]
    }
  },
  en: {
    hero: {
      eyebrow: "Contact",
      title: "A contact page that sets expectations before the first message",
      summary: "Based on the structure of the reference contact page, this version makes it clear what kind of inquiry is welcome and what information helps you respond well.",
      pills: ["Project Inquiry", "Collaboration", "Clear Expectations"]
    },
    tracks: {
      eyebrow: "Collaboration Tracks",
      title: "Inquiry types that fit naturally here",
      summary: "You can keep the structure and simply adjust the wording later to match your real workflow.",
      items: [
        { kicker: "Project", title: "Project inquiry", copy: "A place to ask for scope, timeline, and desired outcome when someone reaches out about a build or collaboration." },
        { kicker: "Review", title: "Feedback request", copy: "Useful for product, site, document, or design reviews where the target needs to be clearly identified." },
        { kicker: "Writing", title: "Interview or writing request", copy: "Asking for topic, purpose, and deadline up front makes the exchange much smoother." },
        { kicker: "General", title: "General contact", copy: "Short greetings or light questions are welcome, but context always helps improve the reply." }
      ]
    },
    process: {
      eyebrow: "How It Works",
      title: "A simple inquiry flow",
      summary: "This order is a safe default for most personal portfolio contact pages.",
      steps: [
        { title: "Share context", copy: "Make it clear who is reaching out and why in the opening paragraph." },
        { title: "Define the request", copy: "State the work, outcome, or deadline if there is one." },
        { title: "Add supporting links", copy: "Repositories, documents, screenshots, or prior material make evaluation much easier." },
        { title: "Wait for reply", copy: "Publishing a rough response window helps set healthy expectations on both sides." }
      ]
    },
    channels: {
      eyebrow: "Contact Points",
      title: "Current public routes",
      summary: "If you later add an email address or other channel, you only need to swap the card content.",
      items: [
        { kicker: "GitHub", title: "@defychung-max", copy: "The main public profile linked from this site right now.", href: "https://github.com/defychung-max", linkLabel: "Open GitHub" },
        { kicker: "Repository", title: "Website Source", copy: "The repository where the site structure and files are managed.", href: "https://github.com/defychung-max/defychung-max.github.io", linkLabel: "View repository" }
      ]
    },
    template: {
      eyebrow: "Message Template",
      title: "Helpful details to include in a message",
      summary: "The message does not need to be long, but these details make it much easier to respond quickly and clearly.",
      lines: [
        "A one-line introduction or affiliation",
        "Why you are reaching out and what outcome you want",
        "Relevant links or references",
        "Any timeline or preferred reply window"
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions worth answering in advance",
      summary: "A short FAQ makes the contact page feel much more thoughtful and useful.",
      items: [
        { title: "What kind of inquiry gets priority?", copy: "Requests with clear context and a defined goal are naturally easier to review quickly." },
        { title: "How long does a reply usually take?", copy: "Even a rough answer here helps manage expectations well." },
        { title: "Can I reach out without supporting material?", copy: "Yes, but links or examples almost always lead to a better response." },
        { title: "Are casual messages okay?", copy: "Absolutely. It just helps to mention what brought you here." }
      ]
    },
    cta: {
      title: "Once you add a real email or extra channel, this page is ready to go.",
      copy: "The structure is already set, so the remaining work is mostly small wording updates that match your own process.",
      actions: [
        { label: "Back Home", href: "en.html" },
        { label: "View Projects", href: "projects-en.html", secondary: true }
      ]
    }
  }
};
