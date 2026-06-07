import { Component, DoCheck } from '@angular/core';
import { ActivityFeedComponent } from '../activity-feed/activity-feed';
import { UserProfileComponent } from '../user-profile/user-profile';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.html',
    imports: [UserProfileComponent, ActivityFeedComponent],
})
export class SidebarComponent implements DoCheck {
    ngDoCheck() {
        console.log('Sidebar checked');
    }
}
