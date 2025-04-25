import { Component, inject, OnInit } from '@angular/core';
import { Keycloak_user } from '../../models/keycloak_user.model';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: [`user-profile.component.scss`],
  imports: []
})
export class UserProfileComponent implements OnInit {
  user: Keycloak_user | undefined;

  constructor(private readonly keycloak: Keycloak) {

  }

  async ngOnInit() {
    if (this.keycloak?.authenticated) {
      const profile = await this.keycloak.loadUserProfile();

      this.user = {
        name: `${profile?.firstName} ${profile.lastName}`,
        email: profile?.email,
        username: profile?.username
      };
    }
  }
}
