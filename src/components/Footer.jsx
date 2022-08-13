import './Footer.css'

const Footer = (props) => (

        <>
            <footer className="bg-orange-300 p-11 text-center text-white">
                <ul>
                    {props.children}
                </ul>
            </footer>
        </>
    )

export default Footer