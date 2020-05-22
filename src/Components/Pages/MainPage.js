import React,{Component} from 'react';
import {Route} from 'react-router-dom';

import Headline from '../Headline.js';
import Subheader from '../Subheader.js';
import Paragraph from '../TextDescription.js';
import Image from '../Image.js';
import HeadedList from '../HeadedList.js'
import NavBar from '../NavBar.js'

import RowWrapper from '../StyledComponents/RowWrapper.js'
import GridSection from '../StyledComponents/GridSection.js'
import StyledHeader from '../StyledComponents/StyledHeader.js'
import MainPageHeadline from '../StyledComponents/MainPageHeadline.js'

class MainPage extends Component {
  state = {
    headlines:
      [
        {
          id: 1,
          value: "Hi, I'm Jesse Rathy."
        }
      ],
    subheaders:
    [
      {
        id: 1,
        value: "Newly Graduated Software Developer."
      },
      { id: 2,
        value: "This is a test bro"
      }
    ],
    paragraphs:
    [
      {
        id: 1,
        value: "this is a test to see if I can send specific props into specific pieces."
      },
      {
        id: 2,
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius porta tortor, sagittis eleifend ligula fermentum in. Ut non ante eget mi mattis interdum a non est. Donec luctus dignissim lorem dapibus facilisis. Quisque eget eros placerat, tempor enim eu, aliquet ante. Donec suscipit eget ex quis mollis. Phasellus pellentesque urna nec purus maximus gravida. Mauris vel risus eu urna hendrerit dictum in quis dui. Nunc eget sapien odio. Curabitur dictum dapibus pretium. Etiam pellentesque nibh tincidunt bibendum bibendum. Etiam venenatis justo a urna imperdiet hendrerit."
      },
      {
        id: 3,
        value:"Donec rutrum quis est nec bibendum. In hac habitasse platea dictumst. Maecenas justo enim, tempus ac finibus maximus, iaculis at eros. Praesent sagittis urna vitae dolor gravida, ac volutpat arcu gravida. Suspendisse accumsan tincidunt venenatis. Donec finibus iaculis augue, nec efficitur enim rutrum quis. Vestibulum libero tortor, laoreet eu congue et, egestas nec mauris. Mauris iaculis sit amet mauris sit amet vestibulum."
      },
      {
        id: 4,
        value:"Pistol shots ring out in the barroom night Enter Patty Valentine from the upper hall She sees the bartender in a pool of blood Cries out, “My God, they killed them all!"
      }
    ],
    images:
    [
      {
        id: 1,
        alttext: "This is a test picture",
        imageURL: "https://i.imgur.com/hp7KA9l.png"

      }
    ],
    buttons:
    [
      {
        id:1,
        clickFunc: () => {
          this.preventDefault();
          alert("Hello There!");
        },
        buttonText: "Test button! Click here for alert!",
        href:"./PortfolioPage.js"


      }
    ],
    listItems:
    [
      {
        id: 1,
        value: "Hey"
      },
      {
        id: 2,
        value: "Hello World"
      },
      {
        id: 3,
        value: "Pretzel"
      },
      {
        id: 4,
        value: "I tipped the pizza guy 20 bucks"
      },
      {
        id: 5,
        value: "Poutine is actually the only real Canadian Export."
      }
    ],
    navLinks:
    [
      {
        value: "Main",
        location: "/"
      },
      {
        value: "Portfolio",
        location: "/portfolio"
      },
      {
        value: "About",
        location: "/about"
      },
      {
        value: "Resume",
        location: "/resume"
      },
    ]
  };

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }

    /* 'long way to do this'
    if (this.props.clicked){
    return{
    textDecoration: 'line-through'
    } else {
      return {
      textDecoration: 'none';
      }
    }
    }


    */
  }

  render() {
      //console.log(this.state.paragraphs[0].value);
      //console.log(this.state.subheaders[0].value);
    return (
      <>
      <Route path ="/">
      <StyledHeader>
        <NavBar links={this.state.navLinks} />

      <div className="MainPage">
        <MainPageHeadline textHeadline={this.state.headlines[0]}> </MainPageHeadline>
      </div>
      </StyledHeader>
      <div className="TestParagraphs">
        <Paragraph paragraphText={this.state.paragraphs[0]} className="mainpara" />
        <Paragraph paragraphText={this.state.paragraphs[1]} className="mainpara" />
        <Paragraph paragraphText={this.state.paragraphs[2]} className="mainpara" />
        <Paragraph paragraphText={this.state.paragraphs[3]} className="mainpara" />
      </div>

      <div>
        <Image imageShown={this.state.images[0]} className="testimg"/>
      </div>

      <div>
        <HeadedList textSubheader={this.state.subheaders[1]} items={this.state.listItems}/>
      </div>
      </Route>
      </>
    );
  }
}

export default MainPage;
