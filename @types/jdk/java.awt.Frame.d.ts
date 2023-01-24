declare namespace java {
  namespace awt {
    class Frame extends java.awt.Window implements java.awt.MenuContainer {
      public static readonly DEFAULT_CURSOR: int
      public static readonly CROSSHAIR_CURSOR: int
      public static readonly TEXT_CURSOR: int
      public static readonly WAIT_CURSOR: int
      public static readonly SW_RESIZE_CURSOR: int
      public static readonly SE_RESIZE_CURSOR: int
      public static readonly NW_RESIZE_CURSOR: int
      public static readonly NE_RESIZE_CURSOR: int
      public static readonly N_RESIZE_CURSOR: int
      public static readonly S_RESIZE_CURSOR: int
      public static readonly W_RESIZE_CURSOR: int
      public static readonly E_RESIZE_CURSOR: int
      public static readonly HAND_CURSOR: int
      public static readonly MOVE_CURSOR: int
      public static readonly NORMAL: int
      public static readonly ICONIFIED: int
      public static readonly MAXIMIZED_HORIZ: int
      public static readonly MAXIMIZED_VERT: int
      public static readonly MAXIMIZED_BOTH: int
      maximizedBounds: java.awt.Rectangle
      title: java.lang.String
      menuBar: java.awt.MenuBar
      resizable: boolean
      undecorated: boolean
      mbManagement: boolean
      ownedWindows: java.util.Vector<java.awt.Window>
      public constructor()
      public constructor(arg0: java.awt.GraphicsConfiguration)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.awt.GraphicsConfiguration)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getTitle(): java.lang.String
      public setTitle(arg0: java.lang.String | string): void
      public getIconImage(): java.awt.Image
      public setIconImage(arg0: java.awt.Image): void
      public getMenuBar(): java.awt.MenuBar
      public setMenuBar(arg0: java.awt.MenuBar): void
      public isResizable(): boolean
      public setResizable(arg0: boolean | java.lang.Boolean): void
      public setState(arg0: number | java.lang.Integer): void
      public setExtendedState(arg0: number | java.lang.Integer): void
      public getState(): number
      public getExtendedState(): number
      public setMaximizedBounds(arg0: java.awt.Rectangle): void
      public getMaximizedBounds(): java.awt.Rectangle
      public setUndecorated(arg0: boolean | java.lang.Boolean): void
      public isUndecorated(): boolean
      public setOpacity(arg0: number | java.lang.Float): void
      public setShape(arg0: java.awt.Shape): void
      public setBackground(arg0: java.awt.Color): void
      public remove(arg0: java.awt.MenuComponent): void
      public removeNotify(): void
      postProcessKeyEvent(arg0: java.awt.event.KeyEvent): void
      protected paramString(): java.lang.String
      public setCursor(arg0: number | java.lang.Integer): void
      public getCursorType(): number
      public static getFrames(): java.awt.Frame[]
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
