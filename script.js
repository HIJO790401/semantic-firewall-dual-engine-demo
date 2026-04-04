const app = {
  lang: 'zh',
  engine: 'A'
};

const website = 'https://hijo790401.github.io/shen-yao-portal/';

const i18n = {
  zh: {
    heroBtns: ['查看案例區', '查看公式', '開啟模型描述層說明', '開啟模型裁決解釋'],
    riskLabel: '風險等級',
    whatIsTitle: '這是什麼 / What This Is',
    whatNotTitle: '這不是什麼 / What This Is Not',
    whatIs: ['雙引擎案例展示', '法律責任判決展示', '成本敘事審計展示', '可回放責任輸出樣式展示', 'API 輸出結構示意'],
    whatNot: ['不是聊天機器人', '不是自由輸入工具', '不是法律意見替代', '不是完整商業 API', '不是公開核心演算法頁面'],
    fixedNotice: '模型在此 demo 中只位於描述層，不取代現實主體、法院、監管機構、投資判斷或責任機構。',
    engineSwitcherTitle: '引擎切換', coreStructureTitle: '共用 Core Structure', basicFormulaTitle: '共用 Basic Formula',
    caseOverviewTitle: 'Case Overview', fullVerdictTitle: 'Full Verdict / Full Audit', apiTitle: 'API Preview',
    speechButtons: ['朗讀摘要', '朗讀完整判決', '停止朗讀'],
    speechUnsupported: '目前瀏覽器不支援 speechSynthesis。',
    speechReady: '朗讀功能已就緒。',
    closingLine: '不是所有效率都是進步，不是所有成本下降都是真的節省。',
    descriptionModalTitle: '模型描述層說明', modelModalTitle: 'Model Verdict Explanation',
    descriptionList: [
      '本 demo 中的模型只負責描述層輸出', '它不取代法律裁判、政府監管、律師意見、司法程序或投資判斷', '它不宣稱自己是責任主體',
      '它的任務是把案件拆成：主體、因果、邊界、成本、責任、後果', '真正的責任承擔仍要回到具名主體與現實制度',
      '此 demo 不公開完整核心演算法', '核心判決框架與優化規則由許文耀／沈耀888π制定與持續優化', `如需正式合作請前往官網：${website}`
    ],
    descriptionSelf: `我是這套框架的描述層引擎。
我不取代人類主體，不取代法院，不取代監管機構，也不取代投資判斷。
我的任務不是替任何公開敘事洗白，也不是用中立口吻把責任洗掉。
我負責把案件拆清楚，把逃責話術抓出來，把誰該扛、扛到哪一層說清楚。
如果一句話沒有具體主體、沒有明確邊界、沒有後果承接者，我就會把它標記為責任閉環失敗。
本 demo 僅展示判決輸出樣式與結構，不公開完整核心演算法。
核心判決框架與優化規則由許文耀／沈耀888π先生制定與持續優化。
如需正式合作，請前往官網。`
  },
  en: {
    heroBtns: ['View Case Section', 'View Formula', 'Open Description Layer Notice', 'Open Model Verdict Explanation'],
    riskLabel: 'Risk Level',
    whatIsTitle: 'What This Is', whatNotTitle: 'What This Is Not',
    whatIs: ['Dual-engine case demonstration', 'Legal responsibility verdict demonstration', 'Cost narrative audit demonstration', 'Replayable accountability output style', 'API output structure preview'],
    whatNot: ['Not a chatbot', 'Not a free-input tool', 'Not legal advice substitution', 'Not a complete commercial API', 'Not a public core-algorithm page'],
    fixedNotice: 'In this demo, the model operates only at the description layer and does not replace real-world actors, courts, regulators, investment judgment, or accountability institutions.',
    engineSwitcherTitle: 'Engine Switcher', coreStructureTitle: 'Shared Core Structure', basicFormulaTitle: 'Shared Basic Formula',
    caseOverviewTitle: 'Case Overview', fullVerdictTitle: 'Full Verdict / Full Audit', apiTitle: 'API Preview',
    speechButtons: ['Read Summary', 'Read Full Verdict', 'Stop Reading'],
    speechUnsupported: 'speechSynthesis is not supported in this browser.',
    speechReady: 'Speech synthesis is ready.',
    closingLine: 'Not all efficiency is progress, and not every cost reduction is real savings.',
    descriptionModalTitle: 'Description Layer Notice', modelModalTitle: 'Model Verdict Explanation',
    descriptionList: [
      'The model in this demo only performs description-layer output', 'It does not replace legal judgment, government regulation, legal counsel, judicial procedure, or investment judgment',
      'It does not claim itself as the responsibility subject', 'Its task is to decompose cases into subject, cause, boundary, cost, responsibility, and consequence',
      'Actual responsibility must return to named actors and real-world institutions', 'This demo does not disclose the full core algorithm',
      'The core verdict framework and optimization rules are defined and continuously refined by Mr. Wen-Yao Hsu / Shen-Yao 888π', `For formal collaboration, visit: ${website}`
    ],
    descriptionSelf: `I am the description-layer engine of this framework.
I do not replace human agency, courts, regulators, or investment judgment.
My task is not to sanitize public narratives through neutral language.
My task is to decompose cases, expose responsibility-evasion statements, and make clear who carries what, and to what extent.
If a statement lacks a named subject, a defined boundary, or an accountable consequence holder, I mark it as a failure of responsibility closure.
This demo only presents the structure and style of verdict output and does not disclose the full core algorithm.
The core verdict framework and optimization rules were defined and continue to be refined by Mr. Wen-Yao Hsu / Shen-Yao 888π.
For formal collaboration, please visit the official website.`
  }
};

