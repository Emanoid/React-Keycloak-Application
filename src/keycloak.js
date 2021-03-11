import Keycloak from 'keycloak-js'
 
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'

const keycloakConfig = {
    url: 'http://localhost:8180/auth',
    realm: 'Realm1',
    clientId: 'keycloak-react'
}

const keycloak = new Keycloak(keycloakConfig);

export default keycloak