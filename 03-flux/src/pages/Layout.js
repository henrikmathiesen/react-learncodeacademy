import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
    render(){
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <Header />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        {this.props.children}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
} 
