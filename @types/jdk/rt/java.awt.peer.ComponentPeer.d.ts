declare namespace java {
    namespace awt {
        namespace peer {
interface ComponentPeer {
    SET_LOCATION: int
    SET_SIZE: int
    SET_BOUNDS: int
    SET_CLIENT_SIZE: int
    RESET_OPERATION: int
    NO_EMBEDDED_CHECK: int
    DEFAULT_OPERATION: int
    isObscured(): boolean
    canDetermineObscurity(): boolean
    setVisible(arg0: boolean): void
    setEnabled(arg0: boolean): void
    paint(arg0: java.awt.Graphics): void
    print(arg0: java.awt.Graphics): void
    setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
    handleEvent(arg0: java.awt.AWTEvent): void
    coalescePaintEvent(arg0: java.awt.event.PaintEvent): void
    getLocationOnScreen(): java.awt.Point
    getPreferredSize(): java.awt.Dimension
    getMinimumSize(): java.awt.Dimension
    getColorModel(): java.awt.image.ColorModel
    getGraphics(): java.awt.Graphics
    getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
    dispose(): void
    setForeground(arg0: java.awt.Color): void
    setBackground(arg0: java.awt.Color): void
    setFont(arg0: java.awt.Font): void
    updateCursorImmediately(): void
    requestFocus(arg0: java.awt.Component, arg1: boolean, arg2: boolean, arg3: long, arg4: sun.awt.CausedFocusEvent$Cause): boolean
    isFocusable(): boolean
    createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
    createImage(arg0: int, arg1: int): java.awt.Image
    createVolatileImage(arg0: int, arg1: int): java.awt.image.VolatileImage
    prepareImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): boolean
    checkImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): int
    getGraphicsConfiguration(): java.awt.GraphicsConfiguration
    handlesWheelScrolling(): boolean
    createBuffers(arg0: int, arg1: java.awt.BufferCapabilities): void
    getBackBuffer(): java.awt.Image
    flip(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.BufferCapabilities$FlipContents): void
    destroyBuffers(): void
    reparent(arg0: java.awt.peer.ContainerPeer): void
    isReparentSupported(): boolean
    layout(): void
    applyShape(arg0: sun.java2d.pipe.Region): void
    setZOrder(arg0: java.awt.peer.ComponentPeer): void
    updateGraphicsData(arg0: java.awt.GraphicsConfiguration): boolean
}

        }
    }
}