import { importShared } from './__federation_fn_import-BefOOxv9.js';
import { a6 as isPlainObject, a7 as defaultSxConfig, j as jsxRuntimeExports, d as createTheme, a8 as styled$1, n as styleFunctionSx, c as clsx, a9 as createStyled, J as resolveProps, b as composeClasses, g as generateUtilityClass, M as handleBreakpoints, L as resolveBreakpointValues, aa as createUnarySpacing, i as deepmerge, ab as mergeBreakpointsInOrder, ac as getValue, l as defaultTheme$3, T as THEME_ID, z as useDefaultProps, p as generateUtilityClasses, C as ClassNameGenerator, h as createTheme$1, s as styled$2, a as capitalize, B as memoTheme, G as createSvgIcon, P as emphasize, E as alpha, K as rootShouldForwardProp, I as lighten, H as darken, ad as getPath } from './createSvgIcon-Suk5b9V3.js';
import { T as ThemeContext, k as keyframes, a as css } from './emotion-react.browser.esm-BX64TO9b.js';
import { _ as _extends } from './emotion-use-insertion-effect-with-fallbacks.browser.esm-PMHx9-pb.js';

const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config = props?.theme?.unstable_sxConfig ?? defaultSxConfig;
  Object.keys(props).forEach(prop => {
    if (config[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp$1(props) {
  const {
    sx: inSx,
    ...other
  } = props;
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return {
        ...systemProps,
        ...result
      };
    };
  } else {
    finalSx = {
      ...systemProps,
      ...inSx
    };
  }
  return {
    ...otherProps,
    sx: finalSx
  };
}

await importShared('react');
const {Global} = await importShared('@emotion/react');
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles$3(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === "function" ? (themeInput) => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
    styles: globalStyles
  });
}

const React$t = await importShared('react');
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$2(defaultTheme = null) {
  const contextTheme = React$t.useContext(ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

const systemDefaultTheme = createTheme();
function useTheme$1(defaultTheme = systemDefaultTheme) {
  return useTheme$2(defaultTheme);
}

await importShared('react');
function GlobalStyles$2({
  styles,
  themeId,
  defaultTheme = {}
}) {
  const upperTheme = useTheme$1(defaultTheme);
  const globalStyles = typeof styles === "function" ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$3, {
    styles: globalStyles
  });
}

const React$s = await importShared('react');
function createBox(options = {}) {
  const {
    themeId,
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = styled$1('div', {
    shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  })(styleFunctionSx);
  const Box = /*#__PURE__*/React$s.forwardRef(function Box(inProps, ref) {
    const theme = useTheme$1(defaultTheme);
    const {
      className,
      component = 'div',
      ...other
    } = extendSxProp$1(inProps);
    return /*#__PURE__*/jsxRuntimeExports.jsx(BoxRoot, {
      as: component,
      ref: ref,
      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme,
      ...other
    });
  });
  return Box;
}

const styled = createStyled();

function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}

function useThemeProps({
  props,
  name,
  defaultTheme,
  themeId
}) {
  let theme = useTheme$1(defaultTheme);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  return getThemeProps({
    theme,
    name,
    props
  });
}

const React$r = await importShared('react');


/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? React$r.useLayoutEffect : React$r.useEffect;

const React$q = await importShared('react');

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/React$q.isValidElement(element) && muiNames.indexOf(
  // For server components `muiName` is avaialble in element.type._payload.value.muiName
  // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
  // eslint-disable-next-line no-underscore-dangle
  element.type.muiName ?? element.type?._payload?.value?.muiName) !== -1;
}

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

const React$p = await importShared('react');

let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React$p.useState(idOverride);
  const id = idOverride || defaultId;
  React$p.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
  ...React$p
};
const maybeReactUseId = safeReact.useId;

/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  // React.useId() is only available from React 17.0.0.
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }

  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}

const React$o = await importShared('react');

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React$o.useRef(controlled !== void 0);
  const [valueState, setValue] = React$o.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  const setValueIfUncontrolled = React$o.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

const React$n = await importShared('react');

/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */

function useEventCallback(fn) {
  const ref = React$n.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React$n.useRef((...args) =>
  // @ts-expect-error hide `this`
  (0, ref.current)(...args)).current;
}

const React$m = await importShared('react');

/**
 * Takes an array of refs and returns a new ref which will apply any modification to all of the refs.
 * This is useful when you want to have the ref used in multiple places.
 *
 * ```tsx
 * const rootRef = React.useRef<Instance>(null);
 * const refFork = useForkRef(rootRef, props.ref);
 *
 * return (
 *   <Root {...props} ref={refFork} />
 * );
 * ```
 *
 * @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
 * @returns {React.RefCallback<Instance> | null} The new ref callback.
 */
