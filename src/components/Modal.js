import React, { Component } from 'react';
import '../css/cosmo.css'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import threewomen from '../pictures/three-women.png'

export default class ModalPopUp extends Component {

  constructor(props) {
    super(props);
    this.state = {clicked_index: 0};
    this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler(index){
    console.log(index)
      this.setState({clicked_index: index});
  };

  render() {


    const ModalScrolling = () => (
  
      <Modal style={{marginLeft: "20em", marginBottom: "20em", marginTop: "5em"}} trigger={<Button className="circular ui button" style={{padding: "1em", marginLeft: "2%", alignItems: "right", marginTop: "60%"}}>
                    <i className="info icon" style={{color: "#575A89", paddingLeft: "50%"}}></i>
                    </Button>} closeIcon> 
        <Modal.Header>Info</Modal.Header>
        <Modal.Content image scrolling>
          <Image size='medium' src={threewomen} wrapped />
          <Modal.Description>
            <Header>CO2 emissions</Header>
              <p>Why Does CO2 get Most of the Attention When There are so Many Other Heat-
              Trapping Gases?</p>
              <Image src='https://www.nature.com/immersive/d41586-019-02711-4/public/img/emissions-3-small.png' />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
    console.log("it works");

    return (
      <div>
        <ModalScrolling />
      </div>
    )
  }
}