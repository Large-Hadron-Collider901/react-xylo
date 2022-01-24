import React from "react";
import Xylophone from "xylophone-react"
import '../App.css'

class Xylo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressedKey: 0, currentOctave: -3};
        this.setPressedKey = this.setPressedKey.bind(this);
            
      }

      setPressedKey(key) {
        this.setState({pressedKey: key})

    }
    
    
render() {
return(

<>


<div id="xylo">
    <Xylophone pressedKey={this.setPressedKey} numberOfKeys={13} height={200} width={60} startingOctave={this.state.currentOctave} colors={[
  {
    color: 'burlywood',
    colorPressed: 'black',
    background: 'black'
  },
  {
    color: 'violet', 
    
  },
  {
    color: 'darkslateblue', 
    
  },
  {
    color: 'palegreen', 
    
  },
  {
    color: 'lightseagreen', 
    
  },
  {
    color: 'indianred', 
    
  },
  {
    color: 'sandybrown', 
    
  },
  {
    color: 'mediumslateblue', 
    
  },
  {
    color: 'springgreen', 
    
  },
  {
    color: 'skyblue', 
    
  },
  {
    color: 'orange', 
    
  },
  {
    color: 'pink', 
    
  },
  {
    color: 'lightcoral', 
    
  },
]}/>
</div>
    </>
    )

    }
}
export default Xylo;