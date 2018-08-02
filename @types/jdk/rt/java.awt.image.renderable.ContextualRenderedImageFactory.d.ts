declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                interface ContextualRenderedImageFactory extends java.awt.image.renderable.RenderedImageFactory {
                    mapRenderContext(arg0: int, arg1: java.awt.image.renderable.RenderContext, arg2: java.awt.image.renderable.ParameterBlock, arg3: java.awt.image.renderable.RenderableImage): java.awt.image.renderable.RenderContext
                    create(arg0: java.awt.image.renderable.RenderContext, arg1: java.awt.image.renderable.ParameterBlock): java.awt.image.RenderedImage
                    getBounds2D(arg0: java.awt.image.renderable.ParameterBlock): java.awt.geom.Rectangle2D
                    getProperty(arg0: java.awt.image.renderable.ParameterBlock, arg1: java.lang.String | string): java.lang.Object
                    getPropertyNames(): java.lang.String[]
                    isDynamic(): boolean
                }
            }
        }
    }
}