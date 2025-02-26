import { importShared } from './__federation_fn_import-XIeCvASR.js';
import { j as jsxRuntimeExports, A as styled, d as composeClasses, g as generateUtilityClass, x as generateUtilityClasses } from './memoTheme-DSZyGnlJ.js';
import { O as halfPi, x as epsilon, t as tau, w as cos, v as sin, P as min, Q as abs, p as constant, r as pi, s as sqrt, S as atan2, T as asin, U as acos, V as max, u as useInteractionItemProps, G as to, a as animated, K as useHighlighted, b as useTransition, W as getLabel, X as usePieSeries, J as DrawingContext, f as useSkipAnimation, R as ResponsiveChartContainer, D as DEFAULT_X_AXIS_KEY, l as ChartsAxis, C as ChartsOverlay, m as ChartsLegend, k as ChartsAxisHighlight, n as ChartsTooltip, o as getUsersInfo } from './UserService-vMN2TBSP.js';
import { _ as _objectWithoutPropertiesLoose, z as useThemeProps, x as useRtl, d as useTheme } from './Typography-HTjTafHw.js';
import { _ as _extends } from './emotion-use-insertion-effect-with-fallbacks.browser.esm-DGfdAQTs.js';
import { w as withPath } from './path-CJ0Arqcy.js';

function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < epsilon) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

