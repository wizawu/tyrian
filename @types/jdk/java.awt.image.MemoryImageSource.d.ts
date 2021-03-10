declare namespace java {
  namespace awt {
    namespace image {

      class MemoryImageSource implements java.awt.image.ImageProducer {
        width: int
        height: int
        model: java.awt.image.ColorModel
        pixels: java.lang.Object
        pixeloffset: int
        pixelscan: int
        properties: java.util.Hashtable<unknown,unknown>
        theConsumers: java.util.Vector<java.awt.image.ImageConsumer>
        animating: boolean
        fullbuffers: boolean
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.image.ColorModel, arg3: number[] | java.lang.Byte[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.image.ColorModel, arg3: number[] | java.lang.Byte[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: java.util.Hashtable<unknown,unknown>)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.image.ColorModel, arg3: number[] | java.lang.Integer[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.image.ColorModel, arg3: number[] | java.lang.Integer[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: java.util.Hashtable<unknown,unknown>)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Integer[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Integer[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: java.util.Hashtable<unknown,unknown>)
        public addConsumer(arg0: java.awt.image.ImageConsumer): void
        public isConsumer(arg0: java.awt.image.ImageConsumer): boolean
        public removeConsumer(arg0: java.awt.image.ImageConsumer): void
        public startProduction(arg0: java.awt.image.ImageConsumer): void
        public requestTopDownLeftRightResend(arg0: java.awt.image.ImageConsumer): void
        public setAnimated(arg0: boolean | java.lang.Boolean): void
        public setFullBufferUpdates(arg0: boolean | java.lang.Boolean): void
        public newPixels(): void
        public newPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
        public newPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): void
        public newPixels(arg0: number[] | java.lang.Byte[], arg1: java.awt.image.ColorModel, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
        public newPixels(arg0: number[] | java.lang.Integer[], arg1: java.awt.image.ColorModel, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      }

    }
  }
}
