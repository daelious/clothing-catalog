import Gallery from "./Components/Gallery"
import { ItemProps } from "./Components/Item";

const generateTestData = (): ItemProps[] => {
  const testData: ItemProps[] = [];

  for (let i = 1; i <= 50; i++) {
    testData.push({
      id: i,
      title: `Sample Title ${i}`,
      photo: `https://placehold.co/180x180`,
      tags: [`tag${i}-1`, `tag${i}-2`],
    });
  }

  return testData;
};

const testData = generateTestData();
function App() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h1 className="text-3xl font-bold leading-7  text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Clothing Catalog
        </h1>
      {/* </div>
      <div className="min-w-0 flex-1"> */}
        <Gallery items={testData} />
      </div>
    </div>
  )
}

export default App
