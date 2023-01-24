declare namespace java {
  namespace awt {
    class Event implements java.io.Serializable {
      public static readonly SHIFT_MASK: int
      public static readonly CTRL_MASK: int
      public static readonly META_MASK: int
      public static readonly ALT_MASK: int
      public static readonly HOME: int
      public static readonly END: int
      public static readonly PGUP: int
      public static readonly PGDN: int
      public static readonly UP: int
      public static readonly DOWN: int
      public static readonly LEFT: int
      public static readonly RIGHT: int
      public static readonly F1: int
      public static readonly F2: int
      public static readonly F3: int
      public static readonly F4: int
      public static readonly F5: int
      public static readonly F6: int
      public static readonly F7: int
      public static readonly F8: int
      public static readonly F9: int
      public static readonly F10: int
      public static readonly F11: int
      public static readonly F12: int
      public static readonly PRINT_SCREEN: int
      public static readonly SCROLL_LOCK: int
      public static readonly CAPS_LOCK: int
      public static readonly NUM_LOCK: int
      public static readonly PAUSE: int
      public static readonly INSERT: int
      public static readonly ENTER: int
      public static readonly BACK_SPACE: int
      public static readonly TAB: int
      public static readonly ESCAPE: int
      public static readonly DELETE: int
      public static readonly WINDOW_DESTROY: int
      public static readonly WINDOW_EXPOSE: int
      public static readonly WINDOW_ICONIFY: int
      public static readonly WINDOW_DEICONIFY: int
      public static readonly WINDOW_MOVED: int
      public static readonly KEY_PRESS: int
      public static readonly KEY_RELEASE: int
      public static readonly KEY_ACTION: int
      public static readonly KEY_ACTION_RELEASE: int
      public static readonly MOUSE_DOWN: int
      public static readonly MOUSE_UP: int
      public static readonly MOUSE_MOVE: int
      public static readonly MOUSE_ENTER: int
      public static readonly MOUSE_EXIT: int
      public static readonly MOUSE_DRAG: int
      public static readonly SCROLL_LINE_UP: int
      public static readonly SCROLL_LINE_DOWN: int
      public static readonly SCROLL_PAGE_UP: int
      public static readonly SCROLL_PAGE_DOWN: int
      public static readonly SCROLL_ABSOLUTE: int
      public static readonly SCROLL_BEGIN: int
      public static readonly SCROLL_END: int
      public static readonly LIST_SELECT: int
      public static readonly LIST_DESELECT: int
      public static readonly ACTION_EVENT: int
      public static readonly LOAD_FILE: int
      public static readonly SAVE_FILE: int
      public static readonly GOT_FOCUS: int
      public static readonly LOST_FOCUS: int
      public target: java.lang.Object
      public when: long
      public id: int
      public x: int
      public y: int
      public key: int
      public modifiers: int
      public clickCount: int
      public arg: java.lang.Object
      public evt: java.awt.Event
      public constructor(
        arg0: java.lang.Object | any,
        arg1: number | java.lang.Long,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: number | java.lang.Integer,
        arg7: java.lang.Object | any
      )
      public constructor(
        arg0: java.lang.Object | any,
        arg1: number | java.lang.Long,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: number | java.lang.Integer
      )
      public constructor(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: java.lang.Object | any)
      public translate(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public shiftDown(): boolean
      public controlDown(): boolean
      public metaDown(): boolean
      consume(): void
      isConsumed(): boolean
      static getOldEventKey(arg0: java.awt.event.KeyEvent): number
      getKeyEventChar(): string
      protected paramString(): java.lang.String
      public toString(): java.lang.String
    }
  }
}
