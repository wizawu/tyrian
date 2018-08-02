declare namespace javax {
    namespace swing {
        class DefaultListModel<E> extends javax.swing.AbstractListModel<E> {
            public constructor()
            public getSize(): int
            public getElementAt(arg0: int): E
            public copyInto(arg0: java.lang.Object[]): void
            public trimToSize(): void
            public ensureCapacity(arg0: int): void
            public setSize(arg0: int): void
            public capacity(): int
            public size(): int
            public isEmpty(): boolean
            public elements(): java.util.Enumeration<E>
            public contains(arg0: java.lang.Object): boolean
            public indexOf(arg0: java.lang.Object): int
            public indexOf(arg0: java.lang.Object, arg1: int): int
            public lastIndexOf(arg0: java.lang.Object): int
            public lastIndexOf(arg0: java.lang.Object, arg1: int): int
            public elementAt(arg0: int): E
            public firstElement(): E
            public lastElement(): E
            public setElementAt(arg0: E, arg1: int): void
            public removeElementAt(arg0: int): void
            public insertElementAt(arg0: E, arg1: int): void
            public addElement(arg0: E): void
            public removeElement(arg0: java.lang.Object): boolean
            public removeAllElements(): void
            public toString(): string
            public toArray(): java.lang.Object[]
            public get(arg0: int): E
            public set(arg0: int, arg1: E): E
            public add(arg0: int, arg1: E): void
            public remove(arg0: int): E
            public clear(): void
            public removeRange(arg0: int, arg1: int): void
            public static class: java.lang.Class<any>
        }
    }
}