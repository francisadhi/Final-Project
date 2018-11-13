import React from 'react'
import Popular from '../lib/components/organisms/Popular'
import Carousell from '../lib/components/molecules/Carousel'

class Home extends React.Component {

    render() {
        return (
            <div>          
                <Carousell />
                <Popular />
            </div>
        )
    }
}

export default Home