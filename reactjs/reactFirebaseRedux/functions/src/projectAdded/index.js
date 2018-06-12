import * as functions from 'firebase-functions'
import BigQuery from '@google-cloud/bigquery'

/**
 * Function to send the created project to BigQuery.
 * @type {functions.CloudFunction}
 */
export default functions.firestore
  .document('/projects/{projectId}')
  .onCreate(addProjectToBQ);

/**
 * Send the created project to BigQuery
 * @param  event - firebase event with the data of the created project
 * @return {Promise}
 */
async function addProjectToBQ(snap, context) {
  let config = functions.config();
  let datasetName = config.projectslog.dataset || "projectslog";
  let tableName = config.projectslog.table || "projects";
  let bigquery = new BigQuery();

/*
  let dataset = bigquery.dataset(datasetName);
  dataset.exists().catch(err => {
    console.error(`dataset.exists: dataset ${datasetName} does not exist: ${JSON.stringify(err)}`);
    return err;
  });

  let table = dataset.table(tableName)
  table.exists().catch(err => {
    console.error(`table.exists: table ${tableName} does not exist: ${JSON.stringify(err)}`);
    return err;
  });
*/

  let document = snap.data()
  document.id = snap.id

  let row = {
    id: snap.id,
    createdAt: document.createdAt,
    createdBy: document.createdBy,
    name: document.name    
  };

  return dataset.table(tableName).insert(row, { raw: true }).catch(err => {
    console.error(`table.insert: ${JSON.stringify(err)}`)
    return err
  });

}