function useForkRef(...refs) {
  /**
   * This will create a new function if the refs passed to this hook change and are all defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return React$m.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return instance => {
      refs.forEach(ref => {
        setRef(ref, instance);
      });
    };
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

const React$l = await importShared('react');

const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */
function useLazyRef(init, initArg) {
  const ref = React$l.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

const React$k = await importShared('react');

const EMPTY = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
  /* eslint-disable react-hooks/exhaustive-deps */
  React$k.useEffect(fn, EMPTY);
  /* eslint-enable react-hooks/exhaustive-deps */
}

class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = null;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
  clear = () => {
    if (this.currentId !== null) {
      clearTimeout(this.currentId);
      this.currentId = null;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

function isFocusVisible(element) {
  try {
    return element.matches(":focus-visible");
  } catch (error) {
  }
  return false;
}

const React$j = await importShared('react');

const usePreviousProps = value => {
  const ref = React$j.useRef({});
  React$j.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = clsx(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
      ...additionalProps?.style,
      ...externalForwardedProps?.style,
      ...externalSlotProps?.style
    };
    const props = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = extractEventHandlers({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = clsx(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
  const mergedStyle = {
    ...internalSlotProps?.style,
    ...additionalProps?.style,
    ...externalForwardedProps?.style,
    ...externalSlotProps?.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
  const props = appendOwnerState(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}

const filterBreakpointKeys = (breakpointsKeys, responsiveKeys) => breakpointsKeys.filter(key => responsiveKeys.includes(key));
const traverseBreakpoints = (breakpoints, responsive, iterator) => {
  const smallestBreakpoint = breakpoints.keys[0]; // the keys is sorted from smallest to largest by `createBreakpoints`.

  if (Array.isArray(responsive)) {
    responsive.forEach((breakpointValue, index) => {
      iterator((responsiveStyles, style) => {
        if (index <= breakpoints.keys.length - 1) {
          if (index === 0) {
            Object.assign(responsiveStyles, style);
          } else {
            responsiveStyles[breakpoints.up(breakpoints.keys[index])] = style;
          }
        }
      }, breakpointValue);
    });
  } else if (responsive && typeof responsive === 'object') {
    // prevent null
    // responsive could be a very big object, pick the smallest responsive values

    const keys = Object.keys(responsive).length > breakpoints.keys.length ? breakpoints.keys : filterBreakpointKeys(breakpoints.keys, Object.keys(responsive));
    keys.forEach(key => {
      if (breakpoints.keys.includes(key)) {
        // @ts-ignore already checked that responsive is an object
        const breakpointValue = responsive[key];
        if (breakpointValue !== undefined) {
          iterator((responsiveStyles, style) => {
            if (smallestBreakpoint === key) {
              Object.assign(responsiveStyles, style);
            } else {
              responsiveStyles[breakpoints.up(key)] = style;
            }
          }, breakpointValue);
        }
      }
    });
  } else if (typeof responsive === 'number' || typeof responsive === 'string') {
    iterator((responsiveStyles, style) => {
      Object.assign(responsiveStyles, style);
    }, responsive);
  }
};

function getSelfSpacingVar(axis) {
  return `--Grid-${axis}Spacing`;
}
function getParentSpacingVar(axis) {
  return `--Grid-parent-${axis}Spacing`;
}
const selfColumnsVar = '--Grid-columns';
const parentColumnsVar = '--Grid-parent-columns';
const generateGridSizeStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.size, (appendStyle, value) => {
    let style = {};
    if (value === 'grow') {
      style = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    }
    if (value === 'auto') {
      style = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    }
    if (typeof value === 'number') {
      style = {
        flexGrow: 0,
        flexBasis: 'auto',
        width: `calc(100% * ${value} / var(${parentColumnsVar}) - (var(${parentColumnsVar}) - ${value}) * (var(${getParentSpacingVar('column')}) / var(${parentColumnsVar})))`
      };
    }
    appendStyle(styles, style);
  });
  return styles;
};
const generateGridOffsetStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.offset, (appendStyle, value) => {
    let style = {};
    if (value === 'auto') {
      style = {
        marginLeft: 'auto'
      };
    }
    if (typeof value === 'number') {
      style = {
        marginLeft: value === 0 ? '0px' : `calc(100% * ${value} / var(${parentColumnsVar}) + var(${getParentSpacingVar('column')}) * ${value} / var(${parentColumnsVar}))`
      };
    }
    appendStyle(styles, style);
  });
  return styles;
};
const generateGridColumnsStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {
    [selfColumnsVar]: 12
  };
  traverseBreakpoints(theme.breakpoints, ownerState.columns, (appendStyle, value) => {
    const columns = value ?? 12;
    appendStyle(styles, {
      [selfColumnsVar]: columns,
      '> *': {
        [parentColumnsVar]: columns
      }
    });
  });
  return styles;
};
const generateGridRowSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.rowSpacing, (appendStyle, value) => {
    const spacing = typeof value === 'string' ? value : theme.spacing?.(value);
    appendStyle(styles, {
      [getSelfSpacingVar('row')]: spacing,
      '> *': {
        [getParentSpacingVar('row')]: spacing
      }
    });
  });
  return styles;
};
const generateGridColumnSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.columnSpacing, (appendStyle, value) => {
    const spacing = typeof value === 'string' ? value : theme.spacing?.(value);
    appendStyle(styles, {
      [getSelfSpacingVar('column')]: spacing,
      '> *': {
        [getParentSpacingVar('column')]: spacing
      }
    });
  });
  return styles;
};
const generateGridDirectionStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.direction, (appendStyle, value) => {
    appendStyle(styles, {
      flexDirection: value
    });
  });
  return styles;
};
const generateGridStyles = ({
  ownerState
}) => {
  return {
    minWidth: 0,
    boxSizing: 'border-box',
    ...(ownerState.container && {
      display: 'flex',
      flexWrap: 'wrap',
      ...(ownerState.wrap && ownerState.wrap !== 'wrap' && {
        flexWrap: ownerState.wrap
      }),
      gap: `var(${getSelfSpacingVar('row')}) var(${getSelfSpacingVar('column')})`
    })
  };
};
const generateSizeClassNames = size => {
  const classNames = [];
  Object.entries(size).forEach(([key, value]) => {
    if (value !== false && value !== undefined) {
      classNames.push(`grid-${key}-${String(value)}`);
    }
  });
  return classNames;
};
const generateSpacingClassNames = (spacing, smallestBreakpoint = 'xs') => {
  function isValidSpacing(val) {
    if (val === undefined) {
      return false;
    }
    return typeof val === 'string' && !Number.isNaN(Number(val)) || typeof val === 'number' && val > 0;
  }
  if (isValidSpacing(spacing)) {
    return [`spacing-${smallestBreakpoint}-${String(spacing)}`];
  }
  if (typeof spacing === 'object' && !Array.isArray(spacing)) {
    const classNames = [];
    Object.entries(spacing).forEach(([key, value]) => {
      if (isValidSpacing(value)) {
        classNames.push(`spacing-${key}-${String(value)}`);
      }
    });
    return classNames;
  }
  return [];
};
const generateDirectionClasses = direction => {
  if (direction === undefined) {
    return [];
  }
  if (typeof direction === 'object') {
    return Object.entries(direction).map(([key, value]) => `direction-${key}-${value}`);
  }
  return [`direction-xs-${String(direction)}`];
};

