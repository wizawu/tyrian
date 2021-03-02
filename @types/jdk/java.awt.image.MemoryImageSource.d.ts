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
        public constructor(arg0: int, arg1: int, arg2: java.awt.image.ColorModel, arg3: byte[], arg4: int, arg5: int)
        public constructor(arg0: int, arg1: int, arg2: java.awt.image.ColorModel, arg3: byte[], arg4: int, arg5: int, arg6: java.util.Hashtable<unknown,unknown>)
        public constructor(arg0: int, arg1: int, arg2: java.awt.image.ColorModel, arg3: int[], arg4: int, arg5: int)
        public constructor(arg0: int, arg1: int, arg2: java.awt.image.ColorModel, arg3: int[], arg4: int, arg5: int, arg6: java.util.Hashtable<unknown,unknown>)
        public constructor(arg0: int, arg1: int, arg2: int[], arg3: int, arg4: int)
        public constructor(arg0: int, arg1: int, arg2: int[], arg3: int, arg4: int, arg5: java.util.Hashtable<unknown,unknown>)
        public addConsumer(arg0: java.awt.image.ImageConsumer): void
        public isConsumer(arg0: java.awt.image.ImageConsumer): boolean
        public removeConsumer(arg0: java.awt.image.ImageConsumer): void
        public startProduction(arg0: java.awt.image.ImageConsumer): void
        public requestTopDownLeftRightResend(arg0: java.awt.image.ImageConsumer): void
        public setAnimated(arg0: boolean): void
        public setFullBufferUpdates(arg0: boolean): void
        public newPixels(): void
        public newPixels(arg0: int, arg1: int, arg2: int, arg3: int): void
        public newPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
        public newPixels(arg0: byte[], arg1: java.awt.image.ColorModel, arg2: int, arg3: int): void
        public newPixels(arg0: int[], arg1: java.awt.image.ColorModel, arg2: int, arg3: int): void
      }

    }
  }
}
