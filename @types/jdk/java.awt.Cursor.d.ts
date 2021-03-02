declare namespace java {
  namespace awt {

    class Cursor implements java.io.Serializable {
      public static readonly DEFAULT_CURSOR: int
      public static readonly CROSSHAIR_CURSOR: int
      public static readonly TEXT_CURSOR: int
      public static readonly WAIT_CURSOR: int
      public static readonly SW_RESIZE_CURSOR: int
      public static readonly SE_RESIZE_CURSOR: int
      public static readonly NW_RESIZE_CURSOR: int
      public static readonly NE_RESIZE_CURSOR: int
      public static readonly N_RESIZE_CURSOR: int
      public static readonly S_RESIZE_CURSOR: int
      public static readonly W_RESIZE_CURSOR: int
      public static readonly E_RESIZE_CURSOR: int
      public static readonly HAND_CURSOR: int
      public static readonly MOVE_CURSOR: int
      protected static predefined: java.awt.Cursor[]
      static readonly cursorProperties: java.lang.String[][]
      type: int
      public static readonly CUSTOM_CURSOR: int
      disposer: java.awt.Cursor$CursorDisposer
      protected name: java.lang.String
      public static getPredefinedCursor(arg0: int): java.awt.Cursor
      public static getSystemCustomCursor(arg0: java.lang.String): java.awt.Cursor
      public static getDefaultCursor(): java.awt.Cursor
      public constructor(arg0: int)
      protected constructor(arg0: java.lang.String)
      public getType(): int
      public getName(): java.lang.String
      public toString(): java.lang.String
    }

  }
}
