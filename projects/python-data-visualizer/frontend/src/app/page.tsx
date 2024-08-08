import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart';

interface Data {
  labels: string[];
  values: number[];
}

const Home: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>Data Visualization Dashboard</h1>
      {data && <Chart data={data} />}
    </div>
  );
};

export default Home;
