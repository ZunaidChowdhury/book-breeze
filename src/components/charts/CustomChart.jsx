import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'The Great Gatsby', value: 192, color: '#0088FE' },
    { name: 'To kill a mocking bird', value: 281, color: '#00C49F' },
    { name: '1984', value: 338, color: '#FFBB28' },
    { name: 'The Alchemist', value: 177, color: '#FF8042' },
    { name: 'Pride and prejudice', value: 279, color: '#FF0000' },
];

// Custom shape for the flared peaks
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return (
        <path
            d={`M${x},${y + height} 
         C${x + width / 4},${y + height} ${x + width / 2},${y + height} ${x + width / 2},${y} 
         C${x + width / 2},${y + height} ${x + (3 * width) / 4},${y + height} ${x + width},${y + height} 
         Z`}
            fill={fill}
        />
    );
};

// Fixed Custom Label to solve "fill.includes" error
const renderCustomizedLabel = (props) => {
    const { x, y, width, value, index } = props;
    return (
        <text
            x={x + width / 2}
            y={y - 10}
            fill={data[index].color}
            textAnchor="middle"
            fontSize={12}
            fontWeight="bold"
        >
            {value}
        </text>
    );
};

const CustomChart = () => {
    return (
        <div style={{ width: '100%', height: 500, }}>
            <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 30, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
                    <Bar
                        dataKey="value"
                        shape={<TriangleBar />}
                        label={renderCustomizedLabel} // Pass the function directly here
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomChart;
