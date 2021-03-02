declare namespace javax {
  namespace accessibility {

    interface AccessibleAction {
      public static readonly TOGGLE_EXPAND: java.lang.String
      public static readonly INCREMENT: java.lang.String
      public static readonly DECREMENT: java.lang.String
      public static readonly CLICK: java.lang.String
      public static readonly TOGGLE_POPUP: java.lang.String
      getAccessibleActionCount(): int
      getAccessibleActionDescription(arg0: int): java.lang.String
      doAccessibleAction(arg0: int): boolean
    }

  }
}
