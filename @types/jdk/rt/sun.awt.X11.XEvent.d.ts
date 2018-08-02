declare namespace sun {
    namespace awt {
        namespace X11 {
            class XEvent extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_type(): int
                public set_type(arg0: int): void
                public get_xany(): sun.awt.X11.XAnyEvent
                public get_xkey(): sun.awt.X11.XKeyEvent
                public get_xbutton(): sun.awt.X11.XButtonEvent
                public get_xmotion(): sun.awt.X11.XMotionEvent
                public get_xcrossing(): sun.awt.X11.XCrossingEvent
                public get_xfocus(): sun.awt.X11.XFocusChangeEvent
                public get_xexpose(): sun.awt.X11.XExposeEvent
                public get_xgraphicsexpose(): sun.awt.X11.XGraphicsExposeEvent
                public get_xnoexpose(): sun.awt.X11.XNoExposeEvent
                public get_xvisibility(): sun.awt.X11.XVisibilityEvent
                public get_xcreatewindow(): sun.awt.X11.XCreateWindowEvent
                public get_xdestroywindow(): sun.awt.X11.XDestroyWindowEvent
                public get_xunmap(): sun.awt.X11.XUnmapEvent
                public get_xmap(): sun.awt.X11.XMapEvent
                public get_xmaprequest(): sun.awt.X11.XMapRequestEvent
                public get_xreparent(): sun.awt.X11.XReparentEvent
                public get_xconfigure(): sun.awt.X11.XConfigureEvent
                public get_xgravity(): sun.awt.X11.XGravityEvent
                public get_xresizerequest(): sun.awt.X11.XResizeRequestEvent
                public get_xconfigurerequest(): sun.awt.X11.XConfigureRequestEvent
                public get_xcirculate(): sun.awt.X11.XCirculateEvent
                public get_xcirculaterequest(): sun.awt.X11.XCirculateRequestEvent
                public get_xproperty(): sun.awt.X11.XPropertyEvent
                public get_xselectionclear(): sun.awt.X11.XSelectionClearEvent
                public get_xselectionrequest(): sun.awt.X11.XSelectionRequestEvent
                public get_xselection(): sun.awt.X11.XSelectionEvent
                public get_xcolormap(): sun.awt.X11.XColormapEvent
                public get_xclient(): sun.awt.X11.XClientMessageEvent
                public get_xmapping(): sun.awt.X11.XMappingEvent
                public get_xerror(): sun.awt.X11.XErrorEvent
                public get_xkeymap(): sun.awt.X11.XKeymapEvent
                public get_pad(arg0: int): long
                public set_pad(arg0: int, arg1: long): void
                public get_pad(): long
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}