**README - Projeto Le/Tip**

**Visão Geral**

O **Le/Tip** é uma aplicação web construída utilizando **Vue.js 2**, **Quasar**, **Vuex**, **Vue Router** e **Axios**. A aplicação tem como objetivo calcular a gorjeta, o valor total da conta e o valor por pessoa, com a funcionalidade adicional de conversão de moeda em tempo real usando a **API do CurrencyLayer**. O usuário pode inserir o valor da conta, escolher o percentual de gorjeta e definir o número de pessoas para dividir a conta. Em seguida, o aplicativo realiza o cálculo da gorjeta, valor total e valor por pessoa e também realiza a conversão para Real (BRL), utilizando a taxa de câmbio mais atual.

**Tecnologias Utilizadas**

- **Vue.js 2**: Framework JavaScript principal utilizado para construir a interface do usuário.
- **Quasar**: Framework de alto desempenho para Vue.js, utilizado para fornecer componentes de interface e utilitários que facilitam a construção de aplicações web responsivas.
- **Vuex**: Biblioteca de gerenciamento de estado para Vue.js, usada para gerenciar o estado global da aplicação, como valor da conta, percentual de gorjeta, e informações sobre a moeda.
- **Vue Router**: Biblioteca oficial de roteamento para Vue.js, utilizada para gerenciar a navegação entre as páginas da aplicação (**EnteredPage** e **ResultPage**).
- **Axios**: Cliente HTTP baseado em Promises usado para fazer requisições para a API do CurrencyLayer para conversão de moeda.
- **API CurrencyLayer**: Serviço de terceiros utilizado para obter taxas de câmbio em tempo real.

## **Instruções de Configuração**

### **Pré-requisitos**

- **Node.js** (v12 ou superior)
- **npm** ou **yarn**

### **Instalação**

1. Clone o repositório para sua máquina local:
   git clone https://github.com/seu-repo/le-tip.git
   cd le-tip

Instale as dependências:

npm install

Crie um arquivo .env na raiz do projeto e adicione sua chave da API CurrencyLayer:
VUE_APP_API_BASE_URL=https://api.currencylayer.com/live
VUE_APP_API_KEY=sua-chave-da-api
Rode o servidor de desenvolvimento:


npm run serve
Abra a aplicação no navegador:
http://localhost:8080

### **Conclusão
O Le/Tip é uma aplicação web prática para calcular e dividir uma conta com gorjeta, além de realizar a conversão de moedas em tempo real. Utilizando tecnologias modernas como Vue.js, Quasar, Vuex, Vue Router, Axios, e a API CurrencyLayer, oferece uma experiência interativa e de fácil uso para os usuários.