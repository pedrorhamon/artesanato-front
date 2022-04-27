import React from 'react'
import { withRouter } from 'react-router-dom'

class LandingPage extends React.Component {

    goToHomePage = () => {
        this.props.history.push("/home")
    }

    render(){
        return (
            <div className="container text-center" >
                <h2>Bem vindo exposição de Artesanato Pelas de Crochê</h2>
            </div>
        )
    }

}

export default withRouter(LandingPage)