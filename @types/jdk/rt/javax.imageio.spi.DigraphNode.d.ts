declare namespace javax {
    namespace imageio {
        namespace spi {
class DigraphNode implements java.lang.Cloneable , java.io.Serializable {
    protected data: java.lang.Object
    protected outNodes: java.util.Set
    protected inDegree: int
    public constructor(arg0: java.lang.Object)
    public getData(): java.lang.Object
    public getOutNodes(): java.util.Iterator
    public addEdge(arg0: javax.imageio.spi.DigraphNode): boolean
    public hasEdge(arg0: javax.imageio.spi.DigraphNode): boolean
    public removeEdge(arg0: javax.imageio.spi.DigraphNode): boolean
    public dispose(): void
    public getInDegree(): int
    public static class: java.lang.Class<any>
}

        }
    }
}