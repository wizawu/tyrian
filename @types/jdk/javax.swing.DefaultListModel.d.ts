declare namespace javax {
  namespace swing {
    class DefaultListModel<E> extends javax.swing.AbstractListModel<E> {
      public constructor()
      public getSize(): number
      public getElementAt(arg0: number | java.lang.Integer): E
      public copyInto(arg0: java.lang.Object[] | any[]): void
      public trimToSize(): void
      public ensureCapacity(arg0: number | java.lang.Integer): void
      public setSize(arg0: number | java.lang.Integer): void
      public capacity(): number
      public size(): number
      public isEmpty(): boolean
      public elements(): java.util.Enumeration<E>
      public contains(arg0: java.lang.Object | any): boolean
      public indexOf(arg0: java.lang.Object | any): number
      public indexOf(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): number
      public lastIndexOf(arg0: java.lang.Object | any): number
      public lastIndexOf(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): number
      public elementAt(arg0: number | java.lang.Integer): E
      public firstElement(): E
      public lastElement(): E
      public setElementAt(arg0: E, arg1: number | java.lang.Integer): void
      public removeElementAt(arg0: number | java.lang.Integer): void
      public insertElementAt(arg0: E, arg1: number | java.lang.Integer): void
      public addElement(arg0: E): void
      public removeElement(arg0: java.lang.Object | any): boolean
      public removeAllElements(): void
      public toString(): java.lang.String
      public toArray(): java.lang.Object[]
      public get(arg0: number | java.lang.Integer): E
      public set(arg0: number | java.lang.Integer, arg1: E): E
      public add(arg0: number | java.lang.Integer, arg1: E): void
      public remove(arg0: number | java.lang.Integer): E
      public clear(): void
      public removeRange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public addAll(arg0: java.util.Collection<E>): void
      public addAll(arg0: number | java.lang.Integer, arg1: java.util.Collection<E>): void
    }
  }
}
