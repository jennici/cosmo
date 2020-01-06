import React, { Component } from 'react'
import { 
    VictoryChart, 
    VictoryZoomContainer, 
    VictoryLine, 
    VictoryBrushContainer,
    VictoryAxis,
   // VictoryTooltip 
} from 'victory';
import '../../src/css/cosmo.css';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

export default class CO2Emission extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            zoomDomain: { x: [new Date(1950, 1, 1), new Date(2014, 1, 1)],},
            isCO2: []
        };
      }

      handleZoom(domain) {
        this.setState({ zoomDomain: domain });
      }


      ModalScrollingInfo = () => {
        console.log("it works");
          return (
            <Modal trigger={<Button>Long Modal</Button>}>
                <Modal.Header>Profile Picture</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Modal.Description>
                        <Header>Modal Header</Header>
                        <p>
                        This is an example of expanded content that will cause the modal's
                        dimmer to scroll
                        </p>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Modal.Description>
                </Modal.Content>
            <Modal.Actions>
                <Button primary>
                    Proceed <Icon name='right chevron' />
                </Button>
            </Modal.Actions>
        </Modal>
        );
    };
      

    render() {

        const emission = this.props.emission;
        if (emission === undefined) return <p>No data avaiable.</p>

        // map every row from emission (array) to x and y values
        const dataLineChart = emission.map(item => {
            return { 
                Year: new Date(item["Year"], 1, 1), 
                Value: parseInt(item["Total"])
            };
        });



        return (
            <div>
                <h1 className="graph">Global CO2 emissions from fossil fuels  
                    <button class="circular ui button" style={{padding: "1em", marginLeft: "2%"}} onClick={this.ModalScrollingInfo}>
                        <i className="info icon" style={{color: "#575A89", paddingLeft: "50%"}}></i>
                    </button> 
                </h1>
                
                <div className="ui segment">
                    <div className="ui two wide grid" style={{width:"50%"}}>
                    <VictoryChart 
                            padding={{ top: 5, left: 50, right: 50, bottom: 30 }}
                            width={400}
                            height={250} 
                            scale={{ x: "time" }}
                            containerComponent={
                                <VictoryZoomContainer
                                    zoomDimension="x"
                                    zoomDomain={this.state.zoomDomain}
                                    onZoomDomainChange={this.handleZoom.bind(this)}
                                />
                            }
                        >
                            <VictoryLine
                                style={{
                                    data: { stroke: "tomato" }
                                }}
                                data={dataLineChart}
                                //labels={({ dataLineChart }) => `Gas Fuel: ${dataLineChart.y}`}
                                //labelComponent={<VictoryTooltip  cornerRadius={({ dataLineChart }) => dataLineChart.x * 2} />}
                                x="Year"
                                y="Value"
                            /> 
                    </VictoryChart>

                    <VictoryChart
                            padding={{ top: 5, left: 50, right: 50, bottom: 30 }}
                            width={600} 
                            height={100} 
                            scale={{ x: "time" }}
                            containerComponent={
                                <VictoryBrushContainer
                                    brushDimension="x"
                                    brushDomain={this.state.zoomDomain}
                                    onBrushDomainChange={this.handleZoom.bind(this)}
                                />
                            }
                        >
                        <VictoryAxis
                            tickFormat={(x) => new Date(x).getFullYear()}
                        />
                        <VictoryLine
                            style={{
                                data: { stroke: "tomato" }
                            }}
                            data={dataLineChart}
                            x="Year"
                            y="Value"
                        />
                    </VictoryChart>
                    </div>
                </div>
            </div>
        )
    }
}
  