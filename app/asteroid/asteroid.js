import { createClass } from 'asteroid';
import { add, remove, edit } from '../redux/actions/index';
import store from '../redux/store';

const Asteroid = createClass();
// Connect to a Meteor backend
export const asteroid = new Asteroid({
  endpoint: 'ws://localhost:9000/websocket',
});

// if you want realitme updates in all connected clients
// subscribe to the publication

//
asteroid.ddp.on('added', (doc) => {
  // we need proper document object format here
  const docObj = Object.assign({}, doc.fields, { _id: doc.id });
  const type = `add_${doc.collection}`.toUpperCase();
  store.dispatch(add(docObj, type));
});

asteroid.ddp.on('removed', (removedDoc) => {
  store.dispatch(remove(removedDoc.id));
});

asteroid.ddp.on('changed', (updatedDoc) => {
  const type = `EDIT_${updatedDoc.collection}`.toUpperCase();
  store.dispatch(edit(updatedDoc.id, updatedDoc.fields, type));
});
