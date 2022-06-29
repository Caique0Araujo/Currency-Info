const getExchangeValues = async function (base){

        const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}.json`;

        let data;

        await fetch(url, {
            method: "GET",
        })
        .then((response) => {
            return response.json();
        })
        .then((json)=>{
            data = json[base];
        })
        .catch((error)=>console.log(error));



        return data;
    }


export default getExchangeValues;
