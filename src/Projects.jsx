import React from 'react';
import {
    Card,
    CardDeck,
    Carousel,
    Container,
    Jumbotron,
    Row,
} from 'react-bootstrap';

class ProjectCard extends React.Component {
    render() {
        const {title, image, images} = this.props;
        return (
            <Card style={{
                width: "325px",
                margin: "0 10px 20px 10px",
                flexGrow: "1"
            }}>
                {image && <Card.Img variant="top" src={image} />}
                {images && <Carousel indicators={false}>
                    {images.map((image, key) =>
                        <Carousel.Item key={key}>
                            <Card.Img variant="top" src={image} />
                        </Carousel.Item>
                    )}
                </Carousel>}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {this.props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export class ProjectsComponent extends React.Component {
    render() {
        return <Jumbotron style={styles.jumbotron}>
            <Container>
                <h1>Projects</h1>
                <hr/>
                <CardDeck>
                    <ProjectCard 
                        title="Royza"
                        images={['images/royza1.png', 'images/royza2.png', 'images/royza3.png', 'images/royza4.png']}
                    >
                        <span>Sample text blahh blah blah</span>
                    </ProjectCard>
                    <ProjectCard 
                        title="Opus"
                        image="images/opus.gif"
                    >
                        <span>Sample text blahh blah blah</span>
                    </ProjectCard>
                </CardDeck>
            </Container>
        </Jumbotron>;
    }
}

const styles = {
    jumbotron: {
        background: "none",
    },
};