declare namespace java {
    namespace awt {
class Frame extends java.awt.Window implements java.awt.MenuContainer {
    public static DEFAULT_CURSOR: int
    public static CROSSHAIR_CURSOR: int
    public static TEXT_CURSOR: int
    public static WAIT_CURSOR: int
    public static SW_RESIZE_CURSOR: int
    public static SE_RESIZE_CURSOR: int
    public static NW_RESIZE_CURSOR: int
    public static NE_RESIZE_CURSOR: int
    public static N_RESIZE_CURSOR: int
    public static S_RESIZE_CURSOR: int
    public static W_RESIZE_CURSOR: int
    public static E_RESIZE_CURSOR: int
    public static HAND_CURSOR: int
    public static MOVE_CURSOR: int
    public static NORMAL: int
    public static ICONIFIED: int
    public static MAXIMIZED_HORIZ: int
    public static MAXIMIZED_VERT: int
    public static MAXIMIZED_BOTH: int
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
    public setMenuBar(arg0: java.awt.MenuBar | java.awt.MenuBar$$Lambda): void
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