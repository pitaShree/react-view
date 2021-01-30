import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <img src='https://bit.ly/2IUavVD' className='w-100'  alt='layout/Home'/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card bg-primary">
                                <div className="card-body">
                                    <h5>Demo 4</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card bg-primary">
                                <div className="card-body">
                                    <h5>Demo 4</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card bg-primary">
                                <div className="card-body">
                                    <h5>Demo 4</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;