declare namespace javax {
    namespace print {
        namespace attribute {
abstract class ResolutionSyntax implements java.io.Serializable , java.lang.Cloneable {
    public static DPI: int
    public static DPCM: int
    public constructor(arg0: int, arg1: int, arg2: int)
    public getResolution(arg0: int): int[]
    public getCrossFeedResolution(arg0: int): int
    public getFeedResolution(arg0: int): int
    public toString(arg0: int, arg1: java.lang.String | string): string
    public lessThanOrEquals(arg0: javax.print.attribute.ResolutionSyntax): boolean
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    protected getCrossFeedResolutionDphi(): int
    protected getFeedResolutionDphi(): int
    public static class: java.lang.Class<any>
}

        }
    }
}