import React,{Component} from 'react';
import Image from '../Image.js';
import Headline from '../Headline.js';
import Subheader from '../Subheader.js';
import HeadedParagraph from '../HeadedParagraph.js'
import HeadedList from '../HeadedList.js'
import NavBar from '../NavBar.js'

class AboutPage extends Component {
  state = {
    headlines:
    [
      {
        id: "About-H1",
        value: "About the Creator"
      },
      {
        id: "About-H2",
        value: "Hobbies,Interests & Favorites"
      },
    ],
    subheaders:
    [
      {
        id:"About-S1",
        value:"Learn a Little Bit More About Me"
      },
      {
        id:"About-S2",
        value:"Who Exactly is Jesse?"
      },
      {
        id:"About-S3",
        value:"Hobbies & Interests"
      },
      {
        id:"About-S4",
        value:"Favorites"
      }
    ],
    paragraphs:
    [
      {
        id:"About-P1",
        values:"I am a new graduate born and raised in the moderately sized city of Saskatoon. As a boy, I enjoyed working and playing with computers, and apparently was quite good at both maths and logic puzzles from a young age. As I grew up, my interests constantly changed. They shifted from cars to comics to drumming to guitar and music in general, but I was still always interested in both the software and hardware side of technology. Nowadays, I'm usually being a music geek, talking and cracking jokes with my friends in voice channels, watching documentaries about the crazy things that happen both in real life and on the internet, and most important to me, keeping up with technology, software and software development."
      }
    ],
    images:
    [
      {
        id: "About-I1",
        alttext: "This is me. Hello!",
        imageURL: "#"
      }
    ],
    hobbiesInterests:
    [
      {
        id:"About-L1-1",
        value:"Listening to music"
      },
      {
        id:"About-L1-2",
        value:"Playing Guitar"
      },
      {
        id:"About-L1-3",
        value:"Coding new chatbots/talking about code"
      },
      {
        id:"About-L1-4",
        value:"Watching Documentaries"
      },
      {
        id:"About-L1-5",
        value:"Playing Board Games"
      },
      {
        id:"About-L1-6",
        value:"Watching Z-Grade Movies"
      },
      {
        id:"About-L1-7",
        value:"Playing Video Games"
      },
      {
        id:"About-L1-8",
        value:"Reading English Novels"
      },
      {
        id:"About-L1-9",
        value:"Building and Fixing Computers"
      },
      {
        id:"About-L1-10",
        value:"Creating Dungeons and Dragons characters"
      },
      {
        id:"About-L1-11",
        value:"Learning to cook"
      },
    ],
    favoriteItems:
    [
      {
        id:"About-L2-1",
        value:"Food: Korean Fried Chicken"
      },
      {
        id:"About-L2-2",
        value:"Resturaunt: Seoul"
      },
      {
        id:"About-L2-3",
        value:"FPS Game: DUSK"
      },
      {
        id:"About-L2-4",
        value:"Fighting Game: Street Fighter 3: Third Strike"
      },
      {
        id:"About-L2-5",
        value:"Overall Game: Terraria"
      },
      {
        id:"About-L2-6",
        value:"Board Game: Pathfinder"
      },
      {
        id:"About-L2-7",
        value:"Card Game: Aeon's End"
      },
      {
        id:"About-L2-8",
        value:"Musical Instrument: Bass Guitar"
      },
      {
        id:"About-L2-9",
        value:"Band: System of A Down"
      },
      {
        id:"About-L2-10",
        value:"Movie: The Room"
      },
      {
        id:"About-L2-11",
        value:"English Novel: Gaskell's Cranford"
      },
      {
        id:"About-L2-12",
        value:"Coding Language: Python"
      },
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

  }


  render() {
    return (
      <>
      <div>
        <NavBar links={this.state.navLinks} />
      </div>
          <div className="AboutPage">
            <Image imageShown={this.state.images[0]} />
            <div>
              <Headline textHeadline={this.state.headlines[0]}/>
              <Subheader textSubheader={this.state.subheaders[0]}/>
            </div>
          </div>
          <div>
            <HeadedParagraph textSubheader={this.state.subheaders[1]} paragraphText={this.state.paragraphs[0]}/>
          </div>
          <div>
            <Headline textHeadline={this.state.headlines[1]}/>
            <div>
              <HeadedList textSubheader={this.state.subheaders[2]} items={this.state.hobbiesInterests}/>
              <HeadedList textSubheader={this.state.subheaders[3]} items={this.state.favoriteItems}/>
            </div>
          </div>
      </>


    );
  }
}

export default AboutPage;
