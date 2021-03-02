declare namespace javax {
  namespace swing {
    namespace tree {

      class DefaultTreeCellRenderer extends javax.swing.JLabel implements javax.swing.tree.TreeCellRenderer {
        protected selected: boolean
        protected hasFocus: boolean
        protected closedIcon: javax.swing.Icon
        protected leafIcon: javax.swing.Icon
        protected openIcon: javax.swing.Icon
        protected textSelectionColor: java.awt.Color
        protected textNonSelectionColor: java.awt.Color
        protected backgroundSelectionColor: java.awt.Color
        protected backgroundNonSelectionColor: java.awt.Color
        protected borderSelectionColor: java.awt.Color
        public constructor()
        public updateUI(): void
        public getDefaultOpenIcon(): javax.swing.Icon
        public getDefaultClosedIcon(): javax.swing.Icon
        public getDefaultLeafIcon(): javax.swing.Icon
        public setOpenIcon(arg0: javax.swing.Icon): void
        public getOpenIcon(): javax.swing.Icon
        public setClosedIcon(arg0: javax.swing.Icon): void
        public getClosedIcon(): javax.swing.Icon
        public setLeafIcon(arg0: javax.swing.Icon): void
        public getLeafIcon(): javax.swing.Icon
        public setTextSelectionColor(arg0: java.awt.Color): void
        public getTextSelectionColor(): java.awt.Color
        public setTextNonSelectionColor(arg0: java.awt.Color): void
        public getTextNonSelectionColor(): java.awt.Color
        public setBackgroundSelectionColor(arg0: java.awt.Color): void
        public getBackgroundSelectionColor(): java.awt.Color
        public setBackgroundNonSelectionColor(arg0: java.awt.Color): void
        public getBackgroundNonSelectionColor(): java.awt.Color
        public setBorderSelectionColor(arg0: java.awt.Color): void
        public getBorderSelectionColor(): java.awt.Color
        public setFont(arg0: java.awt.Font): void
        public getFont(): java.awt.Font
        public setBackground(arg0: java.awt.Color): void
        public getTreeCellRendererComponent(arg0: javax.swing.JTree, arg1: java.lang.Object | any, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean, arg4: boolean | java.lang.Boolean, arg5: number | java.lang.Integer, arg6: boolean | java.lang.Boolean): java.awt.Component
        public paint(arg0: java.awt.Graphics): void
        public getPreferredSize(): java.awt.Dimension
        public validate(): void
        public invalidate(): void
        public revalidate(): void
        public repaint(arg0: number | java.lang.Long, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        public repaint(arg0: java.awt.Rectangle): void
        public repaint(): void
        protected firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.lang.Object | any): void
        public firePropertyChange(arg0: java.lang.String | string, arg1: number | java.lang.Byte, arg2: number | java.lang.Byte): void
        public firePropertyChange(arg0: java.lang.String | string, arg1: string | java.lang.Character, arg2: string | java.lang.Character): void
        public firePropertyChange(arg0: java.lang.String | string, arg1: number | java.lang.Short, arg2: number | java.lang.Short): void
        public firePropertyChange(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public firePropertyChange(arg0: java.lang.String | string, arg1: number | java.lang.Long, arg2: number | java.lang.Long): void
        public firePropertyChange(arg0: java.lang.String | string, arg1: number | java.lang.Float, arg2: number | java.lang.Float): void
        public firePropertyChange(arg0: java.lang.String | string, arg1: number | java.lang.Double, arg2: number | java.lang.Double): void
        public firePropertyChange(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean): void
      }

    }
  }
}
