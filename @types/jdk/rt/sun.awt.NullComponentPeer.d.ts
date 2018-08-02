declare namespace sun {
    namespace awt {
class NullComponentPeer implements java.awt.peer.LightweightPeer , java.awt.peer.CanvasPeer , java.awt.peer.PanelPeer {
    public constructor()
    public isObscured(): boolean
    public canDetermineObscurity(): boolean
    public isFocusable(): boolean
    public setVisible(arg0: boolean): void
    public show(): void
    public hide(): void
    public setEnabled(arg0: boolean): void
    public enable(): void
    public disable(): void
    public paint(arg0: java.awt.Graphics): void
    public repaint(arg0: long, arg1: int, arg2: int, arg3: int, arg4: int): void
    public print(arg0: java.awt.Graphics): void
    public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
    public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
    public coalescePaintEvent(arg0: java.awt.event.PaintEvent): void
    public handleEvent(arg0: java.awt.Event): boolean
    public handleEvent(arg0: java.awt.AWTEvent): void
    public getPreferredSize(): java.awt.Dimension
    public getMinimumSize(): java.awt.Dimension
    public getColorModel(): java.awt.image.ColorModel
    public getGraphics(): java.awt.Graphics
    public getGraphicsConfiguration(): java.awt.GraphicsConfiguration
    public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
    public dispose(): void
    public setForeground(arg0: java.awt.Color): void
    public setBackground(arg0: java.awt.Color): void
    public setFont(arg0: java.awt.Font): void
    public updateCursorImmediately(): void
    public setCursor(arg0: java.awt.Cursor): void
    public requestFocus(arg0: java.awt.Component, arg1: boolean, arg2: boolean, arg3: long, arg4: sun.awt.CausedFocusEvent$Cause): boolean
    public createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
    public createImage(arg0: int, arg1: int): java.awt.Image
    public prepareImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): boolean
    public checkImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): int
    public preferredSize(): java.awt.Dimension
    public minimumSize(): java.awt.Dimension
    public getLocationOnScreen(): java.awt.Point
    public getInsets(): java.awt.Insets
    public beginValidate(): void
    public endValidate(): void
    public insets(): java.awt.Insets
    public isPaintPending(): boolean
    public handlesWheelScrolling(): boolean
    public createVolatileImage(arg0: int, arg1: int): java.awt.image.VolatileImage
    public beginLayout(): void
    public endLayout(): void
    public createBuffers(arg0: int, arg1: java.awt.BufferCapabilities): void
    public getBackBuffer(): java.awt.Image
    public flip(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.BufferCapabilities$FlipContents): void
    public destroyBuffers(): void
    public isReparentSupported(): boolean
    public reparent(arg0: java.awt.peer.ContainerPeer): void
    public layout(): void
    public getBounds(): java.awt.Rectangle
    public applyShape(arg0: sun.java2d.pipe.Region): void
    public setZOrder(arg0: java.awt.peer.ComponentPeer): void
    public updateGraphicsData(arg0: java.awt.GraphicsConfiguration): boolean
    public getAppropriateGraphicsConfiguration(arg0: java.awt.GraphicsConfiguration): java.awt.GraphicsConfiguration
    public static class: java.lang.Class<any>
}

    }
}