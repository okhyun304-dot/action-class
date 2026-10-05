const visuals = {
  'business-model': `<div class="v-gears visual-content"><svg viewBox="0 0 360 210" aria-hidden="true"><g transform="translate(126 100)"><g class="gear-rotor gear-one"><circle r="51"/><circle r="44"/></g><circle class="gear-core" r="34"/><text class="gear-text" text-anchor="middle" y="5">사업 모델</text></g><g transform="translate(234 100)"><g class="gear-rotor gear-two"><circle r="51"/><circle r="44"/></g><circle class="gear-core" r="34"/><text class="gear-text" text-anchor="middle" y="5">마케팅</text></g><path class="gear-output" d="M180 154 L180 184"/><text class="gear-result" text-anchor="middle" x="180" y="201">팔리는 구조</text></svg></div>`,
  gathering: `<div class="v-funnel visual-content"><svg viewBox="0 0 360 210" aria-hidden="true"><path class="funnel-shape" d="M40 36 H320 L230 132 H130 Z"/><path class="funnel-flow" d="M180 134 L180 169"/><g class="funnel-people"><circle cx="80" cy="61" r="7"/><circle cx="126" cy="59" r="7"/><circle cx="180" cy="57" r="7"/><circle cx="234" cy="59" r="7"/><circle cx="280" cy="61" r="7"/></g><circle class="funnel-lead" cx="180" cy="153" r="11"/><text class="funnel-top" text-anchor="middle" x="180" y="27">잠재고객을 모으는 입구</text><text class="funnel-bottom" text-anchor="middle" x="180" y="195">그다음 판매</text></svg></div>`,
  'four-zones': `<div class="v-zones visual-content"><div class="v-zone z-tl"><small>관계 약함 · 표면 니즈</small><strong>비교 중</strong></div><div class="v-zone z-tr"><small>관계 약함 · 잠재 니즈</small><strong>출발점</strong></div><div class="v-zone z-bl"><small>관계 깊음 · 표면 니즈</small><strong>제안 시점</strong></div><div class="v-zone z-br"><small>관계 깊음 · 잠재 니즈</small><strong>신뢰 형성</strong></div><svg class="v-zone-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path class="route-one" d="M75 25 L75 75"/><path class="route-two" d="M75 75 L25 75"/></svg><div class="v-zone-person">고객</div></div>`,
  customerization: `<div class="v-cycle visual-content"><svg viewBox="0 0 360 210" aria-hidden="true"><circle class="cycle-track" cx="180" cy="104" r="66"/><g class="cycle-rotator"><circle class="cycle-moving" cx="180" cy="38" r="7"/></g><circle class="cycle-point cp-potential" cx="180" cy="38" r="13"/><circle class="cycle-point cp-guest" cx="238" cy="135" r="13"/><circle class="cycle-point cp-customer" cx="122" cy="135" r="13"/><text class="cycle-label" x="180" y="23" text-anchor="middle">잠재고객</text><text class="cycle-label" x="262" y="155" text-anchor="middle">손님</text><text class="cycle-label" x="98" y="155" text-anchor="middle">고객</text><text class="cycle-center" x="180" y="109" text-anchor="middle">다시 찾는 이유</text></svg></div>`,
  'growth-curve': `<div class="v-curve visual-content"><svg viewBox="0 0 360 210" role="presentation" aria-hidden="true"><line x1="38" y1="174" x2="332" y2="174"/><line x1="38" y1="25" x2="38" y2="174"/><path class="curve-expected" d="M38 174 L322 43"/><path class="curve-real" d="M38 174 C115 173 150 167 178 159 S230 138 252 104 S290 58 322 39"/><text x="240" y="54">기대</text><text x="192" y="155">축적</text></svg><span class="curve-label">시간 →</span></div>`,
  'inner-game': `<div class="v-inner visual-content"><div class="inner-block inner-potential"><small>이미 가진 것</small><strong>잠재력</strong></div><b>−</b><div class="inner-block inner-interference"><small>출력을 막는 것</small><strong>간섭</strong></div><b>＝</b><div class="inner-block inner-performance"><small>지금 드러나는 것</small><strong>성과</strong></div><div class="inner-note">판단 → 관찰 → 선택 → 실행</div></div>`
};

