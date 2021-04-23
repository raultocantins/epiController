export function setLocalstorage() {
  var localStorage = window.localStorage;
  var myData = [
    {
      color: "VERMELHO",
      id: Math.random(),
      using: false,
      name: "",
      entregue: false,
      data: "",
    },
    {
      color: "VERMELHO",
      id: Math.random(),
      using: false,
      name: "",
      entregue: false,
      data: "",
    },
    {
      color: "VERMELHO",
      id: Math.random(),
      using: false,
      name: "",
      entregue: false,
      data: "",
    },
    {
      color: "VERMELHO",
      id: Math.random(),
      using: false,
      name: "",
      entregue: false,
      data: "",
    },
    {
      color: "VERMELHO",
      id: Math.random(),
      using: false,
      name: "",
      entregue: false,
      data: "",
    },
    {
      color: "VERMELHO",
      id: Math.random(),
      using: false,
      name: "",
      entregue: false,
      data: "",
    },
    {
      color: "VERMELHO",
      id: Math.random(),
      using: false,
      name: "",
      entregue: false,
      data: "",
    },
    {
      color: "VERMELHO",
      id: Math.random(),
      using: false,
      name: "",
      entregue: false,
      data: "",
    },
    {
      color: "VERMELHO",
      id: Math.random(),
      using: false,
      name: "",
      entregue: false,
      data: "",
    },
  ];

  var myDataSerialized = JSON.stringify(myData);

  localStorage.setItem("mydata", myDataSerialized);
}

export function setUser(user) {
  var myData = window.localStorage.getItem("mydata");
  var myDataJson = JSON.parse(myData);

  try {
    myDataJson.forEach((e) => {
      if (e.id === user.id) {
        (e.name = user.name) &&
          (e.data = new Date().toLocaleDateString()) &&
          (e.using = true);
      }
    });

    window.localStorage.setItem("mydata", JSON.stringify(myDataJson));
  } catch (err) {
    console.log(err);
  }
}

export function removeUser(id) {
  var myData = window.localStorage.getItem("mydata");
  var myDataJson = JSON.parse(myData);

  try {
    myDataJson.forEach((e) => {
      if (e.id === id) {
        e.name = "";
        e.data = "";
        e.using = false;
      }
    });

    window.localStorage.setItem("mydata", JSON.stringify(myDataJson));
  } catch (err) {
    console.log(err);
  }
}
