import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';


const Chart = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(data => data.json())
            .then(res => setdata(res));
    }, [])

    const perfumeData = data;
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h1 className='text-5xl mb-16 font-semibold'>Dashboard</h1>
            <div className='md:grid static gap-10 grid-cols-2 mt-6'>
                <div className='mx-auto mb-16'>

                    <BarChart
                        width={400}
                        height={300}
                        data={perfumeData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" stackId="a" fill="rgb(239 68 68)" />
                    </BarChart>
                </div>
                <div className='mx-auto mb-16'>

                    <AreaChart
                        width={400}
                        height={300}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke=" rgb(5 150 105)" fill="rgb(252 165 165)" />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="rgb(56 189 248)" fill="rgb(239 68 68)" />
                    </AreaChart>
                </div>

                <div className="mx-auto mb-16">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >

                        <XAxis dataKey="month" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sell" barSize={20} fill="rgb(239 68 68)" />
                        <Line type="monotone" dataKey="sell" stroke="rgb(52 211 153)" />
                    </ComposedChart>
                </div>

            </div>
        </div>
    );
};


export default Chart;
