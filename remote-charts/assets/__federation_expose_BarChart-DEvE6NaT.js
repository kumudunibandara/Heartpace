import { importShared } from './__federation_fn_import-XIeCvASR.js';
import { A as styled, j as jsxRuntimeExports, d as composeClasses, g as generateUtilityClass, x as generateUtilityClasses } from './memoTheme-DSZyGnlJ.js';
import { u as useInteractionItemProps, a as animated, c as color, b as useTransition, i as isBandScaleConfig, d as isPointScaleConfig, D as DEFAULT_X_AXIS_KEY, e as DEFAULT_Y_AXIS_KEY, f as useSkipAnimation, g as useBarSeries, h as useCartesianContext, j as getColor, R as ResponsiveChartContainer, C as ChartsOverlay, k as ChartsAxisHighlight, l as ChartsAxis, m as ChartsLegend, n as ChartsTooltip, o as getUsersInfo } from './UserService-vMN2TBSP.js';
import { _ as _objectWithoutPropertiesLoose, p as useSlotProps, z as useThemeProps, k as useId, d as useTheme, T as Typography } from './Typography-HTjTafHw.js';
import { c as Card, d as CardContent, S as Stack, C as Chip } from './Stack-4NuTV2HV.js';
import { _ as _extends } from './emotion-use-insertion-effect-with-fallbacks.browser.esm-DGfdAQTs.js';
import { u as useItemHighlighted, a as useChartId, C as ChartsOnAxisClickHandler, b as ChartsGrid, c as ChartsClipPath } from './ChartsOnAxisClickHandler-DtcffTF5.js';

