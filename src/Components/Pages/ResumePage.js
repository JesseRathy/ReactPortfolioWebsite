import React,{Component} from 'react';
import Headline from '../Headline.js';
import Subheader from '../Subheader.js';
import Paragraph from '../TextDescription.js';
import HeadedList from '../HeadedList.js';
import NavBar from '../NavBar.js'


class ResumePage extends Component {

  state = {
    headlines:
      [
        {
          id: 1,
          value: "Take a Peek!"
        },
        {
          id: 2,
          value: "Skills"
        },
        {
          id: 3,
          value: "Education"

        }
      ],
    subheaders:
    [
      {
        id: 1,
        value: "Download and have a look at my resume"
      },
      {
        id: 2,
        value: "Day-to-Day Work In:"
      },
      {
        id: 3,
        value: "Passing Familiarity With:"
      }
    ],
    paragraphs:
    [
      {
        id: 1,
        value: ""
      },
      {
        id: 2,
        value: ""
      },
      {
        id: 3,
        value:"I studied at the University of Saskatchewan and was awarded a Bachelor's of Science with Great Distinction from Sept 2013 to Nov 2019."
      },
    ],
    comfortableItems:
    [
      {
      id: 1,
      value: "Java"
      },
      {
      id: 2,
      value: "Python"
      },
      {
      id: 3,
      value: "JSON"
      },
      {
      id: 4,
      value: "SQL"
      },
      {
      id: 5,
      value: "JavaScript"
      },
      {
      id: 6,
      value: "HTML"
      },
      {
      id: 7,
      value: "CSS"
      },
      {
      id: 8,
      value: "React.js"
      },
      {
      id: 9,
      value: "MongoDB"
      },
    ],
    familiarItems:
    [
      {
      id: 1,
      value: "C#"
      },
      {
      id: 2,
      value: "C++"
      },
      {
      id: 3,
      value: "Node.js"
      },
      {
      id: 4,
      value: "PHP"
      },
      {
      id: 5,
      value: "Git"
      },
      {
      id: 6,
      value: "R"
      },
      {
      id: 7,
      value: "Junit"
      },
      {
      id: 8,
      value: "Jest"
      },
      {
      id: 9,
      value: "Pandas"
      },
      {
      id: 10,
      value: "Scikit-Learn"
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
      <div className="ResumePage">
        <Headline className="mainHeadline" textHeadline={this.state.headlines[0]}/>
        <Subheader className="mainSubheader" textSubheader={this.state.subheaders[0]} />
        {/*Put a Button Here*/}
      </div>

      <div>
        <Headline textHeadline={this.state.headlines[1]} />
        <div>
        <HeadedList textSubheader={this.state.subheaders[1]} items={this.state.comfortableItems} />
        <HeadedList textSubheader={this.state.subheaders[2]} items={this.state.familiarItems} />
        </div>
      </div>
      <div>
        <Headline textHeadline={this.state.headlines[2]}/>
        <Paragraph paragraphText={this.state.paragraphs[2]}/>
      </div>
      </>
    );
  }
}

export default ResumePage;
