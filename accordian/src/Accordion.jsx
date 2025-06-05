// import { useEffect, useState } from "react"
// import s from '../src/API/s.json'
// import axios from "axios"
// function Accordion() {
//     const [data, setData] = useState([])
//     const [active, setactive] = useState(null)

//     const handleButton = (index) => {
//         setactive(active === index ? null : index)
//     }

//     useEffect(() => {
//         setData(s)
//     }, [])

//     return (
//         <>
//             <h1>The Accordion</h1>
//             <ul className="section-accordion">
//                 {
//                     data.map((e, index) => (
//                         <li key={e.id}>
//                             <div className="accordion-grid">
//                                 <p>{e.question}</p>
//                                 <button onClick={() => handleButton(index)}>
//                                     {active === index ? 'Close' : 'Show'}
//                                 </button>
//                             </div>
//                             {active === index && <p>{e.answer}</p>}
//                         </li>
//                     ))
//                 }
//             </ul>
//         </>
//     )
// }

// export default Accordion

import { useEffect, useState } from "react"
import axios from 'axios'

function Accordion() {
    const [data, setData] = useState([])
    const [active, setActive] = useState(null)

    const fetchData = async () => {
        
            const res = await axios.get('http://localhost:5000/api/faqs')
            setData(res.data)
        
    }

    const handleToggle = (index) => {
        setActive(active === index ? null : index)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>The Accordion</h1>
            <ul className="section-accordion">
                {data.map((s, index) => (
                    <li key={s._id}>
                        <div className="accordion-grid">
                            <p><strong>Q:</strong> {s.question}</p>
                            <button onClick={() => handleToggle(index)}>
                                {active === index ? 'Hide Answer' : 'Show Answer'}
                            </button>
                        </div>
                        {active === index && <p><strong>A:</strong> {s.answer}</p>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Accordion
