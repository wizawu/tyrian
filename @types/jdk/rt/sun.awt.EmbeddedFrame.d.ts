declare namespace sun {
    namespace awt {
        abstract class EmbeddedFrame extends java.awt.Frame implements java.awt.KeyEventDispatcher , java.beans.PropertyChangeListener {
            protected static readonly FORWARD: boolean
            protected static readonly BACKWARD: boolean
            public supportsXEmbed(): boolean
            protected constructor(arg0: boolean)
            protected constructor()
            protected constructor(arg0: int)
            protected constructor(arg0: long)
            protected constructor(arg0: long, arg1: boolean)
            public getParent(): java.awt.Container
            public propertyChange(arg0: java.beans.PropertyChangeEvent): void
            public registerListeners(): void
            public show(): void
            public hide(): void
            public dispatchKeyEvent(arg0: java.awt.event.KeyEvent): boolean
            public traverseIn(arg0: boolean): boolean
            protected traverseOut(arg0: boolean): boolean
            public setTitle(arg0: java.lang.String | string): void
            public setIconImage(arg0: java.awt.Image): void
            public setIconImages(arg0: java.util.List<java.awt.Image>): void
            public setMenuBar(arg0: java.awt.MenuBar): void
            public setResizable(arg0: boolean): void
            public remove(arg0: java.awt.MenuComponent): void
            public isResizable(): boolean
            public addNotify(): void
            public setCursorAllowed(arg0: boolean): void
            public isCursorAllowed(): boolean
            public getCursor(): java.awt.Cursor
            protected setPeer(arg0: java.awt.peer.ComponentPeer): void
            public synthesizeWindowActivation(arg0: boolean): void
            protected setLocationPrivate(arg0: int, arg1: int): void
            protected getLocationPrivate(): java.awt.Point
            protected setBoundsPrivate(arg0: int, arg1: int, arg2: int, arg3: int): void
            protected getBoundsPrivate(): java.awt.Rectangle
            public toFront(): void
            public toBack(): void
            public abstract registerAccelerator(arg0: java.awt.AWTKeyStroke): void
            public abstract unregisterAccelerator(arg0: java.awt.AWTKeyStroke): void
            public static getAppletIfAncestorOf(arg0: java.awt.Component): java.applet.Applet
            public notifyModalBlocked(arg0: java.awt.Dialog, arg1: boolean): void
            public static class: java.lang.Class<any>
        }
    }
}