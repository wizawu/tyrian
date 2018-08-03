declare namespace javax {
    namespace swing {
        class UIDefaults extends java.util.Hashtable<java.lang.Object, java.lang.Object> {
            public constructor()
            public constructor(arg0: int, arg1: float)
            public constructor(arg0: java.lang.Object[])
            public get(arg0: java.lang.Object): java.lang.Object
            public get(arg0: java.lang.Object, arg1: java.util.Locale): java.lang.Object
            public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
            public putDefaults(arg0: java.lang.Object[]): void
            public getFont(arg0: java.lang.Object): java.awt.Font
            public getFont(arg0: java.lang.Object, arg1: java.util.Locale): java.awt.Font
            public getColor(arg0: java.lang.Object): java.awt.Color
            public getColor(arg0: java.lang.Object, arg1: java.util.Locale): java.awt.Color
            public getIcon(arg0: java.lang.Object): javax.swing.Icon
            public getIcon(arg0: java.lang.Object, arg1: java.util.Locale): javax.swing.Icon
            public getBorder(arg0: java.lang.Object): javax.swing.border.Border
            public getBorder(arg0: java.lang.Object, arg1: java.util.Locale): javax.swing.border.Border
            public getString(arg0: java.lang.Object): string
            public getString(arg0: java.lang.Object, arg1: java.util.Locale): string
            public getInt(arg0: java.lang.Object): int
            public getInt(arg0: java.lang.Object, arg1: java.util.Locale): int
            public getBoolean(arg0: java.lang.Object): boolean
            public getBoolean(arg0: java.lang.Object, arg1: java.util.Locale): boolean
            public getInsets(arg0: java.lang.Object): java.awt.Insets
            public getInsets(arg0: java.lang.Object, arg1: java.util.Locale): java.awt.Insets
            public getDimension(arg0: java.lang.Object): java.awt.Dimension
            public getDimension(arg0: java.lang.Object, arg1: java.util.Locale): java.awt.Dimension
            public getUIClass(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): java.lang.Class<javax.swing.plaf.ComponentUI>
            public getUIClass(arg0: java.lang.String | string): java.lang.Class<javax.swing.plaf.ComponentUI>
            protected getUIError(arg0: java.lang.String | string): void
            public getUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
            public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
            protected firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
            public addResourceBundle(arg0: java.lang.String | string): void
            public removeResourceBundle(arg0: java.lang.String | string): void
            public setDefaultLocale(arg0: java.util.Locale): void
            public getDefaultLocale(): java.util.Locale
            public static class: java.lang.Class<any>
        }
    }
}