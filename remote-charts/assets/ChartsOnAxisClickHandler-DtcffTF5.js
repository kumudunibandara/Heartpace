import { importShared } from './__federation_fn_import-XIeCvASR.js';
import { J as DrawingContext, K as useHighlighted, z as useDrawingArea, L as useTicks, h as useCartesianContext, M as useSvgRef, N as useSeries, I as InteractionContext } from './UserService-vMN2TBSP.js';
import { _ as _extends } from './emotion-use-insertion-effect-with-fallbacks.browser.esm-DGfdAQTs.js';
import { j as jsxRuntimeExports, x as generateUtilityClasses, g as generateUtilityClass, A as styled, d as composeClasses } from './memoTheme-DSZyGnlJ.js';
import { z as useThemeProps, _ as _objectWithoutPropertiesLoose } from './Typography-HTjTafHw.js';

const React$3 = await importShared('react');
function useChartId() {
  const {
    chartId
  } = React$3.useContext(DrawingContext);
  return React$3.useMemo(() => chartId, [chartId]);
}

/**
 * A hook to check the highlighted state of the item.
 * This function already calculates that an item is not faded if it is highlighted.
 *
 * If you need fine control over the state, use the `useHighlighted` hook instead.
 *
 * @param {HighlightItemData} item is the item to check
 * @returns {ItemHighlightedState} the state of the item
 */
function useItemHighlighted(item) {
  const highlighted = useHighlighted();
  if (!item) {
    return {
      isHighlighted: false,
      isFaded: false
    };
  }
  const isHighlighted = highlighted.isHighlighted(item);
  const isFaded = !isHighlighted && highlighted.isFaded(item);
  return {
    isHighlighted,
    isFaded
  };
}

await importShared('react');
function ChartsClipPath(props) {
  const {
    id,
    offset: offsetProps
  } = props;
  const {
    left,
    top,
    width,
    height
  } = useDrawingArea();
  const offset = _extends({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, offsetProps);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", {
    id,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", {
      x: left - offset.left,
      y: top - offset.top,
      width: width + offset.left + offset.right,
      height: height + offset.top + offset.bottom
    })
  });
}

function getChartsGridUtilityClass(slot) {
  return generateUtilityClass('MuiChartsGrid', slot);
}
const chartsGridClasses = generateUtilityClasses('MuiChartsGrid', ['root', 'line', 'horizontalLine', 'verticalLine']);

const GridRoot = styled('g', {
  name: 'MuiChartsGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => [{
    [`&.${chartsGridClasses.verticalLine}`]: styles.verticalLine
  }, {
    [`&.${chartsGridClasses.horizontalLine}`]: styles.horizontalLine
  }, styles.root]
})({});
const GridLine = styled('line', {
  name: 'MuiChartsGrid',
  slot: 'Line',
  overridesResolver: (props, styles) => styles.line
})(({
  theme
}) => ({
  stroke: (theme.vars || theme).palette.divider,
  shapeRendering: 'crispEdges',
  strokeWidth: 1
}));

const React$2 = await importShared('react');
/**
 * @ignore - internal component.
 */
function ChartsGridVertical(props) {
  const {
    axis,
    drawingArea,
    classes
  } = props;
  const {
    scale,
    tickNumber,
    tickInterval
  } = axis;
  const xTicks = useTicks({
    scale,
    tickNumber,
    tickInterval
  });
  return /*#__PURE__*/jsxRuntimeExports.jsx(React$2.Fragment, {
    children: xTicks.map(({
      value,
      offset
    }) => /*#__PURE__*/jsxRuntimeExports.jsx(GridLine, {
      y1: drawingArea.top,
      y2: drawingArea.top + drawingArea.height,
      x1: offset,
      x2: offset,
      className: classes.verticalLine
    }, `vertical-${value}`))
  });
}

const React$1 = await importShared('react');
/**
 * @ignore - internal component.
 */
