declare namespace java {
  namespace awt {
    class SystemTray {
      public static getSystemTray(): java.awt.SystemTray
      public static isSupported(): boolean
      public add(arg0: java.awt.TrayIcon): void
      public remove(arg0: java.awt.TrayIcon): void
      public getTrayIcons(): java.awt.TrayIcon[]
      public getTrayIconSize(): java.awt.Dimension
      public addPropertyChangeListener(
        arg0: java.lang.String | string,
        arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public removePropertyChangeListener(
        arg0: java.lang.String | string,
        arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public getPropertyChangeListeners(arg0: java.lang.String | string): java.beans.PropertyChangeListener[]
      addNotify(): void
      static checkSystemTrayAllowed(): void
    }
  }
}
