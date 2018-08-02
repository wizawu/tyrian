declare namespace sun {
    namespace awt {
        namespace X11 {
            class XWarningWindow extends sun.awt.X11.XWindow {
                public reposition(arg0: int, arg1: int, arg2: int, arg3: int): void
                protected getWMName(): string
                public getGraphics(): java.awt.Graphics
                public repaint(): void
                public handleExposeEvent(arg0: sun.awt.X11.XEvent): void
                protected isEventDisabled(arg0: sun.awt.X11.XEvent): boolean
                protected stateChanged(arg0: long, arg1: int, arg2: int): void
                protected setMouseAbove(arg0: boolean): void
                protected enterNotify(arg0: long): void
                protected leaveNotify(arg0: long): void
                public xSetVisible(arg0: boolean): void
                public setSecurityWarningVisible(arg0: boolean, arg1: boolean): void
                public static class: java.lang.Class<any>
            }
        }
    }
}