const React$i = await importShared('react');
const defaultTheme$2 = createTheme();
const defaultCreateStyledComponent$1 = styled("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault$1(props) {
  return useThemeProps({
    props,
    name: "MuiGrid",
    defaultTheme: defaultTheme$2
  });
}
function createGrid(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent$1,
    useThemeProps = useThemePropsDefault$1,
    useTheme = useTheme$1,
    componentName = "MuiGrid"
  } = options;
  const useUtilityClasses = (ownerState, theme) => {
    const {
      container,
      direction,
      spacing,
      wrap,
      size
    } = ownerState;
    const slots = {
      root: ["root", container && "container", wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...generateDirectionClasses(direction), ...generateSizeClassNames(size), ...container ? generateSpacingClassNames(spacing, theme.breakpoints.keys[0]) : []]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  function parseResponsiveProp(propValue, breakpoints, shouldUseValue = () => true) {
    const parsedProp = {};
    if (propValue === null) {
      return parsedProp;
    }
    if (Array.isArray(propValue)) {
      propValue.forEach((value, index) => {
        if (value !== null && shouldUseValue(value) && breakpoints.keys[index]) {
          parsedProp[breakpoints.keys[index]] = value;
        }
      });
    } else if (typeof propValue === "object") {
      Object.keys(propValue).forEach((key) => {
        const value = propValue[key];
        if (value !== null && value !== void 0 && shouldUseValue(value)) {
          parsedProp[key] = value;
        }
      });
    } else {
      parsedProp[breakpoints.keys[0]] = propValue;
    }
    return parsedProp;
  }
  const GridRoot = createStyledComponent(generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridSizeStyles, generateGridDirectionStyles, generateGridStyles, generateGridOffsetStyles);
  const Grid = /* @__PURE__ */ React$i.forwardRef(function Grid2(inProps, ref) {
    const theme = useTheme();
    const themeProps = useThemeProps(inProps);
    const props = extendSxProp$1(themeProps);
    const {
      className,
      children,
      columns: columnsProp = 12,
      container = false,
      component = "div",
      direction = "row",
      wrap = "wrap",
      size: sizeProp = {},
      offset: offsetProp = {},
      spacing: spacingProp = 0,
      rowSpacing: rowSpacingProp = spacingProp,
      columnSpacing: columnSpacingProp = spacingProp,
      unstable_level: level = 0,
      ...other
    } = props;
    const size = parseResponsiveProp(sizeProp, theme.breakpoints, (val) => val !== false);
    const offset = parseResponsiveProp(offsetProp, theme.breakpoints);
    const columns = inProps.columns ?? (level ? void 0 : columnsProp);
    const spacing = inProps.spacing ?? (level ? void 0 : spacingProp);
    const rowSpacing = inProps.rowSpacing ?? inProps.spacing ?? (level ? void 0 : rowSpacingProp);
    const columnSpacing = inProps.columnSpacing ?? inProps.spacing ?? (level ? void 0 : columnSpacingProp);
    const ownerState = {
      ...props,
      level,
      columns,
      container,
      direction,
      wrap,
      spacing,
      rowSpacing,
      columnSpacing,
      size,
      offset
    };
    const classes = useUtilityClasses(ownerState, theme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(GridRoot, {
      ref,
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ...other,
      children: React$i.Children.map(children, (child) => {
        if (/* @__PURE__ */ React$i.isValidElement(child) && isMuiElement(child, ["Grid"]) && container && child.props.container) {
          return /* @__PURE__ */ React$i.cloneElement(child, {
            unstable_level: child.props?.unstable_level ?? level + 1
          });
        }
        return child;
      })
    });
  });
  Grid.muiName = "Grid";
  return Grid;
}

const React$h = await importShared('react');
const defaultTheme$1 = createTheme();
const defaultCreateStyledComponent = styled("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault(props) {
  return useThemeProps({
    props,
    name: "MuiStack",
    defaultTheme: defaultTheme$1
  });
}
function joinChildren(children, separator) {
  const childrenArray = React$h.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/* @__PURE__ */ React$h.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = (direction) => {
  return {
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = {
    display: "flex",
    flexDirection: "column",
    ...handleBreakpoints({
      theme
    }, resolveBreakpointValues({
      values: ownerState.direction,
      breakpoints: theme.breakpoints.values
    }), (propValue) => ({
      flexDirection: propValue
    }))
  };
  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = resolveBreakpointValues({
      values: ownerState.direction,
      base
    });
    const spacingValues = resolveBreakpointValues({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === "object") {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: getValue(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
        }
      };
    };
    styles = deepmerge(styles, handleBreakpoints({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = "MuiStack"
  } = options;
  const useUtilityClasses = () => {
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack = /* @__PURE__ */ React$h.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps(inProps);
    const props = extendSxProp$1(themeProps);
    const {
      component = "div",
      direction = "column",
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false,
      ...other
    } = props;
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StackRoot, {
      as: component,
      ownerState,
      ref,
      className: clsx(classes.root, className),
      ...other,
      children: divider ? joinChildren(children, divider) : children
    });
  });
  return Stack;
}

await importShared('react');
function useTheme() {
  const theme = useTheme$1(defaultTheme$3);
  return theme[THEME_ID] || theme;
}

await importShared('react');
function GlobalStyles$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$2, {
    ...props,
    defaultTheme: defaultTheme$3,
    themeId: THEME_ID
  });
}

await importShared('react');
function globalCss(styles) {
  return function GlobalStylesWrapper(props) {
    return (
      /*#__PURE__*/
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      jsxRuntimeExports.jsx(GlobalStyles$1, {
        styles: typeof styles === 'function' ? theme => styles({
          theme,
          ...props
        }) : styles
      })
    );
  };
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_createExtendSxProp() {
  return extendSxProp$1;
}

const React$g = await importShared('react');
const isDynamicSupport = typeof globalCss({}) === "function";
const html = (theme, enableColorScheme) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...enableColorScheme && !theme.vars && {
    colorScheme: theme.palette.mode
  }
});
const body = (theme) => ({
  color: (theme.vars || theme).palette.text.primary,
  ...theme.typography.body1,
  backgroundColor: (theme.vars || theme).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (theme.vars || theme).palette.common.white
  }
});
const styles = (theme, enableColorScheme = false) => {
  const colorSchemeStyles = {};
  if (enableColorScheme && theme.colorSchemes && typeof theme.getColorSchemeSelector === "function") {
    Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
      const selector = theme.getColorSchemeSelector(key);
      if (selector.startsWith("@")) {
        colorSchemeStyles[selector] = {
          ":root": {
            colorScheme: scheme.palette?.mode
          }
        };
      } else {
        colorSchemeStyles[selector.replace(/\s*&/, "")] = {
          colorScheme: scheme.palette?.mode
        };
      }
    });
  }
  let defaultStyles = {
    html: html(theme, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...body(theme),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (theme.vars || theme).palette.background.default
      }
    },
    ...colorSchemeStyles
  };
  const themeOverrides = theme.components?.MuiCssBaseline?.styleOverrides;
  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }
  return defaultStyles;
};
const SELECTOR = "mui-ecs";
const staticStyles = (theme) => {
  const result = styles(theme, false);
  const baseStyles = Array.isArray(result) ? result[0] : result;
  if (!theme.vars && baseStyles) {
    baseStyles.html[`:root:has(${SELECTOR})`] = {
      colorScheme: theme.palette.mode
    };
  }
  if (theme.colorSchemes) {
    Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
      const selector = theme.getColorSchemeSelector(key);
      if (selector.startsWith("@")) {
        baseStyles[selector] = {
          [`:root:not(:has(.${SELECTOR}))`]: {
            colorScheme: scheme.palette?.mode
          }
        };
      } else {
        baseStyles[selector.replace(/\s*&/, "")] = {
          [`&:not(:has(.${SELECTOR}))`]: {
            colorScheme: scheme.palette?.mode
          }
        };
      }
    });
  }
  return result;
};
const GlobalStyles = globalCss(isDynamicSupport ? ({
  theme,
  enableColorScheme
}) => styles(theme, enableColorScheme) : ({
  theme
}) => staticStyles(theme));
function CssBaseline(inProps) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCssBaseline"
  });
  const {
    children,
    enableColorScheme = false
  } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$g.Fragment, {
    children: [isDynamicSupport && /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles, {
      enableColorScheme
    }), !isDynamicSupport && !enableColorScheme && /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: SELECTOR,
      style: {
        display: "none"
      }
    }), children]
  });
}

