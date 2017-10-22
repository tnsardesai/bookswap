import { OffersPage } from './../offers/offers';
import { SearchPage } from './../search/search';
import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { TasksPage } from '../tasks/tasks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TasksPage;
  tab2Root = SettingsPage;
  tab3Root = ChatPage;
  tab4Root = SearchPage;
  tab5Root = OffersPage;
  

  constructor() {

  }
}
