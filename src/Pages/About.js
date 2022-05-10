import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
               <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                   <Row>
                       <Col sm={3}>
                           <Nav variant="pills" className="flex-column mt-2">
                               <Nav.Item>
                                   <Nav.Link eventKey="first">Design</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="second">Team</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="third">Programming</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                               </Nav.Item>
                           </Nav>
                       </Col>
                       <Col sm={9}>
                           <Tab.Content className="mt-3">
                               <Tab.Pane eventKey="first">
                                   <img src="https://avatars.mds.yandex.net/i?id=1613a86b79c57ca8dde2605a32821568-5870469-images-thumbs&n=13"/>
                                   <p>
                                       Сегодня замечательный весенный день.
                                       Маша и Катя вышли на улицу, чтобы посмотреть,
                                       как распускаются первые листочки на деревьях,
                                       из земли вылезает первая травка и пслушать пение грачей.
                                       Сегодня подругам никуда не надо было идти,
                                       но пейзаж за окном их обворожил своей девственной красотой.
                                   </p>
                               </Tab.Pane>
                               <Tab.Pane eventKey="second">
                                   <img src="https://avatars.mds.yandex.net/i?id=1613a86b79c57ca8dde2605a32821568-5870469-images-thumbs&n=13"/>
                                   <p>
                                       Сегодня замечательный весенный день.
                                       Маша и Катя вышли на улицу, чтобы посмотреть,
                                       как распускаются первые листочки на деревьях,
                                       из земли вылезает первая травка и пслушать пение грачей.
                                       Сегодня подругам никуда не надо было идти,
                                       но пейзаж за окном их обворожил своей девственной красотой.
                                   </p>
                               </Tab.Pane>
                               <Tab.Pane eventKey="third">
                                   <img src="https://avatars.mds.yandex.net/i?id=1613a86b79c57ca8dde2605a32821568-5870469-images-thumbs&n=13"/>
                                   <p>
                                       Сегодня замечательный весенный день.
                                       Маша и Катя вышли на улицу, чтобы посмотреть,
                                       как распускаются первые листочки на деревьях,
                                       из земли вылезает первая травка и пслушать пение грачей.
                                       Сегодня подругам никуда не надо было идти,
                                       но пейзаж за окном их обворожил своей девственной красотой.
                                   </p>
                               </Tab.Pane>
                               <Tab.Pane eventKey="fourth">
                                   <img src="https://avatars.mds.yandex.net/i?id=1613a86b79c57ca8dde2605a32821568-5870469-images-thumbs&n=13"/>
                                   <p>
                                       Сегодня замечательный весенный день.
                                       Маша и Катя вышли на улицу, чтобы посмотреть,
                                       как распускаются первые листочки на деревьях,
                                       из земли вылезает первая травка и пслушать пение грачей.
                                       Сегодня подругам никуда не надо было идти,
                                       но пейзаж за окном их обворожил своей девственной красотой.
                                   </p>
                               </Tab.Pane>
                               <Tab.Pane eventKey="fifth">
                                   <img src="https://avatars.mds.yandex.net/i?id=1613a86b79c57ca8dde2605a32821568-5870469-images-thumbs&n=13"/>
                                   <p>
                                       Сегодня замечательный весенный день.
                                       Маша и Катя вышли на улицу, чтобы посмотреть,
                                       как распускаются первые листочки на деревьях,
                                       из земли вылезает первая травка и пслушать пение грачей.
                                       Сегодня подругам никуда не надо было идти,
                                       но пейзаж за окном их обворожил своей девственной красотой.
                                   </p>
                               </Tab.Pane>
                           </Tab.Content>
                       </Col>
                   </Row>
               </Tab.Container>
            </Container>
        );
    }
}

export default About;