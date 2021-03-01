declare namespace java {
  namespace awt {
    namespace event {

      class WindowEvent extends java.awt.event.ComponentEvent {

        public static readonly WINDOW_FIRST: int
        public static readonly WINDOW_OPENED: int
        public static readonly WINDOW_CLOSING: int
        public static readonly WINDOW_CLOSED: int
        public static readonly WINDOW_ICONIFIED: int
        public static readonly WINDOW_DEICONIFIED: int
        public static readonly WINDOW_ACTIVATED: int
        public static readonly WINDOW_DEACTIVATED: int
        public static readonly WINDOW_GAINED_FOCUS: int
        public static readonly WINDOW_LOST_FOCUS: int
        public static readonly WINDOW_STATE_CHANGED: int
        public static readonly WINDOW_LAST: int
        opposite: java.awt.Window
        oldState: int
        newState: int
        public constructor(arg0: java.awt.Window, arg1: int, arg2: java.awt.Window, arg3: int, arg4: int)
        public constructor(arg0: java.awt.Window, arg1: int, arg2: java.awt.Window)
        public constructor(arg0: java.awt.Window, arg1: int, arg2: int, arg3: int)
        public constructor(arg0: java.awt.Window, arg1: int)
        public getWindow(): java.awt.Window
        public getOppositeWindow(): java.awt.Window
        public getOldState(): int
        public getNewState(): int
        public paramString(): java.lang.String
      }

    }
  }
}
