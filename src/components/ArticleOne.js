import React, { Component } from "react";
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import pic1 from '../pictures/pic1.png'

export default class ArticleOne extends Component {
  state = {
      loading: true,
  }

render() {

    if (this.state.loading) {
        return <div>loading...</div>;
    }

    return (
      <React.Fragment>

        <div>
            <h2 class="ui header">Headline</h2>
        </div>

        <div>
            <img src={pic1} class="ui huge image" />  
        </div>

        <button class="ui circular facebook icon button">
            <i class="facebook icon"></i>
        </button>
        <button class="ui circular twitter icon button">
            <i class="twitter icon"></i>
        </button>
        <button class="ui circular linkedin icon button">
            <i class="linkedin icon"></i>
        </button>
        <button class="ui circular instagram icon button">
            <i class="instagram icon"></i>
        </button>

        <div class="ui text container"> 
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
                mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
                laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
                mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
                laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi.
            </p>
        </div>
      </React.Fragment>
    );
  }
}


        /* for an image can take up the width of its container, use: class="ui fluid image" */
             // Text container with header 