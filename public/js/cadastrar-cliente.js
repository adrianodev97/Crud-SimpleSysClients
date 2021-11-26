import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore-lite.js";

const db = getFirestore();

const pesquisarCep = (cep) => {
  return new Promise(function (resolve, reject) {
    var str = cep.replace(/[.]/, "");
    str = str.replace(/[-]/, "");
    fetch("https://viacep.com.br/ws/" + str + "/json/").then(function (
      response
    ) {
      resolve(response.json());
    });
  });
};

$("#cep").blur(function () {
  pesquisarCep($(this).val()).then(function (endereco) {
    $("#rua").val(endereco.logradouro);
    $("#bairro").val(endereco.bairro);
    $("#cidade").val(endereco.localidade);
    $("#estado").val(endereco.uf);
  });
});

$("#form-CadCliente").submit(function (event) {
  event.preventDefault();

  try {
    const docRef = addDoc(collection(db, "clients"), {
      nome: $("#nome").val(),
      email: $("#email").val(),
      telefone: $("#telefone").val(),
      dataNascimento: $("#dataNasc").val(),
      cep: $("#cep").val(),
      rua: $("#rua").val(),
      numero: $("#numero").val(),
      complemento: $("#complemento").val(),
      bairro: $("#bairro").val(),
      cidade: $("#cidade").val(),
      estado: $("#estado").val(),
    }).then(function (res) {
      console.log(res);
      location.href = "index.html";
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