const boxClasses = generateUtilityClasses('MuiBox', ['root']);

const defaultTheme = createTheme$1();
const Box = createBox({
  themeId: THEME_ID,
  defaultTheme,
  defaultClassName: boxClasses.root,
  generateClassName: ClassNameGenerator.generate
});

const Stack = createStack({
  createStyledComponent: styled$2("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  }),
  useThemeProps: (inProps) => useDefaultProps({
    props: inProps,
    name: "MuiStack"
  })
});

/**
 * Type guard to check if the object has a "main" property of type string.
 *
 * @param obj - the object to check
 * @returns boolean
 */
function hasCorrectMainProperty(obj) {
  return typeof obj.main === 'string';
}
/**
 * Checks if the object conforms to the SimplePaletteColorOptions type.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param obj - The object to check
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns boolean
 */
function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
  if (!hasCorrectMainProperty(obj)) {
    return false;
  }
  for (const value of additionalPropertiesToCheck) {
    if (!obj.hasOwnProperty(value) || typeof obj[value] !== 'string') {
      return false;
    }
  }
  return true;
}

/**
 * Creates a filter function used to filter simple palette color options.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns ([, value]: [any, PaletteColorOptions]) => boolean
 */
function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
  return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
}

function getTypographyUtilityClass(slot) {
  return generateUtilityClass('MuiTypography', slot);
}
const typographyClasses = generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

const React$f = await importShared('react');
const v6Colors$1 = {
  primary: true,
  secondary: true,
  error: true,
  info: true,
  success: true,
  warning: true,
  textPrimary: true,
  textSecondary: true,
  textDisabled: true
};
const extendSxProp = internal_createExtendSxProp();
const useUtilityClasses$8 = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled$2("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== "inherit" && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(memoTheme(({
  theme
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(theme.typography).filter(([variant, value]) => variant !== "inherit" && value && typeof value === "object").map(([variant, value]) => ({
    props: {
      variant
    },
    style: value
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette?.text || {}).filter(([, value]) => typeof value === "string").map(([color]) => ({
    props: {
      color: `text${capitalize(color)}`
    },
    style: {
      color: (theme.vars || theme).palette.text[color]
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.paragraph,
    style: {
      marginBottom: 16
    }
  }]
})));
const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
const Typography = /* @__PURE__ */ React$f.forwardRef(function Typography2(inProps, ref) {
  const {
    color,
    ...themeProps
  } = useDefaultProps({
    props: inProps,
    name: "MuiTypography"
  });
  const isSxColor = !v6Colors$1[color];
  const props = extendSxProp({
    ...themeProps,
    ...isSxColor && {
      color
    }
  });
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping,
    ...other
  } = props;
  const ownerState = {
    ...props,
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  };
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses$8(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TypographyRoot, {
    as: Component,
    ref,
    className: clsx(classes.root, className),
    ...other,
    ownerState,
    style: {
      ...align !== "inherit" && {
        "--Typography-textAlign": align
      },
      ...other.style
    }
  });
});

await importShared('react');
const MoreHorizIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHoriz');

const React$e = await importShared('react');
/**
 * Lazy initialization container for the Ripple instance. This improves
 * performance by delaying mounting the ripple until it's needed.
 */
class LazyRipple {
  /** React ref to the ripple instance */

  /** If the ripple component should be mounted */

  /** Promise that resolves when the ripple component is mounted */

  /** If the ripple component has been mounted */

  /** React state hook setter */

  static create() {
    return new LazyRipple();
  }
  static use() {
    /* eslint-disable */
    const ripple = useLazyRef(LazyRipple.create).current;
    const [shouldMount, setShouldMount] = React$e.useState(false);
    ripple.shouldMount = shouldMount;
    ripple.setShouldMount = setShouldMount;
    React$e.useEffect(ripple.mountEffect, [shouldMount]);
    /* eslint-enable */

    return ripple;
  }
  constructor() {
    this.ref = {
      current: null
    };
    this.mounted = null;
    this.didMount = false;
    this.shouldMount = false;
    this.setShouldMount = null;
  }
  mount() {
    if (!this.mounted) {
      this.mounted = createControlledPromise();
      this.shouldMount = true;
      this.setShouldMount(this.shouldMount);
    }
    return this.mounted;
  }
  mountEffect = () => {
    if (this.shouldMount && !this.didMount) {
      if (this.ref.current !== null) {
        this.didMount = true;
        this.mounted.resolve();
      }
    }
  };

  /* Ripple API */

  start(...args) {
    this.mount().then(() => this.ref.current?.start(...args));
  }
  stop(...args) {
    this.mount().then(() => this.ref.current?.stop(...args));
  }
  pulsate(...args) {
    this.mount().then(() => this.ref.current?.pulsate(...args));
  }
}
function useLazyRipple() {
  return LazyRipple.use();
}
function createControlledPromise() {
  let resolve;
  let reject;
  const p = new Promise((resolveFn, rejectFn) => {
    resolve = resolveFn;
    reject = rejectFn;
  });
  p.resolve = resolve;
  p.reject = reject;
  return p;
}

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

const React$d = await importShared('react');

const TransitionGroupContext = React$d.createContext(null);

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

const {Children,cloneElement,isValidElement} = await importShared('react');

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

const React$c = await importShared('react');
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ React$c.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React$c.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React$c.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(React$c.Component);
TransitionGroup.propTypes = {};
TransitionGroup.defaultProps = defaultProps;

const React$b = await importShared('react');
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = React$b.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React$b.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: childClassName
    })
  });
}

function getTouchRippleUtilityClass(slot) {
  return generateUtilityClass('MuiTouchRipple', slot);
}
const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);

