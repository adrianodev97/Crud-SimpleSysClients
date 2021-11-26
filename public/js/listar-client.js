import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore-lite.js";

const db = getFirestore();

window.deleteClient = function (id) {
  deleteDoc(doc(db, "clients", id)).then(function () {
    location.reload();
  });
};

function getAllClientsFirestore() {
  getDocs(collection(db, "clients")).then((docs) => {
    docs.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());

      $("#clients-table").append(
        `<tr>
          <td>${doc.id}</td>  
          <td>${doc.data().nome}</td>
          <td>${doc.data().email}</td>
          <td>${doc.data().telefone}</td>
          <td>${doc.data().dataNascimento}</td>
          <td>${doc.data().cep}</td>
          <td>${doc.data().rua}</td>
          <td>${doc.data().numero}</td>
          <td>${doc.data().complemento}</td>
          <td>${doc.data().bairro}</td>
          <td>${doc.data().cidade}</td>
          <td>${doc.data().estado}</td>
          <td>
              <a href="EditarCliente.html?id=${
                doc.id
              }"><img src="images/edit.svg"></a>
              <img onclick="deleteClient('${doc.id}')" src="images/delete.svg">
          </td>
          </tr>`
      );
    });
  });
}

$(document).ready(function () {
  getAllClientsFirestore();
});
