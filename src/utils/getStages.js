import axios from "axios";

function createData(key, name, shortName) {
  return {key, name, shortName}
}

function getStageJson() {

  const url = "https://stat.ink/api/v2/stage";
  const notFesStageLength = 24 // 通常ステージは24ステージ

  var shapedData = []

  axios.get(url)
        .then((res) => {
            // console.log(results.data);
            for (let i = 0; i < notFesStageLength; i++){
              let row = res.data[i]
              shapedData.push(createData(
                row.key,
                row.name.ja_JP,
                row.short_name.ja_JP
              ))
            }
        })
        .catch((error) => {
            console.log(error.status);
        });

  return shapedData
}

export default getStageJson