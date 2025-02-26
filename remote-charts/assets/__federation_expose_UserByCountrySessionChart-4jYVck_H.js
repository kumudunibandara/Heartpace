import { importShared } from './__federation_fn_import-XIeCvASR.js';
import { j as jsxRuntimeExports, A as styled, d as composeClasses, g as generateUtilityClass, x as generateUtilityClasses } from './memoTheme-DSZyGnlJ.js';
import { p as constant, q as array, s as sqrt, t as tau, r as pi, v as sin, w as cos, x as epsilon, y as interpolateString, z as useDrawingArea, b as useTransition, a as animated, c as color, u as useInteractionItemProps, f as useSkipAnimation, A as useChartGradient, B as useLineSeries, h as useCartesianContext, E as getValueToPositionMapper, I as InteractionContext, F as useSpring, G as to, D as DEFAULT_X_AXIS_KEY, H as getColor, R as ResponsiveChartContainer, C as ChartsOverlay, k as ChartsAxisHighlight, l as ChartsAxis, m as ChartsLegend, n as ChartsTooltip, o as getUsersInfo } from './UserService-vMN2TBSP.js';
import { _ as _objectWithoutPropertiesLoose, p as useSlotProps, d as useTheme, k as useId, z as useThemeProps, T as Typography } from './Typography-HTjTafHw.js';
import { c as Card, d as CardContent, S as Stack, C as Chip } from './Stack-4NuTV2HV.js';
import { _ as _extends } from './emotion-use-insertion-effect-with-fallbacks.browser.esm-DGfdAQTs.js';
import { a as useChartId, u as useItemHighlighted, C as ChartsOnAxisClickHandler, b as ChartsGrid, c as ChartsClipPath } from './ChartsOnAxisClickHandler-DtcffTF5.js';
import { w as withPath } from './path-CJ0Arqcy.js';

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // falls through
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

