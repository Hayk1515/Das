import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('constructor')
  }
  componentDidMount(){
    console.log('mount')
  }
  render(){
    console.log('render')
    return <div className='name'>
      hello1
    </div>
  }
}

export default App;
