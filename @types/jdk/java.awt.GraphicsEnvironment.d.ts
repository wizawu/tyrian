declare namespace java {
  namespace awt {
    abstract class GraphicsEnvironment {
      protected constructor()
      public static getLocalGraphicsEnvironment(): java.awt.GraphicsEnvironment
      public static isHeadless(): boolean
      static getHeadlessMessage(): java.lang.String
      static checkHeadless(): void
      public isHeadlessInstance(): boolean
      public abstract getScreenDevices(): java.awt.GraphicsDevice[]
      public abstract getDefaultScreenDevice(): java.awt.GraphicsDevice
      public abstract createGraphics(arg0: java.awt.image.BufferedImage): java.awt.Graphics2D
      public abstract getAllFonts(): java.awt.Font[]
      public abstract getAvailableFontFamilyNames(): java.lang.String[]
      public abstract getAvailableFontFamilyNames(arg0: java.util.Locale): java.lang.String[]
      public registerFont(arg0: java.awt.Font): boolean
      public preferLocaleFonts(): void
      public preferProportionalFonts(): void
      public getCenterPoint(): java.awt.Point
      public getMaximumWindowBounds(): java.awt.Rectangle
    }
  }
}
