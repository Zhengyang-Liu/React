import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

    function RenderDish({dish})
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

    function RenderComments({dishComments})
    {
        const comments = dishComments.map(comment =>
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},  {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            )
        return(
            <ul className="list-unstyled">
                {comments}
            </ul>
        )
    }

    const DishDetail = (props) =>
    {
        const dish = props.dish;
        if(dish != null)
        {
            return(
                <div class = "container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish = {props.dish}></RenderDish>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments dishComments = {props.dish.comments}></RenderComments>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(<div></div>);
        }
    }


export default DishDetail;