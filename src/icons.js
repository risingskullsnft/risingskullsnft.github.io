import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faYoutube,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import { faSkull, faFlask, faMagic } from "@fortawesome/free-solid-svg-icons";

library.add(faYoutube, faDiscord, faTwitter, faSkull, faFlask, faMagic);

Vue.component("fa-icon", FontAwesomeIcon);