const _excluded$6 = ["id", "dataIndex", "classes", "color", "slots", "slotProps", "style", "onClick"];
await importShared('react');
function getBarElementUtilityClass(slot) {
  return generateUtilityClass("MuiBarElement", slot);
}
generateUtilityClasses("MuiBarElement", ["root"]);
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    id
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`]
  };
  return composeClasses(slots, getBarElementUtilityClass, classes);
};
const BarElementPath = styled(animated.rect, {
  name: "MuiBarElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  stroke: "none",
  fill: ownerState.isHighlighted ? color(ownerState.color).brighter(0.5).formatHex() : ownerState.color,
  transition: "opacity 0.2s ease-in, fill 0.2s ease-in",
  opacity: ownerState.isFaded && 0.3 || 1
}));
function BarElement(props) {
  const {
    id,
    dataIndex,
    classes: innerClasses,
    color,
    slots,
    slotProps,
    style,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id,
    dataIndex
  });
  const ownerState = {
    id,
    dataIndex,
    classes: innerClasses,
    color,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses$1(ownerState);
  const Bar = slots?.bar ?? BarElementPath;
  const barProps = useSlotProps({
    elementType: Bar,
    externalSlotProps: slotProps?.bar,
    externalForwardedProps: other,
    additionalProps: _extends({}, getInteractionItemProps({
      type: "bar",
      seriesId: id,
      dataIndex
    }), {
      style,
      onClick,
      cursor: onClick ? "pointer" : "unset"
    }),
    className: classes.root,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, _extends({}, barProps));
}

/**
 * Returns if the corner should have a radius or not based on the layout and the data.
 * @param {GetRadiusCorner} corner The corner to check.
 * @param {GetRadiusData} cornerData The data for the corner.
 * @returns {number} The radius for the corner.
 */
const getRadius = (corner, {
  hasNegative,
  hasPositive,
  borderRadius,
  layout
}) => {
  if (!borderRadius) {
    return 0;
  }
  const isVertical = layout === 'vertical';
  if (corner === 'top-left' && (isVertical && hasPositive || !isVertical && hasNegative)) {
    return borderRadius;
  }
  if (corner === 'top-right' && (isVertical && hasPositive || !isVertical && hasPositive)) {
    return borderRadius;
  }
  if (corner === 'bottom-right' && (isVertical && hasNegative || !isVertical && hasPositive)) {
    return borderRadius;
  }
  if (corner === 'bottom-left' && (isVertical && hasNegative || !isVertical && hasNegative)) {
    return borderRadius;
  }
  return 0;
};

const _excluded$5 = ["style", "maskId"];
await importShared('react');
const buildInset = corners => `inset(0px round ${corners.topLeft}px ${corners.topRight}px ${corners.bottomRight}px ${corners.bottomLeft}px)`;
function BarClipRect(props) {
  const radiusData = props.ownerState;
  return /*#__PURE__*/jsxRuntimeExports.jsx(animated.rect, {
    style: _extends({}, props.style, {
      clipPath: (props.ownerState.layout === 'vertical' ? props.style?.height : props.style?.width).to(value => buildInset({
        topLeft: Math.min(value, getRadius('top-left', radiusData)),
        topRight: Math.min(value, getRadius('top-right', radiusData)),
        bottomRight: Math.min(value, getRadius('bottom-right', radiusData)),
        bottomLeft: Math.min(value, getRadius('bottom-left', radiusData))
      }))
    })
  });
}
/**
 * @ignore - internal component.
 */
function BarClipPath(props) {
  const {
      style,
      maskId
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded$5);
  if (!props.borderRadius || props.borderRadius <= 0) {
    return null;
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx("clipPath", {
    id: maskId,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(BarClipRect, {
      ownerState: rest,
      style: style
    })
  });
}

function getBarLabelUtilityClass(slot) {
  return generateUtilityClass('MuiBarLabel', slot);
}
const barLabelClasses = generateUtilityClasses('MuiBarLabel', ['root', 'highlighted', 'faded']);
const useUtilityClasses = ownerState => {
  const {
    classes,
    seriesId,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ['root', `series-${seriesId}`, isHighlighted && 'highlighted', isFaded && 'faded']
  };
  return composeClasses(slots, getBarLabelUtilityClass, classes);
};

const getBarLabel = options => {
  const {
    barLabel,
    value,
    dataIndex,
    seriesId,
    height,
    width
  } = options;
  if (barLabel === 'value') {
    // We don't want to show the label if the value is 0
    return value ? value?.toString() : null;
  }
  return barLabel({
    seriesId,
    dataIndex,
    value
  }, {
    bar: {
      height,
      width
    }
  });
};

const _excluded$4 = ["seriesId", "dataIndex", "color", "isFaded", "isHighlighted", "classes"];
await importShared('react');
const BarLabelComponent = styled(animated.text, {
  name: "MuiBarLabel",
  slot: "Root",
  overridesResolver: (_, styles) => [{
    [`&.${barLabelClasses.faded}`]: styles.faded
  }, {
    [`&.${barLabelClasses.highlighted}`]: styles.highlighted
  }, styles.root]
})(({
  theme
}) => _extends({}, theme?.typography?.body2, {
  stroke: "none",
  fill: (theme.vars || theme)?.palette?.text?.primary,
  transition: "opacity 0.2s ease-in, fill 0.2s ease-in",
  textAnchor: "middle",
  dominantBaseline: "central",
  pointerEvents: "none",
  opacity: 1,
  [`&.${barLabelClasses.faded}`]: {
    opacity: 0.3
  }
}));
function BarLabel(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiBarLabel"
  });
  const otherProps = _objectWithoutPropertiesLoose(props, _excluded$4);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BarLabelComponent, _extends({}, otherProps));
}

const _excluded$3 = ["seriesId", "classes", "color", "style", "dataIndex", "barLabel", "slots", "slotProps", "height", "width", "value"], _excluded2 = ["ownerState"];
await importShared('react');
function BarLabelItem(props) {
  const {
    seriesId,
    classes: innerClasses,
    color,
    style,
    dataIndex,
    barLabel,
    slots,
    slotProps,
    height,
    width,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId,
    dataIndex
  });
  const ownerState = {
    seriesId,
    classes: innerClasses,
    color,
    isFaded,
    isHighlighted,
    dataIndex
  };
  const classes = useUtilityClasses(ownerState);
  const Component = slots?.barLabel ?? BarLabel;
  const _useSlotProps = useSlotProps({
    elementType: Component,
    externalSlotProps: slotProps?.barLabel,
    additionalProps: _extends({}, other, {
      style,
      className: classes.root
    }),
    ownerState
  }), {
    ownerState: barLabelOwnerState
  } = _useSlotProps, barLabelProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2);
  if (!barLabel) {
    return null;
  }
  const formattedLabelText = getBarLabel({
    barLabel,
    value,
    dataIndex,
    seriesId,
    height,
    width
  });
  if (!formattedLabelText) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, _extends({}, barLabelProps, barLabelOwnerState, {
    children: formattedLabelText
  }));
}

const _excluded$2 = ["bars", "skipAnimation"];
const React$2 = await importShared('react');
const leaveStyle$1 = ({
  layout,
  yOrigin,
  x,
  width,
  y,
  xOrigin,
  height
}) => _extends({}, layout === 'vertical' ? {
  y: yOrigin,
  x: x + width / 2,
  height: 0,
  width
} : {
  y: y + height / 2,
  x: xOrigin,
  height,
  width: 0
});
const enterStyle$1 = ({
  x,
  width,
  y,
  height
}) => ({
  x: x + width / 2,
  y: y + height / 2,
  height,
  width
});
/**
 * @ignore - internal component.
 */
function BarLabelPlot(props) {
  const {
      bars,
      skipAnimation
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const barLabelTransition = useTransition(bars, {
    keys: bar => `${bar.seriesId}-${bar.dataIndex}`,
    from: leaveStyle$1,
    leave: null,
    enter: enterStyle$1,
    update: enterStyle$1,
    immediate: skipAnimation
  });
  return /*#__PURE__*/jsxRuntimeExports.jsx(React$2.Fragment, {
    children: barLabelTransition((style, {
      seriesId,
      dataIndex,
      color,
      value,
      width,
      height
    }) => /*#__PURE__*/jsxRuntimeExports.jsx(BarLabelItem, _extends({
      seriesId: seriesId,
      dataIndex: dataIndex,
      value: value,
      color: color,
      width: width,
      height: height
    }, other, {
      style: style
    })))
  });
}

const getAxisMessage = (axisDirection, axisId) => {
  const axisName = `${axisDirection}-axis`;
  const axisIdName = `${axisDirection}Axis`;
  const axisDefaultKey = axisDirection === 'x' ? DEFAULT_X_AXIS_KEY : DEFAULT_Y_AXIS_KEY;
  return axisId === axisDefaultKey ? `The first \`${axisIdName}\`` : `The ${axisName} with id "${axisId}"`;
};
function checkScaleErrors(verticalLayout, seriesId, xAxisId, xAxis, yAxisId, yAxis) {
  const xAxisConfig = xAxis[xAxisId];
  const yAxisConfig = yAxis[yAxisId];
  const discreteAxisConfig = verticalLayout ? xAxisConfig : yAxisConfig;
  const continuousAxisConfig = verticalLayout ? yAxisConfig : xAxisConfig;
  const discreteAxisId = verticalLayout ? xAxisId : yAxisId;
  const continuousAxisId = verticalLayout ? yAxisId : xAxisId;
  const discreteAxisDirection = verticalLayout ? 'x' : 'y';
  const continuousAxisDirection = verticalLayout ? 'y' : 'x';
  if (!isBandScaleConfig(discreteAxisConfig)) {
    throw new Error(`MUI X: ${getAxisMessage(discreteAxisDirection, discreteAxisId)} should be of type "band" to display the bar series of id "${seriesId}".`);
  }
  if (discreteAxisConfig.data === undefined) {
    throw new Error(`MUI X: ${getAxisMessage(discreteAxisDirection, discreteAxisId)} should have data property.`);
  }
  if (isBandScaleConfig(continuousAxisConfig) || isPointScaleConfig(continuousAxisConfig)) {
    throw new Error(`MUI X: ${getAxisMessage(continuousAxisDirection, continuousAxisId)} should be a continuous type to display the bar series of id "${seriesId}".`);
  }
}