Object.assign(visuals, {
  'sales-journey': `<div class="v-journey visual-content"><svg viewBox="0 0 360 210" aria-hidden="true"><path class="journey-line" d="M45 103 H315"/><circle class="journey-dot" cx="45" cy="103" r="10"/><g class="journey-stops"><circle cx="45" cy="103" r="19"/><circle cx="135" cy="103" r="19"/><circle cx="225" cy="103" r="19"/><circle cx="315" cy="103" r="19"/></g><g class="journey-labels"><text x="45" y="151">인지</text><text x="135" y="151">흥미</text><text x="225" y="151">고려</text><text x="315" y="151">구매</text></g><text class="journey-heading" x="180" y="51" text-anchor="middle">고객이 스스로 건너는 길</text></svg></div>`,
  'price-ladder': `<div class="v-prices visual-content"><svg viewBox="0 0 360 210" aria-hidden="true"><path class="price-base" d="M32 163 H330"/><rect class="price-bar p-low" x="54" y="114" width="65" height="49"/><rect class="price-bar p-main" x="145" y="76" width="65" height="87"/><rect class="price-bar p-high" x="236" y="36" width="65" height="127"/><g class="price-labels"><text x="86" y="185">입문</text><text x="177" y="185">주력</text><text x="268" y="185">프리미엄</text></g><path class="price-climb" d="M83 104 L176 65 L266 25"/></svg></div>`,
  'dormant-customers': `<div class="v-reactivate visual-content"><svg viewBox="0 0 360 210" aria-hidden="true"><path class="reactivate-line" d="M67 105 H293"/><circle class="reactivate-first" cx="67" cy="105" r="25"/><circle class="reactivate-quiet" cx="180" cy="105" r="25"/><circle class="reactivate-return" cx="293" cy="105" r="25"/><circle class="reactivate-signal" cx="180" cy="105" r="38"/><g class="reactivate-labels"><text x="67" y="155">첫 구매</text><text x="180" y="155">조용한 고객</text><text x="293" y="155">다시 찾음</text></g><path class="reactivate-message" d="M145 50 H215 L180 75 Z"/></svg></div>`,
  'blog-bridge': `<div class="v-blog visual-content"><svg viewBox="0 0 360 210" aria-hidden="true"><path class="blog-route" d="M56 57 C100 57 109 103 160 103 M56 151 C100 151 109 103 160 103 M212 103 H316"/><circle class="blog-source bs-search" cx="56" cy="57" r="18"/><circle class="blog-source bs-community" cx="56" cy="151" r="18"/><rect class="blog-home" x="157" y="67" width="58" height="72" rx="4"/><path class="blog-lines" d="M170 87 H202 M170 99 H202 M170 111 H194"/><circle class="blog-result" cx="307" cy="103" r="20"/><circle class="blog-traveler" cx="56" cy="57" r="7"/><g class="blog-labels"><text x="56" y="32">검색</text><text x="56" y="187">카페</text><text x="186" y="160">블로그</text><text x="307" y="156">이어서 읽기</text></g></svg></div>`,
  'review-research': `<div class="v-reviews visual-content"><svg viewBox="0 0 360 210" aria-hidden="true"><rect class="reviews-page" x="34" y="36" width="176" height="132" rx="3"/><path class="reviews-lines" d="M52 61 H177 M52 83 H165 M52 105 H181 M52 127 H150"/><circle class="reviews-glass" cx="120" cy="83" r="34"/><path class="reviews-handle" d="M144 107 L174 137"/><path class="reviews-transfer" d="M216 103 H265"/><rect class="reviews-idea" x="269" y="66" width="62" height="74" rx="6"/><text class="reviews-idea-text" x="300" y="111">제안</text><text class="reviews-caption" x="122" y="195">후기에서 고객의 말을 찾는다</text></svg></div>`,
  'teach-first': `<div class="v-teach visual-content"><svg viewBox="0 0 360 210" aria-hidden="true"><circle class="teach-wave wave-one" cx="180" cy="76" r="38"/><circle class="teach-wave wave-two" cx="180" cy="76" r="38"/><circle class="teach-head" cx="180" cy="51" r="14"/><path class="teach-body" d="M150 103 Q180 67 210 103"/><path class="teach-board" d="M117 107 H243"/><g class="teach-people"><circle cx="75" cy="151" r="12"/><circle cx="125" cy="161" r="12"/><circle cx="180" cy="165" r="12"/><circle cx="235" cy="161" r="12"/><circle cx="285" cy="151" r="12"/></g><text class="teach-caption" x="180" y="198">설명 → 이해 → 신뢰</text></svg></div>`,
  'loneliness-thumb': `<div class="v-thumb visual-content"><svg viewBox="0 0 360 210" aria-hidden="true"><path class="thumb-axis" d="M47 149 H316"/><path class="thumb-peers" d="M75 130 H244 M75 143 H267 M75 156 H235"/><g class="thumb-turn"><path d="M167 133 H275"/><circle cx="167" cy="133" r="8"/></g><path class="thumb-up" d="M167 132 V31"/><text class="thumb-side" x="244" y="108">남들이 가는 방향</text><text class="thumb-top" x="168" y="24">내가 쌓아가는 방향</text><text class="thumb-caption" x="180" y="191">손바닥을 돌리면 길의 모양도 달라진다</text></svg></div>`
});

