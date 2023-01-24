declare namespace javax {
  namespace swing {
    abstract class FocusManager extends java.awt.DefaultKeyboardFocusManager {
      public static readonly FOCUS_MANAGER_CLASS_PROPERTY: java.lang.String
      public constructor()
      public static getCurrentManager(): javax.swing.FocusManager
      public static setCurrentManager(arg0: javax.swing.FocusManager): void
      public static disableSwingFocusManager(): void
      public static isFocusManagerEnabled(): boolean
    }
  }
}
