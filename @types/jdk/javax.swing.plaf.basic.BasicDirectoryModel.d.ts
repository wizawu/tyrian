declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicDirectoryModel extends javax.swing.AbstractListModel<java.lang.Object> implements java.beans.PropertyChangeListener {

          public constructor(arg0: javax.swing.JFileChooser)
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          public invalidateFileCache(): void
          public getDirectories(): java.util.Vector<java.io.File>
          public getFiles(): java.util.Vector<java.io.File>
          public validateFileCache(): void
          public renameFile(arg0: java.io.File, arg1: java.io.File): boolean
          public fireContentsChanged(): void
          public getSize(): int
          public contains(arg0: java.lang.Object): boolean
          public indexOf(arg0: java.lang.Object): int
          public getElementAt(arg0: int): java.lang.Object
          public intervalAdded(arg0: javax.swing.event.ListDataEvent): void
          public intervalRemoved(arg0: javax.swing.event.ListDataEvent): void
          protected sort(arg0: java.util.Vector<java.io.File>): void
          protected lt(arg0: java.io.File, arg1: java.io.File): boolean
          public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
          public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
          public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
          protected firePropertyChange(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.lang.Object): void
          static access$000(arg0: javax.swing.plaf.basic.BasicDirectoryModel, arg1: java.lang.Object, arg2: int, arg3: int): void
          static access$100(arg0: javax.swing.plaf.basic.BasicDirectoryModel, arg1: java.lang.Object, arg2: int, arg3: int): void
        }

      }
    }
  }
}
