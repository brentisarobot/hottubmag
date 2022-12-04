import React from 'react'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './About.css'

const About = () => {

    const [more, setMore] = useState(false)

    const nodeRef = React.useRef(null);

    return (    
        <>
        <main className="flex h-screen bg-yellow-200">
            <article className="container m-auto text-red-700">
                <h1 className="text-3xl text-center mb-8">About</h1>
                <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro commodi, dolores pariatur accusamus corrupti iusto quisquam? Saepe quia voluptas praesentium officiis minima nam rerum, inventore eaque est ut iusto?
                    Porro consectetur quisquam animi voluptatem fugiat veniam ipsum dignissimos quia perferendis laborum quos quas tempore laudantium repudiandae, corrupti aperiam aliquid saepe esse voluptatibus dolorum consequuntur quis eos vitae. Non, inventore?
                    Adipisci impedit repellat aliquid vel reiciendis perferendis vero! Dicta, laudantium. Amet, autem provident natus voluptatum, eaque consectetur alias similique corporis ipsam quibusdam repellat modi iusto quasi iste omnis eius nihil?
                </p>
                <CSSTransition
                in={more}
                timeout={300}
                classNames="show-more"
                nodeRef={nodeRef}
                unmountOnExit
                >
                    <div ref={nodeRef}>              
                        <p className="mb-8">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, error quis quo quia accusantium dignissimos, rem ex explicabo voluptatum asperiores repellendus saepe dolorum aspernatur eaque? Ad ea sequi beatae aut.
                            Eligendi quibusdam, repellendus aliquid quisquam voluptatem quae, facere explicabo eum asperiores accusamus similique sint nulla totam id, fugit molestiae inventore autem vero distinctio. Praesentium, quaerat atque optio sapiente eaque placeat.
                        </p>
                        <p className="mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptas a voluptatem odit maiores nobis porro explicabo eveniet fugiat consectetur esse saepe iure tempora ab repellendus, itaque debitis animi rem.
                        </p>
                    </div>
                </CSSTransition>
                <button onClick={()=>(setMore(!more))}>Show {more ? 'less' : 'more'}</button>
            </article>
        </main>
        </>
        )
    }

export default About