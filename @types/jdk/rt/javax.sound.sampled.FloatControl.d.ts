declare namespace javax {
    namespace sound {
        namespace sampled {
abstract class FloatControl extends javax.sound.sampled.Control {
    protected constructor(arg0: javax.sound.sampled.FloatControl$Type, arg1: float, arg2: float, arg3: float, arg4: int, arg5: float, arg6: java.lang.String | string, arg7: java.lang.String | string, arg8: java.lang.String | string, arg9: java.lang.String | string)
    protected constructor(arg0: javax.sound.sampled.FloatControl$Type, arg1: float, arg2: float, arg3: float, arg4: int, arg5: float, arg6: java.lang.String | string)
    public setValue(arg0: float): void
    public getValue(): float
    public getMaximum(): float
    public getMinimum(): float
    public getUnits(): string
    public getMinLabel(): string
    public getMidLabel(): string
    public getMaxLabel(): string
    public getPrecision(): float
    public getUpdatePeriod(): int
    public shift(arg0: float, arg1: float, arg2: int): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}