function d3Arc() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = constant(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null,
      path = withPath(arc);

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - halfPi,
        a1 = endAngle.apply(this, arguments) - halfPi,
        da = abs(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = path();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > epsilon)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > tau - epsilon) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > epsilon) && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)),
          rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > epsilon) {
        var p0 = asin(rp / r0 * sin(ap)),
            p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * cos(a01),
          y01 = r1 * sin(a01),
          x10 = r0 * cos(a10),
          y10 = r0 * sin(a10);

      // Apply rounded corners?
      if (rc > epsilon) {
        var x11 = r1 * cos(a11),
            y11 = r1 * sin(a11),
            x00 = r0 * cos(a00),
            y00 = r0 * sin(a00),
            oc;

        // Restrict the corner radius according to the sector angle. If this
        // intersection fails, it’s probably because the arc is too small, so
        // disable the corner radius entirely.
        if (da < pi) {
          if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
            var ax = x01 - oc[0],
                ay = y01 - oc[1],
                bx = x11 - oc[0],
                by = y11 - oc[1],
                kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2),
                lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min(rc, (r0 - lc) / (kc - 1));
            rc1 = min(rc, (r1 - lc) / (kc + 1));
          } else {
            rc0 = rc1 = 0;
          }
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > epsilon)) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > epsilon) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > epsilon) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
    return [cos(a) * r, sin(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
}

/**
 * Helper that converts values and percentages into values.
 * @param value The value provided by the developer. Can either be a number or a string with '%' or 'px'.
 * @param refValue The numerical value associated to 100%.
 * @returns The numerical value associated to the provided value.
 */
function getPercentageValue(value, refValue) {
  if (typeof value === 'number') {
    return value;
  }
  if (value === '100%') {
    // Avoid potential rounding issues
    return refValue;
  }
  if (value.endsWith('%')) {
    const percentage = Number.parseFloat(value.slice(0, value.length - 1));
    if (!Number.isNaN(percentage)) {
      return percentage * refValue / 100;
    }
  }
  if (value.endsWith('px')) {
    const val = Number.parseFloat(value.slice(0, value.length - 2));
    if (!Number.isNaN(val)) {
      return val;
    }
  }
  throw new Error(`MUI X: Received an unknown value "${value}". It should be a number, or a string with a percentage value.`);
}

const _excluded$4 = ["classes", "color", "cornerRadius", "dataIndex", "endAngle", "id", "innerRadius", "isFaded", "isHighlighted", "onClick", "outerRadius", "paddingAngle", "startAngle", "highlightScope"];
await importShared('react');
function getPieArcUtilityClass(slot) {
  return generateUtilityClass("MuiPieArc", slot);
}
generateUtilityClasses("MuiPieArc", ["root", "highlighted", "faded"]);
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted,
    dataIndex
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, `data-index-${dataIndex}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getPieArcUtilityClass, classes);
};
const PieArcRoot = styled(animated.path, {
  name: "MuiPieArc",
  slot: "Root",
  overridesResolver: (_, styles) => styles.arc
})(({
  theme
}) => ({
  // Got to move stroke to an element prop instead of style.
  stroke: (theme.vars || theme).palette.background.paper,
  transition: "opacity 0.2s ease-in, fill 0.2s ease-in, filter 0.2s ease-in"
}));
function PieArc(props) {
  const {
    classes: innerClasses,
    color,
    cornerRadius,
    dataIndex,
    endAngle,
    id,
    innerRadius,
    isFaded,
    isHighlighted,
    onClick,
    outerRadius,
    paddingAngle,
    startAngle
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const ownerState = {
    id,
    dataIndex,
    classes: innerClasses,
    color,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses$1(ownerState);
  const getInteractionItemProps = useInteractionItemProps();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PieArcRoot, _extends({
    d: to([startAngle, endAngle, paddingAngle, innerRadius, outerRadius, cornerRadius], (sA, eA, pA, iR, oR, cR) => d3Arc().cornerRadius(cR)({
      padAngle: pA,
      startAngle: sA,
      endAngle: eA,
      innerRadius: iR,
      outerRadius: oR
    })),
    visibility: to([startAngle, endAngle], (sA, eA) => sA === eA ? "hidden" : "visible"),
    onClick,
    cursor: onClick ? "pointer" : "unset",
    ownerState,
    className: classes.root,
    fill: ownerState.color,
    opacity: ownerState.isFaded ? 0.3 : 1,
    filter: ownerState.isHighlighted ? "brightness(120%)" : "none",
    strokeWidth: 1,
    strokeLinejoin: "round"
  }, other, getInteractionItemProps({
    type: "pie",
    seriesId: id,
    dataIndex
  })));
}

const defaultTransitionConfig = {
  keys: item => item.id,
  from: ({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle,
    color,
    isFaded
  }) => ({
    innerRadius,
    outerRadius: (innerRadius + outerRadius) / 2,
    cornerRadius,
    startAngle: (startAngle + endAngle) / 2,
    endAngle: (startAngle + endAngle) / 2,
    paddingAngle,
    fill: color,
    opacity: isFaded ? 0.3 : 1
  }),
  leave: ({
    innerRadius,
    startAngle,
    endAngle
  }) => ({
    innerRadius,
    outerRadius: innerRadius,
    startAngle: (startAngle + endAngle) / 2,
    endAngle: (startAngle + endAngle) / 2
  }),
  enter: ({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle
  }) => ({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle
  }),
  update: ({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle,
    color,
    isFaded
  }) => ({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle,
    fill: color,
    opacity: isFaded ? 0.3 : 1
  }),
  config: {
    tension: 120,
    friction: 14,
    clamp: true
  }
};
const defaultLabelTransitionConfig = {
  keys: item => item.id,
  from: ({
    innerRadius,
    outerRadius,
    arcLabelRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle
  }) => ({
    innerRadius,
    outerRadius: (innerRadius + outerRadius) / 2,
    cornerRadius,
    arcLabelRadius,
    startAngle: (startAngle + endAngle) / 2,
    endAngle: (startAngle + endAngle) / 2,
    paddingAngle,
    opacity: 0
  }),
  leave: ({
    innerRadius,
    startAngle,
    endAngle
  }) => ({
    innerRadius,
    outerRadius: innerRadius,
    arcLabelRadius: innerRadius,
    startAngle: (startAngle + endAngle) / 2,
    endAngle: (startAngle + endAngle) / 2,
    opacity: 0
  }),
  enter: ({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    arcLabelRadius
  }) => ({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    arcLabelRadius,
    opacity: 1
  }),
  update: ({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle,
    arcLabelRadius
  }) => ({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle,
    arcLabelRadius,
    opacity: 1
  }),
  config: {
    tension: 120,
    friction: 14,
    clamp: true
  }
};

const React$3 = await importShared('react');
function useTransformData(series) {
  const {
    id: seriesId,
    data,
    faded,
    highlighted,
    paddingAngle: basePaddingAngle = 0,
    innerRadius: baseInnerRadius = 0,
    arcLabelRadius: baseArcLabelRadius,
    outerRadius: baseOuterRadius,
    cornerRadius: baseCornerRadius = 0
  } = series;
  const {
    isFaded: isItemFaded,
    isHighlighted: isItemHighlighted
  } = useHighlighted();
  const dataWithHighlight = React$3.useMemo(() => data.map((item, itemIndex) => {
    const currentItem = {
      seriesId,
      dataIndex: itemIndex
    };
    const isHighlighted = isItemHighlighted(currentItem);
    const isFaded = !isHighlighted && isItemFaded(currentItem);
    const attributesOverride = _extends({
      additionalRadius: 0
    }, isFaded && faded || isHighlighted && highlighted || {});
    const paddingAngle = Math.max(0, Math.PI * (attributesOverride.paddingAngle ?? basePaddingAngle) / 180);
    const innerRadius = Math.max(0, attributesOverride.innerRadius ?? baseInnerRadius);
    const outerRadius = Math.max(0, attributesOverride.outerRadius ?? baseOuterRadius + attributesOverride.additionalRadius);
    const cornerRadius = attributesOverride.cornerRadius ?? baseCornerRadius;
    const arcLabelRadius = attributesOverride.arcLabelRadius ?? baseArcLabelRadius ?? (innerRadius + outerRadius) / 2;
    return _extends({}, item, attributesOverride, {
      isFaded,
      isHighlighted,
      paddingAngle,
      innerRadius,
      outerRadius,
      cornerRadius,
      arcLabelRadius
    });
  }), [baseCornerRadius, baseInnerRadius, baseOuterRadius, basePaddingAngle, baseArcLabelRadius, data, faded, highlighted, isItemFaded, isItemHighlighted, seriesId]);
  return dataWithHighlight;
}

const _excluded$3 = ["slots", "slotProps", "innerRadius", "outerRadius", "cornerRadius", "paddingAngle", "id", "highlighted", "faded", "data", "onItemClick", "skipAnimation"];
await importShared('react');
function PieArcPlot(props) {
  const {
    slots,
    slotProps,
    innerRadius = 0,
    outerRadius,
    cornerRadius = 0,
    paddingAngle = 0,
    id,
    highlighted,
    faded = {
      additionalRadius: -5
    },
    data,
    onItemClick,
    skipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const transformedData = useTransformData({
    innerRadius,
    outerRadius,
    cornerRadius,
    paddingAngle,
    id,
    highlighted,
    faded,
    data
  });
  const transition = useTransition(transformedData, _extends({}, defaultTransitionConfig, {
    immediate: skipAnimation
  }));
  const {
    highlightScope
  } = useHighlighted();
  if (data.length === 0) {
    return null;
  }
  const Arc = slots?.pieArc ?? PieArc;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("g", _extends({}, other, {
    children: transition(({
      startAngle,
      endAngle,
      paddingAngle: pA,
      innerRadius: iR,
      outerRadius: oR,
      cornerRadius: cR
    }, item, _, index) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Arc, _extends({
        startAngle,
        endAngle,
        paddingAngle: pA,
        innerRadius: iR,
        outerRadius: oR,
        cornerRadius: cR,
        id,
        color: item.color,
        dataIndex: index,
        highlightScope,
        isFaded: item.isFaded,
        isHighlighted: item.isHighlighted,
        onClick: onItemClick && ((event) => {
          onItemClick(event, {
            type: "pie",
            seriesId: id,
            dataIndex: index
          }, item);
        })
      }, slotProps?.pieArc));
    })
  }));
}

const _excluded$2 = ["id", "classes", "color", "startAngle", "endAngle", "paddingAngle", "arcLabelRadius", "innerRadius", "outerRadius", "cornerRadius", "formattedArcLabel", "isHighlighted", "isFaded", "style"];
await importShared('react');
function getPieArcLabelUtilityClass(slot) {
  return generateUtilityClass("MuiPieArcLabel", slot);
}
generateUtilityClasses("MuiPieArcLabel", ["root", "highlighted", "faded"]);
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getPieArcLabelUtilityClass, classes);
};
const PieArcLabelRoot = styled(animated.text, {
  name: "MuiPieArcLabel",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "middle",
  pointerEvents: "none"
}));
const getLabelPosition = (formattedArcLabel, variable) => (startAngle, endAngle, padAngle, arcLabelRadius, cornerRadius) => {
  if (!formattedArcLabel) {
    return 0;
  }
  const [x, y] = d3Arc().cornerRadius(cornerRadius).centroid({
    padAngle,
    startAngle,
    endAngle,
    innerRadius: arcLabelRadius,
    outerRadius: arcLabelRadius
  });
  if (variable === "x") {
    return x;
  }
  return y;
};
function PieArcLabel(props) {
  const {
    id,
    classes: innerClasses,
    color,
    startAngle,
    endAngle,
    paddingAngle,
    arcLabelRadius,
    cornerRadius,
    formattedArcLabel,
    isHighlighted,
    isFaded,
    style
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const ownerState = {
    id,
    classes: innerClasses,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses(ownerState);
  return (
    // @ts-expect-error
    /* @__PURE__ */ jsxRuntimeExports.jsx(PieArcLabelRoot, _extends({
      className: classes.root
    }, other, {
      style: _extends({
        x: to([startAngle, endAngle, paddingAngle, arcLabelRadius, cornerRadius], getLabelPosition(formattedArcLabel, "x")),
        y: to([startAngle, endAngle, paddingAngle, arcLabelRadius, cornerRadius], getLabelPosition(formattedArcLabel, "y"))
      }, style),
      children: formattedArcLabel
    }))
  );
}

const _excluded$1 = ["arcLabel", "arcLabelMinAngle", "arcLabelRadius", "cornerRadius", "data", "faded", "highlighted", "id", "innerRadius", "outerRadius", "paddingAngle", "skipAnimation", "slotProps", "slots"], _excluded2 = ["startAngle", "endAngle", "paddingAngle", "innerRadius", "outerRadius", "arcLabelRadius", "cornerRadius"];
await importShared('react');
const RATIO = 180 / Math.PI;
function getItemLabel(arcLabel, arcLabelMinAngle, item) {
  if (!arcLabel) {
    return null;
  }
  const angle = (item.endAngle - item.startAngle) * RATIO;
  if (angle < arcLabelMinAngle) {
    return null;
  }
  switch (arcLabel) {
    case "label":
      return getLabel(item.label, "arc");
    case "value":
      return item.value?.toString();
    case "formattedValue":
      return item.formattedValue;
    default:
      return arcLabel(_extends({}, item, {
        label: getLabel(item.label, "arc")
      }));
  }
}
function PieArcLabelPlot(props) {
  const {
    arcLabel,
    arcLabelMinAngle = 0,
    arcLabelRadius,
    cornerRadius = 0,
    data,
    faded = {
      additionalRadius: -5
    },
    highlighted,
    id,
    innerRadius,
    outerRadius,
    paddingAngle = 0,
    skipAnimation,
    slotProps,
    slots
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const transformedData = useTransformData({
    innerRadius,
    outerRadius,
    arcLabelRadius,
    cornerRadius,
    paddingAngle,
    id,
    highlighted,
    faded,
    data
  });
  const transition = useTransition(transformedData, _extends({}, defaultLabelTransitionConfig, {
    immediate: skipAnimation
  }));
  if (data.length === 0) {
    return null;
  }
  const ArcLabel = slots?.pieArcLabel ?? PieArcLabel;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("g", _extends({}, other, {
    children: transition((_ref, item) => {
      let {
        startAngle,
        endAngle,
        paddingAngle: pA,
        innerRadius: iR,
        outerRadius: oR,
        arcLabelRadius: aLR,
        cornerRadius: cR
      } = _ref, style = _objectWithoutPropertiesLoose(_ref, _excluded2);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ArcLabel, _extends({
        startAngle,
        endAngle,
        paddingAngle: pA,
        innerRadius: iR,
        outerRadius: oR,
        arcLabelRadius: aLR,
        cornerRadius: cR,
        style,
        id,
        color: item.color,
        isFaded: item.isFaded,
        isHighlighted: item.isHighlighted,
        formattedArcLabel: getItemLabel(arcLabel, arcLabelMinAngle, item)
      }, slotProps?.pieArcLabel));
    })
  }));
}

function getPieCoordinates(series, drawing) {
  const {
    height,
    width
  } = drawing;
  const {
    cx: cxParam,
    cy: cyParam
  } = series;
  const availableRadius = Math.min(width, height) / 2;
  const cx = getPercentageValue(cxParam ?? '50%', width);
  const cy = getPercentageValue(cyParam ?? '50%', height);
  return {
    cx,
    cy,
    availableRadius
  };
}

const React$2 = await importShared('react');
function PiePlot(props) {
  const {
    skipAnimation: inSkipAnimation,
    slots,
    slotProps,
    onItemClick
  } = props;
  const seriesData = usePieSeries();
  const {
    left,
    top,
    width,
    height
  } = React$2.useContext(DrawingContext);
  const skipAnimation = useSkipAnimation(inSkipAnimation);
  if (seriesData === void 0) {
    return null;
  }
  const {
    series,
    seriesOrder
  } = seriesData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", {
    children: [seriesOrder.map((seriesId) => {
      const {
        innerRadius: innerRadiusParam,
        outerRadius: outerRadiusParam,
        cornerRadius,
        paddingAngle,
        data,
        cx: cxParam,
        cy: cyParam,
        highlighted,
        faded
      } = series[seriesId];
      const {
        cx,
        cy,
        availableRadius
      } = getPieCoordinates({
        cx: cxParam,
        cy: cyParam
      }, {
        width,
        height
      });
      const outerRadius = getPercentageValue(outerRadiusParam ?? availableRadius, availableRadius);
      const innerRadius = getPercentageValue(innerRadiusParam ?? 0, availableRadius);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("g", {
        transform: `translate(${left + cx}, ${top + cy})`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PieArcPlot, {
          innerRadius,
          outerRadius,
          cornerRadius,
          paddingAngle,
          id: seriesId,
          data,
          skipAnimation,
          highlighted,
          faded,
          onItemClick,
          slots,
          slotProps
        })
      }, seriesId);
    }), seriesOrder.map((seriesId) => {
      const {
        innerRadius: innerRadiusParam,
        outerRadius: outerRadiusParam,
        arcLabelRadius: arcLabelRadiusParam,
        cornerRadius,
        paddingAngle,
        arcLabel,
        arcLabelMinAngle,
        data,
        cx: cxParam,
        cy: cyParam
      } = series[seriesId];
      const {
        cx,
        cy,
        availableRadius
      } = getPieCoordinates({
        cx: cxParam,
        cy: cyParam
      }, {
        width,
        height
      });
      const outerRadius = getPercentageValue(outerRadiusParam ?? availableRadius, availableRadius);
      const innerRadius = getPercentageValue(innerRadiusParam ?? 0, availableRadius);
      const arcLabelRadius = arcLabelRadiusParam === void 0 ? (outerRadius + innerRadius) / 2 : getPercentageValue(arcLabelRadiusParam, availableRadius);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("g", {
        transform: `translate(${left + cx}, ${top + cy})`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PieArcLabelPlot, {
          innerRadius,
          outerRadius: outerRadius ?? availableRadius,
          arcLabelRadius,
          cornerRadius,
          paddingAngle,
          id: seriesId,
          data,
          skipAnimation,
          arcLabel,
          arcLabelMinAngle,
          slots,
          slotProps
        })
      }, seriesId);
    })]
  });
}

const _excluded = ["xAxis", "yAxis", "series", "width", "height", "margin", "colors", "sx", "tooltip", "axisHighlight", "skipAnimation", "legend", "topAxis", "leftAxis", "rightAxis", "bottomAxis", "children", "slots", "slotProps", "onItemClick", "loading", "highlightedItem", "onHighlightChange", "className"];
const React$1 = await importShared('react');
const defaultMargin = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 100
};
const defaultRTLMargin = {
  top: 5,
  bottom: 5,
  left: 100,
  right: 5
};
const PieChart = /* @__PURE__ */ React$1.forwardRef(function PieChart2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPieChart"
  });
  const {
    xAxis,
    yAxis,
    series,
    width,
    height,
    margin: marginProps,
    colors,
    sx,
    tooltip = {
      trigger: "item"
    },
    axisHighlight = {
      x: "none",
      y: "none"
    },
    skipAnimation,
    legend: legendProps,
    topAxis = null,
    leftAxis = null,
    rightAxis = null,
    bottomAxis = null,
    children,
    slots,
    slotProps,
    onItemClick,
    loading,
    highlightedItem,
    onHighlightChange,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const isRtl = useRtl();
  const margin = _extends({}, isRtl ? defaultRTLMargin : defaultMargin, marginProps);
  const legend = _extends({
    direction: "column",
    position: {
      vertical: "middle",
      horizontal: isRtl ? "left" : "right"
    }
  }, legendProps);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ResponsiveChartContainer, _extends({}, other, {
    ref,
    series: series.map((s) => _extends({
      type: "pie"
    }, s)),
    width,
    height,
    margin,
    xAxis: xAxis ?? [{
      id: DEFAULT_X_AXIS_KEY,
      scaleType: "point",
      data: [...new Array(Math.max(...series.map((s) => s.data.length)))].map((_, index) => index)
    }],
    yAxis,
    colors,
    sx,
    disableAxisListener: tooltip?.trigger !== "axis" && axisHighlight?.x === "none" && axisHighlight?.y === "none",
    highlightedItem,
    onHighlightChange,
    className,
    skipAnimation,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ChartsAxis, {
      topAxis,
      leftAxis,
      rightAxis,
      bottomAxis,
      slots,
      slotProps
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(PiePlot, {
      slots,
      slotProps,
      onItemClick
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsOverlay, {
      loading,
      slots,
      slotProps
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsLegend, _extends({}, legend, {
      slots,
      slotProps
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsAxisHighlight, _extends({}, axisHighlight)), !loading && /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsTooltip, _extends({}, tooltip, {
      slots,
      slotProps
    })), children]
  }));
});

const React = await importShared('react');
const {Card,CardContent,Typography,Stack,Chip,Box} = await importShared('@mui/material');

function UserPieChart() {
  const theme = useTheme();
  const [chartData, setChartData] = React.useState([]);
  const [totalRecordCounts, setTotalRecordCounts] = React.useState(0);
  const colorPalette = theme.palette.mode === "dark" ? [theme.palette.primary.light, theme.palette.primary.main, theme.palette.primary.dark] : [theme.palette.primary.dark, theme.palette.primary.main, theme.palette.primary.light];
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { rows } = await getUsersInfo();
        setTotalRecordCounts(rows.length);
        const chartRecords = rows.slice(0, 50);
        const countryCounts = {};
        chartRecords.forEach((user) => {
          if (user.country) {
            countryCounts[user.country] = (countryCounts[user.country] || 0) + 1;
          }
        });
        const seriesData = Object.keys(countryCounts).map((country, index) => ({
          id: index,
          value: countryCounts[country],
          label: country,
          color: colorPalette[index % colorPalette.length]
        }));
        setChartData(seriesData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { variant: "outlined", sx: { width: "100%", bgcolor: "background.paper", color: "text.primary" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { component: "h2", variant: "subtitle2", gutterBottom: true, children: "Users by country" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", sx: { alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: totalRecordCounts }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", color: "success", label: "+59%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: "Users are located in different countries" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PieChart,
      {
        series: [{ data: chartData }],
        width: 400,
        height: 400,
        slotProps: { legend: { hidden: true } }
      }
    ) })
  ] }) });
}

export { UserPieChart as default };
