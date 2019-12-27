import {
    IonAvatar,
    IonContent,
    IonHeader,
    IonItem, IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {
    API_KEY = "apikey=a352f93";
    API_URL_HOST = 'http://www.omdbapi.com';
    API_URL = this.API_URL_HOST + '?s=Star&' + this.API_KEY;
    state = {
        movies : []
    };

    getDetailUrl(item: any) {
        return '/details/' + item.imdbID;
    }

    componentDidMount(): void {
        axios.get(this.API_URL).then((response) => {
            this.setState({movies: response.data.Search})
        })
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Listado películas</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonList>
                        <IonListHeader>
                            Películas que contienen Star
                        </IonListHeader>
                        {this.state.movies.map((item: any) => (
                            <IonItem>
                                <IonAvatar slot="start">
                                    <img alt="" src={item.Poster}/>
                                </IonAvatar>
                                <IonLabel>
                                    <a href={this.getDetailUrl(item)}>
                                        <h2>{item.Title}</h2>
                                    </a>
                                    <h3>{item.Year}</h3>
                                </IonLabel>
                            </IonItem>
                            ))}
                    </IonList>
                </IonContent>
            </IonPage>
        );
    }
};

export default Home;
