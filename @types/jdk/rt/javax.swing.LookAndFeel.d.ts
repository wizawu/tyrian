declare namespace javax {
    namespace swing {
        abstract class LookAndFeel {
            public constructor()
            public static installColors(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: java.lang.String | string, arg2: java.lang.String | string): void
            public static installColorsAndFont(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
            public static installBorder(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: java.lang.String | string): void
            public static uninstallBorder(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
            public static installProperty(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: java.lang.String | string, arg2: java.lang.Object): void
            public static makeKeyBindings(arg0: java.lang.Object[]): javax.swing.text.JTextComponent$KeyBinding[]
            public static makeInputMap(arg0: java.lang.Object[]): javax.swing.InputMap
            public static makeComponentInputMap(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: java.lang.Object[]): javax.swing.ComponentInputMap
            public static loadKeyBindings(arg0: javax.swing.InputMap, arg1: java.lang.Object[]): void
            public static makeIcon(arg0: java.lang.Class<any>, arg1: java.lang.String | string): java.lang.Object
            public getLayoutStyle(): javax.swing.LayoutStyle
            public provideErrorFeedback(arg0: java.awt.Component): void
            public static getDesktopPropertyValue(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
            public getDisabledIcon(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: javax.swing.Icon): javax.swing.Icon
            public getDisabledSelectedIcon(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: javax.swing.Icon): javax.swing.Icon
            public getName(): string
            public getID(): string
            public getDescription(): string
            public getSupportsWindowDecorations(): boolean
            public isNativeLookAndFeel(): boolean
            public isSupportedLookAndFeel(): boolean
            public initialize(): void
            public uninitialize(): void
            public getDefaults(): javax.swing.UIDefaults
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}