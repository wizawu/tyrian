declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
class RenderableImageProducer implements java.awt.image.ImageProducer , java.lang.Runnable {
    public constructor(arg0: java.awt.image.renderable.RenderableImage, arg1: java.awt.image.renderable.RenderContext)
    public setRenderContext(arg0: java.awt.image.renderable.RenderContext): void
    public addConsumer(arg0: java.awt.image.ImageConsumer): void
    public isConsumer(arg0: java.awt.image.ImageConsumer): boolean
    public removeConsumer(arg0: java.awt.image.ImageConsumer): void
    public startProduction(arg0: java.awt.image.ImageConsumer): void
    public requestTopDownLeftRightResend(arg0: java.awt.image.ImageConsumer): void
    public run(): void
    public static class: java.lang.Class<any>
}

class RenderableImageProducer$$Lambda implements java.awt.image.ImageProducer , java.lang.Runnable {
    public constructor(arg0: java.awt.image.renderable.RenderableImage, arg1: java.awt.image.renderable.RenderContext)
}

            }
        }
    }
}