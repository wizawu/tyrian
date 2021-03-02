declare namespace java {
  namespace awt {

    class Robot {
      public constructor()
      public constructor(arg0: java.awt.GraphicsDevice)
      public mouseMove(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public mousePress(arg0: number | java.lang.Integer): void
      public mouseRelease(arg0: number | java.lang.Integer): void
      public mouseWheel(arg0: number | java.lang.Integer): void
      public keyPress(arg0: number | java.lang.Integer): void
      public keyRelease(arg0: number | java.lang.Integer): void
      public getPixelColor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Color
      public createScreenCapture(arg0: java.awt.Rectangle): java.awt.image.BufferedImage
      public createMultiResolutionScreenCapture(arg0: java.awt.Rectangle): java.awt.image.MultiResolutionImage
      public isAutoWaitForIdle(): boolean
      public setAutoWaitForIdle(arg0: boolean | java.lang.Boolean): void
      public getAutoDelay(): number
      public setAutoDelay(arg0: number | java.lang.Integer): void
      public delay(arg0: number | java.lang.Integer): void
      public waitForIdle(): void
      public toString(): java.lang.String
    }

  }
}
