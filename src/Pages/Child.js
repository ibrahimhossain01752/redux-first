import React, { useState } from 'react'

function Child() {
    const [count, setCount] = useState(0);
    return (
        <div className="card w-96 bg-slate-900 text-neutral-content">
        <div className="card-body items-center text-center">
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
