import React, { useState } from 'react';
import Child from './Child';

function Parent () {
    const [count, setCount] = useState(0);
    return (
        <div class="card w-96 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h1 class="card-title">Parent</h1>
    <h1>{count}</h1>
    
    <div class="card-actions justify-end">
      {/* <button class="btn btn-primary">Increment</button> */}
      {/* <button class="btn btn-ghost">Deny</button> */}
    </div>
  </div>
  <Child count={count} setCount={setCount}></Child>
</div>
    );
};

export default Parent;