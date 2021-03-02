declare namespace java {
  namespace awt {
    namespace event {

      class AdjustmentEvent extends java.awt.AWTEvent {
        public static readonly ADJUSTMENT_FIRST: int
        public static readonly ADJUSTMENT_LAST: int
        public static readonly ADJUSTMENT_VALUE_CHANGED: int
        public static readonly UNIT_INCREMENT: int
        public static readonly UNIT_DECREMENT: int
        public static readonly BLOCK_DECREMENT: int
        public static readonly BLOCK_INCREMENT: int
        public static readonly TRACK: int
        adjustable: java.awt.Adjustable
        value: int
        adjustmentType: int
        isAdjusting: boolean
        public constructor(arg0: java.awt.Adjustable, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        public constructor(arg0: java.awt.Adjustable, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean)
        public getAdjustable(): java.awt.Adjustable
        public getValue(): number
        public getAdjustmentType(): number
        public getValueIsAdjusting(): boolean
        public paramString(): java.lang.String
      }

    }
  }
}
