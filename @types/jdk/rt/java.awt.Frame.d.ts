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
            public constructor()
            public constructor(arg0: java.awt.GraphicsConfiguration)
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.awt.GraphicsConfiguration)
            public addNotify(): void
            public getTitle(): string
            public setTitle(arg0: java.lang.String | string): void
            public getIconImage(): java.awt.Image
            public setIconImage(arg0: java.awt.Image): void
            public getMenuBar(): java.awt.MenuBar
            public setMenuBar(arg0: java.awt.MenuBar): void
            public isResizable(): boolean
            public setResizable(arg0: boolean): void
            public setState(arg0: int): void
            public setExtendedState(arg0: int): void
            public getState(): int
            public getExtendedState(): int
            public setMaximizedBounds(arg0: java.awt.Rectangle): void
            public getMaximizedBounds(): java.awt.Rectangle
            public setUndecorated(arg0: boolean): void
            public isUndecorated(): boolean
            public setOpacity(arg0: float): void
            public setShape(arg0: java.awt.Shape): void
            public setBackground(arg0: java.awt.Color): void
            public remove(arg0: java.awt.MenuComponent): void
            public removeNotify(): void
            protected paramString(): string
            public setCursor(arg0: int): void
            public getCursorType(): int
            public static getFrames(): java.awt.Frame[]
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}