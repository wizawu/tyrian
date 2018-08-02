declare namespace javax {
    namespace swing {
        namespace tree {
class DefaultTreeSelectionModel implements java.lang.Cloneable , java.io.Serializable , javax.swing.tree.TreeSelectionModel {
    public static SELECTION_MODE_PROPERTY: string
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
    public setRowMapper(arg0: javax.swing.tree.RowMapper | javax.swing.tree.RowMapper$$Lambda): void
    public getRowMapper(): javax.swing.tree.RowMapper
    public setSelectionMode(arg0: int): void
    public getSelectionMode(): int
    public setSelectionPath(arg0: javax.swing.tree.TreePath): void
    public setSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
    public addSelectionPath(arg0: javax.swing.tree.TreePath): void
    public addSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
    public removeSelectionPath(arg0: javax.swing.tree.TreePath): void
    public removeSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
    public getSelectionPath(): javax.swing.tree.TreePath
    public getSelectionPaths(): javax.swing.tree.TreePath[]
    public getSelectionCount(): int
    public isPathSelected(arg0: javax.swing.tree.TreePath): boolean
    public isSelectionEmpty(): boolean
    public clearSelection(): void
    public addTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener): void
    public removeTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener): void
    public getTreeSelectionListeners(): javax.swing.event.TreeSelectionListener[]
    protected fireValueChanged(arg0: javax.swing.event.TreeSelectionEvent): void
    public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    public getSelectionRows<T extends java.util.EventListener>(): int[]
    public getMinSelectionRow<T extends java.util.EventListener>(): int
    public getMaxSelectionRow<T extends java.util.EventListener>(): int
    public isRowSelected<T extends java.util.EventListener>(arg0: int): boolean
    public resetRowSelection<T extends java.util.EventListener>(): void
    public getLeadSelectionRow<T extends java.util.EventListener>(): int
    public getLeadSelectionPath<T extends java.util.EventListener>(): javax.swing.tree.TreePath
    public addPropertyChangeListener<T extends java.util.EventListener>(arg0: java.beans.PropertyChangeListener): void
    public removePropertyChangeListener<T extends java.util.EventListener>(arg0: java.beans.PropertyChangeListener): void
    public getPropertyChangeListeners<T extends java.util.EventListener>(): java.beans.PropertyChangeListener[]
    protected insureRowContinuity<T extends java.util.EventListener>(): void
    protected arePathsContiguous<T extends java.util.EventListener>(arg0: javax.swing.tree.TreePath[]): boolean
    protected canPathsBeAdded<T extends java.util.EventListener>(arg0: javax.swing.tree.TreePath[]): boolean
    protected canPathsBeRemoved<T extends java.util.EventListener>(arg0: javax.swing.tree.TreePath[]): boolean
    protected notifyPathChange<T extends java.util.EventListener>(arg0: java.util.Vector<any>, arg1: javax.swing.tree.TreePath): void
    protected updateLeadIndex<T extends java.util.EventListener>(): void
    protected insureUniqueness<T extends java.util.EventListener>(): void
    public toString<T extends java.util.EventListener>(): string
    public clone<T extends java.util.EventListener>(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}