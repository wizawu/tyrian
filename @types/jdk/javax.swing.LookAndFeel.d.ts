declare namespace javax {
  namespace swing {

    abstract class LookAndFeel {
      public constructor()
      public static installColors(arg0: javax.swing.JComponent, arg1: java.lang.String | string, arg2: java.lang.String | string): void
      public static installColorsAndFont(arg0: javax.swing.JComponent, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
      public static installBorder(arg0: javax.swing.JComponent, arg1: java.lang.String | string): void
      public static uninstallBorder(arg0: javax.swing.JComponent): void
      public static installProperty(arg0: javax.swing.JComponent, arg1: java.lang.String | string, arg2: java.lang.Object | any): void
      public static makeKeyBindings(arg0: java.lang.Object[] | any[]): javax.swing.text.JTextComponent$KeyBinding[]
      public static makeInputMap(arg0: java.lang.Object[] | any[]): javax.swing.InputMap
      public static makeComponentInputMap(arg0: javax.swing.JComponent, arg1: java.lang.Object[] | any[]): javax.swing.ComponentInputMap
      public static loadKeyBindings(arg0: javax.swing.InputMap, arg1: java.lang.Object[] | any[]): void
      public static makeIcon(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string): java.lang.Object
      public getLayoutStyle(): javax.swing.LayoutStyle
      public provideErrorFeedback(arg0: java.awt.Component): void
      public static getDesktopPropertyValue(arg0: java.lang.String | string, arg1: java.lang.Object | any): java.lang.Object
      public getDisabledIcon(arg0: javax.swing.JComponent, arg1: javax.swing.Icon): javax.swing.Icon
      public getDisabledSelectedIcon(arg0: javax.swing.JComponent, arg1: javax.swing.Icon): javax.swing.Icon
      public abstract getName(): java.lang.String
      public abstract getID(): java.lang.String
      public abstract getDescription(): java.lang.String
      public getSupportsWindowDecorations(): boolean
      public abstract isNativeLookAndFeel(): boolean
      public abstract isSupportedLookAndFeel(): boolean
      public initialize(): void
      public uninitialize(): void
      public getDefaults(): javax.swing.UIDefaults
      public toString(): java.lang.String
    }

  }
}
