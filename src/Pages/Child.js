import React from 'react';

function Child({count, setCount}) {
    
    return (
        <div className="card w-96 bg-slate-900 text-neutral-content">
        <div className="card-body items-center text-center">
            <h1>Child</h1>
          <h1 className="card-title">{count}</h1>
         
          <div className="card-actions justify-end">
            <button onClick={()=> setCount(count-1)} className="btn btn-primary">Decrease</button>
            <button onClick={()=> setCount((prvState)=> prvState+1)} className="btn btn-ghost">Increase</button>
          </div>
        </div>
      </div>
    )
}

export default Child
