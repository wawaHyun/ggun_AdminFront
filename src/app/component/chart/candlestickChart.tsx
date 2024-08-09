import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Bar 
} from 'recharts';

// 샘플 데이터
const data = [
  { name: '2024-01-01', open: 100, close: 120, high: 130, low: 90 },
  { name: '2024-01-02', open: 120, close: 110, high: 125, low: 100 },
  { name: '2024-01-03', open: 110, close: 115, high: 120, low: 105 },
  { name: '2024-01-04', open: 115, close: 125, high: 130, low: 110 },
  { name: '2024-01-05', open: 125, close: 135, high: 140, low: 120 },
  { name: '2024-01-06', open: 100, close: 120, high: 130, low: 90 },
  { name: '2024-01-07', open: 120, close: 110, high: 125, low: 100 },
  { name: '2024-01-08', open: 110, close: 115, high: 120, low: 105 },
  { name: '2024-01-09', open: 115, close: 125, high: 130, low: 110 },
  { name: '2024-01-10', open: 125, close: 135, high: 140, low: 120 },
  { name: '2024-01-11', open: 100, close: 120, high: 130, low: 90 },
  { name: '2024-01-12', open: 120, close: 110, high: 125, low: 100 },
  { name: '2024-01-13', open: 110, close: 115, high: 120, low: 105 },
  { name: '2024-01-14', open: 115, close: 125, high: 130, low: 110 },
  { name: '2024-01-15', open: 125, close: 135, high: 140, low: 120 },
  { name: '2024-01-16', open: 100, close: 120, high: 130, low: 90 },
  { name: '2024-01-17', open: 120, close: 110, high: 125, low: 100 },
  { name: '2024-01-18', open: 110, close: 115, high: 120, low: 105 },
  { name: '2024-01-19', open: 115, close: 125, high: 130, low: 110 },
  { name: '2024-01-20', open: 125, close: 135, high: 140, low: 120 },
];

const CandlestickChart = () => {

  const [hoveredYValue, setHoveredYValue] = useState(null); // Hover된 Y값 상태 관리

  const handleMouseEnter = (e:any) => {
    if (e.active && e.payload) {
      setHoveredYValue(e.payload[0].value); // Hover된 Y값 설정
    }
  };


  const CustomTooltip = ({ active, payload }:any) => {
    if (active && payload && payload.length) {
      const { name, open, close, high, low } = payload[0].payload; // 해당 데이터 가져오기
      return (
        <div className="tooltip">
          <p>{`날짜: ${name}`}</p>
          <p>{`시가: ${open}`}</p>
          <p>{`종가: ${close}`}</p>
          <p>{`고가: ${high}`}</p>
          <p>{`저가: ${low}`}</p>
        </div>
      );
    }
    return null;
  };

  const handleMouseLeave = () => {
    setHoveredYValue(null); // Hover 상태 해제
  };
  return (
    <ResponsiveContainer width="90%" height="90%">
       <ComposedChart 
        data={data} 
        margin={{ top: 20, right: 30, bottom: 20, left: 20 }} // 여백 추가
        onMouseLeave={handleMouseLeave} // 마우스 리브 이벤트 핸들러 추가
      >
     <XAxis 
          dataKey="name" 
          label={{ value: '날짜', position: 'insideBottomRight', offset: -5 }} // X축 레이블
        />
        <YAxis 
          label={{ value: '가격', angle: -90, position: 'insideLeft', offset: 10 }} // Y축 레이블
        />
            <Tooltip 
          content={<CustomTooltip />} 
        />
        <CartesianGrid stroke="" />
        {/* 고가와 저가를 시각화하는 막대 */}
        {data.map((entry, index) => (
          <g key={index}>
            {/* 캔들 몸체 */}
            <rect
              x={index * 50 + 20} // X 위치 조정
              y={Math.min(entry.open, entry.close)}
              width={20}
              height={Math.abs(entry.close - entry.open)}
              fill={entry.close > entry.open ? 'blue' : 'red'}
            />
            {/* 고가와 저가를 연결하는 선 */}
            <line
              x1={index * 50 + 30}
              y1={entry.high}
              x2={index * 50 + 30}
              y2={entry.low}
              stroke="black"
            />
          </g>
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CandlestickChart;