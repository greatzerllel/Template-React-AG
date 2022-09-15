import React from 'react';
/* import Navbar from './components/Navbar';
import Body from './components/Body'; */
import ComponentTest from './components/ComponentTest';

export function Main({ /* navbar, body, cards, */ footer }) { // Destructurin Javascript
    return (
        <>
           {/*  <Navbar navbar={navbar} />

            <Body body={body} cards={cards} />
 */}
            <ComponentTest footer={footer} />
        </>

    )

}

export default Main;