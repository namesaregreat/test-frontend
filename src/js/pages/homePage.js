import { logo } from "../components/logo";
import header from "../components/header";
import button from "../components/link";
import makeElement from "../utils/makeElement";

const homePage = function() {
    const page = document.createElement('header')
    page.append(makeElement(logo))
    page.append(makeElement(header('A Simple Way to Manage your Work','ui-small-header')))
    page.append(makeElement(button('To Do List')))

    return page
}

export default homePage