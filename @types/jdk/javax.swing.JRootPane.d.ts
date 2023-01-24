declare namespace javax {
  namespace swing {
    class JRootPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
      public static readonly NONE: int
      public static readonly FRAME: int
      public static readonly PLAIN_DIALOG: int
      public static readonly INFORMATION_DIALOG: int
      public static readonly ERROR_DIALOG: int
      public static readonly COLOR_CHOOSER_DIALOG: int
      public static readonly FILE_CHOOSER_DIALOG: int
      public static readonly QUESTION_DIALOG: int
      public static readonly WARNING_DIALOG: int
      protected menuBar: javax.swing.JMenuBar
      protected contentPane: java.awt.Container
      protected layeredPane: javax.swing.JLayeredPane
      protected glassPane: java.awt.Component
      protected defaultButton: javax.swing.JButton
      useTrueDoubleBuffering: boolean
      public constructor()
      public setDoubleBuffered(arg0: boolean | java.lang.Boolean): void
      public getWindowDecorationStyle(): number
      public setWindowDecorationStyle(arg0: number | java.lang.Integer): void
      public getUI(): javax.swing.plaf.RootPaneUI
      public setUI(arg0: javax.swing.plaf.RootPaneUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      protected createLayeredPane(): javax.swing.JLayeredPane
      protected createContentPane(): java.awt.Container
      protected createGlassPane(): java.awt.Component
      protected createRootLayout(): java.awt.LayoutManager
      public setJMenuBar(arg0: javax.swing.JMenuBar): void
      public setMenuBar(arg0: javax.swing.JMenuBar): void
      public getJMenuBar(): javax.swing.JMenuBar
      public getMenuBar(): javax.swing.JMenuBar
      public setContentPane(arg0: java.awt.Container): void
      public getContentPane(): java.awt.Container
      public setLayeredPane(arg0: javax.swing.JLayeredPane): void
      public getLayeredPane(): javax.swing.JLayeredPane
      public setGlassPane(arg0: java.awt.Component): void
      public getGlassPane(): java.awt.Component
      public isValidateRoot(): boolean
      public isOptimizedDrawingEnabled(): boolean
      public addNotify(): void
      public removeNotify(): void
      public setDefaultButton(arg0: javax.swing.JButton): void
      public getDefaultButton(): javax.swing.JButton
      setUseTrueDoubleBuffering(arg0: boolean | java.lang.Boolean): void
      getUseTrueDoubleBuffering(): boolean
      disableTrueDoubleBuffering(): void
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }
  }
}