const React$a = await importShared('react');
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
const exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
const pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
const TouchRippleRoot = styled$2("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
const TouchRippleRipple = styled$2(Ripple, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${touchRippleClasses.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  &.${touchRippleClasses.ripplePulsate} {
    animation-duration: ${({
  theme
}) => theme.transitions.duration.shorter}ms;
  }

  & .${touchRippleClasses.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${touchRippleClasses.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  & .${touchRippleClasses.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;
const TouchRipple = /* @__PURE__ */ React$a.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className,
    ...other
  } = props;
  const [ripples, setRipples] = React$a.useState([]);
  const nextKey = React$a.useRef(0);
  const rippleCallback = React$a.useRef(null);
  React$a.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = React$a.useRef(false);
  const startTimer = useTimeout();
  const startTimerCommit = React$a.useRef(null);
  const container = React$a.useRef(null);
  const startCommit = React$a.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = React$a.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
      // For test purposes
    } = options;
    if (event?.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event?.type === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event?.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.start(DELAY_RIPPLE, () => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        });
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit, startTimer]);
  const pulsate = React$a.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = React$a.useCallback((event, cb) => {
    startTimer.clear();
    if (event?.type === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.start(0, () => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, [startTimer]);
  React$a.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRoot, {
    className: clsx(touchRippleClasses.root, classes.root, className),
    ref: container,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  });
});

function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass('MuiButtonBase', slot);
}
const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);

const React$9 = await importShared('react');
const useUtilityClasses$7 = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = styled$2("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
const ButtonBase = /* @__PURE__ */ React$9.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    focusVisibleClassName,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type,
    ...other
  } = props;
  const buttonRef = React$9.useRef(null);
  const ripple = useLazyRipple();
  const handleRippleRef = useForkRef(ripple.ref, touchRippleRef);
  const [focusVisible, setFocusVisible] = React$9.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React$9.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
  React$9.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      ripple.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, ripple]);
  const handleMouseDown = useRippleHandler(ripple, "start", onMouseDown, disableTouchRipple);
  const handleContextMenu = useRippleHandler(ripple, "stop", onContextMenu, disableTouchRipple);
  const handleDragLeave = useRippleHandler(ripple, "stop", onDragLeave, disableTouchRipple);
  const handleMouseUp = useRippleHandler(ripple, "stop", onMouseUp, disableTouchRipple);
  const handleMouseLeave = useRippleHandler(ripple, "stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  }, disableTouchRipple);
  const handleTouchStart = useRippleHandler(ripple, "start", onTouchStart, disableTouchRipple);
  const handleTouchEnd = useRippleHandler(ripple, "stop", onTouchEnd, disableTouchRipple);
  const handleTouchMove = useRippleHandler(ripple, "stop", onTouchMove, disableTouchRipple);
  const handleBlur = useRippleHandler(ripple, "stop", (event) => {
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const handleKeyDown = useEventCallback((event) => {
    if (focusRipple && !event.repeat && focusVisible && event.key === " ") {
      ripple.stop(event, () => {
        ripple.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback((event) => {
    if (focusRipple && event.key === " " && focusVisible && !event.defaultPrevented) {
      ripple.stop(event, () => {
        ripple.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleRef = useForkRef(ref, buttonRef);
  const ownerState = {
    ...props,
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  };
  const classes = useUtilityClasses$7(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonBaseRoot, {
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type,
    ...buttonProps,
    ...other,
    children: [children, enableTouchRipple ? /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRipple, {
      ref: handleRippleRef,
      center: centerRipple,
      ...TouchRippleProps
    }) : null]
  });
});
function useRippleHandler(ripple, rippleAction, eventCallback, skipRippleAction = false) {
  return useEventCallback((event) => {
    if (eventCallback) {
      eventCallback(event);
    }
    if (!skipRippleAction) {
      ripple[rippleAction](event);
    }
    return true;
  });
}

await importShared('react');
const BreadcrumbCollapsedButton = styled$2(ButtonBase)(memoTheme(({
  theme
}) => ({
  display: "flex",
  marginLeft: `calc(${theme.spacing(1)} * 0.5)`,
  marginRight: `calc(${theme.spacing(1)} * 0.5)`,
  ...theme.palette.mode === "light" ? {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[700]
  } : {
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.grey[100]
  },
  borderRadius: 2,
  "&:hover, &:focus": {
    ...theme.palette.mode === "light" ? {
      backgroundColor: theme.palette.grey[200]
    } : {
      backgroundColor: theme.palette.grey[600]
    }
  },
  "&:active": {
    boxShadow: theme.shadows[0],
    ...theme.palette.mode === "light" ? {
      backgroundColor: emphasize(theme.palette.grey[200], 0.12)
    } : {
      backgroundColor: emphasize(theme.palette.grey[600], 0.12)
    }
  }
})));
const BreadcrumbCollapsedIcon = styled$2(MoreHorizIcon)({
  width: 24,
  height: 16
});
function BreadcrumbCollapsed(props) {
  const {
    slots = {},
    slotProps = {},
    ...otherProps
  } = props;
  const ownerState = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbCollapsedButton, {
      focusRipple: true,
      ...otherProps,
      ownerState,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbCollapsedIcon, {
        as: slots.CollapsedIcon,
        ownerState,
        ...slotProps.collapsedIcon
      })
    })
  });
}

function getBreadcrumbsUtilityClass(slot) {
  return generateUtilityClass('MuiBreadcrumbs', slot);
}
const breadcrumbsClasses = generateUtilityClasses('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']);

const React$8 = await importShared('react');
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  };
  return composeClasses(slots, getBreadcrumbsUtilityClass, classes);
};
const BreadcrumbsRoot = styled$2(Typography, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [{
      [`& .${breadcrumbsClasses.li}`]: styles.li
    }, styles.root];
  }
})({});
const BreadcrumbsOl = styled$2("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol",
  overridesResolver: (props, styles) => styles.ol
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
});
const BreadcrumbsSeparator = styled$2("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function insertSeparators(items, className, separator, ownerState) {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(current, /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbsSeparator, {
        "aria-hidden": true,
        className,
        ownerState,
        children: separator
      }, `separator-${index}`));
    } else {
      acc.push(current);
    }
    return acc;
  }, []);
}
const Breadcrumbs = /* @__PURE__ */ React$8.forwardRef(function Breadcrumbs2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBreadcrumbs"
  });
  const {
    children,
    className,
    component = "nav",
    slots = {},
    slotProps = {},
    expandText = "Show path",
    itemsAfterCollapse = 1,
    itemsBeforeCollapse = 1,
    maxItems = 8,
    separator = "/",
    ...other
  } = props;
  const [expanded, setExpanded] = React$8.useState(false);
  const ownerState = {
    ...props,
    component,
    expanded,
    expandText,
    itemsAfterCollapse,
    itemsBeforeCollapse,
    maxItems,
    separator
  };
  const classes = useUtilityClasses$6(ownerState);
  const collapsedIconSlotProps = useSlotProps({
    elementType: slots.CollapsedIcon,
    externalSlotProps: slotProps.collapsedIcon,
    ownerState
  });
  const listRef = React$8.useRef(null);
  const renderItemsBeforeAndAfter = (allItems2) => {
    const handleClickExpand = () => {
      setExpanded(true);
      const focusable = listRef.current.querySelector("a[href],button,[tabindex]");
      if (focusable) {
        focusable.focus();
      }
    };
    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems2.length) {
      return allItems2;
    }
    return [...allItems2.slice(0, itemsBeforeCollapse), /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbCollapsed, {
      "aria-label": expandText,
      slots: {
        CollapsedIcon: slots.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: collapsedIconSlotProps
      },
      onClick: handleClickExpand
    }, "ellipsis"), ...allItems2.slice(allItems2.length - itemsAfterCollapse, allItems2.length)];
  };
  const allItems = React$8.Children.toArray(children).filter((child) => {
    return /* @__PURE__ */ React$8.isValidElement(child);
  }).map((child, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: classes.li,
    children: child
  }, `child-${index}`));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbsRoot, {
    ref,
    component,
    color: "textSecondary",
    className: clsx(classes.root, className),
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbsOl, {
      className: classes.ol,
      ref: listRef,
      ownerState,
      children: insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator, ownerState)
    })
  });
});

