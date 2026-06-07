import { Component, DoCheck } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.html',
})
export class UserProfileComponent implements DoCheck {
    ngDoCheck() {
        console.log('UserProfile checked');
    }
}