function d3Line(x$1, y$1) {
  var defined = constant(true),
      context = null,
      curve = curveLinear,
      output = null,
      path = withPath(line);

  x$1 = typeof x$1 === "function" ? x$1 : (x$1 === undefined) ? x : constant(x$1);
  y$1 = typeof y$1 === "function" ? y$1 : (y$1 === undefined) ? y : constant(y$1);

  function line(data) {
    var i,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
  };

  line.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function d3Area(x0, y0, y1) {
  var x1 = null,
      defined = constant(true),
      context = null,
      curve = curveLinear,
      output = null,
      path = withPath(area);

  x0 = typeof x0 === "function" ? x0 : (x0 === undefined) ? x : constant(+x0);
  y0 = typeof y0 === "function" ? y0 : (y0 === undefined) ? constant(0) : constant(+y0);
  y1 = typeof y1 === "function" ? y1 : (y1 === undefined) ? y : constant(+y1);

  function area(data) {
    var i,
        j,
        k,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return d3Line().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

const circle = {
  draw(context, size) {
    const r = sqrt(size / pi);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau);
  }
};

const cross = {
  draw(context, size) {
    const r = sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

const tan30 = sqrt(1 / 3);
const tan30_2 = tan30 * 2;

const diamond = {
  draw(context, size) {
    const y = sqrt(size / tan30_2);
    const x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};

const square = {
  draw(context, size) {
    const w = sqrt(size);
    const x = -w / 2;
    context.rect(x, x, w, w);
  }
};

const ka = 0.89081309152928522810;
const kr = sin(pi / 10) / sin(7 * pi / 10);
const kx = sin(tau / 10) * kr;
const ky = -cos(tau / 10) * kr;

const star = {
  draw(context, size) {
    const r = sqrt(size * ka);
    const x = kx * r;
    const y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (let i = 1; i < 5; ++i) {
      const a = tau * i / 5;
      const c = cos(a);
      const s = sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
};

const sqrt3 = sqrt(3);

const triangle = {
  draw(context, size) {
    const y = -sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};

const c = -0.5;
const s = sqrt(3) / 2;
const k = 1 / sqrt(12);
const a = (k / 2 + 1) * 3;

const wye = {
  draw(context, size) {
    const r = sqrt(size / a);
    const x0 = r / 2, y0 = r * k;
    const x1 = x0, y1 = r * k + r;
    const x2 = -x1, y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};

// These symbols are designed to be filled.
const symbolsFill = [
  circle,
  cross,
  diamond,
  square,
  star,
  triangle,
  wye
];

function Symbol$1(type, size) {
  let context = null,
      path = withPath(symbol);

  type = typeof type === "function" ? type : constant(type || circle);
  size = typeof size === "function" ? size : constant(size === undefined ? 64 : +size);

  function symbol() {
    let buffer;
    if (!context) context = buffer = path();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
}

function point$2(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point$2(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // falls through
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
}))(0);

function point$1(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > epsilon) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > epsilon) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // falls through
      default: point$1(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

const curveCatmullRom = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

function curveNatural(context) {
  return new Natural(context);
}

function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // falls through
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

function curveStep(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

const React$7 = await importShared('react');
function usePrevious(value) {
  const ref = React$7.useRef({
    currentPath: value,
    previousPath: undefined
  });
  if (ref.current.currentPath !== value) {
    ref.current = {
      currentPath: value,
      previousPath: ref.current.currentPath
    };
  }
  return ref.current;
}
const useStringInterpolator = path => {
  const memoryRef = usePrevious(path);
  const interpolator = React$7.useMemo(() => memoryRef.previousPath ? interpolateString(memoryRef.previousPath, memoryRef.currentPath) : () => memoryRef.currentPath, [memoryRef.currentPath, memoryRef.previousPath]);
  return interpolator;
};

/**
 * Remove spaces to have viable ids
 */
function cleanId(id) {
  return id.replace(' ', '_');
}

const React$6 = await importShared('react');
/**
 * @ignore - internal component.
 */
function AppearingMask(props) {
  const drawingArea = useDrawingArea();
  const chartId = useChartId();
  const transitionAppear = useTransition([drawingArea], {
    from: v => ({
      animatedWidth: v.left
    }),
    enter: v => ({
      animatedWidth: v.width + v.left + v.right
    }),
    leave: v => ({
      animatedWidth: v.width + v.left + v.right
    }),
    reset: false,
    immediate: props.skipAnimation
  });
  const clipId = cleanId(`${chartId}-${props.id}`);
  return /*#__PURE__*/jsxRuntimeExports.jsxs(React$6.Fragment, {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("clipPath", {
      id: clipId,
      children: transitionAppear(style => /*#__PURE__*/jsxRuntimeExports.jsx(animated.rect, {
        // @ts-expect-error
        x: 0,
        y: 0,
        width: style.animatedWidth,
        height: drawingArea.top + drawingArea.height + drawingArea.bottom
      }))
    }), /*#__PURE__*/jsxRuntimeExports.jsx("g", {
      clipPath: `url(#${clipId})`,
      children: props.children
    })]
  });
}

const _excluded$b = ["d", "skipAnimation", "ownerState"];
await importShared('react');
const AreaElementPath = styled(animated.path, {
  name: "MuiAreaElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  stroke: "none",
  fill: ownerState.gradientId && `url(#${ownerState.gradientId})` || ownerState.isHighlighted && color(ownerState.color).brighter(1).formatHex() || color(ownerState.color).brighter(0.5).formatHex(),
  transition: "opacity 0.2s ease-in, fill 0.2s ease-in",
  opacity: ownerState.isFaded ? 0.3 : 1
}));
function AnimatedArea(props) {
  const {
    d,
    skipAnimation,
    ownerState
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$b);
  const stringInterpolator = useStringInterpolator(d);
  const transitionChange = useTransition([stringInterpolator], {
    from: {
      value: 0
    },
    to: {
      value: 1
    },
    enter: {
      value: 1
    },
    reset: false,
    immediate: skipAnimation
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppearingMask, {
    skipAnimation,
    id: `${ownerState.id}-area-clip`,
    children: transitionChange((style, interpolator) => (
      // @ts-expect-error
      /* @__PURE__ */ jsxRuntimeExports.jsx(AreaElementPath, _extends({}, other, {
        ownerState,
        d: style.value.to(interpolator)
      }))
    ))
  });
}

const _excluded$a = ["id", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
await importShared('react');
function getAreaElementUtilityClass(slot) {
  return generateUtilityClass("MuiAreaElement", slot);
}
generateUtilityClasses("MuiAreaElement", ["root", "highlighted", "faded"]);
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getAreaElementUtilityClass, classes);
};
function AreaElement(props) {
  const {
    id,
    classes: innerClasses,
    color,
    gradientId,
    slots,
    slotProps,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const ownerState = {
    id,
    classes: innerClasses,
    color,
    gradientId,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses$3(ownerState);
  const Area = slots?.area ?? AnimatedArea;
  const areaProps = useSlotProps({
    elementType: Area,
    externalSlotProps: slotProps?.area,
    additionalProps: _extends({}, getInteractionItemProps({
      type: "line",
      seriesId: id
    }), {
      onClick,
      cursor: onClick ? "pointer" : "unset"
    }),
    className: classes.root,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Area, _extends({}, other, areaProps));
}

function getCurveFactory(curveType) {
  switch (curveType) {
    case 'catmullRom':
      {
        return curveCatmullRom.alpha(0.5);
      }
    case 'linear':
      {
        return curveLinear;
      }
    case 'monotoneX':
      {
        return monotoneX;
      }
    case 'monotoneY':
      {
        return monotoneY;
      }
    case 'natural':
      {
        return curveNatural;
      }
    case 'step':
      {
        return curveStep;
      }
    case 'stepBefore':
      {
        return stepBefore;
      }
    case 'stepAfter':
      {
        return stepAfter;
      }
    default:
      return monotoneX;
  }
}

const _excluded$9 = ["slots", "slotProps", "onItemClick", "skipAnimation"];
const React$5 = await importShared('react');
const useAggregatedData$1 = () => {
  const seriesData = useLineSeries();
  const axisData = useCartesianContext();
  const allData = React$5.useMemo(() => {
    if (seriesData === void 0) {
      return [];
    }
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
    return stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return [...groupIds].reverse().map((seriesId) => {
        const {
          xAxisId: xAxisIdProp,
          yAxisId: yAxisIdProp,
          xAxisKey = defaultXAxisId,
          yAxisKey = defaultYAxisId,
          stackedData,
          data,
          connectNulls,
          baseline
        } = series[seriesId];
        const xAxisId = xAxisIdProp ?? xAxisKey;
        const yAxisId = yAxisIdProp ?? yAxisKey;
        const xScale = getValueToPositionMapper(xAxis[xAxisId].scale);
        const yScale = yAxis[yAxisId].scale;
        const xData = xAxis[xAxisId].data;
        const gradientUsed = yAxis[yAxisId].colorScale && [yAxisId, "y"] || xAxis[xAxisId].colorScale && [xAxisId, "x"] || void 0;
        const areaPath = d3Area().x((d2) => xScale(d2.x)).defined((_, i) => connectNulls || data[i] != null).y0((d2) => {
          if (typeof baseline === "number") {
            return yScale(baseline);
          }
          if (baseline === "max") {
            return yScale.range()[1];
          }
          if (baseline === "min") {
            return yScale.range()[0];
          }
          const value = d2.y && yScale(d2.y[0]);
          if (Number.isNaN(value)) {
            return yScale.range()[0];
          }
          return value;
        }).y1((d2) => d2.y && yScale(d2.y[1]));
        const curve = getCurveFactory(series[seriesId].curve);
        const formattedData = xData?.map((x, index) => ({
          x,
          y: stackedData[index]
        })) ?? [];
        const d3Data = connectNulls ? formattedData.filter((_, i) => data[i] != null) : formattedData;
        const d = areaPath.curve(curve)(d3Data) || "";
        return _extends({}, series[seriesId], {
          gradientUsed,
          d,
          seriesId
        });
      });
    });
  }, [seriesData, axisData]);
  return allData;
};
function AreaPlot(props) {
  const {
    slots,
    slotProps,
    onItemClick,
    skipAnimation: inSkipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$9);
  const skipAnimation = useSkipAnimation(inSkipAnimation);
  const getGradientId = useChartGradient();
  const completedData = useAggregatedData$1();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("g", _extends({}, other, {
    children: completedData.map(({
      d,
      seriesId,
      color,
      area,
      gradientUsed
    }) => !!area && /* @__PURE__ */ jsxRuntimeExports.jsx(AreaElement, {
      id: seriesId,
      d,
      color,
      gradientId: gradientUsed && getGradientId(...gradientUsed),
      slots,
      slotProps,
      onClick: onItemClick && ((event) => onItemClick(event, {
        type: "line",
        seriesId
      })),
      skipAnimation
    }, seriesId))
  }));
}

const _excluded$8 = ["d", "skipAnimation", "ownerState"];
await importShared('react');
const LineElementPath = styled(animated.path, {
  name: "MuiLineElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  strokeWidth: 2,
  strokeLinejoin: "round",
  fill: "none",
  stroke: ownerState.gradientId && `url(#${ownerState.gradientId})` || ownerState.isHighlighted && color(ownerState.color).brighter(0.5).formatHex() || ownerState.color,
  transition: "opacity 0.2s ease-in, stroke 0.2s ease-in",
  opacity: ownerState.isFaded ? 0.3 : 1
}));
function AnimatedLine(props) {
  const {
    d,
    skipAnimation,
    ownerState
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$8);
  const stringInterpolator = useStringInterpolator(d);
  const transitionChange = useTransition([stringInterpolator], {
    from: {
      value: 0
    },
    to: {
      value: 1
    },
    enter: {
      value: 1
    },
    reset: false,
    immediate: skipAnimation
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppearingMask, {
    skipAnimation,
    id: `${ownerState.id}-line-clip`,
    children: transitionChange((style, interpolator) => (
      // @ts-expect-error
      /* @__PURE__ */ jsxRuntimeExports.jsx(LineElementPath, _extends({}, other, {
        ownerState,
        d: style.value.to(interpolator)
      }))
    ))
  });
}

const _excluded$7 = ["id", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
await importShared('react');
function getLineElementUtilityClass(slot) {
  return generateUtilityClass("MuiLineElement", slot);
}
generateUtilityClasses("MuiLineElement", ["root", "highlighted", "faded"]);
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getLineElementUtilityClass, classes);
};
function LineElement(props) {
  const {
    id,
    classes: innerClasses,
    color,
    gradientId,
    slots,
    slotProps,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const ownerState = {
    id,
    classes: innerClasses,
    color,
    gradientId,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses$2(ownerState);
  const Line = slots?.line ?? AnimatedLine;
  const lineProps = useSlotProps({
    elementType: Line,
    externalSlotProps: slotProps?.line,
    additionalProps: _extends({}, getInteractionItemProps({
      type: "line",
      seriesId: id
    }), {
      onClick,
      cursor: onClick ? "pointer" : "unset"
    }),
    className: classes.root,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Line, _extends({}, other, lineProps));
}

const _excluded$6 = ["slots", "slotProps", "skipAnimation", "onItemClick"];
const React$4 = await importShared('react');
const useAggregatedData = () => {
  const seriesData = useLineSeries();
  const axisData = useCartesianContext();
  const allData = React$4.useMemo(() => {
    if (seriesData === void 0) {
      return [];
    }
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
    return stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return groupIds.flatMap((seriesId) => {
        const {
          xAxisId: xAxisIdProp,
          yAxisId: yAxisIdProp,
          xAxisKey = defaultXAxisId,
          yAxisKey = defaultYAxisId,
          stackedData,
          data,
          connectNulls
        } = series[seriesId];
        const xAxisId = xAxisIdProp ?? xAxisKey;
        const yAxisId = yAxisIdProp ?? yAxisKey;
        const xScale = getValueToPositionMapper(xAxis[xAxisId].scale);
        const yScale = yAxis[yAxisId].scale;
        const xData = xAxis[xAxisId].data;
        const gradientUsed = yAxis[yAxisId].colorScale && [yAxisId, "y"] || xAxis[xAxisId].colorScale && [xAxisId, "x"] || void 0;
        const linePath = d3Line().x((d2) => xScale(d2.x)).defined((_, i) => connectNulls || data[i] != null).y((d2) => yScale(d2.y[1]));
        const formattedData = xData?.map((x, index) => ({
          x,
          y: stackedData[index]
        })) ?? [];
        const d3Data = connectNulls ? formattedData.filter((_, i) => data[i] != null) : formattedData;
        const d = linePath.curve(getCurveFactory(series[seriesId].curve))(d3Data) || "";
        return _extends({}, series[seriesId], {
          gradientUsed,
          d,
          seriesId
        });
      });
    });
  }, [seriesData, axisData]);
  return allData;
};
function LinePlot(props) {
  const {
    slots,
    slotProps,
    skipAnimation: inSkipAnimation,
    onItemClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const skipAnimation = useSkipAnimation(inSkipAnimation);
  const getGradientId = useChartGradient();
  const completedData = useAggregatedData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("g", _extends({}, other, {
    children: completedData.map(({
      d,
      seriesId,
      color,
      gradientUsed
    }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LineElement, {
        id: seriesId,
        d,
        color,
        gradientId: gradientUsed && getGradientId(...gradientUsed),
        skipAnimation,
        slots,
        slotProps,
        onClick: onItemClick && ((event) => onItemClick(event, {
          type: "line",
          seriesId
        }))
      }, seriesId);
    })
  }));
}

function getMarkElementUtilityClass(slot) {
  return generateUtilityClass('MuiMarkElement', slot);
}
generateUtilityClasses('MuiMarkElement', ['root', 'highlighted', 'faded']);
const useUtilityClasses$1 = ownerState => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ['root', `series-${id}`, isHighlighted && 'highlighted', isFaded && 'faded']
  };
  return composeClasses(slots, getMarkElementUtilityClass, classes);
};

const _excluded$5 = ["x", "y", "id", "classes", "color", "dataIndex", "onClick", "skipAnimation", "shape"];
const React$3 = await importShared('react');
function CircleMarkElement(props) {
  const {
    x,
    y,
    id,
    classes: innerClasses,
    color,
    dataIndex,
    onClick,
    skipAnimation,
    shape
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const theme = useTheme();
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const {
    axis
  } = React$3.useContext(InteractionContext);
  const position = useSpring({
    to: {
      x,
      y
    },
    immediate: skipAnimation
  });
  const ownerState = {
    id,
    classes: innerClasses,
    isHighlighted: axis.x?.index === dataIndex || isHighlighted,
    isFaded};
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(animated.circle, _extends({}, other, {
    // @ts-expect-error
    cx: position.x,
    cy: position.y,
    r: 5,
    fill: (theme.vars || theme).palette.background.paper,
    stroke: color,
    strokeWidth: 2,
    className: classes.root,
    onClick,
    cursor: onClick ? "pointer" : "unset"
  }, getInteractionItemProps({
    type: "line",
    seriesId: id,
    dataIndex
  })));
}

// Returns the index of a defined shape
function getSymbol(shape) {
  const symbolNames = 'circle cross diamond square star triangle wye'.split(/ /);
  return symbolNames.indexOf(shape) || 0;
}

const _excluded$4 = ["x", "y", "id", "classes", "color", "shape", "dataIndex", "onClick", "skipAnimation"];
const React$2 = await importShared('react');
const MarkElementPath = styled(animated.path, {
  name: "MuiMarkElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState,
  theme
}) => ({
  fill: (theme.vars || theme).palette.background.paper,
  stroke: ownerState.color,
  strokeWidth: 2
}));
function MarkElement(props) {
  const {
    x,
    y,
    id,
    classes: innerClasses,
    color,
    shape,
    dataIndex,
    onClick,
    skipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const {
    axis
  } = React$2.useContext(InteractionContext);
  const position = useSpring({
    to: {
      x,
      y
    },
    immediate: skipAnimation
  });
  const ownerState = {
    id,
    classes: innerClasses,
    isHighlighted: axis.x?.index === dataIndex || isHighlighted,
    isFaded,
    color
  };
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MarkElementPath, _extends({}, other, {
    style: {
      transform: to([position.x, position.y], (pX, pY) => `translate(${pX}px, ${pY}px)`),
      transformOrigin: to([position.x, position.y], (pX, pY) => `${pX}px ${pY}px`)
    },
    ownerState,
    className: classes.root,
    d: Symbol$1(symbolsFill[getSymbol(shape)])(),
    onClick,
    cursor: onClick ? "pointer" : "unset"
  }, getInteractionItemProps({
    type: "line",
    seriesId: id,
    dataIndex
  })));
}

const _excluded$3 = ["slots", "slotProps", "skipAnimation", "onItemClick", "experimentalRendering"];
await importShared('react');
function MarkPlot(props) {
  const {
    slots,
    slotProps,
    skipAnimation: inSkipAnimation,
    onItemClick,
    experimentalRendering
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const skipAnimation = useSkipAnimation(inSkipAnimation);
  const seriesData = useLineSeries();
  const axisData = useCartesianContext();
  const chartId = useChartId();
  const drawingArea = useDrawingArea();
  const Mark = slots?.mark ?? (experimentalRendering ? CircleMarkElement : MarkElement);
  if (seriesData === void 0) {
    return null;
  }
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("g", _extends({}, other, {
    children: stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return groupIds.map((seriesId) => {
        const {
          xAxisId: xAxisIdProp,
          yAxisId: yAxisIdProp,
          xAxisKey = defaultXAxisId,
          yAxisKey = defaultYAxisId,
          stackedData,
          data,
          showMark = true
        } = series[seriesId];
        if (showMark === false) {
          return null;
        }
        const xAxisId = xAxisIdProp ?? xAxisKey;
        const yAxisId = yAxisIdProp ?? yAxisKey;
        const xScale = getValueToPositionMapper(xAxis[xAxisId].scale);
        const yScale = yAxis[yAxisId].scale;
        const xData = xAxis[xAxisId].data;
        if (xData === void 0) {
          throw new Error(`MUI X: ${xAxisId === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisId}"`} should have data property to be able to display a line plot.`);
        }
        const clipId = cleanId(`${chartId}-${seriesId}-line-clip`);
        const colorGetter = getColor(series[seriesId], xAxis[xAxisId], yAxis[yAxisId]);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("g", {
          clipPath: `url(#${clipId})`,
          children: xData?.map((x, index) => {
            const value = data[index] == null ? null : stackedData[index][1];
            return {
              x: xScale(x),
              y: value === null ? null : yScale(value),
              position: x,
              value,
              index
            };
          }).filter(({
            x,
            y,
            index,
            position,
            value
          }) => {
            if (value === null || y === null) {
              return false;
            }
            if (!drawingArea.isPointInside({
              x,
              y
            })) {
              return false;
            }
            if (showMark === true) {
              return true;
            }
            return showMark({
              x,
              y,
              index,
              position,
              value
            });
          }).map(({
            x,
            y,
            index
          }) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Mark, _extends({
              id: seriesId,
              dataIndex: index,
              shape: "circle",
              color: colorGetter(index),
              x,
              y,
              skipAnimation,
              onClick: onItemClick && ((event) => onItemClick(event, {
                type: "line",
                seriesId,
                dataIndex: index
              }))
            }, slotProps?.mark), `${seriesId}-${index}`);
          })
        }, seriesId);
      });
    })
  }));
}

const _excluded$2 = ["x", "y", "id", "classes", "color"];
await importShared('react');
function getHighlightElementUtilityClass(slot) {
  return generateUtilityClass("MuiHighlightElement", slot);
}
generateUtilityClasses("MuiHighlightElement", ["root"]);
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    id
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`]
  };
  return composeClasses(slots, getHighlightElementUtilityClass, classes);
};
const HighlightElement = styled("circle", {
  name: "MuiHighlightElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  transform: `translate(${ownerState.x}px, ${ownerState.y}px)`,
  transformOrigin: `${ownerState.x}px ${ownerState.y}px`,
  fill: ownerState.color
}));
function LineHighlightElement(props) {
  const {
    x,
    y,
    id,
    classes: innerClasses,
    color
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const ownerState = {
    id,
    classes: innerClasses,
    color,
    x,
    y
  };
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightElement, _extends({
    pointerEvents: "none",
    ownerState,
    className: classes.root,
    cx: 0,
    cy: 0,
    r: other.r === void 0 ? 5 : other.r
  }, other));
}

const _excluded$1 = ["slots", "slotProps"];
const React$1 = await importShared('react');
function LineHighlightPlot(props) {
  const {
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const seriesData = useLineSeries();
  const axisData = useCartesianContext();
  const drawingArea = useDrawingArea();
  const {
    axis
  } = React$1.useContext(InteractionContext);
  const highlightedIndex = axis.x?.index;
  if (highlightedIndex === void 0) {
    return null;
  }
  if (seriesData === void 0) {
    return null;
  }
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
  const Element = slots?.lineHighlight ?? LineHighlightElement;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("g", _extends({}, other, {
    children: stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return groupIds.flatMap((seriesId) => {
        const {
          xAxisId: xAxisIdProp,
          yAxisId: yAxisIdProp,
          xAxisKey = defaultXAxisId,
          yAxisKey = defaultYAxisId,
          stackedData,
          data,
          disableHighlight
        } = series[seriesId];
        const xAxisId = xAxisIdProp ?? xAxisKey;
        const yAxisId = yAxisIdProp ?? yAxisKey;
        if (disableHighlight || data[highlightedIndex] == null) {
          return null;
        }
        const xScale = getValueToPositionMapper(xAxis[xAxisId].scale);
        const yScale = yAxis[yAxisId].scale;
        const xData = xAxis[xAxisId].data;
        if (xData === void 0) {
          throw new Error(`MUI X: ${xAxisId === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisId}"`} should have data property to be able to display a line plot.`);
        }
        const x = xScale(xData[highlightedIndex]);
        const y = yScale(stackedData[highlightedIndex][1]);
        if (!drawingArea.isPointInside({
          x,
          y
        })) {
          return null;
        }
        const colorGetter = getColor(series[seriesId], xAxis[xAxisId], yAxis[yAxisId]);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Element, _extends({
          id: seriesId,
          color: colorGetter(highlightedIndex),
          x,
          y
        }, slotProps?.lineHighlight), `${seriesId}`);
      });
    })
  }));
}

