# RocketShoes

RocketShoes é uma aplicação do tipo e-commerce de uma loja de departamentos criada para aprofundar os estudos acerca da arquitetura Flux durante o Bootcamp 9.0 da Rocketseat.


![Pages](https://github.com/MSantosAlves/rocketshoes-mobile/blob/master/screens.png)



# Aplicação

Na aplicação é possível navegar entre duas telas, a página principal, que lista os produtos de uma API fake (criada com Json Server) e a página do carrinho, que lista os produtos adicionados ao carrinho e permite modificar a quantidade de determinado item ou removê-lo.

## Ferramentas utilizadas (Mobile)

#### Para o desenvolvimento da aplicação foram utilizadas as seguintes ferramentas:



- React Native CLI

> Criação do projeto com React-native init

- Styled Components

> Biblioteca de estilização que permite utilizar CSS com sintaxe JavaScript dentro do React e do React Native.



- ESLint, Prettier e Editor Config

> Ferramentas de padronização e estilização de código.

- Axios

> Biblioteca de requisições HTTP que busca os dados da API.



- Redux

> Como a aplicação compartilha o estado do carrinho entre vários componentes, foi utilizada a biblioteca Redux para controlar o estado global da aplicação e o fluxo de atualizações deste estado.

- Sagas

> Para a interceptar as alterações no estado e validar as requisições utilizou-se os Saga Middlewares.