function ChartsGridHorizontal(props) {
  const {
    axis,
    drawingArea,
    classes
  } = props;
  const {
    scale,
    tickNumber,
    tickInterval
  } = axis;
  const yTicks = useTicks({
    scale,
    tickNumber,
    tickInterval
  });
  return /*#__PURE__*/jsxRuntimeExports.jsx(React$1.Fragment, {
    children: yTicks.map(({
      value,
      offset
    }) => /*#__PURE__*/jsxRuntimeExports.jsx(GridLine, {
      y1: offset,
      y2: offset,
      x1: drawingArea.left,
      x2: drawingArea.left + drawingArea.width,
      className: classes.horizontalLine
    }, `horizontal-${value}`))
  });
}

const _excluded = ["vertical", "horizontal"];
await importShared('react');
const useUtilityClasses = ({
  classes
}) => {
  const slots = {
    root: ["root"],
    verticalLine: ["line", "verticalLine"],
    horizontalLine: ["line", "horizontalLine"]
  };
  return composeClasses(slots, getChartsGridUtilityClass, classes);
};
function ChartsGrid(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiChartsGrid"
  });
  const drawingArea = useDrawingArea();
  const {
    vertical,
    horizontal
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    xAxis,
    xAxisIds,
    yAxis,
    yAxisIds
  } = useCartesianContext();
  const classes = useUtilityClasses(props);
  const horizontalAxis = yAxis[yAxisIds[0]];
  const verticalAxis = xAxis[xAxisIds[0]];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GridRoot, _extends({}, other, {
    className: classes.root,
    children: [vertical && /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsGridVertical, {
      axis: verticalAxis,
      drawingArea,
      classes
    }), horizontal && /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsGridHorizontal, {
      axis: horizontalAxis,
      drawingArea,
      classes
    })]
  }));
}

const React = await importShared('react');
function ChartsOnAxisClickHandler(props) {
  const {
    onAxisClick
  } = props;
  const svgRef = useSvgRef();
  const series = useSeries();
  const {
    axis
  } = React.useContext(InteractionContext);
  const {
    xAxisIds,
    xAxis,
    yAxisIds,
    yAxis
  } = useCartesianContext();
  React.useEffect(() => {
    const element = svgRef.current;
    if (element === null || !onAxisClick) {
      return () => {
      };
    }
    const handleMouseClick = (event) => {
      event.preventDefault();
      const isXaxis = axis.x && axis.x.index !== -1;
      const USED_AXIS_ID = isXaxis ? xAxisIds[0] : yAxisIds[0];
      const dataIndex = isXaxis ? axis.x && axis.x.index : axis.y && axis.y.index;
      if (dataIndex == null) {
        return;
      }
      const seriesValues = {};
      Object.keys(series).filter((seriesType) => ["bar", "line"].includes(seriesType)).forEach((seriesType) => {
        series[seriesType]?.seriesOrder.forEach((seriesId) => {
          const seriesItem = series[seriesType].series[seriesId];
          const providedXAxisId = seriesItem.xAxisId ?? seriesItem.xAxisKey;
          const providedYAxisId = seriesItem.yAxisId ?? seriesItem.yAxisKey;
          const axisKey = isXaxis ? providedXAxisId : providedYAxisId;
          if (axisKey === void 0 || axisKey === USED_AXIS_ID) {
            seriesValues[seriesId] = seriesItem.data[dataIndex];
          }
        });
      });
      const axisValue = (isXaxis ? xAxis : yAxis)[USED_AXIS_ID].data?.[dataIndex];
      onAxisClick(event, {
        dataIndex,
        axisValue,
        seriesValues
      });
    };
    element.addEventListener("click", handleMouseClick);
    return () => {
      element.removeEventListener("click", handleMouseClick);
    };
  }, [axis.x, axis.y, onAxisClick, series, svgRef, xAxis, xAxisIds, yAxis, yAxisIds]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {});
}

export { ChartsOnAxisClickHandler as C, useChartId as a, ChartsGrid as b, ChartsClipPath as c, useItemHighlighted as u };