const _excluded = ["xAxis", "yAxis", "series", "width", "height", "margin", "colors", "dataset", "sx", "tooltip", "onAxisClick", "onAreaClick", "onLineClick", "onMarkClick", "axisHighlight", "disableLineItemHighlight", "legend", "grid", "topAxis", "leftAxis", "rightAxis", "bottomAxis", "children", "slots", "slotProps", "skipAnimation", "loading", "highlightedItem", "onHighlightChange", "className", "experimentalMarkRendering"];
/**
 * A helper function that extracts LineChartProps from the input props
 * and returns an object with props for the children components of LineChart.
 *
 * @param props The input props for LineChart
 * @returns An object with props for the children components of LineChart
 */
const useLineChartProps = props => {
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
      onAreaClick,
      onLineClick,
      onMarkClick,
      axisHighlight,
      disableLineItemHighlight,
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
      highlightedItem,
      onHighlightChange,
      className,
      experimentalMarkRendering
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const id = useId();
  const clipPathId = `${id}-clip-path`;
  const chartContainerProps = _extends({}, other, {
    series: series.map(s => _extends({
      disableHighlight: !!disableLineItemHighlight,
      type: 'line'
    }, s)),
    width,
    height,
    margin,
    colors,
    dataset,
    xAxis: xAxis ?? [{
      id: DEFAULT_X_AXIS_KEY,
      scaleType: 'point',
      data: Array.from({
        length: Math.max(...series.map(s => (s.data ?? dataset ?? []).length))
      }, (_, index) => index)
    }],
    yAxis,
    sx,
    highlightedItem,
    onHighlightChange,
    disableAxisListener: tooltip?.trigger !== 'axis' && axisHighlight?.x === 'none' && axisHighlight?.y === 'none' && !onAxisClick,
    className,
    skipAnimation
  });
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
  const areaPlotProps = {
    slots,
    slotProps,
    onItemClick: onAreaClick
  };
  const linePlotProps = {
    slots,
    slotProps,
    onItemClick: onLineClick
  };
  const markPlotProps = {
    slots,
    slotProps,
    onItemClick: onMarkClick,
    skipAnimation,
    experimentalRendering: experimentalMarkRendering
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
  const axisHighlightProps = _extends({
    x: 'line'
  }, axisHighlight);
  const lineHighlightPlotProps = {
    slots,
    slotProps
  };
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
    axisClickHandlerProps,
    gridProps,
    clipPathProps,
    clipPathGroupProps,
    areaPlotProps,
    linePlotProps,
    markPlotProps,
    overlayProps,
    chartsAxisProps,
    axisHighlightProps,
    lineHighlightPlotProps,
    legendProps,
    tooltipProps,
    children
  };
};

