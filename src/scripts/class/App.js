import {Site} from "./Site";
import {SiteBar} from "./SiteBar";

export class App {
    constructor(model) {
        this.model = model;
    }
    init() {
        const site = new Site('#site');
        const siteBar = new SiteBar('#panel', newBlock => {
            this.model.push(newBlock);
            site.render(this.model);
        });

        site.render(this.model);
        siteBar.init();
    }
}