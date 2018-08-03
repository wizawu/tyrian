declare namespace sun {
    namespace awt {
        namespace X11 {
            abstract class XDecoratedPeer extends sun.awt.X11.XWindowPeer {
                public getShell(): long
                public getContentWindow(): long
                public updateMinimumSize(): void
                protected getWMProtocols(): sun.awt.X11.XAtomList
                public getGraphics(): java.awt.Graphics
                public setTitle(arg0: java.lang.String | string): void
                protected getWMName(): string
                public handleIconify(): void
                public handleDeiconify(): void
                public handleFocusEvent(arg0: sun.awt.X11.XEvent): void
                protected isInitialReshape(): boolean
                public handlePropertyNotify(arg0: sun.awt.X11.XEvent): void
                public handleReparentNotifyEvent(arg0: sun.awt.X11.XEvent): void
                protected handleCorrectInsets(arg0: java.awt.Insets): void
                public handleMoved(arg0: sun.awt.X11.WindowDimensions): void
                protected guessInsets(): java.awt.Insets
                public revalidate(): void
                public getInsets(): java.awt.Insets
                public reshape(arg0: sun.awt.X11.WindowDimensions, arg1: int, arg2: boolean): void
                public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
                public handleConfigureNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public setShellBounds(arg0: java.awt.Rectangle): void
                public setShellSize(arg0: java.awt.Rectangle): void
                public setShellPosition(arg0: java.awt.Rectangle): void
                public setResizable(arg0: boolean): void
                public getBounds(): java.awt.Rectangle
                public getSize(): java.awt.Dimension
                public getX(): int
                public getY(): int
                public getLocation(): java.awt.Point
                public getAbsoluteX(): int
                public getAbsoluteY(): int
                public getWidth(): int
                public getHeight(): int
                public getDimensions(): sun.awt.X11.WindowDimensions
                public getLocationOnScreen(): java.awt.Point
                protected isEventDisabled(arg0: sun.awt.X11.XEvent): boolean
                public setVisible(arg0: boolean): void
                protected suppressWmTakeFocus(arg0: boolean): void
                public dispose(): void
                public handleClientMessage(arg0: sun.awt.X11.XEvent): void
                protected requestXFocus(arg0: long, arg1: boolean): void
                public handleQuit(): void
                public requestWindowFocus(arg0: long, arg1: boolean): boolean
                public handleWindowFocusIn(arg0: long): void
                public handleWindowFocusOut(arg0: java.awt.Window, arg1: long): void
                public static class: java.lang.Class<any>
            }
        }
    }
}