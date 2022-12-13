import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

export const BarChart = ({ values }) => {
  const data = values.map((value, index) => ({ index, value }));
  return <ResponsiveBar
    data={data}
    keys={['value']}
    indexBy="index"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    colors={{ scheme: 'nivo' }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'index',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'value',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    legends={[]}
  />;
};