if (window.BOOK_CHAPTERS && window.diagramSVG) {
  const cuts = {
    2: [0, 4, 8, 11, 14], 4: [0, 5, 12, 20, 31],
    5: [0, 7, 14, 22, 31], 7: [0, 5, 11, 16, 22],
    22: [0, 7, 15, 23, 31], 27: [0, 4, 8, 12, 18]
  };
  for (const chapter of window.BOOK_CHAPTERS) {
    const id = `ebook-${chapter.slug}`;
    const points = cuts[chapter.no];
    visuals[id] = `<div class="ebook-visual visual-content">${window.diagramSVG(chapter.slug)}</div>`;
    courseModules.push({
      id, ebook: true, ebookImage: chapter.image, number: String(chapter.no).padStart(2, '0'),
      category: '도해 전자책', title: chapter.title, deck: chapter.deck,
      subtitle: chapter.thesis, tags: [chapter.category, chapter.type, 'NLP 코칭'],
      source: `『NLP 코칭 통합본』 · 원문 ${chapter.no}장`,
      sections: window.DIAGRAMS[chapter.slug].steps.map((title, index) => ({
        title, source: `전자책 원문 ${chapter.no}장`,
        paragraphs: chapter.paragraphs.slice(points[index], points[index + 1])
      }))
    });
  }
}

const $ = id => document.getElementById(id);
const filters = ['전체', '사업·마케팅', '성장·실행', '도해 전자책'];
let activeFilter = '전체';
let activeModule = null;
let activeStep = 0;
let observer = null;
let playTimer = null;
let libraryVisible = 18;
let libraryQuery = '';
let ebookPreviewTimers = [];

