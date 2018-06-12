/*

import * as functions from 'firebase-functions'
import BigQuery from '@google-cloud/bigquery'

export default functions.firestore
  .document('/projects/{projectId}')
  .onDelete(removeProjectFromBQ);

 
async function removeProjectFromBQ(snap, context) {

  let config = functions.config();
  let datasetName = config.projectslog.dataset || "projectslog";
  let tableName = config.projectslog.table || "projects";
  let bigquery = new BigQuery();

  let document = snap.data()
  document.id = snap.id

  let row = {
    insertedId: snap.id,
    createdAt: document.createdAt,
    createdBy: document.createdBy,
    name: document.name    
  };

  return dataset.table(tableName).delete(row, { raw: true }).catch(err => {
    console.error(`table.insert: ${JSON.stringify(err)}`)
    return err
  });

}
*/