/**
 *
 * Demos:
 *
 * - [Badge](https://mui.com/base-ui/react-badge/#hook)
 *
 * API:
 *
 * - [useBadge API](https://mui.com/base-ui/react-badge/hooks-api/#use-badge)
 */
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = usePreviousProps({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const {
    badgeContent,
    max = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max,
    displayValue
  };
}

function getBadgeUtilityClass(slot) {
  return generateUtilityClass('MuiBadge', slot);
}
const badgeClasses = generateUtilityClasses('MuiBadge', ['root', 'badge', 'dot', 'standard', 'anchorOriginTopRight', 'anchorOriginBottomRight', 'anchorOriginTopLeft', 'anchorOriginBottomLeft', 'invisible', 'colorError', 'colorInfo', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorWarning', 'overlapRectangular', 'overlapCircular',
// TODO: v6 remove the overlap value from these class keys
'anchorOriginTopLeftCircular', 'anchorOriginTopLeftRectangular', 'anchorOriginTopRightCircular', 'anchorOriginTopRightRectangular', 'anchorOriginBottomLeftCircular', 'anchorOriginBottomLeftRectangular', 'anchorOriginBottomRightCircular', 'anchorOriginBottomRightRectangular']);

const React$7 = await importShared('react');
const RADIUS_STANDARD = 10;
const RADIUS_DOT = 4;
const useUtilityClasses$5 = (ownerState) => {
  const {
    color,
    anchorOrigin,
    invisible,
    overlap,
    variant,
    classes = {}
  } = ownerState;
  const slots = {
    root: ["root"],
    badge: ["badge", variant, invisible && "invisible", `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`, `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}${capitalize(overlap)}`, `overlap${capitalize(overlap)}`, color !== "default" && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getBadgeUtilityClass, classes);
};
const BadgeRoot = styled$2("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
});
const BadgeBadge = styled$2("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.badge, styles[ownerState.variant], styles[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}${capitalize(ownerState.overlap)}`], ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`], ownerState.invisible && styles.invisible];
  }
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(12),
  minWidth: RADIUS_STANDARD * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: RADIUS_STANDARD * 2,
  borderRadius: RADIUS_STANDARD,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["contrastText"])).map(([color]) => ({
    props: {
      color
    },
    style: {
      backgroundColor: (theme.vars || theme).palette[color].main,
      color: (theme.vars || theme).palette[color].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: RADIUS_DOT,
      height: RADIUS_DOT * 2,
      minWidth: RADIUS_DOT * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: true
    },
    style: {
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen
      })
    }
  }]
})));
function getAnchorOrigin(anchorOrigin) {
  return {
    vertical: anchorOrigin?.vertical ?? "top",
    horizontal: anchorOrigin?.horizontal ?? "right"
  };
}
const Badge = /* @__PURE__ */ React$7.forwardRef(function Badge2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBadge"
  });
  const {
    anchorOrigin: anchorOriginProp,
    className,
    classes: classesProp,
    component,
    components = {},
    componentsProps = {},
    children,
    overlap: overlapProp = "rectangular",
    color: colorProp = "default",
    invisible: invisibleProp = false,
    max: maxProp = 99,
    badgeContent: badgeContentProp,
    slots,
    slotProps,
    showZero = false,
    variant: variantProp = "standard",
    ...other
  } = props;
  const {
    badgeContent,
    invisible: invisibleFromHook,
    max,
    displayValue: displayValueFromHook
  } = useBadge({
    max: maxProp,
    invisible: invisibleProp,
    badgeContent: badgeContentProp,
    showZero
  });
  const prevProps = usePreviousProps({
    anchorOrigin: getAnchorOrigin(anchorOriginProp),
    color: colorProp,
    overlap: overlapProp,
    variant: variantProp,
    badgeContent: badgeContentProp
  });
  const invisible = invisibleFromHook || badgeContent == null && variantProp !== "dot";
  const {
    color = colorProp,
    overlap = overlapProp,
    anchorOrigin: anchorOriginPropProp,
    variant = variantProp
  } = invisible ? prevProps : props;
  const anchorOrigin = getAnchorOrigin(anchorOriginPropProp);
  const displayValue = variant !== "dot" ? displayValueFromHook : void 0;
  const ownerState = {
    ...props,
    badgeContent,
    invisible,
    max,
    displayValue,
    showZero,
    anchorOrigin,
    color,
    overlap,
    variant
  };
  const classes = useUtilityClasses$5(ownerState);
  const RootSlot = slots?.root ?? components.Root ?? BadgeRoot;
  const BadgeSlot = slots?.badge ?? components.Badge ?? BadgeBadge;
  const rootSlotProps = slotProps?.root ?? componentsProps.root;
  const badgeSlotProps = slotProps?.badge ?? componentsProps.badge;
  const rootProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: clsx(rootSlotProps?.className, classes.root, className)
  });
  const badgeProps = useSlotProps({
    elementType: BadgeSlot,
    externalSlotProps: badgeSlotProps,
    ownerState,
    className: clsx(classes.badge, badgeSlotProps?.className)
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootProps,
    children: [children, /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeSlot, {
      ...badgeProps,
      children: displayValue
    })]
  });
});

function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass('MuiCircularProgress', slot);
}
const circularProgressClasses = generateUtilityClasses('MuiCircularProgress', ['root', 'determinate', 'indeterminate', 'colorPrimary', 'colorSecondary', 'svg', 'circle', 'circleDeterminate', 'circleIndeterminate', 'circleDisableShrink']);

