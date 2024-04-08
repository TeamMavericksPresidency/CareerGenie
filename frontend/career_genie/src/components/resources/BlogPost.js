import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardFooter,
  CardHeader
} from "shards-react";
import "./Blogs.css";

export default class BlogPost extends React.Component {
  render() {
    return (
      <div>
        <div id="blog-container">
          <Row className="row">
            <Col>
              <Card id="blogcard" className="blog-item">
                <CardImg
                  id="blog-pic"
                  top
                  src="https://www.online-bachelor-degrees.com/wp-content/uploads/2018/05/finance-management-tools.jpg"
                ></CardImg>
                <div align="center">
                  <CardHeader>
                    <a href="https://uwaterloo.ca/beyond-ideas/stories/financing/ultimate-guide-financing-your-education">
                      Ultimate guide: Financing your education
                    </a>
                  </CardHeader>
                </div>
                <CardBody>
                  <p>
                    Getting scholarships and bursaries can make a big difference
                    for your funds.
                  </p>
                </CardBody>
                <CardFooter className="blog-footer">
                  <div>By: University of Waterloo</div>
                  <div>February 28, 2020</div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Row className="row">
            <Col>
              <Card id="blogcard" className="blog-item">
                <CardImg
                  top
                  src="https://www.edgeip.com/images/FCK/Image/202003/00-SFG-HowtoWorkandStudyFromHomeSFSIC.jpg"
                />
                <div align="center">
                  <CardHeader>
                    <a href="https://www.schoolfinder.com/Discover/Article/1/5187/How-to-Work-and-Study-From-Home">
                      How to Work and Study From Home
                    </a>
                  </CardHeader>
                </div>
                <CardBody>
                  <p>
                    Classes cancelled and moving online? COVID-19 is no joke,
                    but neither is your education. Find advice to keep on top of
                    your work.
                  </p>
                </CardBody>
                <CardFooter className="blog-footer">
                  <div>By: Logan Bright</div>
                  <div>March 16, 2020</div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Row className="row">
            <Col>
              <Card id="blogcard" className="blog-item">
                <CardImg
                  top
                  src="https://www.edgeip.com/images/FCK/Image/202003/25-CPAOntario-HowtoSelfMotivate.jpg"
                />
                <div align="center">
                  <CardHeader>
                    <a href="https://www.schoolfinder.com/Discover/Article/1/5201/5-Ways-to-Self-Motivate-When-You-ve-Lost-Your-Drive">
                      5 Ways to Self-Motivate When You've Lost Your Drive
                    </a>
                  </CardHeader>
                </div>
                <CardBody>
                  <p>Reframe, reassess, and be ready to try again.</p>
                </CardBody>
                <CardFooter className="blog-footer">
                  <div>By: CPA Ontario</div>
                  <div>March 31, 2020</div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
        <div id="blog-container">
          <Row className="row">
            <Col>
              <Card id="blogcard" className="blog-item">
                <CardImg
                  top
                  src="https://www.edgeip.com/images/FCK/Image/202002/00-SFG-SmallScholarshipsBigRewardsSFSCSIC.jpg"
                />
                <div align="center">
                  <CardHeader>
                    <a href="https://www.scholarshipscanada.com/News/9/5155/Small-Scholarships,-Big-Rewards">
                      Small Scholarships, Big Rewards
                    </a>
                  </CardHeader>
                </div>
                <CardBody>
                  <p>
                    Classes cancelled and moving online? COVID-19 is no joke,
                    but neither is your education. Find advice to keep on top of
                    your work.
                  </p>
                </CardBody>
                <CardFooter className="blog-footer">
                  <div>By: Scholarship Canada</div>
                  <div>February 07, 2020</div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Row className="row">
            <Col>
              <Card id="blogcard" className="blog-item">
                <CardImg
                  top
                  src="https://www.edgeip.com/images/FCK/Image/202002/00-SFG-TopScholarshipApplicationKeywords.jpg"
                />
                <div align="center">
                  <CardHeader>
                    <a href="https://www.scholarshipscanada.com/News/9/5152/7-Keywords-to-Include-When-Applying-for-Scholarships">
                      7 Keywords to Include When Applying for Scholarships
                    </a>
                  </CardHeader>
                </div>
                <CardBody>
                  <p>
                    Classes cancelled and moving online? COVID-19 is no joke,
                    but neither is your education. Find advice to keep on top of
                    your work.
                  </p>
                </CardBody>
                <CardFooter className="blog-footer">
                  <div>By: Scholarship Canada</div>
                  <div>February 07, 2020</div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="row">
            <Col>
              <Card id="blogcard" className="blog-item">
                <CardImg
                  id="blog-pic"
                  top
                  src="https://www.online-bachelor-degrees.com/wp-content/uploads/2018/05/finance-management-tools.jpg"
                ></CardImg>
                <div align="center">
                  <CardHeader>
                    <a href="https://uwaterloo.ca/beyond-ideas/stories/financing/ultimate-guide-financing-your-education">
                      Ultimate guide: Financing your education
                    </a>
                  </CardHeader>
                </div>
                <CardBody>
                  <p>
                    Getting scholarships and bursaries can make a big difference
                    for your funds.
                  </p>
                </CardBody>
                <CardFooter className="blog-footer">
                  <div>By: University of Waterloo</div>
                  <div>February 28, 2020</div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
