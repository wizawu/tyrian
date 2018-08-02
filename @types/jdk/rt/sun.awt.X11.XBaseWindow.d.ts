declare namespace sun {
    namespace awt {
        namespace X11 {
            class XBaseWindow {
                public static PARENT_WINDOW: string
                public static BOUNDS: string
                public static OVERRIDE_REDIRECT: string
                public static EVENT_MASK: string
                public static VALUE_MASK: string
                public static BORDER_PIXEL: string
                public static COLORMAP: string
                public static DEPTH: string
                public static VISUAL_CLASS: string
                public static VISUAL: string
                public static EMBEDDED: string
                public static DELAYED: string
                public static PARENT: string
                public static BACKGROUND_PIXMAP: string
                public static VISIBLE: string
                public static SAVE_UNDER: string
                public static BACKING_STORE: string
                public static BIT_GRAVITY: string
                protected state_lock: sun.awt.X11.XBaseWindow$StateLock
                protected init(arg0: long, arg1: java.awt.Rectangle): void
                protected preInit(): void
                protected postInit(): void
                protected init(arg0: sun.awt.X11.XCreateWindowParams): void
                public checkInitialised(): boolean
                public constructor(arg0: sun.awt.X11.XCreateWindowParams)
                protected checkParams(arg0: sun.awt.X11.XCreateWindowParams): void
                public getDelayedParams(): sun.awt.X11.XCreateWindowParams
                protected getWMName(): string
                protected initClientLeader(): void
                public setWMHints(arg0: sun.awt.X11.XWMHints): void
                public getWMHints(): sun.awt.X11.XWMHints
                public getHints(): sun.awt.X11.XSizeHints
                public setSizeHints(arg0: long, arg1: int, arg2: int, arg3: int, arg4: int): void
                public isMinSizeSet(): boolean
                public getWindow(): long
                public getContentWindow(): long
                public getContentXWindow(): sun.awt.X11.XBaseWindow
                public getBounds(): java.awt.Rectangle
                public getSize(): java.awt.Dimension
                public toFront(): void
                public xRequestFocus(arg0: long): void
                public xRequestFocus(): void
                public static xGetInputFocus(): long
                public xSetVisible(arg0: boolean): void
                public xSetBounds(arg0: java.awt.Rectangle): void
                public xSetBounds(arg0: int, arg1: int, arg2: int, arg3: int): void
                public grabInput(): boolean
                public getChildren(): java.util.Set<java.lang.Long>
                public handleMapNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public handleUnmapNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public handleReparentNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public handlePropertyNotify(arg0: sun.awt.X11.XEvent): void
                public handleDestroyNotify(arg0: sun.awt.X11.XEvent): void
                public handleCreateNotify(arg0: sun.awt.X11.XEvent): void
                public handleClientMessage(arg0: sun.awt.X11.XEvent): void
                public handleVisibilityEvent(arg0: sun.awt.X11.XEvent): void
                public handleKeyPress(arg0: sun.awt.X11.XEvent): void
                public handleKeyRelease(arg0: sun.awt.X11.XEvent): void
                public handleExposeEvent(arg0: sun.awt.X11.XEvent): void
                public handleButtonPressRelease(arg0: sun.awt.X11.XEvent): void
                public handleMotionNotify(arg0: sun.awt.X11.XEvent): void
                public handleXCrossingEvent(arg0: sun.awt.X11.XEvent): void
                public handleConfigureNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public dispatchEvent(arg0: sun.awt.X11.XEvent): void
                protected isEventDisabled(arg0: sun.awt.X11.XEvent): boolean
                public getAbsoluteX(): int
                public getAbsoluteY(): int
                public getParentWindow(): sun.awt.X11.XBaseWindow
                public getToplevelXWindow(): sun.awt.X11.XWindowPeer
                public toString(): string
                public contains(arg0: int, arg1: int): boolean
                public containsGlobal(arg0: int, arg1: int): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}