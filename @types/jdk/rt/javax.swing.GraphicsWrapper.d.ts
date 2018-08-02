declare namespace javax {
    namespace swing {
interface GraphicsWrapper {
    subGraphics(): java.awt.Graphics
    isClipIntersecting(arg0: java.awt.Rectangle): boolean
    getClipX(): int
    getClipY(): int
    getClipWidth(): int
    getClipHeight(): int
}

    }
}