const React = await importShared('react');
const LineChart = /* @__PURE__ */ React.forwardRef(function LineChart2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiLineChart"
  });
  const {
    chartContainerProps,
    axisClickHandlerProps,
    gridProps,
    clipPathProps,
    clipPathGroupProps,
    areaPlotProps,
    linePlotProps,
    markPlotProps,
    overlayProps,
    chartsAxisProps,
    axisHighlightProps,
    lineHighlightPlotProps,
    legendProps,
    tooltipProps,
    children
  } = useLineChartProps(props);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ResponsiveChartContainer, _extends({
    ref
  }, chartContainerProps, {
    children: [props.onAxisClick && /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsOnAxisClickHandler, _extends({}, axisClickHandlerProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsGrid, _extends({}, gridProps)), /* @__PURE__ */ jsxRuntimeExports.jsxs("g", _extends({}, clipPathGroupProps, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(AreaPlot, _extends({}, areaPlotProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(LinePlot, _extends({}, linePlotProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsOverlay, _extends({}, overlayProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsAxisHighlight, _extends({}, axisHighlightProps))]
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsAxis, _extends({}, chartsAxisProps)), /* @__PURE__ */ jsxRuntimeExports.jsx("g", {
      "data-drawing-container": true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarkPlot, _extends({}, markPlotProps))
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(LineHighlightPlot, _extends({}, lineHighlightPlotProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsLegend, _extends({}, legendProps)), !props.loading && /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsTooltip, _extends({}, tooltipProps)), /* @__PURE__ */ jsxRuntimeExports.jsx(ChartsClipPath, _extends({}, clipPathProps)), children]
  }));
});

const {useEffect,useState} = await importShared('react');

const {useSelector} = await importShared('react-redux');
function AreaGradient({ color, id }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id, x1: "50%", y1: "0%", x2: "50%", y2: "100%", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: color, stopOpacity: 0.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: color, stopOpacity: 0 })
  ] }) });
}
const UserByCountrySessionChart = () => {
  const theme = useTheme();
  const [cities, setCities] = useState([]);
  const [counts, setCounts] = useState([]);
  const currentTheme = useSelector((state) => state.layout.theme) || "light";
  const [totalRecordCounts, setTotalRecordCounts] = useState(0);
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
  const colorPalette = currentTheme === "dark" ? [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark
  ] : [
    theme.palette.primary.dark,
    theme.palette.primary.main,
    theme.palette.primary.light
  ];
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { size: "small", color: "success", label: "+35%" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", sx: { color: "text.secondary" }, children: "Users are located different cities" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      LineChart,
      {
        colors: colorPalette,
        xAxis: [
          {
            scaleType: "point",
            data: cities,
            tickInterval: (i) => (i + 1) % 5 === 0
          }
        ],
        series: [
          {
            id: "direct",
            label: "Direct",
            showMark: false,
            curve: "linear",
            stack: "total",
            area: true,
            stackOrder: "ascending",
            data: counts
          }
        ],
        height: 400,
        margin: { left: 50, right: 20, top: 20, bottom: 20 },
        grid: { horizontal: true },
        sx: {
          "& .MuiAreaElement-series-organic": {
            fill: "url('#organic')"
          },
          "& .MuiAreaElement-series-referral": {
            fill: "url('#referral')"
          },
          "& .MuiAreaElement-series-direct": {
            fill: "url('#direct')"
          }
        },
        slotProps: {
          legend: {
            hidden: true
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AreaGradient, { color: theme.palette.primary.dark, id: "organic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AreaGradient, { color: theme.palette.primary.main, id: "referral" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AreaGradient, { color: theme.palette.primary.light, id: "direct" })
        ]
      }
    )
  ] }) });
};

export { UserByCountrySessionChart as default };
