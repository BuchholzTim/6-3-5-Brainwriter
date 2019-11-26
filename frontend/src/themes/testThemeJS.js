import { rgba } from 'polished';
import { css } from 'styled-components';

import { Actions } from 'grommet-icons/icons/Actions';
import { ClosedCaption } from 'grommet-icons/icons/ClosedCaption';
import { Expand } from 'grommet-icons/icons/Expand';
import { FormDown } from 'grommet-icons/icons/FormDown';
import { FormNext } from 'grommet-icons/icons/FormNext';
import { FormPrevious } from 'grommet-icons/icons/FormPrevious';
import { FormUp } from 'grommet-icons/icons/FormUp';
import { Next } from 'grommet-icons/icons/Next';
import { Pause } from 'grommet-icons/icons/Pause';
import { Play } from 'grommet-icons/icons/Play';
import { Previous } from 'grommet-icons/icons/Previous';
import { Subtract } from 'grommet-icons/icons/Subtract';
import { Volume } from 'grommet-icons/icons/Volume';
import { VolumeLow } from 'grommet-icons/icons/VolumeLow';
import { base as iconBase } from 'grommet-icons/themes/base';

import { deepFreeze, deepMerge } from '../utils/object';
import { normalizeColor } from '../utils/colors';

const brandColor = '#7D4CDB';
const accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'];
const neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];
const statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
};
const darkColors = [
  '#333333',
  '#555555',
  '#777777',
  '#999999',
  '#999999',
  '#999999',
];
const lightColors = [
  '#F8F8F8',
  '#F2F2F2',
  '#EDEDED',
  '#DADADA',
  '#DADADA',
  '#DADADA',
];
const focusColor = accentColors[0];

const colors = {
  active: rgba(221, 221, 221, 0.5),
  black: '#000000',
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: rgba(0, 0, 0, 0.33),
  },
  brand: brandColor,
  control: {
    dark: 'accent-1',
    light: 'brand',
  },
  focus: focusColor,
  placeholder: '#AAAAAA',
  selected: 'brand',
  text: {
    dark: '#f8f8f8',
    light: '#444444',
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666',
  },
  white: '#FFFFFF',
};

const colorArray = (array, prefix) =>
  array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color;
  });

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(color => {
  colors[`status-${color}`] = statusColors[color];
});

