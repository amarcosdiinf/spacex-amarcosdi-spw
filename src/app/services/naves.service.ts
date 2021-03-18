import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  ships = [
    {
      "legacy_id": "AMERICANCHAMPION", 
      "model": null, 
      "type": "Tug", 
      "roles": ["Support Ship", "Barge Tug"], 
      "imo": 7434016, 
      "mmsi": 367020820, 
      "abs": 571252, 
      "class": 7604342, 
      "mass_kg": 266712, 
      "mass_lbs": 588000, 
      "year_built": 1976, 
      "home_port": "Port of Los Angeles", 
      "status": "", 
      "speed_kn": null, 
      "course_deg": null, 
      "latitude": null, 
      "longitude": null, 
      "last_ais_update": null, 
      "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:434663/mmsi:367020820/imo:7434016/vessel:AMERICAN_CHAMPION", 
      "image": "https://i.imgur.com/woCxpkj.jpg", 
      "launches": ["5eb87cdeffd86e000604b330", "5eb87cdfffd86e000604b331"], 
      "name": "American Champion", 
      "active": false, 
      "id": "5ea6ed2d080df4000697c901"
    }, 
    {"legacy_id": "AMERICANISLANDER", "model": null, "type": "Cargo", "roles": ["Dragon Recovery"], "imo": null, "mmsi": 367035570, "abs": null, "class": null, "mass_kg": null, "mass_lbs": null, "year_built": null, "home_port": "Port of Los Angeles", "status": "", "speed_kn": null, "course_deg": null, "latitude": null, "longitude": null, "last_ais_update": null, "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:435112/mmsi:367035570/imo:0/vessel:AMERICAN_ISLANDER", "image": "https://i.imgur.com/jmj8Sh2.jpg", "launches": ["5eb87ce0ffd86e000604b332", "5eb87ce1ffd86e000604b333", "5eb87ce4ffd86e000604b337", "5eb87ce7ffd86e000604b33b"], "name": "American Islander", "active": false, "id": "5ea6ed2d080df4000697c902"}, {"legacy_id": "AMERICANSPIRIT", "model": null, "type": "Cargo", "roles": ["Support Ship"], "imo": null, "mmsi": null, "abs": null, "class": null, "mass_kg": null, "mass_lbs": null, "year_built": null, "home_port": "Port of Los Angeles", "status": null, "speed_kn": null, "course_deg": null, "latitude": null, "longitude": null, "last_ais_update": null, "link": null, "image": null, "launches": ["5eb87ce1ffd86e000604b334"], "name": "American Spirit", "active": false, "id": "5ea6ed2d080df4000697c903"}, {"legacy_id": "ASOG", "model": null, "type": "Barge", "roles": ["ASDS barge"], "imo": null, "mmsi": null, "abs": null, "class": null, "mass_kg": null, "mass_lbs": null, "year_built": null, "home_port": "Port Canaveral", "status": null, "speed_kn": null, "course_deg": null, "latitude": null, "longitude": null, "last_ais_update": null, "link": null, "image": null, "launches": [], "name": "A Shortfall of Gravitas", "active": false, "id": "5ea6ed2d080df4000697c904"}, {"legacy_id": "BETTYRGAMBARELLA", "model": null, "type": "Tug", "roles": ["ASDS Tug"], "imo": 7517478, "mmsi": 368000890, "abs": 562590, "class": 7427463, "mass_kg": 202302, "mass_lbs": 446000, "year_built": 1974, "home_port": "Port of Los Angeles", "status": "", "speed_kn": null, "course_deg": null, "latitude": null, "longitude": null, "last_ais_update": null, "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:1190856/mmsi:368000890/imo:7517478/vessel:BETTY_R_GAMBARELLA", "image": "https://i.imgur.com/ngYgFnn.jpg", "launches": ["5eb87d08ffd86e000604b357", "5eb87d0affd86e000604b359"], "name": "Betty R Gambarella", "active": false, "id": "5ea6ed2e080df4000697c905"}, {"legacy_id": "ELSBETH3", "model": null, "type": "Tug", "roles": ["ASDS Tug"], "imo": 8983375, "mmsi": 367017460, "abs": null, "class": null, "mass_kg": 273063, "mass_lbs": 602000, "year_built": 1999, "home_port": "Port Canaveral", "status": "", "speed_kn": null, "course_deg": null, "latitude": null, "longitude": null, "last_ais_update": null, "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:434560/mmsi:367017460/imo:8983375/vessel:ELSBETH_III", "image": "https://i.imgur.com/1s5DUbJ.jpg", "launches": ["5eb87ce8ffd86e000604b33c", "5eb87ceaffd86e000604b33d", "5eb87cecffd86e000604b33f", "5eb87ceeffd86e000604b341", "5eb87cf2ffd86e000604b344", "5eb87cf3ffd86e000604b345", "5eb87cf5ffd86e000604b346", "5eb87cf6ffd86e000604b347", "5eb87cf8ffd86e000604b348", "5eb87cf9ffd86e000604b349", "5eb87cfaffd86e000604b34a", "5eb87d00ffd86e000604b34f", "5eb87d04ffd86e000604b353", "5eb87d09ffd86e000604b358"], "name": "Elsbeth III", "active": false, "id": "5ea6ed2e080df4000697c906"}, {"legacy_id": "GOMSCHIEF", "model": null, "type": "High Speed Craft", "roles": ["Fairing Recovery"], "imo": 9744453, "mmsi": 338035000, "abs": 1247527, "class": 14245747, "mass_kg": 449964, "mass_lbs": 992000, "year_built": 2014, "home_port": "Port Canaveral", "status": "", "speed_kn": null, "course_deg": null, "latitude": null, "longitude": null, "last_ais_update": null, "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:5126789/mmsi:338035000/imo:9744453/vessel:GO_MS_CHIEF", "image": "https://imgur.com/NHsx95l.jpg", "launches": ["5eb87d3bffd86e000604b37f", "5eb87d3fffd86e000604b382", "5eb87d41ffd86e000604b383", "5eb87d44ffd86e000604b386", "5eb87d45ffd86e000604b387", "5eb87d46ffd86e000604b389", "5eb87d50ffd86e000604b394", "5ed9819a1f30554030d45c29", "5ed981d91f30554030d45c2a", "5eb87d47ffd86e000604b38a", "5ef6a2090059c33cee4a828b", "5ef6a2bf0059c33cee4a828c", "5ef6a2e70059c33cee4a8293", "5eb87d4cffd86e000604b38d", "5fb95b3f3a88ae63c954603c", "5eb87d4fffd86e000604b393", "5fbfecce54ceb10a5664c80a", "5fd386aa7faea57d297c86c1", "5ff6554f9257f579ee3a6c5f"], "name": "GO Ms Chief", "active": true, "id": "5ea6ed2e080df4000697c907"}, {"legacy_id": "GOMSTREE", "model": null, "type": "High Speed Craft", "roles": ["Fairing Recovery"], "imo": 9744465, "mmsi": 368059550, "abs": 1249191, "class": 15252765, "mass_kg": 449964, "mass_lbs": 992000, "year_built": 2015, "home_port": "Port Canaveral", "status": "", "speed_kn": null, "course_deg": null, "latitude": null, "longitude": null, "last_ais_update": null, "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:3439091/mmsi:368099550/imo:9744465/vessel:GO_MS_TREE", "image": "https://i.imgur.com/MtEgYbY.jpg", "launches": ["5eb87d0dffd86e000604b35b", "5eb87d0fffd86e000604b35d", "5eb87d14ffd86e000604b361", "5eb87d16ffd86e000604b363", "5eb87d1affd86e000604b367", "5eb87d1fffd86e000604b36b", "5eb87d25ffd86e000604b370", "5eb87d35ffd86e000604b37a", "5eb87d37ffd86e000604b37c", "5eb87d39ffd86e000604b37d", "5eb87d3bffd86e000604b37f", "5eb87d3cffd86e000604b380", "5eb87d3fffd86e000604b382", "5eb87d41ffd86e000604b383", "5eb87d44ffd86e000604b386", "5eb87d45ffd86e000604b387", "5eb87d46ffd86e000604b389", "5eb87d50ffd86e000604b394", "5ed9819a1f30554030d45c29", "5ed981d91f30554030d45c2a", "5ef6a1e90059c33cee4a828a", "5ef6a2090059c33cee4a828b", "5ef6a2bf0059c33cee4a828c", "5ef6a2e70059c33cee4a8293", "5f8399fb818d8b59f5740d43", "5eb87d4fffd86e000604b393", "5fbfecce54ceb10a5664c80a", "5fd386aa7faea57d297c86c1", "5ff6554f9257f579ee3a6c5f"], "name": "GO Ms Tree", "active": true, "id": "5ea6ed2e080df4000697c908"}, {"legacy_id": "GONAVIGATOR", "model": null, "type": "Cargo", "roles": ["Support Ship", "Fairing Recovery"], "imo": 9566887, "mmsi": 367550000, "abs": 1221524, "class": 9204358, "mass_kg": 451778, "mass_lbs": 996000, "year_built": 2009, "home_port": "Port Canaveral", "status": "", "speed_kn": null, "course_deg": null, "latitude": null, "longitude": null, "last_ais_update": null, "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:452540/mmsi:367550000/imo:9566887/vessel:GO_NAVIGATOR", "image": "https://i.imgur.com/MjNWzhO.jpg", "launches": ["5eb87d2dffd86e000604b376", "5eb87d30ffd86e000604b378", "5eb87d35ffd86e000604b37a", "5eb87d37ffd86e000604b37c", "5eb87d39ffd86e000604b37d", "5eb87d3cffd86e000604b380", "5eb87d46ffd86e000604b388", "5eb87d4dffd86e000604b38e"], "name": "GO Navigator", "active": true, "id": "5ea6ed2e080df4000697c909"}, {"legacy_id": "GOPURSUIT", "model": null, "type": "Cargo", "roles": ["Support Ship", "Fairing Recovery"], "imo": 9458884, "mmsi": 367191410, "abs": 1201189, "class": 7174230, "mass_kg": 502999, "mass_lbs": 1108925, "year_built": 2007, "home_port": "Port Canaveral", "status": "", "speed_kn": null, "course_deg": null, "latitude": null, "longitude": null, "last_ais_update": null, "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:439594/mmsi:367191410/imo:9458884/vessel:GO_PURSUIT", "image": "https://i.imgur.com/5w1ZWre.jpg", "launches": ["5eb87d18ffd86e000604b365", "5eb87d19ffd86e000604b366", "5eb87d1bffd86e000604b368", "5eb87d1effd86e000604b36a"], "name": "GO Pursuit", "active": false, "id": "5ea6ed2e080df4000697c90a"}]
  
  constructor() { }

  getNaves(){
    return this.ships;
  }

  getNave(id){
    return this.ships.find(nave => nave.legacy_id === id);
  }
}
