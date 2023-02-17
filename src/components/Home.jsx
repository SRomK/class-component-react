import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import styles from './Home.module.css'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';


export default class Home extends React.Component {
    render() {
        return(
            <>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <PhotoCameraIcon />
                        <Typography variant="h6">
                            Photo Album
                        </Typography>
                    </Toolbar>
                </AppBar>

                <main>
                    <div>
                        <Container maxWidth="sm">
                            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                Photo Album
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Hello everyone, this is a Photo Album to share beautiful pictures. Now I will write a bunch of stuff to make the text look better and with more words, since there is no further explanation a what a photo album is than this.
                            </Typography>
                        </Container>
                    </div>
                </main>
            </>
        )
    } 
}
