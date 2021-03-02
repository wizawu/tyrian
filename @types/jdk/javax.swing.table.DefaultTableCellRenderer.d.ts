declare namespace javax {
  namespace swing {
    namespace table {

      class DefaultTableCellRenderer extends javax.swing.JLabel implements javax.swing.table.TableCellRenderer, java.io.Serializable {
        protected static noFocusBorder: javax.swing.border.Border
        public constructor()
        public setForeground(arg0: java.awt.Color): void
        public setBackground(arg0: java.awt.Color): void
        public updateUI(): void
        public getTableCellRendererComponent(arg0: javax.swing.JTable, arg1: java.lang.Object | any, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): java.awt.Component
        public isOpaque(): boolean
        public invalidate(): void
        public validate(): void
        public revalidate(): void
        public repaint(arg0: number | java.lang.Long, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        public repaint(arg0: java.awt.Rectangle): void
        public repaint(): void
        protected firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.lang.Object | any): void
        public firePropertyChange(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean): void
        protected setValue(arg0: java.lang.Object | any): void
      }

    }
  }
}
