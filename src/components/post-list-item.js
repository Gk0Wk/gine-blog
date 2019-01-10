import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

import ColorfulTag from './hash-colorful-tag'

const colorImage = [
    'https://www.notion.so/images/page-cover/thumbs/solid_red.png',
    'https://www.notion.so/images/page-cover/thumbs/solid_yellow.png',
    'https://www.notion.so/images/page-cover/thumbs/solid_blue.png',
    'https://www.notion.so/images/page-cover/thumbs/solid_beige.png',
    'https://www.notion.so/images/page-cover/thumbs/gradients_11.jpg',
    'https://www.notion.so/images/page-cover/thumbs/gradients_10.jpg',
    'https://www.notion.so/images/page-cover/thumbs/gradients_5.png',
    'https://www.notion.so/images/page-cover/thumbs/gradients_3.png',
]

String.prototype.hashCode = function () {
    var hash = 0, i, chr
    if (this.length === 0) return hash
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0 // Convert to 32bit integer
    }
    return hash
}

const styles = {
    card: {
        maxWidth: 800,
        marginBottom: '2em',
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
}

function ImgMediaCard (props) {
    const {classes, title, content, slug, image, tags} = props
    const MyLink = props => <Link to={slug} {...props} />
    console.log(slug, slug.hashCode(), slug.hashCode() % 8)
    return (
        <Card className={classes.card}>
            <CardActionArea component={MyLink}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.media}
                    height="140"
                    image={image || colorImage[Math.abs(slug.hashCode()) % 7]}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    tags && tags.map(tag => <ColorfulTag tag={tag}/>)
                }
            </CardActions>
        </Card>
    )
}

ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ImgMediaCard)