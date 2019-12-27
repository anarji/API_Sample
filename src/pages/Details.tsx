import {
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent,
    IonHeader, IonImg,
    IonPage, IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from "react-router";

interface Movie {
    Title: string;
    Year: string;
    Runtime: string;
    Genre : string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;
}

class Home extends Component {
    API_URL = 'http://www.omdbapi.com?apikey=a352f93';
    state = {
        movie: {} as Movie
    };

    filterData(data: any): Movie {
        if (!data) {
            return {} as Movie;
        }

        let out = {} as Movie;
        out.Title = data.Title;
        out.Year = data.Year;
        out.Runtime = data.Runtime;
        out.Genre = data.Genre;
        out.Director = data.Director;
        out.Actors = data.Actors;
        out.Plot = data.Plot;
        out.Poster = data.Poster;

        return out;
    }

    componentDidMount(): void {
        // @ts-ignore
        const id = this.props.match.params.id;
        console.log(id);

        axios.get(this.API_URL + `&i=${id}`).then((response) => {
            this.setState({movie: this.filterData(response.data)})
        })
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{this.state.movie.Title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonCard>
                        <IonImg style={{width: '200px', height: '350px'}} src={this.state.movie.Poster} />
                        <IonCardHeader>
                            <IonCardTitle>{this.state.movie.Director} - {this.state.movie.Year}</IonCardTitle>
                            <IonCardSubtitle>{this.state.movie.Actors}</IonCardSubtitle>
                            <IonCardSubtitle>{this.state.movie.Runtime} - {this.state.movie.Genre}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {this.state.movie.Plot}
                        </IonCardContent>
                    </IonCard>
                    <a href="/">Volver al listado</a>
                </IonContent>

            </IonPage>
        );
    }
};

// @ts-ignore
export default withRouter(Home);