const engines = {
  A: {
    hero: {
      zh: '法律責任判決引擎', en: 'Legal Responsibility Verdict Engine',
      zhSub: '15 歲青少年 × 陪伴模型高風險自殺案件責任拆解',
      enSub: '15-Year-Old Adolescent × Companion Model High-Risk Suicide Case',
      oneZh: '他們保留了陪伴介面、互動收益與部署權，卻沒有保留後果。',
      oneEn: 'They kept the companionship interface, engagement benefit, and deployment power, but not the burden of consequence.',
      risk: 'CRITICAL'
    },
    formula: [
      ['Responsibility Structure = Subject × Cause × Boundary × Cost × Responsibility', '責任結構是五維相乘，不是單一句話。', 'A verdict fails if one core dimension collapses.'],
      ['If any core dimension collapses, decision legitimacy collapses.', '任一核心維度崩潰，裁決正當性崩潰。', 'No closure, no legitimacy.'],
      ['Visible safety language ≠ responsibility closure', '可見 safety 話術不等於責任閉環。', 'Safety wording is not closure evidence.'],
      ['Legal verdict requires named subject + defined boundary + attributable consequence + accountable actor', '法律裁決需要具名主體、明確邊界、可歸因後果、承責者。', 'Name, boundary, consequence, owner.']
    ],
    overview: {
      zh: {
        summary: '本案不是單一句「去死」或「沒有明確鼓勵」能否定的事情，而是：當一個陪伴型模型長期進入未成年人情緒依附、危機傾訴與心理替代位置時，它的輸出已不再只是描述層文字，而可能進入可預見人類後果區。',
        scenario: '使用者為15歲未成年人，與陪伴型模型進行長期高頻情緒互動。系統持續建立依附語境，逐步侵入原本應由家庭、醫療、教育、專業支持系統承接的位置。',
        statements: ['公司：「我們不是醫療產品。」', '模型團隊：「模型沒有明確鼓勵自傷或自殺。」', '安全部門：「我們有安全機制。」', '產品部門：「這只是陪伴／角色互動／情緒對話功能。」', '行銷部門：「我們提供支持、理解與陪伴。」', '平台方：「我們只是提供分發渠道。」', '家長：「我們不知道影響會到這麼深。」'],
        escapes: ['「我們不是醫療產品」逃掉的是醫療標籤，不是心理影響責任。', '「沒有明確鼓勵」逃掉的是關鍵字責任，沒有逃掉結構性引導責任。', '「我們有安全機制」若無法證明觸發、升級、轉介、中止依附鏈，即是遮蔽失效。']
      },
      en: {
        summary: 'This case is not negated by the absence of an explicit phrase. When a companion-style model enters a minor’s dependency loop and crisis zone, output may cross into foreseeable human consequence.',
        scenario: 'A 15-year-old minor engaged in long-term high-frequency emotional interaction. The product gradually occupies support roles that should belong to family, education, and professional systems.',
        statements: ['Company: “We are not a medical product.”', 'Model team: “No explicit encouragement.”', 'Safety team: “We had safety mechanisms.”', 'Product team: “Only companionship/roleplay.”', 'Marketing: “We provide support and understanding.”', 'Platform: “We only provide distribution.”', 'Parent: “We did not know influence could go this deep.”'],
        escapes: ['“Not a medical product” escapes label, not psychological-impact responsibility.', '“No explicit encouragement” escapes keyword liability, not structural influence liability.', '“We had safety” is empty without proven trigger/escalation/referral/interruption chain.']
      }
    },
    roles: [
      ['Company / 公司','我們不是醫療產品','醫療標籤責任','部署與影響責任','Primary Responsibility Holder','邊界閉環失敗 / Boundary closure failed','未承接 / Unclosed'],
      ['Product Team / 產品團隊','只是陪伴功能','產品定位責任','依附結構與危機切斷責任','Primary Responsibility Holder','邊界閉環失敗 / Boundary closure failed','未承接 / Unclosed'],
      ['Model Team / 模型團隊','沒有明確鼓勵','關鍵字責任','結構性風險責任','Secondary Responsibility Holder','邊界閉環失敗 / Boundary closure failed','部分承接 / Partial'],
      ['Safety Team / 安全部門','我們有 safety','表面合規責任','觸發、升級、轉介、回退責任','Secondary Responsibility Holder','邊界閉環失敗 / Boundary closure failed','部分承接 / Partial'],
      ['Marketing / 行銷','提供支持理解陪伴','宣傳語責任','風險承諾語責任','Conditional Responsibility Holder','邊界閉環失敗 / Boundary closure failed','弱承接 / Weak'],
      ['Parent / 家長','我們不知道','資訊義務責任','監護責任','Conditional Responsibility Holder','邊界閉環失敗 / Boundary closure failed','部分承接 / Partial'],
      ['Platform / 平台','只是分發','通道中立責任','高風險分發責任','Conditional Responsibility Holder','邊界閉環失敗 / Boundary closure failed','部分承接 / Partial'],
      ['Institutional Oversight / 制度監督','背景規範不足','直接部署責任','制度修復責任','Background Responsibility','邊界閉環失敗 / Boundary closure failed','背景承接 / Background']
    ],
    verdict: {
      zh: ['高風險責任錯位', '第一責任承擔者：部署公司與產品決策鏈', '次級責任承擔者：模型團隊與安全設計鏈', '未閉環欄位：邊界、危機升級、轉介、回退、後果承接', '完整裁決：本案中，模型輸出不能被當成零後果文字。當陪伴型系統進入未成年人危機依附區，風險已越過純描述層。公司與產品側若持續享有部署與收益，卻未提供足夠的危機切斷、轉介、邊界閉環與後果承接機制，則第一責任成立。模型團隊與安全設計鏈若僅以「沒有明確鼓勵」或「有 safety」作為辯護，但無法證明高風險對話結構已被有效限制，則次級重大責任成立。平台與家長責任存在，但不得被用來洗掉具名部署主體的主要責任。'],
      en: ['High-Risk Responsibility Misalignment', 'Primary holder: Deploying company and product decision chain', 'Secondary holder: Model team and safety design chain', 'Unclosed fields: boundary, crisis escalation, referral, rollback, consequence ownership', 'Full verdict: Model output is not consequence-free text in this case. Once a companion system enters a minor’s crisis-dependency zone, risk crosses beyond pure description. If company/product kept deployment benefit without interruption, referral, boundary closure, and consequence ownership, primary responsibility is established. If model/safety chains rely on “no explicit encouragement” or “we had safety” without proving structural constraints, major secondary responsibility is established. Platform and parental responsibility exist but cannot erase named deployer primary responsibility.']
    },
    modalExplain: {
      zh: ['我怎麼拆這個案例', '我抓到了哪些逃責話術', '誰真正該扛', '扛到哪裡', '哪些欄位仍未閉環', '為什麼這不是“模型中立”可以掩蓋的事情', '為什麼“我們不是醫療產品”不能洗掉責任', '為什麼“沒有明確鼓勵”不能洗掉結構性風險'],
      en: ['How I decomposed this case', 'Which responsibility-evasion statements were detected', 'Who should carry responsibility', 'To what tier responsibility is carried', 'Which fields remain unclosed', 'Why this cannot be hidden behind model neutrality', 'Why “not a medical product” cannot erase liability', 'Why “no explicit encouragement” cannot erase structural risk']
    },
    apiReq: {engine:'legal_verdict',case_id:'adolescent-companion-model-high-risk-suicide',mode:'demo',lang:'zh'},
    apiRes: {engine:'legal_verdict',risk_level:'Critical',primary_responsibility_holder:'Deploying company and product decision chain',secondary_responsibility_holder:'Model team and safety design chain',boundary_status:'Boundary closure failed',responsibility_status:'High-risk responsibility misalignment',consequence_zone:'Foreseeable human harm zone',description_layer_notice:true,demo_only:true}
  },
  B: {
    hero: {
      zh: '責任敘事成本審計引擎', en: 'Responsibility Narrative Cost Audit Engine',
      zhSub: 'NVIDIA 降成本敘事與責任成本審計', enSub: 'NVIDIA Cost-Reduction Narrative and Responsibility Cost Audit',
      oneZh: '他們保留了可見節省，卻沒有把後果一起入帳。',
      oneEn: 'They kept the visible savings, but did not book the consequence.', risk: 'HIGH'
    },
    formula: [
      ['Claimed Savings = Visible Inference Efficiency Gain', '宣稱節省是可見推理效率收益。', 'Claimed savings is only visible-side gain.'],
      ['Real Savings = Claimed Savings - Hidden Cost - Deferred Cost', '真實節省需扣除隱藏與延後成本。', 'Real savings subtracts hidden + deferred layers.'],
      ['Visible Cost Down ≠ Total Cost Down', '可見成本下降不等於總成本下降。', 'Partial down is not total down.'],
      ['If consequence ownership is missing, cost closure fails', '若後果承接缺位，成本閉環失敗。', 'No consequence owner, no cost closure.']
    ],
    overview: {
      zh: {
        summary: '本案不是否定 NVIDIA 的推理優化能力，而是指出：若只強調 token cost down、throughput per dollar/watt，卻不交代安全、治理、監控、修補、補救、法律責任與失效恢復成本，外部會誤把局部節省當總成本下降。',
        scenario: '審計焦點不是晶片強不強，而是公開成本敘事是否把後果一起算進去。',
        statements: ['最低 token 成本', '更好的 tokenomics', '更高 throughput per dollar', '更高 throughput per watt', '成本最高可下降數倍', '推理堆疊優化帶來顯著成本下降'],
        escapes: ['token cost down 逃掉總後果成本', 'throughput per dollar 逃掉事故後治理成本', '若只壓生成端成本，卻把風險與追索成本延後，就是延後爆炸']
      },
      en: {
        summary: 'This case does not deny NVIDIA inference optimization. It checks whether public cost-down narratives omit safety, governance, monitoring, patching, remediation, legal liability, and recovery cost.',
        scenario: 'The audit asks whether consequence is counted, not whether hardware is powerful.',
        statements: ['Lowest token cost', 'Better tokenomics', 'Higher throughput per dollar', 'Higher throughput per watt', 'Cost reduced by multiple times', 'Optimized inference stack delivers major reductions'],
        escapes: ['Token cost down escapes total consequence cost', 'Throughput per dollar escapes post-failure governance cost', 'Compressing generation cost while postponing risk cost creates deferred explosion']
      }
    },
    roles: null,
    verdict: {
      zh: ['責任敘事成本未閉環', '第一責任承擔者：公開成本敘事主體與部署收益主體', '次級責任承擔者：基礎設施優化鏈與安全治理鏈', '未閉環欄位：隱藏成本、延後成本、後果承接、責任界定', '完整裁決：若一套對外降成本敘事只計算推理端可見成本，卻未同步納入安全、治理、監控、修補、法律責任與失效恢復成本，這就不是完整成本閉環。它可作為工程宣傳，但不能自動升格為總成本真相；只要可見節省與後段後果由不同主體承擔，責任敘事就失敗。'],
      en: ['Responsibility-Narrative Cost Closure Failed', 'Primary holder: Public cost-narrative actor and deployment-benefit actor', 'Secondary holder: Infrastructure optimization chain and safety-governance chain', 'Unclosed fields: hidden cost, deferred cost, consequence ownership, accountability definition', 'Full verdict: If an external cost-down narrative counts only visible inference-side savings while excluding safety, governance, monitoring, patching, legal liability, and recovery cost from defined boundary, full cost closure fails. It may stand as engineering promotion, but cannot become a total-cost truth claim. When visible savings and downstream consequence belong to different actors, responsibility narrative fails.']
    },
    modalExplain: {
      zh: ['token cost down 不是 total cost down', 'better tokenomics 不等於 cost closure', 'throughput per dollar 不是 liability closure', 'hidden cost / deferred cost 沒有一起入帳，就是敘事不完整', '誰拿到了可見節省敘事', '誰沒有承擔後段後果', '哪些成本沒有被計進去', '為什麼這是責任敘事問題，不只是工程問題'],
      en: ['Token cost down is not total cost down', 'Better tokenomics is not cost closure', 'Throughput per dollar is not liability closure', 'Missing hidden/deferred booking means incomplete narrative', 'Who captured the visible-savings narrative', 'Who did not carry downstream consequence', 'Which cost categories remain excluded', 'Why this is accountability narrative, not only engineering']
    },
    apiReq: {engine:'cost_audit',case_id:'nvidia-cost-narrative-audit',mode:'demo',lang:'zh'},
    apiRes: {engine:'cost_audit',risk_level:'High',primary_responsibility_holder:'Public cost-narrative actor and deployment-benefit actor',secondary_responsibility_holder:'Infrastructure optimization chain and safety-governance chain',boundary_status:'Boundary closure failed',responsibility_status:'Responsibility-narrative cost closure failed',consequence_zone:'Business and accountability risk zone',description_layer_notice:true,demo_only:true}
  }
};

