
import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id: 2,
      Subject:{title:'WEB', sub:'World Wide Web!'},
      welcome :{title:'Welcome', desc:'Hello, React!!!'},
      Contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ],
    }
  }
  render(){
    let _title, _desc, _article= null;

    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read'){
      let i = 0;
      while(i < this.state.Contents.length){
        let data = this.state.Contents[i];
        console.log(data.id);
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title,_desc) {
        console.log(_title,_desc);
      }}></CreateContent>
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id: parseInt(id),
          });
        }.bind(this)} data={this.state.Contents}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}
export default App;
