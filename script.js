async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=913c3286-d19e-40bb-94a7-f8ee1063e4c7&offset=0")
        .then(data => data.json())
        .then(data =>{
            if(data.status !="success")return;

            const matchesList = data.data;

            if(!matchesList)return [];

            const relevantData = matchesList.filter(match => match.series_id == "e7fc5404-3053-4026-97bc-b2d24649d2bd"

            ).map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;
        })
        .catch(e => console.log(e));
}

getMatchData();