declare namespace javax {
  namespace swing {

    class ToolTipManager extends java.awt.event.MouseAdapter implements java.awt.event.MouseMotionListener {

      enterTimer: javax.swing.Timer
      exitTimer: javax.swing.Timer
      insideTimer: javax.swing.Timer
      toolTipText: java.lang.String
      preferredLocation: java.awt.Point
      insideComponent: javax.swing.JComponent
      mouseEvent: java.awt.event.MouseEvent
      showImmediately: boolean
      tipWindow: javax.swing.Popup
      tip: javax.swing.JToolTip
      enabled: boolean
      protected lightWeightPopupEnabled: boolean
      protected heavyWeightPopupEnabled: boolean
      constructor()
      public setEnabled(arg0: boolean): void
      public isEnabled(): boolean
      public setLightWeightPopupEnabled(arg0: boolean): void
      public isLightWeightPopupEnabled(): boolean
      public setInitialDelay(arg0: int): void
      public getInitialDelay(): int
      public setDismissDelay(arg0: int): void
      public getDismissDelay(): int
      public setReshowDelay(arg0: int): void
      public getReshowDelay(): int
      showTipWindow(): void
      hideTipWindow(): void
      public static sharedInstance(): javax.swing.ToolTipManager
      public registerComponent(arg0: javax.swing.JComponent): void
      public unregisterComponent(arg0: javax.swing.JComponent): void
      public mouseEntered(arg0: java.awt.event.MouseEvent): void
      public mouseExited(arg0: java.awt.event.MouseEvent): void
      public mousePressed(arg0: java.awt.event.MouseEvent): void
      public mouseDragged(arg0: java.awt.event.MouseEvent): void
      public mouseMoved(arg0: java.awt.event.MouseEvent): void
      static frameForComponent(arg0: java.awt.Component): java.awt.Frame
    }

  }
}
