import { useState } from 'react'

export function Count() {

    const [count, setcount] = useState(0);

    function increment() {
   

        setcount(count + 1);
      

    }

    return (


        <div>

            <h2>{count}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>

    );

}