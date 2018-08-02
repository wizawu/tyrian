declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
class Histogram {
    protected matrix: int[][]
    protected totalWeight: int
    protected values: int[]
    protected counts: int[]
    public constructor(arg0: int[])
    public constructor(arg0: int[], arg1: int, arg2: int)
    public constructor(arg0: int[][])
    public getMatrix(): int[][]
    public getRowCount(): int
    public getRowFrequency(arg0: int): int
    public getRowLength(arg0: int): int
    public getRowValue(arg0: int, arg1: int): int
    public getRowWeight(arg0: int): int
    public getTotalWeight(): int
    public getTotalLength(): int
    public getAllValues(): int[]
    public getAllFrequencies(): int[]
    public getFrequency(arg0: int): int
    public getBitLength(arg0: int): double
    public getRowBitLength(arg0: int): double
    public getBitMetric(): com.sun.java.util.jar.pack.Histogram$BitMetric
    public getBitLength(): double
    public getBitLength(arg0: com.sun.java.util.jar.pack.Histogram$BitMetric | com.sun.java.util.jar.pack.Histogram$BitMetric$$Lambda): double
    public normalizeMatrix(arg0: int[][]): int[][]
    public getRowTitles(arg0: java.lang.String | string): java.lang.String[]
    public print(arg0: java.io.PrintStream): void
    public print(arg0: java.lang.String | string, arg1: java.io.PrintStream): void
    public print(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.io.PrintStream): void
    public static makeByteHistogram(arg0: java.io.InputStream): com.sun.java.util.jar.pack.Histogram
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}