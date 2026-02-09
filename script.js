/* =========================
     script.js
========================= */

/* ======================
   CONFIGURAÇÕES
====================== */
const PASS_MARK = 60;
const TOTAL_TIME = 3 * 60 * 60; // 3 horas

/* ======================
   QUESTÕES (100)
====================== */
const questions = [{
  pergunta: "Para que um documento de venda seja automaticamente liquidado, deve:",
  opcoes: ["Configurar a ficha do documento indicando que \"Efectua liquidação automática\" e qual o documento que é gerado.", "Configurar o documento como \"documento de venda a dinheiro\".", "Configurar o documento para que tenha ligação a \"Bancos\".", "Os documentos de vendas não podem ser automaticamente liquidados. Esta funcionalidade só está disponível para documentos de contas correntes."], correta: 0
},
{
  pergunta: "Enquadre o “Assistente de conversão de documentos” disponível na Logística, indicando a opção certa:",
  opcoes: ["Em caso de rupturas de stocks na conversão de documentos, o “Assistente de conversão de documentos” só executa a conversão se nos “Parâmetros da Logística e Tesouraria” no Administrador, estiver configurado para não bloquear a operação.", "Na conversão de documentos, o assistente utiliza sempre as séries por defeito dos documentos.", "Na conversão de guias de remessa de clientes, é sugerido o documento destino que está indicado no fluxo documental.", "Na conversão de guias de remessa de clientes, é sugerido o documento destino que está indicado nos “Parâmetros da Logística e Tesouraria” no Administrador."], correta: 0
}, {
  pergunta: "Considere o tratamento dos vendedores na Logística e indique a opção certa:",
  opcoes: ["Nenhuma das opções está correcta.", "Os vendedores podem ser associados a independentes da Gestão de Recursos Humanos através das “Entidades Associadas”. Esta associação permitirá efectuar uma gestão integrada das contas correntes de vendedores e independentes.", "Os vendedores são definidos na ficha dos clientes e sugeridos nos documentos de vendas. Esta sugestão está contudo dependente da existência de chefes de vendedores. Nestes casos, um vendedores será sempre substituído pelo seu chefe, para efeitos de cálculo de comissões e de registo dos documentos.", "Os vendedores são definidos na ficha dos clientes e sugeridos nos documentos de vendas. Esta sugestão está contudo dependente das regras de comissões de vendas para vendedores que possam existir."],
  correta: 0
}, {
  pergunta: "Para que qualquer documento de facturação seja disponibilizado no POS deve:",
  opcoes: ["Associar os documentos pretendidos às fichas dos pontos de venda.", "Associar os talões de POS aos documentos pretendidos.", "Na configuração das séries do documento, deve estar seleccionanda a opção \"Utilizado em POS\".", "Nenhuma das opções esta correcta."],
  correta: 0
}, {
  pergunta: "Seleccione a opção que caracteriza o tratamento das regras de descontos e preços.",
  opcoes: ["As regras de descontos e preços podem ser associadas aos perfis de utilizadores.", "As regras podem ser definidas para que cada percentagem de desconto seja aplicada por intervalo de vendas.", "As regras são sempre sugeridas de acordo com a antiguidade dos pendentes.", "Sempre que existir mais do que uma regra, a aplicação acumulará os descontos até ao limite máximo de 100%."], correta: 0
}, {
  pergunta: "Para aprovar um documento de Venda do tipo “Cotação” devemos:",
  opcoes: ["Editar o orçamento, e alterar directamente o Estado para “Aprovado”.", "Não é possível efectuar o pretendido.", "No Administrador, efectuar o pretendido através do utilitário “Aprovação Documentos”.", "Validar se o documento tem algum estado fixado na sua ficha, caso tenha, deve-se remover o estado, e posteriormente aprová-lo através da opção de Conversão de Documentos no Editor de Vendas."], correta: 0
}, {
  pergunta: "Indique a frase certa considerando o tratamento de circuitos documentais:",
  opcoes: ["As Encomendas de Clientes apenas podem ser satisfeitas utilizando Facturas ou Guias de Transporte.", "Nenhuma das frases está correcta.", "Os documentos do tipo \"Cotação\" podem ser convertidos independentemente do seu estado.", "Um documento \"fechado\" pode ser editado e alterado."], correta: 0
}, {
  pergunta: "A margem bruta de vendas de um documento de venda calcula-se da seguinte forma:",
  opcoes: ["Preço de venda acrescido de descontos e deduzido de preço de custo médio da mercadoria e preço de custo padrão do serviço.", "Preço de venda líquido menos preço de custo médio de cada linha do documento de venda.", "Preço de venda menos preço de custo último de cada linha do documento de venda.", "Total de custos do documento a dividir pelo total de mercadorias do documento de venda."], correta: 0
}, {
  pergunta: "Considere o tratamento de séries na Logística e indique a opção certa:",
  opcoes: ["Os documentos de pagamentos a independentes de RHP, integrados na Logística utilizam a série por defeito.", "Uma série inactiva é uma série que não permite consultar os documentos já emitidos nessa série.", "Uma série que tenha IVA incluído faz com que, no registo de um documento de venda, o preço líquido do artigo seja obtido expurgando o valor do IVA do preço de venda definido na ficha do artigo. Neste caso, não estamos a considerar outras variáveis que possam influenciar o preço líquido.", "Uma série sem IVA incluído é uma série onde só podem ser registados artigos isentos de IVA."], correta: 0
}, {
  pergunta: "A licença da Logística está localizada:",
  opcoes: ["Na pasta \"APL\" do Sistema de Gestão PRIMAVERA.", "Na pasta \"Config\\LE\" ou \"Config\\LP\" do Sistema de Gestão PRIMAVERA.", "Na pasta \"Dados\\LE\" ou \"Dados\\LP\" do Sistema de Gestão PRIMAVERA.", "Nenhuma das opções está correcta."], correta: 0
}, {
  pergunta: "Relativamente às configurações definidas nos “Parâmetros\" da Logística e Tesouraria no Administrador, indique qual das seguintes opções está correcta.",
  opcoes: ["A numeração dos avisos de vencimentos emitidos é mantida nas preferências da Logística e Tesouraria.", "É possível configurar os “Parâmetros\" para que a seja emitido um alerta quando existirem campos do utilizador na base de dados \"Tempdb.mdf\".", "Na opção “Inventário” pode ser definido o arredondamento das casas decimais do P.C.M., assim como o comportamento em caso de ruptura de stocks.", "Nos \"Parâmetros\" é possível definir o sistema contabilístico a utilizar na integração de movimentos de tesouraria."], correta: 0
}, {
  pergunta: "O Encerramento de Períodos:",
  opcoes: ["É efectuado documento a documento na Logística.", "É efectuado no Administrador, apenas por tipo de documento (Venda, Stocks, etc.).", "É efectuado no Administrador, por “Tipo de Documento” (Venda, Stocks, etc.) ou Documento a Documento.", "É efectuado nos tipos de documentos de venda ou compra na Logística."], correta: 0
}, {
  pergunta: "Enquadre o tratamento das autorizações indicando a frase correcta.",
  opcoes: ["A autorização apenas pode ser inserida no fluxo caso existam condições definidas.", "Cada autorização só poderá estar associada a um único utilizador.", "É possível definir autorizações em cascata bem como associar múltiplas assinaturas a um determinado processo de autorização.", "Os utilizadores conseguem visualizar os documentos pendentes para autorização. Contudo, a autorização está restringida de acordo com o fluxo seleccionado."], correta: 3
}, {
  pergunta: "Indique a frase certa.",
  opcoes: ["A Autorização utilizada nos fluxos de documentos não é controlada via Log da aplicação.", "Não é possível definir autorizações em cascata, nem associar múltiplas assinaturas a um determinado processo de autorização.", "Para que um determinado documento siga um fluxo não é necessário que na altura da criação do documento se identifique o fluxo que pretende seguir.", "Uma Autorização pode ser anulada mesmo que existam documentos a serem liberados/aprovados."], correta: 1
}, {
  pergunta: "Indique a frase errada",
  opcoes: ["As Autorizações/Condições nunca podem ser o início nem o fim do fluxo.", "O documento não pode ser gravado se houver linhas inseridas manualmente no documento e, este, não for o início de um fluxo.", "O fluxo tem sempre de ter um documento inicial e um estado terminal.", "Um documento associado a um fluxo e transformado, pode depois ser associado a um outro fluxo diferente e ser novamente transformado."], correta: 3
}, {
  pergunta: "A Logística permite efectuar a gestão de fluxos documentais. Assinale a afirmação correcta",
  opcoes: ["A criação de um fluxo documental é realizada na configuração dos documentos, mas limitada a cinco fluxos por tipo de documentos.", "A criação de um fluxo documental é realizada na ficha de configuração dos documentos.", "A criação de um fluxo documental é realizada nos parâmetros da Logística e Tesouraria do Administrador.", "A criação de um fluxo documental é realizada nos parâmetros da Logística e Tesouraria, mas alterável na configuração dos documentos."], correta: 2
}, {
  pergunta: "Indique qual o preço unitário de um determinado artigo sugerido na emissão de facturas de compras.",
  opcoes: ["O PVP associado ao cliente a facturar.", "O Último Preço da Compra efectuada do artigo ao fornecedor actual no caso de já terem sido efectuadas compras para este fornecedor.", "Sempre o Preço Custo Implícito (P.C.I.) da última compra efectuada do artigo.", "Sempre o Preço de Custo Médio (P.C.M.) do artigo."], correta: 1
}, {
  pergunta: "Enquadre o assistente de \"Apoio à Encomenda”, seleccionando a opção correcta.",
  opcoes: ["As quantidades a encomendar são sugeridas com base na comparação entre o stock actual e o stock de reposição ou de ruptura. Contudo, o utilizador pode ainda seleccionar a quantidade económica.", "Não é possível alterar as quantidades a encomendar calculadas pela aplicação.", "Não é possível utilizar a quantidade económica de encomenda, em vez da quantidade efectivamente necessária.", "No caso dos artigos compostos, são sempre analisadas as necessidades de stock dos componentes e não do próprio composto."], correta: 0
}, {
  pergunta: "A distribuição de descontos e encargos pode ser realizada de acordo com o critério:",
  opcoes: ["Peso Total da Linha, tendo como base o peso da linha relativamente ao somatório do peso de todas as linhas. O peso de cada linha corresponde ao peso do artigo, definido na sua ficha.", "Quantidade da Linha, tendo como base a quantidade da linha relativamente ao stock actual de cada artigo.", "Valor da Linha, tendo como base o valor do documento relativamente ao somatório do valor de todos os documentos seleccionados.", "Volume Total da Linha, tendo como base o volume da linha relativamente ao total do documento. O volume da linha é definido no documento de registo do encargo."], correta: 2
}, {
  pergunta: "Enquadre a funcionalidade de conferência de compras, indicando a opção correcta.",
  opcoes: ["A configuração de qual o documento de diferença a gerar é realizada no administrador.", "Além de reflectir caso existam diferenças de valor entre o documento origem e o documento destino é possível lançar no editor de conferência uma diferença superior a considerada no documento destino.", "É possível realizar a conferência a qualquer tipo de documento.", "Reflecte na conta corrente do fornecedor só as diferenças de valor entre o documento origem e o documento destino não sendo possível lançar no editor de conferência uma diferença superior a considerada no documento destino."], correta: 3
}, {
  pergunta: "As autorizações podem estar associadas aos seguintes tipos de documentos:",
  opcoes: ["Compras.", "Conta Corrente e Compras.", "Conta Corrente e Vendas.", "Vendas."], correta: 1
}, {
  pergunta: "Os fluxos documentais existentes na Logística são aplicados a:",
  opcoes: ["A todos os tipos de documentos.", "Aos documentos de Compras e Contas Correntes.", "Aos documentos de Vendas e Compras.", "Aos documentos de Vendas e Contas Correntes."], correta: 2
}, {
  pergunta: "Na Logística é possível efectuar a gestão de fluxos documentais. Nestes fluxos é possível introduzir autorizações de forma a condicionar a transformação de documentos de Compras. Quais os passos para efectuar a criação de autorizações?",
  opcoes: ["Criar os grupos de utilizadores nas tabelas do ERP Primavera e depois criar as autorizações nos parâmetros do Administrador.", "Criar as autorizações nos parâmetros da Logística e Tesouraria.", "Definir utilizadores no sistema e criar grupos de utilizadores nas tabelas do ERP Primavera.", "Definir utilizadores no sistema, criar grupos de utilizadores nas tabelas do ERP Primavera e criar as autorizações nos parâmetros do Administrador."], correta: 3
}, { pergunta: "Indique a resposta certa:", opcoes: ["Apenas podemos definir 3 Dimensões em cada ficha de Artigo.", "As Dimensões são criadas nos Utilitários da aplicação.", "As Rubricas das Dimensões são criadas nos Utilitários da aplicação.", "Os códigos das Rubricas, são sugeridos automaticamente pela aplicação obedecendo a uma regra de “CódigoDimensão” + “Numerador”: p.ex. TMP001, TMP002, etc..."], correta: 0 }, {
  pergunta: "Considere o seguinte cenário: O artigo X é movimentado em \"UN - Unidades\". Porém, as compras são feitas em caixas de 10 unidades. Indique qual a opção que permite tratar este caso.",
  opcoes: ["A ficha do artigo deve ter a unidade base \"UN - Unidades\" e o factor de conversão deve ser \"10\". Nas compras, deve escolher a unidade base.", "A ficha do artigo deve ter a unidade base \"UN - Unidades\". Deve criar uma unidade (por exemplo, \"Cx 10 - Caixas de 10 unidades) que converta uma caixa em 10 unidades. Nas compras, deve escolher a unidade criada.", "Deve criar uma unidade qualquer e indicar o factor de conversão \"10\". Na ficha do artigo, deve indicar a unidade criada como sendo a unidade base.", "Nenhuma das opções é correcta."], correta: 1
}, {
  pergunta: "No processo de Preparação de Inventário:",
  opcoes: ["O utilizador pode criar novos filtros.", "O utilizador pode filtrar artigos por família e sub-família.", "O utilizador pode filtrar artigos por Lote.", "O utilizador pode filtrar artigos por preço de custo médio."], correta: 1
}, {
  pergunta: "Considerando o tratamento das unidades alternativas, indique a opção correcta:",
  opcoes: ["A conversão entre unidades apenas poderá ser realizada com base no \"factor\" de conversão definido na unidade.", "A definição das unidades de conversão pode ser efectuada com base em campos do utilizador.", "A valorização dos artigos pelo preço de custo médio pode ser realizada em qualquer unidade. Para o efeito é necessário definir a relação de conversão entre as unidades alternativas e a unidade base.", "Para criar a ficha de um artigo sem a unidade base definida deve ser desactivada essa validação no Administrador."], correta: 0
}, {
  pergunta: "É possível alterar automaticamente a descrição do artigo na altura da facturação?",
  opcoes: ["Não é possível.", "Sim, se o cliente tiver o idioma configurado na ficha e se o idioma estiver também configurado na ficha do artigo com outra descrição.", "Sim, se o cliente tiver o idioma configurado na ficha e se o idioma estiver também configurado na ficha dos países com outra descrição.", "Sim, se o cliente tiver o país diferente do original."], correta: 1
}, {
  pergunta: "Caracterize as operações realizadas pelos documentos de entradas em stocks e de stocks iniciais, seleccionando a opção correcta.",
  opcoes: ["Nenhuma das opções está correcta.", "O documento de entrada de stocks actualiza a quantidade de stock actual do artigo, colocando o stock actual do artigo igual ao stock definido no documento.", "O documento de stock inicial elimina a quantidade de stock actual do artigo, actualizando essa informação de acordo com as quantidades definidas e à data do documento.", "O documento de stock inicial não pode ser configurado para actualizar o preço de custo médio."], correta: 0
}, {
  pergunta: "Considere o seguinte cenário: Foi realizada a primeira compra de 1 unidade do artigo X e de 10 unidades do artigo Y ao preço unitário líquido de $ 2000 e $ 200, respectivamente.Sabendo que o artigo X tem um volume de 200 e que o artigo Y não tem volume definido calcule o P.C.M. do artigo X e Y após a afectação de $ 100 de encargos, tendo estes encargos sido distribuídos em função do volume.",
  opcoes: ["O PCM do artigo X é $ 2000 e o PCM do artigo Y é $ 200.", "O PCM do artigo X é $ 2050 e o PCM do artigo Y é $ 250.", "O PCM do artigo X é $ 2100 e o PCM do artigo Y é $ 200.", "O PCM do artigo X é $ 2200 e o PCM do artigo Y é $ 200."], correta: 2
}, {
  pergunta: "Reflicta sobre a facturação em prestações, no módulo de projectos:",
  opcoes: ["É possível indicar o valor fixo ou a percentagem a pagar em cada prestação.", "Temos até 4 prestações possíveis (1-Sinal, 2-Reforço de sinal, 3- Acabamentos, 4-Entrega ao Cliente).", "Temos até 3 prestações possíveis (1-Sinal, 2-Reforço de sinal, 3-Entrega ao Cliente).", "Na prestação Sinal é sugerido o valor de 10%."], correta: 0
}, {
  pergunta: "Os estados de projectos têm obrigatoriamente um nível associado:",
  opcoes: ["Este nível pode ser definido como exclusivo para um projecto/documento.", "Implicam um fluxo de documentos/estados.", "Influencia de forma direta a informação sobre datas/estados no painel de projeto.", "Registam no histórico todos os documentos que se estejam configurados para efectuar a mudança de estado."], correta: 2
}, {
  pergunta: "A associação de um projecto a um documento de venda é possível em que circunstâncias?",
  opcoes: ["Por documento, quando configurado no cabeçalho no documento.", "Por Cliente, na associação desse cliente a um projeto na ficha do cliente.", "Por Cliente, na associação desse cliente a um projecto na ficha do projecto.", "Por linha de documento, independentemente do cliente ou tipo de documento."], correta: 3
}, {
  pergunta: "De forma a influenciar os proveitos de um projecto, através de Documentos de Conta Corrente devemos:",
  opcoes: ["Apenas a fatura manual de conta corrente pode ser configurada como proveito na análise dos projetos.", "É obrigatório configurar o documento de conta corrente como proveitos na classe analítica de projectos.", "Não é possível influenciar projectos com documentos de conta corrente.", "Temos que configurar os documentos de conta corrente como compras."], correta: 1
}, {
  pergunta: "A facturação de prestações nos projetos tem de ter uma periodicidade:",
  opcoes: ["Anual", "Mensal", "É definida pelo utilizador.", "O conceito de periodicidade não tem tratamento na facturação de prestações nos projetos."], correta: 3
}, {
  pergunta: "Reflicta sobre a orçamentação de projectos.",
  opcoes: ["É possível actualizar o orçamento de custos face ao aumento do PCM dos artigos envolvidos.", "É possível orçamentar apenas alguns artigos de um único documento.", "Alguns tipos de artigo podem ser exclusivamente para orçamentos de projectos.", "O orçamento de proveitos pode ser feito com base num documento do tipo encomenda de cliente."], correta: 3
}, {
  pergunta: "Considerando a possibilidade de controlar o estado de um Projecto, indique qual a forma de transitar o projecto entre vários estados:",
  opcoes: ["Ao criar o projecto este fica sem nenhum estado atribuído", "Ao criar um documento e associar a uma das suas linha um projecto este vai automaticamente transitar para o estado definido no documento. Esta é a única forma de atribuir um estado a um projecto", "No Painel de Projecto, através do botão de Contexto é possível transitar o estado de um projecto através da opção Registar Transição de Estado. Esta é a única forma de atribuir um estado a um projecto", "Ao criar um documento e associar a uma das suas linha um projecto este vai automaticamente transitar para o estado definido no documento. Em alternativa, no Painel de Projecto, através do botão de Contexto é possível transitar o estado de um projecto através da opção Registar Transição de Estado"], correta: 3
}, {
  pergunta: "Reflicta sobre as classes analíticas de projectos",
  opcoes: ["Um documento configurado como compra, irá influenciar os custos.", "Um documento configurado como orçamento de custos, irá por defeito fazer a abertura do projecto (alteração do estado para Aberto).", "Apenas o documento interno registo de consumos pode ser configurado como consumo.", "Um documento configurado como consumo, não pode estar também configurado como compra."], correta: 3
}, {
  pergunta: "Os custos do funcionário responsável pelo projecto podem ser imputados ao mesmo na rubrica de custos:",
  opcoes: ["Esta afirmação está errada, não existe tratamento possível para esta imputação.", "Esta afirmação está certa, basta configurar a afectação do projecto na ficha do funcionário (como Consumo).", "Esta afirmação está certa, para isso teremos de configurar um documento interno de consumo de projectos (na analise analítica) e associar o funcionário a esse documento.", "Esta afirmação está certa, mas para isso teremos de ligar o processamento de vencimentos/impostos à conta corrente. O documento a influenciar o projecto poderá ser o Recibo."], correta: 2
}, {
  pergunta: "Ao criar uma nova actividade, dependendo do tipo de actividade, é preciso definir o tipo de integração com o sistema de email. Seleccione a opção que melhor define o tipo de integração possível de efectuar entre o CRM Primavera e o sistema de email:",
  opcoes: ["Se for seleccionada a opção ´Inclui Contacto Principal“: define se o email de notificação inclui o contacto definido como principal", "Se for seleccionada a opção ´Inclui Outros Contactos“: define se o email de notificação inclui os contactos definidos como ´Outros Contactos´", "As opções \"Incluir Contacto Principal\" e \"Incluir Outros Contactos\" existem e estão automaticamente seleccionadas", "As opções \"Incluir Contacto Principal\" e \"Incluir Outros Contactos\" existem e podem ser seleccionadas"], correta: 3
}, {
  pergunta: "Indique qual é a opção que permite criar actividades a partir da emissão de avisos de vencimento, bem como executar a impressão dos avisos de vencimento.",
  opcoes: ["Aceder ao \"Assistente de Criação de Actividades\" e escolher a opção \"Actividades para Avisos de Vencimento\". Seleccionar \"seguinte\", escolher os avisos pretendidos e confirmar.", "Aceder ao editor de emissão de avisos de vencimento e emitir o aviso pretendido. Aceder ao editor de registo de actividades, pesquisar os avisos emitidos e importar os documentos pretendidos.", "Não existe nenhuma opção que permite a criação automática de actividades a partir da emissão dos avisos de vencimento.", "Nos \"Parâmetros da Logísitica e Tesouraria\" no Administrador, activar a opção \"Registar os avisos de vencimento em actividades\" e escolher o tipo de actividade pretendido para a emissão dos avisos. Emitir os avisos de vencimento."], correta: 3
}, {
  pergunta: "Para que um documento seja considerado no registo de uma actividade de cobranças é necessário que:",
  opcoes: ["A entidade associada ao documento não esteja excluída das cobranças e o documento esteja pendente.", "A entidade associada ao documento não esteja excluída das cobranças.", "Esteja num estado permitido para cobranças.", "O documento esteja pendente."], correta: 0
}, {
  pergunta: "Reflicta sobre as actividades:",
  opcoes: ["A mesma actividade pode estar associada a vários contactos.", "As atividades não necessitam ter Oportunidades de Venda associadas.", "As actividades podem ser atribuídas pelo administrador a um vendedor.", "Todas as respostas estão correctas"], correta: 3
}, {
  pergunta: "As actividades do módulo de contactos e oportunidades:",
  opcoes: ["Têm sempre integração com o Outlook.", "Podem integrar com o Word.", "Podem ser do tipo \"cobranças\".", "Todas as respostas estão correctas."], correta: 2
}, {
  pergunta: "Reflicta sobre o mapa de Análise de Nivel:",
  opcoes: ["O seu resultado pode ser impresso.", "É individual para cada vendedor/OV", "É genérico para todos os ciclos de venda.", "Não podem ser realizadas análises plurianuais."], correta: 1
}, {
  pergunta: "Considere o tratamento das cobranças seleccionado a opção certa:",
  opcoes: ["Qualquer tipo de actividade pode ser usada no âmbito das cobranças.", "As datas de recebimento definidas nas actividades de cobrança são consideradas na análise previsional de tesouraria", "Os alertas de cobranças não permitem criar actividades de cobranças.", "Todos os documentos pendentes são considerados para cobrança"], correta: 1
}, {
  pergunta: "As actividades podem ser periódicas ?",
  opcoes: ["Sim, basta que estejam configuradas para esse efeito.", "Sim caso o Outlook permita actividades agendadas periódicas.", "Não, as actividades têm de ser colocadas individual e manualmente.", "Sim. É esse o intuito do wizard de Agendamento periódico de actividades"], correta: 0
}, {
  pergunta: "Reflicta sobre as campanhas de marketing no módulo de contactos e oportunidades:",
  opcoes: ["Uma campanha pode estar associada a varias oportunidades de venda.", "Uma campanha pode ficar automaticamente inactiva opôs a data de fim ter sido ultrapassada.", "O assistente de campanha pode criar, de uma forma rápida, actividades associadas a uma campanha.", "Todas as repostas estão correctas"], correta: 3
}, {
  pergunta: "Os documentos internos configurados como Compras na Classe analítica:",
  opcoes: ["Podem incluir documentos que serão facturados posteriormente.", "Podem ser copiados para documentos de venda (ex: FA) no utilitário de copia de linhas.", "Podem ser lançados sem entidade associada.", "Todas as respostas estão correctas."], correta: 3
}, {
  pergunta: "O Assistente de Processamento de Requisições Internas em Lote possibilita aos utilizadores seleccionar um conjunto de requisições (usando restrições) para, de seguida, criar um documento do mesmo tipo para cada uma delas. Nos documentos a criar, se nenhuma quantidade for indicada, a quantidade para cada artigo será determinada de acordo com a regra de quantidade seleccionada, esta regra pode considerar:",
  opcoes: ["´Quantidade em Aberto´: quantidade que não foi entregue ao requisitante", "´Stock em Falta´: quantidade não disponível em stock e que será necessária para satisfazer a quantidade em aberto", "“Quantidade por tratar”: quantidade que não foi pedida ao fornecedor, nem disponibilizada ao requisitante", "Todas as opções estão correctas"], correta: 3
}, {
  pergunta: "Reflicta sobre os documentos internos Standard:",
  opcoes: ["Por defeito, estes documentos não podem se copiados no utilitário de copia de linhas.", "Estes documentos necessitam sempre de incluir entidades associadas.", "O preço sugerido para um artigo é sempre o PVP1.", "Este documento pode controlar as quantidades satisfeitas na origem."], correta: 3
}, {
  pergunta: "No âmbito das requisições internas as autorizações de documentos devem:",
  opcoes: ["Ser feitas sempre pelo Administrador.", "Ser feitas pelo utilizador Destinatário da requisição interna.", "Ser feitas apenas nos documentos incluídos em fluxos documentais.", "Terminar sempre num documento do tipo Encomenda ao fornecedor."], correta: 2
}, {
  pergunta: "Reflicta sobre as requisições internas.",
  opcoes: ["As requisições internas não obrigam ao preenchimento do Destinatário.", "As requisições internas podem incluir tipos de artigos, exclusivos para este tipo de documento.", "Necessitam estar no estado aprovadas para serem utilizadas no processamento de requisições internas.", "Obrigam à existência de uma entidade externa igual ou relacionada com o Requisitante."], correta: 2
}, {
  pergunta: "Reflicta sobre o documento interno Pedido de Preço:",
  opcoes: ["Apenas pode ser usado em Entidades Internas.", "Sugere sempre o PCM do artigo no registo.", "Pode ser lançado sem entidade associada.", "Pode ser enviado directamente a uma entidade externa."], correta: 2
}, {
  pergunta: "Na Exploração, nos \"documentos emitidos\" podemos:",
  opcoes: ["Imprimir uma listagem com os documentos que foram emitidos para um terceiro.", "Reemitir documentos de vendas, compras, stocks, encomendas e orçamentos.", "Reemitir documentos de vendas, compras, stocks.", "Verificar em formato de grelha os documentos que foram emitidos e reimprimí-los."], correta: 0
}, {
  pergunta: "Seleccione a opção verdadeira relativa ao utilitário cópia de linhas",
  opcoes: ["Quando é utilizado o utilitário cópia de linhas, o preço unitário do documento fonte é sempre copiado para o documento destino", "O utilizador pode seleccionar no momento da cópia se quer copiar o preço unitário do documento fonte ou calculá-lo de acordo com as regras do documento destino", "Para copiar o preço unitário do documento fonte e calculá-lo de acordo com as regras do documento destino é necessário activar a opção “Preço Unitário” no Administrador em parâmetros da Empresa", "Nenhuma das Opções está correcta"], correta: 3
}, {
  pergunta: "Através do utilitário cópia de linhas, é possível copiar linhas negativas?",
  opcoes: ["É sempre possível", "Não é possível", "Só é possível se o documento origem estiver configurado para usar linhas negativas", "Só é possível se ambos os documentos Origem e Destino estiverem configurados para suportar linhas negativas"], correta: 3
}, {
  pergunta: "Indique a frase correcta considerando o tratamento de Séries de Documentos:",
  opcoes: ["Todas as opções estão correctas.", "A criação de Séries pode ser realizada documento a documento, ou em “lote” através do Administrador.", "Não posso ter mais que uma Série por defeito.", "Só se pode ter uma série por tipo de documento."], correta: 1
}, {
  pergunta: "A partir da opção ´Mapas de IVA´ do menu ´Vendas\\Utilitários´ é possível:",
  opcoes: ["Gerar magnético dos recapitulativos com formato aceite pelo ministério das finanças.", "Imprimir a informação em formato detalhado e ordenado por entidade.", "Imprimir o mapa de recapitulativos com formato aceite pelo ministério das finanças.", "Imprimir os mapas periódicos apenas para clientes Nacionais."], correta: 1
}, {
  pergunta: "Seleccione a opção correcta tendo em consideração a tabela de Motivos de Estorno/Crédito:",
  opcoes: ["Caso o motivo seleccionado tenha a opção “Cria Novo Documento” activa, então é gerado um novo documento, este novo documento tem apenas o cabeçalho do documento preenchido, o utilizador terá de preencher manualmente as linhas que pretende corrigir", "Caso o motivo seleccionado tenha a opção “Cria Novo Documento” activa, então é gerado um novo documento constituído pelas linhas do documento origem. Estas linhas não podem ser alteradas", "Caso o motivo seleccionado tenha a opção “Cria Novo Documento” activa, então é gerado um novo documento constituído pelas linhas do documento origem. Estas linhas podem ser alteradas para corrigir os dados do documento origem", "A utilização de um motivo de estorno é facultativa pois trata-se apenas de uma informação"], correta: 2
}, {
  pergunta: "O débito de encargos com títulos aplica-se a:",
  opcoes: ["Letras descontadas e aceites.", "Letras descontadas e sacadas.", "Letras reformadas e recambiadas.", "Letras Sacadas e reformadas."], correta: 2
}, {
  pergunta: "Considere o tratamento de letras na Logística. Indique a opção que define a reforma de letra.",
  opcoes: ["Consiste na substituição da letra em causa por outra com vencimento posterior. O valor desta nova letra tem que ser sempre igual ao valor da letra original.", "Consiste na substituição da letra em causa por outra ou outras com vencimento posterior. No caso de originar mais que uma letra, o valor resultante da soma de cada letra tem que ser diferente da letra original devido à amortização mínima imposta por lei.", "Consiste na substituição da letra em causa por outra ou outras com vencimento posterior. No caso de originar mais que uma letra, o valor resultante da soma de cada uma tem que ser igual ao valor da letra original.", "Consiste na substituição da letra em causa por outra ou outras cujo vencimento seja o mesmo da letra original."], correta: 2
}, {
  pergunta: "Caracterize uma letra, seleccionado a definição correcta.",
  opcoes: ["A Letra, é um Título de crédito através do qual uma determinada entidade (sacado) ordena a outrem (o sacador) o pagamento de uma certa importância, a si ou a outra entidade (tomador), numa determinada data de vencimento.", "A Letra, é um Título de débito através do qual uma determinada entidade (o sacador) ordena a outrem (sacado) o recebimento de uma certa importância, a si ou a outra entidade (tomador), numa determinada data de vencimento.", "A Letra, é um Título de débito através do qual uma determinada entidade (o sacador) ordena a outrem (tomador) o pagamento de uma certa importância, a si ou a outra entidade (sacado), numa determinada data de vencimento.", "A Letra, é um Título de crédito através do qual uma determinada entidade (o sacador) ordena a outrem (sacado) o pagamento de uma certa importância, a si ou a outra entidade (tomador), numa determinada data de vencimento."], correta: 3
}, {
  pergunta: "Relativamente à opção \"Débito de Encargos\" disponível na Logística, indique opção certa:",
  opcoes: ["A opção de Débito de Encargos com Títulos, consiste na possibilidade de automaticamente após a emissão de um novo título, ser gerada no conta corrente da entidade em causa uma Nota de Débito com o valor dos encargos calculados.", "Nenhuma das opções está certa.", "O documento a considerar no débito automático é único e deve estar indicado nos \"Parâmetros da Empresa\" da Logística.", "O documento utilizado pela opção de Débito de Encargos é um documento de compra."], correta: 2
}, {
  pergunta: "Quando um movimento bancário do tipo “Débito” aumenta o saldo da conta bancária, isso significa que.",
  opcoes: ["Está a ser utilizada a perspectiva bancária, para o registo dos movimentos.", "Está a ser utilizada a perspectiva contabilística, para o registo dos movimentos.", "Os movimentos bancários estão configurados para serem integrados na contabilidade.", "Verificou-se uma conversão das contas bancárias, na passagem de ano."], correta: 1
}, {
  pergunta: "O mapa de Saldos em Conta Corrente permite ver a lista de cliente com saldos em dívida distribuído por intervalos com base na data de vencimento. Analise as seguintes afirmações assinalando a correcta:",
  opcoes: ["É possível seleccionar os documentos em análise.", "É possível efectuar a análise com base num intervalo de clientes.", "É possível indicar uma data de referência para realização da análise.", "Todas as respostas estão correctas."], correta: 3
}, {
  pergunta: "O que pode acontecer quando estiver a fazer uma factura de cliente e já existam adiantamentos na conta corrente dessa entidade?",
  opcoes: ["Nenhuma das opções apresentadas está correcta.", "O adiantamento apenas poderá ser regularizado quando se proceder à liquidação da factura.", "Os valores do adiantamento poderão ser deduzidos na respectiva factura, excluindo o valor de impostos", "Os valores do adiantamento poderão ser deduzidos na respectiva factura, incluindo o valor de impostos."], correta: 2
}, {
  pergunta: "Enquadre o tratamento de Retenções nas Contas Correntes da Logística e Tesouraria, indicando a resposta correcta:",
  opcoes: ["A aplicação apenas trata retenções de Estado e Outros Entes Públicos.", "A Retenção é definida por percentagem ou valor, sendo esta parametrização efectuada na tabela Tipos rendimento ou na ficha da entidade.", "A Retenção é definida por percentagem ou valor, sendo esta parametrização efectuada nos Parâmetros no Administrador.", "A Retenção é definida por percentagem, sendo esta parametrização efectuada nos Parâmetros no Administrador."], correta: 1
}, {
  pergunta: "Considere o seguinte cenário: A empresa presta um serviço sobre o que é efectuado uma retenção de 20%. Ora sabendo que a base incidência é de $ 100 e que o serviço é passível de Iva à taxa de 21%, indique qual o valor a receber pela empresa aquando do recebimento do serviço prestado.",
  opcoes: ["A empresa vai receber $ 121, que corresponde à base de incidência, deduzido da retenção e acrescido do imposto.", "A empresa vai receber $ 96,8, que corresponde à base de incidência, acrescido do imposto e deduzido da retenção.", "A empresa vai receber $ 96,8, que corresponde à base de incidência, deduzido da retenção e acrescido do imposto.", "A empresa vai receber $ 101, que corresponde à base de incidência, acrescido do imposto e deduzido da retenção."], correta: 3
}, {
  pergunta: "Considere as configurações necessárias para o cálculo de uma retenção, atendendo aos diversos contextos em que esta pode acontecer. Indique a opção certa.",
  opcoes: ["Quando a empresa adquire serviços sujeitos a retenção, e para que ela (a empresa) possa realizar a retenção deve, configurar os Parâmetros da Empresa seleccionando as opções “Contabilidade Organizada” e “ A empresa fornece serviços que podem estar sujeitos a retenção”.", "Quando a empresa adquire serviços sujeitos a retenção, e para que ela (a empresa) possa realizar a retenção deve, configurar os Parâmetros Empresa seleccionando a opção “Contabilidade Organizada” e os documentos devem ter origem no módulo de vendas. Para além disso, o fornecedor do documento deve estar configurado para efectuar a retenção e o(s) serviço(s) em causa deve(m) fazer retenção.", "Quando a empresa fornece serviços sujeitos a retenção, deve configurar os Parâmetros da Empresa seleccionando a opção “ A empresa fornece serviços que podem estar sujeitos a retenção” e deve configurar o cliente do documento para efectuar a retenção. O(s) serviço(s) em causa deve(m) estar configurados para fazer retenção e os documentos devem ter origem do módulo de vendas.", "Quando a empresa fornece serviços sujeitos a retenção, deve configurar os Parâmetros da Empresa seleccionando a opção “ Contabilidade Organizada”, e deve configurar o cliente do documento para efectuar a retenção. O(s) serviço(s) em causa deve(m) fazer retenção e os documentos devem ter origem do módulo de compras."], correta: 2
}, {
  pergunta: "As Retenções efectuadas a um Outro Credor, são devidas:",
  opcoes: ["Aquando do lançamento do Pendente nas Contas Correntes.", "Nenhuma das respostas está correcta.", "No momento da Liquidação do Pendente, tendo o utilizador que activar nessa altura a opção “Retenção”.", "No momento da Liquidação do Pendente ou no momento do registo, conforme configuração."], correta: 0
}, {
  pergunta: "Comente a seguinte frase, escolhendo a opção certa: “ As retenções calculadas pela Logística podem ser de vários tipos. Contudo, tratando-se de retenções fiscais, o valor retido é integrado na conta corrente da entidade EOEP que estiver definida no Tipo de rendimento utilizado para a retenção”",
  opcoes: ["A frase é falsa. A Logística e Tesouraria apenas permite efectuar retenções de IRPS e Retenções Gerais. Os valores retidos são sempre registos nas contas correntes das entidades a quem foi efectuada a retenção.", "A Frase é Falsa. As retenções podem ser de qualquer tipo. Porém, as retenções fiscais têm uma entidade que é o “Estado e Outros Entes Públicos” a favor de quem a retenção vai ser registada. Esta entidade é global ao sistema sendo por isso definida nos “Parâmetros da Empresa\" da Logística.", "A frase é inconclusiva não permitindo concluir a sua veracidade / falsidade.", "A frase é verdadeira. As retenções podem ser de qualquer tipo, sendo todas elas tratadas na Logística e Tesouraria no âmbito das funcionalidades existentes. Tratando-se de retenções fiscais, os valores retidos são integrados em contas correntes de entidades do tipo Estado e Outros Entes Públicos. Estas entidades são definidas nas tabelas “Tipos de Rendimento”."], correta: 0
}, {
  pergunta: "A funcionalidade de Custos Bancários do módulo de Logística e Tesouraria, permite gerir de forma automática os custos bancários suportados, isto é, cobrados pelo banco. Neste contexto indique qual das seguintes opções é a correcta:",
  opcoes: ["Os custos bancário suportados dependem da criação da rubrica de contas correntes a ser usada nos custos bancários, da configuração da conta bancária (separador Encargos Bancários), e da configuração do documento de conta corrente (separador Tesouraria) onde é indicado quais os custos bancários a que está sujeito e a forma como eles são criados na tesouraria", "Os custos bancário suportados dependem da criação da rubrica de contas correntes a ser usada nos custos bancários, da configuração da conta bancária (separador Encargos Bancários), da configuração do documento de conta corrente (separador Tesouraria) onde é indicado quais os custos bancários a que está sujeito e a forma como eles são criados na tesouraria, e por último, da configuração da ficha da respectiva entidade", "Os custos bancário suportados dependem da criação da rubrica de contas correntes a ser usada nos custos bancários, da configuração da conta bancária (separador Encargos Bancários), da configuração do documento de conta corrente (separador Tesouraria) onde é indicado quais os custos bancários a que está sujeito e a forma como eles são criados em tesouraria, e por último, da configuração nos parâmetros de Empresa no Administrador", "Todas as respostas estão incorrectas"], correta: 0
}, {
  pergunta: "Em dd/mm/aaaa a conta do banco xpto apresentava um saldo contabilístico de + $ 4.430. No entanto, o extracto recebido do banco para essa data apresentava um saldo de + $ 4.730. Sabendo que esta diferença foi originada pela não introdução de um movimento na aplicação e considerando que está a ser usada a perspectiva contabilística, indique como pode ser resolvido este problema para efectuar a reconciliação.",
  opcoes: ["É possível a introdução de um movimento de diferença credor no valor de $ 300, através de um documento de tesouraria ou no “editor de reconciliação bancária”.", "É possível a introdução de um movimento de diferença devedor no valor de $ 300, através de um documento de tesouraria ou no “editor de reconciliação bancária”.", "É possível a introdução de um movimento de diferença devedor no valor de $ 300, através de um novo documento de tesouraria.", "Introdução de um movimento de diferença credor no valor de $ 4.730."], correta: 1
}, {
  pergunta: "Que opção da aplicação possibilita uma negociação dos juros de remuneração das contas DO com base nos respectivos saldos médios?",
  opcoes: ["\"Saldos Médios”.", "“Painel de Bordo”.", "Nenhuma das opções está correcta.", "“Calculadora de Juros”."], correta: 3
}, {
  pergunta: "O mapa de controlo bancário permite:",
  opcoes: ["Analisar os saldos contabilísticos e saldos médios e no mês e ano seleccionados para análise.", "Analisar os valores acumulados dos Itens de Tesouraria.", "Saber o estado das caixas.", "Saber o extracto dos movimentos bancários ocorridos num período seleccionado."], correta: 0
}, {
  pergunta: "A comissão de Imobilização só pode ser aplicada nas contas do tipo:",
  opcoes: ["Cartões de crédito.", "Contas correntes.", "Depósitos a prazo/aplicações financeiras.", "Títulos."], correta: 2
}, {
  pergunta: "Em visão bancária, os juros capitalizados irão aparecer sempre a:",
  opcoes: ["Crédito, pois é um movimento credor na visão activa.", "Débito, pois é um movimento devedor na visão activa.", "Depende da configuração do documento de tesouraria.", "Depende da configuração da conta."], correta: 0
}, {
  pergunta: "No fecho de uma conta caixa é possível:",
  opcoes: ["Configurar o documento de fecho para integrar na Contabilidade.", "Debitar a conta de depósitos à ordem associada à conta caixa por um valor que é calculado de acordo com os recebimentos por multibanco.", "Indicar o montante de fundo maneio a considerar na próxima abertura.", "Reconciliar os movimentos da conta caixa e emitir o talão de depósito."], correta: 3
}, {
  pergunta: "O programa permite liquidar ou capitalizar uma aplicação financeira. Caracterize estas funcionalidades, seleccionando a opção correcta.",
  opcoes: ["A liquidação permite criar uma nova aplicação financeira com o valor dos juros calculados.", "A liquidação permite transferir o valor da aplicação e dos juros para uma Conta Corrente Caucionada.", "Com a capitalização é criada automaticamente uma nova aplicação financeira com o valor inicial adicionado do juro.", "Com a capitalização o valor do juro é transferido para a conta caixa e é criada uma nova aplicação financeira."], correta: 2
}, {
  pergunta: "Tenha em atenção o tratamento das contas caixa e indique a opção certa:",
  opcoes: ["O fecho das contas caixa permite saber qual foi o utilizador que efectuou o fecho", "O fecho de uma conta caixa é uma operação irreversível ao nível da Logística. Qualquer anulação ao fecho deverá ser efectuado no Administrador.", "É possível analisar diários de contas caixa a partir da Logística.", "A Logística e Tesouraria não faz a gestão de contas “caixa cheques pré - datados”."], correta: 0
}, {
  pergunta: "Caracterize o Plano Previsional de Tesouraria indicando a opção correcta.",
  opcoes: ["Através do plano previsional de tesouraria é possível antecipar aplicações financeiras.", "Nenhuma das opções está correcta.", "O plano previsional de tesouraria permite efectuar controlo dos recebimentos realizados a partir do Primavera Enterprise Portals.", "O plano previsional de tesouraria permite transferir documentos entre as rubricas."], correta: 3
}, {
  pergunta: "Ao criar um documento de Tesouraria, posso:",
  opcoes: ["Definir se pretendo ver a informação num banco agrupada por Mês de lançamento.", "Forçar a sua utilização apenas para um Banco.", "Indicar movimentos automáticos para o mesmo, mas sempre sem definir valores, os quais terão que ser inseridos na altura do lançamento.", "Indicar que o mesmo será enviado por e-mail cada vez que o grave."], correta: 0
}, {
  pergunta: "O Resgate de aplicações financeiras pode ser realizado:",
  opcoes: ["Na introdução de movimentos de tesouraria.", "No extracto de conta.", "No extracto do documento.", "No plano previsional de tesouraria."], correta: 0
}, {
  pergunta: "Enquadre a integração dos documentos da Logística na Contabilidade, identificando opção certa.",
  opcoes: ["É possível efectuar a integração dos movimentos de compras, vendas e stocks por armazém. Existe o respectivo token, pelo que, as contas de vendas, compras e mercadorias podem ser organizadas por armazém, permitindo que os movimentos registados nos diversos armazéns sejam integrados nas respectivas contas do Plano de Contas.", "É possível efectuar a integração dos movimentos por país e por tipo de pessoal. Por exemplo, pode-se organizar a conta de vendas por país, assim como as contas de vendedores por tipo de pessoal (pertencente ao quadro e além quadro).", "Não é possível efectuar a integração dos movimentos de vendas por secções dado que não existe o respectivo token. Consequentemente, a conta de vendas não podem ser organizadas por secções nem os movimentos registados nas diversas secções podem ser integrados nas respectivas contas do Plano de Contas.", "Nenhuma das opções está correcta."], correta: 0
}, { pergunta: "As aplicações financeiras podem ser integradas na Contabilidade:", opcoes: ["Apenas se o registo da aplicação financeira for realizada a partir das Contas Correntes.", "Desde que seja definida a respectiva configuração no Administrador.", "Mas os juros calculados devem ser integrados através do documento de liquidação da aplicação.", "Sempre que a rubrica bancária estiver configurada para integrar na Tesouraria e posteriormente na Contabilidade."], correta: 3 }, {
  pergunta: "Na integração on-line de documentos da Logística para a Contabilidade é possível criar classes de IVA?",
  opcoes: ["A criação de novas classes de IVA pode ser realizada em qualquer opção que permita aceder ao Plano de IVA.", "Não é possível criar novas classes de IVA através do editor de integração dos movimentos na Contabilidade.", "Não, porque essa função só está disponível na Contabilidade.", "Sim, desde que na coluna das classes de IVA indique uma classe de IVA que não existe no Plano de IVA."], correta: 1
}, {
  pergunta: "Indique se é possível integrar os lançamentos contabilísticos de vendas numa situação em que a conta “71 - vendas” está dividida por secções.",
  opcoes: ["É possível desde que esteja seleccionada a opção “Utiliza secções de venda da Logística”.", "É possível, desde que o token relativo às secções de venda esteja devidamente configurado.", "Não é possível porque não existe nenhum token que permita essa desagregação.", "Não é possível porque não existe nenhum token relativo às secções de venda."], correta: 0
}, {
  pergunta: "Indique a opção correcta.",
  opcoes: ["A integração das vendas dos artigos do tipo ´Imobilizado´ na contabilidade utiliza os tokens referidos nas alíneas anteriores.", "A opção ´Deduz IVA´ está disponível para os artigos que sejam do tipo ´imobilizado´ e pode influenciar o valor sujeito a amortização/reintegração a considerar na ficha dos bens de Imobilizado.", "O IVA associado aos artigos do tipo ´Imobilizado´ é integrado na Contabilidade utilizando o Tokem ´IVA´.", "O valor dos artigos do tipo ´Imobilizado´ é integrado na contabilidade utilizado o token ´MER´."], correta: 0
}, {
  pergunta: "Um documento de alienação de imobilizado registado na Logística, só poderá ser integrado nos Equipamentos e Activos se:",
  opcoes: ["Esse bem não estiver amortizado ou reintegrado no período em que se pretende registar o documento de alienação.", "O bem de imobilizado já estiver totalmente amortizado ou reintegrado e o documento estiver configurado para efectuar a integração.", "O documento estiver configurado para integrar no Imobilizado.", "Se existir uma conta corrente de fornecedores de imobilizado para integrar o documento de alienação."], correta: 0
}, {
  pergunta: "Supondo que se quer integrar movimentos de qualquer módulo do ERP para a Contabilidade, seleccione a opção correcta:",
  opcoes: ["É possível configurando a ligação na própria aplicação.", "É possível efectuar a integração, configurando a ligação no administrador e realizando a exportação através da opção ´Movimentos Diferidos´.", "É possível configurando a ligação no administrador e realizando a exportação através dos “serviços” do Administrador.", "É possível mas só na “passagem de ano”."], correta: 0
}, {
  pergunta: "Suponha que pretende integrar movimentos na Contabilidade. Seleccione a opção correcta:",
  opcoes: ["É possível integrar movimentos procenientes da Logística, Recursos Humanos e Equipamentos e Activos.", "Só é possível integrar movimentos provenientes da Logística.", "É possível mas só na “passagem de ano”.", "Não é possível integrar movimentos na Contabilidade."], correta: 0
}, {
  pergunta: "Para integrar os pedidos de reembolso de IVA nas contas correntes da Logística deve:",
  opcoes: ["Activar a opção no Administrador, configurar o documento de integração e realizar o apuramento do IVA.", "Activar essa opção na Ligação à Contabilidade.", "Indicar a entidade associada na Logística.", "Nenhuma das opções está correcta."], correta: 0
}, {
  pergunta: "A informação ´Deduz Iva´ da ficha de artigo, é utilizado quando:",
  opcoes: ["O artigo for do tipo imobilizado e se pretende considerar ou não o IVA para cálculo do valor sujeito a amortização.", "O artigo for do tipo mercadorias e se pretende registar compras desse artigo no mercado intracomunitário com integração do movimento na Contabilidade.", "O artigo for do tipo, matérias-primas e se pretende realizar a composição das matérias-primas em produtos acabados.", "O artigo for sujeito a inventariação e não se pretende considerar o I.V.A. nos acertos de inventário."], correta: 0
}, {
  pergunta: "Considere que determinada empresa trabalha exclusivamente com o mercado nacional. Indique que configurações devem ser definidas para integrar os documentos de venda, do tipo “FA - Factura”, considerando que o Plano de Contas ainda mantém referência ao mercado nacional nas contas de cliente.",
  opcoes: ["Neste caso, o token “D”, correspondente aos diferentes tipos de mercado, não pode ser retirado porque a sua posição na configuração da conta de integração é variável.", "O token “D”, correspondente aos diferentes tipos de mercado pode ser retirado, desde que seja substituído pelo número que permite integrar os movimentos no Plano de Contas.", "O token “D”, correspondente aos diferentes tipos de mercado, pode ser mantido na configuração do movimento contabilístico associado ao documento “FA”, mas apenas se a tabela “Tipos de Mercado” não estiver preenchida.", "Os números correspondentes aos diferentes tipos de mercado não são visíveis nem controláveis pelo utilizador. Por isso, a diferenciação dos tipos de mercado é feito pelo sistema, não existindo nenhum token para o efeito."], correta: 0
}, {
  pergunta: "Enquadre a configuração da ligação dos Documentos Bancários à Contabilidade, seleccionado a resposta certa.",
  opcoes: ["A parametrização da ligação à Contabilidade é efectuada exclusivamente no “Administrador”. A “Logística” permite efectuar a integração dos documentos bancários, através da opção “Movimentos Diferidos”.", "A parametrização desta ligação é efectuada no “Administrador”, a partir da opção “Parâmetros da Logística”. Nesta opção deve indicar-se qual a perspectiva a utilizar (Bancária/Contabilística) nos lançamentos contabilísticos.", "Esta configuração é efectuada na opção “Movimentos Bancários” da “Logística” e no “Administrador”. A “Ligação à Contabilidade” definido no “Administrador” permite estabelecer quais os documentos têm ligação à contabilidade, quais as contas a movimentar e qual o tipo de ligação pretendida (On-line/Off-Line).", "Na Logística deve ser indicada qual a “Rubrica Bancária” a movimentar em cada documento. No “Administrador” são indicadas as contas da contabilidade e a perspectiva a utilizar na integração dos movimentos."], correta: 0
}, {
  pergunta: "Considere que determinada empresa está no regime mensal de IVA e que integra na Contabilidade, utilizando o tipo de ligação “On-line”, todos os documentos emitidos na Logística. Indique se o IVA associado a um documento que foi registado no mês ´n´, pode ser apurado no mês n+1.",
  opcoes: ["Não, porque o programa não tem essa funcionalidade.", "Nenhuma das opções está correcta.", "Sim. Mas este procedimento não deve ser aplicado se a empresa utilizar o sistema de inventário permanente.", "Só se a empresa estiver em regime de Isenção de IVA."], correta: 0
}, { pergunta: "Enquadre o tratamento das integrações da Logística com a Contabilidade seleccionando a opção certa:", opcoes: ["A integração dos documentos da Logística para a classe 9 da Contabilidade, pode ser efectuada de duas formas, a saber: (1) seleccionando a opção “Efectuar reflexão para a analítica ao integrar na contabilidade”; (2)indicar na grelha de configuração dos lançamentos as respectivas contas da classe 9.", "As integrações dos movimentos para o plano funcional obriga a associar cada artigo e serviço a uma determinada função do plano funcional.", "Para um determinado documento, é possível utilizar simultaneamente as classes de IVA definidas na Configuração de Integração e as Classes de IVA do Plano de Contas. Esta situação garante uma maior abrangência da solução face às especificidades de integração.", "Uma vez que a recolha dos valores de IVA para as declarações periódica e anual são efectuadas pelas classes de IVA, as integrações devem ser configuradas para utilizar as classes de IVA do Plano de Contas ou para utilizar as classes de IVA do Administrador. Qualquer uma destas configurações garante uma recolha correcta dos valores de imposto, bem como uma integração on-line sem intervenção do utilizador."], correta: 0 }, {
  pergunta: "A informação “Deduz IVA” da ficha do artigo, pode ser utilizado quando:",
  opcoes: ["Nenhuma das opções é verdadeira.", "O artigo é do tipo mercadorias e se pretende registar compras desse artigo no mercado intracomunitário com integração do movimento na contabilidade.", "O artigo for do tipo imobilizado e se pretende ou não considerar o Iva para o cálculo do valor sujeito a amortização.", "O artigo for do tipo matérias-primas e se pretende realizar a composição das matérias-primas em produtos acabados com inclusão ou exclusão do Iva."], correta: 0
}, {
  pergunta: "Determinada empresa configurou um documento de compra para não actualizar o preço de custo médio dos artigos. Se essa empresa tiver uma ligação on-line à contabilidade, ao gravar esse documento o Token “PCM - Valor a preço de custo médio” não será calculado nem integrado no movimento contabilístico. Pronuncie-se sobre este caso, seleccionando a opção correcta.",
  opcoes: ["A frase está correcta, porque o programa permite configurar o tipo de informação a actualizar e a integrar na contabilidade, encontrando-se nesta situação, a informação sobre “PCM”.", "A frase está errada, porque mesmo que a actualização do preço de custo médio dos artigos não estiver seleccionada na configuração do documento de compra, o movimento contabilístico poderá e deverá ser efectuada.", "A frase está errada, porque o preço de custo médio é utilizado para a valorimetria das existências em armazém e não para integrações dos movimentos na contabilidade.", "A frase está errada, porque o token “PCM” só pode ser utilizado na integração dos documentos de venda e de stocks."], correta: 0
},
];


