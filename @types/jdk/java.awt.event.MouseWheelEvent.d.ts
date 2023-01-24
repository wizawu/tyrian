declare namespace java {
  namespace awt {
    namespace event {
      class MouseWheelEvent extends java.awt.event.MouseEvent {
        public static readonly WHEEL_UNIT_SCROLL: int
        public static readonly WHEEL_BLOCK_SCROLL: int
        scrollType: int
        scrollAmount: int
        wheelRotation: int
        preciseWheelRotation: double
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: boolean | java.lang.Boolean,
          arg8: number | java.lang.Integer,
          arg9: number | java.lang.Integer,
          arg10: number | java.lang.Integer
        )
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: number | java.lang.Integer,
          arg8: number | java.lang.Integer,
          arg9: boolean | java.lang.Boolean,
          arg10: number | java.lang.Integer,
          arg11: number | java.lang.Integer,
          arg12: number | java.lang.Integer
        )
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: number | java.lang.Integer,
          arg8: number | java.lang.Integer,
          arg9: boolean | java.lang.Boolean,
          arg10: number | java.lang.Integer,
          arg11: number | java.lang.Integer,
          arg12: number | java.lang.Integer,
          arg13: number | java.lang.Double
        )
        public getScrollType(): number
        public getScrollAmount(): number
        public getWheelRotation(): number
        public getPreciseWheelRotation(): number
        public getUnitsToScroll(): number
        public paramString(): java.lang.String
      }
    }
  }
}
