declare namespace java {
    namespace awt {
class FlowLayout implements java.awt.LayoutManager , java.io.Serializable {
    public static LEFT: int
    public static CENTER: int
    public static RIGHT: int
    public static LEADING: int
    public static TRAILING: int
    public constructor()
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: int, arg2: int)
    public getAlignment(): int
    public setAlignment(arg0: int): void
    public getHgap(): int
    public setHgap(arg0: int): void
    public getVgap(): int
    public setVgap(arg0: int): void
    public setAlignOnBaseline(arg0: boolean): void
    public getAlignOnBaseline(): boolean
    public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
    public removeLayoutComponent(arg0: java.awt.Component): void
    public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public layoutContainer(arg0: java.awt.Container): void
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}