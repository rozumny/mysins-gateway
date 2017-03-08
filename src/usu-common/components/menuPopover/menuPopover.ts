import {Component} from '@angular/core';
import {Navigation} from '../../providers/navigation';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {AppNode} from '../../model/appNode';
import {SigninService} from '../../../services/signin/signinService';
import {ViewController, MenuController} from 'ionic-angular';
import {ConfigurationBusinessService} from '../../../businessServices/configuration/configurationBusinessService';
import {Events} from 'ionic-angular';

@Component({
    selector: 'menuPopover',
    templateUrl: 'build/usu-common/components/menuPopover/menuPopover.html',
    pipes: [TranslatePipe]
})
export class MenuPopover {
    pages: Array<AppNode>;

    hasChanges: boolean = false;
    private configuration: any;

    constructor(
        private navigation: Navigation,
        private menu: MenuController,
        private configurationBusinessService: ConfigurationBusinessService,
        private events: Events,
        private viewCtrl: ViewController,
        private signinService: SigninService) {
        this.pages = this.navigation.getMenuNodes();
    }

    ngOnInit() {
        this.refresh();

        this.events.subscribe('updateHasChanged', () => {
            this.refresh();
        });
    }

    publish() {
        this.viewCtrl.dismiss().then(() => {
            this.configurationBusinessService.publishConfiguration(this.configuration).then(() => {
                this.refresh();
                this.events.publish('refreshConfigurations');
            });
        });
    }

    refresh() {
        this.configurationBusinessService.load().then((configurations) => {
            if (configurations && configurations.length > 0) {
                this.configuration = configurations[0];
                this.hasChanges = !this.configuration.noRevert && !this.configuration.error && !this.configuration.noPublish && !this.configuration.isPublished;
            }
        });
    }

    public openPage(node: AppNode): void {
        var home = this.navigation.getNodeById('home');
        if (home) {
            this.viewCtrl.dismiss().then(() => {
                if (home === node) {
                    this.navigation.navigateToNode(home);
                } else {
                    this.navigation.setRootAndNavigateToNode(home, node);
                }
            });
        }


    };

    public logout(): void {
        this.signinService.signout().then(() => {
            var signin = this.navigation.nodes.find(node => node.title === 'Signin');
            if (signin) {
                this.viewCtrl.dismiss();
                this.navigation.navigateToNode(signin);
            }
        }, () => {
            // TODO: show error message
        });
    };
}

