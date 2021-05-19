import axios from "axios";

function createData(key, name) {
  return {key, name}
}

function getWeaponJson() {

  const url = "https://stat.ink/api/v2/weapon";

  var shapedData = []
  axios.get(url)
        .then((res) => {
            // console.log(results.data);
            for (let i = 0; i < res.data.length; i++){
              let row = res.data[i]
              shapedData.push(createData(
                row.key,
                row.name.ja_JP,
              ))
            }
        })
        .catch((error) => {
            console.log(error.status);
        });

  return shapedData;
}

export default getWeaponJson