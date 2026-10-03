
const produtos = {
  cama: {
    imagem: "Imagens/cama.png",
    titulo: "Cama Solteiro Com Baú e Cama Auxiliar",
    preco: "R$ 249,90",
    descricao: "Cama com baú e cama auxiliar, perfeita para espaços compactos. Entrega agendada entre em contato: 17 99166129"
  },
  kitmesinhas: {
    imagem: "Imagens/kit_mesinhas.png",
    titulo: "Kit Mesinhas de Cabeceira",
    preco: "R$ 150,00",
    descricao: "Conjunto com 2 mesinhas para cabeceira em MDF. Entrega agendada entre em contato: 17 99166129"
  },
  mesa: {
    imagem: "Imagens/mesa .png",
    titulo: "Mesa de Cabeceira",
    preco: "R$ 49,90",
    descricao: "Mesa pequena ideal para decorar o quarto. Entrega agendada entre em contato: 17 99166129"
  },
  mesinha: {
    imagem: "Imagens/mesinha.png",
    titulo: "Mesinha de Cabeceira Casal",
    preco: "R$ 39,90",
    descricao: "Compacta e estilosa, perfeita para casais. Entrega agendada entre em contato: 17 99166129"
  },
  painel: {
    imagem: "Imagens/painel.png",
    titulo: "Painel de Tv Sala",
    preco: "79,90",
    descricao: "Painel moderno para TV, ideal para salas compactas. Entrega agendada entre em contato: 17 99166129"
  },
  cabeceira: {
    imagem: "Imagens/cabeceira.png",
    titulo: "Cabeceira Cama Queen Casal 1,60",
    preco: "120,00",
    descricao: "Cabeceira para quarto de Casal moderna e suspensa. Entrega agendada entre em contato: 17 99166129"
  },
  painelmaior: {
    imagem: "Imagens/painelmaior.png",
    titulo: "Painel de Tv Até 50 Polegadas",
    preco: "250,00",
    descricao: "Painel para TV sala, comporta até 50 polegadas. Entrega agendada entre em contato: 17 99166129"
  },
  fruteira: {
    imagem: "Imagens/fruteira.png",
    titulo: "Fruteira Com Gaveta Cozinha",
    preco: "249,90",
    descricao: "Fruteira para cozinha com gaveta e bancada de pedra. Entrega agendada entre em contato: 17 99166129"
  },
  fruteira2: {
    imagem: "Imagens/fruteira2.png",
    titulo: "Fruteira Com Repartições Cozinha",
    preco: "149,90",
    descricao: "Fruteira perfeita para decorar sua cozinha, com 3 gavetas.Entrega agendada entre em contato: 17 99166129"
  },
  fruteira3: {
    imagem: "Imagens/fruteira3.png",
    titulo: "Fruteira Balcão Para Cozinha",
    preco: "129,90",
    descricao: "Fruteira tipo balcão ótima para pequenos espaços. Entrega agendada entre em contato: 17 99166129"
  },
  painelpreto: {
    imagem: "Imagens/painelpreto.png",
    titulo: "Painel de Tv Pequeno Preto",
    preco: "79,90",
    descricao: "Painel tamanho menor perfeito para sua sala de estar. Entrega agendada entre em contato: 17 99166129"
  },
  comoda: {
    imagem: "Imagens/comoda.png",
    titulo: "Comoda ou Mesa de Cabeceira Quarto",
    preco: "79,90",
    descricao: "Como ou Mesa de Cabeceira para quarto em pés marrom. Entrega agendada entre em contato: 17 99166129"
  },
  escrivaninha: {
    imagem: "Imagens/escrivaninha.png",
    titulo: "Escrivaninha Mesa de Computador",
    preco: "84,90",
    descricao: "Escrivaninha Mesa de Computador ou Notebook. Entrega agendada entre em contato: 17 99166129"
  },
  painelrustico: {
    imagem: "Imagens/painelrustico.png",
    titulo: "Painel de Tv Pintura Rústica",
    preco: "199,90",
    descricao: "Painel de Tv com pintura rústica perfeito para sala de estar. Entrega agendada entre em contato: 17 99166129"
  },
  suporte: {
    imagem: "Imagens/suporte.png",
    titulo: "Balcão Suporte Para Bebedouro",
    preco: "99,90",
    descricao: "Suporte para bebedouro perfeito para espaços pequenos. Entrega agendada entre em contato: 17 99166129"
  }
  
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (produtos[id]) {
  const produto = produtos[id];
  document.getElementById("imagem-produto").src = produto.imagem;
  document.getElementById("imagem-produto").alt = produto.titulo;
  document.getElementById("titulo-produto").textContent = produto.titulo;
  document.getElementById("preco-produto").textContent = produto.preco;
  document.getElementById("descricao-produto").textContent = produto.descricao;
} else {
  document.querySelector(".produto-detalhe").innerHTML = "<p>Produto não encontrado.</p>";
}
