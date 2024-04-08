import React, { Component } from "react";
import propTypes from "prop-types";
import { Wrapper } from "../utils/ResultWrapper";
import BriggsDef from "../definitions/BriggsDef";
import CareersList from "../careers/CareersList";

class Briggs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careers: [],
      showISTJ: false,
      showISFJ: false,
      showINFJ: false,
      showINTJ: false,
      showISTP: false,
      showISFP: false,
      showINFP: false,
      showINTP: false,
      showESTP: false,
      showESFP: false,
      showENFP: false,
      showENTP: false,
      showESTJ: false,
      showESFJ: false,
      showENFJ: false,
      showENTJ: false,
    };
    // this.onISTJ_click = this.onISTJ_click.bind(this);
    // this.onISFJ_click = this.onISFJ_click.bind(this);
    // this.onINFJ_click = this.onINFJ_click.bind(this);
    // this.onINTJ_click = this.onINTJ_click.bind(this);
    // this.onISTP_click = this.onISTP_click.bind(this);
    // this.onISFP_click = this.onISFP_click.bind(this);
    // this.onINFP_click = this.onINFP_click.bind(this);
    // this.onINTP_click = this.onINTP_click.bind(this);
    // this.onESTP_click = this.onESTP_click.bind(this);
    // this.onESFP_click = this.onESFP_click.bind(this);
    // this.onENFP_click = this.onENFP_click.bind(this);
    // this.onENTP_click = this.onENTP_click.bind(this);
    // this.onESTJ_click = this.onESTJ_click.bind(this);
    // this.onESFJ_click = this.onESFJ_click.bind(this);
    // this.onENFJ_click = this.onENFJ_click.bind(this);
    // this.onENTJ_click = this.onENTJ_click.bind(this);
  }

  componentDidMount() {
    this.getCareers().then((careers) => {
      this.setState({ careers });
    });
  }

  getCareers() {
    return fetch("http://localhost:3001/personalities/16").then((response) => {
      return response.json();
    });
  }

  renderISTJ() {
    return (
      <BriggsDef
        title={"Introvert | Sensing | Thinking | Judging"}
        content={`You are a type ISTJ, aka The Inspector.
                You tend to be practical and logical above all else.
                You should consider a job in accounting or engineering.`}
        CareersList={CareersList}
        //         top5Careers={this.state.careers}

        onBackClick={this.onISTJ_click}
      />
    );
  }

  renderISFJ() {
    return (
      <BriggsDef
        title={"Introvert | Sensing | Feeling | Judging"}
        content={`You are a type ISFJ, aka The Protector.
                  You tend to be sympathetic and organized above all else.
                  You should consider a job in childcare or bookkeeping.`}
        CareersList={CareersList}
        onBackClick={this.onISFJ_click}
      />
    );
  }

  renderINFJ() {
    return (
      <BriggsDef
        title={"Introvert | iNtuitive | Feeling | Judging"}
        content={`You are a type INFJ, aka The Counselor.
                You tend to be sensitive and creative above all else.
                You should consider a job in education or the arts.`}
        onBackClick={this.onINFJ_click}
        CareersList={CareersList}
      />
    );
  }

  renderINTJ() {
    return (
      <BriggsDef
        title={"Introvert | iNtuitive | Thinking | Judging"}
        content={`You are a type INTJ, aka The Mastermind.
                      You tend to be decisive and insightful above all else.
                      You should consider a job in architecture or engineering.`}
        onBackClick={this.onINTJ_click}
        CareersList={CareersList}
      />
    );
  }

  renderISTP() {
    return (
      <BriggsDef
        title={"Introvert | Sensing | Thinking | Perceiving"}
        content={`You are a type ISTP, aka The Operator.
                  You tend to be analytical and practical above all else.
                  You should consider a job in computer technology or farming.`}
        onBackClick={this.onISTP_click}
        CareersList={CareersList}
      />
    );
  }

  renderISFP() {
    return (
      <BriggsDef
        title={"Introvert | Sensing | Feeling | Perceiving"}
        content={`You are a type ISFP, aka The Composer.
                  You tend to be loyal and adaptable above all else.
                  You should consider a job in teaching or nursing.`}
        onBackClick={this.onISFP_click}
        CareersList={CareersList}
      />
    );
  }

  renderINFP() {
    return (
      <BriggsDef
        title={"Introvert | iNtuitive | Feeling | Perceiving"}
        content={`You are a type INFP, aka The Healer.
                  You tend to be empathetic and inquisitive above all else.
                  You should consider a job in writing or graphic design.`}
        onBackClick={this.onINFP_click}
        CareersList={CareersList}
      />
    );
  }

  renderINTP() {
    return (
      <BriggsDef
        title={"Introvert | iNtuitive | Thinking | Perceiving"}
        content={`You are a type INTP, aka The Architect.
                  You tend to be curious and analytical above all else.
                  You should consider a job in architecture or construction.`}
        onBackClick={this.onINTP_click}
        CareersList={CareersList}
      />
    );
  }

  renderESTP() {
    return (
      <BriggsDef
        title={"Extravert | Sensing | Thinking | Perceiving"}
        content={`You are a type ESTP, aka The Promoter.
                  You tend to be energetic and realistic above all else.
                  You should consider a job in sales or forestry.`}
        onBackClick={this.onESTP_click}
        CareersList={CareersList}
      />
    );
  }

  renderESFP() {
    return (
      <BriggsDef
        title={"Extravert | Sensing | Feeling | Perceiving"}
        content={`You are a type ESFP, aka The Performer.
                  You tend to be caring and resourceful above all else.
                  You should consider a job in hospitality or health care.`}
        onBackClick={this.onESFP_click}
        CareersList={CareersList}
      />
    );
  }

  renderENFP() {
    return (
      <BriggsDef
        title={"Extravert | iNtuitive | Feeling | Perceiving"}
        content={`You are a type ENFP, aka The Champion.
                  You tend to be imaginative and insightful above all else.
                  You should consider a job in therapy or acting.`}
        onBackClick={this.onENFP_click}
        CareersList={CareersList}
      />
    );
  }

  renderENTP() {
    return (
      <BriggsDef
        title={"Extravert | iNtuitive | Thinking | Perceiving"}
        content={`You are a type ENTP, aka The Inventor.
                  You tend to be enthusiastic and theoretical above all else.
                  You should consider a job in business or sports.`}
        onBackClick={this.onENTP_click}
        CareersList={CareersList}
      />
    );
  }

  renderESTJ() {
    return (
      <BriggsDef
        title={"Extravert | Sensing | Thinking | Judging"}
        content={`You are a type ESTJ, aka The Supervisor.
                  You tend to be logical and assertive above all else.
                  You should consider a job in leadership or law.`}
        onBackClick={this.onESTJ_click}
        CareersList={CareersList}
      />
    );
  }

  renderESFJ() {
    return (
      <BriggsDef
        title={"Extravert | Sensing | Feeling | Judging"}
        content={`You are a type ESFJ, aka The Provider.
                  You tend to be sociable and caring above all else.
                  You should consider a job in childcare or healthcare.`}
        onBackClick={this.onESFJ_click}
        CareersList={CareersList}
      />
    );
  }

  renderENFJ() {
    return (
      <BriggsDef
        title={"Extravert | iNtuitive | Feeling | Judging"}
        content={`You are a type ENFJ, aka The Teacher.
                  You tend to be passionate and imaginative above all else.
                  You should consider a job in teaching or the arts.`}
        onBackClick={this.onENFJ_click}
        CareersList={CareersList}
      />
    );
  }

  renderENTJ() {
    return (
      <BriggsDef
        title={"Extravert | Intuitive | Thinking | Judging"}
        content={`You are a type ENTJ, aka The Field Marshall.
                  You tend to be organized and logical above all else.
                  You should consider a job in law or engineering.`}
        onBackClick={this.onENTJ_click}
        CareersList={CareersList}
      />
    );
  }

  render() {
    let showISTJ = this.state.showISTJ;
    let showISFJ = this.state.showISFJ;
    let showINFJ = this.state.showINFJ;
    let showINTJ = this.state.showINTJ;
    let showISTP = this.state.showISTP;
    let showISFP = this.state.showISFP;
    let showINFP = this.state.showINFP;
    let showINTP = this.state.showINTP;
    let showESTP = this.state.showESTP;
    let showESFP = this.state.showESFP;
    let showENFP = this.state.showENFP;
    let showENTP = this.state.showENTP;
    let showESTJ = this.state.showESTJ;
    let showESFJ = this.state.showESFJ;
    let showENFJ = this.state.showENFJ;
    let showENTJ = this.state.showENTJ;
    if (showISTJ) {
      return this.renderISTJ();
    } else if (showISFJ) {
      return this.renderISFJ();
    } else if (showINFJ) {
      return this.renderINFJ();
    } else if (showINTJ) {
      return this.renderINTJ();
    } else if (showISTP) {
      return this.renderISTP();
    } else if (showISFP) {
      return this.renderISFP();
    } else if (showINFP) {
      return this.renderINFP();
    } else if (showINTP) {
      return this.renderINTP();
    } else if (showESTP) {
      return this.renderESTP();
    } else if (showESFP) {
      return this.renderESFP();
    } else if (showENFP) {
      return this.renderENFP();
    } else if (showENTP) {
      return this.renderENTP();
    } else if (showESTJ) {
      return this.renderESTJ();
    } else if (showESFJ) {
      return this.renderESFJ();
    } else if (showENFJ) {
      return this.renderENFJ();
    } else if (showENTJ) {
      return this.renderENTJ();
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">Briggs Result</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultBriggs}</h2>
        <hr className="my-5" />
        <p className="lead">What does this result mean?</p>
        <p>
          {(() => {
            switch (this.props.resultBriggs) {
              case "ISTJ":
                let showISTJ = this.state.showISTJ;
                this.setState({ showISTJ: !showISTJ });
                break;
              case "ISFJ":
                let showISFJ = this.state.showISFJ;
                this.setState({ showISFJ: !showISFJ });
                break;
              case "INFJ":
                let showINFJ = this.state.showINFJ;
                this.setState({ showINFJ: !showINFJ });
                break;
              case "INTJ":
                let showINTJ = this.state.showINTJ;
                this.setState({ showINTJ: !showINTJ });
                break;
              case "ISTP":
                let showISTP = this.state.showISTP;
                this.setState({ showISTP: !showISTP });
                break;
              case "ISFP":
                let showISFP = this.state.showISFP;
                this.setState({ showISFP: !showISFP });
                break;
              case "INFP":
                let showINFP = this.state.showINFP;
                this.setState({ showINFP: !showINFP });
                break;
              case "INTP":
                let showINTP = this.state.showINTP;
                this.setState({ showINTP: !showINTP });
                break;
              case "ESTP":
                let showESTP = this.state.showESTP;
                this.setState({ showESTP: !showESTP });
                break;
              case "ESFP":
                let showESFP = this.state.showESFP;
                this.setState({ showESFP: !showESFP });
                break;
              case "ENFP":
                let showENFP = this.state.showENFP;
                this.setState({ showENFP: !showENFP });
                break;
              case "ENTP":
                let showENTP = this.state.showENTP;
                this.setState({ showENTP: !showENTP });
                break;
              case "ESTJ":
                let showESTJ = this.state.showESTJ;
                this.setState({ showESTJ: !showESTJ });
                break;
              case "ESFJ":
                let showESFJ = this.state.showESFJ;
                this.setState({ showESFJ: !showESFJ });
                break;
              case "ENFJ":
                let showENFJ = this.state.showENFJ;
                this.setState({ showENFJ: !showENFJ });
                break;
              case "ENTJ":
                let showENTJ = this.state.showENTJ;
                this.setState({ showENTJ: !showENTJ });
                break;
              default:
                break;
            }
          })()}
        </p>
        {/* <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTJ_click}>
            ISTJ
          </li>
          <li className="list-group-item" onClick={this.onISFJ_click}>
            ISFJ
          </li>
          <li className="list-group-item" onClick={this.onINFJ_click}>
            INFJ
          </li>
          <li className="list-group-item" onClick={this.onINTJ_click}>
            INTJ
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTP_click}>
            ISTP
          </li>
          <li className="list-group-item" onClick={this.onISFP_click}>
            ISFP
          </li>
          <li className="list-group-item" onClick={this.onINFP_click}>
            INFP
          </li>
          <li className="list-group-item" onClick={this.onINTP_click}>
            INTP
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onESTP_click}>
            ESTP
          </li>
          <li className="list-group-item" onClick={this.onESFP_click}>
            ESFP
          </li>
          <li className="list-group-item" onClick={this.onENFP_click}>
            ENFP
          </li>
          <li className="list-group-item" onClick={this.onENTP_click}>
            ENTP
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onESTJ_click}>
            ESTJ
          </li>
          <li className="list-group-item" onClick={this.onESFJ_click}>
            ESFJ
          </li>
          <li className="list-group-item" onClick={this.onENFJ_click}>
            ENFJ
          </li>
          <li className="list-group-item" onClick={this.onENTJ_click}>
            ENTJ
          </li>
        </ul> */}
      </Wrapper>
    );
  }

  // switch (this.props.resultBriggs) {
  //   case "ISTJ":
  //     let showISTJ = this.state.showISTJ;
  //     this.setState({ showISTJ: !showISTJ });
  //   break;
  //   case "ISFJ":
  //     let showISFJ = this.state.showISFJ;
  //     this.setState({ showISFJ: !showISFJ });
  //   break;
  //   case "INFJ":
  //     let showINFJ = this.state.showINFJ;
  //     this.setState({ showINFJ: !showINFJ });
  //   break;
  //   case "INTJ":
  //     let showINTJ = this.state.showINTJ;
  //     this.setState({ showINTJ: !showINTJ });
  //   break;
  //   case "ISTP":
  //     let showISTP = this.state.showISTP;
  //     this.setState({ showISTP: !showISTP });
  //   break;
  //   case "ISFP":
  //     let showISFP = this.state.showISFP;
  //     this.setState({ showISFP: !showISFP });
  //   break;
  //   case "INFP":
  //     let showINFP = this.state.showINFP;
  //     this.setState({ showINFP: !showINFP });
  //   break;
  //   case "INTP":
  //     let showINTP = this.state.showINTP;
  //     this.setState({ showINTP: !showINTP });
  //   break;
  //   case "ESTP":
  //   let showESTP = this.state.showESTP;
  //   this.setState({ showESTP: !showESTP });
  //   break;
  //   case "ESFP":
  //     let showESFP = this.state.showESFP;
  //     this.setState({ showESFP: !showESFP });
  //   break;
  //   case "ENFP":
  //     let showENFP = this.state.showENFP;
  //     this.setState({ showENFP: !showENFP });
  //   break;   ;
  //   case "ENTP":
  //   let showENTP = this.state.showENTP;
  //   this.setState({ showENTP: !showENTP });
  //   break;
  //   case "ESTJ":
  //   let showESTJ = this.state.showESTJ;
  //   this.setState({ showESTJ: !showESTJ });
  //   break;
  //   case "ESFJ":
  //   let showESFJ = this.state.showESFJ;
  //   this.setState({ showESFJ: !showESFJ });
  //   break;
  //   case "ENFJ":
  //   let showENFJ = this.state.showENFJ;
  //   this.setState({ showENFJ: !showENFJ });
  //   break;
  //   case "ENTJ":
  //   let showENTJ = this.state.showENTJ;
  //   this.setState({ showENTJ: !showENTJ });
  // }
  //   break;
  // }

  // onISTJ_click() {
  //   let showISTJ = this.state.showISTJ;
  //   this.setState({ showISTJ: !showISTJ });
  // }

  // onISFJ_click() {
  //   let showISFJ = this.state.showISFJ;
  //   this.setState({ showISFJ: !showISFJ });
  // }

  // onINFJ_click() {
  //   let showINFJ = this.state.showINFJ;
  //   this.setState({ showINFJ: !showINFJ });
  // }

  // onINTJ_click() {
  //   let showINTJ = this.state.showINTJ;
  //   this.setState({ showINTJ: !showINTJ });
  // }

  // onISTP_click() {
  //   let showISTP = this.state.showISTP;
  //   this.setState({ showISTP: !showISTP });
  // }

  // onISFP_click() {
  //   let showISFP = this.state.showISFP;
  //   this.setState({ showISFP: !showISFP });
  // }

  // onINFP_click() {
  //   let showINFP = this.state.showINFP;
  //   this.setState({ showINFP: !showINFP });
  // }

  // onINTP_click() {
  //   let showINTP = this.state.showINTP;
  //   this.setState({ showINTP: !showINTP });
  // }

  // onESTP_click() {
  //   let showESTP = this.state.showESTP;
  //   this.setState({ showESTP: !showESTP });
  // }

  // onESFP_click() {
  //   let showESFP = this.state.showESFP;
  //   this.setState({ showESFP: !showESFP });
  // }

  // onENFP_click() {
  //   let showENFP = this.state.showENFP;
  //   this.setState({ showENFP: !showENFP });
  // }

  // onENTP_click() {
  //   let showENTP = this.state.showENTP;
  //   this.setState({ showENTP: !showENTP });
  // }

  // onESTJ_click() {
  //   let showESTJ = this.state.showESTJ;
  //   this.setState({ showESTJ: !showESTJ });
  // }

  // onESFJ_click() {
  //   let showESFJ = this.state.showESFJ;
  //   this.setState({ showESFJ: !showESFJ });
  // }

  // onENFJ_click() {
  //   let showENFJ = this.state.showENFJ;
  //   this.setState({ showENFJ: !showENFJ });
  // }

  // onENTJ_click() {
  //   let showENTJ = this.state.showENTJ;
  //   this.setState({ showENTJ: !showENTJ });
  // }
}

Briggs.propTypes = {
  resultBriggs: propTypes.string.isRequired,
};

export default Briggs;
