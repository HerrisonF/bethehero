Exercícios OmniStack 11.

#Treinamento React + Axios

##Alguns mocks(mocky.io) usados como backend

### Cadastrar ONG (POST)
--send--
{
	"name":"Herrison",
        "email":"herrison@hotmail.com",
       	"whatsapp":"123456789",
        "city":"Rio do Sul",
        "uf":"SC",
}
-- reponse --
{
    "id":"cf6884d",
}

### Login (POST)

{
	"id":"cf6884d"
}
--response--
{
	"name":"Herrison"
}

### Casos cadastrados (GET)

--response--
[
{
	"id":"1",
	"title":"Caso 1",
	"description":"Detalhe do Caso 1",
	"value":120,
	"ong_id":"a345123"
},
{
	"id":"2",
	"title":"Caso 2",
	"description":"Detalhe do Caso 2",
	"value":140,
	"ong_id":"a343123"
},
{
	"id":"3",
	"title":"Caso 3",
	"description":"Detalhe do Caso 3",
	"value":180,
	"ong_id":"a311123"
},
{
	"id":"4",
	"title":"Caso 4",
	"description":"Detalhe do Caso 4",
	"value":200,
	"ong_id":"a3885123"
}
]

### Cadastrar novos casos (POST)
--send--
{
	"title":"Caso teste",
	"description":"Detalhes do caso",
	"value":120
}
--response--
{
	"id":16
}