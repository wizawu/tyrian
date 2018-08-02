declare namespace org {
    namespace w3c {
        namespace dom {
            namespace css {
interface CSSPrimitiveValue extends org.w3c.dom.css.CSSValue {
    CSS_UNKNOWN: short
    CSS_NUMBER: short
    CSS_PERCENTAGE: short
    CSS_EMS: short
    CSS_EXS: short
    CSS_PX: short
    CSS_CM: short
    CSS_MM: short
    CSS_IN: short
    CSS_PT: short
    CSS_PC: short
    CSS_DEG: short
    CSS_RAD: short
    CSS_GRAD: short
    CSS_MS: short
    CSS_S: short
    CSS_HZ: short
    CSS_KHZ: short
    CSS_DIMENSION: short
    CSS_STRING: short
    CSS_URI: short
    CSS_IDENT: short
    CSS_ATTR: short
    CSS_COUNTER: short
    CSS_RECT: short
    CSS_RGBCOLOR: short
    getPrimitiveType(): short
    setFloatValue(arg0: short, arg1: float): void
    getFloatValue(arg0: short): float
    setStringValue(arg0: short, arg1: java.lang.String | string): void
    getStringValue(): string
    getCounterValue(): org.w3c.dom.css.Counter
    getRectValue(): org.w3c.dom.css.Rect
    getRGBColorValue(): org.w3c.dom.css.RGBColor
}

            }
        }
    }
}