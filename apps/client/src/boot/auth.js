import Vue from 'vue'
import { Auth0Plugin } from '../auth'
import { domain, clientId } from '../../auth_config.json'
import routeer from '../router'

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    )
  },
})