const React$6 = await importShared('react');
const SIZE = 44;
const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;
const rotateAnimation = typeof circularRotateKeyframe !== "string" ? css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
const dashAnimation = typeof circularDashKeyframe !== "string" ? css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes,
    variant,
    color,
    disableShrink
  } = ownerState;
  const slots = {
    root: ["root", variant, `color${capitalize(color)}`],
    svg: ["svg"],
    circle: ["circle", `circle${capitalize(variant)}`, disableShrink && "circleDisableShrink"]
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};
const CircularProgressRoot = styled$2("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: rotateAnimation || {
      animation: `${circularRotateKeyframe} 1.4s linear infinite`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  }))]
})));
const CircularProgressSVG = styled$2("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (props, styles) => styles.svg
})({
  display: "block"
  // Keeps the progress centered
});
const CircularProgressCircle = styled$2("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.circle, styles[`circle${capitalize(ownerState.variant)}`], ownerState.disableShrink && styles.circleDisableShrink];
  }
})(memoTheme(({
  theme
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" && !ownerState.disableShrink,
    style: dashAnimation || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
    }
  }]
})));
const CircularProgress = /* @__PURE__ */ React$6.forwardRef(function CircularProgress2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCircularProgress"
  });
  const {
    className,
    color = "primary",
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = "indeterminate",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant
  };
  const classes = useUtilityClasses$4(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === "determinate") {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressRoot, {
    className: clsx(classes.root, className),
    style: {
      width: size,
      height: size,
      ...rootStyle,
      ...style
    },
    ownerState,
    ref,
    role: "progressbar",
    ...rootProps,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressSVG, {
      className: classes.svg,
      ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  });
});

function getIconButtonUtilityClass(slot) {
  return generateUtilityClass('MuiIconButton', slot);
}
const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'loading', 'loadingIndicator', 'loadingWrapper']);

const React$5 = await importShared('react');
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes,
    disabled,
    color,
    edge,
    size,
    loading
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", disabled && "disabled", color !== "default" && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = styled$2(ButtonBase, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.loading && styles.loading, ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: (props) => !props.disableRipple,
    style: {
      "--IconButton-hoverBg": theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), memoTheme(({
  theme
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      "--IconButton-hoverBg": theme.vars ? `rgba(${(theme.vars || theme).palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: theme.typography.pxToRem(28)
    }
  }],
  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: "transparent",
    color: (theme.vars || theme).palette.action.disabled
  },
  [`&.${iconButtonClasses.loading}`]: {
    color: "transparent"
  }
})));
const IconButtonLoadingIndicator = styled$2("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (props, styles) => styles.loadingIndicator
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (theme.vars || theme).palette.action.disabled,
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }]
}));
const IconButton = /* @__PURE__ */ React$5.forwardRef(function IconButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children,
    className,
    color = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium",
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    ...other
  } = props;
  const loadingId = useId(idProp);
  const loadingIndicator = loadingIndicatorProp ?? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    edge,
    color,
    disabled,
    disableFocusRipple,
    loading,
    loadingIndicator,
    size
  };
  const classes = useUtilityClasses$3(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(IconButtonRoot, {
    id: loading ? loadingId : idProp,
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled || loading,
    ref,
    ...other,
    ownerState,
    children: [typeof loading === "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loading && loadingIndicator
      })
    }), children]
  });
});

const React$4 = await importShared('react');

const FormControlContext = /* @__PURE__ */ React$4.createContext(void 0);

const React$3 = await importShared('react');
function useFormControl() {
  return React$3.useContext(FormControlContext);
}

function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass('PrivateSwitchBase', slot);
}
generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);

const React$2 = await importShared('react');
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize(edge)}`],
    input: ["input"]
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = styled$2(ButtonBase)({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === "start" && ownerState.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === "end" && ownerState.size !== "small",
    style: {
      marginRight: -12
    }
  }]
});
const SwitchBaseInput = styled$2("input", {
  shouldForwardProp: rootShouldForwardProp
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});
const SwitchBase = /* @__PURE__ */ React$2.forwardRef(function SwitchBase2(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    className,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value,
    ...other
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  });
  const muiFormControl = useFormControl();
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = (event) => {
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === "checkbox" || type === "radio";
  const ownerState = {
    ...props,
    checked,
    disabled,
    disableFocusRipple,
    edge
  };
  const classes = useUtilityClasses$2(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchBaseRoot, {
    component: "span",
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    tabIndex: null,
    role: void 0,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState,
    ref,
    ...other,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SwitchBaseInput, {
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      className: classes.input,
      disabled,
      id: hasLabelFor ? id : void 0,
      name,
      onChange: handleInputChange,
      readOnly,
      ref: inputRef,
      required,
      ownerState,
      tabIndex,
      type,
      ...type === "checkbox" && value === void 0 ? {} : {
        value
      },
      ...inputProps
    }), checked ? checkedIcon : icon]
  });
});

function getSwitchUtilityClass(slot) {
  return generateUtilityClass('MuiSwitch', slot);
}
const switchClasses = generateUtilityClasses('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);

const React$1 = await importShared('react');
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    edge,
    size,
    color,
    checked,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
    switchBase: ["switchBase", `color${capitalize(color)}`, checked && "checked", disabled && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getSwitchUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
const SwitchRoot = styled$2("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${switchClasses.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${switchClasses.switchBase}`]: {
        padding: 4,
        [`&.${switchClasses.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
});
const SwitchSwitchBase = styled$2(SwitchBase, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.switchBase, {
      [`& .${switchClasses.input}`]: styles.input
    }, ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.grey[300]}`,
  transition: theme.transitions.create(["left", "transform"], {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${switchClasses.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${switchClasses.disabled}`]: {
    color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600]}`
  },
  [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
    opacity: 0.5
  },
  [`&.${switchClasses.disabled} + .${switchClasses.track}`]: {
    opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${switchClasses.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), memoTheme(({
  theme
}) => ({
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${switchClasses.checked}`]: {
        color: (theme.vars || theme).palette[color].main,
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${switchClasses.disabled}`]: {
          color: theme.vars ? theme.vars.palette.Switch[`${color}DisabledColor`] : `${theme.palette.mode === "light" ? lighten(theme.palette[color].main, 0.62) : darken(theme.palette[color].main, 0.55)}`
        }
      },
      [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
        backgroundColor: (theme.vars || theme).palette[color].main
      }
    }
  }))]
})));
const SwitchTrack = styled$2("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (props, styles) => styles.track
})(memoTheme(({
  theme
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: theme.transitions.create(["opacity", "background-color"], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white}`,
  opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === "light" ? 0.38 : 0.3}`
})));
const SwitchThumb = styled$2("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (props, styles) => styles.thumb
})(memoTheme(({
  theme
}) => ({
  boxShadow: (theme.vars || theme).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
})));
const Switch = /* @__PURE__ */ React$1.forwardRef(function Switch2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSwitch"
  });
  const {
    className,
    color = "primary",
    edge = false,
    size = "medium",
    sx,
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    edge,
    size
  };
  const classes = useUtilityClasses$1(ownerState);
  const icon = /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchThumb, {
    className: classes.thumb,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchRoot, {
    className: clsx(classes.root, className),
    sx,
    ownerState,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SwitchSwitchBase, {
      type: "checkbox",
      icon,
      checkedIcon: icon,
      ref,
      ownerState,
      ...other,
      classes: {
        ...classes,
        root: classes.switchBase
      }
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchTrack, {
      className: classes.track,
      ownerState
    })]
  });
});

