import axios from "axios";
import { useState } from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

function App() {
  const [image, setImage] = useState<string>();
  const [temp, setTemp] = useState();
  const [hum, setHum] = useState();
  const [co2, setCo2] = useState();

  const handleGetImage = () => {
    axios
      .get("http://localhost:5000/api/camera", { responseType: "blob" })
      .then((res) => {
        console.log(res);
        setImage(URL.createObjectURL(res.data));
      });
  };

  const handleUpdateGraph = () => {
    axios.get("http://localhost:5000/api/data").then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-6xl font-bold mb-4">AI農業体験ブース</h1>
        <div className="flex gap-4 mb-4">
          <button className="btn" onClick={handleGetImage}>
            画像を取得
          </button>
          <button className="btn" onClick={handleUpdateGraph}>
            グラフを更新
          </button>
        </div>
        {image !== undefined ? (
          <img src={image} width={500} />
        ) : (
          <p>画像の取得に失敗しました</p>
        )}

        <div className="grid grid-cols-2 gap-4">
          {/* temp */}
          <VictoryChart
            padding={{
              top: 50,
              left: 70,
              right: 50,
              bottom: 100,
            }}
            theme={VictoryTheme.clean}
          >
            <VictoryLine data={} />
          </VictoryChart>

          {/* hum */}
          <VictoryChart
            padding={{
              top: 50,
              left: 70,
              right: 50,
              bottom: 100,
            }}
            theme={VictoryTheme.clean}
          ></VictoryChart>

          {/* co2 */}
          <VictoryChart
            padding={{
              top: 50,
              left: 70,
              right: 50,
              bottom: 100,
            }}
            theme={VictoryTheme.clean}
          ></VictoryChart>

          {/* photo */}
          <VictoryChart
            padding={{
              top: 50,
              left: 70,
              right: 50,
              bottom: 100,
            }}
            theme={VictoryTheme.clean}
          ></VictoryChart>

          {/* water_temp */}
          <VictoryChart
            padding={{
              top: 50,
              left: 70,
              right: 50,
              bottom: 100,
            }}
            theme={VictoryTheme.clean}
          ></VictoryChart>
        </div>
      </div>
    </>
  );
}

export default App;
