import { Component, DoCheck } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
})
export class FooterComponent implements DoCheck {
    ngDoCheck() {
        console.log('Footer checked');
    }
}
