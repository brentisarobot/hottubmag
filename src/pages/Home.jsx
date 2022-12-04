import { useState } from 'react'
import './Home.css'


const Home = () => {
    
    const [background, setBackground] = useState('bg-yellow-200')

    return (
        <>
        <main className={"flex h-screen " + background + " transition duration-500"}>
            <article className="container m-auto text-red-700">
                <h1 className="text-3xl text-center mb-8">Choose a background color</h1>
                <div className="text-center">
                    <button 
                    className="border-solid bg-indigo-600 rounded-md px-3 py-1 mx-4 text-white"
                    onClick={()=>(setBackground('bg-red-200'))}
                    >
                        red
                        </button>
                    <button 
                    className="border-solid bg-indigo-600 rounded-md px-3 py-1 mx-4 text-white"
                    onClick={()=>(setBackground('bg-yellow-200'))}
                    >
                        yellow
                        </button>
                    <button 
                    className="border-solid bg-indigo-600 rounded-md px-3 py-1 mx-4 text-white"
                    onClick={()=>(setBackground('bg-orange-200'))}
                    >
                        orange
                        </button>
                </div>
                <br />
                <p className="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptas a voluptatem odit maiores nobis porro explicabo eveniet fugiat consectetur esse saepe iure tempora ab repellendus, itaque debitis animi rem.
                </p>
                <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro commodi, dolores pariatur accusamus corrupti iusto quisquam? Saepe quia voluptas praesentium officiis minima nam rerum, inventore eaque est ut iusto?
                    Porro consectetur quisquam animi voluptatem fugiat veniam ipsum dignissimos quia perferendis laborum quos quas tempore laudantium repudiandae, corrupti aperiam aliquid saepe esse voluptatibus dolorum consequuntur quis eos vitae. Non, inventore?
                    Adipisci impedit repellat aliquid vel reiciendis perferendis vero! Dicta, laudantium. Amet, autem provident natus voluptatum, eaque consectetur alias similique corporis ipsam quibusdam repellat modi iusto quasi iste omnis eius nihil?
                </p>
                <p className="mb-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, error quis quo quia accusantium dignissimos, rem ex explicabo voluptatum asperiores repellendus saepe dolorum aspernatur eaque? Ad ea sequi beatae aut.
                    Eligendi quibusdam, repellendus aliquid quisquam voluptatem quae, facere explicabo eum asperiores accusamus similique sint nulla totam id, fugit molestiae inventore autem vero distinctio. Praesentium, quaerat atque optio sapiente eaque placeat.
                </p>
            </article>
        </main>
        </>
    )
}


export default Home