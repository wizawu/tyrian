declare namespace java {
  namespace awt {
    namespace event {

      class PaintEvent extends java.awt.event.ComponentEvent {

        public static readonly PAINT_FIRST: int
        public static readonly PAINT_LAST: int
        public static readonly PAINT: int
        public static readonly UPDATE: int
        updateRect: java.awt.Rectangle
        public constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.Rectangle)
        public getUpdateRect(): java.awt.Rectangle
        public setUpdateRect(arg0: java.awt.Rectangle): void
        public paramString(): java.lang.String
      }

    }
  }
}
