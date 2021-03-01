declare namespace java {
  namespace awt {

    class SplashScreen {

      static readonly $assertionsDisabled: boolean
      constructor(arg0: long)
      public static getSplashScreen(): java.awt.SplashScreen
      public setImageURL(arg0: java.net.URL): void
      public getImageURL(): java.net.URL
      public getBounds(): java.awt.Rectangle
      public getSize(): java.awt.Dimension
      public createGraphics(): java.awt.Graphics2D
      public update(): void
      public close(): void
      static markClosed(): void
      public isVisible(): boolean
    }

  }
}
