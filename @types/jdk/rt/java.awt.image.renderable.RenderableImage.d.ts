declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
interface RenderableImage {
    HINTS_OBSERVED: string
    getSources(): java.util.Vector<java.awt.image.renderable.RenderableImage>
    getProperty(arg0: java.lang.String | string): java.lang.Object
    getPropertyNames(): java.lang.String[]
    isDynamic(): boolean
    getWidth(): float
    getHeight(): float
    getMinX(): float
    getMinY(): float
    createScaledRendering(arg0: int, arg1: int, arg2: java.awt.RenderingHints): java.awt.image.RenderedImage
    createDefaultRendering(): java.awt.image.RenderedImage
    createRendering(arg0: java.awt.image.renderable.RenderContext): java.awt.image.RenderedImage
}

            }
        }
    }
}