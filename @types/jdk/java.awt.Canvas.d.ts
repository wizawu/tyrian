declare namespace java {
  namespace awt {

    class Canvas extends java.awt.Component implements javax.accessibility.Accessible {
      public constructor()
      public constructor(arg0: java.awt.GraphicsConfiguration)
      setGraphicsConfiguration(arg0: java.awt.GraphicsConfiguration): void
      constructComponentName(): java.lang.String
      public addNotify(): void
      public paint(arg0: java.awt.Graphics): void
      public update(arg0: java.awt.Graphics): void
      postsOldMouseEvents(): boolean
      public createBufferStrategy(arg0: number | java.lang.Integer): void
      public createBufferStrategy(arg0: number | java.lang.Integer, arg1: java.awt.BufferCapabilities): void
      public getBufferStrategy(): java.awt.image.BufferStrategy
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
