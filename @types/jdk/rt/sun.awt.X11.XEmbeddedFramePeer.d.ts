declare namespace sun {
    namespace awt {
        namespace X11 {
            class XEmbeddedFramePeer extends sun.awt.X11.XFramePeer {
                public constructor(arg0: sun.awt.EmbeddedFrame)
                public preInit(arg0: sun.awt.X11.XCreateWindowParams): void
                public dispose(): void
                public updateMinimumSize(): void
                protected getWMName(): string
                public requestWindowFocus(arg0: long, arg1: boolean): boolean
                protected requestInitialFocus(): void
                protected isEventDisabled(arg0: sun.awt.X11.XEvent): boolean
                public handleConfigureNotifyEvent(arg0: sun.awt.X11.XEvent): void
                protected traverseOutForward(): void
                protected traverseOutBackward(): void
                public getLocationOnScreen(): java.awt.Point
                public getBounds(): java.awt.Rectangle
                public setBoundsPrivate(arg0: int, arg1: int, arg2: int, arg3: int): void
                public getBoundsPrivate(): java.awt.Rectangle
                public getAbsoluteX(): int
                public getAbsoluteY(): int
                public getWidth(): int
                public getHeight(): int
                public getSize(): java.awt.Dimension
                public setModalBlocked(arg0: java.awt.Dialog, arg1: boolean): void
                public synthesizeFocusInOut(arg0: boolean): void
                public emulateActivation(arg0: boolean): void
                public print(arg0: java.awt.Graphics): void
                public setVisible(arg0: boolean): void
                public handleStateChange(arg0: int, arg1: int): void
                public handlePropertyNotify(arg0: sun.awt.X11.XEvent): void
                public setState(arg0: int): void
                public getState(): int
                public setMaximizedBounds(arg0: java.awt.Rectangle): void
                public setMenuBar(arg0: java.awt.MenuBar): void
                public handleWindowFocusOut(arg0: java.awt.Window, arg1: long): void
                public handleWindowFocusIn(arg0: long): void
                public handleQuit(): void
                public handleClientMessage(arg0: sun.awt.X11.XEvent): void
                public getLocation(): java.awt.Point
                public getY(): int
                public getX(): int
                public setResizable(arg0: boolean): void
                public setShellPosition(arg0: java.awt.Rectangle): void
                public setShellSize(arg0: java.awt.Rectangle): void
                public setShellBounds(arg0: java.awt.Rectangle): void
                public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
                public reshape(arg0: sun.awt.X11.WindowDimensions, arg1: int, arg2: boolean): void
                public getInsets(): java.awt.Insets
                public revalidate(): void
                public handleMoved(arg0: sun.awt.X11.WindowDimensions): void
                public handleReparentNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public handleFocusEvent(arg0: sun.awt.X11.XEvent): void
                public handleDeiconify(): void
                public handleIconify(): void
                public setTitle(arg0: java.lang.String | string): void
                public getGraphics(): java.awt.Graphics
                public getContentWindow(): long
                public getShell(): long
                public updateWindow(): void
                public setOpaque(arg0: boolean): void
                public setOpacity(arg0: float): void
                public handleButtonPressRelease(arg0: sun.awt.X11.XEvent): void
                public handleMotionNotify(arg0: sun.awt.X11.XEvent): void
                public handleXCrossingEvent(arg0: sun.awt.X11.XEvent): void
                public isGrabbed(): boolean
                public setGrab(arg0: boolean): void
                public setMWMHints(arg0: sun.awt.X11.PropMwmHints): void
                public getMWMHints(): sun.awt.X11.PropMwmHints
                public setNETWMState(arg0: sun.awt.X11.XAtomList): void
                public getNETWMState(): sun.awt.X11.XAtomList
                public updateFocusableWindowState(): void
                public removeDropTarget(): void
                public addDropTarget(): void
                public xSetVisible(arg0: boolean): void
                public requestWindowFocus(): boolean
                public requestWindowFocus(arg0: sun.awt.X11.XWindowPeer): boolean
                public setModalBlocked(arg0: java.awt.Dialog, arg1: boolean, arg2: java.util.Vector): void
                public removeToplevelStateListener(arg0: sun.awt.X11.ToplevelStateListener): void
                public addToplevelStateListener(arg0: sun.awt.X11.ToplevelStateListener): void
                public handleUnmapNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public handleMapNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public handleVisibilityEvent(arg0: sun.awt.X11.XEvent): void
                public updateSecurityWarningVisibility(): void
                public setFullScreenExclusiveModeState(arg0: boolean): void
                public repositionSecurityWarning(): void
                public updateAlwaysOnTopState(): void
                public toBack(): void
                public toFront(): void
                public paletteChanged(): void
                public displayChanged(): void
                public checkIfOnNewScreen(arg0: java.awt.Rectangle): void
                public handleWindowFocusOutSync(arg0: java.awt.Window, arg1: long): void
                public handleWindowFocusInSync(arg0: long): void
                public handleWindowFocusIn_Dispatch(): void
                public insets(): java.awt.Insets
                public getOwnerPeer(): sun.awt.X11.XWindowPeer
                public getTargetMinimumSize(): java.awt.Dimension
                public recursivelySetIcon(arg0: java.util.List): void
                public updateIconImages(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}