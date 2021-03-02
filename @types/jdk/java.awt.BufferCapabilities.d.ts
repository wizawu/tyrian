declare namespace java {
  namespace awt {

    class BufferCapabilities implements java.lang.Cloneable {
      public constructor(arg0: java.awt.ImageCapabilities, arg1: java.awt.ImageCapabilities, arg2: java.awt.BufferCapabilities$FlipContents)
      public getFrontBufferCapabilities(): java.awt.ImageCapabilities
      public getBackBufferCapabilities(): java.awt.ImageCapabilities
      public isPageFlipping(): boolean
      public getFlipContents(): java.awt.BufferCapabilities$FlipContents
      public isFullScreenRequired(): boolean
      public isMultiBufferAvailable(): boolean
      public clone(): java.lang.Object
    }

  }
}
