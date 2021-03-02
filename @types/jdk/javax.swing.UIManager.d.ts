declare namespace javax {
  namespace swing {

    class UIManager implements java.io.Serializable {
      public constructor()
      public static getInstalledLookAndFeels(): javax.swing.UIManager$LookAndFeelInfo[]
      public static setInstalledLookAndFeels(arg0: javax.swing.UIManager$LookAndFeelInfo[]): void
      public static installLookAndFeel(arg0: javax.swing.UIManager$LookAndFeelInfo): void
      public static installLookAndFeel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      public static getLookAndFeel(): javax.swing.LookAndFeel
      public static createLookAndFeel(arg0: java.lang.String | string): javax.swing.LookAndFeel
      public static setLookAndFeel(arg0: javax.swing.LookAndFeel): void
      public static setLookAndFeel(arg0: java.lang.String | string): void
      public static getSystemLookAndFeelClassName(): java.lang.String
      public static getCrossPlatformLookAndFeelClassName(): java.lang.String
      public static getDefaults(): javax.swing.UIDefaults
      public static getFont(arg0: java.lang.Object | any): java.awt.Font
      public static getFont(arg0: java.lang.Object | any, arg1: java.util.Locale): java.awt.Font
      public static getColor(arg0: java.lang.Object | any): java.awt.Color
      public static getColor(arg0: java.lang.Object | any, arg1: java.util.Locale): java.awt.Color
      public static getIcon(arg0: java.lang.Object | any): javax.swing.Icon
      public static getIcon(arg0: java.lang.Object | any, arg1: java.util.Locale): javax.swing.Icon
      public static getBorder(arg0: java.lang.Object | any): javax.swing.border.Border
      public static getBorder(arg0: java.lang.Object | any, arg1: java.util.Locale): javax.swing.border.Border
      public static getString(arg0: java.lang.Object | any): java.lang.String
      public static getString(arg0: java.lang.Object | any, arg1: java.util.Locale): java.lang.String
      static getString(arg0: java.lang.Object | any, arg1: java.awt.Component): java.lang.String
      public static getInt(arg0: java.lang.Object | any): number
      public static getInt(arg0: java.lang.Object | any, arg1: java.util.Locale): number
      public static getBoolean(arg0: java.lang.Object | any): boolean
      public static getBoolean(arg0: java.lang.Object | any, arg1: java.util.Locale): boolean
      public static getInsets(arg0: java.lang.Object | any): java.awt.Insets
      public static getInsets(arg0: java.lang.Object | any, arg1: java.util.Locale): java.awt.Insets
      public static getDimension(arg0: java.lang.Object | any): java.awt.Dimension
      public static getDimension(arg0: java.lang.Object | any, arg1: java.util.Locale): java.awt.Dimension
      public static get(arg0: java.lang.Object | any): java.lang.Object
      public static get(arg0: java.lang.Object | any, arg1: java.util.Locale): java.lang.Object
      public static put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public static getUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
      public static getLookAndFeelDefaults(): javax.swing.UIDefaults
      public static addAuxiliaryLookAndFeel(arg0: javax.swing.LookAndFeel): void
      public static removeAuxiliaryLookAndFeel(arg0: javax.swing.LookAndFeel): boolean
      public static getAuxiliaryLookAndFeels(): javax.swing.LookAndFeel[]
      public static addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
      public static removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
      public static getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
    }

  }
}
