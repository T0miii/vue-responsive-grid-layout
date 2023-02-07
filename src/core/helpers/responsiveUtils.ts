import {
  Breakpoints,
  BreakpointsKeys,
  findOrGenerateResponsiveLayoutFnc,
  Layout,
} from '../types/helpers';
import { cloneLayout, compact, correctBounds } from './utils';

export const sortBreakpoints = (breakpoints: Breakpoints): BreakpointsKeys[] => {
  return (Object.keys(breakpoints) as (keyof typeof breakpoints)[])
    .sort((a, b) => (breakpoints[a] ?? 1) - (breakpoints[b] ?? 1));
};

export const findOrGenerateResponsiveLayout: findOrGenerateResponsiveLayoutFnc = (
  orgLayout,
  layouts,
  breakpoints,
  breakpoint,
  // lastBreakpoint,
  cols,
  verticalCompact,
): Layout => {
  if(Object.prototype.hasOwnProperty.call(layouts, breakpoint)) {
    return cloneLayout(layouts[breakpoint] || []);
  }

  let layout = orgLayout;

  const breakpointsSorted = sortBreakpoints(breakpoints);
  const breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));

  for(let i = 0; i < breakpointsAbove.length; i++) {
    const b = breakpointsAbove[i];

    if(Object.prototype.hasOwnProperty.call(layouts, b)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      layout = layouts[b];
      break;
    }
  }

  layout = cloneLayout(layout || []);

  return compact(correctBounds(layout, { cols }), verticalCompact) as Layout;
};

export const getBreakpointFromWidth = (breakpoints: Breakpoints, width: number): BreakpointsKeys => {
  const sorted = sortBreakpoints(breakpoints);

  let [matching] = sorted;

  for(let i = 1; i < sorted.length; i++) {
    const breakpointName = sorted[i];

    if(width > (breakpoints[breakpointName] ?? 1)) matching = breakpointName;
  }

  return matching;
};

export const getColsFromBreakpoint = (breakpoint: keyof Breakpoints, cols: Breakpoints): number | undefined => {
  return cols[breakpoint] ?? undefined;
};
