declare namespace sun {
    namespace awt {
        namespace X11 {
            class XEmbedChildProxyPeer implements java.awt.peer.ComponentPeer , sun.awt.X11.XEventDispatcher {
                public isObscured(): boolean
                public canDetermineObscurity(): boolean
                public setVisible(arg0: boolean): void
                public setEnabled(arg0: boolean): void
                public paint(arg0: java.awt.Graphics): void
                public repaint(arg0: long, arg1: int, arg2: int, arg3: int, arg4: int): void
                public print(arg0: java.awt.Graphics): void
                public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
                public handleEvent(arg0: java.awt.AWTEvent): void
                public coalescePaintEvent(arg0: java.awt.event.PaintEvent): void
                public getLocationOnScreen(): java.awt.Point
                public getPreferredSize(): java.awt.Dimension
                public getMinimumSize(): java.awt.Dimension
                public getColorModel(): java.awt.image.ColorModel
                public getToolkit(): java.awt.Toolkit
                public getGraphics(): java.awt.Graphics
                public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
                public dispose(): void
                public setForeground(arg0: java.awt.Color): void
                public setBackground(arg0: java.awt.Color): void
                public setFont(arg0: java.awt.Font): void
                public updateCursorImmediately(): void
                public requestFocus(arg0: java.awt.Component, arg1: boolean, arg2: boolean, arg3: long, arg4: sun.awt.CausedFocusEvent$Cause): boolean
                public isFocusable(): boolean
                public createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
                public createImage(arg0: int, arg1: int): java.awt.Image
                public createVolatileImage(arg0: int, arg1: int): java.awt.image.VolatileImage
                public prepareImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
                public checkImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
                public getGraphicsConfiguration(): java.awt.GraphicsConfiguration
                public handlesWheelScrolling(): boolean
                public createBuffers(arg0: int, arg1: java.awt.BufferCapabilities): void
                public getBackBuffer(): java.awt.Image
                public flip(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.BufferCapabilities$FlipContents): void
                public destroyBuffers(): void
                public layout(): void
                public preferredSize(): java.awt.Dimension
                public minimumSize(): java.awt.Dimension
                public show(): void
                public hide(): void
                public enable(): void
                public disable(): void
                public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
                public dispatchEvent(arg0: sun.awt.X11.XEvent): void
                public reparent(arg0: java.awt.peer.ContainerPeer): void
                public isReparentSupported(): boolean
                public getBounds(): java.awt.Rectangle
                public setBoundsOperation(arg0: int): void
                public applyShape(arg0: sun.java2d.pipe.Region): void
                public setZOrder(arg0: java.awt.peer.ComponentPeer): void
                public updateGraphicsData(arg0: java.awt.GraphicsConfiguration): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}