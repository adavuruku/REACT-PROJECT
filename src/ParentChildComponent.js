import React from 'react';
import Footer from './Footer';
function ParentChildComponent(){
    return(
        <div>
            <nav className="navbar">
                <h1 >Hello A Third Time !</h1>
                <ul>
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                    <li>Thing 3</li>
                </ul>
            </nav>
            <main>
                <p>Welcome To Aptech Computer Trainning </p>
            </main>
            <Footer />    
        </div>
    )
}

export default ParentChildComponent