declare namespace javax {
  namespace swing {
    namespace tree {

      class DefaultTreeSelectionModel implements java.lang.Cloneable, java.io.Serializable, javax.swing.tree.TreeSelectionModel {
        public static readonly SELECTION_MODE_PROPERTY: java.lang.String
        protected changeSupport: javax.swing.event.SwingPropertyChangeSupport
        protected selection: javax.swing.tree.TreePath[]
        protected listenerList: javax.swing.event.EventListenerList
        protected rowMapper: javax.swing.tree.RowMapper
        protected listSelectionModel: javax.swing.DefaultListSelectionModel
        protected selectionMode: int
        protected leadPath: javax.swing.tree.TreePath
        protected leadIndex: int
        protected leadRow: int
        public constructor()
        public setRowMapper(arg0: javax.swing.tree.RowMapper | javax.swing.tree.RowMapper$$lambda): void
        public getRowMapper(): javax.swing.tree.RowMapper
        public setSelectionMode(arg0: number | java.lang.Integer): void
        public getSelectionMode(): number
        public setSelectionPath(arg0: javax.swing.tree.TreePath): void
        public setSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
        public addSelectionPath(arg0: javax.swing.tree.TreePath): void
        public addSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
        public removeSelectionPath(arg0: javax.swing.tree.TreePath): void
        public removeSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
        public getSelectionPath(): javax.swing.tree.TreePath
        public getSelectionPaths(): javax.swing.tree.TreePath[]
        public getSelectionCount(): number
        public isPathSelected(arg0: javax.swing.tree.TreePath): boolean
        public isSelectionEmpty(): boolean
        public clearSelection(): void
        public addTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener | javax.swing.event.TreeSelectionListener$$lambda): void
        public removeTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener | javax.swing.event.TreeSelectionListener$$lambda): void
        public getTreeSelectionListeners(): javax.swing.event.TreeSelectionListener[]
        protected fireValueChanged(arg0: javax.swing.event.TreeSelectionEvent): void
        public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
        public getSelectionRows(): number[]
        public getMinSelectionRow(): number
        public getMaxSelectionRow(): number
        public isRowSelected(arg0: number | java.lang.Integer): boolean
        public resetRowSelection(): void
        public getLeadSelectionRow(): number
        public getLeadSelectionPath(): javax.swing.tree.TreePath
        public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
        public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
        public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
        protected insureRowContinuity(): void
        protected arePathsContiguous(arg0: javax.swing.tree.TreePath[]): boolean
        protected canPathsBeAdded(arg0: javax.swing.tree.TreePath[]): boolean
        protected canPathsBeRemoved(arg0: javax.swing.tree.TreePath[]): boolean
        protected notifyPathChange(arg0: java.util.Vector<unknown>, arg1: javax.swing.tree.TreePath): void
        protected updateLeadIndex(): void
        protected insureUniqueness(): void
        public toString(): java.lang.String
        public clone(): java.lang.Object
      }

    }
  }
}
