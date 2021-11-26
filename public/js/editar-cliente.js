import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore-lite.js";

const db = getFirestore();

$(document).ready(function () {
  getDoc(doc(db, "clients", "zWerP4VCAzox6ZIq6Kqh")).then(function (cliente) {
    console.log(cliente.data());
    $("#nomeC").val(cliente.data().nome);
    $("#emailC").val(cliente.data().email);
    $("#telefoneC").val(cliente.data().telefone);
    $("#dataNascC").val(cliente.data().dataNascimento);
    $("#cep").val(cliente.data().cep);
    $("#ruaC").val(cliente.data().rua);
    $("#numeroC").val(cliente.data().numero);
    $("#complementoC").val(cliente.data().complemento);
    $("#bairroC").val(cliente.data().bairro);
    $("#estadoC").val(cliente.data().estado);
    $("#cidadeC").val(cliente.data().cidade);
  });

  $("#form-edit-client").submit(function (e) {
    e.preventDefault();

    updateDoc(doc(db, "clients", "zWerP4VCAzox6ZIq6Kqh"), {
      nome: $("#nomeC").val(),
      email: $("#emailC").val(),
      telefone: $("#telefoneC").val(),
      dataNascimento: $("#dataNascC").val(),
      cep: $("#cep").val(),
      rua: $("#ruaC").val(),
      numero: $("#numeroC").val(),
      complemento: $("#complementoC").val(),
      bairro: $("#bairroC").val(),
      cidade: $("#cidadeC").val(),
      estado: $("#estadoC").val(),
    }).then(function (res) {
      console.log(res);
      location.href = "ListarCliente.html";
    });
  });
});
