declare namespace javax {
  namespace imageio {

    abstract class IIOParam {
      protected sourceRegion: java.awt.Rectangle
      protected sourceXSubsampling: int
      protected sourceYSubsampling: int
      protected subsamplingXOffset: int
      protected subsamplingYOffset: int
      protected sourceBands: int[]
      protected destinationType: javax.imageio.ImageTypeSpecifier
      protected destinationOffset: java.awt.Point
      protected defaultController: javax.imageio.IIOParamController
      protected controller: javax.imageio.IIOParamController
      protected constructor()
      public setSourceRegion(arg0: java.awt.Rectangle): void
      public getSourceRegion(): java.awt.Rectangle
      public setSourceSubsampling(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public getSourceXSubsampling(): number
      public getSourceYSubsampling(): number
      public getSubsamplingXOffset(): number
      public getSubsamplingYOffset(): number
      public setSourceBands(arg0: number[] | java.lang.Integer[]): void
      public getSourceBands(): number[]
      public setDestinationType(arg0: javax.imageio.ImageTypeSpecifier): void
      public getDestinationType(): javax.imageio.ImageTypeSpecifier
      public setDestinationOffset(arg0: java.awt.Point): void
      public getDestinationOffset(): java.awt.Point
      public setController(arg0: javax.imageio.IIOParamController | javax.imageio.IIOParamController$$lambda): void
      public getController(): javax.imageio.IIOParamController
      public getDefaultController(): javax.imageio.IIOParamController
      public hasController(): boolean
      public activateController(): boolean
    }

  }
}
