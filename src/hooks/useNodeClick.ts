import { Node } from 'react-flow-renderer';
import { useIonAlert } from '@ionic/react';

type UseNodeClickResult = (node: Node) => void;

const useNodeClick = (): UseNodeClickResult => {
  const [presentAlert] = useIonAlert();

  return (node: Node) => {
    presentAlert({
      header: node.data.label,
      subHeader: `ID #${node.id}`,
      buttons: ['OK'],
      translucent: true,
      mode: 'ios',
      animated: true,
    });
  };
};

export default useNodeClick;
