declare namespace sun {
    namespace awt {
        namespace X11 {
            abstract class XBaseMenuWindow extends sun.awt.X11.XWindow {
                protected grabInputPoint: java.awt.Point
                protected hasPointerMoved: boolean
                protected abstract getParentMenuWindow(): sun.awt.X11.XBaseMenuWindow
                protected abstract map(): sun.awt.X11.XBaseMenuWindow$MappingData
                protected abstract getSubmenuBounds(arg0: java.awt.Rectangle, arg1: java.awt.Dimension): java.awt.Rectangle
                protected abstract updateSize(): void
                protected resetMapping(): void
                public addItem(arg0: java.awt.MenuItem): void
                public delItem(arg0: int): void
                public reloadItems(arg0: java.util.Vector): void
                protected isEventDisabled(arg0: sun.awt.X11.XEvent): boolean
                public dispose(): void
                protected doDispose(): void
                protected handleEvent(arg0: java.awt.AWTEvent): void
                public grabInput(): boolean
                public setFullScreenExclusiveModeState(arg0: boolean): void
                public setMWMHints(arg0: sun.awt.X11.PropMwmHints): void
                public getMWMHints(): sun.awt.X11.PropMwmHints
                public postKeyEvent(arg0: int, arg1: long, arg2: int, arg3: int, arg4: int, arg5: int, arg6: long, arg7: int, arg8: long, arg9: int, arg10: int): void
                public getLocationOnScreen(): java.awt.Point
                public getSurfaceData(): sun.java2d.SurfaceData
                public layout(): void
                public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
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
                public paint(arg0: java.awt.Graphics): void
                public isEmbedded(): boolean
                public getWinBackground(): java.awt.Color
                public setBackground(arg0: java.awt.Color): void
                public postEventToEventQueue(arg0: java.awt.AWTEvent): void
                public getTargetBounds(): java.awt.Rectangle
                public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
                public getGraphics(): java.awt.Graphics
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