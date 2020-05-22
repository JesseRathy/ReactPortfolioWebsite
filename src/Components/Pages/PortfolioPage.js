import React,{Component} from 'react';
import Headline from '../Headline.js';
import Subheader from '../Subheader.js';
import HeadedParagraph from '../HeadedParagraph.js';
import Image from '../Image.js';
import NavBar from '../NavBar.js'

class PortfolioPage extends Component {
  state = {
    headlines:
      [
        {
          id: 1,
          value: "A Selection of My Work"
        },
        {
          id: 2,
          value: "Development Projects"
        }
      ],
    subheaders:
    [
      {
        id: 1,
        value: "My Development Portfolio"
      },
      {
        id: 2,
        value:"I'm a New Grad Developer Interested in many types of Development."
      },
      {
        value:"Below are a selection of project for you to browse."
      },
    ],
    paragraphs:
    [
      {
        id: 1,
        value: "I graduated from the University of Saskatchewan in November 2019. Through my studies, I have made web projects (both front and back end), mobile projects, and system applications in many different languages. The most enjoyable things about software development for me is that there's always something new to learn, it's a team-focused occupation, and I enjoy knowing that I build and work on things that other people could potentially use."
      },
      {
        id: 2,
        value: "The most enjoyable things about software development to me is that there's always something new to learn, it's a team-focused occupation, and I enjoy knowing that I build and work on things taht other people could potentially use."
      },
      {
        id: 3,
        value:"Below is a selection of projects for you to browse."
      },
    ],
    images:
    [
      {
        id: 1,
        alttext: "This is a test picture",
        imageURL: "https://i.imgur.com/hp7KA9l.png"
      },
      {
        id: 2,
        alttext: "This is a test picture",
        imageURL: "https://i.imgur.com/hp7KA9l.png"
      },
      {
        id: 3,
        alttext: "This is a test picture",
        imageURL: "https://i.imgur.com/hp7KA9l.png"
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

  render() {
    return (
      <>
      <div>
        <NavBar links={this.state.navLinks} />
      </div>
      <div className="PortfolioSplash">
        <Headline textHeadline={this.state.headlines[0]}/>
        <Subheader textSubheader={this.state.subheaders[0]}/>
      </div>
      <div>
        <HeadedParagraph textSubheader={this.state.subheaders[1]} paragraphText={this.state.paragraphs[0]} />
      </div>
      <div>
        <Subheader textSubheader={this.state.subheaders[2]} />
      </div>
      <div>
        <Headline textHeadline={this.state.headlines[1]} />
        <div><Image className="placeHolder" imageShown={this.state.images[0]}/></div>
        <div><Image className="placeHolder" imageShown={this.state.images[1]}/></div>
        <div><Image className="placeHolder" imageShown={this.state.images[2]}/></div>
      </div>
      </>

    );
  }
}

export default PortfolioPage;
