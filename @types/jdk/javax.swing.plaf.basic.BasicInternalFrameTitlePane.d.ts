declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicInternalFrameTitlePane extends javax.swing.JComponent {
          protected menuBar: javax.swing.JMenuBar
          protected iconButton: javax.swing.JButton
          protected maxButton: javax.swing.JButton
          protected closeButton: javax.swing.JButton
          protected windowMenu: javax.swing.JMenu
          protected frame: javax.swing.JInternalFrame
          protected selectedTitleColor: java.awt.Color
          protected selectedTextColor: java.awt.Color
          protected notSelectedTitleColor: java.awt.Color
          protected notSelectedTextColor: java.awt.Color
          protected maxIcon: javax.swing.Icon
          protected minIcon: javax.swing.Icon
          protected iconIcon: javax.swing.Icon
          protected closeIcon: javax.swing.Icon
          protected propertyChangeListener: java.beans.PropertyChangeListener
          protected closeAction: javax.swing.Action
          protected maximizeAction: javax.swing.Action
          protected iconifyAction: javax.swing.Action
          protected restoreAction: javax.swing.Action
          protected moveAction: javax.swing.Action
          protected sizeAction: javax.swing.Action
          protected static readonly CLOSE_CMD: java.lang.String
          protected static readonly ICONIFY_CMD: java.lang.String
          protected static readonly RESTORE_CMD: java.lang.String
          protected static readonly MAXIMIZE_CMD: java.lang.String
          protected static readonly MOVE_CMD: java.lang.String
          protected static readonly SIZE_CMD: java.lang.String
          public constructor(arg0: javax.swing.JInternalFrame)
          protected installTitlePane(): void
          protected addSubComponents(): void
          protected createActions(): void
          createActionMap(): javax.swing.ActionMap
          protected installListeners(): void
          protected uninstallListeners(): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected createButtons(): void
          protected setButtonIcons(): void
          protected assembleSystemMenu(): void
          protected addSystemMenuItems(arg0: javax.swing.JMenu): void
          protected createSystemMenu(): javax.swing.JMenu
          protected createSystemMenuBar(): javax.swing.JMenuBar
          protected showSystemMenu(): void
          public paintComponent(arg0: java.awt.Graphics): void
          protected paintTitleBackground(arg0: java.awt.Graphics): void
          protected getTitle(
            arg0: java.lang.String | string,
            arg1: java.awt.FontMetrics,
            arg2: number | java.lang.Integer
          ): java.lang.String
          protected postClosingEvent(arg0: javax.swing.JInternalFrame): void
          protected enableActions(): void
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
          protected createLayout(): java.awt.LayoutManager
        }
      }
    }
  }
}