function animateEbookPreviews() {
  ebookPreviewTimers.forEach(clearInterval);
  ebookPreviewTimers = [];
  for (const svg of document.querySelectorAll('.card-visual .ebook-visual svg')) {
    const groups = [...(svg.querySelectorAll?.('[data-step]') || [])];
    if (!groups.length) continue;
    let frame = -1;
    const advance = () => {
      frame = (frame + 1) % (groups.length + 2);
      groups.forEach((group, index) => group.classList.toggle('is-visible', frame >= index && frame < groups.length + 1));
    };
    advance();
    ebookPreviewTimers.push(setInterval(advance, 1050));
  }
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function libraryVisual(entry) {
  const text = `${entry.title} ${entry.topics.join(' ')}`;
  if (/성공곡선|성장곡선|습관|꾸준/.test(text)) return visuals['growth-curve'];
  if (/이너게임|코칭|감정|불안/.test(text)) return visuals['inner-game'];
  if (/고객화|재구매|브랜딩|팬/.test(text)) return visuals.customerization;
  if (/모객|광고|블로그|카피|판매/.test(text)) return visuals.gathering;
  if (/사업|비즈니스|마케팅|가격/.test(text)) return visuals['business-model'];
  return `<div class="v-network visual-content"><span>${escapeHtml(entry.topics[0] || '핵심 개념')}</span><i></i><span>${escapeHtml(entry.topics[1] || '강의 내용')}</span><i></i><span>${escapeHtml(entry.topics[2] || '적용')}</span></div>`;
}

function renderFilters() {
  $('filters').innerHTML = filters.map(name => `<button type="button" data-filter="${name}" aria-pressed="${name === activeFilter}">${name}<span>${name === '전체' ? courseModules.length : courseModules.filter(item => item.category === name).length}</span></button>`).join('');
  for (const button of document.querySelectorAll('[data-filter]')) {
    button.addEventListener('click', () => { activeFilter = button.dataset.filter; renderFilters(); renderCards(); });
  }
}

function renderCards() {
  const items = courseModules.filter(item => activeFilter === '전체' || item.category === activeFilter);
  $('card-grid').innerHTML = items.map(item => `<a class="lesson-card" href="#lesson/${item.id}"><div class="card-visual" data-preview data-visual="${item.id}" aria-hidden="true">${visuals[item.id]}</div><div class="card-body"><span class="card-category">${item.category}</span><h2>${item.title}</h2><p>${item.deck}</p><div class="card-tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="card-footer"><span>${item.ebook ? `EBOOK ${item.number}` : item.editorial ? 'NEW COLUMN' : `COLUMN ${item.number}`}</span><strong>${item.ebook ? '원문 읽기 →' : '칼럼 읽기 →'}</strong></div></div></a>`).join('');
  animateEbookPreviews();
}

function matchingLibrary() {
  const query = libraryQuery.trim().toLocaleLowerCase('ko');
  if (!query) return lectureLibrary;
  return lectureLibrary.filter(entry => `${entry.id} ${entry.title} ${entry.lead} ${entry.topics.join(' ')}`.toLocaleLowerCase('ko').includes(query));
}

function renderLibrary() {
  const items = matchingLibrary();
  $('library-total').textContent = `${lectureLibrary.length}편`;
  $('library-count').textContent = `${items.length}편 중 ${Math.min(items.length, libraryVisible)}편 표시`;
  $('library-grid').innerHTML = items.slice(0, libraryVisible).map(entry => {
    const column = courseModules.find(item => item.lectureId === entry.id);
    return `<a class="archive-card${column ? ' has-column' : ''}" href="#lecture/${entry.id}"><div class="archive-thumb" data-preview aria-hidden="true">${column ? visuals[column.id] : libraryVisual(entry)}</div><div class="archive-copy"><span>${escapeHtml(entry.category)} · ${entry.id}${column ? ' · 완성 칼럼' : ' · 원자료'}</span><h3>${escapeHtml(column ? column.title : entry.title)}</h3><p>${escapeHtml(column ? column.deck : entry.lead || entry.topics.join(' · '))}</p><strong>${column ? '칼럼 읽기 →' : '자료 상태 보기 →'}</strong></div></a>`;
  }).join('');
  $('library-more').hidden = libraryVisible >= items.length;
}

function toLibraryModule(entry) {
  return {
    id: `lecture-${entry.id}`, lectureId: entry.id, category: entry.category,
    number: entry.id, title: entry.title, deck: entry.lead || `${entry.topics.join(' · ')} 강의 정리본`,
    subtitle: entry.topics.join(' · '), tags: entry.topics, source: `강의 ${entry.id} · 요약.md`,
    visualMarkup: libraryVisual(entry), isLibrary: true,
    sections: [{ title: '칼럼 집필 전 원자료', paragraphs: ['이 강의의 해설 칼럼은 아직 집필하지 않았습니다.'], source: `강의 ${entry.id} · 요약.md` }],
    rawSections: entry.sections
  };
}

function stopPlayback() {
  if (playTimer) clearInterval(playTimer);
  playTimer = null;
  $('visual-play').textContent = '▷ 자동 재생';
  $('visual-play').setAttribute('aria-pressed', 'false');
}

function setStep(index, scrollToSection = false) {
  if (!activeModule) return;
  activeStep = Math.max(0, Math.min(activeModule.sections.length - 1, index));
  const section = activeModule.sections[activeStep];
  $('detail-visual').dataset.step = String(activeStep);
  if (activeModule.ebook) {
    for (const group of $('detail-visual').querySelectorAll?.('[data-step]') || []) {
      group.classList.toggle('is-visible', Number(group.dataset.step) <= activeStep);
    }
  }
  $('detail-visual').setAttribute('aria-label', `${activeModule.title}: ${section.title}`);
  $('visual-counter').textContent = `${String(activeStep + 1).padStart(2, '0')} / ${String(activeModule.sections.length).padStart(2, '0')}`;
  $('visual-title').textContent = section.title;
  $('visual-description').textContent = section.paragraphs?.[0] || section.bullets?.[0] || '';
  $('visual-prev').disabled = activeStep === 0;
  $('visual-next').disabled = activeStep === activeModule.sections.length - 1;
  for (const button of document.querySelectorAll('[data-part]')) button.classList.toggle('active', Number(button.dataset.part) === activeStep);
  if (scrollToSection) document.getElementById(`part-${activeStep}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function observeSections() {
  if (observer) observer.disconnect();
  if (!('IntersectionObserver' in window)) return;
  observer = new IntersectionObserver(entries => {
    if (playTimer) return;
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible.length) setStep(Number(visible[0].target.dataset.part));
  }, { rootMargin: '-18% 0px -45% 0px', threshold: [0, .25, .5, .75] });
  document.querySelectorAll('.article-section').forEach(section => observer.observe(section));
}

function renderArticle(module) {
  activeModule = module;
  $('breadcrumb-title').textContent = module.title;
  $('article-category').textContent = module.isLibrary ? `${module.category} · 원자료 ${module.number}` : module.ebook ? `${module.category} · 원문 ${module.number}장` : `${module.category} · COLUMN ${module.number}`;
  $('article-title').textContent = module.title;
  $('article-deck').textContent = module.deck;
  $('article-tags').innerHTML = module.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('');
  $('visual-controls').hidden = Boolean(module.isLibrary);
  $('visual-help').textContent = module.isLibrary ? '칼럼 집필 전 원자료입니다.' : '글을 내려 읽으면 해당 장면으로 도식이 이동합니다.';
  $('toc').innerHTML = module.isLibrary
    ? `<span class="toc-label">자료 상태</span><p class="toc-source">이 강의의 칼럼은 집필 중입니다. 아래에서 관련 완성 칼럼을 읽을 수 있습니다.</p>`
    : `<span class="toc-label">이 글의 차례</span>${module.sections.map((section, index) => `<button type="button" data-part="${index}"><span>${String(index + 1).padStart(2, '0')}</span>${escapeHtml(section.title)}</button>`).join('')}<p class="toc-source">${module.ebook ? '전자책 원문과 단계별 도해' : '강의 바탕으로 재구성한 칼럼'}</p>`;
  if (module.isLibrary) {
    const related = courseModules.map(item => ({ item, score: item.tags.filter(tag => module.tags.some(topic => topic.includes(tag) || tag.includes(topic))).length }))
      .sort((a, b) => b.score - a.score).slice(0, 4).map(({ item }) => `<a href="#lesson/${item.id}">${escapeHtml(item.title)} →</a>`).join('');
    const rawNotes = module.rawSections.map(section => `<section><h3>${escapeHtml(section.title)}</h3><ul>${section.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>`).join('');
    $('article').innerHTML = `<div class="source-status"><span class="eyebrow">SOURCE NOTE · EDITORIAL IN PROGRESS</span><h2>이 강의의 칼럼은 집필 중입니다.</h2><p>이 페이지의 자료는 강의에서 추출한 편집 메모입니다. 내용을 연결하고 사례를 검토해 읽을 수 있는 글로 다시 쓰는 중입니다.</p><p>지금은 아래의 완성 칼럼부터 읽어 보세요.</p><div class="source-recommendations">${related}</div></div><details class="source-notes"><summary>편집용 원자료 메모 펼치기</summary><div>${rawNotes}</div></details>`;
  } else {
    const sectionMarkup = module.sections.map((section, index) => `<section class="article-section" id="part-${index}" data-part="${index}"><span class="chapter-label">${module.editorial ? `0${index + 1}` : `CHAPTER ${String(index + 1).padStart(2, '0')}`}</span><h2>${escapeHtml(section.title)}</h2>${section.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}</section>`).join('');
    const sources = module.sections.map(section => `<li>${escapeHtml(section.source)}</li>`).join('');
    const end = module.editorial || module.ebook ? '' : `<div class="article-end"><strong>이 글을 읽고</strong><p>${escapeHtml(module.subtitle)}. 강의의 주장과 사례를 실제 내 상황에 대입하며 다시 읽어보세요.</p></div>`;
    const original = module.ebook ? `<details class="ebook-original"><summary>전자책 원본 도해 보기</summary><img src="./ebook-assets/${escapeHtml(module.ebookImage)}" alt="${escapeHtml(module.title)}의 원본 도해" loading="lazy"></details>` : '';
    $('article').innerHTML = `<p class="article-lead">${escapeHtml(module.deck)}</p>${sectionMarkup}${end}${original}<details class="article-sources"><summary>참고한 원문 위치</summary><p>${module.ebook ? `${escapeHtml(module.source)}의 본문을 수록했습니다.` : `${escapeHtml(module.source)}를 바탕으로 새로 쓴 글입니다.`}</p><ul>${sources}</ul></details>${module.ebook ? '' : renderRelatedLectures(module)}`;
  }
  $('detail-visual').innerHTML = module.visualMarkup || visuals[module.id];
  $('detail-visual').dataset.visual = module.id;
  if (module.isLibrary) {
    const index = lectureLibrary.findIndex(item => item.id === module.lectureId);
    const next = lectureLibrary[(index + 1) % lectureLibrary.length];
    $('next-lesson').innerHTML = `<a href="#lecture/${next.id}"><span>다음 강의 자료</span><strong>${escapeHtml(next.title)}</strong><b>→</b></a>`;
  } else {
    const index = courseModules.findIndex(item => item.id === module.id);
    const next = courseModules[(index + 1) % courseModules.length];
    $('next-lesson').innerHTML = `<a href="#lesson/${next.id}"><span>다음 칼럼</span><strong>${escapeHtml(next.title)}</strong><b>→</b></a>`;
  }
  for (const button of document.querySelectorAll('[data-part]')) button.addEventListener('click', () => { stopPlayback(); setStep(Number(button.dataset.part), true); });
  setStep(0);
  observeSections();
}

function renderRelatedLectures(module) {
  const terms = module.tags.filter(tag => tag.length >= 2);
  const sourceIds = module.source.match(/\d{4}/g) || [];
  const ranked = lectureLibrary.filter(entry => entry.id !== module.lectureId).map(entry => {
    const haystack = `${entry.title} ${entry.lead} ${entry.topics.join(' ')}`;
    const score = (sourceIds.includes(entry.id) ? 20 : 0) + terms.reduce((total, term) => total + (haystack.includes(term) ? 3 : 0), 0);
    return { entry, score };
  }).filter(item => item.score > 0).sort((a, b) => b.score - a.score || a.entry.id.localeCompare(b.entry.id)).slice(0, 8);
  if (!ranked.length) return '';
  return `<section class="related-lectures"><span class="chapter-label">KEEP READING</span><h2>관련 강의 자료</h2><p>이 칼럼의 근거와 연결되는 강의 정리본을 이어서 읽을 수 있습니다.</p><div>${ranked.map(({ entry }) => `<a href="#lecture/${entry.id}"><span>${entry.id}</span><strong>${escapeHtml(entry.title)}</strong><b>→</b></a>`).join('')}</div></section>`;
}

function route() {
  stopPlayback();
  if (observer) { observer.disconnect(); observer = null; }
  const match = location.hash.match(/^#lesson\/([a-z-]+)$/);
  const lectureMatch = location.hash.match(/^#lecture\/(\d{4})$/);
  const entry = lectureMatch && lectureLibrary.find(item => item.id === lectureMatch[1]);
  const module = entry ? (courseModules.find(item => item.lectureId === entry.id) || toLibraryModule(entry)) : match && courseModules.find(item => item.id === match[1]);
  $('home-view').hidden = Boolean(module);
  $('lesson-view').hidden = !module;
  if (module) {
    ebookPreviewTimers.forEach(clearInterval);
    ebookPreviewTimers = [];
  } else if (!ebookPreviewTimers.length) {
    animateEbookPreviews();
  }
  if (module) renderArticle(module);
  if (location.hash === '#library-heading') {
    requestAnimationFrame(() => $('library-heading').scrollIntoView({ behavior: 'smooth', block: 'start' }));
  } else {
    window.scrollTo(0, 0);
  }
}

$('visual-prev').addEventListener('click', () => { stopPlayback(); setStep(activeStep - 1, true); });
$('visual-next').addEventListener('click', () => { stopPlayback(); setStep(activeStep + 1, true); });
$('visual-play').addEventListener('click', () => {
  if (playTimer) { stopPlayback(); return; }
  if (activeStep === activeModule.sections.length - 1) setStep(0, true);
  $('visual-play').textContent = 'Ⅱ 일시정지';
  $('visual-play').setAttribute('aria-pressed', 'true');
  playTimer = setInterval(() => {
    if (activeStep >= activeModule.sections.length - 1) { stopPlayback(); return; }
    setStep(activeStep + 1, true);
  }, 5600);
});

window.addEventListener('hashchange', route);
$('library-query').addEventListener('input', event => { libraryQuery = event.target.value; libraryVisible = 18; renderLibrary(); });
$('library-more').addEventListener('click', () => { libraryVisible += 18; renderLibrary(); });
renderFilters();
renderCards();
renderLibrary();
route();
