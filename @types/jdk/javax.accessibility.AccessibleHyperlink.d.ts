declare namespace javax {
  namespace accessibility {

    abstract class AccessibleHyperlink implements javax.accessibility.AccessibleAction {
      public constructor()
      public abstract isValid(): boolean
      public abstract getAccessibleActionCount(): int
      public abstract doAccessibleAction(arg0: int): boolean
      public abstract getAccessibleActionDescription(arg0: int): java.lang.String
      public abstract getAccessibleActionObject(arg0: int): java.lang.Object
      public abstract getAccessibleActionAnchor(arg0: int): java.lang.Object
      public abstract getStartIndex(): int
      public abstract getEndIndex(): int
    }

  }
}
