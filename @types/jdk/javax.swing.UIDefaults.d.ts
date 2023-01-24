declare namespace javax {
  namespace swing {
    class UIDefaults extends java.util.Hashtable<java.lang.Object, java.lang.Object> {
      public constructor()
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float)
      public constructor(arg0: java.lang.Object[] | any[])
      public get(arg0: java.lang.Object | any): java.lang.Object
      public get(arg0: java.lang.Object | any, arg1: java.util.Locale): java.lang.Object
      public put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public putDefaults(arg0: java.lang.Object[] | any[]): void
      public getFont(arg0: java.lang.Object | any): java.awt.Font
      public getFont(arg0: java.lang.Object | any, arg1: java.util.Locale): java.awt.Font
      public getColor(arg0: java.lang.Object | any): java.awt.Color
      public getColor(arg0: java.lang.Object | any, arg1: java.util.Locale): java.awt.Color
      public getIcon(arg0: java.lang.Object | any): javax.swing.Icon
      public getIcon(arg0: java.lang.Object | any, arg1: java.util.Locale): javax.swing.Icon
      public getBorder(arg0: java.lang.Object | any): javax.swing.border.Border
      public getBorder(arg0: java.lang.Object | any, arg1: java.util.Locale): javax.swing.border.Border
      public getString(arg0: java.lang.Object | any): java.lang.String
      public getString(arg0: java.lang.Object | any, arg1: java.util.Locale): java.lang.String
      public getInt(arg0: java.lang.Object | any): number
      public getInt(arg0: java.lang.Object | any, arg1: java.util.Locale): number
      public getBoolean(arg0: java.lang.Object | any): boolean
      public getBoolean(arg0: java.lang.Object | any, arg1: java.util.Locale): boolean
      public getInsets(arg0: java.lang.Object | any): java.awt.Insets
      public getInsets(arg0: java.lang.Object | any, arg1: java.util.Locale): java.awt.Insets
      public getDimension(arg0: java.lang.Object | any): java.awt.Dimension
      public getDimension(arg0: java.lang.Object | any, arg1: java.util.Locale): java.awt.Dimension
      public getUIClass(
        arg0: java.lang.String | string,
        arg1: java.lang.ClassLoader
      ): java.lang.Class<javax.swing.plaf.ComponentUI>
      public getUIClass(arg0: java.lang.String | string): java.lang.Class<javax.swing.plaf.ComponentUI>
      protected getUIError(arg0: java.lang.String | string): void
      public getUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
      public addPropertyChangeListener(
        arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public removePropertyChangeListener(
        arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
      protected firePropertyChange(
        arg0: java.lang.String | string,
        arg1: java.lang.Object | any,
        arg2: java.lang.Object | any
      ): void
      public addResourceBundle(arg0: java.lang.String | string): void
      public removeResourceBundle(arg0: java.lang.String | string): void
      public setDefaultLocale(arg0: java.util.Locale): void
      public getDefaultLocale(): java.util.Locale
    }
  }
}
