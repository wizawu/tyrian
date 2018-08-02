declare namespace javax {
    namespace swing {
class SpinnerNumberModel extends javax.swing.AbstractSpinnerModel implements java.io.Serializable {
    public constructor(arg0: java.lang.Number, arg1: java.lang.Comparable | java.lang.Comparable$$Lambda, arg2: java.lang.Comparable | java.lang.Comparable$$Lambda, arg3: java.lang.Number)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
    public constructor(arg0: double, arg1: double, arg2: double, arg3: double)
    public constructor()
    public setMinimum(arg0: java.lang.Comparable | java.lang.Comparable$$Lambda): void
    public getMinimum(): java.lang.Comparable
    public setMaximum(arg0: java.lang.Comparable | java.lang.Comparable$$Lambda): void
    public getMaximum(): java.lang.Comparable
    public setStepSize(arg0: java.lang.Number): void
    public getStepSize(): java.lang.Number
    public getNextValue(): java.lang.Object
    public getPreviousValue(): java.lang.Object
    public getNumber(): java.lang.Number
    public getValue(): java.lang.Object
    public setValue(arg0: java.lang.Object): void
    public static class: java.lang.Class<any>
}

    }
}