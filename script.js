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
const questions = [
  { pergunta: "Para que um documento de venda seja automaticamente liquidado, deve:", opcoes: ["Configurar a ficha do documento indicando que \"Efectua liquidação automática\" e qual o documento que é gerado.", "Configurar o documento como \"documento de venda a dinheiro\".", "Configurar o documento para que tenha ligação a \"Bancos\".", "Os documentos de vendas não podem ser automaticamente liquidados. Esta funcionalidade só está disponível para documentos de contas correntes."], correta: 0 },
  { pergunta: "Enquadre o “Assistente de conversão de documentos” disponível na Logística, indicando a opção certa:", opcoes: ["Em caso de rupturas de stocks na conversão de documentos, o “Assistente de conversão de documentos” só executa a conversão se nos “Parâmetros da Logística e Tesouraria” no Administrador, estiver configurado para não bloquear a operação.", "Na conversão de documentos, o assistente utiliza sempre as séries por defeito dos documentos.", "Na conversão de guias de remessa de clientes, é sugerido o documento destino que está indicado no fluxo documental.", "Na conversão de guias de remessa de clientes, é sugerido o documento destino que está indicado nos “Parâmetros da Logística e Tesouraria” no Administrador."], correta: 0 },
  { pergunta: "Considere o tratamento dos vendedores na Logística e indique a opção certa:", opcoes: ["Nenhuma das opções está correcta.", "Os vendedores podem ser associados a independentes da Gestão de Recursos Humanos através das “Entidades Associadas”. Esta associação permitirá efectuar uma gestão integrada das contas correntes de vendedores e independentes.", "Os vendedores são definidos na ficha dos clientes e sugeridos nos documentos de vendas. Esta sugestão está contudo dependente da existência de chefes de vendedores. Nestes casos, um vendedores será sempre substituído pelo seu chefe, para efeitos de cálculo de comissões e de registo dos documentos.", "Os vendedores são definidos na ficha dos clientes e sugeridos nos documentos de vendas. Esta sugestão está contudo dependente das regras de comissões de vendas para vendedores que possam existir."], correta: 0 },
  { pergunta: "Para que qualquer documento de facturação seja disponibilizado no POS deve:", opcoes: ["Associar os documentos pretendidos às fichas dos pontos de venda.", "Associar os talões de POS aos documentos pretendidos.", "Na configuração das séries do documento, deve estar seleccionanda a opção \"Utilizado em POS\".", "Nenhuma das opções esta correcta."], correta: 0 },
  { pergunta: "Seleccione a opção que caracteriza o tratamento das regras de descontos e preços.", opcoes: ["As regras de descontos e preços podem ser associadas aos perfis de utilizadores.", "As regras podem ser definidas para que cada percentagem de desconto seja aplicada por intervalo de vendas.", "As regras são sempre sugeridas de acordo com a antiguidade dos pendentes.", "Sempre que existir mais do que uma regra, a aplicação acumulará os descontos até ao limite máximo de 100%."], correta: 0 },
  { pergunta: "Para aprovar um documento de Venda do tipo “Cotação” devemos:", opcoes: ["Editar o orçamento, e alterar directamente o Estado para “Aprovado”.", "Não é possível efectuar o pretendido.", "No Administrador, efectuar o pretendido através do utilitário “Aprovação Documentos”.", "Validar se o documento tem algum estado fixado na sua ficha, caso tenha, deve-se remover o estado, e posteriormente aprová-lo através da opção de Conversão de Documentos no Editor de Vendas."], correta: 0 },
  { pergunta: "Indique a frase certa considerando o tratamento de circuitos documentais:", opcoes: ["As Encomendas de Clientes apenas podem ser satisfeitas utilizando Facturas ou Guias de Transporte.", "Nenhuma das frases está correcta.", "Os documentos do tipo \"Cotação\" podem ser convertidos independentemente do seu estado.", "Um documento \"fechado\" pode ser editado e alterado."], correta: 0 },
  { pergunta: "A margem bruta de vendas de um documento de venda calcula-se da seguinte forma:", opcoes: ["Preço de venda acrescido de descontos e deduzido de preço de custo médio da mercadoria e preço de custo padrão do serviço.", "Preço de venda líquido menos preço de custo médio de cada linha do documento de venda.", "Preço de venda menos preço de custo último de cada linha do documento de venda.", "Total de custos do documento a dividir pelo total de mercadorias do documento de venda."], correta: 0 },
  { pergunta: "Considere o tratamento de séries na Logística e indique a opção certa:", opcoes: ["Os documentos de pagamentos a independentes de RHP, integrados na Logística utilizam a série por defeito.", "Uma série inactiva é uma série que não permite consultar os documentos já emitidos nessa série.", "Uma série que tenha IVA incluído faz com que, no registo de um documento de venda, o preço líquido do artigo seja obtido expurgando o valor do IVA do preço de venda definido na ficha do artigo. Neste caso, não estamos a considerar outras variáveis que possam influenciar o preço líquido.", "Uma série sem IVA incluído é uma série onde só podem ser registados artigos isentos de IVA."], correta: 0 },
  { pergunta: "A licença da Logística está localizada:", opcoes: ["Na pasta \"APL\" do Sistema de Gestão PRIMAVERA.", "Na pasta \"Config\\LE\" ou \"Config\\LP\" do Sistema de Gestão PRIMAVERA.", "Na pasta \"Dados\\LE\" ou \"Dados\\LP\" do Sistema de Gestão PRIMAVERA.", "Nenhuma das opções está correcta."], correta: 0 },
  { pergunta: "Relativamente às configurações definidas nos “Parâmetros\" da Logística e Tesouraria no Administrador, indique qual das seguintes opções está correcta.", opcoes: ["A numeração dos avisos de vencimentos emitidos é mantida nas preferências da Logística e Tesouraria.", "É possível configurar os “Parâmetros\" para que a seja emitido um alerta quando existirem campos do utilizador na base de dados \"Tempdb.mdf\".", "Na opção “Inventário” pode ser definido o arredondamento das casas decimais do P.C.M., assim como o comportamento em caso de ruptura de stocks.", "Nos \"Parâmetros\" é possível definir o sistema contabilístico a utilizar na integração de movimentos de tesouraria."], correta: 0 },
  { pergunta: "O Encerramento de Períodos:", opcoes: ["É efectuado documento a documento na Logística.", "É efectuado no Administrador, apenas por tipo de documento (Venda, Stocks, etc.).", "É efectuado no Administrador, por “Tipo de Documento” (Venda, Stocks, etc.) ou Documento a Documento.", "É efectuado nos tipos de documentos de venda ou compra na Logística."], correta: 0 },
  { pergunta: "Enquadre o tratamento das autorizações indicando a frase correcta.", opcoes: ["A autorização apenas pode ser inserida no fluxo caso existam condições definidas.", "Cada autorização só poderá estar associada a um único utilizador.", "É possível definir autorizações em cascata bem como associar múltiplas assinaturas a um determinado processo de autorização.", "Os utilizadores conseguem visualizar os documentos pendentes para autorização. Contudo, a autorização está restringida de acordo com o fluxo seleccionado."], correta: 3 },
  { pergunta: "Indique a frase certa.", opcoes: ["A Autorização utilizada nos fluxos de documentos não é controlada via Log da aplicação.", "Não é possível definir autorizações em cascata, nem associar múltiplas assinaturas a um determinado processo de autorização.", "Para que um determinado documento siga um fluxo não é necessário que na altura da criação do documento se identifique o fluxo que pretende seguir.", "Uma Autorização pode ser anulada mesmo que existam documentos a serem liberados/aprovados."], correta: 1 },
  { pergunta: "Indique a frase errada", opcoes: ["As Autorizações/Condições nunca podem ser o início nem o fim do fluxo.", "O documento não pode ser gravado se houver linhas inseridas manualmente no documento e, este, não for o início de um fluxo.", "O fluxo tem sempre de ter um documento inicial e um estado terminal.", "Um documento associado a um fluxo e transformado, pode depois ser associado a um outro fluxo diferente e ser novamente transformado."], correta: 3 },
  { pergunta: "A Logística permite efectuar a gestão de fluxos documentais. Assinale a afirmação correcta", opcoes: ["A criação de um fluxo documental é realizada na configuração dos documentos, mas limitada a cinco fluxos por tipo de documentos.", "A criação de um fluxo documental é realizada na ficha de configuração dos documentos.", "A criação de um fluxo documental é realizada nos parâmetros da Logística e Tesouraria do Administrador.", "A criação de um fluxo documental é realizada nos parâmetros da Logística e Tesouraria, mas alterável na configuração dos documentos."], correta: 2 },
  { pergunta: "Indique qual o preço unitário de um determinado artigo sugerido na emissão de facturas de compras.", opcoes: ["O PVP associado ao cliente a facturar.", "O Último Preço da Compra efectuada do artigo ao fornecedor actual no caso de já terem sido efectuadas compras para este fornecedor.", "Sempre o Preço Custo Implícito (P.C.I.) da última compra efectuada do artigo.", "Sempre o Preço de Custo Médio (P.C.M.) do artigo."], correta: 1 },
  { pergunta: "Enquadre o assistente de \"Apoio à Encomenda”, seleccionando a opção correcta.", opcoes: ["As quantidades a encomendar são sugeridas com base na comparação entre o stock actual e o stock de reposição ou de ruptura. Contudo, o utilizador pode ainda seleccionar a quantidade económica.", "Não é possível alterar as quantidades a encomendar calculadas pela aplicação.", "Não é possível utilizar a quantidade económica de encomenda, em vez da quantidade efectivamente necessária.", "No caso dos artigos compostos, são sempre analisadas as necessidades de stock dos componentes e não do próprio composto."], correta: 0 },
  { pergunta: "A distribuição de descontos e encargos pode ser realizada de acordo com o critério:", opcoes: ["Peso Total da Linha, tendo como base o peso da linha relativamente ao somatório do peso de todas as linhas. O peso de cada linha corresponde ao peso do artigo, definido na sua ficha.", "Quantidade da Linha, tendo como base a quantidade da linha relativamente ao stock actual de cada artigo.", "Valor da Linha, tendo como base o valor do documento relativamente ao somatório do valor de todos os documentos seleccionados.", "Volume Total da Linha, tendo como base o volume da linha relativamente ao total do documento. O volume da linha é definido no documento de registo do encargo."], correta: 2 },
  { pergunta: "Enquadre a funcionalidade de conferência de compras, indicando a opção correcta.", opcoes: ["A configuração de qual o documento de diferença a gerar é realizada no administrador.", "Além de reflectir caso existam diferenças de valor entre o documento origem e o documento destino é possível lançar no editor de conferência uma diferença superior a considerada no documento destino.", "É possível realizar a conferência a qualquer tipo de documento.", "Reflecte na conta corrente do fornecedor só as diferenças de valor entre o documento origem e o documento destino não sendo possível lançar no editor de conferência uma diferença superior a considerada no documento destino."], correta: 3 },
  { pergunta: "As autorizações podem estar associadas aos seguintes tipos de documentos:", opcoes: ["Compras.", "Conta Corrente e Compras.", "Conta Corrente e Vendas.", "Vendas."], correta: 1 },
  { pergunta: "Os fluxos documentais existentes na Logística são aplicados a:", opcoes: ["A todos os tipos de documentos.", "Aos documentos de Compras e Contas Correntes.", "Aos documentos de Vendas e Compras.", "Aos documentos de Vendas e Contas Correntes."], correta: 2 },
  { pergunta: "Na Logística é possível efectuar a gestão de fluxos documentais. Nestes fluxos é possível introduzir autorizações de forma a condicionar a transformação de documentos de Compras. Quais os passos para efectuar a criação de autorizações?", opcoes: ["Criar os grupos de utilizadores nas tabelas do ERP Primavera e depois criar as autorizações nos parâmetros do Administrador.", "Criar as autorizações nos parâmetros da Logística e Tesouraria.", "Definir utilizadores no sistema e criar grupos de utilizadores nas tabelas do ERP Primavera.", "Definir utilizadores no sistema, criar grupos de utilizadores nas tabelas do ERP Primavera e criar as autorizações nos parâmetros do Administrador."], correta: 3 },
  { pergunta: "Indique a resposta certa:", opcoes: ["Apenas podemos definir 3 Dimensões em cada ficha de Artigo.", "As Dimensões são criadas nos Utilitários da aplicação.", "As Rubricas das Dimensões são criadas nos Utilitários da aplicação.", "Os códigos das Rubricas, são sugeridos automaticamente pela aplicação obedecendo a uma regra de “CódigoDimensão” + “Numerador”: p.ex. TMP001, TMP002, etc..."], correta: 0 },
  { pergunta: "Considere o seguinte cenário: O artigo X é movimentado em \"UN - Unidades\". Porém, as compras são feitas em caixas de 10 unidades. Indique qual a opção que permite tratar este caso.", opcoes: ["A ficha do artigo deve ter a unidade base \"UN - Unidades\" e o factor de conversão deve ser \"10\". Nas compras, deve escolher a unidade base.", "A ficha do artigo deve ter a unidade base \"UN - Unidades\". Deve criar uma unidade (por exemplo, \"Cx 10 - Caixas de 10 unidades) que converta uma caixa em 10 unidades. Nas compras, deve escolher a unidade criada.", "Deve criar uma unidade qualquer e indicar o factor de conversão \"10\". Na ficha do artigo, deve indicar a unidade criada como sendo a unidade base.", "Nenhuma das opções é correcta."], correta: 1 },
  { pergunta: "No processo de Preparação de Inventário:", opcoes: ["O utilizador pode criar novos filtros.", "O utilizador pode filtrar artigos por família e sub-família.", "O utilizador pode filtrar artigos por Lote.", "O utilizador pode filtrar artigos por preço de custo médio."], correta: 1 },
  { pergunta: "Considerando o tratamento das unidades alternativas, indique a opção correcta:", opcoes: ["A conversão entre unidades apenas poderá ser realizada com base no \"factor\" de conversão definido na unidade.", "A definição das unidades de conversão pode ser efectuada com base em campos do utilizador.", "A valorização dos artigos pelo preço de custo médio pode ser realizada em qualquer unidade. Para o efeito é necessário definir a relação de conversão entre as unidades alternativas e a unidade base.", "Para criar a ficha de um artigo sem a unidade base definida deve ser desactivada essa validação no Administrador."], correta: 0 },
  { pergunta: "É possível alterar automaticamente a descrição do artigo na altura da facturação?", opcoes: ["Não é possível.", "Sim, se o cliente tiver o idioma configurado na ficha e se o idioma estiver também configurado na ficha do artigo com outra descrição.", "Sim, se o cliente tiver o idioma configurado na ficha e se o idioma estiver também configurado na ficha dos países com outra descrição.", "Sim, se o cliente tiver o país diferente do original."], correta: 1 },
  { pergunta: "Caracterize as operações realizadas pelos documentos de entradas em stocks e de stocks iniciais, seleccionando a opção correcta.", opcoes: ["Nenhuma das opções está correcta.", "O documento de entrada de stocks actualiza a quantidade de stock actual do artigo, colocando o stock actual do artigo igual ao stock definido no documento.", "O documento de stock inicial elimina a quantidade de stock actual do artigo, actualizando essa informação de acordo com as quantidades definidas e à data do documento.", "O documento de stock inicial não pode ser configurado para actualizar o preço de custo médio."], correta: 0 },
  { pergunta: "Considere o seguinte cenário: Foi realizada a primeira compra de 1 unidade do artigo X e de 10 unidades do artigo Y ao preço unitário líquido de $ 2000 e $ 200, respectivamente.Sabendo que o artigo X tem um volume de 200 e que o artigo Y não tem volume definido calcule o P.C.M. do artigo X e Y após a afectação de $ 100 de encargos, tendo estes encargos sido distribuídos em função do volume.", opcoes: ["O PCM do artigo X é $ 2000 e o PCM do artigo Y é $ 200.", "O PCM do artigo X é $ 2050 e o PCM do artigo Y é $ 250.", "O PCM do artigo X é $ 2100 e o PCM do artigo Y é $ 200.", "O PCM do artigo X é $ 2200 e o PCM do artigo Y é $ 200."], correta: 2 },
  { pergunta: "Reflicta sobre a facturação em prestações, no módulo de projectos:", opcoes: ["É possível indicar o valor fixo ou a percentagem a pagar em cada prestação.", "Temos até 4 prestações possíveis (1-Sinal, 2-Reforço de sinal, 3- Acabamentos, 4-Entrega ao Cliente).", "Temos até 3 prestações possíveis (1-Sinal, 2-Reforço de sinal, 3-Entrega ao Cliente).", "Na prestação Sinal é sugerido o valor de 10%."], correta: 0 },
  { pergunta: "Os estados de projectos têm obrigatoriamente um nível associado:", opcoes: ["Este nível pode ser definido como exclusivo para um projecto/documento.", "Implicam um fluxo de documentos/estados.", "Influencia de forma direta a informação sobre datas/estados no painel de projeto.", "Registam no histórico todos os documentos que se estejam configurados para efectuar a mudança de estado."], correta: 2 },
  { pergunta: "A associação de um projecto a um documento de venda é possível em que circunstâncias?", opcoes: ["Por documento, quando configurado no cabeçalho no documento.", "Por Cliente, na associação desse cliente a um projeto na ficha do cliente.", "Por Cliente, na associação desse cliente a um projecto na ficha do projecto.", "Por linha de documento, independentemente do cliente ou tipo de documento."], correta: 3 },
  { pergunta: "De forma a influenciar os proveitos de um projecto, através de Documentos de Conta Corrente devemos:", opcoes: ["Apenas a fatura manual de conta corrente pode ser configurada como proveito na análise dos projetos.", "É obrigatório configurar o documento de conta corrente como proveitos na classe analítica de projectos.", "Não é possível influenciar projectos com documentos de conta corrente.", "Temos que configurar os documentos de conta corrente como compras."], correta: 1 },
  { pergunta: "A facturação de prestações nos projetos tem de ter uma periodicidade:", opcoes: ["Anual", "Mensal", "É definida pelo utilizador.", "O conceito de periodicidade não tem tratamento na facturação de prestações nos projetos."], correta: 3 },
  { pergunta: "Reflicta sobre a orçamentação de projectos.", opcoes: ["É possível actualizar o orçamento de custos face ao aumento do PCM dos artigos envolvidos.", "É possível orçamentar apenas alguns artigos de um único documento.", "Alguns tipos de artigo podem ser exclusivamente para orçamentos de projectos.", "O orçamento de proveitos pode ser feito com base num documento do tipo encomenda de cliente."], correta: 3 },
  { pergunta: "Considerando a possibilidade de controlar o estado de um Projecto, indique qual a forma de transitar o projecto entre vários estados:", opcoes: ["Ao criar o projecto este fica sem nenhum estado atribuído", "Ao criar um documento e associar a uma das suas linha um projecto este vai automaticamente transitar para o estado definido no documento. Esta é a única forma de atribuir um estado a um projecto", "No Painel de Projecto, através do botão de Contexto é possível transitar o estado de um projecto através da opção Registar Transição de Estado. Esta é a única forma de atribuir um estado a um projecto", "Ao criar um documento e associar a uma das suas linha um projecto este vai automaticamente transitar para o estado definido no documento. Em alternativa, no Painel de Projecto, através do botão de Contexto é possível transitar o estado de um projecto através da opção Registar Transição de Estado"], correta: 3 },
  { pergunta: "Reflicta sobre as classes analíticas de projectos", opcoes: ["Um documento configurado como compra, irá influenciar os custos.", "Um documento configurado como orçamento de custos, irá por defeito fazer a abertura do projecto (alteração do estado para Aberto).", "Apenas o documento interno registo de consumos pode ser configurado como consumo.", "Um documento configurado como consumo, não pode estar também configurado como compra."], correta: 3 },
  { pergunta: "Os custos do funcionário responsável pelo projecto podem ser imputados ao mesmo na rubrica de custos:", opcoes: ["Esta afirmação está errada, não existe tratamento possível para esta imputação.", "Esta afirmação está certa, basta configurar a afectação do projecto na ficha do funcionário (como Consumo).", "Esta afirmação está certa, para isso teremos de configurar um documento interno de consumo de projectos (na analise analítica) e associar o funcionário a esse documento.", "Esta afirmação está certa, mas para isso teremos de ligar o processamento de vencimentos/impostos à conta corrente. O documento a influenciar o projecto poderá ser o Recibo."], correta: 2 },
  { pergunta: "Ao criar uma nova actividade, dependendo do tipo de actividade, é preciso definir o tipo de integração com o sistema de email. Seleccione a opção que melhor define o tipo de integração possível de efectuar entre o CRM Primavera e o sistema de email:", opcoes: ["Se for seleccionada a opção ´Inclui Contacto Principal“: define se o email de notificação inclui o contacto definido como principal", "Se for seleccionada a opção ´Inclui Outros Contactos“: define se o email de notificação inclui os contactos definidos como ´Outros Contactos´", "As opções \"Incluir Contacto Principal\" e \"Incluir Outros Contactos\" existem e estão automaticamente seleccionadas", "As opções \"Incluir Contacto Principal\" e \"Incluir Outros Contactos\" existem e podem ser seleccionadas"], correta: 3 },
  { pergunta: "Indique qual é a opção que permite criar actividades a partir da emissão de avisos de vencimento, bem como executar a impressão dos avisos de vencimento.", opcoes: ["Aceder ao \"Assistente de Criação de Actividades\" e escolher a opção \"Actividades para Avisos de Vencimento\". Seleccionar \"seguinte\", escolher os avisos pretendidos e confirmar.", "Aceder ao editor de emissão de avisos de vencimento e emitir o aviso pretendido. Aceder ao editor de registo de actividades, pesquisar os avisos emitidos e importar os documentos pretendidos.", "Não existe nenhuma opção que permite a criação automática de actividades a partir da emissão dos avisos de vencimento.", "Nos \"Parâmetros da Logísitica e Tesouraria\" no Administrador, activar a opção \"Registar os avisos de vencimento em actividades\" e escolher o tipo de actividade pretendido para a emissão dos avisos. Emitir os avisos de vencimento."], correta: 3 },
  { pergunta: "Para que um documento seja considerado no registo de uma actividade de cobranças é necessário que:", opcoes: ["A entidade associada ao documento não esteja excluída das cobranças e o documento esteja pendente.", "A entidade associada ao documento não esteja excluída das cobranças.", "Esteja num estado permitido para cobranças.", "O documento esteja pendente."], correta: 0 },
  { pergunta: "Reflicta sobre as actividades:", opcoes: ["A mesma actividade pode estar associada a vários contactos.", "As atividades não necessitam ter Oportunidades de Venda associadas.", "As actividades podem ser atribuídas pelo administrador a um vendedor.", "Todas as respostas estão correctas"], correta: 3 },
  { pergunta: "As actividades do módulo de contactos e oportunidades:", opcoes: ["Têm sempre integração com o Outlook.", "Podem integrar com o Word.", "Podem ser do tipo \"cobranças\".", "Todas as respostas estão correctas."], correta: 2 },
  { pergunta: "Reflicta sobre o mapa de Análise de Nivel:", opcoes: ["O seu resultado pode ser impresso.", "É individual para cada vendedor/OV", "É genérico para todos os ciclos de venda.", "Não podem ser realizadas análises plurianuais."], correta: 1 },
  { pergunta: "Considere o tratamento das cobranças seleccionado a opção certa:", opcoes: ["Qualquer tipo de actividade pode ser usada no âmbito das cobranças.", "As datas de recebimento definidas nas actividades de cobrança são consideradas na análise previsional de tesouraria", "Os alertas de cobranças não permitem criar actividades de cobranças.", "Todos os documentos pendentes são considerados para cobrança"], correta: 1 },
  { pergunta: "As actividades podem ser periódicas ?", opcoes: ["Sim, basta que estejam configuradas para esse efeito.", "Sim caso o Outlook permita actividades agendadas periódicas.", "Não, as actividades têm de ser colocadas individual e manualmente.", "Sim. É esse o intuito do wizard de Agendamento periódico de actividades"], correta: 0 },
  { pergunta: "Reflicta sobre as campanhas de marketing no módulo de contactos e oportunidades:", opcoes: ["Uma campanha pode estar associada a varias oportunidades de venda.", "Uma campanha pode ficar automaticamente inactiva opôs a data de fim ter sido ultrapassada.", "O assistente de campanha pode criar, de uma forma rápida, actividades associadas a uma campanha.", "Todas as repostas estão correctas"], correta: 3 },
  { pergunta: "Os documentos internos configurados como Compras na Classe analítica:", opcoes: ["Podem incluir documentos que serão facturados posteriormente.", "Podem ser copiados para documentos de venda (ex: FA) no utilitário de copia de linhas.", "Podem ser lançados sem entidade associada.", "Todas as respostas estão correctas."], correta: 3 },
  { pergunta: "O Assistente de Processamento de Requisições Internas em Lote possibilita aos utilizadores seleccionar um conjunto de requisições (usando restrições) para, de seguida, criar um documento do mesmo tipo para cada uma delas. Nos documentos a criar, se nenhuma quantidade for indicada, a quantidade para cada artigo será determinada de acordo com a regra de quantidade seleccionada, esta regra pode considerar:", opcoes: ["´Quantidade em Aberto´: quantidade que não foi entregue ao requisitante", "´Stock em Falta´: quantidade não disponível em stock e que será necessária para satisfazer a quantidade em aberto", "“Quantidade por tratar”: quantidade que não foi pedida ao fornecedor, nem disponibilizada ao requisitante", "Todas as opções estão correctas"], correta: 3 },
  { pergunta: "Reflicta sobre os documentos internos Standard:", opcoes: ["Por defeito, estes documentos não podem se copiados no utilitário de copia de linhas.", "Estes documentos necessitam sempre de incluir entidades associadas.", "O preço sugerido para um artigo é sempre o PVP1.", "Este documento pode controlar as quantidades satisfeitas na origem."], correta: 3 },
  { pergunta: "No âmbito das requisições internas as autorizações de documentos devem:", opcoes: ["Ser feitas sempre pelo Administrador.", "Ser feitas pelo utilizador Destinatário da requisição interna.", "Ser feitas apenas nos documentos incluídos em fluxos documentais.", "Terminar sempre num documento do tipo Encomenda ao fornecedor."], correta: 2 },
  { pergunta: "Reflicta sobre as requisições internas.", opcoes: ["As requisições internas não obrigam ao preenchimento do Destinatário.", "As requisições internas podem incluir tipos de artigos, exclusivos para este tipo de documento.", "Necessitam estar no estado aprovadas para serem utilizadas no processamento de requisições internas.", "Obrigam à existência de uma entidade externa igual ou relacionada com o Requisitante."], correta: 2 },
  { pergunta: "Reflicta sobre o documento interno Pedido de Preço:", opcoes: ["Apenas pode ser usado em Entidades Internas.", "Sugere sempre o PCM do artigo no registo.", "Pode ser lançado sem entidade associada.", "Pode ser enviado directamente a uma entidade externa."], correta: 2 },
  { pergunta: "Na Exploração, nos \"documentos emitidos\" podemos:", opcoes: ["Imprimir uma listagem com os documentos que foram emitidos para um terceiro.", "Reemitir documentos de vendas, compras, stocks, encomendas e orçamentos.", "Reemitir documentos de vendas, compras, stocks.", "Verificar em formato de grelha os documentos que foram emitidos e reimprimí-los."], correta: 0 },
  { pergunta: "Seleccione a opção verdadeira relativa ao utilitário cópia de linhas", opcoes: ["Quando é utilizado o utilitário cópia de linhas, o preço unitário do documento fonte é sempre copiado para o documento destino", "O utilizador pode seleccionar no momento da cópia se quer copiar o preço unitário do documento fonte ou calculá-lo de acordo com as regras do documento destino", "Para copiar o preço unitário do documento fonte e calculá-lo de acordo com as regras do documento destino é necessário activar a opção “Preço Unitário” no Administrador em parâmetros da Empresa", "Nenhuma das Opções está correcta"], correta: 3 },
  { pergunta: "Através do utilitário cópia de linhas, é possível copiar linhas negativas?", opcoes: ["É sempre possível", "Não é possível", "Só é possível se o documento origem estiver configurado para usar linhas negativas", "Só é possível se ambos os documentos Origem e Destino estiverem configurados para suportar linhas negativas"], correta: 3 },
  { pergunta: "Indique a frase correcta considerando o tratamento de Séries de Documentos:", opcoes: ["Todas as opções estão correctas.", "A criação de Séries pode ser realizada documento a documento, ou em “lote” através do Administrador.", "Não posso ter mais que uma Série por defeito.", "Só se pode ter uma série por tipo de documento."], correta: 1 },
  { pergunta: "A partir da opção ´Mapas de IVA´ do menu ´Vendas\\Utilitários´ é possível:", opcoes: ["Gerar magnético dos recapitulativos com formato aceite pelo ministério das finanças.", "Imprimir a informação em formato detalhado e ordenado por entidade.", "Imprimir o mapa de recapitulativos com formato aceite pelo ministério das finanças.", "Imprimir os mapas periódicos apenas para clientes Nacionais."], correta: 1 },
  { pergunta: "Seleccione a opção correcta tendo em consideração a tabela de Motivos de Estorno/Crédito:", opcoes: ["Caso o motivo seleccionado tenha a opção “Cria Novo Documento” activa, então é gerado um novo documento, este novo documento tem apenas o cabeçalho do documento preenchido, o utilizador terá de preencher manualmente as linhas que pretende corrigir", "Caso o motivo seleccionado tenha a opção “Cria Novo Documento” activa, então é gerado um novo documento constituído pelas linhas do documento origem. Estas linhas não podem ser alteradas", "Caso o motivo seleccionado tenha a opção “Cria Novo Documento” activa, então é gerado um novo documento constituído pelas linhas do documento origem. Estas linhas podem ser alteradas para corrigir os dados do documento origem", "A utilização de um motivo de estorno é facultativa pois trata-se apenas de uma informação"], correta: 2 },

  /* ⚠️ NOTA:
     Aqui ficaram incluídas as perguntas que você já colou no seu JS.
     Se o seu ficheiro original tiver as 100, basta substituir/colar o array completo no lugar deste.
     (O resto do código já está pronto e compatível.)
  */
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