/* ======================
   ESTADO
====================== */
let current = 0;
let answers = new Array(questions.length).fill(null);
let timeLeft = TOTAL_TIME;
let timer = null;
let finished = false;

/* Modal instance */
let finishModal = null;

/* ======================
   INIT
====================== */
document.getElementById("qTotalTxt").textContent = questions.length;

/* Cache botões */
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnFinish = document.getElementById("btnFinish");

/* Wire modal confirm */
document.addEventListener("DOMContentLoaded", () => {
  const btnConfirm = document.getElementById("confirmFinishExam");
  if (btnConfirm) {
    btnConfirm.addEventListener("click", () => {
      if (finishModal) finishModal.hide();
      finishQuiz("manual");
    });
  }
});

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

/* ======================
   MODAL TERMINAR
====================== */
function openFinishModal() {
  if (finished) return;

  const el = document.getElementById("modalFinishExam");
  if (!el) {
    finishQuiz("manual");
    return;
  }

  finishModal = finishModal || new bootstrap.Modal(el, { backdrop: "static", keyboard: false });
  finishModal.show();
}

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

  // ✅ Voltar escondido na 1ª
  if (btnPrev) btnPrev.classList.toggle("d-none", isFirst);

  // ✅ Seguinte escondido na última
  if (btnNext) btnNext.classList.toggle("d-none", isLast);

  // ✅ Terminar sempre visível
  if (btnFinish) btnFinish.classList.remove("d-none");
}

function updateHint() {
  const has = answers[current] !== null;
  document.getElementById("hintTxt").innerHTML = has
    ? '<div class="d-flex align-items-center gap-1 text-success"><span class="material-symbols-rounded fs-6">check</span> Resposta guardada. Podes voltar e alterar quando quiseres.</div>'
    : '<div class="d-flex align-items-center gap-1"><span class="material-symbols-rounded fs-6">info</span> Ainda não respondeu esta pergunta.</div>';
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
