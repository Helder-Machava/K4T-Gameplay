/* ======================
   CONFIGURAÇÕES
====================== */
const PASS_MARK = 60;
const TOTAL_TIME = 3 * 60 * 60; // 3 horas

/* ======================
   QUESTÕES (100)
====================== */
const questions = [
  {
    pergunta: "Para que um documento de venda seja automaticamente liquidado, deve:",
    opcoes: [
      "Configurar a ficha do documento indicando que \"Efectua liquidao automtica\" e qual o documento que gerado.",
      "Configurar o documento como \"documento de venda a dinheiro\".",
      "Configurar o documento para que tenha ligao a \"Bancos\".",
      "Os documentos de vendas no podem ser automaticamente liquidados. Esta funcionalidade s est disponvel para documentos de contas correntes."
    ],
    correta: 0
  },
  {
    pergunta: "Enquadre o Assistente de converso de documentos disponvel na Logstica, indicando a opo certa:",
    opcoes: [
      "Em caso de rupturas de stocks na converso de documentos, o Assistente de converso de documentos s executa a converso se nos Parmetros da Logstica e Tesouraria no Administrador, estiver configurado para no bloquear a operao.",
      "Na converso de documentos, o assistente utiliza sempre as sries por defeito dos documentos.",
      "Na converso de guias de remessa de clientes, sugerido o documento destino que est indicado no fluxo documental.",
      "Na converso de guias de remessa de clientes, sugerido o documento destino que est indicado nos Parmetros da Logstica e Tesouraria no Administrador."
    ],
    correta: 2
  },
  {
    pergunta: "Considere o tratamento dos vendedores na Logstica e indique a opo certa:",
    opcoes: [
      "Nenhuma das opes est correcta.",
      "Os vendedores podem ser associados a independentes da Gesto de Recursos Humanos atravs das Entidades Associadas. Esta associao permitir efectuar uma gesto integrada das contas correntes de vendedores e independentes.",
      "Os vendedores so definidos na ficha dos clientes e sugeridos nos documentos de vendas. Esta sugesto est contudo dependente da existncia de chefes de vendedores. Nestes casos, um vendedores ser sempre substitudo pelo seu chefe, para efeitos de clculo de comisses e de registo dos documentos.",
      "Os vendedores so definidos na ficha dos clientes e sugeridos nos documentos de vendas. Esta sugesto est contudo dependente das regras de comisses de vendas para vendedores que possam existir."
    ],
    correta: 1
  },
  {
    pergunta: "Considere o tratamento dos Pontos de Venda, no mbito da Logstica e Tesouraria. Seleccione a opo certa:",
    opcoes: [
      "A atribuio de impressoras para o POS - Ponto de Venda, encontra-se no Administrador.",
      "Todos os documentos da Logstica e Tesouraria podem ser utilizados nos Pontos de Vendas.",
      "O POS por defeito para registo de Vendas a Dinheiro e Vendas a Crdito deve ser definido na ficha do utilizador.",
      "O POS por defeito pode ser definido na ficha do utilizador, bem como definidas as suas restries por tipo de documento."
    ],
    correta: 2
  },
  {
    pergunta: "A Logstica e Tesouraria tem disponveis descontos associados a:",
    opcoes: [
      "Linhas do documento: artigo, (grupo/subgrupo/famlia) de artigos, quantidade.",
      "Linhas do documento: artigo (grupo/subgrupo/famlia) de artigos, valor acumulado de vendas (por perodo, por cliente, por artigo, por vendedor).",
      "Cabealho do documento: cliente, vendedor, valor acumulado de vendas (por perodo, por cliente).",
      "Todas as opes esto correctas"
    ],
    correta: 1
  },
  {
    pergunta: "Os processos de Aprovao Documental, podem ser realizados:",
    opcoes: [
      "Os fluxos e respectivas autorizaes, so criados no Administrador. A aprovao feita no Administrador atravs do utilitrio de Aprovao Documental.",
      "Os fluxos e respectivas autorizaes, so criados na Logstica atravs da aplicao de Fluxos de Autorizaes e Transformao Documental. A aprovao feita no Administrador atravs da opo Documentos Pendentes.",
      "Os fluxos e respectivas autorizaes, so criados no Administrador. A aprovao feita na Logstica atravs do utilitrio de Aprovao de Documentos.",
      "Os fluxos e respectivas autorizaes, so criados na Logstica atravs da aplicao de Fluxos de Autorizaes e Transformao Documental. A aprovao feita na Logstica atravs da opo Documentos Pendentes."
    ],
    correta: 2
  },
  {
    pergunta: "No mbito do tratamento de cotaes, seleccione a opo certa:",
    opcoes: [
      "Uma cotao pode ser convertida para uma nota de encomenda de cliente, mesmo depois de anulada.",
      "Nenhuma das opes est correcta.",
      "A opo de converso de cotaes permite a converso independentemente do estado da cotao (anulado ou no).",
      "Para uma cotao poder ser convertida para nota de encomenda ou factura, necessrio que esteja a falso o campo \"No Converter\""
    ],
    correta: 1
  },
  {
    pergunta: "A Margem Bruta apresentada em cada linha do documento, calculada:",
    opcoes: [
      "Margem Bruta = Preo de Venda Lquido - PCM",
      "Margem Bruta = Preo de Venda Lquido - PMC",
      "Margem Bruta = Preo de Venda Lquido - PCM - PMC",
      "Margem Bruta = Margem Bruta / Preo Venda Lquido"
    ],
    correta: 1
  },
  {
    pergunta: "Na Logstica e Tesouraria, existem documentos com sries com IVA includo, isto :",
    opcoes: [
      "O valor do documento tem IVA e por isso a srie tem IVA includo.",
      "O utilizador pode marcar um documento como tendo IVA includo.",
      "Os documentos com sries com IVA includo, so documentos em que o preo unitrio tem o IVA includo, sendo contudo o valor do imposto expurgado aquando do registo do documento.",
      "Os documentos com sries com IVA includo so documentos do tipo Pro-forma."
    ],
    correta: 2
  },
  {
    pergunta: "Seleccione a opo que contm os locais onde possvel definir a licena para utilizao do mdulo de Logstica e Tesouraria.",
    opcoes: [
      "Configurao Geral no Administrador e na Logstica, em sistema e configuraes.",
      "Configurao Geral no Administrador e Configurao Geral na Logstica.",
      "Configurao Geral na Logstica em sistema e configuraes e Configurao Geral no Administrador, na seo \"Configurar Sistemas\".",
      "Configurao Geral no Administrador, na seo \"Configurar Sistemas\" e na Logstica, no menu Ajuda."
    ],
    correta: 1
  },

  /* ... (as restantes questões 11 até 100 seguem aqui no mesmo formato) ... */

];

