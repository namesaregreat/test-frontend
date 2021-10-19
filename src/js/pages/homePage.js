import { logo } from "../components/logo";
import header from "../components/header";
import button from "../components/link";
import makeElement from "../utils/makeElement";

const homePage = function() {
    const pageHeader = document.createElement('header')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('A Simple Way to Manage your Work')))
    pageHeader.appendChild(makeElement(button('To Do List')))

    return pageHeader
}

export default homePage