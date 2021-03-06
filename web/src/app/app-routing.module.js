"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by akselon on 2017-04-09.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login.component");
var profile_component_1 = require("./components/profile.component");
var auth_guard_1 = require("./guards/auth.guard");
var games_component_1 = require("./components/games.component");
var match_component_1 = require("./components/match.component");
var tipster_component_1 = require("./components/tipster.component");
var tipsters_component_1 = require("./components/tipsters.component");
var ranking_component_1 = require("./components/ranking.component");
var routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'games', component: games_component_1.GamesComponent },
    { path: 'tipsters', component: tipsters_component_1.TipstersComponent },
    { path: 'ranking', component: ranking_component_1.RankingComponent },
    { path: 'match/:id', component: match_component_1.MatchComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'tipster/:id', component: tipster_component_1.TipsterComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map