/* ======================
   ESTADO
====================== */
let current = 0;
let answers = new Array(questions.length).fill(null);
let timeLeft = TOTAL_TIME;
let timer = null;
let finished = false;

/* ======================
   INIT
====================== */
document.getElementById("qTotalTxt").textContent = questions.length;

/* ======================
   SLIDES
====================== */
function showSlide(id) {
  document.getElementById("slideIntro").classList.remove("active");
  document.getElementById("slideQuiz").classList.remove("active");
  document.getElementById("slideResult").classList.remove("active");
  document.getElementById(id).classList.add("active");
}

/* ======================
   START
====================== */
function startExam() {
  current = 0;
  answers = new Array(questions.length).fill(null);
  timeLeft = TOTAL_TIME;
  finished = false;

  const err = document.getElementById("introError");
  if (err) err.classList.add("d-none");

  showSlide("slideQuiz");
  render();
  startTimer();
}

/* Cache botões */
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnFinish = document.getElementById("btnFinish");

/* ======================
   RENDER
====================== */
function render() {
  const q = questions[current];

  document.getElementById("qIndexTxt").textContent = current + 1;
  document.getElementById("questionTxt").textContent = `${current + 1}. ${q.pergunta}`;

  const wrap = document.getElementById("optionsWrap");
  wrap.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  q.opcoes.forEach((op, i) => {
    const label = document.createElement("label");
    label.className = "d-flex gap-2 align-items-start";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "opt";
    input.value = i;
    input.className = "mt-1";
    if (answers[current] === i) input.checked = true;

    input.onchange = () => {
      answers[current] = i;
      updateHint();
    };

    const letter = document.createElement("b");
    letter.textContent = `${letters[i]}  `;

    const text = document.createElement("div");
    text.textContent = op;

    label.appendChild(input);
    label.appendChild(letter);
    label.appendChild(text);
    wrap.appendChild(label);
  });

  updateHint();

  const isFirst = (current === 0);
  const isLast = (current === questions.length - 1);

  // ✅ Aqui está a regra pedida (sem falhar mesmo com 2 perguntas)
  if (btnPrev) btnPrev.classList.toggle("d-none", isFirst);
  if (btnNext) btnNext.classList.toggle("d-none", isLast);
  if (btnFinish) btnFinish.classList.toggle("d-none", !isLast);
}

