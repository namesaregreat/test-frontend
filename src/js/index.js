import {Router} from "./routes/router";
import { createStore, getStore } from "./redux/store";
import dataFetcher from "./utils/dataFetcher";
const app = document.querySelector("#app");
Router(window.location.pathname)


const onAppInit = async function(e){
    let tasks = await dataFetcher('./static/data/todo.json')

    createStore(tasks) 
}

window.addEventListener('load', onAppInit)