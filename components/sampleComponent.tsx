'use client' // クライアントコンポーネントとして利用する

import { useState } from "react";


export default function SampleComponent() {
    const [count, setCount] = useState<number>(0); // use clientがないとerrorが出る
    const increment = () => {
            setCount(count => count + 1);
    }

    return (
        <div>
            <p>count : {count}</p>
            <button onClick={increment}>
                Click
            </button>
        </div>
    )
}