function updateHint() {
  const has = answers[current] !== null;
  document.getElementById("hintTxt").textContent = has
    ? "✅ Resposta guardada. Podes voltar e alterar quando quiseres."
    : "⚠️ Ainda não respondeu esta pergunta.";
}

/* ======================
   NAVEGAÇÃO
====================== */
function goNext() {
  if (finished) return;
  if (current < questions.length - 1) {
    current++;
    render();
  }
}

function goPrev() {
  if (finished) return;
  if (current > 0) {
    current--;
    render();
  }
}

/* ======================
   TIMER
====================== */
function startTimer() {
  stopTimer();
  updateTimer();

  timer = setInterval(() => {
    if (finished) return;

    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      finishQuiz("timeout");
    }
  }, 1000);
}

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function updateTimer() {
  const t = Math.max(timeLeft, 0);
  const h = String(Math.floor(t / 3600)).padStart(2, "0");
  const m = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
  const s = String(t % 60).padStart(2, "0");
  document.getElementById("timerTxt").textContent = `${h}:${m}:${s}`;
}

function formatTime(sec) {
  const s = Math.max(sec, 0);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = s % 60;
  return `${h}h ${m}m ${r}s`;
}

/* ======================
   RESULTADO
====================== */
function finishQuiz(reason) {
  if (finished) return;
  finished = true;
  stopTimer();

  let correct = 0;
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] !== null && answers[i] === questions[i].correta) correct++;
  }

  const percent = Math.round((correct / questions.length) * 100);
  const usedSeconds = TOTAL_TIME - timeLeft;
  const passed = percent >= PASS_MARK;

  showSlide("slideResult");

  document.getElementById("scoreTxt").textContent = `${percent}%`;

  const statusEl = document.getElementById("statusTxt");
  statusEl.innerHTML = passed
    ? `<span class="ok">🎉 Parabéns! Aprovado.</span>`
    : `<span class="no">❌ Não atingiu a nota mínima (60%).</span>`;

  const why = (reason === "timeout") ? "⏰ Tempo esgotado." : "✅ Teste terminado.";
  document.getElementById("metaTxt").innerHTML = `
    ${why}<br>
    Acertos: <b>${correct}</b> / <b>${questions.length}</b><br>
    Tempo usado: <b>${formatTime(usedSeconds)}</b>
  `;

  if (passed) launchConfetti();
}

function launchConfetti() {
  confetti({ particleCount: 220, spread: 95, origin: { y: 0.7 } });
  setTimeout(() => confetti({ particleCount: 160, spread: 80, origin: { y: 0.6 } }), 250);
}

/* ======================
   CORREÇÃO
====================== */
function toggleReview() {
  const box = document.getElementById("reviewBox");
  const willShow = (box.style.display === "none");
  box.style.display = willShow ? "block" : "none";

  if (willShow && !box.dataset.built) {
    buildReview();
    box.dataset.built = "1";
  }
}

function buildReview() {
  const letters = ["A", "B", "C", "D"];
  const box = document.getElementById("reviewBox");
  box.innerHTML = "";

  questions.forEach((q, i) => {
    const user = answers[i];
    const ok = (user !== null && user === q.correta);

    const userTxt = (user === null)
      ? "—"
      : `${letters[user]}. ${q.opcoes[user]}`;

    const correctTxt = `${letters[q.correta]}. ${q.opcoes[q.correta]}`;

    const div = document.createElement("div");
    div.className = "reviewItem";
    div.innerHTML = `
      <div class="fw-bold mb-1">
        ${i + 1}. ${escapeHtml(q.pergunta)}
        ${ok ? '<span class="ok ms-2">✔</span>' : '<span class="no ms-2">✖</span>'}
      </div>
      <div><b>Sua resposta:</b> ${escapeHtml(userTxt)}</div>
      <div><b>Correta:</b> ${escapeHtml(correctTxt)}</div>
    `;
    box.appendChild(div);
  });
}

/* ======================
   RECOMEÇAR
====================== */
function restartQuiz() {
  const box = document.getElementById("reviewBox");
  box.style.display = "none";
  box.innerHTML = "";
  delete box.dataset.built;

  showSlide("slideIntro");
}

/* ======================
   SAFE HTML
====================== */
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
