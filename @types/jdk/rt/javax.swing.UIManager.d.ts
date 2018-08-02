declare namespace javax {
    namespace swing {
class UIManager implements java.io.Serializable {
    public constructor()
    public static getInstalledLookAndFeels(): javax.swing.UIManager$LookAndFeelInfo[]
    public static setInstalledLookAndFeels(arg0: javax.swing.UIManager$LookAndFeelInfo[]): void
    public static installLookAndFeel(arg0: javax.swing.UIManager$LookAndFeelInfo): void
    public static installLookAndFeel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public static getLookAndFeel(): javax.swing.LookAndFeel
    public static setLookAndFeel(arg0: javax.swing.LookAndFeel): void
    public static setLookAndFeel(arg0: java.lang.String | string): void
    public static getSystemLookAndFeelClassName(): string
    public static getCrossPlatformLookAndFeelClassName(): string
    public static getDefaults(): javax.swing.UIDefaults
    public static getFont(arg0: java.lang.Object): java.awt.Font
    public static getFont(arg0: java.lang.Object, arg1: java.util.Locale): java.awt.Font
    public static getColor(arg0: java.lang.Object): java.awt.Color
    public static getColor(arg0: java.lang.Object, arg1: java.util.Locale): java.awt.Color
    public static getIcon(arg0: java.lang.Object): javax.swing.Icon
    public static getIcon(arg0: java.lang.Object, arg1: java.util.Locale): javax.swing.Icon
    public static getBorder(arg0: java.lang.Object): javax.swing.border.Border
    public static getBorder(arg0: java.lang.Object, arg1: java.util.Locale): javax.swing.border.Border
    public static getString(arg0: java.lang.Object): string
    public static getString(arg0: java.lang.Object, arg1: java.util.Locale): string
    public static getInt(arg0: java.lang.Object): int
    public static getInt(arg0: java.lang.Object, arg1: java.util.Locale): int
    public static getBoolean(arg0: java.lang.Object): boolean
    public static getBoolean(arg0: java.lang.Object, arg1: java.util.Locale): boolean
    public static getInsets(arg0: java.lang.Object): java.awt.Insets
    public static getInsets(arg0: java.lang.Object, arg1: java.util.Locale): java.awt.Insets
    public static getDimension(arg0: java.lang.Object): java.awt.Dimension
    public static getDimension(arg0: java.lang.Object, arg1: java.util.Locale): java.awt.Dimension
    public static get(arg0: java.lang.Object): java.lang.Object
    public static get(arg0: java.lang.Object, arg1: java.util.Locale): java.lang.Object
    public static put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static getUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
    public static getLookAndFeelDefaults(): javax.swing.UIDefaults
    public static addAuxiliaryLookAndFeel(arg0: javax.swing.LookAndFeel): void
    public static removeAuxiliaryLookAndFeel(arg0: javax.swing.LookAndFeel): boolean
    public static getAuxiliaryLookAndFeels(): javax.swing.LookAndFeel[]
    public static addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public static removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public static getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
    public static class: java.lang.Class<any>
}

    }
}