const Grid2 = createGrid({
  createStyledComponent: styled$2("div", {
    name: "MuiGrid2",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.container && styles.container];
    }
  }),
  componentName: "MuiGrid2",
  useThemeProps: (inProps) => useDefaultProps({
    props: inProps,
    name: "MuiGrid2"
  }),
  useTheme
});

function getLinkUtilityClass(slot) {
  return generateUtilityClass('MuiLink', slot);
}
const linkClasses = generateUtilityClasses('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);

const getTextDecoration = ({
  theme,
  ownerState
}) => {
  const transformedColor = ownerState.color;
  // check the `main` color first for a custom palette, then fallback to the color itself
  const color = getPath(theme, `palette.${transformedColor}.main`, false) || getPath(theme, `palette.${transformedColor}`, false) || ownerState.color;
  const channelColor = getPath(theme, `palette.${transformedColor}.mainChannel`) || getPath(theme, `palette.${transformedColor}Channel`);
  if ('vars' in theme && channelColor) {
    return `rgba(${channelColor} / 0.4)`;
  }
  return alpha(color, 0.4);
};

const React = await importShared('react');
const v6Colors = {
  primary: true,
  secondary: true,
  error: true,
  info: true,
  success: true,
  warning: true,
  textPrimary: true,
  textSecondary: true,
  textDisabled: true
};
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ["root", `underline${capitalize(underline)}`, component === "button" && "button", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, getLinkUtilityClass, classes);
};
const LinkRoot = styled$2(Typography, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`underline${capitalize(ownerState.underline)}`], ownerState.component === "button" && styles.button];
  }
})(memoTheme(({
  theme
}) => {
  return {
    variants: [{
      props: {
        underline: "none"
      },
      style: {
        textDecoration: "none"
      }
    }, {
      props: {
        underline: "hover"
      },
      style: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }
    }, {
      props: {
        underline: "always"
      },
      style: {
        textDecoration: "underline",
        "&:hover": {
          textDecorationColor: "inherit"
        }
      }
    }, {
      props: ({
        underline,
        ownerState
      }) => underline === "always" && ownerState.color !== "inherit",
      style: {
        textDecorationColor: "var(--Link-underlineColor)"
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        underline: "always",
        color
      },
      style: {
        "--Link-underlineColor": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.4)` : alpha(theme.palette[color].main, 0.4)
      }
    })), {
      props: {
        underline: "always",
        color: "textPrimary"
      },
      style: {
        "--Link-underlineColor": theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : alpha(theme.palette.text.primary, 0.4)
      }
    }, {
      props: {
        underline: "always",
        color: "textSecondary"
      },
      style: {
        "--Link-underlineColor": theme.vars ? `rgba(${theme.vars.palette.text.secondaryChannel} / 0.4)` : alpha(theme.palette.text.secondary, 0.4)
      }
    }, {
      props: {
        underline: "always",
        color: "textDisabled"
      },
      style: {
        "--Link-underlineColor": (theme.vars || theme).palette.text.disabled
      }
    }, {
      props: {
        component: "button"
      },
      style: {
        position: "relative",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        // Reset default value
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        border: 0,
        margin: 0,
        // Remove the margin in Safari
        borderRadius: 0,
        padding: 0,
        // Remove the padding in Firefox
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        // Reset
        WebkitAppearance: "none",
        // Reset
        "&::-moz-focus-inner": {
          borderStyle: "none"
          // Remove Firefox dotted outline.
        },
        [`&.${linkClasses.focusVisible}`]: {
          outline: "auto"
        }
      }
    }]
  };
}));
const Link = /* @__PURE__ */ React.forwardRef(function Link2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiLink"
  });
  const theme = useTheme();
  const {
    className,
    color = "primary",
    component = "a",
    onBlur,
    onFocus,
    TypographyClasses,
    underline = "always",
    variant = "inherit",
    sx,
    ...other
  } = props;
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handleBlur = (event) => {
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleFocus = (event) => {
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const ownerState = {
    ...props,
    color,
    component,
    focusVisible,
    underline,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LinkRoot, {
    color,
    className: clsx(classes.root, className),
    classes: TypographyClasses,
    component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref,
    ownerState,
    variant,
    ...other,
    sx: [...v6Colors[color] === void 0 ? [{
      color
    }] : [], ...Array.isArray(sx) ? sx : [sx]],
    style: {
      ...other.style,
      ...underline === "always" && color !== "inherit" && !v6Colors[color] && {
        "--Link-underlineColor": getTextDecoration({
          theme,
          ownerState
        })
      }
    }
  });
});

export { touchRippleClasses as $, useSlotProps as A, Breadcrumbs as B, CssBaseline as C, useFormControl as D, globalCss as E, FormControlContext as F, Grid2 as G, CircularProgress as H, IconButton as I, typographyClasses as J, SwitchBase as K, Link as L, extractEventHandlers as M, isMuiElement as N, extendSxProp$1 as O, isFocusVisible as P, body as Q, html as R, Stack as S, Typography as T, Timeout as U, GlobalStyles$1 as V, getBadgeUtilityClass as W, boxClasses as X, getBreadcrumbsUtilityClass as Y, buttonBaseClasses as Z, _inheritsLoose as _, Badge as a, getButtonBaseUtilityClass as a0, getTouchRippleUtilityClass as a1, circularProgressClasses as a2, getCircularProgressUtilityClass as a3, iconButtonClasses as a4, getIconButtonUtilityClass as a5, linkClasses as a6, getLinkUtilityClass as a7, switchClasses as a8, getSwitchUtilityClass as a9, getTypographyUtilityClass as aa, breadcrumbsClasses as b, badgeClasses as c, Switch as d, Box as e, useEnhancedEffect as f, getThemeProps as g, GlobalStyles$3 as h, useThemeProps as i, _objectWithoutPropertiesLoose as j, TransitionGroupContext as k, useTheme as l, useTimeout as m, useForkRef as n, mergeSlotProps as o, appendOwnerState as p, useControlled as q, resolveComponentProps as r, styled as s, ButtonBase as t, useTheme$2 as u, createSimplePaletteValueFilter as v, useId as w, usePreviousProps as x, useEventCallback as y, setRef as z };
