declare namespace javax {
  namespace swing {

    abstract class AbstractAction implements javax.swing.Action, java.lang.Cloneable, java.io.Serializable {
      protected enabled: boolean
      protected changeSupport: javax.swing.event.SwingPropertyChangeSupport
      static shouldReconfigure(arg0: java.beans.PropertyChangeEvent): boolean
      static setEnabledFromAction(arg0: javax.swing.JComponent, arg1: javax.swing.Action): void
      static setToolTipTextFromAction(arg0: javax.swing.JComponent, arg1: javax.swing.Action): void
      static hasSelectedKey(arg0: javax.swing.Action): boolean
      static isSelected(arg0: javax.swing.Action): boolean
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: javax.swing.Icon)
      public getValue(arg0: java.lang.String | string): java.lang.Object
      public putValue(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      public isEnabled(): boolean
      public setEnabled(arg0: boolean | java.lang.Boolean): void
      public getKeys(): java.lang.Object[]
      protected firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.lang.Object | any): void
      public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
      public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
      public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
      protected clone(): java.lang.Object
    }

  }
}
