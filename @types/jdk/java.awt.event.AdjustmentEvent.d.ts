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
        public constructor(arg0: java.awt.Adjustable, arg1: int, arg2: int, arg3: int)
        public constructor(arg0: java.awt.Adjustable, arg1: int, arg2: int, arg3: int, arg4: boolean)
        public getAdjustable(): java.awt.Adjustable
        public getValue(): int
        public getAdjustmentType(): int
        public getValueIsAdjusting(): boolean
        public paramString(): java.lang.String
      }

    }
  }
}
