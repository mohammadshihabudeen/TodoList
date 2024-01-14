import React from 'react'
let year = new Date();
function Footer({ length }) {
    return (
        <footer>
            <div><div style={{
                paddingLeft: "50px"
            }}>
                {length}{length > 1 ? " items" : " item"}</div> Copyright &copy; {year.getFullYear()}</div></footer>
    )
}
export default Footer