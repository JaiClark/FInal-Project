import React from 'react';
import './ThankYou.css';


class Thanks extends React.PureComponent {
    render() {
        return (
            <div>
                 <h2>Time To Celebrate!!!</h2>
            <br></br>

            <p class="container graph">We recieved your purchase! You will recieve a order confirmation shortly, until then enjoy this giphy!  </p>
            <iframe  src="https://giphy.com/embed/3oEdva9BUHPIs2SkGk" className="r" width="480" height="480" frameBorder="0" class="giphy-embed center" allowFullScreen></iframe>
            </div>
        )
    }

}

export default Thanks;