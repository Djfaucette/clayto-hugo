import { storiesOf } from "@storybook/polymer";
import {
  withKnobs,
  text,
  select,
  color,
  boolean
} from "@storybook/addon-knobs/polymer";
import * as storybookBridge from "@storybook/addon-knobs/polymer";
import * as tools from "../../../.storybook/utils.js";
import PfeIcon from "../pfe-icon";

const stories = storiesOf("Icon", module);
stories.addDecorator(withKnobs);

const template = (data = {}) =>
  tools.component(PfeIcon.tag, data.prop, [], true);

const validIcons = [
  "rh-aed",
  "rh-alert-downtime",
  "rh-api",
  "rh-app-b",
  "rh-application-alt",
  "rh-application-mobile",
  "rh-application",
  "rh-application-window",
  "rh-arrows-simplify",
  "rh-atom",
  "rh-award-ribbon",
  "rh-bar-graph",
  "rh-battery",
  "rh-beer-glasses",
  "rh-bike",
  "rh-blueprint",
  "rh-book",
  "rh-box-open",
  "rh-bus-front-view",
  "rh-bus-side-view",
  "rh-calculator",
  "rh-calendar",
  "rh-can",
  "rh-cardboardrecycling",
  "rh-catalog-selfservice",
  "rh-cd-disk",
  "rh-check-yes",
  "rh-circle-sphere",
  "rh-circuit",
  "rh-clock",
  "rh-clock-time-pass",
  "rh-cloud-admin",
  "rh-cloud-mobile",
  "rh-cloud",
  "rh-code",
  "rh-collaboration",
  "rh-command",
  "rh-compass",
  "rh-competitive-analysis",
  "rh-complexity",
  "rh-construction-hard-hat",
  "rh-container-library",
  "rh-control-panel",
  "rh-create-cloud",
  "rh-credit-card",
  "rh-cube",
  "rh-customer-snapshot",
  "rh-datacenter-alt1",
  "rh-datacenter",
  "rh-data",
  "rh-desktop",
  "rh-development-model",
  "rh-devops",
  "rh-dna",
  "rh-download",
  "rh-eBook",
  "rh-electrical",
  "rh-elevator-up-down",
  "rh-email",
  "rh-emergency-use-stairs",
  "rh-enclave2",
  "rh-enclave",
  "rh-envelope-back",
  "rh-ewaste-recycling",
  "rh-ex-no",
  "rh-fan",
  "rh-fast-car",
  "rh-fast-jet",
  "rh-feather",
  "rh-finance",
  "rh-fire-extinguisher",
  "rh-folder-open",
  "rh-frame",
  "rh-funnel",
  "rh-gears",
  "rh-gear",
  "rh-glass-bottle",
  "rh-glass-recycling",
  "rh-global-ecosystem",
  "rh-globe-atlantic",
  "rh-globe-pacific",
  "rh-government",
  "rh-handicapped-accessible",
  "rh-health-vertical",
  "rh-heart-monitor",
  "rh-help-desk",
  "rh-hosting-support",
  "rh-host",
  "rh-icecaps-mountain",
  "rh-increase-productivity",
  "rh-industry",
  "rh-info-alt",
  "rh-info",
  "rh-instructor",
  "rh-insurance",
  "rh-interoperable-cross-platform",
  "rh-key",
  "rh-kiosk",
  "rh-lab-flask",
  "rh-lab",
  "rh-laptop",
  "rh-leaf",
  "rh-lifestyle",
  "rh-lightbulb-energy-efficient",
  "rh-lightbulb-traditional",
  "rh-locked",
  "rh-lock",
  "rh-mail",
  "rh-mainframe",
  "rh-management-checklist",
  "rh-map-treasure",
  "rh-media-clapboard",
  "rh-megaphone",
  "rh-message-oriented-middleware",
  "rh-mobile-devices",
  "rh-mobile-user",
  "rh-monitor",
  "rh-mothers-room",
  "rh-moving",
  "rh-network-community",
  "rh-network-personal",
  "rh-network",
  "rh-network-switch",
  "rh-noise-isolation",
  "rh-noise",
  "rh-no-smoking",
  "rh-notepad",
  "rh-odor",
  "rh-office-building-smb",
  "rh-office-chair",
  "rh-office-desk",
  "rh-office-mobility",
  "rh-office-reception",
  "rh-ohc-cloud-apps",
  "rh-ohc-hybrid-cloud",
  "rh-ohc-iaas",
  "rh-ohc-paas",
  "rh-ohc-private-cloud",
  "rh-ohc-public-cloud",
  "rh-orchestration",
  "rh-organization",
  "rh-packing",
  "rh-paper-case-study",
  "rh-paper-infographic",
  "rh-paper-lined",
  "rh-paperrecycling",
  "rh-paper-solution",
  "rh-paper",
  "rh-parking",
  "rh-partner-map",
  "rh-phone-land-line",
  "rh-phone-mobile",
  "rh-photo-frame-family",
  "rh-piggy-bank",
  "rh-plastic-bottle",
  "rh-podium-speakers",
  "rh-policy",
  "rh-price-label",
  "rh-printer-3d",
  "rh-printer-copier",
  "rh-process-improvement",
  "rh-processor",
  "rh-process",
  "rh-protected",
  "rh-puzzle-complete",
  "rh-puzzle-piece",
  "rh-pyramid",
  "rh-radio-podcast",
  "rh-recycle-cans",
  "rh-recycle-plastic",
  "rh-recycle",
  "rh-restrooms",
  "rh-safety-warning-alert",
  "rh-scalable",
  "rh-scale-grow",
  "rh-scale-shrink",
  "rh-search",
  "rh-security",
  "rh-server-alt1",
  "rh-server-alt2",
  "rh-server-deploy",
  "rh-server-stack-alt1",
  "rh-server-stack-alt2",
  "rh-server-stack",
  "rh-server",
  "rh-server-vintage-alt1",
  "rh-server-vintage",
  "rh-shipping-container-rail",
  "rh-shipping-container-ship",
  "rh-shipping-container",
  "rh-shipping-container-truck",
  "rh-shopping-bag",
  "rh-shopping-cart",
  "rh-smart-phone",
  "rh-software-container",
  "rh-space-rocket",
  "rh-speedometer",
  "rh-sports-play",
  "rh-stairs-step-by-step",
  "rh-star",
  "rh-stopwatch",
  "rh-stopwatch-time-pass",
  "rh-storage-brick",
  "rh-storage-stack",
  "rh-sun",
  "rh-tachometer",
  "rh-talk-bubble-conversation",
  "rh-talk-bubble-lined",
  "rh-talk-bubble",
  "rh-telecom-vertical",
  "rh-thumbs-up",
  "rh-toolbox",
  "rh-tools-drafting",
  "rh-tools",
  "rh-transportation",
  "rh-trash",
  "rh-trophy",
  "rh-upload",
  "rh-user-1",
  "rh-user-2",
  "rh-user-3",
  "rh-user-4",
  "rh-user-5",
  "rh-user-access",
  "rh-user-checklist",
  "rh-user-schedule",
  "rh-utensils",
  "rh-utility-meter",
  "rh-venn-diagram",
  "rh-video",
  "rh-virtual-datacenter",
  "rh-virtual-server",
  "rh-virtual-stack",
  "rh-virtual-storage-brick",
  "rh-virtual-storage-stack",
  "rh-volume-mute",
  "rh-volume-up",
  "rh-vulnerability",
  "rh-water-droplet",
  "rh-water-faucet",
  "rh-waveform",
  "rh-webinar",
  "rh-workplace-strategy",
  "rh-wrench-mechanical"
];

stories.add(PfeIcon.tag, () => {
  let config = {};

  const props = PfeIcon.properties;
  props.icon.enum = validIcons;
  props.icon.default = validIcons[0];
  props.size.default = "xl";

  // Build the knobs and read in their selections
  config.prop = tools.autoPropKnobs(props, storybookBridge);

  let rendered = template(config);

  return tools.preview(rendered);
});