const _excluded$1 = ["skipAnimation", "onItemClick", "borderRadius", "barLabel"];
const React$1 = await importShared('react');
function getBandSize({
  bandWidth: W,
  numberOfGroups: N,
  gapRatio: r
}) {
  if (r === 0) {
    return {
      barWidth: W / N,
      offset: 0
    };
  }
  const barWidth = W / (N + (N - 1) * r);
  const offset = r * barWidth;
  return {
    barWidth,
    offset
  };
}
const useAggregatedData = () => {
  const seriesData = useBarSeries() ?? {
    series: {},
    stackingGroups: []};
  const axisData = useCartesianContext();
  const chartId = useChartId();
  const {
    series,
    stackingGroups
  } = seriesData;
  const {
    xAxis,
    yAxis,
    xAxisIds,
    yAxisIds
  } = axisData;
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  const masks = {};
  const data = stackingGroups.flatMap(({
    ids: groupIds
  }, groupIndex) => {
    return groupIds.flatMap((seriesId) => {
      const xAxisId = series[seriesId].xAxisId ?? series[seriesId].xAxisKey ?? defaultXAxisId;
      const yAxisId = series[seriesId].yAxisId ?? series[seriesId].yAxisKey ?? defaultYAxisId;
      const xAxisConfig = xAxis[xAxisId];
      const yAxisConfig = yAxis[yAxisId];
      const verticalLayout = series[seriesId].layout === "vertical";
      checkScaleErrors(verticalLayout, seriesId, xAxisId, xAxis, yAxisId, yAxis);
      const baseScaleConfig = verticalLayout ? xAxisConfig : yAxisConfig;
      const xScale = xAxisConfig.scale;
      const yScale = yAxisConfig.scale;
      const colorGetter = getColor(series[seriesId], xAxis[xAxisId], yAxis[yAxisId]);
      const bandWidth = baseScaleConfig.scale.bandwidth();
      const {
        barWidth,
        offset
      } = getBandSize({
        bandWidth,
        numberOfGroups: stackingGroups.length,
        gapRatio: baseScaleConfig.barGapRatio
      });
      const barOffset = groupIndex * (barWidth + offset);
      const {
        stackedData
      } = series[seriesId];
      return stackedData.map((values, dataIndex) => {
        const valueCoordinates = values.map((v) => verticalLayout ? yScale(v) : xScale(v));
        const minValueCoord = Math.round(Math.min(...valueCoordinates));
        const maxValueCoord = Math.round(Math.max(...valueCoordinates));
        const stackId = series[seriesId].stack;
        const result = {
          seriesId,
          dataIndex,
          layout: series[seriesId].layout,
          x: verticalLayout ? xScale(xAxis[xAxisId].data?.[dataIndex]) + barOffset : minValueCoord,
          y: verticalLayout ? minValueCoord : yScale(yAxis[yAxisId].data?.[dataIndex]) + barOffset,
          xOrigin: xScale(0),
          yOrigin: yScale(0),
          height: verticalLayout ? maxValueCoord - minValueCoord : barWidth,
          width: verticalLayout ? barWidth : maxValueCoord - minValueCoord,
          color: colorGetter(dataIndex),
          value: series[seriesId].data[dataIndex],
          maskId: `${chartId}_${stackId || seriesId}_${groupIndex}_${dataIndex}`
        };
        if (!masks[result.maskId]) {
          masks[result.maskId] = {
            id: result.maskId,
            width: 0,
            height: 0,
            hasNegative: false,
            hasPositive: false,
            layout: result.layout,
            xOrigin: xScale(0),
            yOrigin: yScale(0),
            x: 0,
            y: 0
          };
        }
        const mask = masks[result.maskId];
        mask.width = result.layout === "vertical" ? result.width : mask.width + result.width;
        mask.height = result.layout === "vertical" ? mask.height + result.height : result.height;
        mask.x = Math.min(mask.x === 0 ? Infinity : mask.x, result.x);
        mask.y = Math.min(mask.y === 0 ? Infinity : mask.y, result.y);
        mask.hasNegative = mask.hasNegative || (result.value ?? 0) < 0;
        mask.hasPositive = mask.hasPositive || (result.value ?? 0) > 0;
        return result;
      });
    });
  });
  return {
    completedData: data,
    masksData: Object.values(masks)
  };
};
const leaveStyle = ({
  layout,
  yOrigin,
  x,
  width,
  y,
  xOrigin,
  height
}) => _extends({}, layout === "vertical" ? {
  y: yOrigin,
  x,
  height: 0,
  width
} : {
  y,
  x: xOrigin,
  height,
  width: 0
});
const enterStyle = ({
  x,
  width,
  y,
  height
}) => ({
  y,
  x,
  height,
  width
});
function BarPlot(props) {
  const {
    completedData,
    masksData
  } = useAggregatedData();
  const {
    skipAnimation: inSkipAnimation,
    onItemClick,
    borderRadius,
    barLabel
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const skipAnimation = useSkipAnimation(inSkipAnimation);
  const withoutBorderRadius = !borderRadius || borderRadius <= 0;
  const transition = useTransition(completedData, {
    keys: (bar) => `${bar.seriesId}-${bar.dataIndex}`,
    from: leaveStyle,
    leave: leaveStyle,
    enter: enterStyle,
    update: enterStyle,
    immediate: skipAnimation
  });
  const maskTransition = useTransition(withoutBorderRadius ? [] : masksData, {
    keys: (v) => v.id,
    from: leaveStyle,
    leave: leaveStyle,
    enter: enterStyle,
    update: enterStyle,
    immediate: skipAnimation
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$1.Fragment, {
    children: [!withoutBorderRadius && maskTransition((style, {
      id,
      hasPositive,
      hasNegative,
      layout
    }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BarClipPath, {
        maskId: id,
        borderRadius,
        hasNegative,
        hasPositive,
        layout,
        style
      });
    }), transition((style, {
      seriesId,
      dataIndex,
      color,
      maskId
    }) => {
      const barElement = /* @__PURE__ */ jsxRuntimeExports.jsx(BarElement, _extends({
        id: seriesId,
        dataIndex,
        color
      }, other, {
        onClick: onItemClick && ((event) => {
          onItemClick(event, {
            type: "bar",
            seriesId,
            dataIndex
          });
        }),
        style
      }));
      if (withoutBorderRadius) {
        return barElement;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("g", {
        clipPath: `url(#${maskId})`,
        children: barElement
      });
    }), barLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(BarLabelPlot, _extends({
      bars: completedData,
      skipAnimation,
      barLabel
    }, other))]
  });
}

const _excluded = ["xAxis", "yAxis", "series", "width", "height", "margin", "colors", "dataset", "sx", "tooltip", "onAxisClick", "axisHighlight", "legend", "grid", "topAxis", "leftAxis", "rightAxis", "bottomAxis", "children", "slots", "slotProps", "skipAnimation", "loading", "layout", "onItemClick", "highlightedItem", "onHighlightChange", "borderRadius", "barLabel", "className"];
/**
 * A helper function that extracts BarChartProps from the input props
 * and returns an object with props for the children components of BarChart.
 *
 * @param props The input props for BarChart
 * @returns An object with props for the children components of BarChart
 */
const useBarChartProps = props => {
  const {
      xAxis,
      yAxis,
      series,
      width,
      height,
      margin,
      colors,
      dataset,
      sx,
      tooltip,
      onAxisClick,
      axisHighlight,
      legend,
      grid,
      topAxis,
      leftAxis,
      rightAxis,
      bottomAxis,
      children,
      slots,
      slotProps,
      skipAnimation,
      loading,
      layout,
      onItemClick,
      highlightedItem,
      onHighlightChange,
      borderRadius,
      barLabel,
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  const id = useId();
  const clipPathId = `${id}-clip-path`;
  const hasHorizontalSeries = layout === 'horizontal' || layout === undefined && series.some(item => item.layout === 'horizontal');
  const defaultAxisConfig = {
    scaleType: 'band',
    data: Array.from({
      length: Math.max(...series.map(s => (s.data ?? dataset ?? []).length))
    }, (_, index) => index)
  };
  const chartContainerProps = _extends({}, rest, {
    series: series.map(s => _extends({
      type: 'bar'
    }, s, {
      layout: hasHorizontalSeries ? 'horizontal' : 'vertical'
    })),
    width,
    height,
    margin,
    colors,
    dataset,
    xAxis: xAxis ?? (hasHorizontalSeries ? undefined : [_extends({
      id: DEFAULT_X_AXIS_KEY
    }, defaultAxisConfig)]),
    yAxis: yAxis ?? (hasHorizontalSeries ? [_extends({
      id: DEFAULT_Y_AXIS_KEY
    }, defaultAxisConfig)] : undefined),
    sx,
    highlightedItem,
    onHighlightChange,
    disableAxisListener: tooltip?.trigger !== 'axis' && axisHighlight?.x === 'none' && axisHighlight?.y === 'none' && !onAxisClick,
    className,
    skipAnimation
  });
  const barPlotProps = {
    onItemClick,
    slots,
    slotProps,
    borderRadius,
    barLabel
  };
  const axisClickHandlerProps = {
    onAxisClick
  };
  const gridProps = {
    vertical: grid?.vertical,
    horizontal: grid?.horizontal
  };
  const clipPathGroupProps = {
    clipPath: `url(#${clipPathId})`
  };
  const clipPathProps = {
    id: clipPathId
  };
  const overlayProps = {
    slots,
    slotProps,
    loading
  };
  const chartsAxisProps = {
    topAxis,
    leftAxis,
    rightAxis,
    bottomAxis,
    slots,
    slotProps
  };
  const axisHighlightProps = _extends({}, hasHorizontalSeries ? {
    y: 'band'
  } : {
    x: 'band'
  }, axisHighlight);
  const legendProps = _extends({}, legend, {
    slots,
    slotProps
  });
  const tooltipProps = _extends({}, tooltip, {
    slots,
    slotProps
  });
  return {
    chartContainerProps,
    barPlotProps,
    axisClickHandlerProps,
    gridProps,
    clipPathProps,
    clipPathGroupProps,
    overlayProps,
    chartsAxisProps,
    axisHighlightProps,
    legendProps,
    tooltipProps,
    children
  };
};

const React = await importShared('react');
const BarChart = /* @__PURE__ */ React.forwardRef(function BarChart2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiBarChart"
  });
  const {
    chartContainerProps,
    barPlotProps,
    axisClickHandlerProps,
    gridProps,
    clipPathProps,
    clipPathGroupProps,
    overlayProps,
    chartsAxisProps,
    axisHighlightProps,
    legendProps,
    tooltipProps,
    children
  } = useBarChartProps(props);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ResponsiveChartContainer, _extends({
    ref
  }, chartContainerProps, {
    children: [props.onAxisClick && /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsOnAxisClickHandler, _extends({}, axisClickHandlerProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsGrid, _extends({}, gridProps)), /* @__PURE__ */ jsxRuntimeExports.jsxs("g", _extends({}, clipPathGroupProps, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(BarPlot, _extends({}, barPlotProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsOverlay, _extends({}, overlayProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsAxisHighlight, _extends({}, axisHighlightProps))]
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsAxis, _extends({}, chartsAxisProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsLegend, _extends({}, legendProps)), !props.loading && /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsTooltip, _extends({}, tooltipProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsClipPath, _extends({}, clipPathProps)), children]
  }));
});

const {useState,useEffect} = await importShared('react');

const {useSelector} = await importShared('react-redux');
const UserBarChart = () => {
  const theme = useTheme();
  const [cities, setCities] = useState([]);
  const [counts, setCounts] = useState([]);
  const [totalRecordCounts, setTotalRecordCounts] = useState(0);
  const currentTheme = useSelector((state) => state.layout.theme) || "light";
  const colorPalette = currentTheme === "dark" ? [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark
  ] : [
    theme.palette.primary.dark,
    theme.palette.primary.main,
    theme.palette.primary.light
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { rows } = await getUsersInfo();
        setTotalRecordCounts(rows.length);
        const chartRecords = rows.slice(0, 50);
        const cityCounts = {};
        chartRecords.forEach((user) => {
          if (user.city) {
            cityCounts[user.city] = (cityCounts[user.city] || 0) + 1;
          }
        });
        const cityNames = Object.keys(cityCounts);
        const dataCounts = cityNames.map((city) => cityCounts[city]);
        setCities(cityNames);
        setCounts(dataCounts);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { variant: "outlined", sx: { width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { component: "h2", variant: "subtitle2", gutterBottom: true, children: "Users by city" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          direction: "row",
          sx: {
            alignContent: { xs: "center", sm: "flex-start" },
            alignItems: "center",
            gap: 1
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", component: "p", children: totalRecordCounts }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", color: "error", label: "-8%" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: "Users are located different cities" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BarChart,
      {
        borderRadius: 8,
        colors: colorPalette,
        xAxis: [
          {
            scaleType: "band",
            categoryGapRatio: 0.5,
            data: cities
          }
        ],
        series: [
          {
            id: "city-stats",
            label: "Users count",
            data: counts,
            stack: "A"
          }
        ],
        height: 400,
        margin: { left: 50, right: 0, top: 20, bottom: 20 },
        grid: { horizontal: true },
        slotProps: {
          legend: {
            hidden: true
          }
        }
      }
    )
  ] }) });
};

export { UserBarChart as default };
