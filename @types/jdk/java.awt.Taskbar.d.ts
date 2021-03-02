declare namespace java {
  namespace awt {

    class Taskbar {
      public isSupported(arg0: java.awt.Taskbar$Feature): boolean
      public static getTaskbar(): java.awt.Taskbar
      public static isTaskbarSupported(): boolean
      public requestUserAttention(arg0: boolean, arg1: boolean): void
      public requestWindowUserAttention(arg0: java.awt.Window): void
      public setMenu(arg0: java.awt.PopupMenu): void
      public getMenu(): java.awt.PopupMenu
      public setIconImage(arg0: java.awt.Image): void
      public getIconImage(): java.awt.Image
      public setIconBadge(arg0: java.lang.String): void
      public setWindowIconBadge(arg0: java.awt.Window, arg1: java.awt.Image): void
      public setProgressValue(arg0: int): void
      public setWindowProgressValue(arg0: java.awt.Window, arg1: int): void
      public setWindowProgressState(arg0: java.awt.Window, arg1: java.awt.Taskbar$State): void
    }

  }
}
