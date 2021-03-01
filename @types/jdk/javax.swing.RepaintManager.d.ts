declare namespace javax {
  namespace swing {

    class RepaintManager {

      static readonly HANDLE_TOP_LEVEL_PAINT: boolean
      doubleBufferingEnabled: boolean
      standardDoubleBuffer: javax.swing.RepaintManager$DoubleBufferInfo
      static volatileImageBufferEnabled: boolean
      tmp: java.awt.Rectangle
      public static currentManager(arg0: java.awt.Component): javax.swing.RepaintManager
      static currentManager(arg0: sun.awt.AppContext): javax.swing.RepaintManager
      public static currentManager(arg0: javax.swing.JComponent): javax.swing.RepaintManager
      public static setCurrentManager(arg0: javax.swing.RepaintManager): void
      public constructor()
      public addInvalidComponent(arg0: javax.swing.JComponent): void
      public removeInvalidComponent(arg0: javax.swing.JComponent): void
      public addDirtyRegion(arg0: javax.swing.JComponent, arg1: int, arg2: int, arg3: int, arg4: int): void
      public addDirtyRegion(arg0: java.awt.Window, arg1: int, arg2: int, arg3: int, arg4: int): void
      public addDirtyRegion(arg0: java.applet.Applet, arg1: int, arg2: int, arg3: int, arg4: int): void
      scheduleHeavyWeightPaints(): void
      nativeAddDirtyRegion(arg0: sun.awt.AppContext, arg1: java.awt.Container, arg2: int, arg3: int, arg4: int, arg5: int): void
      nativeQueueSurfaceDataRunnable(arg0: sun.awt.AppContext, arg1: java.awt.Component, arg2: java.lang.Runnable): void
      public getDirtyRegion(arg0: javax.swing.JComponent): java.awt.Rectangle
      public markCompletelyDirty(arg0: javax.swing.JComponent): void
      public markCompletelyClean(arg0: javax.swing.JComponent): void
      public isCompletelyDirty(arg0: javax.swing.JComponent): boolean
      public validateInvalidComponents(): void
      isPainting(): boolean
      public paintDirtyRegions(): void
      collectDirtyComponents(arg0: java.util.Map<java.awt.Component,java.awt.Rectangle>, arg1: java.awt.Component, arg2: java.util.List<java.awt.Component>): void
      public toString(): java.lang.String
      public getOffscreenBuffer(arg0: java.awt.Component, arg1: int, arg2: int): java.awt.Image
      public getVolatileOffscreenBuffer(arg0: java.awt.Component, arg1: int, arg2: int): java.awt.Image
      public setDoubleBufferMaximumSize(arg0: java.awt.Dimension): void
      public getDoubleBufferMaximumSize(): java.awt.Dimension
      public setDoubleBufferingEnabled(arg0: boolean): void
      public isDoubleBufferingEnabled(): boolean
      resetDoubleBuffer(): void
      resetVolatileDoubleBuffer(arg0: java.awt.GraphicsConfiguration): void
      useVolatileDoubleBuffer(): boolean
      paint(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent, arg2: java.awt.Graphics, arg3: int, arg4: int, arg5: int, arg6: int): void
      copyArea(arg0: javax.swing.JComponent, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: boolean): void
      notifyRepaintPerformed(arg0: javax.swing.JComponent, arg1: int, arg2: int, arg3: int, arg4: int): void
      beginPaint(): void
      endPaint(): void
      show(arg0: java.awt.Container, arg1: int, arg2: int, arg3: int, arg4: int): boolean
      doubleBufferingChanged(arg0: javax.swing.JRootPane): void
      setPaintManager(arg0: javax.swing.RepaintManager$PaintManager): void
    }

  }
}
