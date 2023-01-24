declare namespace javax {
  namespace accessibility {
    interface AccessibleAction {
      readonly TOGGLE_EXPAND: java.lang.String
      readonly INCREMENT: java.lang.String
      readonly DECREMENT: java.lang.String
      readonly CLICK: java.lang.String
      readonly TOGGLE_POPUP: java.lang.String
      getAccessibleActionCount(): number
      getAccessibleActionDescription(arg0: number | java.lang.Integer): java.lang.String
      doAccessibleAction(arg0: number | java.lang.Integer): boolean
    }
  }
}