export const generate = (baseSpacing = 24, scale = 6) => {
  // 24
  const baseFontSize = baseSpacing * 0.75; // 18
  const fontScale = baseSpacing / scale; // 4

  const fontSizing = factor => ({
    size: `${baseFontSize + factor * fontScale}px`,
    height: `${baseSpacing + factor * fontScale}px`,
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    maxWidth: `${baseSpacing * (baseFontSize + factor * fontScale)}px`,
  });

  const borderWidth = 2;

  const result = deepMerge(iconBase, {
    global: {
      active: {
        background: {
          color: 'active',
          opacity: 'medium',
        },
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s',
        },
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: `${baseSpacing / 6}px`, // 4
        large: `${baseSpacing / 2}px`, // 12
        xlarge: `${baseSpacing}px`, // 24
      },
      breakpoints: {
        small: {
          value: baseSpacing * 32, // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: `${baseSpacing / 6}px`, // 4
            large: `${baseSpacing / 4}px`, // 6
            xlarge: `${baseSpacing / 2}px`, // 12
          },
          edgeSize: {
            none: '0px',
            hair: '1px', // for Chart
            xxsmall: '2px',
            xsmall: `${baseSpacing / 8}px`, // 3
            small: `${baseSpacing / 4}px`, // 6
            medium: `${baseSpacing / 2}px`, // 12
            large: `${baseSpacing}px`, // 24
            xlarge: `${baseSpacing * 2}px`, // 48
          },
          size: {
            xxsmall: `${baseSpacing}px`, // 24
            xsmall: `${baseSpacing * 2}px`, // 48
            small: `${baseSpacing * 4}px`, // 96
            medium: `${baseSpacing * 8}px`, // 192
            large: `${baseSpacing * 16}px`, // 384
            xlarge: `${baseSpacing * 32}px`, // 768
            full: '100%',
          },
        },
        medium: {
          value: baseSpacing * 64, // 1536
        },
        large: {}, // anything above 'medium'
      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large',
      },
      colors,
      control: {
        border: {
          width: '1px',
          radius: '4px',
          color: 'border',
        },
        disabled: {
          opacity: 0.3,
        },
      },
      // The time to wait after the user stopped typing, measured in ms.
      debounceDelay: 300,
      drop: {
        background: '#ffffff',
        border: {
          radius: '0px',
        },
        shadowSize: 'small',
        zIndex: '20',
      },
      edgeSize: {
        none: '0px',
        hair: '1px', // for Chart
        xxsmall: `${baseSpacing / 8}px`, // 3
        xsmall: `${baseSpacing / 4}px`, // 6
        small: `${baseSpacing / 2}px`, // 12
        medium: `${baseSpacing}px`, // 24
        large: `${baseSpacing * 2}px`, // 48
        xlarge: `${baseSpacing * 4}px`, // 96
        responsiveBreakpoint: 'small',
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
          small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
        },
      },
      focus: {
        border: {
          color: 'focus',
        },
      },
      font: {
        ...fontSizing(0),
        // face: undefined,
        // family: undefined,
      },
      hover: {
        background: {
          color: 'active',
          opacity: 'medium',
        },
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      input: {
        padding: `${baseSpacing / 2}px`,
        weight: 600,
      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1,
      },
      selected: {
        background: 'selected',
        color: 'white',
      },
      spacing: `${baseSpacing}px`,
      size: {
        xxsmall: `${baseSpacing * 2}px`, // 48
        xsmall: `${baseSpacing * 4}px`, // 96
        small: `${baseSpacing * 8}px`, // 192
        medium: `${baseSpacing * 16}px`, // 384
        large: `${baseSpacing * 32}px`, // 768
        xlarge: `${baseSpacing * 48}px`, // 1152
        xxlarge: `${baseSpacing * 64}px`, // 1536
        full: '100%',
      },
    },
    accordion: {
      border: {
        side: 'bottom',
        color: 'border',
      },
      heading: { level: '4' }, // level ranges from 1-6
      icons: {
        collapse: FormUp,
        expand: FormDown,
        // color: { dark: undefined, light: undefined },
      },
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'accent-1',
        light: 'brand',
      },
      hover: {
        textDecoration: 'underline',
        // fontWeight: undefined,
        // extend: undefined,
      },
      // extend: undefined,
    },
    box: {
      responsiveBreakpoint: 'small', // when we switch rows to columns
      // extend: undefined,
    },
    button: {
      border: {
        // color: { dark: undefined, light: undefined }
        width: `${borderWidth}px`,
        radius: `${baseSpacing * 0.75}px`,
      },
      // color: { dark: undefined, light: undefined }
      primary: {
        // color: { dark: undefined, light: undefined }
      },
      // disabled: { opacity: undefined },
      padding: {
        vertical: `${baseSpacing / 4 - borderWidth}px`,
        horizontal: `${baseSpacing - borderWidth}px`,
      },
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: `${baseFontSize - fontScale}px`,
        lineHeight: 1.375,
        daySize: `${(baseSpacing * 8) / 7}px`,
        slideDuration: '0.2s',
      },
      medium: {
        fontSize: `${baseFontSize}px`,
        lineHeight: 1.45,
        daySize: `${(baseSpacing * 16) / 7}px`,
        slideDuration: '0.5s',
      },
      large: {
        fontSize: `${baseFontSize + 3 * fontScale}px`,
        lineHeight: 1.11,
        daySize: `${(baseSpacing * 32) / 7}px`,
        slideDuration: '0.8s',
      },
      icons: {
        previous: Previous,
        next: Next,
        small: {
          previous: FormPrevious,
          next: FormNext,
        },
      },
      heading: { level: '4' }, // level ranges from 1-6
    },
    carousel: {
      icons: {
        current: Subtract,
        next: Next,
        previous: Previous,
        // color: { dark: undefined, light: undefined },
      },
      animation: {
        duration: 1000,
      },
      disabled: {
        icons: {
          // color: { dark: undefined, light: undefined },
        },
      },
    },
    chart: {
      // extend: undefined,
    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)',
        },
        width: '2px',
      },
      check: {
        // extend: undefined,
        radius: '4px',
        thickness: '4px',
      },
      // color: { dark: undefined, light: undefined },
      // extend: undefined,
      // gap: undefined
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black',
          },
        },
      },
      icon: {
        // size: undefined,
        // extend: undefined,
      },
      icons: {
        // checked: undefined,
        // indeterminate: undefined,
      },
      size: `${baseSpacing}px`,
      toggle: {
        // background: undefined
        color: {
          dark: '#d9d9d9',
          light: '#d9d9d9',
        },
        knob: {
          // extend: undefined,
        },
        radius: `${baseSpacing}px`,
        size: `${baseSpacing * 2}px`,
        // extend: undefined,
      },
    },
    clock: {
      analog: {
        // extend: undefined,
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3',
          },
          width: `${baseSpacing / 3}px`,
          size: `${baseSpacing}px`,
          shape: 'round',
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3',
          },
          width: `${baseSpacing / 6}px`,
          size: `${Math.round(baseSpacing / 2)}px`,
          shape: 'round',
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1',
          },
          width: `${baseSpacing / 8}px`,
          size: `${Math.round(baseSpacing / 2.666)}px`,
          shape: 'round',
        },
        size: {
          small: `${baseSpacing * 3}px`,
          medium: `${baseSpacing * 4}px`,
          large: `${baseSpacing * 6}px`,
          xlarge: `${baseSpacing * 9}px`,
          huge: `${baseSpacing * 12}px`,
        },
      },
      digital: {
        text: {
          xsmall: { size: `${baseFontSize - 2 * fontScale}px`, height: 1.5 },
          small: { size: `${baseFontSize - fontScale}px`, height: 1.43 },
          medium: { size: `${baseFontSize}px`, height: 1.375 },
          large: { size: `${baseFontSize + fontScale}px`, height: 1.167 },
          xlarge: { size: `${baseFontSize + 2 * fontScale}px`, height: 1.1875 },
          xxlarge: { size: `${baseFontSize + 4 * fontScale}px`, height: 1.125 },
        },
      },
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500,
    },
    dataTable: {
      groupHeader: {
        background: {
          dark: 'dark-2',
          light: 'light-2',
        },
        border: { side: 'bottom', size: 'xsmall' },
        pad: { horizontal: 'small', vertical: 'xsmall' },
      },
      groupEnd: {
        border: { side: 'bottom', size: 'xsmall' },
      },
      header: {},
      icons: {
        ascending: FormDown,
        contract: FormUp,
        descending: FormUp,
        expand: FormDown,
      },
      primary: {
        weight: 'bold',
      },
      resize: {
        border: {
          color: 'border',
          side: 'right',
        },
      },
    },
    diagram: {
      // extend: undefined,
      line: {
        color: 'accent-1',
      },
    },
    // drop: {
    //   extend: undefined,
    //   maxHeight: undefined,
    // },
    formField: {
      border: {
        color: 'border',
        error: {
          color: {
            dark: 'white',
            light: 'status-critical',
          },
        },
        position: 'inner',
        side: 'bottom',
      },
      content: {
        pad: {
          horizontal: 'small',
          bottom: 'small',
        },
      },
      error: {
        color: {
          dark: 'status-critical',
          light: 'status-critical',
        },
        margin: { vertical: 'xsmall', horizontal: 'small' },
      },
      // extend: undefined,
      help: {
        color: {
          dark: 'dark-3',
          light: 'dark-3',
        },
        margin: {
          left: 'small',
        },
      },
      label: {
        margin: { vertical: 'xsmall', horizontal: 'small' },
      },
      margin: { bottom: 'small' },
    },
    grommet: {
      // extend: undefined
    },
    heading: {
      font: {
        // family: undefined
      },
      level: {
        1: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(4) },
          medium: { ...fontSizing(8) },
          large: { ...fontSizing(16) },
          xlarge: { ...fontSizing(24) },
        },
        2: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(2) },
          medium: { ...fontSizing(4) },
          large: { ...fontSizing(8) },
          xlarge: { ...fontSizing(12) },
        },
        3: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(1) },
          medium: { ...fontSizing(2) },
          large: { ...fontSizing(4) },
          xlarge: { ...fontSizing(6) },
        },
        4: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(0) },
          medium: { ...fontSizing(0) },
          large: { ...fontSizing(0) },
          xlarge: { ...fontSizing(0) },
        },
        5: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(-0.5) },
          medium: { ...fontSizing(-0.5) },
          large: { ...fontSizing(-0.5) },
          xlarge: { ...fontSizing(-0.5) },
        },
        6: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(-1) },
          medium: { ...fontSizing(-1) },
          large: { ...fontSizing(-1) },
          xlarge: { ...fontSizing(-1) },
        },
      },
      responsiveBreakpoint: 'small', // when we scale the font size down
      weight: 600,
    },
    layer: {
      background: 'white',
      border: {
        radius: '4px',
      },
      container: {
        zIndex: '15',
      },
      // extend: undefined,
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)',
      },
      responsiveBreakpoint: 'small', // when Layer takes over the full screen
      zIndex: '10',
    },
    list: {
      item: {
        // background: undefined,
        border: 'horizontal',
        pad: { horizontal: 'medium', vertical: 'small' },
        // extend: undefined,
      },
      // extend: undefined,
    },
    maskedInput: {
      // extend: undefined,
    },
    menu: {
      // background: undefined,
      // extend: undefined,
      icons: {
        down: FormDown,
      },
    },
    meter: {
      color: 'accent-1',
      // extend: undefined,
    },
    paragraph: {
      small: { ...fontSizing(-1) },
      medium: { ...fontSizing(0) },
      large: { ...fontSizing(1) },
      xlarge: { ...fontSizing(2) },
      xxlarge: { ...fontSizing(4) },
    },
    radioButton: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)',
        },
        width: '2px',
      },
      check: {
        radius: '100%',
        // color: { dark: undefined, light: undefined },
        // extend: undefined,
      },
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black',
          },
        },
      },
      icon: {
        // size: undefined,
        // extend: undefined,
      },
      icons: {
        // circle: undefined,
      },
      gap: 'small',
      size: `${baseSpacing}px`,
    },
    rangeInput: {
      track: {
        height: '4px',
        color: css`
          ${props => rgba(normalizeColor('border', props.theme), 0.2)};
        `,
      },
      thumb: {
        // color: { dark: undefined, light: undefined },
      },
    },
    rangeSelector: {
      background: {
        invert: {
          color: 'light-4',
        },
      },
      // edge: {
      //   type: undefined,
      // },
    },
    select: {
      // background: undefined,
      container: {
        // extend: undefined,
      },
      control: {
        // extend: undefined,
        // open: undefined,
      },
      icons: {
        // color: { dark: undefined, light: undefined },
        margin: { horizontal: 'small' },
        down: FormDown,
      },
      options: {
        container: {
          align: 'start',
          pad: 'small',
        },
        text: {
          margin: 'none',
        },
      },
      // searchInput: undefined,
      step: 20,
    },
    tab: {
      active: {
        color: 'text',
        // background: undefined,
      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: 'accent-1',
          light: 'brand',
        },
        active: {
          color: {
            dark: 'white',
            light: 'black',
          },
        },
        hover: {
          color: {
            dark: 'white',
            light: 'black',
          },
          // extend: undefined,
        },
      },
      color: 'control',
      // extend: undefined,
      hover: {
        // background: undefined,
        // extend: undefined,
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      margin: {
        vertical: 'xxsmall',
        horizontal: 'small',
      },
      pad: {
        bottom: 'xsmall',
      },
    },
    tabs: {
      // background: undefined,
      // extend: undefined,
      // gap: undefined,
      header: {
        // background: undefined,
        // extend: undefined,
      },
      panel: {
        // extend: undefined,
      },
    },
    table: {
      header: {
        align: 'start',
        pad: { horizontal: 'small', vertical: 'xsmall' },
        border: 'bottom',
        // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,
      },
      body: {
        align: 'start',
        pad: { horizontal: 'small', vertical: 'xsmall' },
        // background: undefined,
        // border: undefined,
        // extend: undefined,
      },
      // row: {
      //   hover: {
      //     background: undefined,
      //     color: undefined,
      //   },
      // },
      footer: {
        align: 'start',
        pad: { horizontal: 'small', vertical: 'xsmall' },
        border: 'top',
        // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,
      },
    },
    text: {
      xsmall: { ...fontSizing(-1.5) },
      small: { ...fontSizing(-1) },
      medium: { ...fontSizing(0) }, // 18px
      large: { ...fontSizing(1) }, // 22px
      xlarge: { ...fontSizing(2) },
      xxlarge: { ...fontSizing(4) },
    },
    textArea: {
      // extend: undefined,
      // disabled: { opacity: undefined },
    },
    textInput: {
      // extend: undefined,
      // disabled: { opacity: undefined },
    },
    video: {
      captions: {
        background: 'rgba(0, 0, 0, 0.7)',
      },
      // controls: { background: undefined },
      icons: {
        closedCaption: ClosedCaption,
        configure: Actions,
        fullScreen: Expand,
        pause: Pause,
        play: Play,
        reduceVolume: VolumeLow,
        volume: Volume,
        // color: { dark: undefined, light: undefined },
      },
      // scrubber: { track: { color: undefined } },
      scrubber: {
        color: 'light-4',
      },
    },
    worldMap: {
      color: 'light-3',
      continent: {
        active: '8px',
        base: '6px',
      },
      hover: {
        color: 'light-4',
      },
      place: {
        active: '20px',
        base: '8px',
      },
    },
  });

  return deepFreeze(result);
};

export const base = generate(24);