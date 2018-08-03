declare namespace sun {
    namespace awt {
        namespace X11 {
            class XComponentPeer extends sun.awt.X11.XWindow implements java.awt.peer.ComponentPeer , java.awt.dnd.peer.DropTargetPeer , sun.java2d.BackBufferCapsProvider {
                protected boundsOperation: int
                protected isInitialReshape(): boolean
                public reparent(arg0: java.awt.peer.ContainerPeer): void
                public isReparentSupported(): boolean
                public isObscured(): boolean
                public canDetermineObscurity(): boolean
                public hasFocus(): boolean
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public isFocusable(): boolean
                public requestFocus(arg0: java.awt.Component, arg1: boolean, arg2: boolean, arg3: long, arg4: sun.awt.CausedFocusEvent$Cause): boolean
                public setVisible(arg0: boolean): void
                public hide(): void
                public setEnabled(arg0: boolean): void
                public isEnabled(): boolean
                public paint(arg0: java.awt.Graphics): void
                public getGraphics(): java.awt.Graphics
                public print(arg0: java.awt.Graphics): void
                public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
                public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
                public coalescePaintEvent(arg0: java.awt.event.PaintEvent): void
                public handleEvent(arg0: java.awt.AWTEvent): void
                public getMinimumSize(): java.awt.Dimension
                public getPreferredSize(): java.awt.Dimension
                public layout(): void
                public drawMotif3DRect(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: boolean): void
                public setBackground(arg0: java.awt.Color): void
                public setForeground(arg0: java.awt.Color): void
                public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
                public setFont(arg0: java.awt.Font): void
                public getFont(): java.awt.Font
                public updateCursorImmediately(): void
                public pSetCursor(arg0: java.awt.Cursor): void
                public pSetCursor(arg0: java.awt.Cursor, arg1: boolean): void
                public createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
                public createImage(arg0: int, arg1: int): java.awt.Image
                public createVolatileImage(arg0: int, arg1: int): java.awt.image.VolatileImage
                public prepareImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
                public checkImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
                public preferredSize(): java.awt.Dimension
                public minimumSize(): java.awt.Dimension
                public getInsets(): java.awt.Insets
                public beginValidate(): void
                public endValidate(): void
                public insets(): java.awt.Insets
                public isPaintPending(): boolean
                public handlesWheelScrolling(): boolean
                public beginLayout(): void
                public endLayout(): void
                public getWinBackground(): java.awt.Color
                public getGUIcolors(): java.awt.Color[]
                public draw3DOval(arg0: java.awt.Graphics, arg1: java.awt.Color[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: boolean): void
                public draw3DRect(arg0: java.awt.Graphics, arg1: java.awt.Color[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: boolean): void
                public createBuffers(arg0: int, arg1: java.awt.BufferCapabilities): void
                public getBackBufferCaps(): java.awt.BufferCapabilities
                public flip(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.BufferCapabilities$FlipContents): void
                public getBackBuffer(): java.awt.Image
                public destroyBuffers(): void
                public notifyTextComponentChange(arg0: boolean): void
                protected isEventDisabled(arg0: sun.awt.X11.XEvent): boolean
                public setBoundsOperation(arg0: int): void
                public setZOrder(arg0: java.awt.peer.ComponentPeer): void
                public addDropTarget(arg0: java.awt.dnd.DropTarget): void
                public removeDropTarget(arg0: java.awt.dnd.DropTarget): void
                public applyShape(arg0: sun.java2d.pipe.Region): void
                public updateGraphicsData(arg0: java.awt.GraphicsConfiguration): boolean
                public setFullScreenExclusiveModeState(arg0: boolean): void
                public setMWMHints(arg0: sun.awt.X11.PropMwmHints): void
                public getMWMHints(): sun.awt.X11.PropMwmHints
                public postKeyEvent(arg0: int, arg1: long, arg2: int, arg3: int, arg4: int, arg5: int, arg6: long, arg7: int, arg8: long, arg9: int, arg10: int): void
                public getLocationOnScreen(): java.awt.Point
                public dispose(): void
                public getSurfaceData(): sun.java2d.SurfaceData
                public reshape(arg0: java.awt.Rectangle): void
                public handlePropertyNotify(arg0: sun.awt.X11.XEvent): void
                public handleKeyRelease(arg0: sun.awt.X11.XEvent): void
                public handleKeyPress(arg0: sun.awt.X11.XEvent): void
                public handleUnmapNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public handleMapNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public handleConfigureNotifyEvent(arg0: sun.awt.X11.XEvent): void
                public doLayout(arg0: int, arg1: int, arg2: int, arg3: int): void
                public handleXCrossingEvent(arg0: sun.awt.X11.XEvent): void
                public isMouseAbove(): boolean
                public handleMotionNotify(arg0: sun.awt.X11.XEvent): void
                public handleButtonPressRelease(arg0: sun.awt.X11.XEvent): void
                public postPaintEvent(arg0: java.awt.Component, arg1: int, arg2: int, arg3: int, arg4: int): void
                public handleExposeEvent(arg0: sun.awt.X11.XEvent): void
                public popup(arg0: int, arg1: int, arg2: int, arg3: int): void
                public isEmbedded(): boolean
                public postEventToEventQueue(arg0: java.awt.AWTEvent): void
                public getTargetBounds(): java.awt.Rectangle
                public getColorModel(): java.awt.image.ColorModel
                public getColorModel(arg0: int): java.awt.image.ColorModel
                public getEventSource(): java.awt.Component
                public getTarget(): java.lang.Object
                public getGraphicsConfigurationData(): sun.awt.X11.AwtGraphicsConfigData
                public getGraphicsConfiguration(): java.awt.GraphicsConfiguration
                public static class: java.lang.Class<any>
            }
        }
    }
}