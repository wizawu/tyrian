declare namespace java {
  namespace awt {

    abstract class GraphicsDevice {
      public static readonly TYPE_RASTER_SCREEN: int
      public static readonly TYPE_PRINTER: int
      public static readonly TYPE_IMAGE_BUFFER: int
      protected constructor()
      public abstract getType(): int
      public abstract getIDstring(): java.lang.String
      public abstract getConfigurations(): java.awt.GraphicsConfiguration[]
      public abstract getDefaultConfiguration(): java.awt.GraphicsConfiguration
      public getBestConfiguration(arg0: java.awt.GraphicsConfigTemplate): java.awt.GraphicsConfiguration
      public isFullScreenSupported(): boolean
      public setFullScreenWindow(arg0: java.awt.Window): void
      public getFullScreenWindow(): java.awt.Window
      public isDisplayChangeSupported(): boolean
      public setDisplayMode(arg0: java.awt.DisplayMode): void
      public getDisplayMode(): java.awt.DisplayMode
      public getDisplayModes(): java.awt.DisplayMode[]
      public getAvailableAcceleratedMemory(): int
      public isWindowTranslucencySupported(arg0: java.awt.GraphicsDevice$WindowTranslucency): boolean
      static isWindowShapingSupported(): boolean
      static isWindowOpacitySupported(): boolean
      isWindowPerpixelTranslucencySupported(): boolean
      getTranslucencyCapableGC(): java.awt.GraphicsConfiguration
    }

  }
}
