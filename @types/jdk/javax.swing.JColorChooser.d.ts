declare namespace javax {
  namespace swing {

    class JColorChooser extends javax.swing.JComponent implements javax.accessibility.Accessible {

      public static readonly SELECTION_MODEL_PROPERTY: java.lang.String
      public static readonly PREVIEW_PANEL_PROPERTY: java.lang.String
      public static readonly CHOOSER_PANELS_PROPERTY: java.lang.String
      protected accessibleContext: javax.accessibility.AccessibleContext
      public static showDialog(arg0: java.awt.Component, arg1: java.lang.String, arg2: java.awt.Color): java.awt.Color
      public static showDialog(arg0: java.awt.Component, arg1: java.lang.String, arg2: java.awt.Color, arg3: boolean): java.awt.Color
      public static createDialog(arg0: java.awt.Component, arg1: java.lang.String, arg2: boolean, arg3: javax.swing.JColorChooser, arg4: java.awt.event.ActionListener, arg5: java.awt.event.ActionListener): javax.swing.JDialog
      public constructor()
      public constructor(arg0: java.awt.Color)
      public constructor(arg0: javax.swing.colorchooser.ColorSelectionModel)
      public getUI(): javax.swing.plaf.ColorChooserUI
      public setUI(arg0: javax.swing.plaf.ColorChooserUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public getColor(): java.awt.Color
      public setColor(arg0: java.awt.Color): void
      public setColor(arg0: int, arg1: int, arg2: int): void
      public setColor(arg0: int): void
      public setDragEnabled(arg0: boolean): void
      public getDragEnabled(): boolean
      public setPreviewPanel(arg0: javax.swing.JComponent): void
      public getPreviewPanel(): javax.swing.JComponent
      public addChooserPanel(arg0: javax.swing.colorchooser.AbstractColorChooserPanel): void
      public removeChooserPanel(arg0: javax.swing.colorchooser.AbstractColorChooserPanel): javax.swing.colorchooser.AbstractColorChooserPanel
      public setChooserPanels(arg0: javax.swing.colorchooser.AbstractColorChooserPanel[]): void
      public getChooserPanels(): javax.swing.colorchooser.AbstractColorChooserPanel[]
      public getSelectionModel(): javax.swing.colorchooser.ColorSelectionModel
      public setSelectionModel(arg0: javax.swing.colorchooser.ColorSelectionModel): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
