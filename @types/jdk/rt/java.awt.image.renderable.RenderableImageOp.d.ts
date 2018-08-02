declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
class RenderableImageOp implements java.awt.image.renderable.RenderableImage {
    public constructor(arg0: java.awt.image.renderable.ContextualRenderedImageFactory, arg1: java.awt.image.renderable.ParameterBlock)
    public getSources(): java.util.Vector<java.awt.image.renderable.RenderableImage>
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public getPropertyNames(): java.lang.String[]
    public isDynamic(): boolean
    public getWidth(): float
    public getHeight(): float
    public getMinX(): float
    public getMinY(): float
    public setParameterBlock(arg0: java.awt.image.renderable.ParameterBlock): java.awt.image.renderable.ParameterBlock
    public getParameterBlock(): java.awt.image.renderable.ParameterBlock
    public createScaledRendering(arg0: int, arg1: int, arg2: java.awt.RenderingHints): java.awt.image.RenderedImage
    public createDefaultRendering(): java.awt.image.RenderedImage
    public createRendering(arg0: java.awt.image.renderable.RenderContext): java.awt.image.RenderedImage
    public static class: java.lang.Class<any>
}

            }
        }
    }
}