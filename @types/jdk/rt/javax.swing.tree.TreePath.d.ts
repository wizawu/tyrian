declare namespace javax {
    namespace swing {
        namespace tree {
class TreePath implements java.io.Serializable {
    public constructor(arg0: java.lang.Object[])
    public constructor(arg0: java.lang.Object)
    protected constructor(arg0: javax.swing.tree.TreePath, arg1: java.lang.Object)
    protected constructor(arg0: java.lang.Object[], arg1: int)
    protected constructor()
    public getPath(): java.lang.Object[]
    public getLastPathComponent(): java.lang.Object
    public getPathCount(): int
    public getPathComponent(arg0: int): java.lang.Object
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public isDescendant(arg0: javax.swing.tree.TreePath): boolean
    public pathByAddingChild(arg0: java.lang.Object): javax.swing.tree.TreePath
    public getParentPath(): javax.swing.tree.TreePath
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}