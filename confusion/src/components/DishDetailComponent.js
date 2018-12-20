import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component
{
    constructor(props)
    {
        super(props);
    }  

    renderDish(dish)
    {
        return(
            <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(dishComments)
    {
        const comments = dishComments.map(comment =>
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},  {new Date(comment.date).toDateString().substr(4)}</p>
                </li>
            )
        return(
            <ul className="list-unstyled">
                {comments}
            </ul>
        )
    }

    render()
    {
        const dish = this.props.dish;
        if(dish != null)
        {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }else{
            return(<div></div>);
        }
    }
}

export default DishDetail;