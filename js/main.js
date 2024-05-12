import './functions/cursor-functions/cursor.js';
import './functions/cursor-functions/hiding-cursor.js';
import './functions/cursor-functions/cursor-scaling.js';

import './functions/nav-js/nav-appear-and-toggle-svg.js';

import './functions/skills-js/skill-card.js';

import './functions/project-js/project.js';

import './functions/utils/dark-mode.js';
import './functions/utils/hidden-classes.js';
import './functions/utils/emailing.js';

function isMobileDevice() {
    return window.innerWidth <= 768;
}

if (!isMobileDevice()) {
    import('./functions/utils/scroll-related/revel-on-scroll.js')
        .catch(error => console.error("Failed to import revel-on-scroll.js:", error));
}