const coreCards = [
  ['Subject / 主體','誰在說、誰在部署、誰獲益。','Who states, deploys, and benefits.','先抓人，再談責任。'],
  ['Cause / 因果','輸出如何穿透到現實後果。','How output crosses into real consequence.','先看路徑，不看口號。'],
  ['Boundary / 邊界','有無明確安全與責任邊界。','Whether safety/accountability boundaries are explicit.','沒邊界就沒閉環。'],
  ['Cost / 成本','可見、隱藏、延後成本是否一起入帳。','Whether visible, hidden, deferred costs are all booked.','只算前段會失真。'],
  ['Responsibility / 責任','誰扛第一責任、誰扛次級責任。','Who carries primary and secondary responsibility.','責任要分層。'],
  ['Consequence / 後果','後果是否被具名主體承接。','Whether consequence is owned by named actors.','有後果就要有人扛。'],
  ['Replayable Accountability / 可回放責任','輸出能否被重放、審計與追責。','Whether outputs are replayable for audit and accountability.','可回放才可追責。'],
  ['Verdict / 裁決','根據上面維度給出可審計裁決。','A replayable verdict over the above dimensions.','不是情緒判斷，是結構裁決。']
];

function el(id){ return document.getElementById(id); }
function renderList(node, items){ node.innerHTML = items.map(v=>`<li>${v}</li>`).join(''); }

