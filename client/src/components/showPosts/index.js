import React from "react";
import "./index.css";
import { Accordion, Card, Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { SHOWPOST } from "../../actions";
//import addPosts

function Posts(){
    const dispatch = useDispatch();
    const show = () => {
        dispatch(SHOWPOST())
    };
    //on the sign in component, we'll load the post state with the data. Here we are retrieving it.
    const postState = useSelector(state => state.post);
    //making a fakePost here to see what data coming in could potentially look like and feed into below
    const fakePosts = [{id: 1, title: "Running to IKEA", type: "offer", category: "errands", message: "Hi everyone, I'm running to IKEA later today. Let me know if you need me to pick anything up.", firstName: "Stephanie", lastName: "Lake", url: "", dateCreated: "12/5/19", comments: [{ id: 1, title: "I need something", firstName: "John", lastName: "Smith", message: "Oh, yes please, I need to little shelves for my kids play area, see attached pics", photo: "url", dateCreated: "12/5/18"}, {id: 1, title: "", firstName: "Daisy", lastName: "McHolland", message: "I have a coupon if you want to take that with you!", dateCreated: "12/5/19 11:18AM"}]}, {id: 2, title: "I'm good at sewing", type: "offer", category: "miscellaneous", message: "Hi everyone, I just retired and have lots of time. I'm really good at sewing.", firstName: "Tina", lastName: "Turner", url: "", dateCreated: "12/5/19", comments: [{ id: 1, title: "Cushion", firstName: "John", lastName: "Smith", message: "Hi Tina. I live across the street from you, we just moved here! I need a cushion sewed quickly.", photo: "url", dateCreated: "12/8/17"}]}];     
    return (
        <>
        { fakePosts.length ? (
            <Accordion id="myPosts" defaultActiveKey="0">
                {
                    fakePosts.map((el, i) => (
                        <Card key={el.id}>
                            <Accordion.Toggle as={Card.Header} eventKey={i}>
                                <Row>
                                    <Col id="title">{el.title}</Col>
                                    <Col className="text-right">{el.firstName} {el.lastName}</Col>
                                    <Col className="text-right"><Button className="button" variant="none" onClick={show}>Comment</Button></Col>
                                </Row> 
                                <Row>
                                    <Col>{el.message}</Col>
                                </Row>
                                <Row>
                                    <Col>{el.dateCreated}</Col>
                                </Row> 
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={i}>
                            <Card.Body>
                                {el.comments.map(item => (
                                    <div className="commentBox border">
                                        <p className="userName">{item.firstName} {item.lastName}</p>
                                        <div className="userComment">
                                            <p>{item.message}</p>
                                            <p>{item.dateCreated}</p>
                                        </div>
                                    </div>
                                ))}
                            </Card.Body>                            
                            </Accordion.Collapse>
                        </Card>
                ))}                        
            </Accordion>
        ) : (
            <p>No posts to display</p>
        )}
        </>
    )
};

export default Posts;