declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
class Map implements java.io.Serializable {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public getName(): string
    public addArea(arg0: javax.swing.text.AttributeSet): void
    public removeArea(arg0: javax.swing.text.AttributeSet): void
    public getAreas(): javax.swing.text.AttributeSet[]
    public getArea(arg0: int, arg1: int, arg2: int, arg3: int): javax.swing.text.AttributeSet
    protected createRegionContainment(arg0: javax.swing.text.AttributeSet): javax.swing.text.html.Map$RegionContainment
    protected static extractCoords(arg0: java.lang.Object): int[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}