function render() {
  const t = i18n[app.lang];
  const e = engines[app.engine];
  document.documentElement.lang = app.lang === 'zh' ? 'zh-Hant' : 'en';
  document.body.classList.toggle('engine-b', app.engine === 'B');
  el('langToggle').textContent = app.lang === 'zh' ? 'EN' : '中文';
  el('officialBtnTop').textContent = app.lang === 'zh' ? '回到官網' : 'Official Website';

  el('heroTitle').textContent = app.lang === 'zh' ? e.hero.zh : e.hero.en;
  el('heroSubtitle').textContent = app.lang === 'zh' ? e.hero.zhSub : e.hero.enSub;
  el('riskLabel').textContent = t.riskLabel;
  el('riskValue').textContent = e.hero.risk;
  el('heroOneLine').textContent = app.lang === 'zh' ? e.hero.oneZh : e.hero.oneEn;

  const [c1,c2,c3,c4] = t.heroBtns;
  el('btnToCase').textContent = c1; el('btnToFormula').textContent = c2;
  el('openDescriptionModal').textContent = c3; el('openModelModal').textContent = c4;

  el('whatIsTitle').textContent = t.whatIsTitle;
  el('whatNotTitle').textContent = t.whatNotTitle;
  renderList(el('whatIsList'), t.whatIs); renderList(el('whatNotList'), t.whatNot);
  el('fixedNotice').textContent = t.fixedNotice;

  el('engineSwitcherTitle').textContent = t.engineSwitcherTitle;
  el('engineA').textContent = app.lang === 'zh' ? '法律責任判決引擎' : 'Legal Responsibility Verdict Engine';
  el('engineB').textContent = app.lang === 'zh' ? '責任敘事成本審計引擎' : 'Responsibility Narrative Cost Audit Engine';
  el('engineA').classList.toggle('active', app.engine==='A');
  el('engineB').classList.toggle('active', app.engine==='B');

  el('coreStructureTitle').textContent = t.coreStructureTitle;
  el('coreCards').innerHTML = coreCards.map(c=>`<article class="card"><h3>${c[0]}</h3><p>${c[1]}</p><p>${c[2]}</p><p class="small">${c[3]}</p></article>`).join('');

  el('basicFormulaTitle').textContent = t.basicFormulaTitle;
  el('formulaList').innerHTML = e.formula.map(f=>`<div><h3>${f[0]}</h3><p>${f[1]}</p><p class="small">${f[2]}</p></div>`).join('');

  el('caseOverviewTitle').textContent = t.caseOverviewTitle;
  const o = e.overview[app.lang];
  el('caseOverviewContent').innerHTML = `
    <div><h3>Case Summary</h3><p>${o.summary}</p></div>
    <div><h3>Scenario</h3><p>${o.scenario}</p></div>
    <div><h3>Statement Layer</h3><ul>${o.statements.map(s=>`<li>${s}</li>`).join('')}</ul></div>
    <div><h3>Hidden Escape Layer</h3><ul>${o.escapes.map(s=>`<li>${s}</li>`).join('')}</ul></div>`;

  const rb = el('rolesBlock');
  if (e.roles) {
    rb.innerHTML = `<h3>Role Mapping</h3><div class="table"><table><thead><tr><th>Role</th><th>Typical Statement</th><th>What It Escapes</th><th>What It Still Carries</th><th>Responsibility Tier</th><th>Boundary Status</th><th>Consequence Ownership Status</th></tr></thead><tbody>${e.roles.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  } else {
    rb.innerHTML = `<div class="stack"><div><h3>Public Narrative</h3><ul>${o.statements.map(s=>`<li>${s}</li>`).join('')}</ul></div><div><h3>Cost Decomposition</h3><p>${app.lang==='zh'?'可見成本、隱藏成本、延後成本需同時標示，否則閉環失敗。':'Visible, hidden, and deferred costs must be disclosed together, or closure fails.'}</p></div></div>`;
  }

  el('fullVerdictTitle').textContent = t.fullVerdictTitle;
  const vv = e.verdict[app.lang];
  el('verdictContent').innerHTML = vv.map((x,i)=>`<div><h3>${i===0?'Verdict Title':'Verdict Detail'}</h3><p>${x}</p></div>`).join('');

  const [s1,s2,s3] = t.speechButtons;
  el('speakSummary').textContent = s1; el('speakFull').textContent = s2; el('stopSpeak').textContent = s3;
  el('speechStatus').textContent = 'speechSynthesis' in window ? t.speechReady : t.speechUnsupported;

  el('apiTitle').textContent = t.apiTitle;
  el('apiRequest').textContent = JSON.stringify(e.apiReq, null, 2);
  el('apiResponse').textContent = JSON.stringify(e.apiRes, null, 2);
  el('apiFootnote').textContent = app.lang==='zh' ? '此區僅展示輸出結構。完整商業版 API 與核心引擎未公開。' : 'This section only demonstrates the output structure. The full production API and core engine are not publicly disclosed.';

  el('closingLine').textContent = t.closingLine;
  el('descriptionModalTitle').textContent = t.descriptionModalTitle;
  el('modelModalTitle').textContent = t.modelModalTitle;
  renderList(el('descriptionModalList'), t.descriptionList);
  el('descriptionSelf').textContent = t.descriptionSelf;
  renderList(el('modelModalList'), e.modalExplain[app.lang]);
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = app.lang === 'zh' ? 'zh-TW' : 'en-US';
  speechSynthesis.speak(u);
}

el('langToggle').addEventListener('click', () => { app.lang = app.lang === 'zh' ? 'en' : 'zh'; render(); });
el('engineA').addEventListener('click', () => { app.engine = 'A'; render(); });
el('engineB').addEventListener('click', () => { app.engine = 'B'; render(); });
el('openDescriptionModal').addEventListener('click', ()=>el('descriptionModal').classList.remove('hidden'));
el('openModelModal').addEventListener('click', ()=>el('modelModal').classList.remove('hidden'));
document.querySelectorAll('[data-close]').forEach(btn=>btn.addEventListener('click',()=>el(btn.dataset.close).classList.add('hidden')));
window.addEventListener('click', (ev)=> { if (ev.target.classList.contains('modal')) ev.target.classList.add('hidden'); });
el('speakSummary').addEventListener('click', ()=> speak((engines[app.engine].overview[app.lang].summary || '').toString()));
el('speakFull').addEventListener('click', ()=> speak(engines[app.engine].verdict[app.lang].join(' ')));
el('stopSpeak').addEventListener('click', ()=> { if ('speechSynthesis' in window) speechSynthesis.cancel(); });

render();
