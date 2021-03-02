declare namespace javax {
  namespace accessibility {

    abstract class AccessibleHyperlink implements javax.accessibility.AccessibleAction {
      public constructor()
      public abstract isValid(): boolean
      public abstract getAccessibleActionCount(): number
      public abstract doAccessibleAction(arg0: number | java.lang.Integer): boolean
      public abstract getAccessibleActionDescription(arg0: number | java.lang.Integer): java.lang.String
      public abstract getAccessibleActionObject(arg0: number | java.lang.Integer): java.lang.Object
      public abstract getAccessibleActionAnchor(arg0: number | java.lang.Integer): java.lang.Object
      public abstract getStartIndex(): number
      public abstract getEndIndex(): number
    }

  }
}
