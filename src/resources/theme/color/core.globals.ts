import { css } from "lit";
import { extractVars } from "../../../common/style/derived-css-vars";

/*
 * Core color tokens are the foundational color values used throughout the design system.
 * These tokens represent raw, brand-independent colors such as grayscale shades, base hues, and accent tones.
 * Core tokens shouldn't be tied to any specific UI purpose or role. Instead, they serve as building blocks from which semantic tokens are derived.
 * Changes to core tokens will cascade into semantic tokens that reference them, enabling flexible theming and consistent design language.
 * Please note that these core tokens are not intended to be used directly in components or styles.
 */
export const coreColorStyles = css`
  html {
    /* pure */
    --ha-color-black: #000000;
    --ha-color-white: #ffffff;

    /* primary — neostronghold electric cyan (HSL 196 94% 48% = #06b6d4) */
    --ha-color-primary-05: #001a24;
    --ha-color-primary-10: #003044;
    --ha-color-primary-20: #004d64;
    --ha-color-primary-30: #007894;
    --ha-color-primary-40: #06b6d4;
    --ha-color-primary-50: #2dcceb;
    --ha-color-primary-60: #54d9f5;
    --ha-color-primary-70: #80e3f5;
    --ha-color-primary-80: #adeeff;
    --ha-color-primary-90: #d0f5ff;
    --ha-color-primary-95: #e8faff;

    /* neutral — cosmic dark (HSL 228°) */
    --ha-color-neutral-05: #0a0b13;
    --ha-color-neutral-10: #101221;
    --ha-color-neutral-20: #1a1c31;
    --ha-color-neutral-30: #282b47;
    --ha-color-neutral-40: #3c4063;
    --ha-color-neutral-50: #545883;
    --ha-color-neutral-60: #72779e;
    --ha-color-neutral-70: #959ac1;
    --ha-color-neutral-80: #bcc0db;
    --ha-color-neutral-90: #dfe1f0;
    --ha-color-neutral-95: #f0f1f8;

    /* orange */
    --ha-color-orange-05: #280700;
    --ha-color-orange-10: #3b0f00;
    --ha-color-orange-20: #5e1c00;
    --ha-color-orange-30: #7e2900;
    --ha-color-orange-40: #9d3800;
    --ha-color-orange-50: #c94e00;
    --ha-color-orange-60: #f36d00;
    --ha-color-orange-70: #ff9342;
    --ha-color-orange-80: #ffbb89;
    --ha-color-orange-90: #ffe0c8;
    --ha-color-orange-95: #fff0e4;

    /* red */
    --ha-color-red-05: #2a040b;
    --ha-color-red-10: #3e0913;
    --ha-color-red-20: #631323;
    --ha-color-red-30: #8a132c;
    --ha-color-red-40: #b30532;
    --ha-color-red-50: #dc3146;
    --ha-color-red-60: #f3676c;
    --ha-color-red-70: #fd8f90;
    --ha-color-red-80: #ffb8b6;
    --ha-color-red-90: #ffdedc;
    --ha-color-red-95: #fff0ef;

    /* green — neostronghold emerald accent (HSL 160 84% 39% = #10b981) */
    --ha-color-green-05: #022c15;
    --ha-color-green-10: #054228;
    --ha-color-green-20: #065f38;
    --ha-color-green-30: #087c49;
    --ha-color-green-40: #10b981;
    --ha-color-green-50: #22c58e;
    --ha-color-green-60: #34d399;
    --ha-color-green-70: #6ee7b7;
    --ha-color-green-80: #a7f3d0;
    --ha-color-green-90: #d1fae5;
    --ha-color-green-95: #ecfdf5;
  }
`;

export const coreColorVariables = extractVars(coreColorStyles);
