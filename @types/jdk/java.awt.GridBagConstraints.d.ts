declare namespace java {
  namespace awt {

    class GridBagConstraints implements java.lang.Cloneable, java.io.Serializable {

      public static readonly RELATIVE: int
      public static readonly REMAINDER: int
      public static readonly NONE: int
      public static readonly BOTH: int
      public static readonly HORIZONTAL: int
      public static readonly VERTICAL: int
      public static readonly CENTER: int
      public static readonly NORTH: int
      public static readonly NORTHEAST: int
      public static readonly EAST: int
      public static readonly SOUTHEAST: int
      public static readonly SOUTH: int
      public static readonly SOUTHWEST: int
      public static readonly WEST: int
      public static readonly NORTHWEST: int
      public static readonly PAGE_START: int
      public static readonly PAGE_END: int
      public static readonly LINE_START: int
      public static readonly LINE_END: int
      public static readonly FIRST_LINE_START: int
      public static readonly FIRST_LINE_END: int
      public static readonly LAST_LINE_START: int
      public static readonly LAST_LINE_END: int
      public static readonly BASELINE: int
      public static readonly BASELINE_LEADING: int
      public static readonly BASELINE_TRAILING: int
      public static readonly ABOVE_BASELINE: int
      public static readonly ABOVE_BASELINE_LEADING: int
      public static readonly ABOVE_BASELINE_TRAILING: int
      public static readonly BELOW_BASELINE: int
      public static readonly BELOW_BASELINE_LEADING: int
      public static readonly BELOW_BASELINE_TRAILING: int
      public gridx: int
      public gridy: int
      public gridwidth: int
      public gridheight: int
      public weightx: double
      public weighty: double
      public anchor: int
      public fill: int
      public insets: java.awt.Insets
      public ipadx: int
      public ipady: int
      tempX: int
      tempY: int
      tempWidth: int
      tempHeight: int
      minWidth: int
      minHeight: int
      ascent: int
      descent: int
      baselineResizeBehavior: java.awt.Component$BaselineResizeBehavior
      centerPadding: int
      centerOffset: int
      public constructor()
      public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: double, arg5: double, arg6: int, arg7: int, arg8: java.awt.Insets, arg9: int, arg10: int)
      public clone(): java.lang.Object
      isVerticallyResizable(): boolean
    }

  }
}
