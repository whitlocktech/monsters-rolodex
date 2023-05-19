// import {
//     Component
// } from "react";

import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({ monsters }) => ( 
    <div className="card-list" >
        {monsters.map((monster) => {
            return (
                <Card monster={monster} />
            )
        }
        )}
    </div>
)

// class CardList extends Component {
//     render() {
//         console.log('render CardList')
//         const {monsters} = this.props
//         console.log(this.props)
//         return <div className="card-list">
//             {monsters.map((monster) => {
//                 return (
//                     <Card monster={monster}/>
//                 )
//             })}
//             </div>
//     }
// }

export default CardList;