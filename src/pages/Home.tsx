import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Diagram from '../components/Diagram';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>React Ionic Diagram App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">React Ionic Diagram App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Diagram/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
