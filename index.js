const express = require("express");

const app = express();
const port = 3000;

// [Step 8] 아파트 관리 사무소 내부 수리 (Middleware)
// '자동 택배 분류기' 설치: 손님이 보낸 JSON 데이터를 해석할 수 있게 해줍니다.
app.use(express.json());

// 입주민 데이터 (우리 아파트의 공식 명부)
const residents = [
    { id: 1, name: "John Doe", unit: "A-101" },
    { id: 2, name: "Bob Smith", unit: "A-102" },
    { id: 3, name: "Chrilie Brown", unit: "A-103" },
    { id: 4, name: "Alice Johnson", unit: "A-104" },
    { id: 5, name: "David Wilson", unit: "A-105" },
    { id: 6, name: "Eve Davis", unit: "A-106" },
    { id: 7, name: "Frank Taylor", unit: "A-107" },
    { id: 8, name: "Grace Martinez", unit: "A-108" },
    { id: 9, name: "Henry Anderson", unit: "A-109" },
    { id: 10, name: "Isabel Rodriguez", unit: "A-110" },
];

//-----------Server Routing-----------
//-----------GET-----------
app.get("/", (req, res) => {
    res.send("Welcome to my Node.js Apartment! This is the main gate.");
});
app.get("/lobby", (req, res) => {
    res.send("Now you are in the lobby. How can I help you?");
});

// 모든 입주민 명부 확인 (GET)
app.get("/residents", (req, res) => {
    res.json(residents);
});

app.get("/residents/:id", (req, res) => {
    const resident = residents.find((resident) => resident.id === parseInt(req.params.id));
    if (resident) {
        res.json(resident);
    } else {
        res.status(404).send("Sorry,I can't found this resident");

    }
});

//-----------POST-----------

app.post("/residents", (req, res) => {

    const newResident = {
        id: residents.length + 1,
        name: req.body.name,
        unit: req.body.unit
    }
    residents.push(newResident);
    res.status(201).json(newResident);
});

//-----------PUT-----------
app.put("/residents/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = residents.findIndex((r) => r.id === id);
    if (index !== -1) {

        residents[index] = {
            id: id,
            name: req.body.name || residents[index].name,
            unit: req.body.unit || residents[index].unit
        }
    } else {
        res.status(404).send("Sorry, I can't found this resident");
    }
    res.json(residents[index]);
});

//-----------DELETE-----------
app.delete("/residents/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = residents.findIndex((r) => r.id === id);
    if (index !== -1) {
        residents.splice(index, 1);
        res.status(204).send("Resident deleted successfully");
    } else {
        res.status(404).send("Sorry, I can't found this resident");
    }
})


//-----------Server Start with Message-----------
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


