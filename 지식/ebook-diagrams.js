/* Six editable SVG restagings of the original ebook diagrams. */
(function () {
  const group = (n, content) => `<g data-step="${n}">${content}</g>`;
  const round = (x, y, w, h, r = 16) => `M${x + r} ${y} H${x + w - r} Q${x + w} ${y} ${x + w} ${y + r} V${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} H${x + r} Q${x} ${y + h} ${x} ${y + h - r} V${y + r} Q${x} ${y} ${x + r} ${y} Z`;
  const path = (d, cls = 'ink') => `<path class="${cls} draw" pathLength="100" d="${d}"/>`;
  const label = (x, y, text, cls = 'ink-label') => `<text class="${cls} reveal" x="${x}" y="${y}">${text}</text>`;
  const box = (x, y, w, h, title, fill = '#fbfcf8', ink = 'ink') => `<path class="wash" d="${round(x, y, w, h)}" fill="${fill}"/>${path(round(x, y, w, h), ink)}${label(x + w / 2, y + h / 2, title)}`;
  const circle = (x, y, r, text, fill = '#f8fcf7', ink = 'ink') => `<circle class="wash" cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>${path(`M${x + r} ${y} A${r} ${r} 0 1 0 ${x - r} ${y} A${r} ${r} 0 1 0 ${x + r} ${y}`, ink)}${label(x, y, text)}`;
  const diagrams = {
    choices: {
      steps: ['먼저 사건이 일어납니다.', '감정은 그대로 올라올 수 있습니다.', '익숙한 반응도 선택지로 남습니다.', '그 옆에 새로운 행동 하나가 생깁니다.'],
      markup: [
        group(0, circle(91, 171, 39, '사건', '#eaf1e9') + path('M130 171 H188 M176 162 L188 171 L176 180', 'soft-ink')),
        group(1, box(198, 129, 139, 84, '감정', '#f6f4e9') + label(268, 235, '그대로 올라온다', 'small-label')),
        group(2, path('M337 163 Q389 111 430 111 M418 103 L430 111 L416 119', 'soft-ink') + box(437, 80, 129, 61, '기존 반응', '#f0f2ef', 'soft-ink')),
        group(3, path('M337 184 Q389 243 430 243 M416 234 L430 243 L418 253', 'accent-ink') + box(437, 212, 129, 63, '새로운 선택', '#e8f4ee', 'accent-ink') + label(501, 293, '선택지 1 → 2', 'small-label accent-label')),
      ].join('')
    },
    filter: {
      steps: ['같은 말이라는 사건을 놓습니다.', '사건과 감정 사이에 해석의 필터를 그립니다.', '기대와 욕구, 경험이 해석에 들어갑니다.', '같은 사건에서도 감정은 다르게 갈라집니다.'],
      markup: [
        group(0, box(22, 133, 136, 87, '상사의 말', '#f5f6f2') + label(90, 239, '같은 사건', 'small-label')),
        group(1, path('M158 176 H212 M202 167 L213 176 L202 185', 'soft-ink') + box(222, 116, 152, 121, '해석 필터', '#f0eef9', 'ink') + path('M374 176 H409 M399 167 L410 176 L399 185', 'soft-ink')),
        group(2, label(298, 264, '기대 · 욕구 · 경험', 'small-label') + path('M248 151 Q298 168 350 151', 'soft-ink') + path('M252 202 Q298 185 345 202', 'soft-ink')),
        group(3, path('M410 176 Q449 113 467 113 M410 176 Q449 242 467 242', 'accent-ink') + box(473, 81, 101, 61, '수치심', '#f8ece7', 'warm-ink') + box(473, 210, 101, 61, '감사함', '#e8f4ec', 'accent-ink')),
      ].join('')
    },
    ladder: {
      steps: ['처음에는 한 번의 감정입니다.', '감정의 반복은 상태와 행동으로 굳어집니다.', '행동의 반복은 관계에 흔적을 남깁니다.', '관계가 반복되면 정체성의 문장이 생깁니다.'],
      markup: [
        group(0, box(47, 213, 107, 60, '감정', '#fcf3da', 'warm-ink') + label(99, 297, '한 번의 느낌', 'small-label')),
        group(1, path('M154 243 H186 M177 234 L188 243 L177 252', 'warm-ink') + box(191, 213, 100, 60, '상태', '#f9e8d9', 'warm-ink') + path('M291 243 H323 M314 234 L325 243 L314 252', 'warm-ink') + box(328, 213, 100, 60, '행동', '#f7dfd3', 'warm-ink')),
        group(2, path('M428 243 H459 M450 234 L461 243 L450 252', 'warm-ink') + box(465, 213, 102, 60, '관계', '#f4d9d2', 'warm-ink')),
        group(3, path('M516 213 C516 162 457 162 457 122 M450 133 L457 121 L465 134', 'warm-ink') + box(350, 59, 213, 64, '정체성', '#f4cfca', 'warm-ink') + label(455, 145, '“나는 이런 사람”', 'small-label warm-label')),
      ].join('')
    },
    conversation: {
      steps: ['미러링: 상대와 방향과 감각을 맞춥니다.', '백트래킹: 상대의 중요한 말을 돌려줍니다.', '페이싱: 상대의 속도에 맞춰 걷습니다.', '리딩: 함께 걸은 뒤 새 방향을 제안합니다.'],
      markup: [
        group(0, circle(78, 170, 47, '미러링', '#e6f0ee', 'ink') + label(78, 237, '방향 맞추기', 'small-label')),
        group(1, path('M125 170 C155 136 180 136 206 170 M196 162 L207 170 L196 178', 'soft-ink') + circle(253, 170, 47, '백트래킹', '#eef4e8', 'ink') + label(253, 237, '핵심 돌려주기', 'small-label')),
        group(2, path('M300 170 C329 202 357 202 382 170 M373 162 L383 170 L373 178', 'soft-ink') + circle(429, 170, 47, '페이싱', '#e8f3ed', 'ink') + label(429, 237, '속도 맞추기', 'small-label')),
        group(3, path('M476 170 H511 M502 161 L513 170 L502 179', 'accent-ink') + circle(547, 170, 35, '리딩', '#d8ece2', 'accent-ink') + label(547, 237, '방향 제안', 'small-label accent-label')),
      ].join('')
    },
    chunk: {
      steps: ['정체성과 가치처럼 큰 의미에서 출발합니다.', '청크다운은 실제 행동과 환경으로 내려갑니다.', '구체적인 장면과 몸의 감각을 확인합니다.', '청크업은 그 경험을 다시 의미로 올립니다.'],
      markup: [
        group(0, box(186, 22, 235, 53, '정체성', '#f0eef9') + box(186, 82, 235, 53, '신념 · 가치', '#f4eef8')),
        group(1, box(186, 142, 235, 53, '능력', '#e9f4f2') + box(186, 202, 235, 53, '행동', '#e7f3e9') + box(186, 262, 235, 53, '환경', '#f0f3ed') + path('M135 57 V283 M126 273 L135 285 L144 273', 'warm-ink') + label(99, 170, '청크다운', 'small-label warm-label')),
        group(2, label(303, 336, '“언제, 어떤 말과 감각이 있었나?”', 'small-label')),
        group(3, path('M469 285 V57 M460 69 L469 56 L478 69', 'accent-ink') + label(516, 170, '청크업', 'small-label accent-label')),
      ].join('')
    },
    finger: {
      steps: ['너무 먼 완성된 미래가 보입니다.', '시선을 지금 움직일 수 있는 한 부분으로 돌립니다.', '작은 움직임이 실제 경험으로 남습니다.', '그 경험을 다음 움직임으로 확장합니다.'],
      markup: [
        group(0, path('M53 255 H555', 'soft-ink') + path('M75 216 L98 176 L121 216 M84 216 H111', 'soft-ink') + label(101, 257, '먼 미래', 'small-label') + label(101, 274, '너무 멀다', 'small-label')),
        group(1, path('M261 216 C258 190 265 164 279 162 C288 160 294 168 291 177 L291 94 C291 82 310 82 310 94 L310 161 C317 151 334 154 336 165 C345 156 361 163 360 174 C375 169 386 182 382 194 L371 235 C366 252 345 266 323 269 L283 269 C263 263 255 242 261 216 Z', 'ink') + label(309, 297, '지금 가능한 것', 'small-label')),
        group(2, `<circle class="pulse-dot reveal" cx="300" cy="91" r="8" fill="#c96a3a"/>` + path('M314 91 Q347 84 367 70', 'warm-ink') + label(423, 70, '손가락 하나', 'small-label warm-label')),
        group(3, path('M390 255 H460 M448 246 L460 255 L448 264', 'accent-ink') + circle(505, 255, 31, '확장', '#e4f2eb', 'accent-ink') + label(505, 305, '점점 넓어진다', 'small-label accent-label')),
      ].join('')
    }
  };

  window.DIAGRAMS = diagrams;
  window.diagramSVG = function (slug) {
    const item = diagrams[slug];
    if (!item) throw new Error(`Unknown diagram: ${slug}`);
    return `<svg class="diagram-svg" viewBox="0 0 600 350" role="img" aria-label="${slug} 개념 도해"><path class="paper-line" d="M12 16 H588 M12 334 H588"/>${item.markup}</svg>`;
  };
})();
