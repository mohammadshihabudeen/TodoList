import React from 'react';
let no=0;
function Header({title}) {//name should be same in object destruction
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}
Header.defaultProps={
    title:"To do list"
}
export default Header 