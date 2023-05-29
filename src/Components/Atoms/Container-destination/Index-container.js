import React from "react";
import { Card } from "react-bootstrap";
import "./Index-container.css";

export default function ContainerDestination(props) {
  return (
    <Card>
      <div className="box-img">
        <Card.Img variant="top" src={props.post.img_url} className="img" />
        <Card.ImgOverlay>
          <Card.Title className="title-overlay ">{props.post.place}</Card.Title>
        </Card.ImgOverlay>
      </div>
      <Card.Body>
        <Card.Title className="fs-6 title-card">
          <a href={props.post.src} target="_blank" rel="noreferrer">
            {props.post.title}
          </a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
