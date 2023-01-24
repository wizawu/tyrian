declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {
        interface CSSPrimitiveValue extends org.w3c.dom.css.CSSValue {
          readonly CSS_UNKNOWN: short
          readonly CSS_NUMBER: short
          readonly CSS_PERCENTAGE: short
          readonly CSS_EMS: short
          readonly CSS_EXS: short
          readonly CSS_PX: short
          readonly CSS_CM: short
          readonly CSS_MM: short
          readonly CSS_IN: short
          readonly CSS_PT: short
          readonly CSS_PC: short
          readonly CSS_DEG: short
          readonly CSS_RAD: short
          readonly CSS_GRAD: short
          readonly CSS_MS: short
          readonly CSS_S: short
          readonly CSS_HZ: short
          readonly CSS_KHZ: short
          readonly CSS_DIMENSION: short
          readonly CSS_STRING: short
          readonly CSS_URI: short
          readonly CSS_IDENT: short
          readonly CSS_ATTR: short
          readonly CSS_COUNTER: short
          readonly CSS_RECT: short
          readonly CSS_RGBCOLOR: short
          getPrimitiveType(): number
          setFloatValue(arg0: number | java.lang.Short, arg1: number | java.lang.Float): void
          getFloatValue(arg0: number | java.lang.Short): number
          setStringValue(arg0: number | java.lang.Short, arg1: java.lang.String | string): void
          getStringValue(): java.lang.String
          getCounterValue(): org.w3c.dom.css.Counter
          getRectValue(): org.w3c.dom.css.Rect
          getRGBColorValue(): org.w3c.dom.css.RGBColor
        }
      }
    }
  }
}
