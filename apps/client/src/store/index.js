import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import User from 'classes/User'

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()
database.register(User)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [VuexORM.install(database)],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  })

  return Store
}
