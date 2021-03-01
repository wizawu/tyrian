declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicColorChooserUI extends javax.swing.plaf.ColorChooserUI {

          protected chooser: javax.swing.JColorChooser
          tabbedPane: javax.swing.JTabbedPane
          singlePanel: javax.swing.JPanel
          previewPanelHolder: javax.swing.JPanel
          previewPanel: javax.swing.JComponent
          isMultiPanel: boolean
          protected defaultChoosers: javax.swing.colorchooser.AbstractColorChooserPanel[]
          protected previewListener: javax.swing.event.ChangeListener
          protected propertyChangeListener: java.beans.PropertyChangeListener
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected createDefaultChoosers(): javax.swing.colorchooser.AbstractColorChooserPanel[]
          protected uninstallDefaultChoosers(): void
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installPreviewPanel(): void
          protected uninstallPreviewPanel(): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected installListeners(): void
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
          protected uninstallListeners(): void
        }

      }
    }
  }
}
