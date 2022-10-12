import { useEffect, useState } from 'react';
import dummyData from './data.json';
import RowRender from './RowRender';
import './VirtualList.css';

const VirtualList = ({ 
    rowHeight = 60, 
    totalRows = dummyData.length, 
    viewPortHeight = 600, 
    bufferRows = 5, 
    data = dummyData}
) => {

    const [idx, setIdx] = useState({ start: 0, last: 0});

    const captureScroll = (e) => {
        console.log(e,'e')
        const scrollTop = e.target.scrollTop;
        const start = Math.max(Math.floor(scrollTop / rowHeight) - bufferRows, 0);
        const last = Math.min(
            Math.ceil((scrollTop + viewPortHeight) / rowHeight) + bufferRows - 1, 
            totalRows - 1
        );
        setIdx({ ...idx, start, last});
    }

    useEffect(() => {
        const last = Math.ceil(viewPortHeight / rowHeight) + bufferRows - 1;
        console.log(viewPortHeight, rowHeight,bufferRows ,'last')
        setIdx({ ...idx, last});
    }, []);

    return (
        <div className='virtual__list'>
            <div className="header">
                {Object.keys(data[0]).map((key, idx) => (
                <span key={idx}>{key}</span>
                ))}
            </div>
            <div 
                onScroll={captureScroll}
                style={{ height: `${viewPortHeight}px`}}
                className='scroll-box'
            >
                <div className='rows' style={{height: `${rowHeight * totalRows}px`}}>
                    {[...data].slice(idx.start, idx.last + 1).map((row, index) => (
                        <RowRender 
                            key={index + idx.start}
                            top={`${(idx.start + index) * rowHeight }px`}
                            height={`${rowHeight}px`}
                            data={row}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default VirtualList;