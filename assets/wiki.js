(() => {
  'use strict';
  const english = document.documentElement.lang.toLowerCase().startsWith("en");
  const translations = {
  "整段内容已复制。": "Copied the entire block.",
  "复制不可用，请选中代码后复制。": "Copy is unavailable. Select the code and copy it manually.",
  "复制整段代码": "Copy the entire code block",
  "复制": "Copy",
  "开启动效": "Enable animations",
  "关闭动效": "Disable animations",
  "关闭发送端": "Turn sender off",
  "开启发送端": "Turn sender on",
  "发送端已激活，接收端收到信号，红石灯亮起。": "The sender is active. The receiver receives the signal and the redstone lamp lights up.",
  "发送端未激活，接收端红石灯熄灭。": "The sender is inactive. The receiver’s redstone lamp is off.",
  "关闭发信箱": "Turn mailbox off",
  "开启发信箱": "Turn mailbox on",
  "苹果已到货": "Apples have arrived",
  "拉杆已开启，A 激活，B 收到“苹果已到货”。": "The lever is on. A is active, and B receives “Apples have arrived”.",
  "拉杆已关闭，两端停止激活；B 保留收到的“苹果已到货”。": "The lever is off. Both ends stop activating; B retains “Apples have arrived”.",
  "两端频率相同。开启拉杆，让 A 激活并把内容送到 B。": "Both ends use the same frequency. Turn on the lever to activate A and send its content to B.",
  "尚未收到消息": "No message received yet",
  "文本 / 默认": "Text / Default",
  "显示文本或数值，配置可选项后，用户直接在文字下方选择回复项。": "Display text or numbers. Configure reply options so users can select a reply below the text.",
  "开关": "Switches",
  "支持布尔值、0/1 数组和布尔文本数组；可给各分量命名，在屏幕上分别切换。": "Accept booleans, 0/1 arrays and arrays of boolean text. Name each component and toggle it independently on the screen.",
  "柱状图": "Bar chart",
  "根据选区重新计算柱子大小，配置上下限和分量名；横向是柱状图的配置项。": "Bars resize to fit the selected area. Configure bounds and component names; horizontal orientation is a bar chart setting.",
  "仪表盘": "Gauges",
  "将数值映射到刻度与指针，多分量按空间收紧居中；控制色与其他文字 / 指针色分别设置。": "Map values to scales and needles. Multiple components pack into the available space and stay centered; control colors and other text / needle colors have separate settings.",
  "地图": "Map",
  "地形、坐标、标记与连线铺进选区。滚轮焦点缩放，中键平移，收藏与重定向都在画布内。": "Fit terrain, coordinates, markers and connecting lines into the selected area. Zoom at the cursor with the wheel, pan with the middle button, and manage favorites and targets on the canvas.",
  "物流": "Logistics",
  "在 GUI 定义多组物品、数量与地址；屏幕切换并发送。显示内容来自配置，不受当前信道值影响。": "Define item groups, quantities and addresses in the GUI, then select and send from the screen. The display uses this configuration independently of the current channel value.",
  "存量": "Stock",
  "解析存量 JSON / Map，按选区自适应绘制物品图标，把数量放在图标右下角。": "Parse stock JSON / Maps and fit item icons to the selected area, with quantities at the lower right of each icon.",
  "对话": "Conversation",
  "共用寻呼机消息格式。可只显示最新一条，或滚动查看历史；配置头像、名称、回复与清空聊天按钮。": "Use the pager message format. Show only the latest message or scroll through history; configure avatars, names, replies and a clear-chat button.",
  "读取结果示例": "Example read result",
  "发送内容示例": "Example content to send",
  "收起完整目录 ↑": "Collapse full catalog ↑",
  "适用：信箱 / 隐藏终端的内容输出语法": "For: mailbox / hidden terminal content output expressions",
  "适用：桥接器输出语法": "For: bridge output expressions",
  "适用：条件激活输入框": "For: activation condition fields",
  "CC:Tweaked 函数参考": "CC:Tweaked function reference",
  "还没找到，试试更短的设备名或函数名。": "No results. Try a shorter device or function name.",
  "全部": "All",
  "章节": "Chapter",
  "读取": "Read",
  "输出": "Write",
  "函数": "Function"
};
  const t = text => english ? (translations[text] ?? text) : text;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const devices = window.AFN_DEVICE_CATALOG || {read: [], write: []};
  const syntax = window.AFN_SYNTAX_CATALOG || {functions: [], examples: [], rules: []};
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const icon = (name) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('icon');
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS(svg.namespaceURI, 'use');
    use.setAttribute('href', `#i-${name}`);
    svg.append(use);
    return svg;
  };
  const stored = (key, fallback) => {
    try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
  };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  let toastTimer;
  function toast(text) {
    const target = $('#toast');
    target.textContent = text;
    target.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => target.classList.remove('show'), 2400);
  }
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try { await navigator.clipboard.writeText(text); toast(t('整段内容已复制。')); return; } catch {}
    }
    const field = element('textarea');
    field.value = text;
    field.style.cssText = 'position:fixed;left:-9999px;top:0';
    document.body.append(field);
    field.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch {}
    field.remove();
    toast(copied ? t('整段内容已复制。') : t('复制不可用，请选中代码后复制。'));
  }
  function setCode(pre, text) {
    const raw = String(text);
    pre.dataset.raw = raw;
    pre.replaceChildren();
    const code = element('code');
    const pattern = /(\$\{[^}]*\})|("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)/g;
    let end = 0;
    for (const match of raw.matchAll(pattern)) {
      code.append(document.createTextNode(raw.slice(end, match.index)));
      code.append(element('span', match[1] ? 'token-ref' : match[2] ? 'token-string' : 'token-number', match[0]));
      end = match.index + match[0].length;
    }
    code.append(document.createTextNode(raw.slice(end)));
    const button = element('button', 'copy-button');
    button.type = 'button';
    button.setAttribute('aria-label', t('复制整段代码'));
    button.append(icon('copy'), document.createTextNode(t('复制')));
    button.addEventListener('click', () => copyText(pre.dataset.raw));
    pre.append(code, button);
  }
  function codeBlock(text) { const pre = element('pre'); setCode(pre, text); return pre; }
  $$('pre').forEach(pre => setCode(pre, pre.textContent.trim()));

  const motionButton = $('#motion-toggle');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let motionOff = stored('afn-wiki-motion', reducedMotion.matches ? 'off' : 'on') === 'off';
  function setMotion() {
    document.documentElement.classList.toggle('motion-off', motionOff);
    motionButton.setAttribute('aria-pressed', String(motionOff));
    motionButton.setAttribute('aria-label', motionOff ? t('开启动效') : t('关闭动效'));
    motionButton.title = motionOff ? t('开启动效') : t('关闭动效');
  }
  setMotion();
  motionButton.addEventListener('click', () => { motionOff = !motionOff; save('afn-wiki-motion', motionOff ? 'off' : 'on'); setMotion(); });
  const mobile = matchMedia('(max-width: 780px)');
  const sidebar = $('#sidebar'), menuButton = $('#menu-toggle');
  function closeMenu() { sidebar.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); sidebar.inert = mobile.matches; }
  function syncMenu() { if (!mobile.matches) { sidebar.inert = false; sidebar.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); } else closeMenu(); }
  mobile.addEventListener('change', syncMenu);
  syncMenu();
  menuButton.addEventListener('click', () => { const open = !sidebar.classList.contains('open'); sidebar.classList.toggle('open', open); sidebar.inert = !open; menuButton.setAttribute('aria-expanded', String(open)); });
  document.addEventListener('click', event => { if (mobile.matches && sidebar.classList.contains('open') && !sidebar.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && sidebar.classList.contains('open')) { closeMenu(); menuButton.focus(); } });

  const lamp = $('#demo-lamp');
  lamp.addEventListener('click', () => {
    const powered = lamp.getAttribute('aria-pressed') !== 'true';
    lamp.setAttribute('aria-pressed', String(powered));
    lamp.closest('.signal-demo').classList.toggle('powered', powered);
    $('b', lamp).textContent = powered ? t('关闭发送端') : t('开启发送端');
    lamp.setAttribute('aria-label', powered ? t('关闭发送端') : t('开启发送端'));
    $('#demo-status').textContent = powered ? t('发送端已激活，接收端收到信号，红石灯亮起。') : t('发送端未激活，接收端红石灯熄灭。');
  });

  const messageDemo = $('.mailbox-demo');
  const messageSend = $('#demo-message-send');
  const messageReset = $('#demo-message-reset');
  function setMessagePower(powered) {
    messageSend.setAttribute('aria-pressed', String(powered));
    messageSend.setAttribute('aria-label', powered ? t('关闭发信箱') : t('开启发信箱'));
    $('b', messageSend).textContent = powered ? t('关闭发信箱') : t('开启发信箱');
    messageDemo.classList.toggle('sending', powered);
    if (powered) {
      messageDemo.classList.add('delivered');
      $('#demo-message-value').textContent = t('苹果已到货');
      $('#demo-message-status').textContent = t('拉杆已开启，A 激活，B 收到“苹果已到货”。');
      messageReset.disabled = false;
    } else {
      $('#demo-message-status').textContent = messageDemo.classList.contains('delivered')
        ? t('拉杆已关闭，两端停止激活；B 保留收到的“苹果已到货”。')
        : t('两端频率相同。开启拉杆，让 A 激活并把内容送到 B。');
    }
  }
  messageSend.addEventListener('click', () => setMessagePower(messageSend.getAttribute('aria-pressed') !== 'true'));
  messageReset.addEventListener('click', () => {
    messageDemo.classList.remove('delivered');
    setMessagePower(false);
    $('#demo-message-value').textContent = t('尚未收到消息');
    messageReset.disabled = true;
  });

  const modes = [
    [t('文本 / 默认'), t('显示文本或数值，配置可选项后，用户直接在文字下方选择回复项。')],
    [t('开关'), t('支持布尔值、0/1 数组和布尔文本数组；可给各分量命名，在屏幕上分别切换。')],
    [t('柱状图'), t('根据选区重新计算柱子大小，配置上下限和分量名；横向是柱状图的配置项。')],
    [t('仪表盘'), t('将数值映射到刻度与指针，多分量按空间收紧居中；控制色与其他文字 / 指针色分别设置。')],
    [t('地图'), t('地形、坐标、标记与连线铺进选区。滚轮焦点缩放，中键平移，收藏与重定向都在画布内。')],
    [t('物流'), t('在 GUI 定义多组物品、数量与地址；屏幕切换并发送。显示内容来自配置，不受当前信道值影响。')],
    [t('存量'), t('解析存量 JSON / Map，按选区自适应绘制物品图标，把数量放在图标右下角。')],
    [t('对话'), t('共用寻呼机消息格式。可只显示最新一条，或滚动查看历史；配置头像、名称、回复与清空聊天按钮。')]
  ];
  function selectMode(index) {
    $$('#mode-tabs button').forEach((button, i) => { button.classList.toggle('active', i === index); button.setAttribute('aria-selected', String(i === index)); button.tabIndex = i === index ? 0 : -1; });
    const target = $('#mode-description');
    target.setAttribute('aria-labelledby', `mode-${index}`);
    target.replaceChildren(element('h3', '', modes[index][0]), element('p', '', modes[index][1]));
  }
  modes.forEach((mode, index) => {
    const button = element('button', '', mode[0]);
    button.type = 'button'; button.id = `mode-${index}`;
    button.setAttribute('role', 'tab'); button.setAttribute('aria-controls', 'mode-description');
    button.addEventListener('click', () => selectMode(index));
    $('#mode-tabs').append(button);
  });
  selectMode(0);
  $('#mode-tabs').addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let index = $$('#mode-tabs button').findIndex(button => button.classList.contains('active'));
    index = event.key === 'Home' ? 0 : event.key === 'End' ? modes.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + modes.length) % modes.length;
    selectMode(index); $(`#mode-${index}`).focus();
  });

  let direction = 'read', group = '全部', catalogExpanded = false;
  const catalog = $('#device-catalog'), deviceSearch = $('#device-search');
  function renderGroups() {
    const groups = ['全部', ...new Set(devices[direction].map(item => item.group))];
    if (!groups.includes(group)) group = '全部';
    $('#device-groups').replaceChildren(...groups.map(name => {
      const button = element('button', name === group ? 'active' : '', t(name));
      button.type = 'button'; button.setAttribute('aria-pressed', String(name === group));
      button.addEventListener('click', () => { group = name; renderGroups(); renderDevices(); });
      return button;
    }));
  }
  function normalized(value) { return String(value).normalize('NFKC').toLowerCase(); }
  function matches(value, query) { return normalized(query).split(/\s+/).filter(Boolean).every(term => normalized(value).includes(term)); }
  function deviceText(item) {
    const sections = (item.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || []), section.code, ...(section.after || [])]);
    return [item.name, item.group, item.mod, item.description, item.fields, item.example, ...sections].filter(Boolean).join(' ');
  }
  function renderDevices() {
    const query = deviceSearch.value.trim();
    const found = devices[direction].map((item, index) => ({item, index})).filter(({item}) => (group === '全部' || item.group === group) && matches(deviceText(item), query));
    const filtered = !!query || group !== '全部';
    const shown = catalogExpanded || filtered ? found : found.slice(0, 8);
    catalog.replaceChildren(...shown.map(({item, index}) => {
      const card = element('details', 'device-card');
      card.id = `device-${direction}-${index}`;
      const summary = element('summary');
      const heading = element('span');
      heading.append(element('b', '', item.name), element('small', '', item.mod ? `${item.group} · ${item.mod}` : item.group));
      summary.append(element('span', 'device-index', String(index + 1).padStart(2, '0')), heading);
      const body = element('div', 'device-body');
      body.append(element('p', '', item.description));
      if (item.fields) body.append(element('p', 'fields', `${english ? 'Fields: ' : '字段：'}${item.fields}`));
      if (item.sections?.length) {
        item.sections.forEach(section => {
          const content = element('section', 'device-section');
          if (section.heading) content.append(element('h4', '', section.heading));
          (section.paragraphs || []).forEach(text => content.append(element('p', '', text)));
          if (section.code) content.append(codeBlock(section.code));
          (section.after || []).forEach(text => content.append(element('p', '', text)));
          body.append(content);
        });
      } else body.append(element('span', 'field-label', direction === 'read' ? t('读取结果示例') : t('发送内容示例')), codeBlock(item.example));
      card.append(summary, body); return card;
    }));
    $('#device-count').textContent = english ? `${found.length} ${direction === 'read' ? 'read' : 'write'} capabilities found · Showing ${shown.length}` : `找到 ${found.length} 条${direction === 'read' ? '读取' : '输出'}能力 · 显示 ${shown.length} 条`;
    $('#device-empty').hidden = !!found.length;
    $('#catalog-expand').hidden = filtered || found.length <= 8;
    $('#catalog-expand').textContent = catalogExpanded ? t('收起完整目录 ↑') : (english ? `Expand full catalog (${found.length}) ↓` : `展开完整目录（${found.length} 条） ↓`);
  }
  function setDirection(value) {
    direction = value; group = '全部'; catalogExpanded = false;
    $$('#io-tabs button').forEach(button => { const active = button.dataset.io === value; button.classList.toggle('active', active); button.setAttribute('aria-selected', String(active)); });
    renderGroups(); renderDevices();
  }
  $$('#io-tabs button').forEach(button => button.addEventListener('click', () => setDirection(button.dataset.io)));
  deviceSearch.addEventListener('input', renderDevices);
  $('#catalog-expand').addEventListener('click', () => { catalogExpanded = !catalogExpanded; renderDevices(); if (!catalogExpanded) $('#data-io').scrollIntoView(); });
  renderGroups(); renderDevices();

  syntax.examples.forEach((example, index) => {
    const button = element('button', '', example.title);
    button.type = 'button'; button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => selectExample(index));
    $('#syntax-examples').append(button);
  });
  function selectExample(index) {
    const example = syntax.examples[index];
    if (!example) return;
    $$('#syntax-examples button').forEach((button, i) => { button.classList.toggle('active', i === index); button.setAttribute('aria-pressed', String(i === index)); });
    setCode($('#example-source'), example.source + (example.strength !== undefined ? `\n${english ? 'Received strength: ' : '接收强度：'}${example.strength}` : ''));
    setCode($('#example-template'), example.template);
    $('#example-result').textContent = example.result;
    $('#example-description').textContent = example.description;
    $('#example-context').textContent = {single: t('适用：信箱 / 隐藏终端的内容输出语法'), bridge: t('适用：桥接器输出语法'), condition: t('适用：条件激活输入框')}[example.context];
    $('#example-result').classList.remove('fresh-output');
    requestAnimationFrame(() => $('#example-result').classList.add('fresh-output'));
  }
  selectExample(0);
  function renderFunctions() {
    const query = $('#function-search').value;
    const found = syntax.functions.filter(item => matches([item.name, item.category, item.signature, item.description, item.example].join(' '), query));
    $('#function-catalog').replaceChildren(...found.map(item => {
      const card = element('details', 'function-card'); card.id = `function-${item.name}`;
      const summary = element('summary'); summary.append(element('code', '', item.name), element('small', '', `${item.category} ＋`));
      const body = element('div', 'function-body');
      body.append(element('p', 'fields', item.signature), element('p', '', item.description));
      if (item.input !== undefined || item.output !== undefined) {
        const io = element('div', 'function-io');
        if (item.input !== undefined) io.append(element('p', '', `${english ? 'Input: ' : '输入：'}${item.input}`));
        if (item.output !== undefined) io.append(element('p', '', `${english ? 'Output: ' : '输出：'}${item.output}`));
        body.append(io);
      }
      body.append(codeBlock(item.example));
      card.append(summary, body); return card;
    }));
    $('#function-empty').hidden = !!found.length;
  }
  $('#function-search').addEventListener('input', renderFunctions);
  renderFunctions();
  syntax.rules.forEach(rule => { const item = element('article', 'syntax-rule'); item.append(element('h4', '', rule.title), element('p', '', rule.description)); $('#syntax-rules').append(item); });
  if (syntax.limits) {
    const limits = syntax.limits;
    const item = element('div', 'syntax-limits', english ? `${limits.description} Default input / output limits: ${limits.sourceCodePoints} code points and ${limits.sourceUtf8Bytes} UTF-8 bytes; function arguments / nesting: ${limits.functionArguments} / ${limits.functionDepth}; array length: ${limits.arrayLength}.` : `${limits.description} 输入 / 输出默认最多 ${limits.sourceCodePoints} 码点、${limits.sourceUtf8Bytes} UTF-8 字节；函数参数 / 嵌套默认 ${limits.functionArguments} / ${limits.functionDepth}，数组最多 ${limits.arrayLength} 项。`);
    $('#syntax-rules').append(item);
  }

  const searchEntries = [];
  $$('.chapter').forEach(section => {
    const title = $('h2,h1', section)?.textContent.replace(/\s+/g, ' ').trim();
    searchEntries.push({kind: '章节', title, text: section.dataset.title || section.textContent.slice(0, 900), target: section.id});
  });
  for (const type of ['read', 'write']) devices[type].forEach((item, index) => searchEntries.push({kind: type === 'read' ? '读取' : '输出', title: item.name, text: deviceText(item), deviceType: type, index, target: `device-${type}-${index}`}));
  syntax.functions.forEach(item => searchEntries.push({kind: '函数', title: item.name, text: `${item.category} ${item.signature} ${item.description}`, fn: item.name, target: `function-${item.name}`}));
  $$('#cc-body h2,#cc-body h3,#cc-body h4').forEach(heading => {
    const anchor = heading.previousElementSibling;
    const id = heading.id || (anchor?.tagName === 'A' ? anchor.id : '');
    if (id) searchEntries.push({kind: 'Lua', title: heading.textContent, text: heading.nextElementSibling?.textContent || t('CC:Tweaked 函数参考'), target: id});
  });
  const dialog = $('#search-dialog'), searchInput = $('#global-search');
  function searchResults() {
    const query = searchInput.value.trim();
    let results = query ? searchEntries.filter(item => matches(`${item.title} ${item.text}`, query)) : searchEntries.filter(item => item.kind === '章节').slice(1, 7);
    if (query) results.sort((a, b) => Number(normalized(b.title).includes(normalized(query))) - Number(normalized(a.title).includes(normalized(query))));
    results = results.slice(0, 24);
    $('#search-results').replaceChildren(...results.map(item => {
      const link = element('a', 'search-result'); link.href = `#${item.target}`;
      const content = element('span', 'search-result-text'); content.append(element('b', '', item.title), element('small', '', item.text.replace(/\s+/g, ' ')));
      link.append(element('span', 'tag', t(item.kind)), content);
      link.addEventListener('click', event => { event.preventDefault(); dialog.close(); revealEntry(item); });
      return link;
    }));
    if (!results.length) $('#search-results').append(element('p', 'empty-state', t('还没找到，试试更短的设备名或函数名。')));
  }
  function openSearch() { searchResults(); dialog.showModal(); searchInput.focus(); searchInput.select(); }
  $('#open-search').addEventListener('click', openSearch);
  $('#close-search').addEventListener('click', () => dialog.close());
  searchInput.addEventListener('input', searchResults);
  dialog.addEventListener('click', event => { const rect = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    const results = $$('.search-result', dialog);
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (!results.length) return;
      event.preventDefault();
      const index = results.indexOf(document.activeElement);
      results[(index + (event.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length].focus();
    } else if (event.key === 'Enter' && document.activeElement === searchInput && results.length) { event.preventDefault(); results[0].click(); }
  });
  document.addEventListener('keydown', event => {
    if ((event.key === '/' && !event.ctrlKey && !event.metaKey) || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k')) {
      const typing = event.target.closest('input,textarea,[contenteditable=true]');
      if (typing && event.key === '/') return;
      event.preventDefault(); if (!dialog.open) openSearch();
    }
  });
  function revealEntry(item) {
    if (item.deviceType) { deviceSearch.value = ''; setDirection(item.deviceType); catalogExpanded = true; renderDevices(); }
    if (item.fn) { $('#function-search').value = ''; renderFunctions(); }
    navigateTo(item.target);
  }
  const deviceAliases = Object.fromEntries(['read', 'write'].flatMap(type => devices[type].flatMap((item, index) => item.anchor ? [[item.anchor, 'device-' + type + '-' + index]] : [])));
  const aliases = {
    ...deviceAliases,
    'afn-overview': 'welcome', 'frequency-system': 'frequency', screens: 'bridge', 'hidden-terminals': 'hidden',
    'mailbox-activation': 'automation', 'blueprint-editor': 'blueprints', ticketing: 'blueprints', 'channel-pager': 'pager', 'maps-messages': 'map-terminal',
    compatibility: 'faq', 'screen-api': 'computer', start: 'quickstart', quick: 'computer', syntax: 'output-syntax', concepts: 'frequency',
    access: 'computer', 'raw-api': 'computer', errors: 'computer', events: 'computer', troubleshoot: 'faq',
    'screen-state': 'fn-screen', 'screen-config': 'fn-set-screen', 'channel-display': 'fn-display', 'channel-display-config': 'fn-set-display'
  };
  function anchorOffset() { return Math.ceil($('.topbar').getBoundingClientRect().height) + 24; }
  function syncAnchorOffset() { document.documentElement.style.setProperty('--anchor-offset', `${anchorOffset()}px`); }
  function navigateTo(id) {
    const hash = `#${id}`;
    if (location.hash !== hash) history.pushState(null, '', hash);
    revealHash();
  }
  let navigationFrame;
  function revealHash() {
    if (!location.hash) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    if (aliases[id]) id = aliases[id];
    let target = document.getElementById(id) || document.getElementById(`fn-${id}`);
    const deviceMatch = id.match(/^device-(read|write)-(\d+)$/);
    if (!target && deviceMatch) {
      deviceSearch.value = ''; setDirection(deviceMatch[1]); catalogExpanded = true; renderDevices(); target = document.getElementById(id);
    }
    if (!target && id.startsWith('function-')) { $('#function-search').value = ''; renderFunctions(); target = document.getElementById(id); }
    if (!target) return;
    for (let ancestor = target; ancestor; ancestor = ancestor.parentElement) if (ancestor.tagName === 'DETAILS') ancestor.open = true;
    if (mobile.matches) closeMenu();
    cancelAnimationFrame(navigationFrame);
    navigationFrame = requestAnimationFrame(() => {
      syncAnchorOffset();
      const top = Math.max(0, scrollY + target.getBoundingClientRect().top - anchorOffset());
      scrollTo({top, behavior: motionOff ? 'instant' : 'smooth'});
      target.classList.remove('target-flash');
      requestAnimationFrame(() => target.classList.add('target-flash'));
      scrollUpdate();
    });
  }
  addEventListener('hashchange', revealHash);
  addEventListener('popstate', revealHash);
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigateTo(link.hash.slice(1));
  });
  if (location.hash) revealHash();

  const chapters = $$('.chapter'), navLinks = $$('.sidebar nav a');
  let scrollScheduled = false;
  function scrollUpdate() {
    scrollScheduled = false;
    const height = document.documentElement.scrollHeight - innerHeight;
    $('#reading-progress').style.width = `${height > 0 ? Math.min(100, scrollY / height * 100) : 0}%`;
    let active = 'welcome';
    const threshold = anchorOffset() + 2;
    for (const chapter of chapters) { if (chapter.getBoundingClientRect().top <= threshold) active = chapter.id; else break; }
    if (height > 0 && scrollY >= height - 2) active = chapters.at(-1).id;
    navLinks.forEach(link => { const selected = link.hash === `#${active}`; link.classList.toggle('active', selected); if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }
  addEventListener('scroll', () => { if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(scrollUpdate); } }, {passive: true});
  addEventListener('resize', () => { syncAnchorOffset(); scrollUpdate(); });
  syncAnchorOffset();
  scrollUpdate();
})();
