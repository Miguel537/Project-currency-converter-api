const apiKey = 'f1b1e5ff4eb683bd3522168d';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

async function getExchangeRate(daMoeda, paraMoeda){
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();

        if(data.result === "sucess"){
            return data.conversion_rates[paraMoeda];
        } else{
            throw new Error('Erro ao buscar as taxas de câmbio');
        }
    } catch{

    }
}