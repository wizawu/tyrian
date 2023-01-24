declare namespace com {
  namespace sun {
    namespace java {
      namespace accessibility {
        namespace util {
          class Translator
            extends javax.accessibility.AccessibleContext
            implements javax.accessibility.Accessible, javax.accessibility.AccessibleComponent
          {
            protected source: java.lang.Object
            protected static getTranslatorClass(arg0: java.lang.Class<unknown>): java.lang.Class<unknown>
            public static getAccessible(arg0: java.lang.Object | any): javax.accessibility.Accessible
            public constructor()
            public constructor(arg0: java.lang.Object | any)
            public getSource(): java.lang.Object
            public setSource(arg0: java.lang.Object | any): void
            public equals(arg0: java.lang.Object | any): boolean
            public hashCode(): number
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public getAccessibleName(): java.lang.String
            public setAccessibleName(arg0: java.lang.String | string): void
            public getAccessibleDescription(): java.lang.String
            public setAccessibleDescription(arg0: java.lang.String | string): void
            public getAccessibleRole(): javax.accessibility.AccessibleRole
            public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
            public getAccessibleParent(): javax.accessibility.Accessible
            public getAccessibleIndexInParent(): number
            public getAccessibleChildrenCount(): number
            public getAccessibleChild(arg0: number | java.lang.Integer): javax.accessibility.Accessible
            public getLocale(): java.util.Locale
            public addPropertyChangeListener(
              arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
            ): void
            public removePropertyChangeListener(
              arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
            ): void
            public getBackground(): java.awt.Color
            public setBackground(arg0: java.awt.Color): void
            public getForeground(): java.awt.Color
            public setForeground(arg0: java.awt.Color): void
            public getCursor(): java.awt.Cursor
            public setCursor(arg0: java.awt.Cursor): void
            public getFont(): java.awt.Font
            public setFont(arg0: java.awt.Font): void
            public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public isEnabled(): boolean
            public setEnabled(arg0: boolean | java.lang.Boolean): void
            public isVisible(): boolean
            public setVisible(arg0: boolean | java.lang.Boolean): void
            public isShowing(): boolean
            public contains(arg0: java.awt.Point): boolean
            public getLocationOnScreen(): java.awt.Point
            public getLocation(): java.awt.Point
            public setLocation(arg0: java.awt.Point): void
            public getBounds(): java.awt.Rectangle
            public setBounds(arg0: java.awt.Rectangle): void
            public getSize(): java.awt.Dimension
            public setSize(arg0: java.awt.Dimension): void
            public getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
            public isFocusTraversable(): boolean
            public requestFocus(): void
            public addFocusListener(arg0: java.awt.event.FocusListener): void
            public removeFocusListener(arg0: java.awt.event.FocusListener): void
          }
        }
      }
    }
  }
}
