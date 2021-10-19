import { logo } from "../components/logo";
import header from "../components/header";
import button from "../components/link";
import makeElement from "../utils/makeElement";

const homePage = function() {
    const page = document.createElement('header')
    page.append(makeElement(logo))
    page.append(makeElement(header('ui-small-header','A Simple Way to Manage your Work')))
    page.append(makeElement(button('To Do List')))

    return page
}

export default homePage