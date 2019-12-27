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
    API_URL = 'http://www.omdbapi.com?s=Star*&apikey=a352f93';
    state = {
        movies : []
    };

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
                                    <h2>{item.Title}</h2>
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
