declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {

        interface CSSPrimitiveValue extends org.w3c.dom.css.CSSValue {
          public static readonly CSS_UNKNOWN: short
          public static readonly CSS_NUMBER: short
          public static readonly CSS_PERCENTAGE: short
          public static readonly CSS_EMS: short
          public static readonly CSS_EXS: short
          public static readonly CSS_PX: short
          public static readonly CSS_CM: short
          public static readonly CSS_MM: short
          public static readonly CSS_IN: short
          public static readonly CSS_PT: short
          public static readonly CSS_PC: short
          public static readonly CSS_DEG: short
          public static readonly CSS_RAD: short
          public static readonly CSS_GRAD: short
          public static readonly CSS_MS: short
          public static readonly CSS_S: short
          public static readonly CSS_HZ: short
          public static readonly CSS_KHZ: short
          public static readonly CSS_DIMENSION: short
          public static readonly CSS_STRING: short
          public static readonly CSS_URI: short
          public static readonly CSS_IDENT: short
          public static readonly CSS_ATTR: short
          public static readonly CSS_COUNTER: short
          public static readonly CSS_RECT: short
          public static readonly CSS_RGBCOLOR: short
          getPrimitiveType(): short
          setFloatValue(arg0: short, arg1: float): void
          getFloatValue(arg0: short): float
          setStringValue(arg0: short, arg1: java.lang.String): void
          getStringValue(): java.lang.String
          getCounterValue(): org.w3c.dom.css.Counter
          getRectValue(): org.w3c.dom.css.Rect
          getRGBColorValue(): org.w3c.dom.css.RGBColor
        }

      }
    }
  }
}
