declare namespace java {
  namespace awt {
    class PageAttributes implements java.lang.Cloneable {
      public constructor()
      public constructor(arg0: java.awt.PageAttributes)
      public constructor(
        arg0: java.awt.PageAttributes$ColorType,
        arg1: java.awt.PageAttributes$MediaType,
        arg2: java.awt.PageAttributes$OrientationRequestedType,
        arg3: java.awt.PageAttributes$OriginType,
        arg4: java.awt.PageAttributes$PrintQualityType,
        arg5: number[] | java.lang.Integer[]
      )
      public clone(): java.lang.Object
      public set(arg0: java.awt.PageAttributes): void
      public getColor(): java.awt.PageAttributes$ColorType
      public setColor(arg0: java.awt.PageAttributes$ColorType): void
      public getMedia(): java.awt.PageAttributes$MediaType
      public setMedia(arg0: java.awt.PageAttributes$MediaType): void
      public setMediaToDefault(): void
      public getOrientationRequested(): java.awt.PageAttributes$OrientationRequestedType
      public setOrientationRequested(arg0: java.awt.PageAttributes$OrientationRequestedType): void
      public setOrientationRequested(arg0: number | java.lang.Integer): void
      public setOrientationRequestedToDefault(): void
      public getOrigin(): java.awt.PageAttributes$OriginType
      public setOrigin(arg0: java.awt.PageAttributes$OriginType): void
      public getPrintQuality(): java.awt.PageAttributes$PrintQualityType
      public setPrintQuality(arg0: java.awt.PageAttributes$PrintQualityType): void
      public setPrintQuality(arg0: number | java.lang.Integer): void
      public setPrintQualityToDefault(): void
      public getPrinterResolution(): number[]
      public setPrinterResolution(arg0: number[] | java.lang.Integer[]): void
      public setPrinterResolution(arg0: number | java.lang.Integer): void
      public setPrinterResolutionToDefault(): void
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }
  }
}
