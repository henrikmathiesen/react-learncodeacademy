import React from "react";

export default class Footer extends React.Component {
    render() {
        const footerStyles = {
            marginTop: "60px",
        };

        return (
            <footer class="text-center" style={footerStyles}>
                <hr/>
                Henrik Mathiesen, 2016
            </footer>
        );
    }
}